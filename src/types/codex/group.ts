/**
 * A labelled slice of a faction's roster. The label carries the relationship,
 * which is load-bearing: an unlabelled list once put the doppelgangers the
 * Travelers hunted under the Travelers' own heading.
 */
export interface GroupRoster {
  label: string
  people: string[]
}

export interface Group {
  /** Slug derived from the name; the source data keys groups by name alone. */
  id: string
  name: string
  era: string
  description: string
  points: string[]
  roster: GroupRoster[]
}
