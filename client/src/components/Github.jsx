import { useState } from 'react';
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
    <section className="section" id="github">
      <div className="container">
        <SectionHead
          index="03"
          title="Activity"
          aside={<a className="link" href={profile} target="_blank" rel="noopener noreferrer">@{user} <FiArrowUpRight /></a>}
        />
        <Reveal className="tile spot activity" delay={0.1}>
          {failed ? (
            <p className="muted">Contribution graph unavailable.</p>
          ) : (
            <img
              src={chart}
              alt={`${user}'s GitHub contributions over the past year`}
              loading="lazy"
              onError={() => setFailed(true)}
            />
          )}
        </Reveal>
      </div>
    </section>
  );
}
