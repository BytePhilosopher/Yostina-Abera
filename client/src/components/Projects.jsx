import { motion } from 'framer-motion';
import SectionHead from './SectionHead.jsx';
import { projects } from '../data.js';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaChrome, FaGithub } from 'react-icons/fa';
import { Cauldron, Eyeball, Eyes, Pumpkin, PumpGhost, SkullCoin } from './Icons.jsx';

const SIGILS = { eyeball: Eyeball, pump: PumpGhost, cauldron: Cauldron, coin: SkullCoin };

export default function Projects() {
  return (
    <section className="section" id="work">
      <Eyes className="lurker lurker--work" size={70} delay={1.4} />
      <div className="container">
        <SectionHead icon={Pumpkin} title="Shipped" />

        <div className="work-grid">
          {projects.map((p, i) => {
            const Sigil = SIGILS[p.icon];
            return (
              <motion.article
                className="work-card"
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.1 }}
              >
                <div className="work-card__art">
                  <Sigil className="work-card__sigil" size={132} />
                </div>
                <div className="fangs fangs--thin" aria-hidden="true" />
                <div className="work-card__body">
                  <div className="work-card__metric">
                    <strong>{p.metric}</strong>
                    <span>{p.metricLabel}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.blurb}</p>
                  <div className="work-card__tools">
                    {p.tools.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <div className="work-card__links">
                    <a href={p.link} target="_blank" rel="noopener">
                      <FaGithub size={16} /> Code <FiArrowUpRight size={14} />
                    </a>
                    {p.store && (
                      <a href={p.store} target="_blank" rel="noopener">
                        <FaChrome size={15} /> Install <FiArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
