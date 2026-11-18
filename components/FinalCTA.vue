<script setup lang="ts">
const { generalLink } = useWhatsApp()
defineProps<{ eyebrow?: string; title: string; text: string }>()
</script>

<template>
  <section class="section final-cta">
    <div class="container final-cta-inner">
      <div>
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h2 class="display-balance" style="margin-top: 14px;">{{ title }}</h2>
      </div>
      <div>
        <p>{{ text }}</p>
        <a class="btn btn-primary btn-arrow" :href="generalLink" target="_blank" rel="noopener">
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>
