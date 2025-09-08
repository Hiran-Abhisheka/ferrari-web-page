import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger if not already registered
gsap.registerPlugin(ScrollTrigger);

const Racing = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    // Create animation for the section
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Create staggered animations for the content elements
    gsap.fromTo(
      content.querySelectorAll('.animate-in'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: content,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      // Clean up scroll triggers when component unmounts
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === section || trigger.vars.trigger === content) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section className="racing-section section" id="racing" ref={sectionRef}>
      <div className="container header-container">
        <h2 className="section-title">Ferrari Racing</h2>
      </div>
      <div className="container" ref={contentRef}>
        <div className="racing-content">
          <div className="racing-highlights">
            <div className="highlight-card glass is-blur animate-in">
              <div className="highlight-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="highlight-title">Formula 1</h3>
              <p className="highlight-text">
                The world's most prestigious motorsport competition where Ferrari has dominated for decades with innovative engineering and fearless drivers.
              </p>
              <div className="highlight-stats">
                <span className="stat-value">16</span>
                <span className="stat-label">Constructors Championships</span>
              </div>
            </div>

            <div className="highlight-card glass is-blur animate-in">
              <div className="highlight-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12H2M22 12L18 8M22 12L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="highlight-title">Le Mans</h3>
              <p className="highlight-text">
                Ferrari's triumphant return to endurance racing, showcasing our commitment to innovation and performance across all motorsport disciplines.
              </p>
              <div className="highlight-stats">
                <span className="stat-value">9</span>
                <span className="stat-label">Overall Victories</span>
              </div>
            </div>

            <div className="highlight-card glass is-blur animate-in">
              <div className="highlight-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22V2M12 22L8 18M12 22L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="highlight-title">GT Racing</h3>
              <p className="highlight-text">
                From the 488 GT3 to the 296 GT3, Ferrari continues to dominate GT championships worldwide with cutting-edge technology and expert drivers.
              </p>
              <div className="highlight-stats">
                <span className="stat-value">31</span>
                <span className="stat-label">World Championships</span>
              </div>
            </div>
          </div>

          <div className="racing-heritage animate-in">
            <h3>A Legacy of Speed</h3>
            <p>
              Since our founding in 1947, racing has been the heart and soul of Ferrari. Every road car we produce benefits from the technology and innovation developed on the track. Our racing DNA is inseparable from our identity, driving us to continuously push the boundaries of what's possible in automotive engineering and design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Racing;
