import { FiArrowUp } from 'react-icons/fi';
import { profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <a href="#top">Top <FiArrowUp size={14} /></a>
      </div>
    </footer>
  );
}
