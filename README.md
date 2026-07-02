# Yostina Abera — Portfolio

A modern, animated portfolio. **React + Vite** frontend, **Node.js + Express** backend.
Light/dark (white ↔ black) theme toggle, Framer Motion animations, a sliding
tech-logo marquee, and image-based project cards.

```
├── client/     React + Vite (UI)
│   ├── src/components/   sections
│   ├── src/context/      theme provider (light/dark)
│   ├── src/data.js       all content lives here — edit this to update the site
│   └── public/profile.jpg   ← put your photo here
└── server/     Express API (contact form) + serves the built client
```

## 1. Add your photo
Save your ID photo as **`client/public/profile.jpg`**.
Until then the hero shows your "YA" initials as a placeholder.

## 2. Add your real links
In `client/src/data.js`, set `contact.linkedin`, `contact.github`, and each
project's `link` (currently `"#"`).

## 3. Run it (development)
Two terminals:

```bash
# terminal 1 — backend (http://localhost:4000)
cd server && npm install && npm run dev

# terminal 2 — frontend (http://localhost:5173)
cd client && npm install && npm run dev
```

The Vite dev server proxies `/api/*` to the backend automatically.

## 4. Build for production
```bash
cd client && npm run build      # outputs client/dist
cd ../server && npm install && npm start   # serves the built site on :4000
```

## Deploy
- **Frontend only** (Netlify / Vercel / GitHub Pages): deploy `client` — the
  contact form needs the backend, so point it at a hosted API or use a form service.
- **Full stack**: host `server` (Render, Railway, Fly.io) after running the
  client build; Express serves `client/dist` and the API together.

## Editing content
Everything — education, experience, projects, skills — is in
`client/src/data.js`. No component edits needed for content changes.
