import Reveal from './Reveal.jsx';
import { stats } from '../data.js';

export default function Stats() {
  return (
    <section className="stats" aria-label="Highlights">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <Reveal className="stat" key={s.label} delay={i * 0.08}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
