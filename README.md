# rootproto.com

Single-page static landing site for [Rootproto](https://rootproto.com), built with Next.js 16 and deployed to GitHub Pages.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local dev server |
| `npm run build` | Static export to `out/` |
| `npm run lint` | ESLint |
| `npm run start` | Serve production build locally |

## Stack

- **Next.js 16** App Router with `output: "export"` (fully static)
- **React 19**, **TypeScript 5** (strict)
- **Tailwind CSS v4** (PostCSS plugin, CSS-based config)
- Source: `src/app/` (layout.tsx, page.tsx, globals.css)

## Deployment

Push to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages at [rootproto.com](https://rootproto.com).
