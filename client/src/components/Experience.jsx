import { motion } from 'framer-motion';
import SectionHead from './SectionHead.jsx';
import { experience } from '../data.js';
import { IdPrint, NeuralKnot, Tombstone, WatchedBall } from './Icons.jsx';

const SIGILS = { knot: NeuralKnot, ball: WatchedBall, print: IdPrint };

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <SectionHead icon={Tombstone} title="Built at" />

        <ol className="trail">
          {experience.map((e, i) => {
            const Sigil = SIGILS[e.icon];
            return (
              <motion.li
                className="trail__item"
                key={e.org}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              >
                <span className="trail__sigil"><Sigil size={40} /></span>
                <div className="trail__body">
                  <div className="trail__top">
                    <h3>{e.org}</h3>
                    <time>{e.period}</time>
                  </div>
                  <p className="trail__role">{e.role}</p>
                  <p className="trail__line">{e.line}</p>
                  <div className="work-card__tools">
                    {e.tools.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
