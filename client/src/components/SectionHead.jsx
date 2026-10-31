import Reveal from './Reveal.jsx';

export default function SectionHead({ icon: Icon, title }) {
  return (
    <Reveal className="section__head">
      <Icon className="section__icon" size={68} />
      <h2 className="section__title">{title}</h2>
    </Reveal>
  );
}
