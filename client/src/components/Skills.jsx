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

const all = skills.flatMap((g) => g.items);
const half = Math.ceil(all.length / 2);
const rows = [all.slice(0, half), all.slice(half)];

function Item({ name, icon, mono }) {
  const Icon = ICONS[icon];
  return (
    <li className="marquee__item">
      {Icon ? <Icon aria-hidden="true" /> : <span className="marquee__mono" aria-hidden="true">{mono}</span>}
      {name}
    </li>
  );
}

export default function Skills() {
  return (
    <section className="stack" id="stack" aria-label="Tech stack">
      <div className="container stack__head">
        <span className="label">Stack</span>
        <span className="muted">{all.length} tools I ship with</span>
      </div>
      {rows.map((row, r) => (
        <div className={`marquee ${r ? 'marquee--reverse' : ''}`} key={r}>
          {/* Two copies so the loop is seamless; the second is hidden from screen readers */}
          {[0, 1].map((copy) => (
            <ul className="marquee__track" key={copy} aria-hidden={copy === 1 || undefined}>
              {row.map((s) => <Item key={s.name} {...s} />)}
            </ul>
          ))}
        </div>
      ))}
    </section>
  );
}
