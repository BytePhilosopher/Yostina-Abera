import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { contact } from '../data.js';

export default function Github() {
  const [failed, setFailed] = useState(false);
  const user = contact.githubUser;
  const chart = `https://ghchart.rshah.org/3348e0/${user}`;
  const profile = `https://github.com/${user}`;

  return (
    <section className="section section--alt" id="github">
      <div className="container">
        <SectionHead index="04" eyebrow="Activity" title="Shipping consistently" />

        <Reveal className="activity" delay={0.1}>
          <div className="activity__chart">
            {failed ? (
              <p className="activity__fallback">Contribution graph is unavailable right now.</p>
            ) : (
              <img
                src={chart}
                alt={`${user}'s GitHub contribution graph for the past year`}
                loading="lazy"
                onError={() => setFailed(true)}
              />
            )}
          </div>
          <div className="activity__foot">
            <span>Contributions over the past year</span>
            <a href={profile} target="_blank" rel="noopener noreferrer">
              <FaGithub size={16} /> @{user} <FiArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
