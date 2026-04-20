# Jerin's Parlour Vue App

A Vue 3 single-page salon website migrated from a static HTML/CSS/JS template into a component-based architecture.

## Overview

This project was originally built as plain template files and then fully refactored into Vue components.

### Migration Goals

- Move from static markup to reusable Vue Single File Components (SFCs)
- Split large page sections into focused components
- Replace raw stylesheet-driven UI with `vue3-styled-components`
- Keep the original visual design and interactive behavior

## Features

- Responsive landing page with section-based navigation
- Mobile menu toggle and active-nav highlighting on scroll
- Hero section with parallax mouse movement effect
- Services and testimonials rendered from structured data arrays
- Professional stats counter animation on viewport entry
- Contact form with simulated async submit states
- Styled-components-based styling at component level

## Tech Stack

- **Framework:** Vue 3
- **Tooling:** Vue CLI 5
- **Styling:** `vue3-styled-components`
- **Language:** JavaScript (SFC `<script setup>`)

## Project Structure

```text
src/
  App.vue                      # Root composition and shared page logic
  main.js                      # App bootstrap + global style injection import
  styles/
	globalStyles.js            # Global tokens/reset + animation utility classes
  components/
	SiteNavbar.vue             # Top navigation and mobile menu
	HeroSection.vue            # Hero text, CTA, image, parallax
	ServicesSection.vue        # Services section wrapper and grid
	ServiceCard.vue            # Reusable service card
	ProfessionalSection.vue    # About/professional section + counters
	TestimonialsSection.vue    # Testimonials list + dots state
	TestimonialCard.vue        # Reusable testimonial card
	ContactSection.vue         # Contact form and submit state logic
	SiteFooter.vue             # Footer links and social blocks
public/
  index.html                   # HTML shell and metadata/fonts
```

## Getting Started

### Prerequisites

- Node.js 16+ recommended
- npm 8+ recommended

### Install Dependencies

```powershell
npm install
```

### Start Development Server

```powershell
npm run serve
```

App runs on the local URL shown by Vue CLI (commonly `http://localhost:8080`).

## Available Scripts

```powershell
npm run serve   # start dev server
npm run build   # build production bundle into dist/
npm run lint    # run eslint checks
```

## Styling Architecture

The project now uses a hybrid styled-components strategy:

1. **Global foundation** in `src/styles/globalStyles.js`
   - CSS variables/design tokens
   - reset/base rules (`body`, `a`, `img`, etc.)
   - utility classes used by reveal animations (`fade-in`, `fade-in-left`, `fade-in-right`)
2. **Section/component styles** colocated inside each component using `styled` primitives
   - examples: `NavRoot`, `HeroContainer`, `ServiceCardRoot`, `SubmitButton`, `FooterRoot`
3. **No legacy raw stylesheet dependency**
   - previous monolithic stylesheet has been removed

## Behavior Mapping (Template -> Vue)

- **Navbar scroll state**
  - Implemented in `src/App.vue` via `updateScrollState()`
  - Drives `isNavbarScrolled` prop in `src/components/SiteNavbar.vue`
- **Active navigation link on scroll**
  - Calculated in `src/App.vue` and passed as `activeSection`
- **Mobile menu toggle/close**
  - Controlled through `toggleMobileMenu()` / `closeMobileMenu()` in `src/App.vue`
  - Triggered by events emitted from `src/components/SiteNavbar.vue`
- **Reveal animations**
  - Set up in `setupRevealAnimations()` in `src/App.vue`
  - Uses utility classes defined in `src/styles/globalStyles.js`
- **Stats counter animation**
  - Implemented with `IntersectionObserver` + `requestAnimationFrame` in `src/components/ProfessionalSection.vue`
- **Contact form submit states**
  - Implemented in `src/components/ContactSection.vue`
  - Handles `idle -> sending -> sent -> idle` transitions

## Build and Deployment

### Production Build

```powershell
npm run build
```

Build output is generated in `dist/`.

### Deploy

Deploy the `dist/` folder to any static hosting provider (Netlify, Vercel, GitHub Pages, Firebase Hosting, etc.).

## Troubleshooting

### 1) Styles not showing

- Ensure `src/main.js` imports `src/styles/globalStyles.js`
- Restart dev server after dependency or config changes

### 2) Fonts or icons not loading

- Verify external links in `public/index.html` (Google Fonts + Font Awesome)
- Check internet connectivity in development environment

### 3) Animation classes not applying

- Confirm class hooks expected by `setupRevealAnimations()` still exist in component templates
- Check browser console for runtime errors in observer setup

### 4) Build fails locally

```powershell
npm install
npm run lint
npm run build
```

## Future Improvements

- Replace class-based reveal hooks with `data-*` selectors or per-component observers
- Add unit/integration tests for section logic and form state flow
- Add router support for multi-page expansion
- Integrate real backend API for contact form submissions

## License

This project is intended for learning and portfolio customization.

