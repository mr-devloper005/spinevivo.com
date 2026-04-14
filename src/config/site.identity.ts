export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'eydtmznb6j',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Spine Vivo',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Business listing and local discovery',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A structured business listing platform for services, companies, and local discovery.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'spinevivo.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://spinevivo.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || 'AIzaSyBco7dIECu3rJWjP3J0MImnR_uxlbeqAe0',

} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const

