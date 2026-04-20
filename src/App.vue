<template>
  <SiteNavbar
    :active-section="activeSection"
    :is-navbar-scrolled="isNavbarScrolled"
    :is-mobile-menu-open="isMobileMenuOpen"
    @toggle-mobile="toggleMobileMenu"
    @close-mobile="closeMobileMenu"
  />

  <main>
    <HeroSection />
    <ServicesSection />
    <ProfessionalSection />
    <TestimonialsSection />
    <ContactSection />
  </main>

  <SiteFooter />
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ContactSection from './components/ContactSection.vue'
import HeroSection from './components/HeroSection.vue'
import ProfessionalSection from './components/ProfessionalSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteNavbar from './components/SiteNavbar.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'

const activeSection = ref('home')
const isNavbarScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const trackedSectionIds = ['home', 'services', 'team', 'contact']
const animationObserver = ref(null)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

function updateScrollState() {
  isNavbarScrolled.value = window.scrollY > 60

  const scrollPosition = window.scrollY + 120
  trackedSectionIds.forEach((sectionId) => {
    const section = document.getElementById(sectionId)
    if (!section) {
      return
    }

    const sectionTop = section.offsetTop
    const sectionBottom = sectionTop + section.offsetHeight
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      activeSection.value = sectionId
    }
  })
}

function setupRevealAnimations() {
  const animateElements = [
    { selector: '.hero-content', className: 'fade-in-left' },
    { selector: '.hero-image', className: 'fade-in-right' },
    { selector: '.service-card', className: 'fade-in' },
    { selector: '.professional-image', className: 'fade-in-left' },
    { selector: '.professional-content', className: 'fade-in-right' },
    { selector: '.testimonial-card', className: 'fade-in' },
    { selector: '.contact-form', className: 'fade-in' }
  ]

  animateElements.forEach(({ selector, className }) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.classList.add(className)
      element.style.transitionDelay = `${index * 0.1}s`
    })
  })

  animationObserver.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          animationObserver.value.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach((element) => {
    animationObserver.value.observe(element)
  })
}

onMounted(() => {
  updateScrollState()
  setupRevealAnimations()
  window.addEventListener('scroll', updateScrollState)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState)
  if (animationObserver.value) {
    animationObserver.value.disconnect()
  }
})
</script>

