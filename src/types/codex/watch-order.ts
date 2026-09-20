export interface Show {
  title: string
  episodes: number
  run: string
  note: string
}

/**
 * One sitting in an interleaved step: the show, and the episodes to watch
 * before switching back. Most sittings are a single episode; a few are two,
 * where the broadcast weeks did not alternate cleanly.
 *
 * The show is carried as its own field rather than inlined into the episode
 * string, so the page can mark the two apart without matching on a prefix.
 */
export interface Sitting {
  show: 'TVD' | 'TO'
  episodes: string
}

export interface WatchStep {
  step: string
  title: string
  meta: string
  note: string
  /**
   * Episode-by-episode interleaving for the steps where two shows run
   * concurrently. Empty for steps that are watched straight through.
   */
  pairing: Sitting[]
}

export interface SeasonSummary {
  season: string
  aired: string
  summary: string
}

export interface Crossover {
  episode: string
  whatHappens: string
}

export interface WatchOrder {
  shows: Show[]
  steps: WatchStep[]
  seasons: SeasonSummary[]
  crossovers: Crossover[]
}
