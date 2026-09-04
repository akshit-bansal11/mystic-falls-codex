import type { MetadataRoute } from 'next'
import { NAV_ITEMS } from '@/config/nav'
import { SITE_URL } from '@/config/site'
import { CAUSAL_MAP } from '@/data/causal-map'
import { PEOPLE } from '@/data/people'

/**
 * Generated from the route manifest rather than hand-listed (SEO-24), so a
 * deleted route leaves the sitemap in the same commit. Every entry is an
 * indexable, self-canonical URL that answers 200 (SEO-08).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const sections = NAV_ITEMS.map((item) => ({
    url: `${SITE_URL}${item.href}`,
    changeFrequency: 'yearly' as const,
    priority: item.href === '/' ? 1 : 0.8,
  }))

  const people = PEOPLE.map((person) => ({
    url: `${SITE_URL}/people/${person.id}`,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  const nodes = CAUSAL_MAP.map((node) => ({
    url: `${SITE_URL}/node/${node.id}`,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...sections, ...people, ...nodes]
}
