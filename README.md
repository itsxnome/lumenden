# Lumenden — Saad Fazal portfolio

Multi-page personal site for **Saad Fazal**, branded **Lumenden**.  
Stack: **Next.js 15 (App Router) + TypeScript + CSS Modules** — Vercel free / GitHub ready.

## Pages

| Route | Purpose |
|---|---|
| `/` | Work index / discovery home |
| `/work` | Full library + category filters |
| `/work/[slug]` | Project case pages |
| `/now` | Currently shipping |
| `/about` | Bio, education, toolkit |
| `/experience` | Career path |
| `/contact` | Form + direct links |

## Design

Editorial minimal + media-first bento (inspired by Awwwards/Codrops portfolio patterns):
Instrument Serif + Sora, cool stone surfaces, teal accent, soft elevation — not neo-brutalist hard shadows.

Tokens live in `src/styles/tokens.css`.

## Local

```bash
npm install
npm run dev
```

## Deploy

1. Push to GitHub  
2. Import on Vercel (Hobby)  
3. Attach `lumenden.com` later under Domains  

## Edit content

`src/data/site.ts` + assets in `public/work/**`
