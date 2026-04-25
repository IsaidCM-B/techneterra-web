# Techneterra web (staging)

Next.js app for **techneterra.com** — structure aligned with **Website Layout Brief 2.0** (AgenciaAgro / Daniel Franco). **Do not deploy to production** until Chairman sign-off.

## Commands

```bash
npm install
npm run dev
```

Open `http://localhost:3000` → redirects to `/en` (or `/es` via language switcher).

## Brand

- Tokens: `../docs/branding/brand-tokens.json` v2.0
- Copy official logos & photos from `D:\Daniel - agiot.mx\` → `public/brand/`
- Copy `.ttf` fonts → `public/fonts/` (Handel Gothic, Sansation Bold)

## API

- `POST /api/contact` — stub (202). Full RFQ pipeline in Sprint T2.
