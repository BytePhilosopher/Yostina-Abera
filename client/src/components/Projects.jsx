import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaChrome, FaGithub } from 'react-icons/fa';
import SectionHead from './SectionHead.jsx';
import { projects } from '../data.js';

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead index="01" title="Work" aside="Shipped, measured." />

        <div className="work-grid">
          {projects.map((p, i) => (
            <motion.article
              className="tile spot work-card"
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.08 }}
            >
              <header className="work-card__head">
                <span className="label">{String(i + 1).padStart(2, '0')} · {p.kind}</span>
                <div className="work-card__links">
                  {p.store && (
                    <a href={p.store} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on Chrome Web Store`}>
                      <FaChrome />
                    </a>
                  )}
                  <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} source on GitHub`}>
                    <FaGithub />
                  </a>
                </div>
              </header>

              <div className="work-card__metric">
                <strong>{p.metric}</strong>
                <span>{p.metricLabel}</span>
              </div>

              <div className="work-card__foot">
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.blurb}</p>
                </div>
                <a className="work-card__go" href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.title}`}>
                  <FiArrowUpRight />
                </a>
              </div>

              <ul className="tags">
                {p.tools.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
