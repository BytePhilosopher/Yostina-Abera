import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaChrome, FaGithub } from 'react-icons/fa';
import SectionHead from './SectionHead.jsx';
import { projects } from '../data.js';

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead index="01" eyebrow="Selected work" title="Projects with measurable outcomes">
          A few things I've designed, built and shipped — each with the number that mattered.
        </SectionHead>

        <div className="work-grid">
          {projects.map((p, i) => (
            <motion.article
              className="work-card"
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.1 }}
            >
              <header className="work-card__head">
                <span className="work-card__index">{String(i + 1).padStart(2, '0')}</span>
                <span className="work-card__kind">{p.kind}</span>
              </header>

              <div className="work-card__metric">
                <strong>{p.metric}</strong>
                <span>{p.metricLabel}</span>
              </div>

              <h3>{p.title}</h3>
              <p>{p.blurb}</p>

              <ul className="tags">
                {p.tools.map((t) => <li key={t}>{t}</li>)}
              </ul>

              <div className="work-card__links">
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={15} /> Source <FiArrowUpRight size={14} />
                </a>
                {p.store && (
                  <a href={p.store} target="_blank" rel="noopener noreferrer">
                    <FaChrome size={14} /> Chrome Web Store <FiArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
