import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { contact, profile, stats } from '../data.js';

const ease = [0.22, 1, 0.36, 1];
const tile = (i) => ({
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.7, ease, delay: 0.08 + i * 0.07 },
});

function useClock(timeZone) {
  const fmt = () =>
    new Intl.DateTimeFormat('en-GB', { timeZone, hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 15000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Hero() {
  const time = useClock(profile.timeZone);

  return (
    <section className="hero" id="top">
      <div className="container bento">
        <motion.div className="tile spot tile--intro" {...tile(0)}>
          <p className="pill"><span className="status-dot" aria-hidden="true" /> Available for roles</p>
          <h1 className="hero__name">Yostina<br />Abera</h1>
          <p className="hero__role">
            {profile.role} <span>/</span> {profile.focus}
          </p>
          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">Selected work <FiArrowRight size={16} /></a>
            <a href={contact.cv} download className="btn btn--outline"><FiDownload size={16} /> CV</a>
          </div>
        </motion.div>

        <motion.figure className="tile spot tile--photo" {...tile(1)}>
          <img src="/profile.jpg" alt={`Portrait of ${profile.fullName}`} width="890" height="1042" />
        </motion.figure>

        <motion.div className="tile spot tile--now" {...tile(2)}>
          <span className="label">Now</span>
          <div>
            <strong>{profile.current.org}</strong>
            <span className="muted">{profile.current.what}</span>
          </div>
        </motion.div>

        <motion.div className="tile spot tile--clock" {...tile(3)}>
          <span className="label">Local time</span>
          <div>
            <strong className="clock">{time}</strong>
            <span className="muted">{profile.location} · GMT+3</span>
          </div>
        </motion.div>

        {stats.map((s, i) => (
          <motion.div className="tile spot tile--stat" key={s.label} {...tile(4 + i)}>
            <strong>{s.value}</strong>
            <span className="muted">{s.label}</span>
          </motion.div>
        ))}

        <motion.div className="tile spot tile--social" {...tile(7)}>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href={`mailto:${contact.email}`} aria-label="Email"><FiMail /></a>
        </motion.div>
      </div>
    </section>
  );
}
