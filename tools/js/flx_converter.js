'use strict';
// ═══════════════════════════════════════════════════════════════════════
//  FLX / FLIC DECODER  v10
//  Source: exhaustive Ghidra analysis of FLX_Load, FLX_TickFrame,
//          RLE_Decompress, LZSS_Decompress, FLX_ApplyPaletteChunk,
//          FLX_FlushPaletteToScreen, and all 40+ caller functions.
//
//  Key facts confirmed from binary:
//
//  FRAME WALK:   Always starts at byte 128 (in-memory path: param_1[0x15]=0x80)
//  OFRAME2:      Loop-back offset only — frame[0] is always decoded first
//  LOOP FRAME:   loopFrame = frame at oframe2 offset; on wrap, re-decode from 0→loopFrame
//  SPEED:        header+16; FLI = jiffies(÷70→ms); FLC/FLX = ms directly
//  FLAGS 0x01:   New frame decoded this tick
//  FLAGS 0x04:   Animation complete (loop count exhausted) — stop playback
//  FLAGS 0x08:   Just wrapped to loop start
//  FLAGS 0x20:   Palette chunk applied → must flush palette to screen
//                (game calls SetPaletteRange_ClampedToUsableSlots; we apply immediately)
//
//  RLE (type 100): SIGNED byte comparison: (char)b >= 1 → only 1..127 are literals
//                  0x80 is NOT a literal — it is the EXTENDED opcode
//  PALETTE type 4: zeros entry 0 after applying (RTL_MemSet, confirmed in binary)
//                  type 11 does NOT zero entry 0
//  LZSS (type 104): groupCount = (b0>>3)-1; loop runs groupCount+1 times
//                   backref: back=(u16>>4)+1, len=(u16&0xF)+3
//  TYPE 102:       Dirty-rect metadata only — no pixels, safe to skip
//  TYPE 0xF1FB:    Audio prefix frame — skip entirely (no pixel chunks)
// ═══════════════════════════════════════════════════════════════════════

const MAGIC_FLI=0xAF11,MAGIC_FLC=0xAF12,MAGIC_FLX=0xAF20,MAGIC_FLX2=0xAF21;
const KNOWN=[MAGIC_FLI,MAGIC_FLC,MAGIC_FLX,MAGIC_FLX2];

class FlicDecoder {
  constructor(buf){
    this.log=[];this.buf=buf;this.view=new DataView(buf);this.u8=new Uint8Array(buf);
    this.palette=new Uint8Array(256*4);this.isValid=false;
    this.frameOffsets=[];this.frameSizes=[];this.allChunkInfo=[];
    this.loopFrame=0;this.lastFlags=0;
    this._resetPalette();
    // Detect common wrong-file cases before parsing the header
    if(this.buf.byteLength>=4&&this.view.getUint32(0,false)===0x504b583a)
      this._l('warn','PKX game archive container detected — this file is compressed. For FLX video files extract the raw FLI/FLC first. For PLX palette files use the Load PLX button.');
    if(this.buf.byteLength===1024)
      this._l('warn','File is exactly 1024 bytes — this looks like a raw PLX palette file, not an FLX video. Use the Load PLX button to load it.');
    this._parseHeader();
    if(this.isValid) this._indexFrames();
  }

  _resetPalette(){
    for(let i=0;i<256;i++){this.palette[i*4]=this.palette[i*4+1]=this.palette[i*4+2]=i;this.palette[i*4+3]=255;}
  }

  _l(lv,msg){
    const ts=new Date().toISOString().slice(11,23);
    this.log.push({ts,lv,msg});
    console[lv==='err'?'error':lv==='warn'?'warn':'log'](`[FLX ${ts}]`,msg);
  }

  _parseHeader(){
    const v=this.view,sz=this.buf.byteLength;
    if(sz<128){this._l('err',`Too small: ${sz}B`);return;}

    // §2 File Header — all fields per FLX spec
    this.fileSize    = v.getUint32(0,true);
    this.magic       = v.getUint16(4,true);
    this.frameCount  = v.getUint16(6,true);   // playable frames, NOT counting ring frame
    this.width       = v.getUint16(8,true);
    this.height      = v.getUint16(10,true);
    this.depth       = v.getUint16(12,true);   // always 8 for indexed
    this.hdrFlags    = v.getUint16(14,true);   // bit 0: has ring frame; bit 1: has oframe2
    // Speed at +16: FLI=jiffies(1/70s)→ms; FLC/FLX=ms directly; 0→70ms (§2 Speed Field Notes)
    this.speedRaw    = v.getUint32(16,true);
    this.speedMs     = this.magic===MAGIC_FLI
      ? Math.max(1, this.speedRaw ? Math.round(this.speedRaw*1000/70) : 70)
      : Math.max(1, this.speedRaw||70);
    // +22..+37: timestamps and IDs (FLC/FLX only)
    this.created     = sz>=26 ? v.getUint32(22,true) : 0;
    this.creator     = sz>=30 ? v.getUint32(26,true) : 0;
    this.updated     = sz>=34 ? v.getUint32(30,true) : 0;
    this.updater     = sz>=38 ? v.getUint32(34,true) : 0;
    this.aspectX     = sz>=40 ? v.getUint16(38,true) : 1;
    this.aspectY     = sz>=42 ? v.getUint16(40,true) : 1;
    // +42..+55: extended fields (FLC only)
    this.extFlags    = sz>=44 ? v.getUint16(42,true) : 0;
    this.keyFrames   = sz>=46 ? v.getUint16(44,true) : 0;
    this.totalFrames = sz>=48 ? v.getUint16(46,true) : 0; // includes ring frame
    this.reqMemory   = sz>=52 ? v.getUint32(48,true) : 0;
    this.maxRegions  = sz>=54 ? v.getUint16(52,true) : 0;
    this.transpNum   = sz>=56 ? v.getUint16(54,true) : 0;
    // +80,+84: oframe1/oframe2 (§2 oframe1/oframe2 Usage)
    this.oframe1     = sz>=84 ? v.getUint32(80,true) : 128; // file-streaming seek only
    this.oframe2     = sz>=88 ? v.getUint32(84,true) : 0;   // loop-back target
    this.palBits     = sz>=90 ? v.getUint16(88,true) : 0;
    // Frame walk ALWAYS starts at byte 128 for in-memory mode (FLX_Load: param_1[0x15]=0x80)
    this.walkStart   = 128;

    // Decode hdrFlags bit meanings per spec §2
    this.hasRingFrame = !!(this.hdrFlags & 0x01);
    this.hasOframe2   = !!(this.hdrFlags & 0x02);

    if(!KNOWN.includes(this.magic)){
      // Give specific messages for common wrong-file cases
      const m=this.magic;
      if(m===0x1966||m===0x1001){
        this._l('err',`Bad magic 0x${m.toString(16).toUpperCase()} — this looks like a PKX-compressed container (.plx or .flx wrapped by the game engine). Use the Load PLX button for palette files, or extract the raw FLI/FLC first.`);
      } else if(sz===1024){
        this._l('err',`Bad magic 0x${m.toString(16).toUpperCase()} — file is 1024 bytes, which matches a raw PLX palette. Use the Load PLX button to load it.`);
      } else {
        this._l('err',`Bad magic 0x${m.toString(16).toUpperCase()} — not a valid FLIC file (expected 0xAF11/AF12/AF20/AF21)`);
      }
      return;
    }
    if(!this.width||!this.height){this._l('err',`Bad dims ${this.width}×${this.height}`);return;}
    if(this.fileSize!==sz) this._l('warn',`Header fileSize=${this.fileSize} actual=${sz}`);

    this._l('info',`${this.formatName()} ${this.width}×${this.height} depth=${this.depth} frameCount=${this.frameCount}`);
    this._l('info',`speed(+16)=${this.speedRaw}raw → ${this.speedMs}ms/frame (${(1000/this.speedMs).toFixed(1)}fps)`);
    this._l('info',`flags(+14)=0x${this.hdrFlags.toString(16).padStart(4,'0')} → hasRingFrame=${this.hasRingFrame} hasOframe2=${this.hasOframe2}`);
    this._l('info',`oframe1=0x${this.oframe1.toString(16)} oframe2=0x${this.oframe2.toString(16)}`);
    if(this.aspectX||this.aspectY) this._l('info',`aspectX=${this.aspectX} aspectY=${this.aspectY}`);
    if(this.totalFrames) this._l('info',`totalFrames(incl.ring)=${this.totalFrames} keyFrames=${this.keyFrames} reqMemory=${this.reqMemory}`);
    this.isValid=true;
  }

