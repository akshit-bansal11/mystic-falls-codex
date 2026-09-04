import type { Metadata } from 'next'
import { WATCH_ORDER } from '@/data/watch-order'

export const metadata: Metadata = {
  title: 'Watch Order',
  description:
    'Broadcast order, with the alternating schedule for the three years The Vampire Diaries and The Originals ran concurrently, plus every crossover episode.',
}

export default function WatchOrderPage() {
  return (
    <>
      <h2 className="text-primary font-display text-h1">Watch Order</h2>
      <p className="text-muted mt-2 max-w-2xl text-lead">
        Broadcast order, never chronological. The flashbacks are the reveals: watching 1490 before
        2009 turns the structure that carries the story into plain exposition.
      </p>

      <section className="mt-12">
        <h3 className="text-primary font-display text-h2">The three shows</h3>
        <ul className="mt-4 grid list-none grid-cols-1 gap-4 p-0 lg:grid-cols-3">
          {WATCH_ORDER.shows.map((show) => (
            <li key={show.title} className="bg-surface border-subtle rounded-card border p-4">
              <h4 className="text-primary font-display text-h3">{show.title}</h4>
              <p className="text-faint font-mono text-meta">
                {show.episodes} episodes &middot; {show.run}
              </p>
              <p className="text-muted mt-2 text-meta">{show.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h3 className="text-primary font-display text-h2">The order</h3>
        <ol className="mt-6 list-none space-y-8 p-0">
          {WATCH_ORDER.steps.map((step) => (
            <li key={step.step} className="border-subtle border-t pt-5">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-accent font-mono text-h3">{step.step}</span>
                <h4 className="text-primary font-display text-h3">{step.title}</h4>
              </div>
              <p className="text-faint mt-1 font-mono text-meta">{step.meta}</p>
              <p className="text-primary mt-3 max-w-3xl text-body">{step.note}</p>
              {step.pairing.length > 0 ? (
                <ul className="bg-raised rounded-card mt-4 inline-flex list-none flex-col gap-1 p-3">
                  {step.pairing.map((pair) => (
                    <li key={pair} className="text-muted font-mono text-meta">
                      {pair}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h3 className="text-primary font-display text-h2">Crossovers</h3>
        <table className="mt-4 w-full border-collapse text-left">
          <caption className="text-faint sr-only">
            Episodes where the shows cross over, and what happens in each
          </caption>
          <thead>
            <tr className="border-subtle border-b">
              <th scope="col" className="text-faint py-2 pr-4 font-mono text-eyebrow uppercase">
                Episode
              </th>
              <th scope="col" className="text-faint py-2 font-mono text-eyebrow uppercase">
                What happens
              </th>
            </tr>
          </thead>
          <tbody>
            {WATCH_ORDER.crossovers.map((crossover) => (
              <tr key={crossover.episode} className="border-subtle border-b align-top">
                <th
                  scope="row"
                  className="text-primary py-3 pr-4 font-mono text-meta font-normal whitespace-nowrap"
                >
                  {crossover.episode}
                </th>
                <td className="text-muted py-3 text-meta">{crossover.whatHappens}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-14">
        <h3 className="text-primary font-display text-h2">Season by season</h3>
        <dl className="mt-4 space-y-4">
          {WATCH_ORDER.seasons.map((season) => (
            <div key={season.season} className="border-subtle border-l-2 pl-4">
              <dt className="text-primary font-mono text-meta">
                {season.season} <span className="text-faint">&middot; {season.aired}</span>
              </dt>
              <dd className="text-muted mt-1 text-meta">{season.summary}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}
