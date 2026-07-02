import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { skills } from '../data.js';
import {
  SiPython, SiCplusplus, SiJavascript, SiNodedotjs, SiExpress, SiNestjs,
  SiNextdotjs, SiPostgresql, SiMongodb, SiMysql, SiRedis, SiTensorflow,
  SiNumpy, SiScikitlearn, SiOpencv, SiHuggingface, SiStreamlit, SiDocker,
  SiLinux, SiGit,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const ICONS = {
  python: SiPython,
  java: FaJava,
  cplusplus: SiCplusplus,
  javascript: SiJavascript,
  node: SiNodedotjs,
  express: SiExpress,
  nest: SiNestjs,
  next: SiNextdotjs,
  postgres: SiPostgresql,
  mongo: SiMongodb,
  mysql: SiMysql,
  redis: SiRedis,
  tensorflow: SiTensorflow,
  numpy: SiNumpy,
  sklearn: SiScikitlearn,
  opencv: SiOpencv,
  huggingface: SiHuggingface,
  streamlit: SiStreamlit,
  docker: SiDocker,
  linux: SiLinux,
  git: SiGit,
};

function Chip({ name, icon }) {
  const Icon = ICONS[icon];
  return (
    <div className="skill-chip">
      {Icon ? <Icon /> : <span className="skill-chip__mono">{name.slice(0, 2)}</span>}
      <span className="skill-chip__name">{name}</span>
    </div>
  );
}

function Row({ items, reverse = false, duration = 32 }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <motion.div
        className="marquee__row"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((s, i) => <Chip key={i} {...s} />)}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const mid = Math.ceil(skills.length / 2);
  const rowA = skills.slice(0, mid);
  const rowB = skills.slice(mid);

  return (
    <section className="section skills-section" id="skills">
      <Reveal className="skills-head">
        <h2 className="section__title">Skills</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <Row items={rowA} duration={34} />
        <Row items={rowB} reverse duration={40} />
      </Reveal>
    </section>
  );
}
