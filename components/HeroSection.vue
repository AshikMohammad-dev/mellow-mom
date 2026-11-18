<script setup lang="ts">
import { Sparkles, Heart } from 'lucide-vue-next'
const { generalLink } = useWhatsApp()
</script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <div class="hero-kicker fade-up">
          <span class="hero-index">01</span>
          <p class="eyebrow">A gentler fourth trimester · Ernakulam</p>
        </div>
        <h1 class="display-balance fade-up delay-1">
          Motherhood,<br />
          <em>held close.</em>
        </h1>
        <p class="lead fade-up delay-2">
          For the days when everything changes. Nurturing postnatal care and thoughtful newborn guidance, brought directly into the comfort and calm of your home.
        </p>
        <div class="hero-actions fade-up delay-2">
          <a class="btn btn-primary btn-arrow" :href="generalLink" target="_blank" rel="noopener">
            Enquire on WhatsApp
          </a>
          <NuxtLink class="btn btn-quiet" to="/care">
            Discover our care <span aria-hidden="true">↓</span>
          </NuxtLink>
        </div>
        <p class="hero-location fade-up delay-2">
          <span class="hero-location-dot" aria-hidden="true" />
          In-home support · Ernakulam, Kerala
        </p>
      </div>

      <div class="hero-visual fade-up delay-1">
        <div class="hero-image-frame">
          <img
            class="hero-image"
            src="/images/hero-portrait.jpg"
            alt="Mother lifting her baby in a bright, joyful moment"
            fetchpriority="high"
          />
        </div>
        <div class="hero-note">
          <div class="hero-note-icon" aria-hidden="true">
            <Heart :size="18" />
          </div>
          <div>
            <strong>Care that comes home</strong>
            <span class="hero-note-sub">Nurturing mother & newborn</span>
          </div>
        </div>
      </div>
      <span class="hero-side-note" aria-hidden="true">RECOVER · REST · RECONNECT</span>
    </div>
  </section>
</template>
