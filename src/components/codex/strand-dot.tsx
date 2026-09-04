import { STRAND_DOT } from '@/lib/codex/strand-classes'
import type { CategoryKey } from '@/types/codex/category'

interface StrandDotProps {
  strand: CategoryKey
  className?: string
}

/**
 * Carries a strand's identity as a filled dot beside neutral label text.
 *
 * Decorative: the label it sits beside always names the strand in words, so hue
 * is never the only carrier (DES-11).
 */
export function StrandDot({ strand, className }: StrandDotProps) {
  return (
    <span
      aria-hidden="true"
      className={[
        'inline-block size-2 shrink-0 rounded-full align-middle',
        STRAND_DOT[strand],
        className ?? '',
      ].join(' ')}
    />
  )
}
