import type { Rule } from '@/types/codex/rule'

export const RULES: Rule[] = [
  {
    id: 'becoming-a-vampire',
    name: 'Becoming a vampire',
    rule: 'Die with vampire blood in your system. You wake in transition and have roughly 24 hours to drink human blood or die properly.',
    sections: [
      {
        label: 'What it costs you',
        items: [
          {
            term: 'Sunlight',
            note: 'fatal without a daylight ring',
          },
          {
            term: 'Invitation',
            note: 'no entry to a home uninvited',
          },
          {
            term: 'Vervain',
            note: 'burns on contact, blocks compulsion',
          },
          {
            term: 'Wood through the heart',
            note: 'permanent',
          },
          {
            term: 'Emotion',
            note: 'amplified past bearing',
          },
          {
            term: 'Ageing',
            note: 'stops at the moment you turn',
          },
        ],
      },
      {
        label: 'What you gain',
        items: [
          {
            term: 'Compulsion',
            note: 'eye contact and a command',
          },
          {
            term: 'Healing',
            note: 'near-instant, from almost anything',
          },
          {
            term: 'Strength & speed',
            note: 'scaling with age',
          },
          {
            term: 'Your blood heals humans',
            note: 'and turns them if they die with it in',
          },
        ],
      },
      {
        label: 'The escape hatch',
        items: [
          {
            term: 'The humanity switch',
            note: 'off = no guilt, no love, no brakes',
          },
        ],
      },
    ],
    footnote:
      'Flipping the switch off is reversible; the memories are not. Everyone who does it has to live afterwards with what they did while it was off — which is the engine of at least four major arcs.',
  },
  {
    id: 'becoming-a-werewolf',
    name: 'Becoming a werewolf',
    rule: 'You inherit the gene and it does nothing at all — until you cause a human death. Then it activates permanently and you turn at every full moon.',
    sections: [
      {
        label: 'The consequences',
        items: [
          {
            term: 'A werewolf bite',
            note: 'fatal to a vampire within about a day',
          },
          {
            term: 'Klaus’s blood',
            note: 'the only cure for that bite',
          },
          {
            term: 'Full moon',
            note: 'involuntary, and agonising',
          },
          {
            term: 'Silver',
            note: 'a myth. It does nothing.',
          },
        ],
      },
      {
        label: 'Ways around it',
        items: [
          {
            term: 'Becoming a hybrid',
            note: 'turn at will, no pain',
          },
          {
            term: 'Moonlight rings',
            note: 'witch-made, same effect',
          },
          {
            term: 'The unification ritual',
            note: 'the Crescent pack’s solution',
          },
        ],
      },
    ],
    footnote:
      'Every werewolf character is introduced with a body already behind them. Tyler causes a car crash; Mason kills a man in a fight; Rafael repeats Tyler’s exactly. The show never lets you forget what the trigger is.',
  },
  {
    id: 'how-magic-works',
    name: 'How magic works',
    rule: 'Five traditions, five power sources, and none of them are free.',
    sections: [
      {
        label: 'The traditions',
        items: [
          {
            term: 'Spirit magic',
            note: 'nature and the dead witches before you',
          },
          {
            term: 'Ancestral magic',
            note: 'New Orleans’ own consecrated dead',
          },
          {
            term: 'Traveler magic',
            note: 'the collective will of the Travelers',
          },
          {
            term: 'Expression',
            note: 'raw, unsanctioned, corrupting',
          },
          {
            term: 'Siphoning',
            note: 'stealing magic from other magical things',
          },
          {
            term: 'Kemiya',
            note: 'alchemical object-magic; Davina’s speciality',
          },
        ],
      },
      {
        label: 'The price',
        items: [
          {
            term: 'Every spell',
            note: 'has a cost, usually somebody’s life',
          },
          {
            term: 'The spirits',
            note: 'can and do revoke your power',
          },
          {
            term: 'Turning vampire',
            note: 'destroys a witch’s magic — unless she siphons',
          },
        ],
      },
    ],
    footnote:
      'A siphoner who becomes a vampire is a Heretic: a magic-using vampire with an infinite internal battery. That is the one combination the Gemini coven built prison worlds to prevent.',
  },
  {
    id: 'how-death-works',
    name: 'How death works',
    rule: 'Where you go depends entirely on which century you die in. It changes three times.',
    sections: [
      {
        label: 'The eras of the afterlife',
        items: [
          {
            term: 'c. 100 BC – 2014',
            note: 'the Other Side · supernatural purgatory',
          },
          {
            term: '2014 – 2017',
            note: 'Cade’s Hell · souls of the guilty',
          },
          {
            term: '2017 onward',
            note: 'peace · nothing holds the dead any more',
          },
        ],
      },
      {
        label: 'Side doors and holding cells',
        items: [
          {
            term: 'The Phoenix Stone',
            note: 'a personalised hell for a trapped soul',
          },
          {
            term: 'Prison worlds',
            note: 'one day, repeating, alone',
          },
          {
            term: 'Malivore',
            note: 'erasure — not death, deletion',
          },
          {
            term: 'The Ancestors',
            note: 'New Orleans’ dead, with opinions',
          },
        ],
      },
      {
        label: 'Ways back',
        items: [
          {
            term: 'A Bennett witch',
            note: 'the most reliable route, at a price',
          },
          {
            term: 'The Gilbert ring',
            note: 'resurrects humans; breaks their minds',
          },
          {
            term: 'A phoenix',
            note: 'Landon, over and over',
          },
          {
            term: 'The Necromancer',
            note: 'badly, and for his own amusement',
          },
        ],
      },
    ],
    footnote:
      'Humans always found peace. The Other Side only ever filed the supernatural — which is why the franchise’s body count was reversible for five seasons and permanent afterwards.',
  },
  {
    id: 'killing-an-original',
    name: 'Killing an Original',
    rule: 'White oak, and nothing else — with exactly one exception, invented in 2016.',
    sections: [
      {
        label: 'The methods',
        items: [
          {
            term: 'A white oak stake',
            note: 'permanent, and takes the whole sireline',
          },
          {
            term: 'Silver dagger + white oak ash',
            note: 'sleep, not death; reversible',
          },
          {
            term: 'Marcel’s venom',
            note: 'the one non-white-oak kill',
          },
          {
            term: 'Everything else',
            note: 'inconvenient at most',
          },
        ],
      },
      {
        label: 'Where the wood came from',
        items: [
          {
            term: 'The original tree',
            note: 'burned c. 1000, but pieces kept',
          },
          {
            term: 'Mikael’s stake',
            note: 'carried for nine centuries',
          },
          {
            term: 'The Wickery Bridge sign',
            note: 'a 12th-century replanting',
          },
          {
            term: 'Twelve stakes',
            note: 'made in 2012, and counted constantly',
          },
        ],
      },
    ],
    footnote:
      'The dagger trick does not work on Klaus, because he is half werewolf. This is the whole reason his siblings could be stored in boxes and he could not.',
  },
  {
    id: 'compulsion-and-what-beats-it',
    name: 'Compulsion, and what beats it',
    rule: 'Eye contact, a command, and it is done — unless the target is protected.',
    sections: [
      {
        label: 'Immune or protected',
        items: [
          {
            term: 'Anyone on vervain',
            note: 'which is most of the town',
          },
          {
            term: 'Other vampires',
            note: 'except from an Original',
          },
          {
            term: 'Werewolves and witches',
            note: 'naturally resistant',
          },
          {
            term: 'Sirens',
            note: 'override it entirely',
          },
        ],
      },
      {
        label: 'What it can do',
        items: [
          {
            term: 'Erase or rewrite memory',
            note: 'the most-used plot device in the show',
          },
          {
            term: 'Force any action',
            note: 'including suicide',
          },
          {
            term: 'Be layered',
            note: 'compulsions can be stacked and hidden',
          },
        ],
      },
    ],
    footnote:
      'An Original can compel any vampire. That single asymmetry is where most of the leverage in seasons three and four comes from.',
  },
  {
    id: 'doppelgangers-the-cure',
    name: 'Doppelgängers & the cure',
    rule: 'Nature prints a shadow of anyone who cheats death, and provides exactly one way back.',
    sections: [
      {
        label: 'The two lines',
        items: [
          {
            term: 'Silas → … → Stefan → Tom Avery',
            note: 'the male line',
          },
          {
            term: 'Amara → Tatia → Katherine → Elena',
            note: 'the Petrova line',
          },
        ],
      },
      {
        label: 'What doppelgänger blood does',
        items: [
          {
            term: 'Fuels Original-tier spells',
            note: 'the immortality spell, the hybrid curse',
          },
          {
            term: 'Breaks the Travelers’ curse',
            note: 'when both lines are spilled together',
          },
          {
            term: 'Sustains Klaus’s hybrids',
            note: 'which is why Elena is a permanent target',
          },
        ],
      },
      {
        label: 'The cure',
        items: [
          {
            term: 'One dose at a time',
            note: 'and it travels by blood',
          },
          {
            term: 'Removes the supernatural',
            note: 'entirely, and permanently',
          },
          {
            term: 'Does not undo the years',
            note: 'Katherine ages five centuries in weeks',
          },
        ],
      },
    ],
    footnote:
      'Route of the cure: buried with Silas → forced on Katherine → Silas → Amara → a second dose out of the 1994 prison world → Elena → Stefan → Damon.',
  },
  {
    id: 'sirelines-sire-bonds',
    name: 'Sirelines & sire bonds',
    rule: 'Two different things with confusingly similar names, and the show mixes them up on purpose.',
    sections: [
      {
        label: 'A sireline',
        items: [
          {
            term: 'Who turned whom',
            note: 'traced back to one Original',
          },
          {
            term: 'Kill the Original',
            note: 'and the entire line dies',
          },
          {
            term: 'Five lines',
            note: 'Finn, Elijah, Klaus, Kol and Rebekah — Klaus’s is by far the largest',
          },
        ],
      },
      {
        label: 'A sire bond',
        items: [
          {
            term: 'Only for hybrids and rare vampires',
            note: 'not a general rule',
          },
          {
            term: 'Gratitude, not compulsion',
            note: 'which is worse',
          },
          {
            term: 'Elena to Damon',
            note: 'the show’s most uncomfortable idea',
          },
          {
            term: 'Broken by',
            note: 'the sire’s death, or doppelgänger blood',
          },
        ],
      },
    ],
    footnote:
      'Nearly every protagonist is in Klaus’s line, which is the structural reason he survives eight seasons of people wanting him dead.',
  },
]
