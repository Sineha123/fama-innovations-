# FamaInnovations

> Engineering the Future of Mobility — Driving Innovation Through Engineering Excellence

A premium, animated React website for **FamaInnovations**, showcasing advanced engineering solutions with stunning glassmorphism design, GSAP scroll animations, and interactive visual effects.

---

## Features

- **Pure Glassmorphism Hero** — Thick transparent glass panel with animated gradient border, cursor-follow movement, and light web background animation
- **GSAP Scroll Animations** — ScrollTrigger-powered reveals, parallax, and stagger effects across all sections
- **Animated Process Timeline** — Central line draws on scroll, nodes activate with glow pulses, cards reveal sequentially
- **Interactive Light Web Canvas** — Slowly moving glowing nodes with connecting lines in the hero background
- **Navy & Royal Blue Premium Theme** — Black background with navy blue accents, silver/white glows and bloom effects
- **Responsive Design** — Fully responsive across desktop, tablet, and mobile
- **Real Logo Integration** — Logo image served from `/public` folder for production builds

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [React](https://react.dev/) | UI Framework |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server |
| [GSAP](https://greensock.com/gsap/) | Animation Engine |
| [ScrollTrigger](https://greensock.com/scrolltrigger/) | Scroll-based Animations |
| CSS Custom Properties | Theming & Variables |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ installed

### Installation

```bash
# Clone or navigate to the project
cd famainnovations

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3002/` (or your configured port).

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` folder.

---

## Project Structure

```
famainnovations/
├── public/
│   └── logo.png              # Logo image (served at root)
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Fixed navbar with glassmorphism
│   │   ├── Hero.jsx          # Hero with light web canvas + glass panel
│   │   ├── About.jsx         # Company intro with stats
│   │   ├── Services.jsx      # 6 engineering services
│   │   ├── Process.jsx       # Animated timeline (4 steps)
│   │   ├── Industries.jsx    # 3 industry sectors
│   │   ├── WhyChooseUs.jsx   # 4 reasons + testimonials
│   │   ├── Stats.jsx         # Key metrics
│   │   ├── FAQ.jsx           # Accordion FAQs
│   │   ├── Contact.jsx       # Contact form (glass inputs)
│   │   └── Footer.jsx        # Site footer
│   ├── hooks/
│   │   └── useAnimations.js  # Reusable GSAP animation hooks
│   ├── App.jsx               # Main app component
│   ├── App.css               # Global layout styles
│   ├── index.css             # CSS variables + animations
│   └── main.jsx              # Entry point
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
└── package.json
```

---

## Deployment

### Static Hosting (Recommended)

Build the project and deploy the `dist/` folder to any static host:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

### Logo Path

The logo is referenced in components as `/logo.png`, which Vite resolves from the `public/` folder. Ensure `public/logo.png` exists before building.

---

## Customization

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --blue: #5ba3ff;
  --royal: #6366f1;
  --text: #e8f0ff;
  --muted: #7a8a9a;
  /* ... */
}
```

### Content

Each section is a self-contained component in `src/components/`. Update text, stats, and service descriptions directly in the JSX files.

---

## License

© 2024 Fama Innovations. All rights reserved.

---

## Contact

- **Email:** info@famainnovations.com
- **Website:** [famainnovations.com](https://famainnovations.com)

