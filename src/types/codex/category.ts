/** The six colour-coded strands the causal map is grouped by. */
export type CategoryKey = 'origin' | 'vamp' | 'wolf' | 'witch' | 'death' | 'house'

export interface Category {
  key: CategoryKey
  name: string
  /** CSS custom property holding this category's colour, e.g. `--c-origin`. */
  cssVar: string
}
