import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__index">01 — About</span>
          <h2 className="section__title">A little about me</h2>
        </Reveal>
        <Reveal className="about" delay={0.1}>
          <p className="about__lead">
            I'm a Computer Science student at Addis Ababa University with a strong
            foundation in data structures, algorithms, and applied machine learning.
          </p>
          <p>
            My work spans AI research, computer vision, and end-to-end data
            engineering — from a football video-analytics platform that tracks
            players and the ball in real match footage, to sentiment analysis for
            low-resource Amharic text. I care about rigor, clean pipelines, and
            building things that are genuinely useful.
          </p>
          <p>
            As an A2SV-trained engineer (Google-backed), I've solved 250+ competitive
            programming problems with a focus on graph theory and dynamic programming,
            and I bring that same problem-solving discipline to everything I build.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
