/** A generation band in a family tree, drawn as one horizontal row. */
export interface FamilyRow {
  row: number
  label: string
}

export interface FamilyMember {
  person: string
  row: number
  col: number
}

/** How two members are joined: blood descent, marriage, siring, or turning. */
export interface FamilyLink {
  from: string
  to: string
  type: string
}

export interface FamilyTree {
  id: string
  name: string
  blurb: string
  rows: FamilyRow[]
  members: FamilyMember[]
  links: FamilyLink[]
}
