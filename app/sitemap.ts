import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ishara-umra.vercel.app'
  const routes = ['', '/services', '/packages', '/booking', '/testimonials', '/contact'].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.7
  }))

  return routes
}