'use client'

import { type ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { StrandDot } from '@/components/codex/strand-dot'
import type { Category, CategoryKey } from '@/types/codex/category'

interface MapViewportProps {
  categories: Category[]
  /** Server-rendered SVG. Kept as children so no node data reaches the client. */
  children: ReactNode
  canvasWidth: number
  canvasHeight: number
}

const ZOOM_STEP = 0.2
const MIN_ZOOM = 0.5

/**
 * 100% is now the width of the device rather than a fixed multiple of the
 * canvas, so a phone starts at roughly a third of the authored size and needs
 * a much longer way up before the labels are readable. 400% covers a 360 px
 * viewport; the old 160% ceiling did not.
 */
const MAX_ZOOM = 4

/**
 * Pan, zoom, strand filtering and relationship highlighting for the causal map.
 *
 * The scroll container is a real scrolling region, so panning works with the
 * scrollbars, the keyboard and touch without any of this code. Drag-to-pan is a
 * convenience layered on top, which is what satisfies SC 2.5.7 (UI-08).
 *
 * Highlighting reads `data-from` / `data-to` off the already-rendered edges, so
 * pointing at a node lights its causal links and dims the rest without any node
 * data crossing to the browser. Without it, eighty nodes' worth of edges all
 * draw at one weight and the connections are unreadable.
 */
export function MapViewport({ categories, children, canvasWidth, canvasHeight }: MapViewportProps) {
  const [zoom, setZoom] = useState(1)
  const [fit, setFit] = useState(1)
  const [strand, setStrand] = useState<CategoryKey | 'all'>('all')
  const scrollRef = useRef<HTMLDivElement>(null)
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null)

  // The canvas is authored at a fixed width, so 100% means exactly the width
  // the device actually gives it - no floor, no ceiling and no hidden
  // multiplier. Anything else and the chart either overflows the window at
  // 100% or stops short of it; both were true before, at different widths.
  useEffect(() => {
    const root = scrollRef.current
    if (!root) return

    const observer = new ResizeObserver(([entry]) => {
      const available = entry.contentRect.width
      if (!available) return
      setFit(available / canvasWidth)
    })
    observer.observe(root)
    return () => observer.disconnect()
  }, [canvasWidth])

  const scale = fit * zoom

  // Zoom keeps whatever the reader had in the middle of the frame in the middle
  // of the frame, in both directions and on a window resize too. Scaling about
  // the canvas origin instead - the default when only the box grows - walks the
  // chart off to the right a little further on every press.
  const scaled = useRef(scale)
  const resetting = useRef(false)
  useLayoutEffect(() => {
    const el = scrollRef.current
    const ratio = scale / scaled.current
    scaled.current = scale
    if (!el || ratio === 1) return

    if (resetting.current) {
      resetting.current = false
      el.scrollTo({ top: 0, left: 0 })
      return
    }

    el.scrollLeft = (el.scrollLeft + el.clientWidth / 2) * ratio - el.clientWidth / 2
    el.scrollTop = (el.scrollTop + el.clientHeight / 2) * ratio - el.clientHeight / 2
  }, [scale])

  const highlight = useCallback((id: string | null) => {
    const root = scrollRef.current
    if (!root) return

    const edges = root.querySelectorAll<SVGPathElement>('[data-edge]')
    const nodes = root.querySelectorAll<SVGAElement>('[data-node]')

    if (!id) {
      delete root.dataset.trace
      for (const edge of edges) edge.classList.remove('is-related', 'is-faded')
      for (const node of nodes) node.classList.remove('is-related', 'is-faded')
      return
    }

    // The chain is drawn in the hovered node's own strand, not one shared
    // accent, so tracing a strand looks like that strand.
    const origin = root.querySelector<SVGAElement>(`[data-node="${id}"]`)
    const strand = origin?.dataset.strand
    if (strand) root.dataset.trace = strand

    const related = new Set<string>([id])
    for (const edge of edges) {
      const { from, to } = edge.dataset
      const touches = from === id || to === id
      edge.classList.toggle('is-related', touches)
      edge.classList.toggle('is-faded', !touches)
      if (touches) {
        if (from) related.add(from)
        if (to) related.add(to)
      }
    }
    for (const node of nodes) {
      const touches = related.has(node.dataset.node ?? '')
      node.classList.toggle('is-related', touches)
      node.classList.toggle('is-faded', !touches)
    }
  }, [])

  // Delegated rather than declared as JSX handlers: the scroll container is a
  // plain region, not a control, so hanging hover and focus handlers on it is
  // the static-element-interaction failure. Listening from an effect is the
  // imperative DOM work useEffect exists for.
  useEffect(() => {
    const root = scrollRef.current
    if (!root) return

    const idFrom = (target: EventTarget | null): string | null => {
      if (!(target instanceof Element)) return null
      return target.closest<HTMLElement>('[data-node]')?.dataset.node ?? null
    }

    const onEnter = (event: Event) => highlight(idFrom(event.target))
    const onLeave = () => highlight(null)

    // Panning is the secondary button, so the menu would otherwise open on the
    // button-up that ends every pan. Listened for here rather than declared as
    // a JSX handler for the same reason the two above are: an onContextMenu on
    // a plain scrolling region is the static-element-interaction failure. The
    // cost is the browser menu inside the map only - every node is a real link
    // with its own page, reachable from search and from the people directory.
    const onMenu = (event: Event) => event.preventDefault()

    root.addEventListener('pointerover', onEnter)
    root.addEventListener('pointerleave', onLeave)
    root.addEventListener('focusin', onEnter)
    root.addEventListener('focusout', onLeave)
    root.addEventListener('contextmenu', onMenu)
    return () => {
      root.removeEventListener('pointerover', onEnter)
      root.removeEventListener('pointerleave', onLeave)
      root.removeEventListener('focusin', onEnter)
      root.removeEventListener('focusout', onLeave)
      root.removeEventListener('contextmenu', onMenu)
    }
  }, [highlight])

  return (
    <div>
      <div className="border-subtle mb-4 flex flex-wrap items-center gap-x-6 gap-y-3 border-b pb-4">
        <fieldset className="flex flex-wrap items-center gap-2">
          <legend className="text-faint mb-1 font-mono text-eyebrow uppercase">Strand</legend>
          <button
            type="button"
            onClick={() => setStrand('all')}
            aria-pressed={strand === 'all'}
            className={[
              'duration-fast ease-standard min-h-11 rounded-control border px-3 font-mono text-meta transition-colors',
              strand === 'all'
                ? 'border-strong text-primary bg-raised'
                : 'border-default text-muted hover:text-primary',
            ].join(' ')}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setStrand(strand === category.key ? 'all' : category.key)}
              aria-pressed={strand === category.key}
              className={[
                'duration-fast ease-standard text-muted hover:text-primary min-h-11 rounded-control border px-3 font-mono text-meta transition-colors',
                strand === category.key ? 'border-strong text-primary bg-raised' : 'border-default',
              ].join(' ')}
            >
              <StrandDot strand={category.key} className="mr-2" />
              {category.name}
            </button>
          ))}
        </fieldset>

        <div className="flex items-center gap-2">
          <span className="text-faint font-mono text-eyebrow uppercase">Zoom</span>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(MIN_ZOOM, Number((z - ZOOM_STEP).toFixed(2))))}
            disabled={zoom <= MIN_ZOOM}
            className="border-default text-primary hover:border-strong duration-fast ease-standard min-h-11 min-w-11 rounded-control border font-mono text-meta transition-colors disabled:opacity-40"
          >
            <span aria-hidden="true">&minus;</span>
            <span className="sr-only">Zoom out</span>
          </button>
          <span className="text-muted w-12 text-center font-mono text-meta" aria-live="polite">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(MAX_ZOOM, Number((z + ZOOM_STEP).toFixed(2))))}
            disabled={zoom >= MAX_ZOOM}
            className="border-default text-primary hover:border-strong duration-fast ease-standard min-h-11 min-w-11 rounded-control border font-mono text-meta transition-colors disabled:opacity-40"
          >
            <span aria-hidden="true">+</span>
            <span className="sr-only">Zoom in</span>
          </button>
          <button
            type="button"
            onClick={() => {
              // At 100% the canvas is exactly the frame's width, so a reset has
              // nowhere to go horizontally; the scroll is handed to the effect
              // below so it lands after the new scale, not before it.
              if (zoom === 1) {
                scrollRef.current?.scrollTo({ top: 0, left: 0 })
                return
              }
              resetting.current = true
              setZoom(1)
            }}
            className="border-default text-muted hover:text-primary duration-fast ease-standard min-h-11 rounded-control border px-3 font-mono text-meta transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* A legend, because the difference between a box and a line carrying an
          arrow is only obvious once someone says which is which. */}
      <p className="text-faint mb-3 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-meta">
        <span>
          <span aria-hidden="true">▭</span> event
        </span>
        <span>
          <span aria-hidden="true">→</span> caused
        </span>
        <span>Point at an event to trace what it caused.</span>
        <span>Scroll, or hold the right mouse button to drag.</span>
      </p>

      <div
        ref={scrollRef}
        data-strand-filter={strand}
        // Pan is the secondary button only. On the primary one the chart is an
        // ordinary document again - text selects, and a node link follows on
        // click instead of being swallowed by a drag that started on it.
        onPointerDown={(event) => {
          const el = scrollRef.current
          if (!el || event.button !== 2) return
          el.setPointerCapture(event.pointerId)
          drag.current = {
            x: event.clientX,
            y: event.clientY,
            left: el.scrollLeft,
            top: el.scrollTop,
          }
        }}
        onPointerMove={(event) => {
          const el = scrollRef.current
          if (!el || !drag.current) return
          el.scrollLeft = drag.current.left - (event.clientX - drag.current.x)
          el.scrollTop = drag.current.top - (event.clientY - drag.current.y)
        }}
        onPointerUp={(event) => {
          scrollRef.current?.releasePointerCapture(event.pointerId)
          drag.current = null
        }}
        onPointerCancel={(event) => {
          scrollRef.current?.releasePointerCapture(event.pointerId)
          drag.current = null
        }}
        // Full bleed by cancelling the shell's padding rather than by 100vw:
        // 100vw counts the vertical scrollbar, which left the document 8px
        // wider than its own viewport at 768 and 1280 (UI-16 wants none).
        className="bg-sunk border-subtle no-scrollbar -mx-4 h-[82dvh] min-h-[32rem] overflow-auto border-y md:-mx-6 xl:-mx-10"
      >
        {/* Centred rather than left-aligned, so a canvas smaller than the frame
            sits in the middle of it instead of against one edge. */}
        <div
          className="mx-auto"
          style={{ width: canvasWidth * scale, height: canvasHeight * scale }}
        >
          <div
            style={{
              width: canvasWidth,
              height: canvasHeight,
              transform: `scale(${scale})`,
              transformOrigin: '0 0',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
