/**
 * The canonical origin (SEO-03). Vercel supplies the production domain at build
 * time; NEXT_PUBLIC_SITE_URL overrides it once a custom domain exists. Every
 * canonical, sitemap entry and card image is absolute against this value.
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  return 'http://localhost:3000'
}

export const SITE_URL = resolveSiteUrl()

export const SITE_NAME = 'The Mystic Falls Codex'

export const SITE_DESCRIPTION =
  'An interactive encyclopedia of the in-universe history of The Vampire Diaries, The Originals and Legacies: a causal map, family trees, 110 character biographies, factions, rules, timeline and watch order.'

/** Preview and staging deployments are never indexable (SEO-12). */
export const IS_INDEXABLE = process.env.VERCEL_ENV === 'production'
