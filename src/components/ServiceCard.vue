<template>
  <ServiceCardRoot :class="['service-card', { featured }]">
    <ServiceIcon class="service-icon">
      <i :class="icon"></i>
    </ServiceIcon>
    <ServiceName>{{ name }}</ServiceName>
    <ServicePrice>{{ price }}</ServicePrice>
    <ServiceDesc>{{ description }}</ServiceDesc>
  </ServiceCardRoot>
</template>

<script setup>
import { defineProps } from 'vue'
import styled from 'vue3-styled-components'

const ServiceCardRoot = styled.article`
  background-color: var(--white);
  border-radius: 16px;
  padding: 40px 30px;
  text-align: center;
  transition: var(--transition);
  border: 1px solid transparent;
  box-shadow: none;
  position: relative;
  overflow: hidden;

  &.featured {
    box-shadow: var(--shadow-card);
    border-color: rgba(246, 62, 123, 0.08);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(246, 62, 123, 0.03), rgba(246, 62, 123, 0));
    opacity: 0;
    transition: var(--transition);
  }

  &:hover {
    box-shadow: var(--shadow-hover);
    transform: translateY(-8px);
    border-color: rgba(246, 62, 123, 0.1);
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover .service-icon {
    background-color: var(--pink-primary);
    color: var(--white);
    transform: scale(1.1) rotate(10deg);
  }
`

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 22px;
  font-size: 1.6rem;
  background-color: var(--pink-light);
  color: var(--pink-primary);
  transition: var(--transition);
`

const ServiceName = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--dark-text);
  margin-bottom: 8px;
`

const ServicePrice = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--pink-primary);
  margin-bottom: 14px;
`

const ServiceDesc = styled.p`
  font-size: 0.9rem;
  color: var(--light-text);
  line-height: 1.7;
`

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


