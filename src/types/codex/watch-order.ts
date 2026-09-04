export interface Show {
  title: string
  episodes: number
  run: string
  note: string
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
  pairing: string[]
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
