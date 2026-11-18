<script setup lang="ts">
import { services } from '~/data/services'
import { business } from '~/data/site'
useSeoMeta({
  title: 'Our Care | Postnatal & Newborn Wellness | Mellow Mom',
  description: 'Explore Mellow Mom’s postnatal recovery support, newborn care guidance, maternal wellness and at-home care in Ernakulam.',
  ogTitle: 'Our Care | Mellow Mom',
  ogDescription: 'Thoughtful, home-centred support for mothers and newborns.',
  ogType: 'website',
  ogUrl: `${business.siteUrl}/care`,
  twitterCard: 'summary_large_image'
})
useHead({ link: [{ rel: 'canonical', href: `${business.siteUrl}/care` }] })
const { linkFor } = useWhatsApp()
</script>

<template>
  <div>
    <section class="page-intro"><div class="container"><p class="eyebrow">Our care</p><h1 class="display-balance">Support for the season you are in.</h1><p class="lead">Gentle, home-centred care for mothers and babies — designed to feel personal, practical and reassuring.</p></div></section>

    <section class="section"><div class="container"><div class="section-heading"><div><p class="eyebrow">Care, considered</p><h2 class="display-balance" style="margin-top: 16px;">A little more support for every little moment.</h2></div><p>Explore the ways Mellow Mom can be part of your postnatal journey.</p></div><div class="care-list"><article v-for="service in services" :key="service.id" class="care-row"><div class="care-row-image"><img :src="service.image" :alt="service.alt" loading="lazy" /></div><div class="care-row-content"><p class="eyebrow">{{ service.eyebrow }}</p><h2 class="display-balance">{{ service.title }}</h2><p>{{ service.description }}</p><p class="care-purpose">{{ service.purpose }}</p><a class="btn btn-primary btn-arrow" :href="linkFor(service.message)" target="_blank" rel="noopener">Enquire about this care</a></div></article></div></div></section>

    <FinalCTA eyebrow="Not sure where to begin?" title="We are happy to listen first." text="Send a WhatsApp message and tell us what support would feel most helpful right now." />
  </div>
</template>
