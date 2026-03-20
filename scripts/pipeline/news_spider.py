#!/usr/bin/env python3
"""Scrape Pashto news articles with Scrapy."""

from __future__ import annotations

import argparse
from typing import Iterable

import scrapy
from scrapy.crawler import CrawlerProcess


DEFAULT_START_URLS = [
    "https://www.bbc.com/pashto",
    "https://www.voadeewanews.com/pashto",
    "https://pajhwok.com/ps/",
]

DEFAULT_ALLOWED_DOMAINS = [
    "bbc.com",
    "voadeewanews.com",
    "pajhwok.com",
]


class PashtoNewsSpider(scrapy.Spider):
    name = "pashto_news"

    custom_settings = {
        "FEEDS": {},
        "ROBOTSTXT_OBEY": True,
        "USER_AGENT": "ZamAI Pashto research bot/1.0 (+https://github.com/tasal9/ZamAI_Pashto)",
        "LOG_LEVEL": "INFO",
    }

    def __init__(
        self,
        start_urls: Iterable[str] | None = None,
        allowed_domains: Iterable[str] | None = None,
        article_path_hint: str = "/article/",
        *args,
        **kwargs,
    ) -> None:
        super().__init__(*args, **kwargs)
        self.start_urls = list(start_urls or DEFAULT_START_URLS)
        self.allowed_domains = list(allowed_domains or DEFAULT_ALLOWED_DOMAINS)
        self.article_path_hint = article_path_hint

    def parse(self, response: scrapy.http.Response):
        for article_link in response.css("a::attr(href)").getall():
            if article_link and self.article_path_hint in str(article_link):
                yield response.follow(article_link, self.parse_article)

        next_page = response.css("a.next::attr(href), a[rel='next']::attr(href)").get()
        if next_page:
            yield response.follow(next_page, self.parse)

    def parse_article(self, response: scrapy.http.Response):
        paragraphs = response.css("article p::text, main p::text").getall()
        yield {
            "title": response.css("h1::text").get(),
            "url": response.url,
            "content": " ".join(text.strip() for text in paragraphs if text.strip()),
            "date": response.css("time::attr(datetime)").get(),
        }


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", default="pashto_news.json", help="Output JSON file path")
    parser.add_argument(
        "--start-url",
        action="append",
        dest="start_urls",
        help="Seed URL to crawl. Repeat for multiple sources.",
    )
    parser.add_argument(
        "--allowed-domain",
        action="append",
        dest="allowed_domains",
        help="Domain allow-list entry. Repeat for multiple domains.",
    )
    parser.add_argument(
        "--article-path-hint",
        default="/article/",
        help="Substring used to identify article links",
    )
    return parser


def main() -> int:
    args = build_parser().parse_args()

    process = CrawlerProcess(
        settings={
            "FEEDS": {
                args.output: {
                    "format": "json",
                    "encoding": "utf-8",
                    "indent": 2,
                    "overwrite": True,
                }
            }
        }
    )
    process.crawl(
        PashtoNewsSpider,
        start_urls=args.start_urls,
        allowed_domains=args.allowed_domains,
        article_path_hint=args.article_path_hint,
    )
    process.start()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())