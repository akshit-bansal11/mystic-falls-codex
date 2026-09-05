'use client'

import { type ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { BookPlate } from '@/components/codex/book-plate'

export interface BookChapter {
  id: string
  /** Shown above the chapter title on its opening page: "Era III". */
  kicker: string
  title: string
  /** The chapter's dates and places, under the title. */
  subtitle: string
  /**
   * The chapter's prose, one entry per paragraph, subheading or pull quote,
   * server-rendered. Passed as a prop rather than imported so no content module
   * is pulled into the client bundle - the rule the map viewport follows.
   *
   * Each block carries its own id because the probe has to render the same
   * block a second time, in a wrapper of its own, and that wrapper needs an
   * identity that is not the array position.
   */
  blocks: { id: string; node: ReactNode }[]
}

interface CodexBookProps {
  /** Running head for the verso, as a book puts its own title there. */
  title: string
  chapters: BookChapter[]
}

/** One printed page: a slice of one chapter's blocks. */
interface Page {
  chapter: number
  from: number
  to: number
  /** True for the page a chapter opens on, which carries the chapter head. */
  opener: boolean
}

/** How far the reader scrolls to turn one leaf. */
const SCROLL_PER_LEAF = '68vh'

/**
 * The chronicle as a book whose leaves turn with the scroll.
 *
 * Three decisions shape this component.
 *
 * The text is HTML rather than SVG. SVG has no line wrapping, so every break
 * across the pages would have to be computed without font metrics, and the page
 * would lose selection, find-in-page and a sane reading order. `BookPlate`
 * draws the book; this sets real prose on it.
 *
 * The flip is CSS. The scroll handler writes exactly one custom property -
 * `--turn`, the leaf index as a float - and each leaf derives its own angle from
 * it. Writing a transform per leaf per frame would be dozens of style writes a
 * frame for the same picture.
 *
 * Pagination is measured in the browser, because it cannot be done anywhere
 * else. How much prose fits on a page depends on the font's metrics at the
 * width the device actually gave the book, and the server has neither. So every
 * block is laid out once in a hidden probe built from the real page markup, its
 * height is read, and the chapters are packed into pages that fill. A chapter
 * runs across as many pages as it needs, which is what makes it a chapter
 * rather than a slide.
 *
 * Below the `lg` breakpoint and under `prefers-reduced-motion: reduce` the book
 * does not engage: `data-book` stays `off` and the chapters lay out as ordinary
 * flowing sections. That is also what the server renders and what a reader with
 * no JavaScript keeps, so the prose is in the document either way - which is
 * what holds find-in-page, the screen-reader order and indexation together.
 */
export function CodexBook({ title, chapters }: CodexBookProps) {
  const [active, setActive] = useState(false)
  const [pages, setPages] = useState<Page[] | null>(null)
  const driverRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const probeRef = useRef<HTMLDivElement>(null)
  const frame = useRef(0)

  // A book that turns a leaf per scroll is a poor way to read on a phone, and
  // an animation nobody asked for under reduced motion. Both fall back to the
  // flowing layout rather than to a degraded book.
  useEffect(() => {
    const query = window.matchMedia(
      '(min-width: 64rem) and (prefers-reduced-motion: no-preference)'
    )
    const sync = () => setActive(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  /**
   * Read the probe and pack the chapters into pages.
   *
   * Book paragraphs carry no vertical margin - they are separated by a first-
   * line indent instead - so a page's used height is the plain sum of its
   * blocks' heights, with no margin collapsing to account for.
   */
  useLayoutEffect(() => {
    if (!active || pages) return
    const probe = probeRef.current
    if (!probe) return

    const prose = probe.querySelector<HTMLElement>('[data-probe-prose]')
    if (!prose) return

    const available = prose.clientHeight
    if (available < 40) return

    const next: Page[] = []

    chapters.forEach((_chapter, chapterIndex) => {
      const head = probe.querySelector<HTMLElement>(`[data-probe-head="${chapterIndex}"]`)
      const blocks = [
        ...probe.querySelectorAll<HTMLElement>(`[data-probe-block^="${chapterIndex}:"]`),
      ]

      const heights = blocks.map((block) => block.offsetHeight)
      const isSubhead = blocks.map((block) => Boolean(block.querySelector('.codex-subhead')))

      // The chapter head sits on the opening page and takes room from it.
      const headHeight = head?.offsetHeight ?? 0

      let from = 0
      let opener = true
      let used = 0

      for (let index = 0; index < blocks.length; index += 1) {
        const height = heights[index]
        const room = available - (opener ? headHeight : 0)

        // An opening page is never empty even before its first paragraph - the
        // chapter head is already on it - so a first paragraph that will not fit
        // under the head moves to the next page too, leaving the head on a page
        // of its own, which is set as a chapter title page.
        const occupied = index > from || opener

        // A block taller than a whole page cannot be helped by breaking, so it
        // stays and clips rather than looping forever. Nothing in this content
        // is that tall; the guard is for something that one day is.
        if (used + height > room && occupied && height <= available) {
          let cut = index

          // A subheading is never the last thing on a page. Left there it is a
          // widow - a heading on one page and the text it introduces on the
          // next - so it travels forward with its own text.
          if (cut > from + 1 && isSubhead[cut - 1]) cut -= 1

          next.push({ chapter: chapterIndex, from, to: cut, opener })
          from = cut
          opener = false

          used = 0
          for (let moved = cut; moved <= index; moved += 1) used += heights[moved]
        } else {
          used += height
        }
      }

      next.push({ chapter: chapterIndex, from, to: blocks.length, opener })
    })

    setPages(next)
  }, [active, pages, chapters])

  const leaves = pages ? Math.ceil(pages.length / 2) : 0

  const measure = useCallback(() => {
    const driver = driverRef.current
    const stage = stageRef.current
    if (!driver || !stage || !leaves) return

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

    // A resize changes how much prose fits on a page, so the pagination is
    // thrown away and measured again rather than rescaled.
    const onResize = () => {
      setPages(null)
      onScroll()
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
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
      if (!driver || !page || !leaves) return

      const travel = driver.offsetHeight - window.innerHeight
      if (travel <= 0) return

      const leaf = Math.floor(Number(page.dataset.pageIndex) / 2)
      const to = driver.offsetTop + (leaf / leaves) * travel
      if (Math.abs(window.scrollY - to) < window.innerHeight * 0.4) return

      window.scrollTo({ top: to, behavior: 'auto' })
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

  // ---- the flowing fallback -------------------------------------------------
  // Also what the server renders, and what a reader without JavaScript keeps.
  if (!active) {
    return (
      <div ref={driverRef} className="codex-book" data-book="off">
        {chapters.map((chapter) => (
          <section key={chapter.id} id={chapter.id} className="codex-page scroll-mt-8">
            <header className="codex-chapter">
              <p className="codex-chapter-kicker">{chapter.kicker}</p>
              <h3 className="codex-chapter-title">{chapter.title}</h3>
              <p className="codex-chapter-subtitle">{chapter.subtitle}</p>
            </header>
            <div className="codex-page-prose codex-columns">
              {chapter.blocks.map((block) => block.node)}
            </div>
          </section>
        ))}
      </div>
    )
  }

  return (
    <div
      ref={driverRef}
      className="codex-book"
      data-book="on"
      style={leaves ? { height: `calc(${leaves} * ${SCROLL_PER_LEAF} + 100vh)` } : undefined}
    >
      <div ref={stageRef} className="codex-book-stage" style={{ '--leaves': leaves } as never}>
        {/* The spread carries the 1600x1000 aspect the plate is drawn in, so the
            leaves' percentages land on its page rectangles. It also owns the
            perspective: on the stage the vanishing point would sit at the middle
            of the viewport rather than the middle of the book. */}
        <div className="codex-book-spread">
          <BookPlate />

          {/* The probe: one page's geometry with every block laid out inside it
              for real - same width, same font, same padding - because that is
              the only way to know what fits. `visibility: hidden` still takes
              layout, and it unmounts as soon as it has been read. */}
          {pages ? null : (
            <div ref={probeRef} className="codex-book-leaf codex-book-probe" aria-hidden="true">
              <div className="codex-book-face">
                <div className="codex-page">
                  <p className="codex-page-head">{title}</p>
                  <div className="codex-page-prose" data-probe-prose="">
                    {chapters.map((chapter, chapterIndex) => (
                      <div key={chapter.id}>
                        <header className="codex-chapter" data-probe-head={chapterIndex}>
                          <p className="codex-chapter-kicker">{chapter.kicker}</p>
                          <h3 className="codex-chapter-title">{chapter.title}</h3>
                          <p className="codex-chapter-subtitle">{chapter.subtitle}</p>
                        </header>
                        {chapter.blocks.map((block, blockIndex) => (
                          <div key={block.id} data-probe-block={`${chapterIndex}:${blockIndex}`}>
                            {block.node}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <span className="codex-page-folio">0</span>
                </div>
              </div>
            </div>
          )}

          {pages
            ? Array.from({ length: leaves }, (_, leaf) => {
                const front = pages[leaf * 2]
                const back = pages[leaf * 2 + 1]

                return (
                  <div
                    key={`${chapters[front.chapter].id}-${front.from}`}
                    className="codex-book-leaf"
                    style={{ '--i': leaf } as never}
                  >
                    {[front, back].map((page, side) => {
                      const index = leaf * 2 + side
                      const chapter = page ? chapters[page.chapter] : null

                      return (
                        <div
                          key={side === 0 ? 'front' : 'back'}
                          className={`codex-book-face ${
                            side === 0 ? 'codex-book-face-front' : 'codex-book-face-back'
                          }`}
                          data-page-index={index}
                        >
                          {page && chapter ? (
                            <article
                              className="codex-page"
                              id={page.opener ? chapter.id : undefined}
                              data-opener={page.opener ? '' : undefined}
                              // A page carrying the chapter head and no prose
                              // is a title page, and is set as one rather than
                              // as a page that happens to be empty.
                              data-title-page={page.from === page.to ? '' : undefined}
                            >
                              {/* A book carries its own title on the verso and
                                  the chapter's on the recto. */}
                              <p className="codex-page-head">
                                {side === 1 ? title : chapter.title}
                              </p>
                              {page.opener ? (
                                <header className="codex-chapter">
                                  <p className="codex-chapter-kicker">{chapter.kicker}</p>
                                  <h3 className="codex-chapter-title">{chapter.title}</h3>
                                  <p className="codex-chapter-subtitle">{chapter.subtitle}</p>
                                </header>
                              ) : null}
                              <div className="codex-page-prose">
                                {chapter.blocks
                                  .slice(page.from, page.to)
                                  .map((block) => block.node)}
                              </div>
                              <span className="codex-page-folio">{index + 1}</span>
                            </article>
                          ) : null}
                        </div>
                      )
                    })}
                  </div>
                )
              })
            : null}
        </div>
      </div>
    </div>
  )
}
