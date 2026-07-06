import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 4000;
const isProd = process.env.NODE_ENV === 'production';

// Behind a reverse proxy (Render, Railway, Fly, Heroku, Nginx) — needed for
// correct client IPs in rate limiting and secure cookies.
app.set('trust proxy', 1);
app.disable('x-powered-by');

// --- Security headers (CSP tuned for the app's external resources) ---
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        'default-src': ["'self'"],
        'script-src': ["'self'"],
        // Framer Motion + React set inline styles at runtime
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        'font-src': ["'self'", 'https://fonts.gstatic.com'],
        // GitHub contribution chart is loaded from ghchart
        'img-src': ["'self'", 'data:', 'https://ghchart.rshah.org'],
        'connect-src': ["'self'", 'https://api.web3forms.com', 'https://formspree.io'],
        'frame-ancestors': ["'none'"],
        'object-src': ["'none'"],
        'base-uri': ["'self'"],
        'upgrade-insecure-requests': isProd ? [] : null,
      },
    },
    crossOriginEmbedderPolicy: false,
  })
);

app.use(compression());

// CORS: lock to an allow-list in production if provided, else same-origin/open.
const allowed = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
app.use(
  cors({
    origin: allowed.length ? allowed : true,
    methods: ['GET', 'POST'],
  })
);

app.use(express.json({ limit: '10kb' }));

// --- Rate limiter for the contact endpoint ---
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many messages. Please try again later.' },
});

const clean = (s, max) => String(s || '').trim().slice(0, max);

// --- Contact endpoint ---
app.post('/api/contact', contactLimiter, async (req, res) => {
  const name = clean(req.body?.name, 100);
  const email = clean(req.body?.email, 200);
  const message = clean(req.body?.message, 4000);

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const entry = { name, email, message, at: new Date().toISOString() };

  // Persist locally (note: ephemeral on most PaaS filesystems).
  try {
    fs.appendFileSync(path.join(__dirname, 'messages.log'), JSON.stringify(entry) + '\n');
  } catch (err) {
    console.error('Failed to store message:', err);
  }

  // Optional: forward to a webhook (Slack/Discord/Zapier/Make/Formspree, etc.)
  if (process.env.CONTACT_WEBHOOK_URL) {
    try {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `New portfolio message from ${name} <${email}>:\n${message}`,
          ...entry,
        }),
      });
    } catch (err) {
      console.error('Webhook forward failed:', err);
    }
  }

  console.log('New contact message:', { name, email });
  return res.status(200).json({ ok: true });
});

app.get('/api/health', (_req, res) => res.json({ status: 'ok', uptime: process.uptime() }));

// Unknown API routes should 404 as JSON (not fall through to the SPA).
app.use('/api', (_req, res) => res.status(404).json({ error: 'Not found' }));

// --- Serve the built client in production ---
const clientDist = path.join(__dirname, '..', 'client', 'dist');
if (fs.existsSync(clientDist)) {
  app.use(
    express.static(clientDist, {
      setHeaders: (res, filePath) => {
        // Vite fingerprints files in /assets — safe to cache immutably.
        if (filePath.includes(`${path.sep}assets${path.sep}`)) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        } else {
          res.setHeader('Cache-Control', 'no-cache');
        }
      },
    })
  );
  app.get('*', (_req, res) => res.sendFile(path.join(clientDist, 'index.html')));
} else {
  console.warn('client/dist not found — run "npm run build" in /client to serve the UI.');
}

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT} (${isProd ? 'production' : 'development'})`));
