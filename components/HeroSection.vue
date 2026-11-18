<script setup lang="ts">
const { generalLink } = useWhatsApp()
</script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <div class="hero-kicker fade-up"><span class="hero-index">01</span><p class="eyebrow">A gentler fourth trimester · Ernakulam</p></div>
        <h1 class="display-balance fade-up delay-1">Motherhood,<br /><em>held close.</em></h1>
        <p class="lead fade-up delay-2">For the days when everything changes. Thoughtful postnatal care and newborn guidance, brought into the comfort of your home.</p>
        <div class="hero-actions fade-up delay-2">
          <a class="btn btn-primary btn-arrow" :href="generalLink" target="_blank" rel="noopener">Enquire on WhatsApp</a>
          <NuxtLink class="btn btn-quiet" to="/care">Discover our care <span aria-hidden="true">↓</span></NuxtLink>
        </div>
        <p class="hero-location"><span aria-hidden="true"></span>In-home support · Ernakulam, Kerala</p>
      </div>
      <div class="hero-visual">
        <div class="hero-image-frame"><img class="hero-image" src="/images/hero-portrait.jpg" alt="Mother lifting her baby in a bright, joyful moment" fetchpriority="high" /></div>
        <span class="hero-image-index">A softer start / 01</span>
        <div class="hero-note"><span class="hero-note-icon" aria-hidden="true">✳</span><span><strong>Care that comes home</strong>For the two of you</span></div>
      </div>
      <span class="hero-side-note" aria-hidden="true">RECOVER · REST · RECONNECT</span>
    </div>
  </section>
</template>
