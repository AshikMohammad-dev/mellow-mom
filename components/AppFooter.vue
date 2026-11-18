<script setup lang="ts">
import { navigation, business } from '~/data/site'
import { services } from '~/data/services'
import { MapPin, Clock3, Phone } from 'lucide-vue-next'

const { generalLink } = useWhatsApp()
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <NuxtLink to="/" class="brand-lockup" aria-label="Mellow Mom home">
            <img class="brand-symbol" src="/images/brand-symbol.png" alt="" />
            <img class="brand-wordmark" src="/images/mellowmom-wordmark.png" alt="Mellow Mom by Mellow Wellness" />
          </NuxtLink>
          <p class="footer-tagline">{{ business.tagline }}</p>
          <p class="footer-copy">{{ business.description }}</p>
        </div>

        <div>
          <p class="footer-heading">Explore</p>
          <nav class="footer-links" aria-label="Footer navigation">
            <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to" class="footer-link">
              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>

        <div class="footer-care">
          <p class="footer-heading footer-care-heading">Our care</p>
          <p class="footer-heading footer-contact-heading">Contact</p>
          <nav class="footer-links" aria-label="Care services">
            <NuxtLink v-for="service in services" :key="service.id" to="/care" class="footer-link">
              {{ service.title }}
            </NuxtLink>
          </nav>
          <div class="footer-meta">
            <span style="display: flex; align-items: center; gap: 6px;">
              <MapPin :size="14" style="color: var(--rose-deep); flex-shrink: 0;" /> {{ business.location }}
            </span>
            <span style="display: flex; align-items: center; gap: 6px;">
              <Clock3 :size="14" style="color: var(--rose-deep); flex-shrink: 0;" /> {{ business.hours }}
            </span>
            <a :href="business.phoneHref" style="display: flex; align-items: center; gap: 6px;">
              <Phone :size="14" style="color: var(--rose-deep); flex-shrink: 0;" /> {{ business.phoneDisplay }}
            </a>
          </div>
          <a class="btn btn-light btn-arrow footer-whatsapp" :href="generalLink" target="_blank" rel="noopener">
            <WhatsAppIcon class="whatsapp-icon" />
            WhatsApp us
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© {{ new Date().getFullYear() }} Mellow Mom by Mellow Wellness · All rights reserved</span>
        <span>Ernakulam · Kerala · India</span>
      </div>
    </div>
  </footer>
</template>
