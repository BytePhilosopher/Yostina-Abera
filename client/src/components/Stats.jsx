import Reveal from './Reveal.jsx';
import { stats } from '../data.js';
import { Crowd, Glyphs, Spider } from './Icons.jsx';

const ICONS = { crowd: Crowd, glyphs: Glyphs, spider: Spider };

export default function Stats() {
  return (
    <section className="stats" aria-label="Highlights">
      <div className="container stats__grid">
        {stats.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <Reveal className="stat" key={s.label} delay={i * 0.08}>
              <Icon className="stat__icon" size={46} />
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
