import { motion } from 'framer-motion';
import SectionHead from './SectionHead.jsx';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead index="02" title="Experience" />

        <ol className="xp">
          {experience.map((e, i) => (
            <motion.li
              className="xp__row"
              key={e.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -40px 0px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
            >
              <h3 className="xp__org">{e.org}</h3>
              <div className="xp__body">
                <p className="xp__role">{e.role}</p>
                <p className="muted">{e.line}</p>
              </div>
              <ul className="tags xp__tags">
                {e.tools.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <time className="xp__period">{e.period}</time>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
