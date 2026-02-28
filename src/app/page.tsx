"use client";

import { useState } from "react";

const content = {
  ko: {
    tagline: "AI 협업의 근본원리를 도구로 만듭니다",
    cta: "연락하기",
  },
  en: {
    tagline: "Building fundamental tools for AI collaboration",
    cta: "Get in touch",
  },
} as const;

type Locale = keyof typeof content;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ko");
  const t = content[locale];

  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center px-6">
      {/* Language toggle */}
      <nav className="animate-fade-in fixed top-6 right-6 z-10">
        <button
          onClick={() => setLocale((prev) => (prev === "ko" ? "en" : "ko"))}
          className="cursor-pointer font-mono text-sm text-muted transition-colors hover:text-foreground"
          aria-label={locale === "ko" ? "Switch to English" : "한국어로 전환"}
        >
          {locale === "ko" ? "EN" : "한"}
        </button>
      </nav>

      {/* Main content */}
      <main className="flex flex-col items-center gap-8 text-center">
        {/* Logo mark */}
        <div className="animate-fade-in-1" aria-hidden="true">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            className="text-foreground"
          >
            <circle
              cx="20"
              cy="20"
              r="19"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="20" cy="20" r="4" fill="currentColor" />
          </svg>
        </div>

        {/* Brand name */}
        <h1 className="animate-fade-in-2 font-mono text-2xl tracking-tight">
          rootproto
        </h1>

        {/* Tagline */}
        <p className="animate-fade-in-3 max-w-xs text-base leading-relaxed text-muted">
          {t.tagline}
        </p>

        {/* CTA */}
        <a
          href="mailto:hello@rootproto.com"
          className="animate-fade-in-4 group inline-flex items-center gap-2 rounded-full border border-foreground/10 px-6 py-2.5 text-sm font-medium transition-all hover:border-foreground/25 hover:bg-foreground/[0.03]"
        >
          {t.cta}
          <span
            aria-hidden="true"
            className="inline-block transition-transform group-hover:translate-x-0.5"
          >
            &rarr;
          </span>
        </a>
      </main>

      {/* Footer */}
      <footer className="animate-fade-in fixed bottom-6 text-xs text-muted/60">
        &copy; 2026 Rootproto
      </footer>
    </div>
  );
}
