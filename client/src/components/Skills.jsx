import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import { skills } from '../data.js';
import {
  SiPython, SiCplusplus, SiJavascript, SiTypescript, SiNodedotjs, SiExpress,
  SiNextdotjs, SiPostgresql, SiMysql, SiRedis, SiNumpy, SiPandas, SiScikitlearn,
  SiOpencv, SiHuggingface, SiDocker, SiLinux, SiGit, SiGithubactions, SiPytest,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Bat, Cauldron, Eyeball, Spider } from './Icons.jsx';

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

const GROUP_ICONS = { bat: Bat, cauldron: Cauldron, eyeball: Eyeball, spider: Spider };

function Tile({ name, icon, mono }) {
  const Icon = ICONS[icon];
  return (
    <li className="skill-tile">
      {Icon ? <Icon /> : <span className="skill-tile__mono">{mono}</span>}
      <span>{name}</span>
    </li>
  );
}

export default function Skills() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <SectionHead icon={Cauldron} title="Stack" />
        <div className="stack">
          {skills.map((g, i) => {
            const GroupIcon = GROUP_ICONS[g.icon];
            return (
              <Reveal className="stack__group" key={g.group} delay={i * 0.06}>
                <h3><GroupIcon size={28} /> {g.group}</h3>
                <ul>
                  {g.items.map((s) => <Tile key={s.name} {...s} />)}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
