export interface BusinessInfo {
  brand: string
  parentBrand: string
  tagline: string
  description: string
  phoneDisplay: string
  phoneHref: string
  whatsappNumber: string
  location: string
  hours: string
  siteUrl: string
}

export const business: BusinessInfo = {
  brand: 'Mellow Mom',
  parentBrand: 'Mellow Wellness',
  tagline: 'Recover. Rest. Reconnect.',
  description: 'Postnatal care for mom and baby in the comfort of your home. Gentle recovery support, newborn care guidance, and nurturing wellness.',
  phoneDisplay: '+91 99955 44624',
  phoneHref: 'tel:+919995544624',
  whatsappNumber: '919995544624',
  location: 'Ernakulam, Kerala, India',
  hours: '7:00 AM – 9:00 PM',
  siteUrl: 'https://mellowmom.in'
}

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Care', to: '/care' },
  { label: 'Contact', to: '/contact' }
]

export const reasons = [
  { number: '01', title: 'Personalized attention', text: 'Care that listens to your family’s rhythm and meets you where you are.' },
  { number: '02', title: 'Comfort of home', text: 'A familiar, unhurried setting for rest, reassurance and gentle support.' },
  { number: '03', title: 'Mother and baby focused', text: 'Thoughtful guidance that keeps the wellbeing of both at the centre.' },
  { number: '04', title: 'A nurturing approach', text: 'Warm, clear and compassionate support throughout the postnatal journey.' }
]

export const journey = [
  { number: '01', title: 'Connect with us', text: 'Send a WhatsApp message and tell us a little about what you need.' },
  { number: '02', title: 'Discuss your care needs', text: 'We’ll listen, answer your questions and help you understand the next step.' },
  { number: '03', title: 'Receive support at home', text: 'Begin a more supported, restorative rhythm in the comfort of home.' }
]
