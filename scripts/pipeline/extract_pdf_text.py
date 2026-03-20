#!/usr/bin/env python3
"""Extract text from a folder of PDFs into a JSON file."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import pdfplumber


def extract_text_from_pdfs(pdf_folder: Path, output_file: Path) -> list[dict[str, object]]:
    extracted_data: list[dict[str, object]] = []

    for pdf_path in sorted(pdf_folder.glob("*.pdf")):
        text_content: list[str] = []

        try:
            with pdfplumber.open(pdf_path) as pdf:
                for page in pdf.pages:
                    text = page.extract_text()
                    if text:
                        text_content.append(text)

            full_text = "\n".join(text_content)
            extracted_data.append(
                {
                    "filename": pdf_path.name,
                    "text": full_text,
                    "word_count": len(full_text.split()),
                }
            )
            print(f"Extracted: {pdf_path.name}")
        except Exception as error:
            print(f"Error extracting {pdf_path.name}: {error}")

    output_file.parent.mkdir(parents=True, exist_ok=True)
    with output_file.open("w", encoding="utf-8") as output_handle:
        json.dump(extracted_data, output_handle, ensure_ascii=False, indent=2)

    return extracted_data


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("pdf_folder", type=Path, help="Directory containing PDF files")
    parser.add_argument("output_file", type=Path, help="Path to the output JSON file")
    return parser


def main() -> int:
    args = build_parser().parse_args()
    extract_text_from_pdfs(args.pdf_folder, args.output_file)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())