  _indexFrames(){
    const v=this.view,sz=this.buf.byteLength;
    let pos=this.walkStart,count=0;
    const max=this.frameCount+8;
    this._l('info',`Indexing from 0x${pos.toString(16)}, file=0x${sz.toString(16)}`);

    while(pos+16<=sz&&count<max){
      const fsize =v.getUint32(pos,true);
      const fmagic=v.getUint16(pos+4,true);
      const fnchk =v.getUint16(pos+6,true);
      if(!fsize){this._l('warn',`Zero-size frame at 0x${pos.toString(16)}, stop`);break;}
      if(fsize>sz-pos){
        this._l('warn',`Frame[${count}] at 0x${pos.toString(16)}: size ${fsize} > remaining ${sz-pos}`);
        if(fmagic===0xF1FA){this.frameOffsets.push(pos);this.frameSizes.push(sz-pos);count++;}
        break;
      }
      if(fmagic===0xF1FA){
        this._l('info',`Frame[${count}] @ 0x${pos.toString(16)}: size=${fsize} chunks=${fnchk}`);
        this.frameOffsets.push(pos);this.frameSizes.push(fsize);count++;
      } else if(fmagic===0xF1FB){
        // Audio/prefix frame — no pixel data, skip entirely (confirmed from spec)
        this._l('info',`Frame[${count}] @ 0x${pos.toString(16)}: 0xF1FB audio prefix, size=${fsize}, skipping`);
      } else {
        this._l('warn',`Frame[${count}] @ 0x${pos.toString(16)}: unknown magic 0x${fmagic.toString(16).padStart(4,'0')}`);
      }
      pos+=fsize; count+=(fmagic!==0xF1FA&&fmagic!==0xF1FB)?0:0;
      // Note: count only incremented for 0xF1FA above
    }

    if(!this.frameOffsets.length){this._l('err','No valid frames (0xF1FA) found');this.isValid=false;return;}

    // Find loop frame by matching oframe2 to frame offsets
    // oframe2 = loop-back target; frame[0] is ALWAYS decoded first regardless
    this.loopFrame=0;
    if(this.oframe2>128&&this.oframe2<this.buf.byteLength){
      const idx=this.frameOffsets.indexOf(this.oframe2);
      if(idx>=0){this.loopFrame=idx;this._l('info',`oframe2 → loopFrame=${idx}`);}
      else this._l('warn',`oframe2=0x${this.oframe2.toString(16)} not found in frame offsets`);
    }

    if(this.frameOffsets.length!==this.frameCount)
      this._l('warn',`Header frameCount=${this.frameCount}, indexed ${this.frameOffsets.length} — ${this.frameOffsets.length>this.frameCount?`extra ring frame at index ${this.frameCount} will be excluded from playback`:'fewer than declared'}`);
    else
      this._l('info',`Indexed ${this.frameOffsets.length} frames, loopFrame=${this.loopFrame}`);
  }

  indexAllChunks(){
    this.allChunkInfo=[];
    for(let f=0;f<this.frameOffsets.length;f++) this.allChunkInfo.push(this._readChunkHeaders(f));
  }

  _readChunkHeaders(fi){
    const base=this.frameOffsets[fi],fsize=this.frameSizes[fi],v=this.view,chunks=[];
    const nc=v.getUint16(base+6,true);
    let pos=base+16;
    for(let c=0;c<nc&&pos+6<=base+fsize;c++){
      const cs=v.getUint32(pos,true),ct=v.getUint16(pos+4,true);
      if(!cs||cs>fsize) break;
      chunks.push({type:ct,size:cs,offset:pos,ok:true,error:null});
      pos+=cs;
    }
    return chunks;
  }

  // Returns flags bitfield (mirrors FLX_UpdateAndBlit return):
  //   0x01 = new frame decoded
  //   0x04 = animation complete (loop count 0) — not tracked here, caller decides
  //   0x20 = palette chunk was applied this frame
  decodeFrame(fi,pixels){
    if(fi>=this.frameOffsets.length) return [];
    const base=this.frameOffsets[fi],fsize=this.frameSizes[fi];
    const v=this.view,W=this.width,H=this.height;
    const nc=v.getUint16(base+6,true);
    const info=[];
    let pos=base+16;
    let flags=0x01; // 0x01: frame decoded

    for(let c=0;c<nc&&pos+6<=base+fsize;c++){
      const cs=v.getUint32(pos,true),ct=v.getUint16(pos+4,true);
      if(!cs||pos+cs>base+fsize+4){
        info.push({type:ct,name:this.cn(ct),size:cs,ok:false,error:`bad size ${cs} @0x${pos.toString(16)}`});
        this._l('err',`F${fi}C${c}[${this.cn(ct)}]: bad chunk size ${cs}`);
        break;
      }
      let ok=true,error=null,palApplied=false;
      try{palApplied=this._applyChunk(ct,pos+6,cs-6,pixels,W,H,fi,c);}
      catch(e){ok=false;error=e.message;this._l('err',`F${fi}C${c}[${this.cn(ct)}]: ${e.message}`);}
      if(palApplied) flags|=0x20; // 0x20: palette was updated this frame
      info.push({type:ct,name:this.cn(ct),size:cs,ok,error});
      pos+=cs;
    }
    this.lastFlags=flags;
    return info;
  }

  // Returns true if a palette chunk was applied
  _applyChunk(type,doff,dlen,pixels,W,H,fi,ci){
    switch(type){
      // Standard FLIC types
      case 4:  this._pal256(doff,dlen,fi,ci,true);  return true;  // 8-bit palette, zeros entry 0
      case 7:  this._deltaFLI(doff,dlen,pixels,W,H,fi,ci); return false;
      case 11: this._pal256(doff,dlen,fi,ci,false); return true;  // 6-bit palette, does NOT zero entry 0
      case 13: pixels.fill(0); return false;  // BLACK: fill with index 0
      case 15: this._deltaFLC(doff,dlen,pixels,W,H,fi,ci); return false;
      case 16: this._fullRLE_std(doff,dlen,pixels,W,H,fi,ci); return false;
      case 18: pixels.set(this.u8.subarray(doff,doff+Math.min(W*H,dlen))); return false; // COPY
      case 19: return false; // MINI thumbnail — ignore

      // Game-engine-specific types (FLX 0xAF20/21 only)
      case 100: this._gameRLE(doff,dlen,pixels,W,H,fi,ci); return false;  // full-frame RLE
      case 101: this._gameRLEdelta(doff,dlen,pixels,W,H,fi,ci); return false; // RLE+blit offset
      case 102: return false; // DIRTY_RECT: metadata only, no pixels (DirtyRect_MarkRegionFromXYWH)
      case 104: this._lzssRLE(doff,dlen,pixels,W,H,fi,ci); return false;  // LZSS then RLE

      default: this._l('warn',`F${fi}C${ci}: unknown chunk type ${type} (0x${type.toString(16)})`); return false;
    }
  }

  _chk(off,len,ctx){
    if(off<0||off+len>this.buf.byteLength)
      throw new Error(`read [0x${off.toString(16)}+${len}) OOB (file=0x${this.buf.byteLength.toString(16)})`);
  }

  // ── Type 4/11: Palette ───────────────────────────────────────────────
  // is8bit=true  → Type 4 (FLC/FLX): 8-bit RGB; zeros entry 0 after applying (RTL_MemSet)
  // is8bit=false → Type 11 (FLI): 6-bit RGB shifted <<2; does NOT zero entry 0
  _pal256(off,dlen,fi,ci,is8bit){
    this._chk(off,2,`F${fi}C${ci}`);
    const v=this.view,u8=this.u8;
    const np=v.getInt16(off,true); // signed, per game binary
    let pos=off+2,idx=0;
    this._l('info',`F${fi}C${ci}[PAL${is8bit?256:64}]: ${np} packets`);
    for(let p=0;p<np;p++){
      this._chk(pos,2,`F${fi}C${ci}`);
      idx+=u8[pos++]; let cnt=u8[pos++]; if(!cnt)cnt=256;
      this._chk(pos,cnt*3,`F${fi}C${ci}`);
      for(let i=0;i<cnt;i++){
        const b=((idx+i)&255)*4;
        const r=u8[pos++],g=u8[pos++],bv=u8[pos++];
        this.palette[b]   =is8bit?r:(r<<2);
        this.palette[b+1] =is8bit?g:(g<<2);
        this.palette[b+2] =is8bit?bv:(bv<<2);
        this.palette[b+3] =255;
      }
      idx=(idx+cnt)&255;
    }
    // Type 4 ONLY: game calls RTL_MemSet(palette_ptr, 0, 4) after applying
    // This forces palette entry 0 to (0,0,0,0) — confirmed in FLX_ApplyPaletteChunk
    if(is8bit){this.palette[0]=this.palette[1]=this.palette[2]=0;}
    this._l('info',`  pal[0]=(${this.palette[0]},${this.palette[1]},${this.palette[2]}) pal[1]=(${this.palette[4]},${this.palette[5]},${this.palette[6]}) pal[255]=(${this.palette[255*4]},${this.palette[255*4+1]},${this.palette[255*4+2]})`);
  }

