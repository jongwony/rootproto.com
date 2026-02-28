# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local dev server |
| `npm run build` | Static export to `out/` |
| `npm run lint` | ESLint (flat config, eslint 9) |
| `npm run start` | Serve production build locally |

No test framework is configured.

## Architecture

**Single-page static landing site** for Rootproto, deployed to GitHub Pages.

- **Next.js 16** App Router with `output: "export"` (fully static, no SSR/API routes)
- **React 19**, **TypeScript 5** (strict), **Tailwind CSS v4** (PostCSS plugin, CSS-based config — no `tailwind.config.js`)
- Path alias: `@/*` → `./src/*`

### Source Structure

All source lives in `src/app/` (3 files):

- `layout.tsx` — Server Component. Metadata, fonts, JSON-LD structured data
- `page.tsx` — `"use client"`. Landing page with Korean/English locale toggle via `useState`
- `globals.css` — Tailwind v4 `@theme inline` design tokens, custom CSS variables, fade-in animations

### Design Tokens (globals.css)

- `--accent: #f97316` (orange, both light/dark)
- Dark mode via `prefers-color-scheme` media query (automatic)
- Font stack: Pretendard Variable (Korean) → Geist Sans → system-ui
- Brand font: Bruno Ace SC (`--font-brand`)

### Deployment

GitHub Actions (`.github/workflows/deploy.yml`): push to `main` → `npm ci && npm run build` → deploy `out/` to GitHub Pages. Custom domain: `rootproto.com` (via `public/CNAME`).
