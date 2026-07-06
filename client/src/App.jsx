import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Github from './components/Github.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Github />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
