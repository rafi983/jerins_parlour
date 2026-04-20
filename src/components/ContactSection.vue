<template>
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="section-title">Let us handle your<br>project, professionally.</h2>

      <form class="contact-form" id="contact-form" @submit.prevent="handleSubmit">
        <div class="form-row">
          <div class="form-group">
            <input v-model="form.fullName" type="text" placeholder="Full Name" required>
          </div>
          <div class="form-group">
            <input v-model="form.lastName" type="text" placeholder="Last Name" required>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <input v-model="form.email" type="email" placeholder="Email Address" required>
          </div>
          <div class="form-group">
            <input v-model="form.phone" type="tel" placeholder="Phone Number">
          </div>
        </div>

        <div class="form-group full-width">
          <textarea v-model="form.message" placeholder="Your Message" rows="5" required></textarea>
        </div>

        <div class="form-submit">
          <button
            type="submit"
            class="btn btn-primary"
            :class="{ 'is-loading': submitState === 'sending', 'is-success': submitState === 'sent' }"
            :disabled="submitState === 'sending'"
            id="submit-btn"
          >
            {{ buttonText }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, reactive, ref } from 'vue'

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

