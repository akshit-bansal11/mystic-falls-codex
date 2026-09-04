import type { CategoryKey } from '@/types/codex/category'

/**
 * Tailwind class per strand, written out rather than interpolated because
 * Tailwind only emits classes it can see as complete strings at build time.
 */
const DOT_CLASS: Record<CategoryKey, string> = {
  origin: 'bg-origin',
  vamp: 'bg-vamp',
  wolf: 'bg-wolf',
  witch: 'bg-witch',
  death: 'bg-death',
  house: 'bg-house',
}

interface StrandDotProps {
  strand: CategoryKey
  className?: string
}

/**
 * Carries a strand's identity as a filled dot rather than as coloured text.
 *
 * These six values were chosen against the 3:1 non-text bar. Used as text they
 * were measured failing 4.5:1 in five places - origin at 4.05:1 on surface and
 * 3.28:1 on raised, vamp at 4.03:1 in dark - so the colour moved to a mark and
 * the label beside it stays in the neutral text role.
 *
 * Decorative: the label it sits beside always names the strand in words, so
 * hue is never the only carrier (DES-11).
 */
export function StrandDot({ strand, className }: StrandDotProps) {
  return (
    <span
      aria-hidden="true"
      className={[
        'inline-block size-2 shrink-0 rounded-full align-middle',
        DOT_CLASS[strand],
        className ?? '',
      ].join(' ')}
    />
  )
}
