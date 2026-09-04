import type { CategoryKey } from '@/types/codex/category'

/**
 * Tailwind classes per strand, for the three jobs colour does on a chart.
 *
 * Written out as complete strings on purpose. Tailwind only emits classes it
 * can see literally at build time, and the previous approach - interpolating a
 * CSS variable name carried in the data - pointed at `--c-origin`, which the
 * stylesheet never defined. A dangling custom property paints nothing and
 * reports nothing, so the family trees were uncoloured without anyone noticing.
 * A missing key here is a type error instead.
 *
 * These are marks, never text: at the 3:1 non-text bar the six values pass,
 * where as text they failed 4.5:1 in five places.
 */
export const STRAND_STROKE: Record<CategoryKey, string> = {
  origin: 'stroke-origin',
  vamp: 'stroke-vamp',
  wolf: 'stroke-wolf',
  witch: 'stroke-witch',
  death: 'stroke-death',
  house: 'stroke-house',
}

export const STRAND_FILL: Record<CategoryKey, string> = {
  origin: 'fill-origin',
  vamp: 'fill-vamp',
  wolf: 'fill-wolf',
  witch: 'fill-witch',
  death: 'fill-death',
  house: 'fill-house',
}

export const STRAND_DOT: Record<CategoryKey, string> = {
  origin: 'bg-origin',
  vamp: 'bg-vamp',
  wolf: 'bg-wolf',
  witch: 'bg-witch',
  death: 'bg-death',
  house: 'bg-house',
}
