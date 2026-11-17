import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Github from './components/Github.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Cursor spotlight: every `.spot` tile gets --mx/--my relative to the pointer,
// so borders near the cursor light up — even on tiles you're not hovering.
function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.querySelectorAll('.spot').forEach((el) => {
          const r = el.getBoundingClientRect();
          el.style.setProperty('--mx', `${e.clientX - r.left}px`);
          el.style.setProperty('--my', `${e.clientY - r.top}px`);
        });
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);
}

export default function App() {
  useSpotlight();
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Github />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
