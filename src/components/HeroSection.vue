<template>
  <HeroRoot id="home" @mousemove="handleMouseMove" @mouseleave="resetParallax">
    <HeroContainer>
      <HeroContent class="hero-content">
        <HeroTitle>
          <HeroTitleLine>BEAUTY SALON</HeroTitleLine>
          <HeroTitleLine>FOR EVERY WOMEN</HeroTitleLine>
        </HeroTitle>
        <HeroDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas.
          Feugiat
        </HeroDescription>
        <CtaButton href="#contact" id="cta-appointment">
          Get an Appointment
        </CtaButton>
      </HeroContent>

      <HeroImage class="hero-image">
        <HeroImageWrapper :style="parallaxStyle">
          <HeroImg
            src="https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=600&h=700&fit=crop&crop=face"
            alt="Beautiful woman - Beauty Salon"
            id="hero-img"
          />
        </HeroImageWrapper>
      </HeroImage>
    </HeroContainer>
  </HeroRoot>
</template>

<script setup>
import { ref } from 'vue'
import styled from 'vue3-styled-components'

const HeroRoot = styled.section`
  padding: 140px 0 80px;
  background-color: var(--cream-bg);
  min-height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 120px 0 60px;
  }
`

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const HeroContent = styled.div`
  flex: 1;
  max-width: 520px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const HeroTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  color: var(--dark-text);
  line-height: 1.15;
  margin-bottom: 20px;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
    font-size: 2.6rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`

const HeroTitleLine = styled.span`
  display: block;
`

const HeroDescription = styled.p`
  font-size: 1rem;
  color: var(--light-text);
  margin-bottom: 35px;
  line-height: 1.8;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`

const CtaButton = styled.a`
  display: inline-block;
  padding: 12px 32px;
  border-radius: 8px;
  font-family: var(--font-family), sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  letter-spacing: 0.3px;
  transition: var(--transition);
  background-color: var(--pink-primary);
  color: var(--white);
  box-shadow: 0 4px 15px rgba(246, 62, 123, 0.3);

  &:hover {
    background-color: var(--pink-hover);
    box-shadow: 0 6px 25px rgba(246, 62, 123, 0.45);
    transform: translateY(-2px);
  }
`

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const HeroImageWrapper = styled.div`
  position: relative;
  width: 420px;
  height: 480px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  animation: morphShape 8s ease-in-out infinite;

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: 350px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 340px;
  }

  @media (max-width: 480px) {
    width: 260px;
    height: 300px;
  }

  @keyframes morphShape {
    0%,
    100% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    25% {
      border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
    }
    75% {
      border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    }
  }
`

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
`

const parallaxStyle = ref({ transform: 'translate(0, 0)' })

function handleMouseMove(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width - 0.5
  const y = (event.clientY - rect.top) / rect.height - 0.5

  parallaxStyle.value = {
    transform: `translate(${x * 10}px, ${y * 10}px)`
  }
}

function resetParallax() {
  parallaxStyle.value = { transform: 'translate(0, 0)' }
}
</script>

