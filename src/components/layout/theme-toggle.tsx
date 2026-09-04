'use client'

import { useSyncExternalStore } from 'react'
import { getServerTheme, getTheme, setTheme, subscribeTheme } from '@/lib/theme'

/**
 * The pre-paint script sets `data-theme` before the document is painted, so the
 * server cannot know which label to render; the label is corrected on
 * hydration. The label box has a fixed minimum width so the correction moves no
 * neighbouring element (UI-18).
 */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme)
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className="border-default text-muted hover:text-primary duration-fast ease-standard min-h-11 rounded-control border px-3 font-mono text-meta transition-colors"
    >
      <span className="inline-block min-w-[5.5rem]" suppressHydrationWarning>
        {next === 'dark' ? 'Nightfall' : 'Daylight'}
      </span>
    </button>
  )
}
