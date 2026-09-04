import type { Metadata } from 'next'
import { ERA_NARRATIVES } from '@/data/era-narratives'

export const metadata: Metadata = {
  title: 'Eras',
  description:
    'The chronicle told in order, era by era, from the first immortals of the ancient world to the last class at the Salvatore School.',
  alternates: { canonical: '/eras' },
}

export default function ErasPage() {
  return (
    <>
      <h2 className="text-primary font-display text-h1">The Eras</h2>
      <p className="text-muted mt-2 mb-10 max-w-2xl text-lead">
        Seven ages, in order. The flashbacks in the shows arrive out of sequence; this is the
        sequence.
      </p>

      {ERA_NARRATIVES.map((era) => (
        <section key={era.id} id={era.id} className="border-subtle mb-14 scroll-mt-8 border-t pt-8">
          <p className="text-faint font-mono text-eyebrow uppercase">Era {era.num}</p>
          <h3 className="text-primary mt-1 font-display text-h1">{era.name}</h3>
          <p className="text-muted font-mono text-meta">{era.when}</p>

          {era.sections.map((section) => (
            <div key={`${era.id}-${section.heading ?? 'intro'}`} className="mt-8">
              {section.heading ? (
                <h4 className="text-primary font-display text-h3">{section.heading}</h4>
              ) : null}
              <div className="mt-3 max-w-3xl space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-primary text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.keyPoint ? (
                <p className="border-accent text-primary mt-5 max-w-3xl border-l-2 py-1 pl-4 font-body text-lead italic">
                  {section.keyPoint}
                </p>
              ) : null}
            </div>
          ))}
        </section>
      ))}
    </>
  )
}
