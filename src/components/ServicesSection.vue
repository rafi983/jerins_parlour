<template>
  <section class="services" id="services">
    <div class="container">
      <h2 class="section-title">Our Awesome <span class="text-pink">Services</span></h2>

      <div class="services-grid">
        <ServiceCard
          v-for="service in services"
          :key="service.name"
          :icon="service.icon"
          :name="service.name"
          :price="service.price"
          :description="service.description"
          :featured="service.featured"
        />
      </div>

      <div class="services-cta">
        <a href="#" class="btn btn-primary" id="explore-more-btn">Explore more</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'

const services = [
  {
    icon: 'fas fa-hand-sparkles',
    name: 'Anti Age Face Treatment',
    price: '$199',
    description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.',
    featured: false
  },
  {
    icon: 'fas fa-paint-brush',
    name: 'Hair Color & Styleing',
    price: '$99',
    description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
    featured: true
  },
  {
    icon: 'fas fa-leaf',
    name: 'Skin Care Treatment',
    price: '$299',
    description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    featured: false
  }
]
</script>

