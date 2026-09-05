import type { Metadata } from 'next'
import { type BookPage, CodexBook } from '@/components/codex/codex-book'
import { SectionIndex } from '@/components/layout/section-index'
import { ERA_NARRATIVES } from '@/data/era-narratives'

export const metadata: Metadata = {
  title: 'Eras',
  description:
    'The chronicle told in order, era by era, from the first immortals of the ancient world to the last class at the Salvatore School.',
  alternates: { canonical: '/eras' },
}

/**
 * The chronicle is paginated at its own seams rather than by measuring text.
 *
 * One page per era opening and one per section, so a page break always lands
 * where the writing already broke. The alternative - reflowing the prose into
 * fixed-height pages - needs font metrics the server does not have, and would
 * put a break mid-sentence at one viewport width and not at another.
 *
 * The cost is that pages are uneven, which is what a real book's pages are.
 */
function buildPages(): BookPage[] {
  const pages: BookPage[] = []

  for (const era of ERA_NARRATIVES) {
    const runningHead = `Era ${era.num} · ${era.when}`

    pages.push({
      id: era.id,
      node: (
        <article id={era.id} className="codex-page codex-page-opener scroll-mt-8">
          <p className="codex-page-head text-faint font-mono text-eyebrow uppercase">
            {runningHead}
          </p>
          <p className="codex-page-eyebrow text-faint font-mono text-eyebrow uppercase">
            Era {era.num}
          </p>
          <h3 className="codex-page-title text-primary mt-1 font-display text-h1">{era.name}</h3>
          <p className="codex-page-when text-muted font-mono text-meta">{era.when}</p>
          <div className="codex-page-prose codex-columns mt-3 space-y-4">
            {era.sections[0]?.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-primary text-body">
                {paragraph}
              </p>
            ))}
          </div>
          <span className="codex-page-folio">{pages.length + 1}</span>
        </article>
      ),
    })

    // The opening section has no heading and runs under the era title, so it
    // is already on the page above; the rest each take their own.
    for (const section of era.sections.slice(1)) {
      pages.push({
        id: `${era.id}-${section.heading}`,
        node: (
          <article className="codex-page scroll-mt-8">
            <p className="codex-page-head text-faint font-mono text-eyebrow uppercase">
              {runningHead}
            </p>
            {section.heading ? (
              <h4 className="codex-page-title text-primary mt-4 font-display text-h3">
                {section.heading}
              </h4>
            ) : null}
            <div className="codex-page-prose codex-columns mt-3 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-primary text-body">
                  {paragraph}
                </p>
              ))}
              {section.keyPoint ? (
                <p className="border-accent text-primary mt-5 border-l-2 py-1 pl-4 font-body text-lead italic">
                  {section.keyPoint}
                </p>
              ) : null}
            </div>
            <span className="codex-page-folio">{pages.length + 1}</span>
          </article>
        ),
      })
    }
  }

  return pages
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

      <CodexBook pages={buildPages()} />
    </>
  )
}
