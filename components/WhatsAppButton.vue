<script setup lang="ts">
const route = useRoute()
const { generalLink } = useWhatsApp()
const isFooterVisible = ref(false)
let footerObserver: IntersectionObserver | undefined

const observeFooter = async () => {
  await nextTick()
  footerObserver?.disconnect()

  const footer = document.querySelector('.site-footer')
  if (!footer || !('IntersectionObserver' in window)) {
    isFooterVisible.value = false
    return
  }

  footerObserver = new IntersectionObserver(([entry]) => {
    isFooterVisible.value = entry.isIntersecting
  }, { threshold: 0 })
  footerObserver.observe(footer)
}

onMounted(observeFooter)
onBeforeUnmount(() => footerObserver?.disconnect())
watch(() => route.path, () => { void observeFooter() })
</script>

<template>
  <a
    class="whatsapp-float"
    :class="{ 'is-obscured': isFooterVisible }"
    :href="generalLink"
    target="_blank"
    rel="noopener"
    aria-label="Chat with Mellow Mom on WhatsApp"
    :aria-hidden="isFooterVisible"
    :tabindex="isFooterVisible ? -1 : 0"
  >
    <WhatsAppIcon class="whatsapp-icon" />
  </a>
</template>
