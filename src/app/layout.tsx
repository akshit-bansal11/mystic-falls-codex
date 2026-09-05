import type { Metadata } from 'next'
import { Bodoni_Moda, Caveat, IBM_Plex_Mono, Spectral } from 'next/font/google'
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
 * The hand the codex is written in. Used only on the book's pages, never in the
 * interface: a handwriting face costs real legibility, so it is confined to the
 * surface whose whole point is that it looks handwritten, and the same prose is
 * set in Spectral everywhere else - including the book's own fallback below the
 * lg breakpoint and under reduced motion.
 *
 * Caveat over the formal scripts (Tangerine, Petit Formal Script, Mrs Saint
 * Delafield): those are beautiful for a line and unreadable for a thousand
 * characters, which is what an era section actually is.
 */
const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-hand',
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
        className={`${bodoni.variable} ${spectral.variable} ${plexMono.variable} ${caveat.variable} min-h-dvh antialiased`}
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
