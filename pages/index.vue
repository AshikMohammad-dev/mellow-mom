<script setup lang="ts">
import { Heart, Home, Baby, Sparkles } from 'lucide-vue-next'
import { business, journey, reasons } from '~/data/site'
import { services } from '~/data/services'

useSeoMeta({
  title: 'Mellow Mom | Postnatal Care & Maternal Wellness in Ernakulam',
  description: 'Discover nurturing postnatal care, newborn care guidance and maternal wellness support at home with Mellow Mom in Ernakulam, Kerala.',
  ogTitle: 'Mellow Mom | Recover. Rest. Reconnect.',
  ogDescription: 'Gentle postnatal care, newborn guidance and nurturing wellness for mom and baby at home.',
  ogType: 'website',
  ogUrl: `${business.siteUrl}/`,
  twitterCard: 'summary_large_image'
})
useHead({ link: [{ rel: 'canonical', href: `${business.siteUrl}/` }] })

const icons = [Heart, Baby, Sparkles, Home]
</script>

<template>
  <div>
    <HeroSection />

    <section class="section">
      <div class="container intro-grid">
        <div class="intro-visual"><img class="intro-image" src="/images/motherhood-at-home.jpg" alt="Mother at home with her young children" loading="lazy" /></div>
        <div class="intro-copy">
          <p class="eyebrow">A gentler beginning</p>
          <h2 class="display-balance">A little more care for the one who gives so much.</h2>
          <p class="lead">Mellow Mom is a maternal and newborn wellness experience shaped around the early days at home. We believe recovery is not something to rush through — it is a season that deserves softness, understanding and support.</p>
          <p class="lead" style="margin-top: 16px;">From the emotional comfort of being listened to, to the confidence that comes with thoughtful newborn guidance, our care keeps both mother and baby in view.</p>
          <p class="signature">Nurturing wellness, at home</p>
        </div>
      </div>
    </section>

    <div class="journal-strip" aria-label="Mellow Mom: care that comes home">
      <span>Care that comes home</span><i aria-hidden="true">✳</i><span>Room to become</span><i aria-hidden="true">✳</i><span>For both of you</span><i aria-hidden="true">✳</i><span>Ernakulam, Kerala</span>
    </div>

    <section class="section section-cream">
      <div class="container">
        <div class="section-heading">
          <div><p class="eyebrow">Our care</p><h2 class="display-balance" style="margin-top: 16px;">Nurturing care for every little moment.</h2></div>
          <p>A warm, personal approach to postnatal recovery, newborn care and maternal wellbeing.</p>
        </div>
        <div class="service-grid"><ServiceCard v-for="(service, index) in services" :key="service.id" :service="service" :index="index" /></div>
      </div>
    </section>

    <section class="section">
      <div class="container why-grid">
        <div class="why-copy"><p class="eyebrow">Why Mellow Mom</p><h2 class="display-balance">Care that understands motherhood.</h2><p class="lead">Because the right support can make a tender season feel a little more held. Every detail is guided by comfort, clarity and a genuine respect for your experience.</p></div>
        <div class="reason-list"><div v-for="reason in reasons" :key="reason.number" class="reason"><span class="reason-number">{{ reason.number }}</span><div><h3>{{ reason.title }}</h3><p>{{ reason.text }}</p></div></div></div>
      </div>
    </section>

    <section class="story-section">
      <img class="story-image" src="/images/quiet-moments.jpg" alt="Newborn baby's feet resting in a soft white blanket" loading="lazy" />
      <div class="story-overlay" />
      <div class="container"><div class="story-content"><p class="eyebrow">A moment for you</p><h2 class="display-balance">Motherhood is a journey. You deserve support along the way.</h2><p>Take a moment to rest, recover and reconnect with yourself. Let us be part of your motherhood journey.</p></div></div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading"><div><p class="eyebrow">How it works</p><h2 class="display-balance" style="margin-top: 16px;">Your care journey, made simple.</h2></div><p>An informational first step, a thoughtful conversation and support that meets you at home.</p></div>
        <div class="journey-grid"><div v-for="step in journey" :key="step.number" class="journey-step"><span class="journey-number">{{ step.number }}</span><h3>{{ step.title }}</h3><p>{{ step.text }}</p></div></div>
      </div>
    </section>

    <section class="section section-cream feeling-section">
      <div class="container feeling-grid">
        <div class="feeling-heading"><p class="eyebrow">The Mellow Mom feeling</p><h2 class="display-balance">A softer kind of support.</h2></div>
        <div class="feeling-cards">
          <div v-for="(icon, index) in icons" :key="index" class="feeling-card"><component :is="icon" :size="23" :stroke-width="1.4" /><p>{{ ['Held with care', 'For both of you', 'Little moments matter', 'Where you feel at ease'][index] }}</p></div>
        </div>
      </div>
    </section>

    <FinalCTA eyebrow="A gentle next step" title="Let your recovery be filled with care." text="Connect with Mellow Mom and discover nurturing wellness support for you and your little one." />
  </div>
</template>
