import { describe, expect, it } from 'vitest'
import {
  CATEGORY_BORDER_CLASS,
  CATEGORY_BY_KEY,
  CATEGORY_TEXT_CLASS,
} from '@/lib/codex/category-index'
import { ERA_BY_NUM, ERA_ORDER } from '@/lib/codex/era-index'
import { NODE_BY_ID } from '@/lib/codex/node-index'
import { PERSON_BY_ID } from '@/lib/codex/person-index'

describe('PERSON_BY_ID', () => {
  it('resolves a known person id to that person', () => {
    const person = PERSON_BY_ID.get('silas')

    expect(person?.name).toBe('Silas')
  })

  it('returns undefined for an id that is not a person', () => {
    expect(PERSON_BY_ID.get('not-a-person')).toBeUndefined()
  })
})

describe('NODE_BY_ID', () => {
  it('resolves a known node id to that node', () => {
    const node = NODE_BY_ID.get('silas')

    expect(node?.title).toBe('Silas & Qetsiyah')
  })

  it('returns undefined for an id that is not a node', () => {
    expect(NODE_BY_ID.get('not-a-node')).toBeUndefined()
  })
})

describe('CATEGORY_BY_KEY', () => {
  it('resolves a strand key to its display name', () => {
    expect(CATEGORY_BY_KEY.get('vamp')?.name).toBe('Vampires')
  })

  it('carries the CSS variable the strand is coloured by', () => {
    expect(CATEGORY_BY_KEY.get('origin')?.cssVar).toBe('--c-origin')
  })
})

describe('strand class maps', () => {
  it('gives every strand a text class', () => {
    expect(Object.keys(CATEGORY_TEXT_CLASS)).toHaveLength(6)
  })

  it('gives every strand a border class', () => {
    expect(Object.keys(CATEGORY_BORDER_CLASS)).toHaveLength(6)
  })
})

describe('ERA_BY_NUM', () => {
  it('resolves an era numeral to its name', () => {
    expect(ERA_BY_NUM.get('I')?.name).toBe('The First Immortals')
  })
})

describe('ERA_ORDER', () => {
  it('places the first era at position zero', () => {
    expect(ERA_ORDER.get('I')).toBe(0)
  })

  it('places the last era at the end of the sequence', () => {
    expect(ERA_ORDER.get('VII')).toBe(6)
  })
})
