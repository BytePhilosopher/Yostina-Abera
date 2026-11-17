import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { skills } from '../data.js';
import {
  SiPython, SiCplusplus, SiJavascript, SiTypescript, SiNodedotjs, SiExpress,
  SiNextdotjs, SiPostgresql, SiMysql, SiRedis, SiNumpy, SiPandas, SiScikitlearn,
  SiOpencv, SiHuggingface, SiDocker, SiLinux, SiGit, SiGithubactions, SiPytest,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const ICONS = {
  python: SiPython,
  java: FaJava,
  cplusplus: SiCplusplus,
  javascript: SiJavascript,
  typescript: SiTypescript,
  node: SiNodedotjs,
  express: SiExpress,
  next: SiNextdotjs,
  postgres: SiPostgresql,
  mysql: SiMysql,
  redis: SiRedis,
  numpy: SiNumpy,
  pandas: SiPandas,
  sklearn: SiScikitlearn,
  opencv: SiOpencv,
  huggingface: SiHuggingface,
  docker: SiDocker,
  linux: SiLinux,
  git: SiGit,
  actions: SiGithubactions,
  pytest: SiPytest,
};

function Skill({ name, icon, mono }) {
  const Icon = ICONS[icon];
  return (
    <li className="skill">
      <span className="skill__icon" aria-hidden="true">
        {Icon ? <Icon /> : <span className="skill__mono">{mono}</span>}
      </span>
      {name}
    </li>
  );
}

export default function Skills() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <SectionHead index="03" eyebrow="Toolkit" title="The stack I work in" />
        <div className="stack">
          {skills.map((g, i) => (
            <Reveal className="stack__group" key={g.group} delay={i * 0.06}>
              <h3>
                <span>{g.group}</span>
                <small>{String(g.items.length).padStart(2, '0')}</small>
              </h3>
              <ul>
                {g.items.map((s) => <Skill key={s.name} {...s} />)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
