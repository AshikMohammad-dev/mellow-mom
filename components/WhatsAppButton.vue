<script setup lang="ts">
const { generalLink } = useWhatsApp()
</script>

<template>
  <a class="whatsapp-float" :href="generalLink" target="_blank" rel="noopener" aria-label="Chat with Mellow Mom on WhatsApp">
    <WhatsAppIcon class="whatsapp-icon" />
  </a>
</template>
