'use client'

import { useEffect } from 'react'

const STORAGE_KEY = 'codex-spoiler-notice'
const DISMISSED = 'dismissed'

function dismiss(): void {
  document.documentElement.dataset.spoilerNotice = DISMISSED
  try {
    window.localStorage.setItem(STORAGE_KEY, DISMISSED)
  } catch {
    // Storage unavailable; the notice returns on the next page view.
  }
}

/**
 * A one-time advisory that the encyclopedia spoils all three shows.
 *
 * Visibility is CSS, not React state. /theme-init.js reads the stored
 * acknowledgement before first paint and stamps `data-spoiler-notice` on the
 * document, so a reader who dismissed it never sees it flash back - and the
 * family-tree and map member links are plain anchors, so full navigations are
 * common on this site. The component holds no state; it only writes the
 * acknowledgement. `display: none` also drops it from the accessibility tree,
 * so the dismiss button cannot be tabbed to once it is gone.
 */
export function SpoilerNotice() {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      // Already gone: leave Escape to whatever else may want it.
      if (document.documentElement.dataset.spoilerNotice === DISMISSED) return
      dismiss()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <aside
      aria-label="Spoiler warning"
      className="spoiler-notice border-default bg-surface shadow-overlay fixed bottom-4 end-4 z-50 flex max-w-80 items-center gap-3 rounded-card border p-3"
    >
      <p className="text-primary text-meta">This site contains spoilers. Read at your own risk.</p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss spoiler warning"
        className="text-muted hover:text-primary duration-fast ease-standard flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-control transition-colors"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </aside>
  )
}
