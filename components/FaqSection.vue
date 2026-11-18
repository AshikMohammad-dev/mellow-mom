<script setup lang="ts">
import { ChevronDown, MessageCircleHeart } from 'lucide-vue-next'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'When is the best time to connect with Mellow Mom?',
    answer: 'You are welcome to reach out at any stage. Many expecting parents connect during the third trimester so arrangements are ready in advance, while others message us in the immediate days following birth. Whenever you feel ready, we are here.'
  },
  {
    question: 'What kind of care does Mellow Mom provide?',
    answer: 'We provide gentle, in-home postnatal recovery support, newborn care guidance, and maternal wellness for both mother and baby. Our approach is non-clinical, nurturing, and family-centered—focused on physical rest, emotional comfort, and day-to-day newborn confidence.'
  },
  {
    question: 'Where are your services available?',
    answer: 'We provide at-home care services across Ernakulam and nearby areas in Kerala. Our support takes place entirely in the comfort and quiet familiarity of your own home.'
  },
  {
    question: 'Can partners and family members be involved?',
    answer: 'Yes, wholeheartedly. Early parenthood is a shared family journey. We encourage partners and family members to join the guidance sessions so everyone feels reassured and confident caring for baby and supporting mom.'
  },
  {
    question: 'How do we get started or ask questions?',
    answer: 'Simply send us a message on WhatsApp. We listen to your specific needs, answer any questions you have with warmth and clarity, and guide you through how our care can support your home.'
  }
]

const openIndex = ref<number | null>(0)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const { generalLink } = useWhatsApp()
</script>

<template>
  <section class="section faq-section" id="faq">
    <div class="container">
      <div class="faq-layout">
        <div class="faq-header">
          <p class="eyebrow">Common Questions</p>
          <h2 class="display-balance">Reassurance for your journey.</h2>
          <p class="lead" style="margin-top: 14px;">
            The fourth trimester brings new feelings and questions every day. Here are answers to what expecting and new parents ask most often.
          </p>
          <div class="faq-cta-box">
            <MessageCircleHeart :size="24" class="faq-cta-icon" />
            <div>
              <p class="faq-cta-title">Have a specific question?</p>
              <p class="faq-cta-sub">We’re always happy to chat directly on WhatsApp.</p>
            </div>
            <a :href="generalLink" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
              Ask on WhatsApp
            </a>
          </div>
        </div>

        <div class="faq-list" role="region" aria-label="Frequently Asked Questions">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="faq-card"
            :class="{ 'is-open': openIndex === index }"
          >
            <button
              type="button"
              class="faq-question-btn"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-ans-${index}`"
              @click="toggleFaq(index)"
            >
              <span class="faq-q-text">{{ faq.question }}</span>
              <span class="faq-icon-wrapper" :class="{ 'is-rotated': openIndex === index }">
                <ChevronDown :size="18" />
              </span>
            </button>
            <div
              :id="`faq-ans-${index}`"
              class="faq-answer-panel"
              :class="{ 'is-expanded': openIndex === index }"
              role="region"
            >
              <div class="faq-answer-inner">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
