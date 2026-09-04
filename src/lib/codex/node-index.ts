import { CAUSAL_MAP } from '@/data/causal-map'
import type { CausalNode } from '@/types/codex/causal-node'

export const NODE_BY_ID: ReadonlyMap<string, CausalNode> = new Map(
  CAUSAL_MAP.map((node) => [node.id, node])
)
