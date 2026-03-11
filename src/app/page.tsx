"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  founderItems,
  layerMeta,
  type FounderItem,
  type Layer,
  type LayerMeta,
} from "@/data/founder-items";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const content = {
  ko: {
    tagline: "AI 협업의 근본원리를 도구로 만듭니다",
    cta: "연락하기",
    founderHeading: "Founder",
    founderSubheading: "만들어 온 것들",
  },
  en: {
    tagline: "Building fundamental tools for AI collaboration",
    cta: "Get in touch",
    founderHeading: "Founder",
    founderSubheading: "Things we've built",
  },
} as const;

type Locale = keyof typeof content;

function InteractiveMascot() {
  const [visible, setVisible] = useState(true);
  const [pressed, setPressed] = useState(false);
  const pressTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (pressTimeoutRef.current !== null) {
        window.clearTimeout(pressTimeoutRef.current);
      }
    };
  }, []);

  const triggerPress = () => {
    if (pressTimeoutRef.current !== null) {
      window.clearTimeout(pressTimeoutRef.current);
    }

    setPressed(true);
    pressTimeoutRef.current = window.setTimeout(() => {
      setPressed(false);
      pressTimeoutRef.current = null;
    }, 420);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed right-6 bottom-6 z-[5] hidden lg:block xl:right-8 xl:bottom-8"
      aria-hidden="true"
    >
      <div className="mascot-float w-[220px] xl:w-[250px]">
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          className={`mascot-button pointer-events-auto ${pressed ? "is-pressed" : ""}`}
          onClick={triggerPress}
        >
          <Image
            src="/mascot.png"
            alt=""
            width={432}
            height={736}
            sizes="(min-width: 1280px) 250px, 220px"
            unoptimized
            className="mascot-image"
            onError={() => setVisible(false)}
          />
        </button>
      </div>
    </div>
  );
}

// ── Inline components ───────────────────────────

function FounderItemRow({
  item,
  locale,
}: {
  item: FounderItem;
  locale: Locale;
}) {
  const [ref, revealed] = useScrollReveal<HTMLDivElement>();
  const title = item.url ? (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-foreground/20 underline-offset-4 transition-colors hover:decoration-accent"
    >
      {item.title[locale]}
    </a>
  ) : (
    item.title[locale]
  );

  return (
    <div
      ref={ref}
      className={`animate-reveal group border-b border-foreground/5 py-4 last:border-b-0 ${revealed ? "revealed" : ""}`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="text-sm font-medium">{title}</h4>
        <span className="shrink-0 font-mono text-xs text-muted/60">
          {item.year}
        </span>
      </div>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        {item.description[locale]}
      </p>
      <p className="mt-1 text-xs italic leading-relaxed text-muted/60 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
        {item.narrative[locale]}
      </p>
    </div>
  );
}

function LayerGroup({
  layer,
  meta,
  items,
  locale,
}: {
  layer: Layer;
  meta: LayerMeta;
  items: FounderItem[];
  locale: Locale;
}) {
  const [ref, revealed] = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`animate-reveal border-l-2 border-accent pl-6 ${revealed ? "revealed" : ""}`}
    >
      <div className="mb-4 flex items-baseline gap-3">
        <span className="font-mono text-sm text-accent">{layer}</span>
        <span className="text-sm text-muted">
          {meta.label[locale]} · {meta.description[locale]}
        </span>
      </div>
      <div>
        {items.map((item) => (
          <FounderItemRow key={item.id} item={item} locale={locale} />
        ))}
      </div>
    </div>
  );
}

function FounderSection({ locale }: { locale: Locale }) {
  const t = content[locale];
  const layers: Layer[] = ["L1", "L2", "L3"];

  return (
    <section className="mx-auto w-full max-w-2xl px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="font-brand text-xl tracking-[0.15em] sm:text-2xl sm:tracking-[0.2em]">
          {t.founderHeading}
        </h2>
        <p className="mt-2 text-sm text-muted">{t.founderSubheading}</p>
      </div>
      <div className="flex flex-col gap-16">
        {layers.map((layer) => (
          <LayerGroup
            key={layer}
            layer={layer}
            meta={layerMeta[layer]}
            items={founderItems
              .filter((i) => i.layer === layer)
              .sort((a, b) => b.year - a.year)}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}

// ── Page ────────────────────────────────────────

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ko");
  const t = content[locale];

  return (
    <div className="flex flex-col">
      <InteractiveMascot />

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

      {/* Hero */}
      <section className="relative flex min-h-svh flex-col items-center justify-center px-6">
        <main className="flex flex-col items-center gap-8 text-center">
          {/* Logo mark */}
          <div className="animate-fade-in-1" aria-hidden="true">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="text-accent"
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
          <h1 className="animate-fade-in-2 font-brand text-2xl tracking-[0.15em] sm:text-3xl sm:tracking-[0.25em]">
            ROOTPROTO
          </h1>

          {/* Tagline */}
          <p className="animate-fade-in-3 max-w-xs text-base leading-relaxed text-muted">
            {t.tagline}
          </p>

          {/* CTA */}
          <a
            href="mailto:lastone9182@gmail.com"
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

        {/* Scroll indicator */}
        <div className="animate-fade-in-4 absolute bottom-8" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="animate-scroll-hint text-muted/40"
          >
            <path
              d="M8 3v10M4 9l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Founder */}
      <FounderSection locale={locale} />

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-muted/60">
        &copy; 2026 Rootproto
      </footer>
    </div>
  );
}
