export interface CareService {
  id: string
  eyebrow: string
  title: string
  shortDescription: string
  description: string
  purpose: string
  image: string
  alt: string
  message: string
  accent: string
}

export const services: CareService[] = [
  {
    id: 'postnatal-recovery',
    eyebrow: 'For the early days',
    title: 'Postnatal Recovery Support',
    shortDescription: 'Gentle support for mothers during their postnatal recovery journey.',
    description: 'The days after birth can hold tenderness, change and many questions. Our support is shaped around helping mothers feel more comfortable, rested and cared for at home.',
    purpose: 'A calmer, more supported rhythm for recovery and everyday motherhood.',
    image: '/images/motherhood-at-home.jpg',
    alt: 'Mother sharing a relaxed moment at home with her children',
    message: 'Hello Mellow Mom! I would like to enquire about your postnatal recovery support services.',
    accent: 'rose'
  },
  {
    id: 'newborn-care',
    eyebrow: 'For growing confidence',
    title: 'Newborn Care Guidance',
    shortDescription: 'Guidance and support to help parents understand and care for their newborn.',
    description: 'From the small everyday moments to the questions that arrive at 2 a.m., we offer warm, practical guidance that helps parents feel more confident as they get to know their baby.',
    purpose: 'Clearer, more reassuring newborn care at your own pace.',
    image: '/images/newborn-care.jpg',
    alt: 'Newborn resting on a soft blanket',
    message: 'Hello Mellow Mom! I would like to know more about your newborn care guidance.',
    accent: 'sage'
  },
  {
    id: 'maternal-wellness',
    eyebrow: 'For your wellbeing',
    title: 'Maternal Wellness',
    shortDescription: 'A nurturing approach to maternal comfort, relaxation and well-being.',
    description: 'Mothers deserve care that makes space for them, too. Our maternal wellness approach is gentle, personal and grounded in the simple value of feeling supported.',
    purpose: 'A moment to exhale, reconnect with yourself and feel held in the journey.',
    image: '/images/hero-portrait.jpg',
    alt: 'Mother lifting her baby during a quiet moment together',
    message: 'Hello Mellow Mom! I would like to enquire about your maternal wellness services.',
    accent: 'blush'
  },
  {
    id: 'at-home-care',
    eyebrow: 'Where you feel most at ease',
    title: 'At-Home Care',
    shortDescription: 'Convenient care and support in the comfort and familiarity of home.',
    description: 'Your surroundings matter. At-home care brings a more personal, unhurried experience to the space where you and your little one are already settling in.',
    purpose: 'Support that fits around your home, your baby and your family’s real life.',
    image: '/images/quiet-moments.jpg',
    alt: 'Newborn baby wrapped in a soft white blanket',
    message: 'Hello Mellow Mom! I would like to know more about your at-home care services.',
    accent: 'beige'
  }
]
