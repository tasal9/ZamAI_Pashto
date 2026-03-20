#!/usr/bin/env python3
"""Scrape simple Pashto book listing pages into JSON."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import requests
from bs4 import BeautifulSoup


def scrape_pashto_books(
    url: str,
    *,
    item_selector: str = ".book-item",
    title_selector: str = ".book-title",
    author_selector: str = ".book-author",
    content_selector: str = ".book-content",
    link_selector: str = "a",
) -> list[dict[str, str]]:
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    }

    response = requests.get(url, headers=headers, timeout=30)
    response.raise_for_status()
    soup = BeautifulSoup(response.content, "lxml")

    books: list[dict[str, str]] = []

    for book in soup.select(item_selector):
        title_node = book.select_one(title_selector)
        author_node = book.select_one(author_selector)
        content_node = book.select_one(content_selector)
        link_node = book.select_one(link_selector)
        if not (title_node and author_node and content_node and link_node and link_node.get("href")):
            continue

        books.append(
            {
                "title": title_node.get_text(strip=True),
                "author": author_node.get_text(strip=True),
                "content": content_node.get_text(strip=True),
                "url": requests.compat.urljoin(url, link_node["href"]),
            }
        )

    return books


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("url", help="Page to scrape")
    parser.add_argument("--output", default="pashto_books.json", help="Output JSON file path")
    parser.add_argument("--item-selector", default=".book-item", help="CSS selector for each book record")
    parser.add_argument("--title-selector", default=".book-title", help="CSS selector for the book title")
    parser.add_argument("--author-selector", default=".book-author", help="CSS selector for the book author")
    parser.add_argument("--content-selector", default=".book-content", help="CSS selector for the book content")
    parser.add_argument("--link-selector", default="a", help="CSS selector for the book link")
    return parser


def main() -> int:
    args = build_parser().parse_args()
    books = scrape_pashto_books(
        args.url,
        item_selector=args.item_selector,
        title_selector=args.title_selector,
        author_selector=args.author_selector,
        content_selector=args.content_selector,
        link_selector=args.link_selector,
    )

    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with output_path.open("w", encoding="utf-8") as output_handle:
        json.dump(books, output_handle, ensure_ascii=False, indent=2)

    print(f"Saved {len(books)} books to {output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())