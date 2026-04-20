<template>
  <ProfessionalRoot id="team">
    <ProfessionalContainer>
      <ProfessionalImage class="professional-image">
        <ProfessionalImageWrapper>
          <ProfessionalImg
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=400&fit=crop"
            alt="Professional spa treatment"
            id="professional-img"
          />
        </ProfessionalImageWrapper>
      </ProfessionalImage>

      <ProfessionalContent class="professional-content">
        <ProfessionalTitle>
          Let us handle your screen <TextPink>Professionally</TextPink>.
        </ProfessionalTitle>

        <ProfessionalDesc>
          With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.
        </ProfessionalDesc>

        <StatsRow ref="statsRowRef">
          <StatItem v-for="(stat, index) in stats" :key="stat.label">
            <StatNumber>{{ currentValues[index] }}{{ stat.suffix }}</StatNumber>
            <StatLabel>{{ stat.label }}</StatLabel>
          </StatItem>
        </StatsRow>
      </ProfessionalContent>
    </ProfessionalContainer>
  </ProfessionalRoot>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import styled from 'vue3-styled-components'

const ProfessionalRoot = styled.section`
  padding: 100px 0;
  background-color: var(--cream-bg);
`

const ProfessionalContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const ProfessionalImage = styled.div`
  flex: 1;
`

const ProfessionalImageWrapper = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    border: 2px solid rgba(246, 62, 123, 0.1);
    pointer-events: none;
  }

  &:hover img {
    transform: scale(1.05);
  }
`

const ProfessionalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
`

const ProfessionalContent = styled.div`
  flex: 1;
`

const ProfessionalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--dark-text);
  line-height: 1.4;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`

const TextPink = styled.span`
  color: var(--pink-primary);
`

const ProfessionalDesc = styled.p`
  font-size: 0.95rem;
  color: var(--light-text);
  margin-bottom: 30px;
  line-height: 1.8;
`

const StatsRow = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`

const StatNumber = styled.span`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--pink-primary);
  line-height: 1.2;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const StatLabel = styled.span`
  font-size: 0.9rem;
  color: var(--light-text);
  margin-top: 4px;
`

const stats = [
  { value: 500, suffix: '+', label: 'Happy Customer' },
  { value: 16, suffix: '+', label: 'Total Service' }
]

const currentValues = ref(stats.map(() => 0))
const statsRowRef = ref(null)

let observer = null
let animationIds = []
let hasAnimated = false
let observedTarget = null

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
    // styled-components refs can be component instances; observe the real DOM node.
    observedTarget = statsRowRef.value.$el || statsRowRef.value
    observer.observe(observedTarget)
  }
})

onBeforeUnmount(() => {
  animationIds.forEach((id) => cancelAnimationFrame(id))
  if (observer && observedTarget) {
    observer.unobserve(observedTarget)
  }
  if (observer) {
    observer.disconnect()
  }
})
</script>

