import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiArrowUpRight, FiSend } from 'react-icons/fi';
import { contact } from '../data.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

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

      setStatus("Thank you — I'll get back to you shortly.");
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('Something went wrong. Please email me directly.');
    } finally {
      setSending(false);
    }
  };

  const channels = [
    { icon: <FiMail />, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: <FiPhone />, label: 'Phone', value: contact.phone, href: `tel:${contact.phoneHref}` },
    { icon: <FiLinkedin />, label: 'LinkedIn', value: 'Connect with me', href: contact.linkedin },
    { icon: <FiGithub />, label: 'GitHub', value: `@${contact.githubUser}`, href: contact.github },
  ];

  return (
    <section className="section section--contact" id="contact">
      <div className="container">
        <motion.div
          className="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact__intro">
            <span className="section__index">05 — Contact</span>
            <h2 className="contact__title">Let's work together.</h2>
            <p className="contact__lede">
              Open to internships, research, and collaboration in ML, computer
              vision, and software engineering. I'll reply as soon as I can.
            </p>
            <ul className="contact__channels">
              {channels.map((c) => (
                <li key={c.label}>
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener">
                    <span className="contact__channel-icon">{c.icon}</span>
                    <span className="contact__channel-text">
                      <small>{c.label}</small>
                      {c.value}
                    </span>
                    <FiArrowUpRight className="contact__channel-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact__card" onSubmit={submit}>
            <label>
              <span>Name</span>
              <input
                type="text" required placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email" required placeholder="you@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
            <label>
              <span>Message</span>
              <textarea
                required rows="4" placeholder="Tell me about your project or role…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <button type="submit" disabled={sending}>
              <FiSend size={15} /> {sending ? 'Sending…' : 'Send message'}
            </button>
            {status && <p className="contact__status">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
