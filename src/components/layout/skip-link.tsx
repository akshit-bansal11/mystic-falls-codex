/**
 * First focusable element on every page (UI-25). Off-screen until focused,
 * then pinned to the top-left so a keyboard reader can jump the masthead.
 */
export function SkipLink() {
  return (
    <a
      href="#content"
      className="sr-only rounded-control focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-surface focus:px-4 focus:py-2 focus:text-primary focus:shadow-overlay focus:outline-2 focus:outline-offset-2 focus:outline-strong"
    >
      Skip to content
    </a>
  )
}
