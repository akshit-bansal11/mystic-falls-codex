'use client'

import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
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
const MIN_ZOOM = 0.4
const MAX_ZOOM = 1.6

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
  const [strand, setStrand] = useState<CategoryKey | 'all'>('all')
  const scrollRef = useRef<HTMLDivElement>(null)
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null)

  const highlight = useCallback((id: string | null) => {
    const root = scrollRef.current
    if (!root) return

    const edges = root.querySelectorAll<SVGPathElement>('[data-edge]')
    const nodes = root.querySelectorAll<SVGAElement>('[data-node]')

    if (!id) {
      for (const edge of edges) edge.classList.remove('is-related', 'is-faded')
      for (const node of nodes) node.classList.remove('is-related', 'is-faded')
      return
    }

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

    root.addEventListener('pointerover', onEnter)
    root.addEventListener('pointerleave', onLeave)
    root.addEventListener('focusin', onEnter)
    root.addEventListener('focusout', onLeave)
    return () => {
      root.removeEventListener('pointerover', onEnter)
      root.removeEventListener('pointerleave', onLeave)
      root.removeEventListener('focusin', onEnter)
      root.removeEventListener('focusout', onLeave)
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
              setZoom(1)
              scrollRef.current?.scrollTo({ top: 0, left: 0 })
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
        <span>Scroll or drag to move.</span>
      </p>

      <div
        ref={scrollRef}
        data-strand-filter={strand}
        onPointerDown={(event) => {
          const el = scrollRef.current
          if (!el || event.button !== 0) return
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
        onPointerUp={() => {
          drag.current = null
        }}
        onPointerCancel={() => {
          drag.current = null
        }}
        className="bg-sunk rounded-surface border-subtle max-h-[80vh] overflow-auto border"
      >
        <div style={{ width: canvasWidth * zoom, height: canvasHeight * zoom }}>
          <div
            style={{
              width: canvasWidth,
              height: canvasHeight,
              transform: `scale(${zoom})`,
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
