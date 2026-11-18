export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined
  let isHydrated = false

  const revealSections = () => {
    observer?.disconnect()

    const targets = document.querySelectorAll<HTMLElement>(
      '.hero-grid, .section, .page-intro, .story-section, .care-row, .final-cta, .site-footer'
    )
    targets.forEach((target) => target.classList.add('scroll-reveal'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting)
      })
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    })

    targets.forEach((target) => observer?.observe(target))
  }

  nuxtApp.hook('app:mounted', () => {
    window.setTimeout(() => {
      isHydrated = true
      revealSections()
    }, 100)
  })

  nuxtApp.hook('page:finish', () => {
    if (isHydrated) {
      requestAnimationFrame(revealSections)
    }
  })
})
