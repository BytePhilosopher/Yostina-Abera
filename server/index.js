import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// --- Contact endpoint ---
// Validates and records incoming messages. Swap the storage/notify step
// for an email provider (Nodemailer, Resend, etc.) when you're ready.
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const entry = { name, email, message, at: new Date().toISOString() };
  try {
    const file = path.join(__dirname, 'messages.log');
    fs.appendFileSync(file, JSON.stringify(entry) + '\n');
  } catch (err) {
    console.error('Failed to store message:', err);
  }
  console.log('New contact message:', entry);

  return res.status(200).json({ ok: true });
});

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

// --- Serve the built client in production ---
const clientDist = path.join(__dirname, '..', 'client', 'dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (_req, res) => res.sendFile(path.join(clientDist, 'index.html')));
}

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
