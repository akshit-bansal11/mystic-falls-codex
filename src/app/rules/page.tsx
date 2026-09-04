import type { Metadata } from 'next'
import { RULES } from '@/data/rules'

export const metadata: Metadata = {
  title: 'Rules',
  description:
    'How the supernatural actually works: becoming a vampire or werewolf, how magic and death operate, killing an Original, compulsion, doppelgangers and sirelines.',
}

export default function RulesPage() {
  return (
    <>
      <h2 className="text-primary font-display text-h1">The Rules</h2>
      <p className="text-muted mt-2 mb-10 max-w-2xl text-lead">
        Eight mechanics the plot obeys. Every reversal in the franchise is one of these being
        applied, or exploited.
      </p>

      <div className="space-y-12">
        {RULES.map((rule) => (
          <article key={rule.id} id={rule.id} className="border-subtle scroll-mt-8 border-t pt-6">
            <h3 className="text-primary font-display text-h2">{rule.name}</h3>
            <p className="text-primary mt-3 max-w-3xl font-body text-lead">{rule.rule}</p>

            {rule.sections.map((section) => (
              <div key={section.label} className="mt-6">
                <p className="text-faint font-mono text-eyebrow uppercase">{section.label}</p>
                <dl className="border-subtle mt-2 grid max-w-3xl grid-cols-[minmax(8rem,auto)_1fr] gap-x-6 gap-y-2 border-l pl-4">
                  {section.items.map((item) => (
                    <div key={item.term} className="contents">
                      <dt className="text-primary font-mono text-meta">{item.term}</dt>
                      <dd className="text-muted text-meta">{item.note}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}

            {rule.footnote ? (
              <p className="text-faint mt-5 max-w-3xl text-meta italic">{rule.footnote}</p>
            ) : null}
          </article>
        ))}
      </div>
    </>
  )
}
