import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiLinkedin, FiGithub, FiSend, FiCopy, FiCheck } from 'react-icons/fi';
import { contact } from '../data.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');
    try {
      const endpoint = contact.formEndpoint || `${import.meta.env.VITE_API_URL || ''}/api/contact`;
      const payload = { ...form, subject: `Portfolio message from ${form.name}` };
      if (contact.formAccessKey) payload.access_key = contact.formAccessKey; // Web3Forms

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) throw new Error();

      setStatus("Thanks — I'll reply soon.");
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus("Couldn't send. Please email me instead.");
    } finally {
      setSending(false);
    }
  };

  const channels = [
    { icon: <FiLinkedin />, label: 'LinkedIn', href: contact.linkedin },
    { icon: <FiGithub />, label: 'GitHub', href: contact.github },
    { icon: <FiPhone />, label: 'Phone', href: `tel:${contact.phoneHref}` },
  ];

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          className="tile contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact__intro">
            <span className="label"><span className="section__index">04</span> Contact</span>
            <h2 className="contact__title">Let's build<br />something.</h2>

            <button type="button" className="copy" onClick={copyEmail} aria-live="polite">
              <span className="copy__email">{contact.email}</span>
              <span className="copy__icon">{copied ? <FiCheck /> : <FiCopy />}</span>
              <span className="copy__hint">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <ul className="contact__channels">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={c.label}
                    title={c.label}
                  >
                    {c.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact__form" onSubmit={submit}>
            <div className="contact__row">
              <input
                type="text" required placeholder="Name" autoComplete="name" aria-label="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email" required placeholder="Email" autoComplete="email" aria-label="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <textarea
              required rows="5" placeholder="Message" aria-label="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button type="submit" className="btn btn--primary" disabled={sending}>
              <FiSend size={15} /> {sending ? 'Sending…' : 'Send'}
            </button>
            {status && <p className="contact__status" role="status">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
