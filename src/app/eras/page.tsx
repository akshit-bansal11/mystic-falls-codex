import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { type BookChapter, CodexBook } from '@/components/codex/codex-book'
import { SectionIndex } from '@/components/layout/section-index'
import { SITE_NAME } from '@/config/site'
import { ERA_NARRATIVES } from '@/data/era-narratives'

export const metadata: Metadata = {
  title: 'Eras',
  description:
    'The chronicle told in order, era by era, from the first immortals of the ancient world to the last class at the Salvatore School.',
  alternates: { canonical: '/eras' },
}

/**
 * One chapter per era, and the chapter's prose as a flat run of blocks.
 *
 * Flat is the point. A chapter is a stream of paragraphs that breaks wherever
 * the page runs out, not a set of boxes that each own a page - so an era's
 * sections contribute a subheading and their paragraphs to one run and the
 * browser decides where the pages fall. The previous shape, one page per
 * section, gave a chapter as many pages as it had headings and left most of
 * them two thirds empty.
 */
function buildChapters(): BookChapter[] {
  return ERA_NARRATIVES.map((era) => {
    const blocks: { id: string; node: ReactNode }[] = []

    era.sections.forEach((section, index) => {
      if (section.heading) {
        blocks.push({
          id: `${era.id}-h-${section.heading}`,
          node: (
            <h4 key={`${era.id}-h-${section.heading}`} className="codex-subhead">
              {section.heading}
            </h4>
          ),
        })
      }

      section.paragraphs.forEach((paragraph, paragraphIndex) => {
        blocks.push({
          id: paragraph.slice(0, 64),
          node: (
            <p
              key={paragraph.slice(0, 48)}
              // The chapter's very first paragraph takes the drop cap, the way a
              // chapter opens. The first paragraph after any subheading sets
              // flush; the rest are indented, which is how a book separates them.
              data-first={index === 0 && paragraphIndex === 0 ? '' : undefined}
              data-flush={paragraphIndex === 0 ? '' : undefined}
            >
              {paragraph}
            </p>
          ),
        })
      })

      if (section.keyPoint) {
        blocks.push({
          id: `${era.id}-q-${section.keyPoint.slice(0, 32)}`,
          node: (
            <p key={`${era.id}-q-${section.keyPoint.slice(0, 32)}`} className="codex-pull">
              {section.keyPoint}
            </p>
          ),
        })
      }
    })

    return {
      id: era.id,
      kicker: `Era ${era.num}`,
      title: era.name,
      subtitle: era.when,
      blocks,
    }
  })
}

export default function ErasPage() {
  return (
    <>
      <h2 className="text-primary font-display text-h1">The Eras</h2>
      <p className="text-muted mt-2 mb-10 max-w-4xl text-lead">
        Seven ages, in order. The flashbacks in the shows arrive out of sequence; this is the
        sequence.
      </p>

      <SectionIndex
        label="Eras on this page"
        items={ERA_NARRATIVES.map((era) => ({
          href: `#${era.id}`,
          label: `${era.num}. ${era.name}`,
        }))}
      />

      <CodexBook title={SITE_NAME} chapters={buildChapters()} />
    </>
  )
}
