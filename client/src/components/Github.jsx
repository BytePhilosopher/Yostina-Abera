import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import Reveal from './Reveal.jsx';
import { contact } from '../data.js';

export default function Github() {
  const [failed, setFailed] = useState(false);
  const user = contact.githubUser;
  const chart = `https://ghchart.rshah.org/a9835f/${user}`;
  const profile = `https://github.com/${user}`;

  return (
    <section className="section section--alt" id="github">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__index">04 — Activity</span>
          <h2 className="section__title">GitHub contributions</h2>
        </Reveal>

        <Reveal className="gh-card" delay={0.1}>
          <div className="gh-card__header">
            <div className="gh-card__id">
              <span className="gh-card__mark"><FaGithub /></span>
              <span className="gh-card__idtext">
                <a href={profile} target="_blank" rel="noopener">@{user}</a>
                <small>My open-source & project activity over the last year</small>
              </span>
            </div>
            <a className="gh-card__cta" href={profile} target="_blank" rel="noopener">
              View profile <FiArrowUpRight size={15} />
            </a>
          </div>

          <div className="gh-card__chart">
            {failed ? (
              <p className="gh-card__fallback">
                Live graph unavailable right now — see it on{' '}
                <a href={profile} target="_blank" rel="noopener">my GitHub profile</a>.
              </p>
            ) : (
              <img
                src={chart}
                alt={`${user}'s GitHub contribution graph for the past year`}
                loading="lazy"
                onError={() => setFailed(true)}
              />
            )}
          </div>

          <div className="gh-card__footer">
            <span className="gh-card__hint">Each square is a day — darker means more commits.</span>
            <span className="gh-card__legend">
              Less
              <i className="gh-sq gh-sq--0" />
              <i className="gh-sq gh-sq--1" />
              <i className="gh-sq gh-sq--2" />
              <i className="gh-sq gh-sq--3" />
              <i className="gh-sq gh-sq--4" />
              More
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