  // ── Type 16: Standard FLC full-frame RLE ────────────────────────────
  // Per-line: skip packet-count prefix byte, then signed-count packets
  _fullRLE_std(off,dlen,pixels,W,H,fi,ci){
    this._chk(off,dlen,`F${fi}C${ci}`);
    const u8=this.u8; let pos=off,end=off+dlen,pixPos=0,written=0;
    for(let y=0;y<H;y++){
      if(pos>=end) throw new Error(`EOF row ${y}/${H} (wrote ${written})`);
      pos++; // skip per-line packet-count byte (FLC convention)
      let x=0;
      while(x<W){
        if(pos>=end) throw new Error(`EOF y=${y} x=${x}`);
        const cnt=(u8[pos++]<<24)>>24; // sign-extend i8
        if(cnt>0){const n=Math.min(cnt,W-x);if(pos+cnt>end)throw new Error(`lit OOB y=${y}`);pixels.set(u8.subarray(pos,pos+n),pixPos+x);pos+=cnt;x+=n;written+=n;}
        else if(cnt<0){const r=Math.min(-cnt,W-x);if(pos>=end)throw new Error(`RLE EOF y=${y}`);pixels.fill(u8[pos++],pixPos+x,pixPos+x+r);x+=r;written+=r;}
        else break; // cnt==0: end of line
      }
      pixPos+=W;
    }
    this._l('info',`F${fi}C${ci}[FULL_RLE]: wrote ${written}/${W*H}`);
  }

  // ── Type 100: Game RLE — confirmed from RLE_Decompress binary trace ──
  // Continuous stream, NO per-line framing.
  // CRITICAL: (char)b >= 1 is SIGNED comparison — 0x80 (128 unsigned) is NEGATIVE as signed
  // and must fall through to the 0x80 EXTENDED branch, not the literal branch.
  _gameRLE(off,dlen,pixels,W,H,fi,ci){
    this._chk(off,dlen,`F${fi}C${ci}`);
    const u8=this.u8; let pos=off,end=off+dlen,out=0,total=W*H;
    let nLit=0,nRle=0,nSkip=0,nExt=0;

    outer: while(out<total){
      if(pos>=end) throw new Error(`EOF out=${out}/${total} lit=${nLit} rle=${nRle} skip=${nSkip} ext=${nExt}`);
      const b=u8[pos];
      const bSigned=b<128?b:b-256; // interpret as signed byte (C 'char')

      if(bSigned>=1){
        // LITERAL: b in 1..127 as unsigned (positive as signed char)
        // count = b & 0x3FFF; then copy count bytes following
        const count=b&0x3FFF;
        pos++; // advance past count byte
        const n=Math.min(count,total-out);
        if(pos+count>end) throw new Error(`literal OOB out=${out} count=${count}`);
        pixels.set(u8.subarray(pos,pos+n),out);
        pos+=count; out+=n; nLit++;

      } else if(b===0){
        // RLE FILL: count=nextByte&0x3FFF, value=byte after that
        if(pos+2>=end) throw new Error(`RLE EOF out=${out}`);
        const count=u8[pos+1]&0x3FFF;
        const val=u8[pos+2];
        pos+=3;
        const n=Math.min(count,total-out);
        pixels.fill(val,out,out+n); out+=n; nRle++;

      } else if(b===0x80){
        // EXTENDED: read signed i16 from next 2 bytes
        // pbVar3 = pos+1 (next byte ptr in binary); pbVar3 = param2+3 after reading
        if(pos+3>end) throw new Error(`ext i16 EOF out=${out}`);
        const v_raw=u8[pos+1]|(u8[pos+2]<<8);
        const v_signed=(v_raw<<16)>>16; // sign-extend 16-bit to 32-bit
        pos+=3; // advance past 0x80 and the 2 i16 bytes
        nExt++;

        if(v_signed===0){
          break outer; // END OF FRAME (return in binary)
        } else if(v_signed>=1){
          // SKIP v_signed output pixels (transparent delta)
          out+=Math.min(v_signed,total-out); nSkip++;
        } else {
          // v_signed < 0: uMasked = (uint16)v & 0x7FFF
          const uMasked=v_raw&0x7FFF;
          if(uMasked<0x4000){
            // LITERAL run of uMasked bytes
            const n=Math.min(uMasked,total-out);
            if(pos+uMasked>end) throw new Error(`ext-lit OOB out=${out}`);
            pixels.set(u8.subarray(pos,pos+n),out);
            pos+=uMasked; out+=n; nLit++;
          } else {
            // RLE FILL: count=(uMasked&0x3FFF), value=next byte
            const count=uMasked&0x3FFF;
            if(pos>=end) throw new Error(`ext-rle val EOF out=${out}`);
            const val=u8[pos++];
            const n=Math.min(count,total-out);
            pixels.fill(val,out,out+n); out+=n; nRle++;
          }
        }

      } else {
        // SKIP: b in 0x81..0xFF (129..255 unsigned; -127..-1 signed)
        // Advance output by (b & 0x7F) pixels; consume only the opcode byte
        const skip=b&0x7F;
        pos++; // advance past the skip byte only (no data bytes follow)
        out+=Math.min(skip,total-out); nSkip++;
      }
    }
    this._l('info',`F${fi}C${ci}[GAME_RLE]: out=${out}/${total} lit=${nLit} rle=${nRle} skip=${nSkip} ext=${nExt}`);
    if(out<total) this._l('warn',`F${fi}C${ci}[GAME_RLE]: wrote only ${out}/${total} — delta frame (expected if early END)`);
  }

  // ── Type 101: Game RLE with XY blit offset ────────────────────────────
  // first 8 bytes: u32 destX, u32 destY; then game RLE stream
  // The blit is a composite onto the surface at (destX,destY).
  // For a standalone player decoding into a single pixel buffer, we decode
  // the RLE stream directly into pixels (same surface = same result, since
  // SKIP opcodes preserve existing pixels and the blit would overwrite anyway).
  _gameRLEdelta(off,dlen,pixels,W,H,fi,ci){
    this._chk(off,8,`F${fi}C${ci}`);
    const v=this.view;
    const dx=v.getUint32(off,true),dy=v.getUint32(off+4,true);
    this._l('info',`F${fi}C${ci}[GAME_RLE_DELTA]: dest=(${dx},${dy}), decoding into full surface`);
    // Decode RLE at offset into the pixel buffer
    // In the original engine this decodes to a temp buffer then blits at (dx,dy).
    // For our purposes (single surface), decode directly — SKIP ops leave existing pixels intact.
    if(dlen>8) this._gameRLE(off+8,dlen-8,pixels,W,H,fi,ci);
  }

  // ── Type 104: LZSS then Game RLE ─────────────────────────────────────
  // Stage 1: LZSS_Decompress → scratch buffer
  // Stage 2: RLE_Decompress(pixel_surface, scratch)
  // LZSS scratch buffer size confirmed: FLX_AllocGlobalScratchBuffers allocates
  // 64000 bytes in most contexts. For 640×480 frames we need 307200 bytes.
  _lzssRLE(off,dlen,pixels,W,H,fi,ci){
    this._chk(off,dlen,`F${fi}C${ci}`);
    const scratch=this._lzssDecode(off,dlen,fi,ci);
    this._l('info',`F${fi}C${ci}[LZSS_RLE]: LZSS expanded ${dlen}→${scratch.length}B, feeding gameRLE`);
    const savedBuf=this.buf,savedU8=this.u8;
    this.buf=scratch.buffer; this.u8=scratch;
    try{this._gameRLE(0,scratch.length,pixels,W,H,fi,ci);}
    finally{this.buf=savedBuf;this.u8=savedU8;}
  }

