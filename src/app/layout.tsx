import type { Metadata } from 'next'
import { Bodoni_Moda, EB_Garamond, IBM_Plex_Mono, Spectral } from 'next/font/google'
import Script from 'next/script'
import type { ReactNode } from 'react'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { SkipLink } from '@/components/layout/skip-link'
import { SpoilerNotice } from '@/components/layout/spoiler-notice'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/config/site'
import './globals.css'

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bodoni',
})

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-spectral',
})

/**
 * The face the book's pages are set in.
 *
 * Used only inside the book, never in the interface. EB Garamond is a book
 * text face - that is what it was cut for - and it is here because the first
 * attempt was not: Caveat is a marker hand, and at page length it read as small
 * and hard, which is exactly what a script does when it is asked to carry a
 * thousand characters instead of a signature.
 *
 * The apparent size is the x-height, not the point size. Caveat at 21.6px sits
 * on a short x-height with long ascenders, so it measured large and looked
 * small; Garamond at the same size reads noticeably bigger, and the page is set
 * larger again on top of that.
 */
const garamond = EB_Garamond({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-garamond',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  // Makes every canonical and card URL absolute on the canonical host (SEO-02).
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: '/',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bodoni.variable} ${spectral.variable} ${plexMono.variable} ${garamond.variable} min-h-dvh antialiased`}
      >
        {/* Applies the stored theme (DES-04). Three approaches were rejected:
            an inline script needs dangerouslySetInnerHTML and CI-06 forbids
            suppressing a security rule; a bare <script src> trips Next's
            no-sync-scripts rule; reading a cookie server-side would make every
            route dynamic and give up static generation for the whole site.
            beforeInteractive is the framework's sanctioned answer - injected
            into the initial HTML and fetched before any first-party code. */}
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        <SkipLink />
        <SiteHeader />
        <main id="content" className="shell py-10">
          {children}
        </main>
        <SiteFooter />
        <SpoilerNotice />
      </body>
    </html>
  )
}
