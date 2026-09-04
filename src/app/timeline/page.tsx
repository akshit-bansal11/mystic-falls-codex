import type { Metadata } from 'next'
import { StrandDot } from '@/components/codex/strand-dot'
import { SectionIndex } from '@/components/layout/section-index'
import { TIMELINE } from '@/data/timeline'
import { CATEGORY_BY_KEY } from '@/lib/codex/category-index'

export const metadata: Metadata = {
  title: 'Timeline',
  description:
    'Roughly one hundred dated events from c. 100 BC to 2028, in order, across The Vampire Diaries, The Originals and Legacies.',
  alternates: { canonical: '/timeline' },
}

/** The source keys timeline sections by their title alone, so anchors are derived. */
const sectionId = (title: string) =>
  title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

export default function TimelinePage() {
  return (
    <>
      <h2 className="text-primary font-display text-h1">Timeline</h2>
      <p className="text-muted mt-2 mb-10 max-w-2xl text-lead">
        Two thousand years in order, from the immortality elixir to the last class at the Salvatore
        School.
      </p>

      <SectionIndex
        label="Periods on this page"
        items={TIMELINE.map((section) => ({
          href: `#${sectionId(section.section)}`,
          label: section.section,
        }))}
      />

      <div className="space-y-12">
        {TIMELINE.map((section) => (
          <section key={section.section} id={sectionId(section.section)} className="scroll-mt-8">
            <h3 className="text-primary border-subtle border-b pb-2 font-display text-h2">
              {section.section}
            </h3>
            <ol className="mt-6 list-none space-y-6 p-0">
              {section.entries.map((entry) => (
                <li
                  key={`${entry.date}-${entry.event.slice(0, 32)}`}
                  className="border-subtle grid grid-cols-1 gap-1 border-l-2 pl-4 sm:grid-cols-[10rem_1fr] sm:gap-4"
                >
                  <p className="text-muted flex items-center gap-2 font-mono text-meta">
                    <StrandDot strand={entry.category} />
                    <span>{entry.date}</span>
                    <span className="sr-only">{CATEGORY_BY_KEY.get(entry.category)?.name}</span>
                  </p>
                  <div>
                    <p className="text-primary font-body text-lead">{entry.event}</p>
                    {entry.detail ? (
                      <p className="text-muted mt-1 text-meta">{entry.detail}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </>
  )
}
