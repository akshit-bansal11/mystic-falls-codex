import type { CategoryKey } from '@/types/codex/category'

/** A named relationship from one person to another. */
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
