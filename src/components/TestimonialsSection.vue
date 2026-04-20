<template>
  <TestimonialsRoot id="testimonials">
    <TestimonialsContainer>
      <SectionTitle>Testimonials</SectionTitle>

      <TestimonialsGrid>
        <TestimonialCard
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          :avatar="testimonial.avatar"
          :name="testimonial.name"
          :role="testimonial.role"
          :text="testimonial.text"
        />
      </TestimonialsGrid>

      <DotsRow>
        <Dot
          v-for="index in testimonials.length"
          :key="index"
          :class="{ active: activeDot === index - 1 }"
          @click="activeDot = index - 1"
        />
      </DotsRow>
    </TestimonialsContainer>
  </TestimonialsRoot>
</template>

<script setup>
import { ref } from 'vue'
import styled from 'vue3-styled-components'
import TestimonialCard from './TestimonialCard.vue'

const TestimonialsRoot = styled.section`
  padding: 100px 0;
  background-color: var(--white);
`

const TestimonialsContainer = styled.div`
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto 40px;
  }
`

const DotsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

const Dot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #d8d8d8;
  cursor: pointer;
  transition: var(--transition);

  &.active {
    background-color: var(--pink-primary);
    transform: scale(1.1);
  }

  &:hover {
    background-color: var(--pink-primary);
    opacity: 0.7;
  }
`

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


