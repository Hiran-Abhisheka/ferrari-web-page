# Ferri Futuristic React Site

A lightweight Vite + React + GSAP single-page experience with a cinematic looping background video and high-gloss futuristic UI.

## Stack

- React 18
- Vite
- GSAP + ScrollTrigger
- CSS (custom glass / neon aesthetic)

## Development

Install deps and start dev server:

```bash
npm install
npm run dev
```

Then open the shown local URL (default: http://localhost:5173).

## Video Asset

Place your background video file inside `src/` (already present as placeholder). Update the import path in `Hero.jsx` if you rename it.

## Build

```bash
npm run build
npm run preview
```

## Ideas / Next Enhancements

- Add route-based transitions with `React Router` + GSAP context.
- Progressive media loading (poster frame, adaptive bitrates).
- Dark/Light theme toggle with persisted preference.
- 3D model viewer (e.g., using Three.js) for vehicle concept.
- Accessibility pass: focus outlines, reduced motion media query support.

## License

Private / All Rights Reserved.
