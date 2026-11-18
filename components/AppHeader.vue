<script setup lang="ts">
import { Menu, X, Phone, Clock3 } from 'lucide-vue-next'
import { navigation, business } from '~/data/site'

const route = useRoute()
const isScrolled = ref(false)
const isOpen = ref(false)

const onScroll = () => { isScrolled.value = window.scrollY > 14 }
const closeMenu = () => { isOpen.value = false }

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
watch(() => route.path, closeMenu)
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled || isOpen }">
    <div class="container header-inner">
      <NuxtLink to="/" class="brand-lockup" aria-label="Mellow Mom home">
        <img class="brand-symbol" src="/images/brand-symbol.png" alt="" />
        <img class="brand-wordmark" src="/images/mellowmom-wordmark.png" alt="Mellow Mom by Mellow Wellness" />
      </NuxtLink>

      <nav class="desktop-nav" aria-label="Main navigation">
        <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to" class="nav-link">
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="header-action">
        <a class="btn btn-primary btn-arrow btn-sm" :href="useWhatsApp().generalLink" target="_blank" rel="noopener">
          Enquire on WhatsApp
        </a>
      </div>

      <button
        class="menu-toggle"
        :class="{ 'is-open': isOpen }"
        type="button"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
      >
        <Menu v-if="!isOpen" class="menu-icon" :size="22" stroke-width="1.8" />
        <X v-else :size="22" stroke-width="1.8" />
      </button>
    </div>

    <div v-if="isOpen" class="mobile-menu">
      <NuxtLink
        v-for="item in navigation"
        :key="item.to"
        :to="item.to"
        class="nav-link"
        @click="closeMenu"
      >
        {{ item.label }}
      </NuxtLink>
      <a class="btn btn-primary btn-arrow" :href="useWhatsApp().generalLink" target="_blank" rel="noopener">
        Enquire on WhatsApp
      </a>
      <div style="border-top: 1px solid var(--line); padding-top: 14px; margin-top: 8px; font-size: 0.8rem; color: var(--ink-soft); display: grid; gap: 6px;">
        <span style="display: flex; align-items: center; gap: 6px;">
          <Clock3 :size="14" /> {{ business.hours }}
        </span>
        <a :href="business.phoneHref" style="display: flex; align-items: center; gap: 6px; color: inherit;">
          <Phone :size="14" /> {{ business.phoneDisplay }}
        </a>
      </div>
    </div>
  </header>
</template>
