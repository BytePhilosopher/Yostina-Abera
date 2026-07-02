import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { education } from '../data.js';

export default function Education() {
  return (
    <section className="section section--alt" id="education">
      <div className="container">
        <Reveal className="section__head section__head--center">
          <span className="section__index">02 — Education</span>
          <h2 className="section__title">Where I've learned</h2>
        </Reveal>

        <div className="edu-timeline">
          {education.map((e, i) => {
            const side = i % 2 === 0 ? 'left' : 'right';
            return (
              <motion.div
                className={`edu-node edu-node--${side}`}
                key={e.school}
                initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="edu-node__dot" aria-hidden="true" />
                <div className="edu-node__body">
                  <div className="edu-node__top">
                    <h3>{e.school}</h3>
                    <span className="edu-node__period">{e.period}</span>
                  </div>
                  <p className="edu-node__degree">
                    {e.degree} <span className="edu-node__badge">{e.detail}</span>
                  </p>
                  <p className="edu-node__brief">{e.brief}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
