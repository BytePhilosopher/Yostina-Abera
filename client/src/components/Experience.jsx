import { motion } from 'framer-motion';
import SectionHead from './SectionHead.jsx';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <SectionHead index="02" eyebrow="Experience" title="Where I've built">
          Engineering internships across national infrastructure, sports analytics and ML research.
        </SectionHead>

        <ol className="timeline">
          {experience.map((e, i) => (
            <motion.li
              className="timeline__item"
              key={e.org}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -60px 0px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
            >
              <time className="timeline__period">{e.period}</time>
              <div className="timeline__body">
                <h3>{e.org}</h3>
                <p className="timeline__role">{e.role}</p>
                <p className="timeline__line">{e.line}</p>
                <ul className="tags">
                  {e.tools.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
