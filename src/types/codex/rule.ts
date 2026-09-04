export interface RuleItem {
  term: string
  note: string
}

export interface RuleSection {
  label: string
  items: RuleItem[]
}

export interface Rule {
  /** Slug derived from the name; the source data keys rules by name alone. */
  id: string
  name: string
  rule: string
  sections: RuleSection[]
  footnote: string
}
