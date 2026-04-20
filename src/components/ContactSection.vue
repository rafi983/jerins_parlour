<template>
  <ContactRoot id="contact">
    <ContactContainer>
      <SectionTitle>Let us handle your<br>project, professionally.</SectionTitle>

      <ContactForm class="contact-form" id="contact-form" @submit.prevent="handleSubmit">
        <FormRow>
          <FormGroup>
            <FormInput v-model="form.fullName" type="text" placeholder="Full Name" required />
          </FormGroup>
          <FormGroup>
            <FormInput v-model="form.lastName" type="text" placeholder="Last Name" required />
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <FormInput v-model="form.email" type="email" placeholder="Email Address" required />
          </FormGroup>
          <FormGroup>
            <FormInput v-model="form.phone" type="tel" placeholder="Phone Number" />
          </FormGroup>
        </FormRow>

        <FormGroup class="full-width">
          <FormTextarea v-model="form.message" placeholder="Your Message" rows="5" required />
        </FormGroup>

        <FormSubmit>
          <SubmitButton
            type="submit"
            :class="{ 'is-loading': submitState === 'sending', 'is-success': submitState === 'sent' }"
            :disabled="submitState === 'sending'"
            id="submit-btn"
          >
            {{ buttonText }}
          </SubmitButton>
        </FormSubmit>
      </ContactForm>
    </ContactContainer>
  </ContactRoot>
</template>

<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import styled from 'vue3-styled-components'

const ContactRoot = styled.section`
  padding: 100px 0;
  background-color: var(--cream-section);
`

const ContactContainer = styled.div`
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
  margin-bottom: 45px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

const ContactForm = styled.form`
  max-width: 700px;
  margin: 0 auto;
`

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const FormGroup = styled.div`
  flex: 1;

  &.full-width {
    margin-bottom: 20px;
  }
`

const FormInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  font-family: var(--font-family), sans-serif;
  font-size: 0.95rem;
  color: var(--dark-text);
  background-color: var(--white);
  transition: var(--transition);
  outline: none;

  &::placeholder {
    color: #b0b0b0;
  }

  &:focus {
    border-color: var(--pink-primary);
    box-shadow: 0 0 0 4px rgba(246, 62, 123, 0.08);
  }
`

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 16px 20px;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  font-family: var(--font-family), sans-serif;
  font-size: 0.95rem;
  color: var(--dark-text);
  background-color: var(--white);
  transition: var(--transition);
  outline: none;
  resize: vertical;
  min-height: 120px;

  &::placeholder {
    color: #b0b0b0;
  }

  &:focus {
    border-color: var(--pink-primary);
    box-shadow: 0 0 0 4px rgba(246, 62, 123, 0.08);
  }
`

const FormSubmit = styled.div`
  text-align: center;
  margin-top: 10px;
`

const SubmitButton = styled.button`
  display: inline-block;
  padding: 14px 40px;
  border-radius: 8px;
  font-family: var(--font-family), sans-serif;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  letter-spacing: 0.3px;
  transition: var(--transition);
  background-color: var(--pink-primary);
  color: var(--white);
  box-shadow: 0 4px 15px rgba(246, 62, 123, 0.3);

  &:hover {
    background-color: var(--pink-hover);
    box-shadow: 0 6px 25px rgba(246, 62, 123, 0.45);
    transform: translateY(-2px);
  }

  &.is-loading {
    opacity: 0.7;
  }

  &.is-success {
    background-color: #28a745;
    box-shadow: 0 6px 20px rgba(40, 167, 69, 0.35);
  }
`

const form = reactive({
  fullName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
})

const submitState = ref('idle')
let sendingTimer = null
let resetTimer = null

const buttonText = computed(() => {
  if (submitState.value === 'sending') {
    return 'Sending...'
  }

  if (submitState.value === 'sent') {
    return 'Message Sent! \u2713'
  }

  return 'Send Message'
})

function resetForm() {
  form.fullName = ''
  form.lastName = ''
  form.email = ''
  form.phone = ''
  form.message = ''
}

function clearTimers() {
  clearTimeout(sendingTimer)
  clearTimeout(resetTimer)
}

function handleSubmit() {
  clearTimers()
  submitState.value = 'sending'

  sendingTimer = setTimeout(() => {
    submitState.value = 'sent'
    resetForm()

    resetTimer = setTimeout(() => {
      submitState.value = 'idle'
    }, 3000)
  }, 1500)
}

onBeforeUnmount(() => {
  clearTimers()
})
</script>