  // ── LZSS_Decompress — exact trace from binary ─────────────────────────
  // Header byte b0:
  //   b0 >= 8: groupCount=(b0>>3)-1; data starts at src[1]
  //   b0 < 8:  cnt16=u16le(src[1..2]); if 0xFFFF use u32le; data at src[3] or src[7]
  // Loop runs groupCount+1 times. Each iteration:
  //   ctrl==0: raw copy 8 bytes
  //   else: 8 bits MSB-first: 0=literal, 1=backref(u16: back=(>>4)+1, len=(&0xF)+3)
  _lzssDecode(off,dlen,fi,ci){
    const u8=this.u8,end=off+dlen;
    const out=[];
    let p=off;
    const b0=u8[p++];
    let groupCount,dataStart;
    if(b0>=8){
      groupCount=(b0>>3)-1;
      dataStart=p;
    } else {
      const cnt16=u8[p]|(u8[p+1]<<8); p+=2;
      if(cnt16===0xFFFF){
        groupCount=u8[p]|(u8[p+1]<<8)|(u8[p+2]<<16)|(u8[p+3]<<24); p+=4;
      } else {groupCount=cnt16;}
      dataStart=p;
    }
    p=dataStart;

    for(let g=0;g<=groupCount&&p<end;g++){
      const ctrl=u8[p++];
      if(ctrl===0){
        // Raw copy 8 bytes
        for(let i=0;i<8&&p<end;i++) out.push(u8[p++]);
        continue;
      }
      let bits=ctrl;
      for(let b=0;b<8&&p<end;b++){
        const bit=(bits&0x80)!==0; bits<<=1;
        if(bit){
          // BACKREF: u16le, back=(u16>>4)+1, len=(u16&0xF)+3
          if(p+2>end) break;
          const u16=u8[p]|(u8[p+1]<<8); p+=2;
          const back=(u16>>4)+1,len=(u16&0xF)+3;
          for(let i=0;i<len;i++) out.push(out.length>=back?out[out.length-back]:0);
        } else {
          // LITERAL
          if(p<end) out.push(u8[p++]);
        }
      }
    }
    this._l('info',`F${fi}C${ci}[LZSS]: groups=${groupCount+1} decoded ${out.length}B from ${dlen}B compressed`);
    return new Uint8Array(out);
  }

  // ── Type 15: FLC byte-run delta ───────────────────────────────────────
  _deltaFLC(off,dlen,pixels,W,H,fi,ci){
    this._chk(off,4,`F${fi}C${ci}`);
    const v=this.view,u8=this.u8,end=off+dlen;
    let pos=off;
    const lc=v.getUint16(pos,true);pos+=2;
    let y=v.getUint16(pos,true);pos+=2;
    for(let l=0;l<lc&&y<H;l++,y++){
      if(pos>=end) throw new Error(`EOF line ${l}`);
      const pc=u8[pos++],rb=y*W;let x=0;
      for(let p=0;p<pc;p++){
        if(pos+2>end) throw new Error(`pkt OOB l=${l}`);
        x+=u8[pos++];const cnt=(u8[pos++]<<24)>>24;
        if(cnt>0){const n=Math.min(cnt,W-x);if(pos+cnt>end)throw new Error(`lit OOB`);pixels.set(u8.subarray(pos,pos+n),rb+x);pos+=cnt;x+=n;}
        else if(cnt<0){const r=Math.min(-cnt,W-x);if(pos>=end)throw new Error(`RLE EOF`);pixels.fill(u8[pos++],rb+x,rb+x+r);x+=r;}
      }
    }
  }

  // ── Type 7: FLI word-delta ────────────────────────────────────────────
  _deltaFLI(off,dlen,pixels,W,H,fi,ci){
    this._chk(off,2,`F${fi}C${ci}`);
    const v=this.view,u8=this.u8,end=off+dlen;
    let pos=off;const lc=v.getUint16(pos,true);pos+=2;let y=0;
    for(let l=0;l<lc&&y<H;){
      if(pos+2>end) throw new Error(`EOF l=${l}`);
      let word=v.getInt16(pos,true);pos+=2;
      while(word<0){
        const t=(word>>14)&3;
        if(t===2)y+=(-word)&0x3FFF;
        else if(t===3&&y<H)pixels[y*W+W-1]=word&0xFF;
        if(pos+2>end){word=0;break;}word=v.getInt16(pos,true);pos+=2;
      }
      const pc=word,rb=y*W;let x=0;
      for(let p=0;p<pc;p++){
        if(pos+2>end) throw new Error(`pkt OOB`);
        x+=u8[pos++];const cnt=(u8[pos++]<<24)>>24;
        if(cnt>0){for(let i=0;i<cnt;i++){if(pos+2>end)throw new Error('lit OOB');if(x<W)pixels[rb+x++]=u8[pos++];else pos++;if(x<W)pixels[rb+x++]=u8[pos++];else pos++;}}
        else if(cnt<0){if(pos+2>end)throw new Error('RLE OOB');const lo=u8[pos++],hi=u8[pos++];for(let i=0;i<-cnt;i++){if(x<W)pixels[rb+x++]=lo;if(x<W)pixels[rb+x++]=hi;}}
      }
      y++;l++;
    }
  }

  // ── Indexed → RGBA ────────────────────────────────────────────────────
  // The game renders via WinG (Windows Graphics library), which uses bottom-up
  // DIB pixel buffers — a fundamental property of Windows DIBs confirmed from
  // FUN_004806a0 calling WinGRecommendDIBFormat. The RLE decoder writes pixels
  // top-to-bottom into memory (row 0 = first byte), but WinG displays the buffer
  // with row 0 at the BOTTOM of the screen. So the FLX pixel data is stored
  // with the visual top of the image at the END of the buffer, not the start.
  // We must reverse the row order when converting to canvas ImageData (which
  // is always top-down) to produce the correct orientation.
  // flipV: mirror top-bottom (on top of the WinG bottom-up flip)
  toRGBA(pixels,rgba,flipV=false){
    const p=this.palette,W=this.width,H=this.height;
    for(let y=0;y<H;y++){
      // WinG bottom-up: read last row first, unless flipV overrides that
      const srcY = flipV ? y : (H-1-y);
      const srcRow = srcY*W;
      const dstRow = y*W;
      for(let x=0;x<W;x++){
        const b=pixels[srcRow+x]*4, o=(dstRow+x)*4;
        rgba[o]=p[b]; rgba[o+1]=p[b+1]; rgba[o+2]=p[b+2]; rgba[o+3]=255;
      }
    }
  }

  hexDump(off,len){
    const u8=this.u8,rows=[];
    const end=Math.min(off+len,this.buf.byteLength);
    for(let i=off;i<end;i+=16){
      const bs=Array.from(u8.subarray(i,Math.min(i+16,end)));
      rows.push({off:i,hex:bs.map(b=>b.toString(16).padStart(2,'0')).join(' ').padEnd(47,' '),
                 asc:bs.map(b=>(b>=32&&b<127)?String.fromCharCode(b):'.').join('')});
    }
    return rows;
  }

  diagnosticDump(){
    const L=['=== FLX PLAYER v12 DIAGNOSTIC DUMP ===',
      `File: ${this.buf.byteLength}B (0x${this.buf.byteLength.toString(16)})`,
      `Magic: 0x${this.magic?.toString(16).toUpperCase()} → ${this.formatName?.()??'?'}`,
      `Dims: ${this.width}×${this.height} depth=${this.depth}`,
      `frameCount(+6): ${this.frameCount}  totalFrames(+46): ${this.totalFrames}`,
      `keyFrames(+44): ${this.keyFrames}  reqMemory(+48): ${this.reqMemory}`,
      `hdrFlags(+14): 0x${this.hdrFlags?.toString(16).padStart(4,'0')} → hasRingFrame=${this.hasRingFrame} hasOframe2=${this.hasOframe2}`,
      `speedRaw(+16): ${this.speedRaw} → ${this.speedMs}ms/frame`,
      `aspectX(+38): ${this.aspectX}  aspectY(+40): ${this.aspectY}`,
      `oframe1(+80): 0x${this.oframe1?.toString(16)}  oframe2(+84): 0x${this.oframe2?.toString(16)}`,
      `creator(+26): 0x${this.creator?.toString(16).toUpperCase()}  created(+22): ${this.created}`,
      `walkStart: 0x${this.walkStart?.toString(16)} (always 128)`,
      `Indexed: ${this.frameOffsets.length} frames, loopFrame=${this.loopFrame}`,
      '--- File header hex (bytes 0-127) ---'];
    this.hexDump(0,128).forEach(r=>L.push(`${r.off.toString(16).padStart(4,'0')}: ${r.hex} |${r.asc}|`));
    for(let i=0;i<Math.min(3,this.frameOffsets.length);i++){
      L.push(`--- Frame[${i}] @ 0x${this.frameOffsets[i].toString(16)} (bytes 0-63) ---`);
      this.hexDump(this.frameOffsets[i],64).forEach(r=>L.push(`${r.off.toString(16).padStart(4,'0')}: ${r.hex} |${r.asc}|`));
    }
    L.push('--- Frame offsets ---');
    L.push(this.frameOffsets.map((o,i)=>`[${i}]=0x${o.toString(16)}`).join(' '));
    L.push('--- Parse log ---');
    this.log.forEach(({ts,lv,msg})=>L.push(`[${ts}] ${lv.toUpperCase()}: ${msg}`));
    L.push('=== END DUMP ===');
    return L.join('\n');
  }

