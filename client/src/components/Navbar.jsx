import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { contact } from '../data.js';

const links = [
  ['Work', '#work'],
  ['Experience', '#experience'],
  ['Stack', '#stack'],
  ['Activity', '#github'],
  ['Contact', '#contact'],
];

function readTheme() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch { /* storage unavailable */ }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    const onScroll = () => {
      setOpen(false);
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0f1013' : '#f6f4ef');
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('theme', next); } catch { /* ignore */ }
  };

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="container nav__bar">
        <a className="nav__logo" href="#top" aria-label="Yostina Abera — back to top">
          <span className="nav__mark">YA</span>
          <span className="nav__name">Yostina Abera</span>
        </a>

        <div className={`nav__links ${open ? 'open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav__cv" href={contact.cv} download onClick={() => setOpen(false)}>Résumé</a>
        </div>

        <div className="nav__tools">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>
          <button
            className={`nav__toggle-btn ${open ? 'open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
