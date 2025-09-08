import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import IntroScreen from './components/IntroScreen.jsx';
import Hero from './components/Hero.jsx';
import NavBar from './components/NavBar.jsx';
import FeaturePanels from './components/FeaturePanels.jsx';
import Models from './components/Models.jsx';
import Racing from './components/Racing.jsx';
import FuturisticFooter from './components/FuturisticFooter.jsx';

import './styles/layout.css';
import './styles/layout-tablet.css';

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const appRef = useRef(null);
  const contentRef = useRef(null);

  // Handle intro completion
  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  // Animation for main content after intro
  useEffect(() => {
    if (introComplete && contentRef.current) {
      const ctx = gsap.context(() => {
        // Animate the entire content container in
        gsap.fromTo(contentRef.current, 
          { opacity: 0 }, 
          { opacity: 1, duration: 1, ease: 'power2.out' }
        );

        // Reveal animation for navbar with slight stagger on elements
        gsap.fromTo('.nav-bar', 
          { y: -50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', clearProps: "all" }
        );
        
        // Stagger the nav items
        gsap.fromTo('.nav-links li', 
          { y: -15, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power2.out', delay: 0.3 }
        );

        // Remaining animations for other elements
        gsap.from('.fade-in', { opacity: 0, y: 40, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.5 });

        // Scroll-based panels parallax
        gsap.utils.toArray('.panel').forEach((panel, i) => {
          gsap.fromTo(panel, { y: 80, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          });
        });
      }, appRef);
      return () => ctx.revert();
    }
  }, [introComplete]);

  return (
    <div ref={appRef} className="app-shell">
      {/* Always render the intro screen initially, then use CSS to hide it after transition */}
      {!introComplete ? (
        <IntroScreen onIntroComplete={handleIntroComplete} />
      ) : (
        <div ref={contentRef} className="main-content reveal-animation">
          <NavBar />
          <Hero />
          <FeaturePanels />
          <Models />
          <Racing />
          <FuturisticFooter />
        </div>
      )}
    </div>
  );
};

export default App;
