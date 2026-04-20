# Jerin's Parlour Vue App

This project converts the original static HTML/CSS/JS template into a Vue 3 app with a component-based structure.

## Component Structure

- `src/App.vue` - page composition and shared UI behavior
- `src/components/SiteNavbar.vue`
- `src/components/HeroSection.vue`
- `src/components/ServicesSection.vue`
- `src/components/ServiceCard.vue`
- `src/components/ProfessionalSection.vue`
- `src/components/TestimonialsSection.vue`
- `src/components/TestimonialCard.vue`
- `src/components/ContactSection.vue`
- `src/components/SiteFooter.vue`

## Run Locally

```bash
npm install
npm run serve
```

## Build

```bash
npm run build
```

## Notes

- Original style moved to `src/assets/site.css`
- Original DOM script behavior migrated to Vue state, lifecycle hooks, and component methods

