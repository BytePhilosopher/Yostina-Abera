import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { contact } from '../data.js';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const NAME = 'YOSTINA';

function useTypewriter(text, speed = 150, startDelay = 500) {
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    let interval;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setTyped(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);
    return () => { clearTimeout(start); clearInterval(interval); };
  }, [text, speed, startDelay]);
  return { typed, done };
}

export default function Hero() {
  const { typed, done } = useTypewriter(NAME);

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <motion.div className="hero__text" variants={container} initial="hidden" animate="show">
          <h1 className="hero__title" aria-label={NAME}>
            <span>{typed}</span>
            <span className={`hero__caret ${done ? 'hero__caret--blink' : ''}`} aria-hidden="true" />
          </h1>
          <motion.p className="hero__tagline" variants={item}>
            <span className="hero__tagline-line">the Developer,</span>{' '}
            <motion.span
              className="hero__tagline-accent"
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              with passion
            </motion.span>
          </motion.p>
          <motion.p className="hero__lede" variants={item}>
            I build functional and scalable sites and craft clear insights from
            messy real-world signals.
          </motion.p>
          <motion.div className="hero__actions" variants={item}>
            <a href="#projects" className="btn btn--dark">View my work</a>
            <a href={contact.cv} download className="btn btn--ghost">
              <FiDownload size={15} /> Download CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__photo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        >
          <div className="hero__ring" aria-hidden="true" />
          <div className="hero__photo-frame">
            <img
              src="/profile.png"
              alt="Yostina Abera Gobie"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'block';
              }}
            />
            <span className="hero__photo-initials" style={{ display: 'none' }}>YA</span>
          </div>
          <div className="hero__blob" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
