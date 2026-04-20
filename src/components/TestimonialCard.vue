<template>
  <article class="testimonial-card">
    <div class="testimonial-header">
      <img :src="avatar" :alt="name" class="testimonial-avatar">
      <div class="testimonial-info">
        <h4 class="testimonial-name">{{ name }}</h4>
        <p class="testimonial-role">{{ role }}</p>
      </div>
    </div>

    <p class="testimonial-text">{{ text }}</p>

    <div class="testimonial-stars">
      <i v-for="star in 5" :key="star" class="fas fa-star"></i>
    </div>
  </article>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  avatar: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>


