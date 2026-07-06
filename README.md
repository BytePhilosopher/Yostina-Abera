# Yostina Abera — Portfolio

A modern, animated personal portfolio. **React + Vite** frontend, **Node.js + Express** backend.
Light/dark theme, Framer Motion animations, a sliding tech-logo marquee, an
alternating project showcase, a centered education timeline, a live GitHub
contribution graph, and a working contact form.

```
├── client/            React + Vite (UI)
│   ├── src/           components, theme context, content (src/data.js)
│   ├── public/        images, CV, favicon, og-image, robots.txt, sitemap.xml
│   └── .env.example   VITE_API_URL (only if API is hosted separately)
├── server/            Express API (contact form) + serves the built client
│   └── .env.example   PORT, NODE_ENV, CORS_ORIGIN, CONTACT_WEBHOOK_URL
├── Dockerfile         full-stack container (build client → serve with Express)
├── render.yaml        one-click Render deploy
└── package.json       root scripts to build & run both
```

## Content — one file
Everything (education, projects, skills, contact links) lives in
[`client/src/data.js`](client/src/data.js). Update that to change the site.

Media in `client/public/`: `profile.png` (background-removed photo),
`cpfocus.jpg`, `militaryhealthmanagament.jpg`, `yostina_cv.pdf`, `og-image.jpg`.

## Before you deploy
1. **Set your real domain** — replace `https://yostina-portfolio.example.com`
   in `client/index.html` (canonical + Open Graph + Twitter tags),
   `client/public/robots.txt`, and `client/public/sitemap.xml`.
2. **Fill in links** — LinkedIn (`contact.linkedin`) and any remaining `#`
   in `client/src/data.js`.
3. *(Optional)* Set `CONTACT_WEBHOOK_URL` on the server to receive form
   submissions in Slack/Discord/Zapier/etc.

## Develop
```bash
npm run install:all        # install client + server deps
npm run dev:server         # terminal 1 → http://localhost:4000
npm run dev:client         # terminal 2 → http://localhost:5173
```
Vite proxies `/api/*` to the server automatically.

## Build & run (production, single service)
```bash
npm run build              # builds client → client/dist
NODE_ENV=production npm start   # Express serves the site + API on :4000
```

## Deploy options

### ⭐ Vercel (static site + serverless contact function)
The repo is preconfigured ([vercel.json](vercel.json) + [api/contact.js](api/contact.js)).

1. Push the repo to GitHub.
2. On Vercel: **Add New → Project → Import** this repo. Leave everything default
   — `vercel.json` sets the build (`client` → `client/dist`), the security
   headers, and asset caching. `api/contact.js` is auto-deployed as `/api/contact`.
3. **To receive messages**, add an env var in
   **Project → Settings → Environment Variables** (redeploy after adding):
   `WEB3FORMS_ACCESS_KEY` = your free key from [web3forms.com](https://web3forms.com)
   — the `/api/contact` function reads it server-side and emails you, so the key
   never touches the repo or the browser bundle. (Alternatively set
   `CONTACT_WEBHOOK_URL` for Slack/Discord/Zapier.) Without either, submissions
   succeed but only appear in the function logs.
4. Deploy. Then update the placeholder domain (see "Before you deploy").

> The Express server in `server/` is **not** used on Vercel (it's for the
> full-stack hosts below); `.vercelignore` excludes it.

### A. Full-stack, one service — Render / Railway / Fly / Docker
Express serves the built client and the contact API together.

- **Render:** push to GitHub, "New → Blueprint", pick this repo (`render.yaml`).
- **Docker:**
  ```bash
  docker build -t yostina-portfolio .
  docker run -p 4000:4000 -e NODE_ENV=production yostina-portfolio
  ```
- **Any Node host:** build command `npm run build && npm --prefix server install`,
  start command `node server/index.js`.

### B. Static frontend + separate API — Vercel / Netlify / GitHub Pages
Deploy `client/` as a static site (build: `npm run build`, output: `dist`).
Host `server/` separately and point the frontend at it:
set `VITE_API_URL=https://your-api-host` in the client build env, and set
`CORS_ORIGIN=https://your-frontend-domain` on the server.
Without a backend the form UI still renders but submissions won't send —
set a `CONTACT_WEBHOOK_URL` or a form service.

## Production notes
- Security headers via **helmet** (with a CSP allowing Google Fonts + the
  contribution chart), **gzip** compression, and a **rate limit** (5 msgs /
  10 min / IP) on the contact endpoint.
- Static assets in `/assets` are fingerprinted and served `immutable`;
  `index.html` is `no-cache`.
- Health check: `GET /api/health`.
- Contact messages are appended to `server/messages.log` (ephemeral on most
  PaaS) and optionally forwarded to `CONTACT_WEBHOOK_URL`.
