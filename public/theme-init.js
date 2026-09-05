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

// Same pre-paint reason as the theme: the spoiler advisory must not flash back
// for a reader who has already dismissed it, and the family-tree and map links
// are plain anchors, so full navigations are common here.
try {
  if (localStorage.getItem('codex-spoiler-notice') === 'dismissed') {
    document.documentElement.dataset.spoilerNotice = 'dismissed'
  }
} catch {
  // Storage unavailable. The notice shows for this page view.
}
