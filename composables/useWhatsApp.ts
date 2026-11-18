import { business } from '~/data/site'

export const useWhatsApp = () => {
  const baseUrl = `https://wa.me/${business.whatsappNumber}`

  const linkFor = (message?: string) => {
    if (!message) return baseUrl
    return `${baseUrl}?text=${encodeURIComponent(message)}`
  }

  const generalMessage = 'Hello Mellow Mom! I visited your website and would like to know more about your postnatal care and wellness services.'

  return {
    linkFor,
    generalLink: linkFor(generalMessage),
    generalMessage
  }
}
