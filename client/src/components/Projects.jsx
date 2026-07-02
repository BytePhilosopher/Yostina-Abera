import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { projects } from '../data.js';
import { FiActivity, FiMessageSquare, FiTarget, FiTrendingUp, FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { FaChrome } from 'react-icons/fa';

const COVER_ICONS = {
  football: FiActivity,
  nlp: FiMessageSquare,
  focus: FiTarget,
  analytics: FiTrendingUp,
};

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__index">03 — Projects</span>
          <h2 className="section__title">Selected work</h2>
        </Reveal>

        <div className="showcase">
          {projects.map((p, i) => {
            const Icon = COVER_ICONS[p.icon] || FiTarget;
            const reversed = i % 2 === 1;
            return (
              <div className={`showcase-row ${reversed ? 'showcase-row--rev' : ''}`} key={p.title}>
                {/* Visual */}
                <motion.div
                  className="showcase-visual"
                  initial={{ opacity: 0, x: reversed ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '0px 0px -80px 0px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {p.image ? (
                    <div className="showcase-visual__inner showcase-visual__inner--img">
                      <img src={p.image} alt={p.title} loading="lazy" />
                    </div>
                  ) : (
                    <div className={`showcase-visual__inner cover cover--t${(i % 4) + 1}`}>
                      <span className="cover__watermark" aria-hidden="true"><Icon /></span>
                      <span className="cover__badge"><Icon /></span>
                    </div>
                  )}
                </motion.div>

                {/* Content */}
                <motion.div
                  className="showcase-content"
                  initial={{ opacity: 0, x: reversed ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '0px 0px -80px 0px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                >
                  <span className="showcase-num">0{i + 1}</span>
                  <h3 className="showcase-title">{p.title}</h3>
                  <p className="showcase-blurb">{p.blurb}</p>
                  <div className="showcase-tools">
                    {p.tools.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <div className="showcase-links">
                    <a className="showcase-link" href={p.link} target="_blank" rel="noopener">
                      View on GitHub <FiArrowRight size={14} />
                    </a>
                    {p.store && (
                      <a className="showcase-link showcase-link--store" href={p.store} target="_blank" rel="noopener">
                        <FaChrome size={13} /> Chrome Store <FiExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
