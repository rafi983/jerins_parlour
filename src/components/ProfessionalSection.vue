<template>
  <section class="professional" id="team">
    <div class="container professional-container">
      <div class="professional-image">
        <div class="professional-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=400&fit=crop"
            alt="Professional spa treatment"
            id="professional-img"
          >
        </div>
      </div>

      <div class="professional-content">
        <h2 class="professional-title">
          Let us handle your screen <span class="text-pink">Professionally</span>.
        </h2>

        <p class="professional-desc">
          With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.
        </p>

        <div class="stats-row" ref="statsRowRef">
          <div class="stat-item" v-for="(stat, index) in stats" :key="stat.label">
            <span class="stat-number">{{ currentValues[index] }}{{ stat.suffix }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const stats = [
  { value: 500, suffix: '+', label: 'Happy Customer' },
  { value: 16, suffix: '+', label: 'Total Service' }
]

const currentValues = ref(stats.map(() => 0))
const statsRowRef = ref(null)

let observer = null
let animationIds = []
let hasAnimated = false

function animateCounter(index, targetValue) {
  const duration = 1000
  const startTime = performance.now()

  const tick = (timestamp) => {
    const progress = Math.min((timestamp - startTime) / duration, 1)
    currentValues.value[index] = Math.floor(progress * targetValue)

    if (progress < 1) {
      animationIds[index] = requestAnimationFrame(tick)
    } else {
      currentValues.value[index] = targetValue
    }
  }

  animationIds[index] = requestAnimationFrame(tick)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true
          stats.forEach((stat, index) => animateCounter(index, stat.value))
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 }
  )

  if (statsRowRef.value) {
    observer.observe(statsRowRef.value)
  }
})

onBeforeUnmount(() => {
  animationIds.forEach((id) => cancelAnimationFrame(id))
  if (observer) {
    observer.disconnect()
  }
})
</script>

