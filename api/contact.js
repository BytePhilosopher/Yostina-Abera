// Vercel Serverless Function → POST /api/contact
// CommonJS so it runs regardless of package.json "type". Uses Node 18+ global fetch.

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

  // Serverless has no persistent disk — forward to a webhook to actually
  // receive messages. Set CONTACT_WEBHOOK_URL in the Vercel project settings
  // (Slack/Discord/Zapier/Make/Formspree, or an email service like Resend).
  if (process.env.CONTACT_WEBHOOK_URL) {
    try {
      await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `New portfolio message from ${name} <${email}>:\n${message}`,
          name, email, message, at: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error('Webhook forward failed:', err);
    }
  } else {
    // Visible in Vercel function logs even without a webhook configured.
    console.log('New contact message:', { name, email, message });
  }

  return res.status(200).json({ ok: true });
};
