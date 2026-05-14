# Zain-Ul-Abedin Portfolio

A modern, minimalist portfolio built with React + Vite for game development internships.

## Quick Start

```bash
cd portfolio
npm install
npm run dev
```

Server runs at `http://localhost:5173`

## Project Structure

```
portfolio/
├── src/
│   ├── data/
│   │   └── config.json          ← EDIT THIS FILE FOR ALL CONTENT
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Navigation.jsx
│   ├── styles/
│   │   ├── theme.js             ← Colors/fonts
│   │   ├── animations.js        ← Animation configs
│   │   └── GlobalStyles.css
│   ├── utils/
│   │   └── generateResume.js    ← Resume PDF generator
│   └── App.jsx
├── public/
│   └── favicon.svg
└── package.json
```

## Editing Your Portfolio

### 1. Edit `src/data/config.json`

All your personal information is stored here. Edit this single file to update:

- Personal details (name, email, GitHub, Discord)
- About section bio
- Projects (add your game projects)
- Skills
- Experience
- Resume info

### 2. Change Colors

Edit `src/styles/theme.js` to customize colors:

```javascript
export const colors = {
  background: {
    primary: '#1A1A1A',      // Main background
    secondary: '#2D3A2D',    // Cards/sections
    // ...
  },
  accent: {
    primary: '#00FFC8',      // Mint green accent
    // ...
  }
};
```

### 3. Add Profile Photo

In `config.json`, set `about.image` to a path like `/images/profile.jpg`
Add your photo to `public/images/` folder

### 4. Add Project Screenshots

In `config.json`, set `projects[].image` to screenshot paths
Add screenshots to `public/images/` folder

## Features

- **Dark theme** with Kisuke Urahara-inspired color palette
- **Smooth animations** using Framer Motion
- **Responsive design** for mobile/tablet/desktop
- **Downloadable PDF resume** generated from config
- **Pixel art icons** from pixelarticons library
- **Lexend font** for readability

## Build for Production

```bash
npm run build
```

Output in `dist/` folder, ready to deploy to Vercel.

## Deploy to Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy with zero config

## Technologies Used

- React 18 + Vite
- Framer Motion (animations)
- jsPDF (resume generation)
- pixelarticons (gaming icons)
- @fontsource/lexend (typography)
- CSS Modules

## Notes

- Resume downloads as PDF automatically when clicking download button
- All project links in config are placeholder - update with real GitHub links
- Discord link works with modern username format (no #0000)
