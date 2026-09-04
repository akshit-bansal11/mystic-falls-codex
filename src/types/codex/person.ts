import type { CategoryKey } from '@/types/codex/category'

/**
 * A named relationship from a person to either another person or a causal-map
 * node. Four of the eighty nodes are referenced this way (founders, gemini,
 * crescent, malivore); resolve as person first, then node.
 */
export interface PersonConnection {
  id: string
  relation: string
}

export interface Person {
  id: string
  name: string
  alsoKnownAs: string
  lived: string
  kind: string
  house: string
  appearsIn: string
  group: string
  category: CategoryKey
  oneLine: string
  biography: string[]
  facts: string[]
  connections: PersonConnection[]
}

/**
 * The fields the directory needs to search and render a card.
 *
 * The full PEOPLE module is 148 KB. A client-side search that imported it
 * would ship all of it to the browser, including 110 full biographies that the
 * list never renders, so the server projects this down first.
 */
export interface PersonSummary {
  id: string
  name: string
  alsoKnownAs: string
  kind: string
  lived: string
  category: CategoryKey
  oneLine: string
}
