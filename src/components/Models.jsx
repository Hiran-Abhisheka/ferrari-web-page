import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Models = () => {
  const sectionRef = useRef(null);
  const modelsRef = useRef(null);

  // Ferrari model data
  const ferrariModels = [
    {
      id: 'f80',
      name: 'Ferrari F80',
      image: 'https://cdn.ferrari.com/cms/network/media/img/resize/670e710357a595000f736188-ferrari-f80-lineup-desktop?height=750',
      description: 'The revolutionary F80 represents Ferrari\'s vision of the future, blending cutting-edge technology with iconic design.'
    },
    {
      id: '296gtb',
      name: 'Ferrari 296 GTB',
      image: 'https://cdn.ferrari.com/cms/network/media/img/resize/60d453eae26eb865e634a268?height=750',
      description: 'The 296 GTB defines a new segment of Ferrari V6 hybrid architecture, delivering unprecedented driving pleasure.'
    },
    {
      id: 'sf90',
      name: 'Ferrari SF90 Stradale',
      image: 'https://cdn.ferrari.com/cms/network/media/img/resize/5dd552852cdb32285a785d2e-line-up-ferrari-sf90-stradale?height=750',
      description: 'The SF90 Stradale is Ferrari\'s first series production PHEV (Plug-in Hybrid Electric Vehicle), delivering extreme performance.'
    },
    {
      id: '12cilindri',
      name: 'Ferrari 12Cilindri',
      image: 'https://cdn.ferrari.com/cms/network/media/img/resize/66335816a44e370010b54945-lineup-12cilindri-desk?height=750',
      description: 'The 12Cilindri continues Ferrari\'s tradition of powerful 12-cylinder engines with uncompromising performance.'
    },
    {
      id: '296-speciale-a',
      name: 'Ferrari 296 Speciale A',
      image: 'https://cdn.ferrari.com/cms/network/media/img/resize/680f81baa169ef00204a0a49-lineup_296speciale_a?height=750',
      description: 'The 296 Speciale A combines open-top driving pleasure with exceptional engineering for an unforgettable experience.'
    },
    {
      id: 'daytona-sp3',
      name: 'Ferrari Daytona SP3',
      image: 'https://cdn.ferrari.com/cms/network/media/img/resize/6198d2ed2ce9303ca1976d00-lineup-desktop-ferrari-daytona-sp3?height=750',
      description: 'The Daytona SP3 pays homage to Ferrari\'s legendary racing heritage with contemporary design and technology.'
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const modelsGrid = modelsRef.current;
    const models = modelsRef.current.querySelectorAll('.model-card');
    
    // Flag to track if grid hover effect is active
    let isGridHoverActive = false;

    // Animate section title
    gsap.fromTo(
      section.querySelector('.section-title'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );

    // Create a more impressive fade-in animation for models with staggered effect
    models.forEach((model, index) => {
      // Create a unique scroll trigger for each model
      ScrollTrigger.create({
        trigger: model,
        start: "top bottom-=100px",
        end: "bottom center",
        onEnter: () => {
          gsap.fromTo(
            model,
            {
              y: 70,
              opacity: 0,
              scale: 0.95,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.9,
              delay: index * 0.12, // Stagger the animations
              ease: "power3.out",
            }
          );
        },
        once: true // Only trigger once
      });
    });

    // Function to handle the hover state for the entire grid
    const enableGridHoverEffect = () => {
      if (!isGridHoverActive) {
        isGridHoverActive = true;
        modelsGrid.classList.add('models-hover-active');
      }
    };
    
    // Event listener for the grid
    modelsGrid.addEventListener('mouseenter', enableGridHoverEffect);
    
    // Event listener for grid mouseleave
    modelsGrid.addEventListener('mouseleave', () => {
      isGridHoverActive = false;
      modelsGrid.classList.remove('models-hover-active');
      
      // Remove focus class from all models
      models.forEach(model => {
        model.classList.remove('model-focus');
      });
      
      // Reset all models to normal state with a smooth transition
      gsap.to(models, {
        filter: 'grayscale(0) blur(0px)',
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
        clearProps: 'filter,scale'
      });
    });

    // Add hover effect for each model
    models.forEach((model) => {
      const image = model.querySelector('.model-image');
      const content = model.querySelector('.model-content');
      
      model.addEventListener('mouseenter', () => {
        // First, remove focus class from all models
        models.forEach(m => {
          m.classList.remove('model-focus');
        });
        
        // Add focus class to current model
        model.classList.add('model-focus');
        
        // Apply grayscale and blur to all other models
        models.forEach(otherModel => {
          if (otherModel !== model) {
            gsap.to(otherModel, {
              filter: 'grayscale(1) blur(2px)',
              scale: 0.98,
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        });
        
        // Zoom effect for the current model
        gsap.to(model, {
          filter: 'grayscale(0) blur(0px)',
          scale: 1.03,
          duration: 0.3,
          ease: 'power2.out',
          zIndex: 2
        });
        
        gsap.to(content, { 
          y: -10, 
          duration: 0.3, 
          ease: 'power2.out' 
        });
      });
      
      // We don't need individual mouseleave handlers for each card
      // since we handle the effect toggling entirely on mouseenter
    });
  }, []);

  return (
    <section className="models-section section" id="models" ref={sectionRef}>
      <div className="container header-container">
        <h2 className="section-title">Our Models</h2>
      </div>
      <div className="models-fade-container">
        <div className="container">
          <div className="models-grid" ref={modelsRef}>
            {ferrariModels.map((model) => (
              <div className="model-card" key={model.id} style={{ opacity: 0 }}>
                <div className="model-image-container">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="model-image"
                    loading="lazy"
                  />
                </div>
                <div className="model-content">
                  <h3 className="model-name">{model.name}</h3>
                  <p className="model-description">{model.description}</p>
                  <button className="btn neon-border small">Discover</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;
