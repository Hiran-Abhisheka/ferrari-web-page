import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    id: 'engineering',
    title: 'Performance Engineering',
    text: 'Precision-crafted engines and aerodynamic designs deliver unmatched performance and driving emotion on road and track.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 19L12 12L17 19M17 5L12 12L7 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    stat: '0-100 km/h in 2.5s',
    detail: 'Twin-turbocharged V8 engines with hybrid technology producing up to 1000 horsepower.'
  },
  {
    id: 'home',
    title: 'Racing Legacy',
    text: 'Ferrari\'s storied Formula 1 heritage continues to influence every vehicle we produce, from track to street.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    stat: '16 Constructors Championships',
    detail: 'With over 70 years in motorsport, Ferrari holds the record for the most Grand Prix victories in Formula 1 history.'
  },
  {
    id: 'craftsmanship',
    title: 'Italian Craftsmanship',
    text: 'Handcrafted in Maranello, every Ferrari represents the pinnacle of automotive design and luxury materials.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    stat: '150+ Hours',
    detail: 'Each Ferrari interior is meticulously assembled by master craftspeople using the finest leather and carbon fiber components.'
  }
];

const FeaturePanels = () => {
  const sectionRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    
    // Create animations for each panel
    panelsRef.current.forEach((panel, index) => {
      // Stagger the animations
      gsap.fromTo(
        panel, 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.2
        }
      );
      
      // Create a hover effect for each panel
      panel.addEventListener('mouseenter', () => {
        gsap.to(panel, { 
          y: -10, 
          scale: 1.02, 
          boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)", 
          duration: 0.3 
        });
        gsap.to(panel.querySelector('.panel-icon'), { 
          y: -5, 
          scale: 1.1, 
          color: 'var(--accent)', 
          duration: 0.3 
        });
      });
      
      panel.addEventListener('mouseleave', () => {
        gsap.to(panel, { 
          y: 0, 
          scale: 1, 
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)", 
          duration: 0.3 
        });
        gsap.to(panel.querySelector('.panel-icon'), { 
          y: 0, 
          scale: 1, 
          color: 'currentColor', 
          duration: 0.3 
        });
      });
    });
    
    return () => {
      panelsRef.current.forEach(panel => {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars.trigger === panel) {
            trigger.kill();
          }
        });
      });
    };
  }, []);

  return (
    <section className="feature-panels-section" ref={sectionRef} id="features">
      <div className="container">
        <h2 className="section-title">Ferrari Legacy</h2>
        <div className="panels-container">
          {panels.map((panel, index) => (
            <div 
              key={panel.id} 
              id={panel.id} 
              className="feature-panel glass is-blur fade-in"
              ref={el => panelsRef.current[index] = el}
            >
              <div className="panel-icon">
                {panel.icon}
              </div>
              <h3 className="panel-title">{panel.title}</h3>
              <p className="panel-text">{panel.text}</p>
              <div className="panel-stat">
                <span className="stat-value">{panel.stat}</span>
                <p className="stat-detail">{panel.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturePanels;
