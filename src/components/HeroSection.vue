<template>
  <section class="hero" id="home" @mousemove="handleMouseMove" @mouseleave="resetParallax">
    <div class="container hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="hero-title-line">BEAUTY SALON</span>
          <span class="hero-title-line">FOR EVERY WOMEN</span>
        </h1>
        <p class="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas.
          Feugiat
        </p>
        <a href="#contact" class="btn btn-primary" id="cta-appointment">
          Get an Appointment
        </a>
      </div>

      <div class="hero-image">
        <div class="hero-image-wrapper" :style="parallaxStyle">
          <img
            src="https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=600&h=700&fit=crop&crop=face"
            alt="Beautiful woman - Beauty Salon"
            id="hero-img"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

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

