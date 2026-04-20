<template>
  <article :class="['service-card', { featured }]">
    <div class="service-icon">
      <i :class="icon"></i>
    </div>
    <h3 class="service-name">{{ name }}</h3>
    <p class="service-price">{{ price }}</p>
    <p class="service-desc">{{ description }}</p>
  </article>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  icon: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  }
})
</script>