  formatName(){return{[MAGIC_FLI]:'FLI (Animator)',[MAGIC_FLC]:'FLC (Animator Pro)',[MAGIC_FLX]:'FLX (Game A)',[MAGIC_FLX2]:'FLX2 (Game B)'}[this.magic]||`0x${this.magic?.toString(16)??'?'}`;}
  cn(t){return{4:'COLOR_256',7:'DELTA_FLI',11:'COLOR_64',13:'BLACK',15:'DELTA_FLC',16:'FULL_RLE',18:'COPY',19:'MINI',100:'GAME_RLE',101:'GAME_RLE_DELTA',102:'DIRTY_RECT',104:'LZSS→RLE'}[t]||`TYPE_${t}`;}
}

// ═══════════════════════════════════════════════════════════════════════
//  PLAYER UI
// ═══════════════════════════════════════════════════════════════════════
const $=id=>document.getElementById(id);
const canvas=$('cv'),ctx2d=canvas.getContext('2d');
const dz=$('drop-zone'),cw=$('flx-canvas-wrap');
const scrub=$('scrub'),fc=$('frame-counter'),pb=$('play-btn');
const et=$('et'),fb=$('fmt-badge'),wb=$('wb'),eb=$('eb'),xb=$('export-btn');

let dec=null,pixels=null,idata=null;
let srcFileName='flx';  // base name of the loaded file, used for all exports
const SS_MIN=10,SS_MAX=1000;
let cur=0,playing=false,rafId=null,lastT=0,curSpeedMs=70;
let curChunks=[];
let flipV=false;  // user-controlled flip override
let zipCancelled=false;
let uploadedPlxPalette=null;  // Uint8Array[1024] when a PLX has been loaded, null otherwise
let paletteSwatches=null;  // cached array of 256 swatch <div> elements for the Palette tab

document.querySelectorAll('.tab').forEach(t=>{
  t.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(x=>x.classList.remove('active'));
    t.classList.add('active');$('tab-'+t.dataset.tab).classList.add('active');
    if(t.dataset.tab==='palette')updatePaletteGrid();
  });
});

function toast(msg,ms=5000){et.textContent=msg;et.style.display='block';clearTimeout(toast._t);toast._t=setTimeout(()=>et.style.display='none',ms);}

function loadFile(f){
  // Store the filename stem (no extension) for use in all exports
  srcFileName = f.name.replace(/\.[^.]+$/, '') || 'flx';
  const r=new FileReader();
  r.onload=e=>{
    try{
      let buf=e.target.result;
      const u8=new Uint8Array(buf);
      // Auto-detect and decompress PKX container
      // PKX magic: 0x3A584B50 'PKX:' at byte 0 (little-endian u32)
      if(u8.length>=24 && u8[0]===0x50&&u8[1]===0x4b&&u8[2]===0x58&&u8[3]===0x3a){
        const dv=new DataView(buf);
        const compType=dv.getUint32(12,true);
        const rawSize =dv.getUint32(20,true);
        const payload =u8.subarray(24);
        console.log(`[PKX] compType=0x${compType.toString(16)} rawSize=${rawSize} payloadSize=${payload.length}`);
        const decompressed=pkxDecompress(compType,payload,rawSize);
        if(!decompressed||decompressed.length!==rawSize){
          toast(`PKX decompression failed: got ${decompressed?.length??0} bytes, expected ${rawSize}`);
          return;
        }
        buf=decompressed.buffer;
        toast(`PKX decompressed: ${u8.length.toLocaleString()} → ${rawSize.toLocaleString()} bytes`);
      }
      init(buf);
    }catch(err){toast('Fatal: '+err.message);console.error(err);}
  };
  r.readAsArrayBuffer(f);
}

// PKX decompressor matching DecompressResourceData_Dispatch in binary.
// compType: 0xE=LZSS, 0xC=game RLE, two-pass: (hi nibble first, lo nibble second)
// magic3 variants: 0x9BAEB0CF and 0x9BAEBACF both valid (seen in the wild).
function pkxDecompress(compType, payload, rawSize){
  const comp_hi=(compType>>4)&0xF;
  const comp_lo=compType&0xF;
  try{
    if(comp_hi===0&&comp_lo===0xE) return pkxLZSS(payload);           // 0xE: LZSS only
    if(comp_hi===0&&comp_lo===0xC) return pkxRLE(payload, rawSize);    // 0xC: RLE only
    if(comp_hi&&comp_lo){                                               // two-pass
      const first = comp_hi===0xE ? pkxLZSS(payload) : pkxRLE(payload, rawSize*4);
      if(!first){console.error('PKX two-pass first stage failed');return null;}
      console.log(`[PKX] two-pass: after first stage ${first.length} bytes`);
      return comp_lo===0xC ? pkxRLE(first, rawSize) : pkxLZSS(first);
    }
    // Fallback: try LZSS then RLE
    console.warn(`[PKX] unknown compType 0x${compType.toString(16)}, trying LZSS`);
    return pkxLZSS(payload);
  }catch(e){console.error('[PKX] decompression error:',e);return null;}
}

// LZSS decompressor — matches _lzssDecode in FlicDecoder exactly
function pkxLZSS(src){
  const b0=src[0];
  let groupCount, p;
  if(b0>=8){groupCount=(b0>>3)-1;p=1;}
  else{
    const cnt16=src[1]|(src[2]<<8);
    if(cnt16===0xFFFF){groupCount=src[3]|(src[4]<<8)|(src[5]<<16)|(src[6]<<24);p=7;}
    else{groupCount=cnt16;p=3;}
  }
  const out=[];
  for(let g=0;g<=groupCount&&p<src.length;g++){
    const ctrl=src[p++];
    if(ctrl===0){for(let i=0;i<8&&p<src.length;i++)out.push(src[p++]);continue;}
    let bits=ctrl;
    for(let b=0;b<8&&p<src.length;b++){
      const bit=(bits&0x80)!==0;bits<<=1;
      if(bit){
        if(p+2>src.length)break;
        const u16=src[p]|(src[p+1]<<8);p+=2;
        const back=(u16>>4)+1,len=(u16&0xF)+3;
        for(let i=0;i<len;i++)out.push(out.length>=back?out[out.length-back]:0);
      }else{out.push(src[p++]);}
    }
  }
  return new Uint8Array(out);
}

// Game RLE decompressor — matches RLE_Decompress binary
function pkxRLE(src, rawSize){
  const out=new Uint8Array(rawSize);
  let p=0,o=0;
  while(o<rawSize&&p<src.length){
    const b=src[p];
    const bs=b<128?b:b-256;
    if(bs>=1){const n=Math.min(b&0x3FFF,rawSize-o);p++;out.set(src.subarray(p,p+n),o);p+=b&0x3FFF;o+=n;}
    else if(b===0){if(p+2>=src.length)break;const c=Math.min(src[p+1]&0x3FFF,rawSize-o);out.fill(src[p+2],o,o+c);p+=3;o+=c;}
    else if(b===0x80){if(p+3>src.length)break;const vr=src[p+1]|(src[p+2]<<8);const vs=(vr<<16)>>16;p+=3;
      if(vs===0)break;
      else if(vs>=1){o+=Math.min(vs,rawSize-o);}
      else{const uM=vr&0x7FFF;if(uM<0x4000){const n=Math.min(uM,rawSize-o);out.set(src.subarray(p,p+n),o);p+=uM;o+=n;}
        else{const c=Math.min(uM&0x3FFF,rawSize-o);if(p<src.length)out.fill(src[p++],o,o+c);o+=c;}}}
    else{o+=Math.min(b&0x7F,rawSize-o);p++;}
  }
  return out;
}

function init(buf){
  const d=new FlicDecoder(buf);
  const errs=d.log.filter(l=>l.lv==='err').length;
  const warns=d.log.filter(l=>l.lv==='warn').length;
  wb.hidden=!warns;eb.hidden=!errs;
  wb.textContent=`${warns}w`;eb.textContent=`${errs}e`;

  if(!d.isValid){
    fb.className='badge err';fb.textContent='INVALID';
    toast(d.log.filter(l=>l.lv==='err').pop()?.msg||'Invalid file');
    dec=d;return;
  }

  dec=d;
  uploadedPlxPalette=null;
  $('plx-load-label').style.borderColor='';
  $('plx-load-label').style.color='';
  $('plx-load-label').title='Load a .PLX palette file and apply it to playback';
  pixels=new Uint8Array(d.width*d.height);
  idata=new ImageData(d.width,d.height);
  canvas.width=d.width;canvas.height=d.height;
  d.indexAllChunks();

  scrub.min=0;scrub.max=Math.max(0,d.frameOffsets.length-1);scrub.value=0;
  cur=0;

  fb.className='badge ok';
  fb.textContent={[MAGIC_FLI]:'FLI',[MAGIC_FLC]:'FLC',[MAGIC_FLX]:'FLX',[MAGIC_FLX2]:'FLX2'}[d.magic]||'FLIC';

  dz.hidden=true;cw.style.display='flex';
  xb.hidden=false;
  $('plx-btn').hidden=false;
  $('plx-load-label').hidden=false;
  $('flip-v-btn').hidden=false;
  $('zip-btn').hidden=false;

  // Initialise absolute speed control from the file's own header speed
  curSpeedMs=d.speedMs;
  // Slider is inverted: dragging right = faster (lower ms), so the thumb position is (min+max-speed)
  $('ss').value=SS_MIN+SS_MAX-Math.max(SS_MIN,Math.min(SS_MAX,curSpeedMs));
  updateSpeedLabel();

  // Always start from frame 0 (confirmed: in-memory path starts at byte 128, decodes frame[0] first)
  resetPalette();pixels.fill(0);
  curChunks=d.decodeFrame(0,pixels);
  applyPlxOverride();
  initPaletteGrid();
  renderFrame();updateInfo();
  fc.textContent=`1 / ${d.frameOffsets.length}`;
  console.log(d.diagnosticDump());
}

