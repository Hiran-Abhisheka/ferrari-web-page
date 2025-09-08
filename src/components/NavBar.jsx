import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import logo from '../pngwing.png';

const NavBar = () => {
  const navRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, { y: -40, opacity: 0, duration: 1, ease: 'power3.out' });
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Handle scroll to update active section
    const handleScroll = () => {
      const sections = ['features', 'models', 'racing', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset to trigger slightly before reaching section
      
      // First check if we're at the top section (Home)
      if (scrollPosition < 500) {
        setActiveSection('');
        return;
      }
      
      // Check other sections
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      
      // Default if no section is found but we're not at the top
      if (scrollPosition >= 500) {
        setActiveSection('features'); // Default to first section after home (Ferrari Legacy)
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple smooth scroll handler
  const smoothScrollTo = (e, sectionId) => {
    e.preventDefault();
    
    if (!sectionId) {
      // Scroll to top if no section ID provided
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setActiveSection('');
      return;
    }
    
    // Find the target section and scroll to it
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ 
        behavior: 'smooth' 
      });
      setActiveSection(sectionId);
    }
  };

  // Handle home link click to smoothly scroll to top
  const scrollToTop = (e) => {
    smoothScrollTo(e, null);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  // Close mobile menu after navigation
  const handleNavClick = (e, sectionId) => {
    smoothScrollTo(e, sectionId);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <nav ref={navRef} className={`nav-bar glass is-blur ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Ferrari Logo" className="ferrari-logo" />
        <span className="brand-name">FERRARI</span>
      </div>
      
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <span className={`hamburger-icon ${mobileMenuOpen ? 'open' : ''}`}></span>
      </div>
      
      <ul className={`nav-links ${mobileMenuOpen ? 'show' : ''}`}>
        <li><a href="#" onClick={scrollToTop} className={activeSection === '' ? 'active' : ''}>Home</a></li>
        <li className="excellence-nav-item">
          <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className={activeSection === 'features' ? 'active' : ''} title="Ferrari Legacy">
            Legacy
          </a>
        </li>
        <li><a href="#models" onClick={(e) => handleNavClick(e, 'models')} className={activeSection === 'models' ? 'active' : ''}>Models</a></li>
        <li><a href="#racing" onClick={(e) => handleNavClick(e, 'racing')} className={activeSection === 'racing' ? 'active' : ''}>Racing</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
      </ul>
      
      <a href="#" onClick={scrollToTop} className="btn neon-border mobile-hidden">Ferrari Home</a>
    </nav>
  );
};

export default NavBar;
