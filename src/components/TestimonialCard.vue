<template>
  <CardRoot class="testimonial-card">
    <TestimonialHeader>
      <TestimonialAvatar :src="avatar" :alt="name" />
      <TestimonialInfo>
        <TestimonialName>{{ name }}</TestimonialName>
        <TestimonialRole>{{ role }}</TestimonialRole>
      </TestimonialInfo>
    </TestimonialHeader>

    <TestimonialText>{{ text }}</TestimonialText>

    <TestimonialStars>
      <i v-for="star in 5" :key="star" class="fas fa-star"></i>
    </TestimonialStars>
  </CardRoot>
</template>

<script setup>
import { defineProps } from 'vue'
import styled from 'vue3-styled-components'

const CardRoot = styled.article`
  padding: 32px 28px;
  border-radius: 16px;
  transition: var(--transition);
  background-color: var(--white);

  &:hover {
    box-shadow: var(--shadow-card);
    transform: translateY(-4px);
  }
`

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
`

const TestimonialAvatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--pink-light);
`

const TestimonialInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const TestimonialName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--dark-text);
`

const TestimonialRole = styled.p`
  font-size: 0.82rem;
  color: var(--pink-primary);
  font-weight: 500;
`

const TestimonialText = styled.p`
  font-size: 0.9rem;
  color: var(--light-text);
  line-height: 1.7;
  margin-bottom: 16px;
`

const TestimonialStars = styled.div`
  display: flex;
  gap: 3px;

  i {
    color: var(--gold-star);
    font-size: 0.95rem;
  }
`

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


