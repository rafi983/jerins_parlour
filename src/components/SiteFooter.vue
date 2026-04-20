<template>
  <FooterRoot id="footer">
    <FooterContainer>
      <FooterCol>
        <FooterLocation>
          <i class="fas fa-map-marker-alt"></i>
          <p>H#000 (9th Floor), Road #00,<br>New DOHS, Mohakhali, Dhaka, Bangladesh</p>
        </FooterLocation>
      </FooterCol>

      <FooterCol>
        <FooterHeading>Company</FooterHeading>
        <FooterLinks>
          <li><FooterLink href="#">About</FooterLink></li>
          <li><FooterLink href="#">Project</FooterLink></li>
          <li><FooterLink href="#team">Our Team</FooterLink></li>
          <li><FooterLink href="#">Terms Conditions</FooterLink></li>
          <li><FooterLink href="#">Submit Listing</FooterLink></li>
        </FooterLinks>
      </FooterCol>

      <FooterCol>
        <FooterHeading>Quick Links</FooterHeading>
        <FooterLinks>
          <li><FooterLink href="#">Quick Links</FooterLink></li>
          <li><FooterLink href="#">Rentals</FooterLink></li>
          <li><FooterLink href="#">Sales</FooterLink></li>
          <li><FooterLink href="#contact">Contact</FooterLink></li>
          <li><FooterLink href="#">Our Blog</FooterLink></li>
        </FooterLinks>
      </FooterCol>

      <FooterCol>
        <FooterHeading>About us</FooterHeading>
        <FooterAboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas.
          Feugiat
        </FooterAboutText>
        <SocialLinks>
          <SocialIcon href="#" id="social-facebook" aria-label="Facebook"><i class="fab fa-facebook-f"></i></SocialIcon>
          <SocialIcon href="#" id="social-instagram" aria-label="Instagram"><i class="fab fa-instagram"></i></SocialIcon>
          <SocialIcon href="#" id="social-linkedin" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></SocialIcon>
          <SocialIcon href="#" id="social-youtube" aria-label="YouTube"><i class="fab fa-youtube"></i></SocialIcon>
        </SocialLinks>
      </FooterCol>
    </FooterContainer>
  </FooterRoot>
</template>

<script setup>
import styled from 'vue3-styled-components'

const FooterRoot = styled.footer`
  background-color: var(--footer-bg);
  padding: 60px 0 40px;
`

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.4fr;
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const FooterCol = styled.div``

const FooterLocation = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  i {
    color: var(--pink-primary);
    font-size: 1.2rem;
    margin-top: 4px;
  }

  p {
    color: var(--footer-text);
    font-size: 0.88rem;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const FooterHeading = styled.h4`
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 20px;
`

const FooterLinks = styled.ul`
  li {
    margin-bottom: 10px;
  }
`

const FooterLink = styled.a`
  color: var(--footer-text);
  font-size: 0.88rem;
  transition: var(--transition);

  &:hover {
    color: var(--pink-primary);
    padding-left: 4px;
  }
`

const FooterAboutText = styled.p`
  color: var(--footer-text);
  font-size: 0.88rem;
  line-height: 1.7;
  margin-bottom: 20px;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const SocialIcon = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: var(--transition);
  color: var(--white);

  &:nth-child(1) {
    background-color: #3b5998;
  }

  &:nth-child(2) {
    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  }

  &:nth-child(3) {
    background-color: #0077b5;
  }

  &:nth-child(4) {
    background-color: #ff0000;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
`
</script>

