import { CATEGORIES } from '@/data/categories'
import type { Category, CategoryKey } from '@/types/codex/category'

export const CATEGORY_BY_KEY: ReadonlyMap<CategoryKey, Category> = new Map(
  CATEGORIES.map((category) => [category.key, category])
)
