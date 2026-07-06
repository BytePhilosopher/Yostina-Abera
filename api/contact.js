// Vercel Serverless Function → POST /api/contact
// CommonJS so it runs regardless of package.json "type". Uses Node 18+ global fetch.
//
// Delivery (set ONE in Vercel → Settings → Environment Variables):
//   WEB3FORMS_ACCESS_KEY  → forwards to Web3Forms, which emails you (recommended).
//   CONTACT_WEBHOOK_URL   → posts to a Slack/Discord/Zapier/Make webhook.
// The key stays server-side: never in the repo, never in the browser bundle.

const clean = (s, max) => String(s || '').trim().slice(0, max);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }

  const name = clean(body?.name, 100);
  const email = clean(body?.email, 200);
  const message = clean(body?.message, 4000);

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    // Preferred: Web3Forms (emails you). Key read from server env — stays secret.
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const r = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
          subject: `Portfolio message from ${name}`,
          from_name: 'Portfolio Contact Form',
        }),
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok || data.success === false) {
        console.error('Web3Forms error:', data);
        return res.status(502).json({ error: 'Could not send message.' });
      }
      return res.status(200).json({ ok: true });
    }

    // Alternative: generic webhook (Slack/Discord/Zapier/Make).
    if (process.env.CONTACT_WEBHOOK_URL) {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `New portfolio message from ${name} <${email}>:\n${message}`,
          name, email, message, at: new Date().toISOString(),
        }),
      });
      return res.status(200).json({ ok: true });
    }
  } catch (err) {
    console.error('Contact delivery failed:', err);
    return res.status(502).json({ error: 'Could not send message.' });
  }

  // No delivery configured yet — still succeeds; visible in function logs.
  console.log('New contact message (no delivery configured):', { name, email, message });
  return res.status(200).json({ ok: true });
};
