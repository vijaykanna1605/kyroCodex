# Kyrocodex

Production-ready React marketing site for Kyrocodex.

## Run locally

```bash
cd kyrocodex
npm install
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build
npm run preview
```

`dist/` is the static site. Deploy that folder to Vercel, Netlify, Cloudflare Pages, or any nginx/S3 host. Use history-fallback so `/services`, `/about`, and `/contact` load on refresh.

## Pages

- `/` Home
- `/services` Service catalog and process
- `/about` Studio
- `/contact` Validated brief form

The contact form validates in the browser. Wire `Contact.tsx` submit to your email API before going live.
