<template>
  <nav :class="['navbar', { scrolled: isNavbarScrolled }]" id="navbar">
    <div class="container nav-container">
      <a href="#home" class="logo" id="logo" @click="emit('close-mobile')">
        <div class="logo-icon">
          <i class="fas fa-spa"></i>
        </div>
        <div class="logo-text">
          <span class="logo-name">Jerin's</span>
          <span class="logo-tagline">Parlour</span>
        </div>
      </a>

      <ul :class="['nav-links', { active: isMobileMenuOpen }]" id="nav-links">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            :class="['nav-link', { active: activeSection === link.id }]"
            @click="emit('close-mobile')"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <a href="#contact" class="btn btn-login" id="login-btn">Login</a>

      <button
        :class="['mobile-toggle', { active: isMobileMenuOpen }]"
        id="mobile-toggle"
        type="button"
        aria-label="Toggle navigation"
        @click="emit('toggle-mobile')"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

defineProps({
  activeSection: {
    type: String,
    default: 'home'
  },
  isNavbarScrolled: {
    type: Boolean,
    default: false
  },
  isMobileMenuOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle-mobile', 'close-mobile'])

const links = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Our Portfolio' },
  { id: 'team', label: 'Our Team' },
  { id: 'contact', label: 'Contact Us' }
]
</script>