// Per spec §7 and FLX_TickFrame binary: the game plays exactly frameCount frames
// (param_1[0x1e] = header[6] = frameCount), then wraps. The ring frame and any
// frames indexed beyond frameCount are NOT displayed. P() must reflect this.
function P(){
  if(!dec) return 0;
  // frameCount from header = number of playable frames (NOT counting ring frame)
  // Use the lesser of indexed frames and declared frameCount to avoid showing
  // the ring frame as a duplicate last frame.
  return Math.min(dec.frameOffsets.length, dec.frameCount||dec.frameOffsets.length);
}

function renderFrame(){
  if(!dec)return;
  dec.toRGBA(pixels,idata.data,flipV);
  ctx2d.putImageData(idata,0,0);
  if($('tab-palette').classList.contains('active'))updatePaletteGrid();
}

// Build the 256 swatch elements once per loaded file; colors are updated separately.
function initPaletteGrid(){
  const grid=$('palette-grid');
  grid.innerHTML='';
  paletteSwatches=[];
  for(let i=0;i<256;i++){
    const el=document.createElement('div');
    el.className='swatch';
    grid.appendChild(el);
    paletteSwatches.push(el);
  }
  updatePaletteGrid();
}

function updatePaletteGrid(){
  if(!dec||!paletteSwatches)return;
  const p=dec.palette;
  for(let i=0;i<256;i++){
    const b=i*4;
    const el=paletteSwatches[i];
    el.style.background=`rgb(${p[b]},${p[b+1]},${p[b+2]})`;
    el.dataset.tip=`${i}: rgb(${p[b]},${p[b+1]},${p[b+2]})`;
  }
}

// Reset palette then overlay any uploaded PLX on top.
// Matches the game's load sequence: PLX is applied first, then FLX chunk-4
// palette updates overwrite specific slots during frame decode.
function resetPalette(){
  dec._resetPalette();
  if(uploadedPlxPalette){
    for(let i=0;i<256;i++){
      dec.palette[i*4]  =uploadedPlxPalette[i*4];
      dec.palette[i*4+1]=uploadedPlxPalette[i*4+1];
      dec.palette[i*4+2]=uploadedPlxPalette[i*4+2];
      dec.palette[i*4+3]=255;
    }
  }
}

function updateFlipButtons(){
  $('flip-v-btn').classList.toggle('primary',flipV);
}

function updateSpeedLabel(){
  $('sv').textContent=`${curSpeedMs} ms (${(1000/curSpeedMs).toFixed(1)} fps)`;
}

function updateFlags(){
  // Mirror FLX_UpdateAndBlit return flags in the UI
  const f=dec?.lastFlags||0;
  const flags=[['f01',0x01,'0x01 NEW'],[['f04',0x04,'0x04 DONE']],['f08',0x08,'0x08 LOOP'],['f10',0x10,'0x10 RESET'],['f20',0x20,'0x20 PAL']];
  [['f01',0x01],['f04',0x04],['f08',0x08],['f10',0x10],['f20',0x20]].forEach(([id,bit])=>{
    const el=$(id);if(el)el.className='flag'+(f&bit?' on':'');
  });
}

function updateInfo(){
  if(!dec)return;
  const d=dec;

  // §2 File Header fields
  $('ii-fmt').textContent=d.formatName();$('ii-fmt').className='iv good';
  $('ii-sz').textContent=`${(d.buf.byteLength/1024).toFixed(1)} KB  (${d.buf.byteLength.toLocaleString()} B)`;
  $('ii-dims').textContent=`${d.width} × ${d.height}`;
  $('ii-depth').textContent=`${d.depth}-bit indexed`;
  $('ii-spd').textContent=`${d.speedMs} ms  (${(1000/d.speedMs).toFixed(1)} fps)  raw=${d.speedRaw}`;

  // flags (+14): bit 0 = has ring frame, bit 1 = has oframe2
  const fBits=[];
  if(d.hasRingFrame) fBits.push('bit0:ring_frame');
  if(d.hasOframe2)   fBits.push('bit1:has_oframe2');
  $('ii-flags').textContent=`0x${d.hdrFlags.toString(16).padStart(4,'0')}${fBits.length?' → '+fBits.join(' '):''}`;

  // aspect ratio
  const ax=d.aspectX||1, ay=d.aspectY||1;
  const gcd=(a,b)=>b?gcd(b,a%b):a, g=gcd(ax,ay);
  $('ii-aspect').textContent=`${ax/g}:${ay/g}  (raw ${ax}/${ay})`;

  $('ii-of1').textContent=`0x${d.oframe1.toString(16).toUpperCase()}  ${d.oframe1===128?'(=128, standard)':'(non-standard)'}`;
  $('ii-of2').textContent=`0x${d.oframe2.toString(16).toUpperCase()}`;
  $('ii-lf').textContent=`frame[${d.loopFrame}] @ 0x${(d.frameOffsets[d.loopFrame]||0).toString(16).toUpperCase()}`;
  $('ii-fc').textContent=`${d.frameCount}  (playable, excl. ring)`;
  $('ii-totalf').textContent=d.totalFrames?`${d.totalFrames}  (incl. ring frame)`:'—';
  $('ii-keyf').textContent=d.keyFrames||'—';
  $('ii-reqmem').textContent=d.reqMemory?`${(d.reqMemory/1024).toFixed(1)} KB`:'—';
  $('ii-creator').textContent=d.creator?`0x${d.creator.toString(16).toUpperCase()}`:'—';
  $('ii-created').textContent=d.created?new Date(d.created*1000).toISOString().slice(0,19).replace('T',' '):'—';

  // Playback
  $('ii-tf').textContent=`${d.frameOffsets.length}  (indexed)`;
  $('ii-lc').textContent='∞ infinite';

  // Current frame (§3)
  $('ii-fi').textContent=`${cur+1} / ${P()}  (raw idx ${cur})`;
  $('ii-fo').textContent=`0x${d.frameOffsets[cur].toString(16).toUpperCase()}`;
  $('ii-fs').textContent=`${d.frameSizes[cur].toLocaleString()} B`;
  $('ii-cc').textContent=(d.allChunkInfo[cur]||[]).length;
  const bad=curChunks.filter(c=>!c.ok).length;
  $('ii-ce').textContent=bad||'none';$('ii-ce').className='iv '+(bad?'err':'good');

  // Palette sample (§6)
  const p=d.palette;
  $('ii-p0').textContent=`rgb(${p[0]},${p[1]},${p[2]})`;
  $('ii-p1').textContent=`rgb(${p[4]},${p[5]},${p[6]})`;
  $('ii-p128').textContent=`rgb(${p[512]},${p[513]},${p[514]})`;
  $('ii-p255').textContent=`rgb(${p[1020]},${p[1021]},${p[1022]})`;
  $('ii-px').textContent=Array.from(pixels.subarray(0,8)).join(',');
  updateFlags();
}

// Re-apply the uploaded PLX on top of whatever palette decoding just set.
// Called after every decodeFrame() when a PLX is loaded, so the PLX
// always wins over FLX type-4 palette chunks.
function applyPlxOverride(){
  if(!uploadedPlxPalette||!dec) return;
  for(let i=0;i<256;i++){
    dec.palette[i*4]  =uploadedPlxPalette[i*4];
    dec.palette[i*4+1]=uploadedPlxPalette[i*4+1];
    dec.palette[i*4+2]=uploadedPlxPalette[i*4+2];
    dec.palette[i*4+3]=255;
  }
}

function seekTo(target){
  if(!dec)return;
  const raw=Math.max(0,Math.min(target,P()-1));
  // Must re-decode from frame 0 (FLIC is delta encoded; state accumulates)
  resetPalette();pixels.fill(0);
  for(let f=0;f<=raw;f++) curChunks=dec.decodeFrame(f,pixels);
  applyPlxOverride(); // PLX wins over any type-4 chunks from above frames
  cur=raw;
  renderFrame();scrub.value=cur;fc.textContent=`${cur+1} / ${P()}`;
  updateInfo();
}

