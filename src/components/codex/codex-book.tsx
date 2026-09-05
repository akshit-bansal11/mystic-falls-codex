'use client'

import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { BookPlate } from '@/components/codex/book-plate'

export interface BookPage {
  /** Stable across renders and derived from the content, never from position. */
  id: string
  node: ReactNode
}

interface CodexBookProps {
  /**
   * One entry per page, server-rendered. Passed as a prop rather than imported
   * so no content module is pulled into the client bundle - the same rule the
   * map viewport follows.
   */
  pages: BookPage[]
}

/** How far the reader scrolls to turn one leaf. */
const SCROLL_PER_LEAF = '68vh'

/**
 * The chronicle as a book whose leaves turn with the scroll.
 *
 * Two things decide the shape of this component.
 *
 * First, the text is HTML rather than SVG. SVG has no line wrapping, so every
 * break across forty-odd reflowing pages would have to be computed without
 * font metrics, and the page would lose selection, find-in-page and a sane
 * reading order. `BookPlate` draws the book; this positions real prose on it.
 *
 * Second, the flip is CSS, not JavaScript. The scroll handler writes exactly
 * one custom property - `--turn`, the leaf index as a float - and each leaf
 * derives its own angle from it in CSS. Writing a transform per leaf per frame
 * would be 48 style writes a frame for the same picture.
 *
 * Below the `lg` breakpoint and under `prefers-reduced-motion: reduce` the book
 * does not engage at all: `data-book` stays `off`, the leaves lay out as
 * ordinary flow and the plate is hidden. That state is also what the server
 * renders and what a reader with no JavaScript keeps, so the prose is in the
 * document either way - which is what holds find-in-page, the screen-reader
 * order and indexation together.
 */
export function CodexBook({ pages }: CodexBookProps) {
  const [active, setActive] = useState(false)
  const driverRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const frame = useRef(0)

  // A book that turns a leaf per scroll is a poor way to read on a phone, and
  // an animation nobody asked for under reduced motion. Both fall back to the
  // column layout rather than to a degraded book.
  useEffect(() => {
    const query = window.matchMedia(
      '(min-width: 64rem) and (prefers-reduced-motion: no-preference)'
    )
    const sync = () => setActive(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  const leaves = Math.ceil(pages.length / 2)

  const measure = useCallback(() => {
    const driver = driverRef.current
    const stage = stageRef.current
    if (!driver || !stage) return

    // The driver is taller than the viewport by exactly the scroll the turns
    // need; progress is how far into that overrun the reader has come.
    const { top, height } = driver.getBoundingClientRect()
    const travel = height - window.innerHeight
    const progress = travel > 0 ? Math.min(1, Math.max(0, -top / travel)) : 0
    stage.style.setProperty('--turn', String(progress * leaves))
  }, [leaves])

  useEffect(() => {
    if (!active) return

    const onScroll = () => {
      // Coalesced to one measurement per frame: scroll fires far faster than
      // the compositor paints, and every extra read is a forced layout.
      if (frame.current) return
      frame.current = requestAnimationFrame(() => {
        frame.current = 0
        measure()
      })
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame.current) cancelAnimationFrame(frame.current)
      frame.current = 0
    }
  }, [active, measure])

  /**
   * Turn to the page holding `element`, by scrolling the driver to the offset
   * that produces that leaf's `--turn`. The book has no state of its own to
   * set: scroll position *is* the page it is open at, so moving the scroll is
   * the only way to open a page, and it keeps the back button honest.
   */
  const openPageWith = useCallback(
    (element: Element | null) => {
      const driver = driverRef.current
      const page = element?.closest<HTMLElement>('[data-page-index]')
      if (!driver || !page) return false

      const travel = driver.offsetHeight - window.innerHeight
      if (travel <= 0) return false

      const leaf = Math.floor(Number(page.dataset.pageIndex) / 2)
      const to = driver.offsetTop + (leaf / leaves) * travel
      if (Math.abs(window.scrollY - to) < window.innerHeight * 0.4) return true

      window.scrollTo({ top: to, behavior: 'auto' })
      return true
    },
    [leaves]
  )

  // Every page stays in the document, so a link on a leaf that is currently
  // turned away can still take focus - from a tab sweep, or from find-in-page.
  // When it does, the book turns to the page holding it rather than leaving the
  // reader looking at a spread their focus ring is not on (UI-07).
  useEffect(() => {
    const driver = driverRef.current
    if (!active || !driver) return

    const onFocus = (event: FocusEvent) => {
      if (event.target instanceof Element) openPageWith(event.target)
    }

    // An in-page anchor cannot work by position here: every page sits in the
    // same sticky stage, so all of them share one scroll offset. The section
    // index resolves its target to a page instead, and turns to it.
    const onHash = () => {
      const id = window.location.hash.slice(1)
      if (id) openPageWith(document.getElementById(id))
    }

    driver.addEventListener('focusin', onFocus)
    window.addEventListener('hashchange', onHash)
    onHash()
    return () => {
      driver.removeEventListener('focusin', onFocus)
      window.removeEventListener('hashchange', onHash)
    }
  }, [active, openPageWith])

  return (
    <div
      ref={driverRef}
      className="codex-book"
      data-book={active ? 'on' : 'off'}
      style={active ? { height: `calc(${leaves} * ${SCROLL_PER_LEAF} + 100vh)` } : undefined}
    >
      <div ref={stageRef} className="codex-book-stage" style={{ '--leaves': leaves } as never}>
        {/* The spread is what carries the 1600x1000 aspect the plate is drawn
            in, so the leaves' percentages land on its page rectangles. It also
            owns the perspective: on the stage the vanishing point would sit at
            the middle of the viewport rather than the middle of the book. */}
        <div className="codex-book-spread">
          {active ? <BookPlate /> : null}

          {Array.from({ length: leaves }, (_, leaf) => {
            const front = pages[leaf * 2]
            const back = pages[leaf * 2 + 1]
            return (
              <div key={front.id} className="codex-book-leaf" style={{ '--i': leaf } as never}>
                <div className="codex-book-face codex-book-face-front" data-page-index={leaf * 2}>
                  {front.node}
                </div>
                <div
                  className="codex-book-face codex-book-face-back"
                  data-page-index={leaf * 2 + 1}
                >
                  {back?.node}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
