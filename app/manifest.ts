import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vedic Center of Greenville',
    short_name: 'VCOFG',
    description: 'Hindu temple and spiritual center serving the Greenville-Spartanburg area',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff7ed',
    theme_color: '#ea580c',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    categories: ['religion', 'lifestyle', 'education'],
    lang: 'en',
    dir: 'ltr',
    orientation: 'portrait-primary',
    prefer_related_applications: false,
  }
}