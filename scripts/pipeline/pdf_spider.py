#!/usr/bin/env python3
"""Discover and download PDFs from Pashto archive pages."""

from __future__ import annotations

import argparse
from pathlib import Path
from urllib.parse import unquote, urlparse

import scrapy
from scrapy.crawler import CrawlerProcess
from scrapy.pipelines.files import FilesPipeline


class PdfPipeline(FilesPipeline):
    def file_path(self, request, response=None, info=None, *, item=None):
        parsed_url = urlparse(request.url)
        filename = Path(unquote(parsed_url.path)).name
        return filename or "downloaded.pdf"


class PashtoPdfSpider(scrapy.Spider):
    name = "pashto_pdfs"

    custom_settings = {
        "ITEM_PIPELINES": {PdfPipeline: 100},
        "ROBOTSTXT_OBEY": True,
        "USER_AGENT": "ZamAI Pashto research bot/1.0 (+https://github.com/tasal9/ZamAI_Pashto)",
        "LOG_LEVEL": "INFO",
    }

    def __init__(self, start_url: str, *args, **kwargs) -> None:
        super().__init__(*args, **kwargs)
        self.start_urls = [start_url]

    def parse(self, response: scrapy.http.Response):
        pdf_links = response.css('a[href$=".pdf"]::attr(href)').getall()
        for pdf_url in pdf_links:
            yield {"file_urls": [response.urljoin(pdf_url)]}


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--start-url",
        default="https://example-pashto-books-site.com/",
        help="Archive page that contains PDF links",
    )
    parser.add_argument(
        "--output-dir",
        default="downloaded_pdfs",
        help="Directory where downloaded PDFs will be stored",
    )
    return parser


def main() -> int:
    args = build_parser().parse_args()
    process = CrawlerProcess(settings={"FILES_STORE": args.output_dir})
    process.crawl(PashtoPdfSpider, start_url=args.start_url)
    process.start()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())