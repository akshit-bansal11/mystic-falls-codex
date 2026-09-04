// Applies the reader's saved theme before first paint, so a light-theme reader
// never sees a dark flash and vice versa (DES-04, DES-D17).
//
// This is a separate file rather than an inline script on purpose: an inline
// script needs dangerouslySetInnerHTML, and CI-06 does not allow suppressing a
// security lint rule. Loaded without async or defer, so it still runs before
// the document is painted.
try {
  const saved = localStorage.getItem('codex-theme')
  if (saved === 'light' || saved === 'dark') {
    document.documentElement.dataset.theme = saved
  }
} catch {
  // Storage unavailable (private mode, blocked cookies). The system
  // preference in globals.css remains in effect.
}
