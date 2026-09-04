import { ERAS } from '@/data/eras'
import type { Era, EraNum } from '@/types/codex/era'

export const ERA_BY_NUM: ReadonlyMap<EraNum, Era> = new Map(ERAS.map((era) => [era.num, era]))

/** Position of an era in chronological order, used to band the causal map. */
export const ERA_ORDER: ReadonlyMap<EraNum, number> = new Map(
  ERAS.map((era, index) => [era.num, index])
)
