import { Pumpkin } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="fangs" aria-hidden="true" />
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} Yostina Abera Gobie</span>
        <a href="#top" aria-label="Back to top"><Pumpkin size={30} /> Top</a>
      </div>
    </footer>
  );
}
