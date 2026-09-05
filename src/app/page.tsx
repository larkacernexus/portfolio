'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}