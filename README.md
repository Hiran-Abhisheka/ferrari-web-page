# 🏎️ Ferrari Futuristic Web Experience

A stunning, modern Ferrari-themed website built with React and GSAP animations. Features a cinematic video background, sleek UI design, and smooth scroll animations that create an immersive automotive experience.

## 🌐 Live Preview

**[View Live Site](https://ferrarinew.netlify.app/)**

## ✨ Features

- **Cinematic Hero Section** - Full-screen video background with Ferrari branding
- **Smooth Animations** - GSAP-powered transitions and scroll-triggered animations
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI Components**:
  - Interactive Navigation Bar
  - Dynamic Intro Screen
  - Feature Panels with hover effects
  - Ferrari Models Showcase
  - Racing Heritage Section
  - Terminal-style Header
  - Futuristic Footer
- **Glass Morphism Design** - Modern glassmorphic UI elements
- **Performance Optimized** - Built with Vite for fast loading and development

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 5.3+
- **Animations**: GSAP 3.12+ with ScrollTrigger
- **Styling**: Custom CSS with modern effects
- **Video**: MP4 background videos
- **Deployment**: Netlify

## 📱 Components

- `Hero.jsx` - Main hero section with video background
- `IntroScreen.jsx` - Initial loading screen
- `NavBar.jsx` - Responsive navigation component
- `FeaturePanels.jsx` - Interactive feature showcase
- `Models.jsx` - Ferrari models display
- `Racing.jsx` - Racing heritage section
- `TerminalHeader.jsx` - Tech-style terminal header
- `FuturisticFooter.jsx` - Modern footer design

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Hiran-Abhisheka/ferrari-web-page.git
cd ferrari-web-page
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build & Deploy

### Development

```bash
npm run dev          # Start development server
```

### Production Build

```bash
npm run build        # Build for production
npm run preview      # Preview production build locally
```

## 📁 Project Structure

```
ferrari-web-page/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.jsx
│   │   ├── IntroScreen.jsx
│   │   ├── NavBar.jsx
│   │   ├── FeaturePanels.jsx
│   │   ├── Models.jsx
│   │   ├── Racing.jsx
│   │   ├── TerminalHeader.jsx
│   │   └── FuturisticFooter.jsx
│   ├── styles/              # CSS stylesheets
│   │   ├── global.css
│   │   ├── hero-animations.css
│   │   ├── intro-animations.css
│   │   ├── layout.css
│   │   ├── layout-tablet.css
│   │   ├── racing.css
│   │   ├── terminal.css
│   │   └── transitions.css
│   ├── utils/               # Utility functions
│   │   ├── scrollPolyfill.js
│   │   └── smoothScroll.js
│   ├── App.jsx             # Main app component
│   ├── main.jsx           # Entry point
│   └── assets/            # Images and videos
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design Features

- **Glassmorphism Effects** - Modern glass-like UI elements
- **Neon Accents** - Ferrari red highlights and glowing effects
- **Smooth Scrolling** - Custom scroll behavior with animations
- **Video Integration** - High-quality Ferrari promotional videos
- **Responsive Layout** - Adapts to all screen sizes
- **Performance Optimized** - Lazy loading and efficient animations

## 🔧 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `App.jsx`
3. Add corresponding styles in `src/styles/`

### Modifying Animations

- GSAP animations are configured in each component
- ScrollTrigger settings can be adjusted for different effects
- Timeline sequences can be customized in component `useEffect` hooks

### Changing Video Assets

- Replace video files in `src/`
- Update import paths in relevant components
- Ensure video formats are web-optimized (MP4 recommended)

## 🚀 Future Enhancements

- [ ] React Router integration for multi-page navigation
- [ ] 3D model viewer with Three.js
- [ ] Progressive image/video loading
- [ ] Dark/Light theme toggle
- [ ] Accessibility improvements
- [ ] Performance monitoring
- [ ] SEO optimization
- [ ] International language support

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hiran Abhisheka**

- GitHub: [@Hiran-Abhisheka](https://github.com/Hiran-Abhisheka)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Hiran-Abhisheka/ferrari-web-page/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

_Built with ❤️ and passion for automotive excellence_
