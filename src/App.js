import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Home from './componets/Home';
import Navbar from './componets/Navbar';
import About from './componets/About';
import Skills from './componets/Skills';
import Projects from './componets/Projects';
import Contact from './componets/Contact';
import Footer from './componets/Footer';
import Certification from './componets/Certification';
import Resume from './componets/Resume';
import BottomNav from './componets/BottomNav';
import ScrollToTop from './componets/ScrollToTop';

gsap.registerPlugin(ScrollTrigger);
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F9FAFB] text-gray-800 overflow-x-hidden selection:bg-[#4F8EF7]/30 font-sans relative pb-20 md:pb-0">
        <Navbar />

        <div className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Certification" element={<Certification />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>

        <Footer />
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
