<script setup lang="ts">
import { MapPin, Clock3, Phone, MessageSquareQuote } from 'lucide-vue-next'
import { business } from '~/data/site'

useSeoMeta({
  title: 'Contact Mellow Mom | WhatsApp Enquiries in Ernakulam',
  description: 'Connect with Mellow Mom on WhatsApp for postnatal care, newborn guidance and maternal wellness support in Ernakulam, Kerala.',
  ogTitle: 'Contact Mellow Mom',
  ogDescription: 'We are just a WhatsApp message away.',
  ogType: 'website',
  ogUrl: `${business.siteUrl}/contact`,
  twitterCard: 'summary_large_image'
})
useHead({ link: [{ rel: 'canonical', href: `${business.siteUrl}/contact` }] })
const { generalLink } = useWhatsApp()
</script>

<template>
  <div>
    <section class="page-intro">
      <div class="container">
        <p class="eyebrow">Contact us</p>
        <h1 class="display-balance">We’re just a WhatsApp message away.</h1>
        <p class="lead">
          Have questions about your motherhood journey or our care services? Connect with Mellow Mom directly. We’re happy to help you understand how we can support you and your little one.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-layout">
        <div class="contact-copy">
          <p class="eyebrow">Let’s connect</p>
          <h2 class="display-balance">A gentle conversation can be the first step.</h2>
          <p class="lead">
            WhatsApp is the simplest and most personal way to reach us. Send a message whenever you are ready, and we’ll take the time to understand what you need without any rush.
          </p>
          <a class="btn btn-primary btn-arrow" :href="generalLink" target="_blank" rel="noopener">
            Chat with us on WhatsApp
          </a>
          <p class="contact-note">
            We do not use complicated contact forms or email queues. Your conversation begins directly with Mellow Mom.
          </p>
        </div>

        <aside class="contact-card">
          <div class="contact-card-inner">
            <p class="eyebrow">Mellow Mom</p>
            <h2>Find your way to us.</h2>

            <div class="contact-detail">
              <span><Phone :size="15" /> Direct Phone</span>
              <strong><a :href="business.phoneHref">{{ business.phoneDisplay }}</a></strong>
            </div>

            <div class="contact-detail">
              <span><MapPin :size="15" /> Location</span>
              <strong>{{ business.location }}</strong>
            </div>

            <div class="contact-detail">
              <span><Clock3 :size="15" /> Hours</span>
              <strong>{{ business.hours }}</strong>
            </div>

            <a class="btn btn-primary btn-arrow" :href="generalLink" target="_blank" rel="noopener">
              Start a WhatsApp chat
            </a>
          </div>
        </aside>
      </div>
    </section>

    <section class="section section-cream">
      <div class="narrow-container" style="text-align: center;">
        <p class="eyebrow">A note from Mellow Mom</p>
        <h2 class="display-balance" style="margin: 18px auto 20px;">You can ask the small questions, too.</h2>
        <p class="lead" style="margin: 0 auto; max-width: 580px;">
          Whether you are looking for postnatal recovery support, gentle newborn care guidance, or simply a little reassurance as you prepare for baby's arrival, you are always welcome to reach out.
        </p>
      </div>
    </section>
  </div>
</template>
