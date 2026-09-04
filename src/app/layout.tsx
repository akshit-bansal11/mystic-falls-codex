import type { Metadata } from 'next'
import { Bodoni_Moda, IBM_Plex_Mono, Spectral } from 'next/font/google'
import Script from 'next/script'
import type { ReactNode } from 'react'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { SkipLink } from '@/components/layout/skip-link'
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

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-plex-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'The Mystic Falls Codex',
    template: '%s — The Mystic Falls Codex',
  },
  description:
    'An interactive encyclopedia of the in-universe history of The Vampire Diaries, The Originals and Legacies: a causal map, family trees, 110 character biographies, factions, rules, timeline and watch order.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bodoni.variable} ${spectral.variable} ${plexMono.variable} min-h-dvh antialiased`}
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
        <main id="content" className="mx-auto max-w-6xl px-4 py-10">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
