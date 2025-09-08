import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Video asset resides in src/ root, so path needs one level up.
import bgVideo from '../_title_ferrari_202509020955.mp4';

const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Create timeline for sequence of animations - now starts at 0 delay since we have the intro screen
    const tl = gsap.timeline();
    
    // Animate the brand name with a reveal effect
    tl.fromTo(headlineRef.current, 
      { opacity: 0, scale: 0.92, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 1.4, ease: "power3.out" },
      0
    );
    
    // Animate the tagline to appear after the brand name
    tl.fromTo(taglineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
      0.7
    );
    
    // Animate the CTA buttons
    tl.fromTo(ctaRef.current.children,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
      1
    );
  }, []);

  // Handle scroll to top
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="hero" id="top" ref={heroRef}>
      <video className="hero-bg" src={bgVideo} autoPlay muted loop playsInline></video>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 ref={headlineRef} className="hero-headline" aria-label="Ferrari">
          Ferrari
        </h1>
        <p ref={taglineRef} className="tagline">Italian excellence in automotive engineering and design.</p>
        <p className="hero-description">Since 1947, crafting dreams on wheels with unmatched performance, precision, and passion.</p>
        <div ref={ctaRef} className="cta-row">
          <a href="#models" onClick={(e) => {
            e.preventDefault();
            document.getElementById('models').scrollIntoView({ behavior: 'smooth' });
          }} className="btn primary glow">Explore Models</a>
          <a href="#racing" onClick={(e) => {
            e.preventDefault();
            document.getElementById('racing').scrollIntoView({ behavior: 'smooth' });
          }} className="btn ghost">Racing Heritage</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
