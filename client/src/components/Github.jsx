import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { contact } from '../data.js';
import { Ghost } from './Icons.jsx';

export default function Github() {
  const [failed, setFailed] = useState(false);
  const user = contact.githubUser;
  const chart = `https://ghchart.rshah.org/ff7a18/${user}`;
  const profile = `https://github.com/${user}`;

  return (
    <section className="section section--alt" id="github">
      <div className="container">
        <SectionHead icon={Ghost} title="Commits" />

        <Reveal className="scroll-card" delay={0.1}>
          <div className="scroll-card__chart">
            {failed ? (
              <p className="scroll-card__fallback">Graph unavailable right now.</p>
            ) : (
              <img
                src={chart}
                alt={`${user}'s GitHub contribution graph for the past year`}
                loading="lazy"
                onError={() => setFailed(true)}
              />
            )}
          </div>
          <a className="scroll-card__cta" href={profile} target="_blank" rel="noopener">
            <FaGithub size={17} /> @{user} <FiArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
