import type { MetadataRoute } from 'next'

const SITE_URL = 'https://capellahomes.com.au'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/about', priority: 0.8 },
    { path: '/services', priority: 0.8 },
    { path: '/projects', priority: 0.7 },
    { path: '/contact', priority: 0.9 },
  ]
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority,
  }))
}
