<script setup lang="ts">
import { business } from '~/data/site'
useSeoMeta({
  title: 'About Mellow Mom | Maternal Wellness in Ernakulam',
  description: 'Learn about Mellow Mom’s gentle, home-centred approach to postnatal care, newborn guidance and maternal wellness in Ernakulam.',
  ogTitle: 'About Mellow Mom',
  ogDescription: 'A nurturing approach to the early days of motherhood, at home.',
  ogType: 'website',
  ogUrl: `${business.siteUrl}/about`,
  twitterCard: 'summary_large_image'
})
useHead({ link: [{ rel: 'canonical', href: `${business.siteUrl}/about` }] })
</script>

<template>
  <div>
    <section class="page-intro"><div class="container"><p class="eyebrow">About Mellow Mom</p><h1 class="display-balance">Care for the mother, care for the moment.</h1><p class="lead">A home-centred wellness experience for mothers and newborns in Ernakulam.</p></div></section>

    <section class="section"><div class="container about-feature"><img class="about-image" src="/images/motherhood-at-home.jpg" alt="Mother and children sharing time together at home" loading="lazy" /><div class="about-copy"><p class="eyebrow">About Mellow Mom</p><h2 class="display-balance">Motherhood can be beautiful and deeply demanding.</h2><p class="lead">Mellow Mom exists to bring a little more care to the one who gives so much. We offer gentle postnatal support, newborn care guidance and nurturing wellness in the comfort of home.</p><p class="lead">Our approach is personal rather than prescriptive: listening first, meeting you with warmth and helping make the early days feel a little less overwhelming.</p></div></div></section>

    <section class="section section-cream"><div class="container about-feature reverse"><div class="about-copy"><p class="eyebrow">Our story</p><h2 class="display-balance">A quieter, kinder way to begin.</h2><p class="lead">The first weeks with a newborn are full of tiny changes. There is learning, adjusting, resting and finding your new rhythm. Mellow Mom is built around the belief that mothers deserve to be supported through that season, not expected to move through it alone.</p><p class="lead">That means thoughtful conversations, comfort at home and guidance that leaves room for your family’s own way of doing things.</p></div><img class="about-image" src="/images/quiet-moments.jpg" alt="Newborn wrapped in a soft blanket" loading="lazy" /></div></section>

    <section class="section"><div class="container"><div class="philosophy-panel"><p class="eyebrow">Our philosophy</p><h2 class="display-balance">Care should feel like a deep breath.</h2><p>We keep our language clear, our presence gentle and our focus close to home. There is no one-size-fits-all version of motherhood. Our role is to offer a considered layer of support that respects the mother, the baby and the life they are growing into together.</p></div></div></section>

    <section class="section section-cream"><div class="container commitment-grid"><div><p class="eyebrow">Our approach to maternal wellness</p><h2 class="display-balance">Space to rest. Guidance to trust.</h2></div><div class="commitment-copy"><div class="commitment-item"><span>01</span><h3>Listen with care</h3><p>Every family arrives with its own questions, needs and rhythm.</p></div><div class="commitment-item"><span>02</span><h3>Keep it personal</h3><p>Support should feel relevant to the life you are actually living.</p></div><div class="commitment-item"><span>03</span><h3>Make room for rest</h3><p>Recovery is part of the journey, not an afterthought.</p></div><div class="commitment-item"><span>04</span><h3>Hold both in view</h3><p>Mother and baby belong at the heart of the same caring conversation.</p></div></div></div></section>

    <section class="section"><div class="container about-feature"><img class="about-image" src="/images/hero-portrait.jpg" alt="Mother lifting her baby in a joyful moment together" loading="lazy" /><div class="about-copy"><p class="eyebrow">Our commitment</p><h2 class="display-balance">To mothers, to babies and to the in-between moments.</h2><p class="lead">We are here to make support feel approachable and human. No invented promises, no pressure and no need to have all the answers before you reach out.</p><p class="lead">Just a warm place to begin a conversation about what care could look like for you and your little one.</p></div></div></section>

    <FinalCTA eyebrow="Begin gently" title="You do not have to hold it all alone." text="Send us a WhatsApp message and discover how Mellow Mom can support your motherhood journey at home." />
  </div>
</template>
