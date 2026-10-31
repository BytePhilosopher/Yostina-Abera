import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Pumpkin } from './Icons.jsx';

const links = [
  ['Shipped', '#work'],
  ['Built at', '#experience'],
  ['Stack', '#stack'],
  ['Commits', '#github'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className="nav"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav__pill">
        <a className="nav__logo" href="#top" aria-label="Back to top">
          <Pumpkin size={30} />
        </a>

        <div className={`nav__links ${open ? 'open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>

        <button
          className={`nav__toggle-btn ${open ? 'open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
    </motion.header>
  );
}
