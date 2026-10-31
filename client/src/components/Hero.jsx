import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown } from 'react-icons/fi';
import { contact } from '../data.js';
import Scene from './Scene.jsx';
import { Bat, Pumpkin, Spider, Web, WitchHat } from './Icons.jsx';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const EMBERS = [6, 14, 23, 31, 38, 47, 55, 62, 70, 78, 86, 94];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__embers" aria-hidden="true">
        {EMBERS.map((left, i) => (
          <span key={left} style={{ left: `${left}%`, animationDelay: `${(i * 1.7) % 9}s`, animationDuration: `${8 + (i % 5)}s` }} />
        ))}
      </div>
      <Web className="hero__web" size={280} />
      <Bat className="bat bat--1" size={54} />
      <Bat className="bat bat--2" size={34} />
      <Bat className="bat bat--3" size={24} />

      <div className="container hero__inner">
        <motion.div className="hero__text" variants={container} initial="hidden" animate="show">
          <motion.p className="hero__name" variants={item}>Yostina Abera</motion.p>
          <motion.h1 className="hero__title" variants={item}>Developer</motion.h1>
          <motion.p className="hero__lede" variants={item}>
            Backends, ML pipelines and data systems. Built after dark.
          </motion.p>
          <motion.div className="hero__actions" variants={item}>
            <a href="#work" className="btn btn--ember">See the work <FiArrowDown size={15} /></a>
            <a href={contact.cv} download className="btn btn--ghost">
              <FiDownload size={15} /> CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__photo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        >
          <div className="hero__moon">
            <img src="/profile-cutout.png" alt="Yostina Abera Gobie" />
            <span className="hero__fog" aria-hidden="true" />
            <span className="hero__lightning" aria-hidden="true" />
          </div>
          <WitchHat className="hero__hat" size="100%" />
          <div className="hero__orbit" aria-hidden="true">
            <Bat size={46} />
            <Bat size={30} />
            <Bat size={38} />
          </div>
          <Spider className="hero__spider" size={52} />
          <Pumpkin className="hero__pumpkin" size={140} />
          <Pumpkin className="hero__pumpkin hero__pumpkin--small" size={78} />
        </motion.div>
      </div>

      <Scene />
    </section>
  );
}
