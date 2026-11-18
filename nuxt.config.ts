export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  vite: {
    server: {
      hmr: false
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'theme-color', content: '#FEF9F3' },
        { name: 'format-detection', content: 'telephone=yes' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/brand-symbol.png' }
      ]
    }
  },
  site: {
    url: 'https://mellowmom.in',
    name: 'Mellow Mom',
    description: 'Nurturing postnatal care, newborn guidance and maternal wellness support at home in Ernakulam, Kerala.'
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://mellowmom.in'
    }
  },
  nitro: {
    prerender: {
      routes: ['/', '/about', '/care', '/contact', '/sitemap.xml', '/robots.txt']
    }
  },
  typescript: {
    strict: true,
    typeCheck: false
  }
})
