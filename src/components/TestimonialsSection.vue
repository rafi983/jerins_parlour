<template>
  <section class="testimonials" id="testimonials">
    <div class="container">
      <h2 class="section-title">Testimonials</h2>

      <div class="testimonials-grid">
        <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          :avatar="testimonial.avatar"
          :name="testimonial.name"
          :role="testimonial.role"
          :text="testimonial.text"
        />
      </div>

      <div class="testimonial-dots">
        <span
          v-for="index in testimonials.length"
          :key="index"
          :class="['dot', { active: activeDot === index - 1 }]"
          @click="activeDot = index - 1"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TestimonialCard from './TestimonialCard.vue'

const activeDot = ref(0)

const testimonials = [
  {
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    name: 'Nash Patrik',
    role: 'CEO, Manpol',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
    name: 'Miriam Barron',
    role: 'CEO, Manpol',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    name: 'Bria Malone',
    role: 'CEO, Manpol',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat'
  }
]
</script>


