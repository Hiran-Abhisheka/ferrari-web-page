import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';
import './styles/hero-animations.css';
import './styles/intro-animations.css';
import './styles/transitions.css';
import './styles/racing.css';
import smoothScrollPolyfill from './utils/scrollPolyfill.js';

// Initialize the smooth scroll polyfill
smoothScrollPolyfill();

createRoot(document.getElementById('root')).render(<App />);
