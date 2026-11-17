import Reveal from './Reveal.jsx';

export default function SectionHead({ index, title, aside }) {
  return (
    <Reveal className="section__head">
      <h2 className="section__title">
        <span className="section__index">{index}</span>
        {title}
      </h2>
      {aside && <p className="section__aside">{aside}</p>}
    </Reveal>
  );
}
