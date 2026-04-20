<template>
  <NavRoot :class="['navbar', { scrolled: isNavbarScrolled }]" id="navbar">
    <NavContainer>
      <LogoLink href="#home" id="logo" @click="emit('close-mobile')">
        <LogoIcon>
          <i class="fas fa-spa"></i>
        </LogoIcon>
        <LogoText>
          <LogoName>Jerin's</LogoName>
          <LogoTagline>Parlour</LogoTagline>
        </LogoText>
      </LogoLink>

      <NavLinks :class="['nav-links', { active: isMobileMenuOpen }]" id="nav-links">
        <li v-for="link in links" :key="link.id">
          <NavLink
            :href="`#${link.id}`"
            :class="['nav-link', { active: activeSection === link.id }]"
            @click="emit('close-mobile')"
          >
            {{ link.label }}
          </NavLink>
        </li>
      </NavLinks>

      <LoginButton href="#contact" id="login-btn">Login</LoginButton>

      <MobileToggle
        :class="['mobile-toggle', { active: isMobileMenuOpen }]"
        id="mobile-toggle"
        type="button"
        aria-label="Toggle navigation"
        @click="emit('toggle-mobile')"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </MobileToggle>
    </NavContainer>
  </NavRoot>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
import styled from 'vue3-styled-components'

const NavRoot = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--cream-bg);
  transition: var(--transition);
  padding: 16px 0;

  &.scrolled {
    background-color: rgba(255, 248, 245, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.06);
    padding: 10px 0;
  }
`

const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1001;
`

const LogoIcon = styled.div`
  font-size: 1.8rem;
  color: var(--pink-primary);

  i {
    filter: drop-shadow(0 2px 4px rgba(246, 62, 123, 0.3));
  }
`

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`

const LogoName = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--dark-text);
  font-style: italic;
`

const LogoTagline = styled.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: var(--dark-text);
  font-style: italic;
`

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    max-width: 320px;
    height: 100vh;
    background-color: var(--white);
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;

    &.active {
      right: 0;
    }
  }
`

const NavLink = styled.a`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--dark-text);
  position: relative;
  padding: 4px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--pink-primary);
    border-radius: 999px;
    transition: var(--transition);
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &:hover,
  &.active {
    color: var(--pink-primary);
  }
`

const LoginButton = styled.a`
  display: inline-block;
  background-color: var(--pink-primary);
  color: var(--white);
  padding: 10px 28px;
  border-radius: 6px;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px rgba(246, 62, 123, 0.3);
  transition: var(--transition);

  &:hover {
    background-color: var(--pink-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(246, 62, 123, 0.4);
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileToggle = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 5px;
  z-index: 1001;

  .bar {
    width: 26px;
    height: 3px;
    background-color: var(--dark-text);
    border-radius: 999px;
    transition: var(--transition);
  }

  &.active .bar:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  &.active .bar:nth-child(2) {
    opacity: 0;
  }

  &.active .bar:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

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

