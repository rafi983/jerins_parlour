<template>
  <ServicesRoot id="services">
    <Container>
      <SectionTitle>Our Awesome <TextPink>Services</TextPink></SectionTitle>

      <ServicesGrid>
        <ServiceCard
          v-for="service in services"
          :key="service.name"
          :icon="service.icon"
          :name="service.name"
          :price="service.price"
          :description="service.description"
          :featured="service.featured"
        />
      </ServicesGrid>

      <ServicesCta>
        <ExploreMoreButton href="#" id="explore-more-btn">Explore more</ExploreMoreButton>
      </ServicesCta>
    </Container>
  </ServicesRoot>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'
import styled from 'vue3-styled-components'

const ServicesRoot = styled.section`
  padding: 100px 0;
  background-color: var(--white);
`

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--dark-text);
  margin-bottom: 50px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

const TextPink = styled.span`
  color: var(--pink-primary);
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto 50px;
  }
`

const ServicesCta = styled.div`
  text-align: center;
`

const ExploreMoreButton = styled.a`
  display: inline-block;
  padding: 12px 32px;
  border-radius: 8px;
  font-family: var(--font-family), sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: var(--transition);
  letter-spacing: 0.3px;
  background-color: var(--pink-primary);
  color: var(--white);
  box-shadow: 0 4px 15px rgba(246, 62, 123, 0.3);

  &:hover {
    background-color: var(--pink-hover);
    box-shadow: 0 6px 25px rgba(246, 62, 123, 0.45);
    transform: translateY(-2px);
  }
`

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

