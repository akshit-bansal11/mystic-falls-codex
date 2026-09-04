'use client'

import { type ReactNode, useRef, useState } from 'react'
import { CATEGORY_TEXT_CLASS } from '@/lib/codex/category-index'
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
 * Pan and zoom for the causal map.
 *
 * The scroll container is a real scrolling region, so panning works with the
 * scrollbars, the keyboard and touch without any of this code. Drag-to-pan is a
 * convenience layered on top, which is what satisfies SC 2.5.7 (UI-08): the
 * original offered dragging as the only way to move the map.
 *
 * Filtering is done with a data attribute read by CSS, so choosing a strand
 * ships no node data to the browser.
 */
export function MapViewport({ categories, children, canvasWidth, canvasHeight }: MapViewportProps) {
  const [zoom, setZoom] = useState(1)
  const [strand, setStrand] = useState<CategoryKey | 'all'>('all')
  const scrollRef = useRef<HTMLDivElement>(null)
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null)

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
                'duration-fast ease-standard min-h-11 rounded-control border px-3 font-mono text-meta transition-colors',
                strand === category.key ? 'border-strong bg-raised' : 'border-default',
                CATEGORY_TEXT_CLASS[category.key],
              ].join(' ')}
            >
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

      <p className="text-faint mb-3 font-mono text-meta">
        Scroll or drag to move. Every node links to what caused it and what it caused.
      </p>

      {/* A real scrolling region: scrollbars, arrow keys and touch all pan it
          without JavaScript. Drag is an extra, not the only way in. */}
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
