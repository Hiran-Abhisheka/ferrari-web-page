import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Import video asset from src/ root
import bgVideo from '../_title_ferrari_202509020955.mp4';

const IntroScreen = ({ onIntroComplete }) => {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  // First, handle video loading and play it completely
  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Handle when the video is loaded and ready to play
      const handleLoadedData = () => {
        setVideoLoaded(true);
        // Show video immediately when loaded
        gsap.set(video, { opacity: 1 }); // Using set instead of to for better performance
        // Make sure video plays from the beginning
        video.currentTime = 0;
        
        // Add playback quality hints for better performance
        if (video.canPlayType) {
          video.playbackRate = 1.0;
        }
        
        video.play().catch(e => console.log("Video play error:", e));
        setVideoPlaying(true);
      };
      
      // Use a simple timeout instead of constantly checking timeUpdate
      // This reduces the CPU load during video playback
      let timeoutId;
      
      const handleLoadedMetadata = () => {
        // Start a single timeout rather than monitoring timeupdate constantly
        timeoutId = setTimeout(() => {
          startTransition();
        }, 6500); // 6.5 seconds to ensure video has played enough
      };
      
      // Add event listeners
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      
      // Clean up
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        clearTimeout(timeoutId);
      };
    }
  }, []);
  
  // Handle the transition after video has played
  const startTransition = () => {
    // Create fade to black overlay
    const fadeToBlack = document.createElement('div');
    fadeToBlack.className = 'fade-to-black';
    
    // Add element to the intro screen
    const introScreen = document.querySelector('.intro-screen');
    introScreen.appendChild(fadeToBlack);
    
    // Create a simpler timeline with fewer concurrent animations
    const tl = gsap.timeline({
      onComplete: () => {
        // Tell parent the intro is done and we can show the main content
        onIntroComplete();
      }
    });
    
    // Optimize by reducing concurrent animations
    // First, dim the video slightly
    tl.to(overlayRef.current, {
      opacity: 0.7,
      duration: 0.8,
      ease: "power1.inOut"
    })
    
    // Then do a simple fade to black
    .to(fadeToBlack, {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut" // Using power1 instead of power2 for better performance
    });
  };

  return (
    <div className="intro-screen">
      <video 
        ref={videoRef} 
        className="intro-video" 
        src={bgVideo} 
        muted 
        playsInline
        preload="metadata"
        style={{ willChange: 'opacity' }}
      ></video>
      <div ref={overlayRef} className="intro-overlay"></div>
      {!videoLoaded && (
        <div className="video-loading">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
};

export default IntroScreen;
