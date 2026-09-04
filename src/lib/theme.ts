export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'codex-theme'
const MEDIA_QUERY = '(prefers-color-scheme: dark)'

/**
 * The theme lives outside React: it is a `data-theme` attribute applied before
 * first paint by /theme-init.js, falling back to the OS preference. Components
 * read it through useSyncExternalStore rather than mirroring it into state,
 * which is why this module keeps its own listener set - a toggle mutates the
 * DOM directly and has to tell React that the external value moved.
 */
const listeners = new Set<() => void>()

export function subscribeTheme(onChange: () => void): () => void {
  listeners.add(onChange)
  const media = window.matchMedia(MEDIA_QUERY)
  media.addEventListener('change', onChange)
  return () => {
    listeners.delete(onChange)
    media.removeEventListener('change', onChange)
  }
}

export function getTheme(): Theme {
  const explicit = document.documentElement.dataset.theme
  if (explicit === 'light' || explicit === 'dark') return explicit
  return window.matchMedia(MEDIA_QUERY).matches ? 'dark' : 'light'
}

/**
 * The server cannot know the reader's stored preference, so it renders the
 * light label and the client corrects it on hydration.
 */
export function getServerTheme(): Theme {
  return 'light'
}

export function setTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme
  try {
    window.localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Storage unavailable; the choice applies for this page view only.
  }
  for (const listener of listeners) listener()
}
