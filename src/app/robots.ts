import type { MetadataRoute } from 'next'
import { IS_INDEXABLE, SITE_URL } from '@/config/site'

export default function robots(): MetadataRoute.Robots {
  // Preview and staging origins are closed to crawlers (SEO-12); only the
  // production deployment invites indexing.
  if (!IS_INDEXABLE) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
