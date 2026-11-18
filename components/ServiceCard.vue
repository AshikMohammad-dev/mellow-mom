<script setup lang="ts">
import type { CareService } from '~/data/services'
defineProps<{ service: CareService; index: number }>()
const { linkFor } = useWhatsApp()
</script>

<template>
  <article class="service-card">
    <div class="service-image-wrap">
      <img class="service-image" :src="service.image" :alt="service.alt" loading="lazy" />
      <span class="service-index">0{{ index + 1 }}</span>
      <span class="service-badge">{{ service.eyebrow }}</span>
    </div>
    <div class="service-body">
      <h3>{{ service.title }}</h3>
      <p>{{ service.shortDescription }}</p>
      <a class="text-link" :href="linkFor(service.message)" target="_blank" rel="noopener">
        Enquire on WhatsApp
      </a>
    </div>
  </article>
</template>