function advance(){
  if(!dec)return;
  const isLastFrame = cur+1 >= P();
  const next = isLastFrame ? dec.loopFrame : cur+1;
  const wrapping = next <= cur;

  // Playback always loops infinitely (per spec §7 default; no play-once/N-times option)
  if(wrapping){
    // Re-accumulate delta state from frame 0 to loopFrame (§7 oframe2 loop target)
    resetPalette(); pixels.fill(0);
    for(let f=0; f<next; f++) dec.decodeFrame(f,pixels);
    dec.lastFlags = (dec.lastFlags||0) | 0x08; // 0x08 = LOOPED
  }

  curChunks=dec.decodeFrame(next,pixels);
  applyPlxOverride(); // PLX wins over any type-4 chunk that just fired
  cur=next;
  renderFrame(); scrub.value=cur; fc.textContent=`${cur+1} / ${P()}`;
  if($('tab-info').classList.contains('active'))updateInfo();
}

function startPlay(){
  if(!dec)return;
  playing=true; pb.textContent='Pause'; lastT=performance.now();
  function L(n){
    if(!playing)return;
    if(n-lastT>=curSpeedMs){lastT=n; advance();}
    rafId=requestAnimationFrame(L);
  }
  rafId=requestAnimationFrame(L);
}
function stopPlay(){playing=false;pb.textContent='Play';if(rafId)cancelAnimationFrame(rafId);}

pb.addEventListener('click',()=>{if(!dec)return;playing?stopPlay():startPlay();});
$('prev-btn').addEventListener('click',()=>{stopPlay();seekTo(cur-1);});
$('next-btn').addEventListener('click',()=>{stopPlay();seekTo(cur+1);});
scrub.addEventListener('input',()=>{stopPlay();seekTo(parseInt(scrub.value));});
$('ss').addEventListener('input',function(){curSpeedMs=SS_MIN+SS_MAX-parseInt(this.value);updateSpeedLabel();});

// ── Flip control ─────────────────────────────────────────────────────
$('flip-v-btn').addEventListener('click',()=>{
  flipV=!flipV; updateFlipButtons(); renderFrame();
});

// ── Single-frame PNG export ──────────────────────────────────────────
xb.addEventListener('click',async()=>{
  if(!canvas)return;
  const fname=`${srcFileName}_${String(cur+1).padStart(4,'0')}.png`;
  const a=document.createElement('a');a.download=fname;a.href=canvas.toDataURL();a.click();
});

