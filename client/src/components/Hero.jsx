import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi';
import { contact, profile } from '../data.js';

const ease = [0.22, 1, 0.36, 1];
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div className="hero__text" variants={container} initial="hidden" animate="show">
          <motion.p className="hero__kicker" variants={item}>
            <span className="status-dot" aria-hidden="true" />
            Open to software &amp; ML engineering roles
          </motion.p>

          <motion.h1 className="hero__title" variants={item}>
            Yostina <em>Abera</em>
          </motion.h1>

          <motion.p className="hero__lede" variants={item}>
            {profile.role} building reliable backends, ML pipelines and data systems —
            from a national digital ID platform serving <strong>50M+ people</strong> to
            real-time computer vision.
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <a href="#work" className="btn btn--primary">
              View selected work <FiArrowRight size={16} />
            </a>
            <a href={contact.cv} download className="btn btn--outline">
              <FiDownload size={16} /> Download CV
            </a>
          </motion.div>

          <motion.ul className="hero__meta" variants={item}>
            <li><FiMapPin size={14} /> {profile.location}</li>
            <li>{profile.focus}</li>
          </motion.ul>
        </motion.div>

        <motion.figure
          className="hero__portrait"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
        >
          <div className="hero__frame">
            <img src="/profile.jpg" alt={`Portrait of ${profile.fullName}`} width="890" height="1042" />
          </div>
          <motion.figcaption
            className="hero__badge"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.7 }}
          >
            <span className="hero__badge-label">Currently</span>
            <strong>{profile.current.org}</strong>
            <span>{profile.current.what}</span>
          </motion.figcaption>
          <span className="hero__ring" aria-hidden="true" />
        </motion.figure>
      </div>
    </section>
  );
}
