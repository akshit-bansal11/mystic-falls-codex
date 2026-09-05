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

/**
 * Chapter numeral in the chronicle. Deliberately not `EraNum`.
 *
 * The book's chapters and the causal map's era bands stopped being the same
 * list when the concurrent years - Mystic Falls and New Orleans, which happen
 * at the same time and were built to be read alternating - were merged into one
 * chapter. The map still bands its nodes I to VII on its own scheme; the book
 * runs to VIII. Typing both as one union would assert a correspondence that no
 * longer holds, and the first person to rely on it would be wrong.
 */
export type ChapterNum = 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI' | 'VII' | 'VIII'

export interface EraNarrative {
  id: string
  num: ChapterNum
  name: string
  when: string
  sections: EraNarrativeSection[]
}
