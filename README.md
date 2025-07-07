# Gothic Wedding Invitation

A professional, responsive Gothic-themed wedding invitation website built with React, TypeScript, and modern web technologies.

## Overview

This project is a sophisticated wedding invitation featuring elegant Gothic design elements, smooth animations, and professional typography. The website showcases a love story through multiple chapters with stunning visual compositions and interactive elements.

## Features

### Design & Visual
- Professional Gothic aesthetic with elegant typography
- Split-screen and magazine-style layouts
- Sophisticated gradient text effects and color system
- High-quality Picsum images with professional overlays
- Minimalist design with high contrast for readability

### Typography
- Professional Google Fonts: Playfair Display, Inter, Crimson Text
- Responsive typography system with mobile-first approach
- CSS variables for consistent design system
- Custom gradient text treatments

### Animations & Interactions
- Smooth staggered animations with professional easing curves
- Interactive hover effects and micro-interactions
- Floating particle systems for ambiance
- Scroll-driven chapter navigation
- Performance-optimized animations

### Responsive Design
- Mobile-first responsive design
- Adaptive layouts for all screen sizes
- Touch device optimizations
- Accessibility features including reduced motion support
- Cross-browser compatibility

## Technology Stack

- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Framer Motion for animations
- Modern CSS with custom properties

## Chapter Structure

1. **Prologue: Gothic** - Split-screen hero introduction
2. **Chapter 1: Our Story** - Magazine-style content card
3. **Chapter 2: Journey** - Grid layout with staggered animations
4. **Chapter 3: Promise** - Asymmetric composition
5. **Chapter 4: Vows** - Centered elegant framing
6. **Epilogue: Forever** - Sophisticated final composition

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd wedding-bolt
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5174`

### Building for Production

```bash
npm run build
```

The built files will be available in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable components
├── sections/           # Page sections
├── App.tsx            # Main application with chapter navigation
├── main.tsx           # Application entry point
└── index.css         # Global styles and design system
```

## Design System

### Colors
- Charcoal: Primary dark background
- Gold: Accent and highlight color
- Ivory: Light text and contrast
- Rose: Secondary accent
- Gothic accents: Amber, Purple, Blue

### Typography Hierarchy
- Display: Large hero text (clamp 2.5rem - 6rem)
- Hero: Section headers (clamp 2rem - 4.5rem)
- Title: Subsection headers (clamp 1.5rem - 3rem)
- Body: Content text with optimized readability

### Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

## Performance Features

- Lazy loading optimizations
- Efficient CSS animations
- Responsive image handling
- Reduced motion support for accessibility
- Touch device optimizations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

Created by **thepkz**

## License

This project is for educational and portfolio purposes.

