import { PEOPLE } from '@/data/people'
import type { Person } from '@/types/codex/person'

export const PERSON_BY_ID: ReadonlyMap<string, Person> = new Map(
  PEOPLE.map((person) => [person.id, person])
)
