export interface TimelineEntry {
  date: string
  event: string
  detail: string
  category: string
}

export interface TimelineSection {
  section: string
  entries: TimelineEntry[]
}
