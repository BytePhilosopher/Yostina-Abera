import Reveal from './Reveal.jsx';

export default function SectionHead({ index, eyebrow, title, children }) {
  return (
    <Reveal className="section__head">
      <p className="section__eyebrow">
        <span className="section__index">{index}</span>
        <span className="section__rule" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="section__title">{title}</h2>
      {children && <p className="section__sub">{children}</p>}
    </Reveal>
  );
}
