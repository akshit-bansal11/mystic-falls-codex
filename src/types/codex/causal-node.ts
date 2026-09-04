import type { CategoryKey } from '@/types/codex/category'
import type { EraNum } from '@/types/codex/era'

/** A directed edge out of one node, carrying the verb that connects them. */
export interface CausalLink {
  node: string
  relation: string
}

export interface CausalNode {
  id: string
  title: string
  era: EraNum
  dated: string
  category: CategoryKey
  summary: string
  facts: string[]
  peopleInvolved: string[]
  leadsTo: CausalLink[]
  /** Row within the node's era band. */
  row: number
  /** Column across the map, 0-4. */
  col: number
}
