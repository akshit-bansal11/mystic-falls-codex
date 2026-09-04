import type { FamilyTree } from '@/types/codex/family'

export const FAMILY_TREES: FamilyTree[] = [
  {
    id: 'f-mik',
    name: 'The Mikaelsons',
    blurb:
      'The first family. A thousand years old — six Original vampires, one witch who cast the spell and never drank it, and a stolen firstborn — and every vampire alive descends from one of the five children who survived.',
    rows: [
      {
        row: 0,
        label: 'Old World',
      },
      {
        row: 1,
        label: 'Children',
      },
      {
        row: 2,
        label: 'Partners',
      },
      {
        row: 3,
        label: 'Next gen',
      },
    ],
    members: [
      {
        person: 'dahlia',
        row: 0,
        col: 0,
      },
      {
        person: 'mikael',
        row: 0,
        col: 1,
      },
      {
        person: 'esther',
        row: 0,
        col: 2,
      },
      {
        person: 'ansel',
        row: 0,
        col: 4,
      },
      {
        person: 'ayana',
        row: 0,
        col: 6,
      },
      {
        person: 'freya',
        row: 1,
        col: 0,
      },
      {
        person: 'finn',
        row: 1,
        col: 1,
      },
      {
        person: 'elijah',
        row: 1,
        col: 2,
      },
      {
        person: 'klaus',
        row: 1,
        col: 3,
      },
      {
        person: 'kol',
        row: 1,
        col: 4,
      },
      {
        person: 'rebekah',
        row: 1,
        col: 5,
      },
      {
        person: 'henrik',
        row: 1,
        col: 6,
      },
      {
        person: 'keelin',
        row: 2,
        col: 0,
      },
      {
        person: 'hayley',
        row: 2,
        col: 3,
      },
      {
        person: 'davina',
        row: 2,
        col: 4,
      },
      {
        person: 'marcel',
        row: 2,
        col: 5,
      },
      {
        person: 'hope',
        row: 3,
        col: 3,
      },
    ],
    links: [
      {
        from: 'esther',
        to: 'dahlia',
        type: 'marry',
      },
      {
        from: 'esther',
        to: 'mikael',
        type: 'marry',
      },
      {
        from: 'esther',
        to: 'ansel',
        type: 'marry',
      },
      {
        from: 'esther',
        to: 'freya',
        type: 'blood',
      },
      {
        from: 'esther',
        to: 'finn',
        type: 'blood',
      },
      {
        from: 'esther',
        to: 'elijah',
        type: 'blood',
      },
      {
        from: 'esther',
        to: 'klaus',
        type: 'blood',
      },
      {
        from: 'esther',
        to: 'kol',
        type: 'blood',
      },
      {
        from: 'esther',
        to: 'rebekah',
        type: 'blood',
      },
      {
        from: 'esther',
        to: 'henrik',
        type: 'blood',
      },
      {
        from: 'ansel',
        to: 'klaus',
        type: 'blood',
      },
      {
        from: 'dahlia',
        to: 'freya',
        type: 'sire',
      },
      {
        from: 'freya',
        to: 'keelin',
        type: 'marry',
      },
      {
        from: 'klaus',
        to: 'hayley',
        type: 'marry',
      },
      {
        from: 'kol',
        to: 'davina',
        type: 'marry',
      },
      {
        from: 'rebekah',
        to: 'marcel',
        type: 'marry',
      },
      {
        from: 'klaus',
        to: 'marcel',
        type: 'sire',
      },
      {
        from: 'klaus',
        to: 'hope',
        type: 'blood',
      },
      {
        from: 'hayley',
        to: 'hope',
        type: 'blood',
      },
    ],
  },
  {
    id: 'f-dopp',
    name: 'The Doppelgängers',
    blurb:
      'Two people cheated death two thousand years ago, so nature keeps printing their faces. Dashed lines here mean “is a shadow of”, not descent — doppelgängers are not related by blood at all.',
    rows: [
      {
        row: 0,
        label: 'Immortals',
      },
      {
        row: 1,
        label: 'c. 1000 AD',
      },
      {
        row: 2,
        label: '1490 / 1864',
      },
      {
        row: 3,
        label: 'Modern',
      },
    ],
    members: [
      {
        person: 'silas',
        row: 0,
        col: 0,
      },
      {
        person: 'amara',
        row: 0,
        col: 3,
      },
      {
        person: 'tomavery',
        row: 1,
        col: 0,
      },
      {
        person: 'tatia',
        row: 1,
        col: 3,
      },
      {
        person: 'stefan',
        row: 2,
        col: 0,
      },
      {
        person: 'katherine',
        row: 2,
        col: 3,
      },
      {
        person: 'elena',
        row: 3,
        col: 3,
      },
      {
        person: 'nadia',
        row: 3,
        col: 4,
      },
    ],
    links: [
      {
        from: 'silas',
        to: 'tomavery',
        type: 'sire',
      },
      {
        from: 'tomavery',
        to: 'stefan',
        type: 'sire',
      },
      {
        from: 'amara',
        to: 'tatia',
        type: 'sire',
      },
      {
        from: 'tatia',
        to: 'katherine',
        type: 'sire',
      },
      {
        from: 'katherine',
        to: 'elena',
        type: 'sire',
      },
      {
        from: 'katherine',
        to: 'nadia',
        type: 'blood',
      },
    ],
  },
  {
    id: 'f-gil',
    name: 'Gilbert & Sommers',
    blurb:
      'Elena was raised by her uncle and did not know it. The Gilberts are a Founders’ family, which means the house has a basement nobody talks about.',
    rows: [
      {
        row: 0,
        label: 'Adults',
      },
      {
        row: 1,
        label: 'Children',
      },
    ],
    members: [
      {
        person: 'grayson',
        row: 0,
        col: 0,
      },
      {
        person: 'miranda',
        row: 0,
        col: 1,
      },
      {
        person: 'jenna',
        row: 0,
        col: 2,
      },
      {
        person: 'johngilbert',
        row: 0,
        col: 3,
      },
      {
        person: 'isobel',
        row: 0,
        col: 4,
      },
      {
        person: 'jeremy',
        row: 1,
        col: 0,
      },
      {
        person: 'elena',
        row: 1,
        col: 3,
      },
      {
        person: 'alaric',
        row: 1,
        col: 1,
      },
    ],
    links: [
      {
        from: 'grayson',
        to: 'miranda',
        type: 'marry',
      },
      {
        from: 'miranda',
        to: 'jenna',
        type: 'blood',
      },
      {
        from: 'grayson',
        to: 'johngilbert',
        type: 'blood',
      },
      {
        from: 'johngilbert',
        to: 'isobel',
        type: 'marry',
      },
      {
        from: 'grayson',
        to: 'jeremy',
        type: 'blood',
      },
      {
        from: 'miranda',
        to: 'jeremy',
        type: 'blood',
      },
      {
        from: 'johngilbert',
        to: 'elena',
        type: 'blood',
      },
      {
        from: 'isobel',
        to: 'elena',
        type: 'blood',
      },
      {
        from: 'jenna',
        to: 'alaric',
        type: 'marry',
      },
      {
        from: 'isobel',
        to: 'alaric',
        type: 'marry',
      },
    ],
  },
  {
    id: 'f-sal',
    name: 'The Salvatores',
    blurb:
      'Two brothers, one houseguest, and 145 years of arguing about it. Dashed lines are sirelines — who turned whom.',
    rows: [
      {
        row: 0,
        label: '1864',
      },
      {
        row: 1,
        label: 'Brothers',
      },
      {
        row: 2,
        label: 'Married',
      },
      {
        row: 3,
        label: 'The line',
      },
    ],
    members: [
      {
        person: 'giuseppe',
        row: 0,
        col: 0,
      },
      {
        person: 'lily',
        row: 0,
        col: 1,
      },
      {
        person: 'katherine',
        row: 0,
        col: 3,
      },
      {
        person: 'damon',
        row: 1,
        col: 0,
      },
      {
        person: 'stefan',
        row: 1,
        col: 1,
      },
      {
        person: 'zach',
        row: 1,
        col: 2,
      },
      {
        person: 'valerie',
        row: 1,
        col: 3,
      },
      {
        person: 'elena',
        row: 2,
        col: 0,
      },
      {
        person: 'caroline',
        row: 2,
        col: 1,
      },
      {
        person: 'julian',
        row: 2,
        col: 3,
      },
      {
        person: 'vicki',
        row: 3,
        col: 0,
      },
      {
        person: 'lexi',
        row: 3,
        col: 1,
      },
    ],
    links: [
      {
        from: 'giuseppe',
        to: 'lily',
        type: 'marry',
      },
      {
        from: 'giuseppe',
        to: 'damon',
        type: 'blood',
      },
      {
        from: 'giuseppe',
        to: 'stefan',
        type: 'blood',
      },
      {
        from: 'lily',
        to: 'damon',
        type: 'blood',
      },
      {
        from: 'lily',
        to: 'stefan',
        type: 'blood',
      },
      {
        from: 'lily',
        to: 'valerie',
        type: 'sire',
      },
      {
        from: 'katherine',
        to: 'damon',
        type: 'sire',
      },
      {
        from: 'katherine',
        to: 'stefan',
        type: 'sire',
      },
      {
        from: 'damon',
        to: 'caroline',
        type: 'sire',
      },
      {
        from: 'damon',
        to: 'elena',
        type: 'marry',
      },
      {
        from: 'stefan',
        to: 'caroline',
        type: 'marry',
      },
      {
        from: 'damon',
        to: 'vicki',
        type: 'sire',
      },
      {
        from: 'giuseppe',
        to: 'zach',
        type: 'blood',
      },
      {
        from: 'lily',
        to: 'julian',
        type: 'marry',
      },
    ],
  },
  {
    id: 'f-ben',
    name: 'The Bennett Witches',
    blurb:
      'Descended from Ayana, and further back from Qetsiyah herself. Every spell that holds this world together is either cast by a Bennett or paid for with one.',
    rows: [
      {
        row: 0,
        label: 'Source',
      },
      {
        row: 1,
        label: '1864',
      },
      {
        row: 2,
        label: 'Grandparent',
      },
      {
        row: 3,
        label: 'Parents',
      },
      {
        row: 4,
        label: 'The last',
      },
    ],
    members: [
      {
        person: 'qetsiyah',
        row: 0,
        col: 0,
      },
      {
        person: 'ayana',
        row: 0,
        col: 2,
      },
      {
        person: 'emily',
        row: 1,
        col: 1,
      },
      {
        person: 'sheila',
        row: 2,
        col: 0,
      },
      {
        person: 'rudy',
        row: 3,
        col: 0,
      },
      {
        person: 'abby',
        row: 3,
        col: 1,
      },
      {
        person: 'bonnie',
        row: 4,
        col: 1,
      },
      {
        person: 'lucy',
        row: 4,
        col: 3,
      },
    ],
    links: [
      {
        from: 'qetsiyah',
        to: 'ayana',
        type: 'sire',
      },
      {
        from: 'ayana',
        to: 'emily',
        type: 'sire',
      },
      {
        from: 'emily',
        to: 'sheila',
        type: 'sire',
      },
      {
        from: 'sheila',
        to: 'abby',
        type: 'blood',
      },
      {
        from: 'rudy',
        to: 'abby',
        type: 'marry',
      },
      {
        from: 'rudy',
        to: 'bonnie',
        type: 'blood',
      },
      {
        from: 'abby',
        to: 'bonnie',
        type: 'blood',
      },
      {
        from: 'sheila',
        to: 'lucy',
        type: 'sire',
      },
    ],
  },
  {
    id: 'f-forbes',
    name: 'Forbes & Saltzman',
    blurb:
      'The line that ends up running a school. Dashed here means “carried” — Caroline Forbes gave birth to another woman’s twins through a Gemini spell.',
    rows: [
      {
        row: 0,
        label: 'The parents',
      },
      {
        row: 1,
        label: 'Middle',
      },
      {
        row: 2,
        label: 'Twins',
      },
    ],
    members: [
      {
        person: 'liz',
        row: 0,
        col: 0,
      },
      {
        person: 'jo',
        row: 0,
        col: 2,
      },
      {
        person: 'alaric',
        row: 0,
        col: 3,
      },
      {
        person: 'stefan',
        row: 1,
        col: 0,
      },
      {
        person: 'caroline',
        row: 1,
        col: 1,
      },
      {
        person: 'meredith',
        row: 1,
        col: 3,
      },
      {
        person: 'josie',
        row: 2,
        col: 2,
      },
      {
        person: 'lizzie',
        row: 2,
        col: 3,
      },
    ],
    links: [
      {
        from: 'liz',
        to: 'caroline',
        type: 'blood',
      },
      {
        from: 'jo',
        to: 'alaric',
        type: 'marry',
      },
      {
        from: 'jo',
        to: 'josie',
        type: 'blood',
      },
      {
        from: 'jo',
        to: 'lizzie',
        type: 'blood',
      },
      {
        from: 'alaric',
        to: 'josie',
        type: 'blood',
      },
      {
        from: 'alaric',
        to: 'lizzie',
        type: 'blood',
      },
      {
        from: 'caroline',
        to: 'josie',
        type: 'sire',
      },
      {
        from: 'caroline',
        to: 'lizzie',
        type: 'sire',
      },
      {
        from: 'caroline',
        to: 'stefan',
        type: 'marry',
      },
    ],
  },
  {
    id: 'f-gem',
    name: 'The Gemini Coven',
    blurb:
      'Twins in every generation, a merge at a set age, one survivor. Kai killed the coven in 2015 and the tradition outlived every witch who believed in it.',
    rows: [
      {
        row: 0,
        label: 'Leader',
      },
      {
        row: 1,
        label: 'Children',
      },
      {
        row: 2,
        label: 'Last twins',
      },
    ],
    members: [
      {
        person: 'joshuaparker',
        row: 0,
        col: 1,
      },
      {
        person: 'kai',
        row: 1,
        col: 0,
      },
      {
        person: 'jo',
        row: 1,
        col: 1,
      },
      {
        person: 'luke',
        row: 1,
        col: 2,
      },
      {
        person: 'liv',
        row: 1,
        col: 3,
      },
      {
        person: 'josie',
        row: 2,
        col: 1,
      },
      {
        person: 'lizzie',
        row: 2,
        col: 2,
      },
    ],
    links: [
      {
        from: 'joshuaparker',
        to: 'kai',
        type: 'blood',
      },
      {
        from: 'joshuaparker',
        to: 'jo',
        type: 'blood',
      },
      {
        from: 'joshuaparker',
        to: 'luke',
        type: 'blood',
      },
      {
        from: 'joshuaparker',
        to: 'liv',
        type: 'blood',
      },
      {
        from: 'jo',
        to: 'josie',
        type: 'blood',
      },
      {
        from: 'jo',
        to: 'lizzie',
        type: 'blood',
      },
      {
        from: 'kai',
        to: 'luke',
        type: 'sire',
      },
    ],
  },
  {
    id: 'f-sire',
    name: 'The Sirelines',
    blurb:
      'Who turned whom. Every vampire alive descends from one Original; kill that Original with white oak and the whole line dies with them. This is why nobody can simply kill Klaus.',
    rows: [
      {
        row: 0,
        label: 'Originals',
      },
      {
        row: 1,
        label: 'First turned',
      },
      {
        row: 2,
        label: 'Their lines',
      },
      {
        row: 3,
        label: '1864',
      },
      {
        row: 4,
        label: 'Modern',
      },
    ],
    members: [
      {
        person: 'klaus',
        row: 0,
        col: 0,
      },
      {
        person: 'elijah',
        row: 0,
        col: 2,
      },
      {
        person: 'rebekah',
        row: 0,
        col: 3,
      },
      {
        person: 'kol',
        row: 0,
        col: 4,
      },
      {
        person: 'finn',
        row: 0,
        col: 5,
      },
      {
        person: 'lucien',
        row: 1,
        col: 0,
      },
      {
        person: 'maryporter',
        row: 1,
        col: 1,
      },
      {
        person: 'tristan',
        row: 1,
        col: 2,
      },
      {
        person: 'aurora',
        row: 1,
        col: 3,
      },
      {
        person: 'marcel',
        row: 2,
        col: 0,
      },
      {
        person: 'rose',
        row: 2,
        col: 1,
      },
      {
        person: 'trevor',
        row: 2,
        col: 2,
      },
      {
        person: 'katherine',
        row: 2,
        col: 3,
      },
      {
        person: 'josh',
        row: 3,
        col: 0,
      },
      {
        person: 'stefan',
        row: 3,
        col: 1,
      },
      {
        person: 'damon',
        row: 3,
        col: 2,
      },
      {
        person: 'caroline',
        row: 4,
        col: 1,
      },
      {
        person: 'vicki',
        row: 4,
        col: 2,
      },
      {
        person: 'mg',
        row: 4,
        col: 3,
      },
    ],
    links: [
      {
        from: 'klaus',
        to: 'lucien',
        type: 'sire',
      },
      {
        from: 'klaus',
        to: 'maryporter',
        type: 'sire',
      },
      {
        from: 'elijah',
        to: 'tristan',
        type: 'sire',
      },
      {
        from: 'rebekah',
        to: 'aurora',
        type: 'sire',
      },
      {
        from: 'klaus',
        to: 'marcel',
        type: 'sire',
      },
      {
        from: 'maryporter',
        to: 'rose',
        type: 'sire',
      },
      {
        from: 'rose',
        to: 'trevor',
        type: 'sire',
      },
      {
        from: 'rose',
        to: 'katherine',
        type: 'sire',
      },
      {
        from: 'marcel',
        to: 'josh',
        type: 'sire',
      },
      {
        from: 'katherine',
        to: 'stefan',
        type: 'sire',
      },
      {
        from: 'katherine',
        to: 'damon',
        type: 'sire',
      },
      {
        from: 'damon',
        to: 'caroline',
        type: 'sire',
      },
      {
        from: 'damon',
        to: 'vicki',
        type: 'sire',
      },
    ],
  },
  {
    id: 'f-nola',
    name: 'New Orleans, by faction',
    blurb:
      'Not a bloodline — a standoff. Three powers and a human seat, in a city the Mikaelsons built and then lost.',
    rows: [
      {
        row: 0,
        label: 'Vampires',
      },
      {
        row: 1,
        label: 'Witches',
      },
      {
        row: 2,
        label: 'Wolves',
      },
      {
        row: 3,
        label: 'Humans',
      },
      {
        row: 4,
        label: 'The child',
      },
    ],
    members: [
      {
        person: 'klaus',
        row: 0,
        col: 0,
      },
      {
        person: 'elijah',
        row: 0,
        col: 1,
      },
      {
        person: 'rebekah',
        row: 0,
        col: 2,
      },
      {
        person: 'marcel',
        row: 0,
        col: 3,
      },
      {
        person: 'josh',
        row: 0,
        col: 4,
      },
      {
        person: 'lucien',
        row: 0,
        col: 5,
      },
      {
        person: 'davina',
        row: 1,
        col: 0,
      },
      {
        person: 'vincent',
        row: 1,
        col: 1,
      },
      {
        person: 'freya',
        row: 1,
        col: 2,
      },
      {
        person: 'sophie',
        row: 1,
        col: 3,
      },
      {
        person: 'genevieve',
        row: 1,
        col: 4,
      },
      {
        person: 'celeste',
        row: 1,
        col: 5,
      },
      {
        person: 'hayley',
        row: 2,
        col: 0,
      },
      {
        person: 'jackson',
        row: 2,
        col: 1,
      },
      {
        person: 'keelin',
        row: 2,
        col: 2,
      },
      {
        person: 'ansel',
        row: 2,
        col: 3,
      },
      {
        person: 'cami',
        row: 3,
        col: 0,
      },
      {
        person: 'kieran',
        row: 3,
        col: 1,
      },
      {
        person: 'hope',
        row: 4,
        col: 0,
      },
    ],
    links: [
      {
        from: 'klaus',
        to: 'hope',
        type: 'blood',
      },
      {
        from: 'hayley',
        to: 'hope',
        type: 'blood',
      },
      {
        from: 'klaus',
        to: 'marcel',
        type: 'sire',
      },
      {
        from: 'hayley',
        to: 'jackson',
        type: 'marry',
      },
      {
        from: 'freya',
        to: 'keelin',
        type: 'marry',
      },
      {
        from: 'cami',
        to: 'kieran',
        type: 'blood',
      },
    ],
  },
  {
    id: 'f-school',
    name: 'The Salvatore School',
    blurb:
      'Caroline’s idea, Klaus’s money, Alaric’s job. A boarding school where supernatural children learn to hide in plain sight instead of being hunted.',
    rows: [
      {
        row: 0,
        label: 'Staff',
      },
      {
        row: 1,
        label: 'Students',
      },
      {
        row: 2,
        label: 'Students II',
      },
      {
        row: 3,
        label: 'Enemies',
      },
    ],
    members: [
      {
        person: 'alaric',
        row: 0,
        col: 0,
      },
      {
        person: 'caroline',
        row: 0,
        col: 1,
      },
      {
        person: 'dorian',
        row: 0,
        col: 2,
      },
      {
        person: 'emma',
        row: 0,
        col: 3,
      },
      {
        person: 'matt',
        row: 0,
        col: 4,
      },
      {
        person: 'jeremy',
        row: 0,
        col: 5,
      },
      {
        person: 'hope',
        row: 1,
        col: 0,
      },
      {
        person: 'josie',
        row: 1,
        col: 1,
      },
      {
        person: 'lizzie',
        row: 1,
        col: 2,
      },
      {
        person: 'landon',
        row: 1,
        col: 3,
      },
      {
        person: 'mg',
        row: 1,
        col: 4,
      },
      {
        person: 'rafael',
        row: 1,
        col: 5,
      },
      {
        person: 'kaleb',
        row: 2,
        col: 0,
      },
      {
        person: 'jed',
        row: 2,
        col: 1,
      },
      {
        person: 'cleo',
        row: 2,
        col: 2,
      },
      {
        person: 'alyssa',
        row: 2,
        col: 3,
      },
      {
        person: 'ethan',
        row: 2,
        col: 4,
      },
      {
        person: 'clarke',
        row: 3,
        col: 0,
      },
      {
        person: 'necromancer',
        row: 3,
        col: 1,
      },
      {
        person: 'ken',
        row: 3,
        col: 2,
      },
      {
        person: 'aurora',
        row: 3,
        col: 3,
      },
      {
        person: 'kai',
        row: 3,
        col: 4,
      },
    ],
    links: [
      {
        from: 'alaric',
        to: 'josie',
        type: 'blood',
      },
      {
        from: 'alaric',
        to: 'lizzie',
        type: 'blood',
      },
      {
        from: 'caroline',
        to: 'josie',
        type: 'sire',
      },
      {
        from: 'caroline',
        to: 'lizzie',
        type: 'sire',
      },
      {
        from: 'landon',
        to: 'clarke',
        type: 'blood',
      },
    ],
  },
  {
    id: 'f-anc',
    name: 'The Ancients',
    blurb:
      'Nobody here is related to anybody. They are simply the oldest things in the story, and everything else is downstream of what they did.',
    rows: [
      {
        row: 0,
        label: 'c. 100 BC',
      },
      {
        row: 1,
        label: 'They built',
      },
      {
        row: 2,
        label: 'Later',
      },
    ],
    members: [
      {
        person: 'silas',
        row: 0,
        col: 0,
      },
      {
        person: 'qetsiyah',
        row: 0,
        col: 1,
      },
      {
        person: 'amara',
        row: 0,
        col: 2,
      },
      {
        person: 'markos',
        row: 1,
        col: 0,
      },
      {
        person: 'tatia',
        row: 1,
        col: 2,
      },
      {
        person: 'cade',
        row: 2,
        col: 0,
      },
      {
        person: 'sybil',
        row: 2,
        col: 1,
      },
      {
        person: 'seline',
        row: 2,
        col: 2,
      },
      {
        person: 'inadu',
        row: 2,
        col: 3,
      },
    ],
    links: [
      {
        from: 'silas',
        to: 'qetsiyah',
        type: 'marry',
      },
      {
        from: 'silas',
        to: 'amara',
        type: 'marry',
      },
      {
        from: 'qetsiyah',
        to: 'markos',
        type: 'sire',
      },
      {
        from: 'amara',
        to: 'tatia',
        type: 'sire',
      },
      {
        from: 'cade',
        to: 'sybil',
        type: 'sire',
      },
      {
        from: 'cade',
        to: 'seline',
        type: 'sire',
      },
    ],
  },
]