// ── PLX palette export ───────────────────────────────────────────────
// PLX format (from LoadPaletteFile_PLX + LoadResourceFile_WithDecompression):
//   Raw binary: 256 entries × 4 bytes each = 1024 bytes
//   Each entry: R, G, B, 0x00  (RGBA, alpha always 0 in game)
//   Stored in the same RGBA layout as param_1[0x3c] in the player state.
//   Files on disk are typically PKX/LZSS compressed, but the raw uncompressed
//   1024-byte form is valid and can be read by any PLX-aware tool.
//   Note: game forces palette[0] = (0,0,0,0) after type-4 chunks (RTL_MemSet).
$('plx-btn').addEventListener('click', async () => {
  if(!dec) return;
  // Build raw PLX: 256 × 4 bytes, R/G/B/0x00 per entry
  const plx = new Uint8Array(1024);
  const p = dec.palette;
  for(let i = 0; i < 256; i++){
    plx[i*4]   = p[i*4];     // R
    plx[i*4+1] = p[i*4+1];   // G
    plx[i*4+2] = p[i*4+2];   // B
    plx[i*4+3] = 0x00;        // A always 0 in game (confirmed from FLX_ApplyPaletteChunk)
  }
  const fname = `${srcFileName}_${String(cur+1).padStart(4,'0')}.plx`;
  // Anchor download
  const blob = new Blob([plx], {type:'application/octet-stream'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href=url; a.download=fname; a.click();
  setTimeout(()=>URL.revokeObjectURL(url), 3000);
});

// ── PLX palette upload ───────────────────────────────────────────────
// Accepts raw PLX (1024 bytes = 256×RGBA) or PKX-wrapped PLX.
// PKX container: magic 0x504b583a 'PKX:' at byte 0, LZSS-compressed payload.
// Raw PLX: exactly 1024 bytes, no header — just 256 R/G/B/0x00 entries.
// After loading, the palette is applied immediately and locked for the session.
// The FLX file's own palette chunks will still overwrite it frame-by-frame
// unless the user seeks/plays — use "apply once" mode via the override flag.
$('plx-upload').addEventListener('change', async e => {
  const f = e.target.files[0];
  if(!f || !dec){ e.target.value=''; return; }

  const buf = await f.arrayBuffer();
  const u8  = new Uint8Array(buf);
  let raw = null;

  if(u8.length === 1024){
    // Raw uncompressed PLX — 256 × 4 bytes R/G/B/A
    raw = u8;
    dec._l('info', `PLX upload: raw 1024-byte palette from ${f.name}`);

  } else if(u8.length > 24 &&
      u8[0]===0x50&&u8[1]===0x4b&&u8[2]===0x58&&u8[3]===0x3a && // 'PKX:'
      u8[4]===0x66&&u8[5]===0x19&&u8[6]===0x01&&u8[7]===0x10){  // 0x10011966
    // PKX container — decompress LZSS payload
    // PKX header (24 bytes):
    //   +0  u32  magic1    0x3a584b50 ('PKX:' LE)
    //   +4  u32  magic2    0x10011966
    //   +8  u32  magic3    0x9BAEB0CF (-0x64514531)
    //   +12 u32  compType  compression type (1..14, matches DecompressResourceData_Dispatch)
    //   +16 u32  compSize  compressed payload size
    //   +20 u32  rawSize   uncompressed size (expect 1024 for PLX)
    const dv = new DataView(buf);
    const compType = dv.getUint32(12, true);
    const rawSize  = dv.getUint32(20, true);
    dec._l('info', `PLX upload: PKX container, compType=${compType} rawSize=${rawSize} from ${f.name}`);

    if(rawSize !== 1024){
      toast(`Unexpected PLX size after decompression: ${rawSize} bytes (expected 1024)`);
      e.target.value=''; return;
    }

    // LZSS decompression (type 0xE = LZSS, same as chunk type 104 stage 1)
    // Use the decoder's existing _lzssDecode by temporarily swapping the buffer
    const payload = u8.subarray(24);
    const savedBuf = dec.buf, savedU8 = dec.u8;
    dec.buf = payload.buffer.slice(payload.byteOffset, payload.byteOffset + payload.byteLength);
    dec.u8  = new Uint8Array(dec.buf);
    try {
      const decompressed = dec._lzssDecode(0, dec.u8.length, 'PLX', 0);
      if(decompressed.length !== 1024){
        toast(`PLX decompression yielded ${decompressed.length} bytes (expected 1024)`);
        e.target.value=''; return;
      }
      raw = decompressed;
    } catch(err) {
      toast(`PLX decompression failed: ${err.message}`);
      e.target.value=''; return;
    } finally {
      dec.buf = savedBuf; dec.u8 = savedU8;
    }

  } else {
    toast(`Unrecognised PLX format — expected 1024-byte raw or PKX-wrapped palette (got ${u8.length} bytes)`);
    e.target.value=''; return;
  }

  // Apply the loaded palette: copy R/G/B from raw PLX, keep A=255 for display
  // (game stores A=0 but we need A=255 for canvas rendering)
  for(let i = 0; i < 256; i++){
    dec.palette[i*4]   = raw[i*4];
    dec.palette[i*4+1] = raw[i*4+1];
    dec.palette[i*4+2] = raw[i*4+2];
    dec.palette[i*4+3] = 255;
  }

  // Save as the persistent PLX override so exports and seeks use it
  uploadedPlxPalette = new Uint8Array(1024);
  for(let i = 0; i < 256; i++){
    uploadedPlxPalette[i*4]   = raw[i*4];
    uploadedPlxPalette[i*4+1] = raw[i*4+1];
    uploadedPlxPalette[i*4+2] = raw[i*4+2];
    uploadedPlxPalette[i*4+3] = 0; // game stores 0, resetPalette sets to 255 for display
  }

  renderFrame();
  if($('tab-info').classList.contains('active')) updateInfo();

  // Mark the upload label green to show a PLX is active
  $('plx-load-label').style.borderColor = 'var(--good)';
  $('plx-load-label').style.color = 'var(--good)';
  $('plx-load-label').title = `PLX loaded: ${f.name} — palette overridden`;
  toast(`PLX palette loaded from ${f.name} — ${f.size} bytes`);
  dec._l('info', `PLX palette applied: pal[0]=(${dec.palette[0]},${dec.palette[1]},${dec.palette[2]}) pal[1]=(${dec.palette[4]},${dec.palette[5]},${dec.palette[6]})`);
  e.target.value='';
});
// Pure-JS ZIP writer using STORE (no compression) — no external libs needed.
// Format: local file headers + data + central directory + end-of-central-directory.
function makeZip(files){
  // files: [{name, data: Uint8Array}]
  const enc=new TextEncoder();
  const parts=[];
  const central=[];
  let offset=0;

  function u16(n){const b=new Uint8Array(2);new DataView(b.buffer).setUint16(0,n,true);return b;}
  function u32(n){const b=new Uint8Array(4);new DataView(b.buffer).setUint32(0,n,true);return b;}

  function crc32(data){
    let crc=0xFFFFFFFF;
    const table=crc32.table||(crc32.table=(()=>{
      const t=new Uint32Array(256);
      for(let i=0;i<256;i++){let c=i;for(let j=0;j<8;j++)c=c&1?(0xEDB88320^(c>>>1)):(c>>>1);t[i]=c;}
      return t;
    })());
    for(let i=0;i<data.length;i++) crc=table[(crc^data[i])&0xFF]^(crc>>>8);
    return (crc^0xFFFFFFFF)>>>0;
  }

  for(const f of files){
    const name=enc.encode(f.name);
    const crc=crc32(f.data);
    const size=f.data.length;
    // Local file header
    const lfh=new Uint8Array(30+name.length);
    const lv=new DataView(lfh.buffer);
    lv.setUint32(0,0x04034b50,true);  // signature
    lv.setUint16(4,20,true);           // version needed
    lv.setUint16(6,0,true);            // flags
    lv.setUint16(8,0,true);            // compression: STORE
    lv.setUint16(10,0,true);           // mod time
    lv.setUint16(12,0,true);           // mod date
    lv.setUint32(14,crc,true);
    lv.setUint32(18,size,true);        // compressed size
    lv.setUint32(22,size,true);        // uncompressed size
    lv.setUint16(26,name.length,true);
    lv.setUint16(28,0,true);           // extra length
    lfh.set(name,30);

    // Central directory entry
    const cde=new Uint8Array(46+name.length);
    const cv=new DataView(cde.buffer);
    cv.setUint32(0,0x02014b50,true);   // signature
    cv.setUint16(4,20,true);           // version made by
    cv.setUint16(6,20,true);           // version needed
    cv.setUint16(8,0,true);            // flags
    cv.setUint16(10,0,true);           // compression: STORE
    cv.setUint16(12,0,true);cv.setUint16(14,0,true); // mod time/date
    cv.setUint32(16,crc,true);
    cv.setUint32(20,size,true);
    cv.setUint32(24,size,true);
    cv.setUint16(28,name.length,true);
    cv.setUint16(30,0,true);           // extra
    cv.setUint16(32,0,true);           // comment
    cv.setUint16(34,0,true);           // disk start
    cv.setUint16(36,0,true);           // internal attr
    cv.setUint32(38,0,true);           // external attr
    cv.setUint32(42,offset,true);      // local header offset
    cde.set(name,46);

    parts.push(lfh,f.data);
    central.push(cde);
    offset+=lfh.length+size;
  }

  const centralData=concat(central);
  const cdOffset=offset;
  const cdSize=centralData.length;

  // End of central directory record
  const eocd=new Uint8Array(22);
  const ev=new DataView(eocd.buffer);
  ev.setUint32(0,0x06054b50,true);
  ev.setUint16(4,0,true);ev.setUint16(6,0,true);
  ev.setUint16(8,files.length,true);
  ev.setUint16(10,files.length,true);
  ev.setUint32(12,cdSize,true);
  ev.setUint32(16,cdOffset,true);
  ev.setUint16(20,0,true);

  return concat([...parts,centralData,eocd]);
}

function concat(arrays){
  const total=arrays.reduce((s,a)=>s+a.length,0);
  const out=new Uint8Array(total);
  let off=0;
  for(const a of arrays){out.set(a,off);off+=a.length;}
  return out;
}

// Render a specific frame index to a new offscreen canvas → PNG bytes
async function frameToPNG(frameIdx){
  const W=dec.width,H=dec.height;
  const offCanvas=new OffscreenCanvas(W,H);
  const offCtx=offCanvas.getContext('2d');
  const offIdata=new ImageData(W,H);
  const offPixels=new Uint8Array(W*H);

  // Re-decode from scratch up to this frame (delta encoding)
  const savedPal=dec.palette.slice();
  resetPalette();  // applies PLX base if loaded, then FLX chunks overlay on top
  offPixels.fill(0);
  for(let f=0;f<=frameIdx;f++) dec.decodeFrame(f,offPixels);
  dec.toRGBA(offPixels,offIdata.data,flipV);
  dec.palette.set(savedPal);

  offCtx.putImageData(offIdata,0,0);
  const blob=await offCanvas.convertToBlob({type:'image/png'});
  return new Uint8Array(await blob.arrayBuffer());
}

$('zip-btn').addEventListener('click',async()=>{
  if(!dec)return;
  const total=P();
  zipCancelled=false;

  // Show progress
  stopPlay();
  $('zip-progress').style.display='flex';
  $('zip-btn').disabled=true;
  $('zip-bar').style.width='0%';
  $('zip-label').textContent=`Frame 0 / ${total}`;

  const files=[];
  // Save current decode state so we can restore it
  const savedPal=dec.palette.slice();
  const savedPixels=pixels.slice();
  const savedCur=cur;

  // Batch decode: accumulate state sequentially — much faster than re-decoding from 0 each time
  const batchPixels=new Uint8Array(dec.width*dec.height);
  resetPalette();  // applies PLX base if loaded, then FLX chunks overlay per-frame
  batchPixels.fill(0);

  for(let f=0;f<total;f++){
    if(zipCancelled) break;
    dec.decodeFrame(f,batchPixels);
    applyPlxOverride(); // PLX wins over any type-4 chunks in this frame

    // Render to PNG
    const W=dec.width,H=dec.height;
    const offCanvas=new OffscreenCanvas(W,H);
    const offCtx=offCanvas.getContext('2d');
    const offIdata=new ImageData(W,H);
    dec.toRGBA(batchPixels,offIdata.data,flipV);
    offCtx.putImageData(offIdata,0,0);
    const blob=await offCanvas.convertToBlob({type:'image/png'});
    const pngBytes=new Uint8Array(await blob.arrayBuffer());
    files.push({name:`${srcFileName}_${String(f+1).padStart(4,'0')}.png`,data:pngBytes});

    const pct=Math.round((f+1)/total*100);
    $('zip-bar').style.width=pct+'%';
    $('zip-label').textContent=`Frame ${f+1} / ${total}`;

    // Yield to keep UI responsive every 4 frames
    if(f%4===3) await new Promise(r=>setTimeout(r,0));
  }

  // Restore decode state
  dec.palette.set(savedPal);
  pixels.set(savedPixels);
  cur=savedCur;
  renderFrame();

  $('zip-progress').style.display='none';
  $('zip-btn').disabled=false;

  if(zipCancelled||!files.length) return;

  // Build ZIP
  $('zip-label').textContent='Building ZIP…';
  $('zip-progress').style.display='flex';
  $('zip-bar').style.width='100%';
  await new Promise(r=>setTimeout(r,0));

  const zipData=makeZip(files);
  const zipName=`${srcFileName}_frames.zip`;

  $('zip-progress').style.display='none';

  // Anchor download
  const blob=new Blob([zipData],{type:'application/zip'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=zipName;a.click();
  setTimeout(()=>URL.revokeObjectURL(url),5000);
});

$('zip-cancel').addEventListener('click',()=>{
  zipCancelled=true;
  $('zip-progress').style.display='none';
  $('zip-btn').disabled=false;
});

document.addEventListener('dragover',e=>{e.preventDefault();dz.classList.add('drag-over');});
document.addEventListener('dragleave',()=>dz.classList.remove('drag-over'));
document.addEventListener('drop',e=>{e.preventDefault();dz.classList.remove('drag-over');const f=e.dataTransfer.files[0];if(f)loadFile(f);});
dz.addEventListener('click',()=>$('fi').click());
$('fi').addEventListener('change',e=>{if(e.target.files[0])loadFile(e.target.files[0]);});

document.addEventListener('keydown',e=>{
  if(!dec||e.target.tagName==='INPUT')return;
  switch(e.code){
    case'Space':e.preventDefault();playing?stopPlay():startPlay();break;
    case'ArrowRight':stopPlay();seekTo(cur+1);break;
    case'ArrowLeft':stopPlay();seekTo(cur-1);break;
    case'Home':stopPlay();seekTo(0);break;
    case'End':stopPlay();seekTo(P()-1);break;
  }
});
