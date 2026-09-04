import type { CategoryKey } from '@/types/codex/category'

export interface TimelineEntry {
  date: string
  event: string
  detail: string
  category: CategoryKey
}

export interface TimelineSection {
  section: string
  entries: TimelineEntry[]
}
