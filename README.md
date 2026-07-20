# Seongmoon Jeong — Web CV

Static academic CV built with Next.js and deployed with GitHub Pages.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm test
```

`npm run build` writes the fully static site to `out/`. Pushes to `main` deploy
that directory automatically through `.github/workflows/deploy-pages.yml`.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: create the GitHub Pages export
- `npm test`: build and verify the exported CV and downloadable PDF
