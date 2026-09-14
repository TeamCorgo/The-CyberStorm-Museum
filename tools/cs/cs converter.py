#!/usr/bin/env python3
"""
Missionforce: Cyberstorm mission-script -> Markdown, in either English or
Python-pseudocode flavor.

Combines cyberstorm_script_disasm.py (English) and python-script.py (Python
pseudocode) into one CLI: same folder/file handling, same Markdown export,
just pick which renderer to use with --lang.

USAGE
-----
    python converter.py <folder-or-file.cs> --lang english
    python converter.py <folder-or-file.cs> --lang python
    python converter.py <folder-or-file.cs> --lang python -o out.md
"""

import sys
import os
import argparse
import importlib.util

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import cyberstorm_script_disasm as D

# python-script.py isn't a valid module name for `import`, so load it by path.
_P_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "python-script.py")
_spec = importlib.util.spec_from_file_location("python_script", _P_PATH)
P = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(P)

RENDERERS = {
    "english": {
        "process": D.process_cs_file,
        "code_fence": "text",
        "label": "English",
    },
    "python": {
        "process": P.process_cs_file,
        "code_fence": "python",
        "label": "Python",
    },
}


def render_markdown(name, lines, code_fence):
    return "\n".join([
        f"# {name}",
        "",
        f"```{code_fence}",
        *lines,
        "```",
        "",
    ])


def find_cs_files(folder):
    return sorted(
        p for p in os.listdir(folder)
        if p.lower().endswith(".cs") and os.path.isfile(os.path.join(folder, p))
    )


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("file", help="A raw .CS mission file, OR a folder containing .CS files - "
                                 "every *.cs in the folder is converted and the results are "
                                 "exported as one Markdown file")
    ap.add_argument("--lang", choices=["english", "python", "both"], default="both",
                     help="Output flavor: 'english' for plain-English disassembly, "
                          "'python' for Python-style pseudocode, 'both' for one .md of "
                          "each per input file (default: both)")
    ap.add_argument("--start", type=lambda x: int(x, 0), default=None,
                     help="Word offset to start decoding at (default: read from the .CS header)")
    ap.add_argument("--expr-pool-base", type=lambda x: int(x, 0), default=None,
                     help="Word offset of the expression pool (default: read from the .CS header)")
    ap.add_argument("--string-pool-base", type=lambda x: int(x, 0), default=None,
                     help="Byte offset of the string pool (default: read from the .CS header)")
    ap.add_argument("--no-auto", action="store_true",
                     help="(english mode only) Disable header auto-detection fallback scanning")
    ap.add_argument("--no-expr-decode", action="store_true",
                     help="(english mode only) Show raw <expr#N> ids instead of decoding expressions")
    ap.add_argument("--no-string-decode", action="store_true",
                     help="(english mode only) Show only the message index instead of looking up its text")
    ap.add_argument("-o", "--output", help="Output folder to write the .md file(s) into "
                                            "(default: alongside the input - same folder for "
                                            "folder mode, the input file's folder for single-file mode)")
    args = ap.parse_args()

    langs = ["english", "python"] if args.lang == "both" else [args.lang]

    if os.path.isdir(args.file):
        cs_files = find_cs_files(args.file)
        if not cs_files:
            print(f"error: no .cs files found in {args.file}", file=sys.stderr)
            sys.exit(1)
        in_dir = args.file
    else:
        cs_files = [os.path.basename(args.file)]
        in_dir = os.path.dirname(os.path.abspath(args.file)) or "."

    out_dir = args.output or in_dir
    os.makedirs(out_dir, exist_ok=True)

    written = 0
    for name in cs_files:
        full = os.path.join(in_dir, name)
        stem = os.path.splitext(name)[0]
        for lang in langs:
            renderer = RENDERERS[lang]
            print(f"; processing {name} ({renderer['label']}) ...", file=sys.stderr)
            try:
                lines = renderer["process"](full, args)
            except ValueError as e:
                print(f"skipping {name} ({renderer['label']}): {e}", file=sys.stderr)
                continue
            out_path = os.path.join(out_dir, f"{stem} ({renderer['label']}).md")
            with open(out_path, "w", encoding="utf-8") as f:
                f.write(render_markdown(name, lines, renderer["code_fence"]))
            print(f"wrote {out_path}", file=sys.stderr)
            written += 1

    if written == 0:
        sys.exit(1)


if __name__ == "__main__":
    main()
