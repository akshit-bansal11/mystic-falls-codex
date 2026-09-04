import { CATEGORIES } from '@/data/categories'
import type { Category, CategoryKey } from '@/types/codex/category'

export const CATEGORY_BY_KEY: ReadonlyMap<CategoryKey, Category> = new Map(
  CATEGORIES.map((category) => [category.key, category])
)

/**
 * Tailwind class per strand. Written out rather than interpolated because
 * Tailwind only emits classes it can see as complete strings at build time.
 */
export const CATEGORY_TEXT_CLASS: Record<CategoryKey, string> = {
  origin: 'text-origin',
  vamp: 'text-vamp',
  wolf: 'text-wolf',
  witch: 'text-witch',
  death: 'text-death',
  house: 'text-house',
}

export const CATEGORY_BORDER_CLASS: Record<CategoryKey, string> = {
  origin: 'border-origin',
  vamp: 'border-vamp',
  wolf: 'border-wolf',
  witch: 'border-witch',
  death: 'border-death',
  house: 'border-house',
}
