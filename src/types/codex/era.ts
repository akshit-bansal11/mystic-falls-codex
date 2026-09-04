/** Roman-numeral era identifier, I (the first immortals) through VII (Legacies). */
export type EraNum = 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI' | 'VII'

export interface Era {
  num: EraNum
  name: string
  when: string
}

export interface EraNarrativeSection {
  /** Null for the opening section, which runs under the era heading itself. */
  heading: string | null
  paragraphs: string[]
  /** Pull-quote. Set on 6 of the 40 sections; null on the rest. */
  keyPoint: string | null
}

export interface EraNarrative {
  id: string
  num: EraNum
  name: string
  when: string
  sections: EraNarrativeSection[]
}
