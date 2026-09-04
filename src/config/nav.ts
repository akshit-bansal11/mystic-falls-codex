export interface NavItem {
  href: string
  label: string
  /** Shown in the mobile nav, where the full label is too wide. */
  short: string
}

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'The Map', short: 'Map' },
  { href: '/eras', label: 'Eras', short: 'Eras' },
  { href: '/families', label: 'Families', short: 'Families' },
  { href: '/people', label: 'People', short: 'People' },
  { href: '/groups', label: 'Factions', short: 'Factions' },
  { href: '/rules', label: 'Rules', short: 'Rules' },
  { href: '/timeline', label: 'Timeline', short: 'Timeline' },
  { href: '/watch-order', label: 'Watch Order', short: 'Watch' },
]
