import type { CausalNode } from '@/types/codex/causal-node'

export const CAUSAL_MAP: CausalNode[] = [
  {
    "id": "silas",
    "title": "Silas & Qetsiyah",
    "era": "I — The First Immortals",
    "dated": "c. 100 BC",
    "category": "Origins & Immortals",
    "summary": "Silas, a warlock of the ancient world, and Qetsiyah, the strongest witch of her age, were betrothed — and together they made the first immortality elixir. Silas drank it with her handmaiden Amara instead. Every supernatural thing that follows for two thousand years is Qetsiyah's revenge for that afternoon.",
    "facts": [
      "Immortality here is not vampirism. Silas eats normally, walks in daylight, and cannot be staked. Vampires arrive a thousand years later and are a cheaper, cursed imitation.",
      "Qetsiyah and Silas were both Travelers — their two most powerful members — before her spell split the witch world. Bonnie Bennett descends from her.",
      "Silas is also a powerful psychic — he can make anyone see anything, which is how he spends most of his screen time wearing Stefan's face.",
      "The elixir was made from Qetsiyah's own blood and a spell she wrote. Silas asked her to make it so they could be together forever; he had already decided who \"together\" meant.",
      "He is not a vampire and not a witch any more — he is simply a man that nature refuses to kill. He can starve for two thousand years and still be conscious at the end of it.",
      "Qetsiyah's revenge has three parts, and all three are still running two thousand years later: the cure, the Other Side, and the doppelgängers."
    ],
    "peopleInvolved": [
      "silas",
      "qetsiyah",
      "amara"
    ],
    "leadsTo": [
      {
        "node": "amara",
        "relation": "loved"
      },
      {
        "node": "cure",
        "relation": "she made"
      },
      {
        "node": "otherside",
        "relation": "she built"
      },
      {
        "node": "travelers",
        "relation": "she cursed"
      },
      {
        "node": "doppel",
        "relation": "provoked"
      }
    ]
  },
  {
    "id": "amara",
    "title": "Amara",
    "era": "I — The First Immortals",
    "dated": "c. 100 BC",
    "category": "Origins & Immortals",
    "summary": "The handmaiden Silas chose. Qetsiyah did not kill her — she did something worse. Amara was made the Anchor to the Other Side: awake, immortal, and used as the doorway through which every supernatural death passed for two thousand years. Silas spent all of it believing she was simply dead.",
    "facts": [
      "Amara is the original face. Tatia, Katerina Petrova and Elena Gilbert are all her shadows.",
      "When she is finally freed in 2013 she is not grateful. She has been conscious for two millennia and wants only to die.",
      "She drank the second dose from Silas's own supply. Qetsiyah showed Silas a body and let him believe it was hers.",
      "As the Anchor she was kept in a stone box, conscious, for roughly two thousand years, feeling every supernatural death pass through her.",
      "Nina Dobrev plays Amara, Tatia, Katherine and Elena — the same face at four points across two thousand years, which is the point."
    ],
    "peopleInvolved": [
      "amara",
      "silas",
      "qetsiyah",
      "elena"
    ],
    "leadsTo": [
      {
        "node": "anchor",
        "relation": "became"
      },
      {
        "node": "doppel",
        "relation": "source of"
      }
    ]
  },
  {
    "id": "balance",
    "title": "Nature’s Balance",
    "era": "I — The First Immortals",
    "dated": "the one law",
    "category": "Origins & Immortals",
    "summary": "The rule the entire universe runs on: nature permits no imbalance. Every immortality gets a cure. Every curse gets a loophole. Every shortcut generates a shadow. Doppelgängers, the cure, the Five, the white oak, the sireline rule — none of these are villains' inventions. They are corrections.",
    "facts": [
      "It is also the writers' honest engine: whenever a character gets too powerful, the balance clause supplies the counterweight.",
      "The one thing nature never balances is grief, which is why almost every catastrophe in this story starts with a funeral.",
      "Stated most plainly by Qetsiyah herself: \"nature demands balance.\" Every writer in the franchise uses it as a licence to invent a counterweight whenever they need one.",
      "It explains why the cure exists, why white oak exists, why doppelgängers exist, why the Five exist, and why every prison always has a door."
    ],
    "peopleInvolved": [],
    "leadsTo": [
      {
        "node": "doppel",
        "relation": "produced"
      },
      {
        "node": "cure",
        "relation": "required"
      },
      {
        "node": "weakness",
        "relation": "charged"
      }
    ]
  },
  {
    "id": "cure",
    "title": "The Cure",
    "era": "I — The First Immortals",
    "dated": "c. 100 BC",
    "category": "Origins & Immortals",
    "summary": "Qetsiyah made exactly one dose of a cure for immortality and entombed it with Silas. The cruelty is in the design: to escape starvation he would have to take it, become mortal, die — and land on the Other Side with her, forever, instead of finding peace with Amara.",
    "facts": [
      "One dose exists at a time, and it travels by blood: whoever drinks a cured person's blood soon enough gets it next.",
      "Its route through the story: buried with Silas → forced on Katherine in 2013 → Silas → Amara → a second dose recovered out of the 1994 prison world → Elena → Stefan → Damon.",
      "Taking it does not undo the years, but it does hold them: Katherine only starts ageing five centuries in weeks once Silas drinks the cure back out of her blood.",
      "It does not simply remove immortality; it removes the supernatural entirely. A cured vampire is human, ages normally, and can never be turned again by the same blood.",
      "Silas is cured by drinking Katherine's blood after she takes it, which is how Stefan is finally able to kill him.",
      "In the series finale Stefan is cured first, then transfers it to Damon through his own blood — his last act before walking into the hellfire."
    ],
    "peopleInvolved": [
      "qetsiyah",
      "silas",
      "katherine",
      "elena",
      "stefan",
      "damon",
      "kai"
    ],
    "leadsTo": [
      {
        "node": "silas",
        "relation": "entombed with"
      },
      {
        "node": "curehunt",
        "relation": "hunted"
      },
      {
        "node": "curetaken",
        "relation": "used"
      }
    ]
  },
  {
    "id": "otherside",
    "title": "The Other Side",
    "era": "I — The First Immortals",
    "dated": "c. 100 BC",
    "category": "Death & Afterlives",
    "summary": "Qetsiyah's purgatory: a mirror of the living world where every supernatural being goes when it dies — able to see everything, touch nothing, and wait. It was built to trap one man. Everybody else who died supernatural for two thousand years was collateral damage.",
    "facts": [
      "Humans do not go there. They find peace. Only the supernatural get filed.",
      "It runs on two things: the Anchor, and Bennett magic. Both are exhaustible, which is the whole problem.",
      "Because it exists, death in this franchise is a temporary administrative state for roughly five seasons.",
      "Ghosts on the Other Side can be seen by Bonnie, by Jeremy after his resurrection, and by anyone standing near a strong enough witch on a strong enough night.",
      "Because it exists, the show can kill anyone and bring them back for five seasons. When it goes, the stakes change permanently and the tone of the last three seasons changes with it."
    ],
    "peopleInvolved": [
      "qetsiyah",
      "amara",
      "bonnie",
      "silas"
    ],
    "leadsTo": [
      {
        "node": "anchor",
        "relation": "runs on"
      },
      {
        "node": "osidefall",
        "relation": "collapsed"
      },
      {
        "node": "cade",
        "relation": "replaced by"
      }
    ]
  },
  {
    "id": "anchor",
    "title": "The Anchor",
    "era": "I — The First Immortals",
    "dated": "c. 100 BC",
    "category": "Death & Afterlives",
    "summary": "The Other Side's doorstop. Every supernatural death physically passes through the Anchor, who feels each one. Amara held it for two thousand years. Bonnie Bennett takes it in 2013, which is why she can suddenly see and touch the dead — and why traffic accumulates in her.",
    "facts": [
      "The Anchor is immortal and cannot be killed while the Other Side stands.",
      "Making Bonnie the Anchor is the moment the show quietly admits its resurrection mechanic has become load-bearing.",
      "Silas tries to kill Amara to destroy the Other Side; Stefan kills him first, and Amara — cured and mortal at last — stabs herself with the same blade. Bonnie volunteers to replace her, knowing exactly what the job is.",
      "Every supernatural who dies while Bonnie is the Anchor passes through her body on the way out. She feels each one. Nobody thanks her."
    ],
    "peopleInvolved": [
      "amara",
      "bonnie",
      "silas"
    ],
    "leadsTo": [
      {
        "node": "amara",
        "relation": "first held by"
      },
      {
        "node": "bonnie",
        "relation": "then held by"
      },
      {
        "node": "osidefall",
        "relation": "failed with"
      }
    ]
  },
  {
    "id": "doppel",
    "title": "The Doppelgänger Curse",
    "era": "I — The First Immortals",
    "dated": "ongoing",
    "category": "Origins & Immortals",
    "summary": "Nature's response to two people cheating death: it keeps reprinting their faces. Silas and Amara each got a recurring mortal shadow, born again every few centuries. It matters because doppelgänger blood is the only fuel that will run an Original-tier spell.",
    "facts": [
      "Amara's line runs Amara → Tatia → Katerina Petrova → Elena Gilbert.",
      "Silas's line runs through Stefan Salvatore to Tom Avery — which is why Silas can walk around wearing Stefan's face and nobody notices for weeks.",
      "Klaus needs a Petrova twice over: Tatia's blood bound his curse, Elena's blood broke it.",
      "The line skips generations and continents. Katherine is Bulgarian, Elena's people are American, and Tatia lived a thousand years before either.",
      "Travelers hunt doppelgängers specifically because the blood of two matching shadows, spilled together, will break the curse laid on them.",
      "Tom Avery — the last-born Silas double, younger than Stefan — is a paramedic in Atlanta, killed by Enzo to keep the Travelers from using him."
    ],
    "peopleInvolved": [
      "amara",
      "silas",
      "tatia",
      "katherine",
      "elena",
      "stefan",
      "tomavery"
    ],
    "leadsTo": [
      {
        "node": "tatia",
        "relation": "produced"
      },
      {
        "node": "katherine",
        "relation": "produced"
      },
      {
        "node": "elena",
        "relation": "produced"
      },
      {
        "node": "travelers",
        "relation": "hunted by"
      }
    ]
  },
  {
    "id": "travelers",
    "title": "The Travelers",
    "era": "I — The First Immortals",
    "dated": "c. 100 BC →",
    "category": "Witches & Magic",
    "summary": "The coven Silas and Qetsiyah both came from, cursed by the wider witch community after her immortality spell: they can never settle. Any home they build turns to ruin, any community they form scatters. Two thousand years of wandering, all of it aimed at one goal — undo the curse, using the blood of the doppelgängers her spell created.",
    "facts": [
      "Their magic is heresy to Spirit witches. They draw on the collective will of the Travelers, not on nature or ancestors.",
      "They possess bodies rather than occupy them, passing consciousness down through generations.",
      "Their victory in 2014 unmakes every kind of magic except their own inside Mystic Falls. Damon and Elena kill Markos by blowing up the Grill; the anti-magic border outlives them and is only lifted months later, when Kai Parker siphons the spell out of the ground.",
      "They pass their consciousness into new bodies rather than reincarnate; a Traveler's \"death\" is a change of address.",
      "Sheriff Forbes, Stefan, Elena and half of Mystic Falls are used as vessels or hosts at some point in season five.",
      "Their curse means every Traveler settlement fails, which has kept them permanently nomadic and permanently furious."
    ],
    "peopleInvolved": [
      "markos",
      "silas",
      "qetsiyah"
    ],
    "leadsTo": [
      {
        "node": "markos",
        "relation": "led by"
      },
      {
        "node": "doppel",
        "relation": "hunts"
      }
    ]
  },
  {
    "id": "esther",
    "title": "Esther & Mikael",
    "era": "II — The Mikaelsons",
    "dated": "10th century",
    "category": "Bloodlines & Houses",
    "summary": "A witch and a warrior from the Old World. They lost a child to plague, and Esther's friend Ayana told them of a land across the sea where the people were healthy and strong. They took what family they had left and went. Esther is the most consequential person in the franchise and one of its worst mothers.",
    "facts": [
      "Mikael is a warrior who despised weakness, and made that his children's entire childhood. Klaus got the worst of it.",
      "Esther's power is real and enormous — she remains a threat a thousand years later, twice, from beyond death.",
      "Esther is called the Original Witch. Her power is the largest single force in the franchise's history and everything catastrophic in it is downstream of a decision she made.",
      "She returns from death twice — once in season three of TVD and again in New Orleans — both times intending to undo her own spell by putting her children into new mortal bodies.",
      "Mikael's contempt for weakness was aimed hardest at Klaus, which was Esther's fault: she knew why Klaus was different and never told him."
    ],
    "peopleInvolved": [
      "esther",
      "mikael",
      "ayana",
      "dahlia"
    ],
    "leadsTo": [
      {
        "node": "dahlia",
        "relation": "bargained with"
      },
      {
        "node": "newworld",
        "relation": "settled"
      },
      {
        "node": "spell",
        "relation": "cast"
      }
    ]
  },
  {
    "id": "dahlia",
    "title": "Dahlia’s Bargain",
    "era": "II — The Mikaelsons",
    "dated": "10th century",
    "category": "Witches & Magic",
    "summary": "Esther was barren. Her elder sister Dahlia — far stronger and considerably worse — made her fertile, in exchange for the firstborn of every generation of their bloodline, forever. Esther paid once, with Freya, and spent the next thousand years hiding everyone else.",
    "facts": [
      "Dahlia sleeps a century between each waking year, sustained by the firstborn magic she collects.",
      "The debt does not expire. It is why a thousand-year-old witch comes for a newborn in New Orleans in the 21st century.",
      "Dahlia and Esther learned magic together in the Old World. Dahlia went further, into the kind of magic that requires a price paid by somebody else.",
      "Her spell binds the firstborn's magic to her, which is why she can find Hope anywhere in the world the moment Hope's power surfaces.",
      "She is killed only when the Mikaelsons — with Freya, the daughter she stole — cooperate completely for the first time in a thousand years."
    ],
    "peopleInvolved": [
      "dahlia",
      "esther",
      "freya",
      "hope"
    ],
    "leadsTo": [
      {
        "node": "freya",
        "relation": "collected"
      },
      {
        "node": "dahliareturn",
        "relation": "came due"
      },
      {
        "node": "hope",
        "relation": "targets"
      }
    ]
  },
  {
    "id": "freya",
    "title": "Freya, Taken",
    "era": "II — The Mikaelsons",
    "dated": "10th century",
    "category": "Witches & Magic",
    "summary": "The Mikaelsons' true firstborn, handed to Dahlia as payment and reported dead of plague. Raised as Dahlia's weapon, held in the same cycle of a century's sleep for each year awake, and returned to the story a thousand years later as the only Mikaelson who is still a witch — and the only one who can plan.",
    "facts": [
      "She is the family's problem-solver in New Orleans: nearly every workable spell in The Originals is hers.",
      "She marries Keelin, a werewolf doctor, and gets one of the franchise's very few uncomplicated happy endings.",
      "Freya slept a century for every single year awake, over and over, for a thousand years. Her sense of time is unlike anyone else's in the family.",
      "She was raised to believe her mother sold her, which is true, and that her family would not want her, which is not.",
      "She becomes the family's strategist: the spells that save Hope, kill Dahlia and contain the Hollow are all hers."
    ],
    "peopleInvolved": [
      "freya",
      "dahlia",
      "esther",
      "keelin",
      "hope"
    ],
    "leadsTo": [
      {
        "node": "dahliareturn",
        "relation": "killed"
      },
      {
        "node": "originals",
        "relation": "sibling of"
      },
      {
        "node": "freyakeelin",
        "relation": "survived to"
      }
    ]
  },
  {
    "id": "newworld",
    "title": "The Village in the New World",
    "era": "II — The Mikaelsons",
    "dated": "c. 1000",
    "category": "Bloodlines & Houses",
    "summary": "They settled in what would eventually be Mystic Falls, Virginia, beside a community of people who became wolves at the full moon. For years the arrangement held perfectly well: the wolves changed, everyone else stayed indoors, and in the morning it was over.",
    "facts": [
      "Ayana, the witch who guided them, is an ancestor of the Bennett line.",
      "The Mikaelsons and the Bennetts have therefore been in each other's business since before either had a surname worth mentioning.",
      "The village sits on what will become Mystic Falls. The Salvatore boarding house, the Lockwood cellar and the Wickery Bridge all stand on Mikaelson ground.",
      "Ayana's line, the wolves' line and the Mikaelson line all begin within a few miles of each other, which is why the franchise keeps coming back to one small town in Virginia."
    ],
    "peopleInvolved": [
      "esther",
      "mikael",
      "ayana",
      "henrik",
      "klaus"
    ],
    "leadsTo": [
      {
        "node": "wolves",
        "relation": "neighbours"
      },
      {
        "node": "ayana",
        "relation": "guided by"
      },
      {
        "node": "henrik",
        "relation": "undone by"
      }
    ]
  },
  {
    "id": "wolves",
    "title": "The Wolves Next Door",
    "era": "II — The Mikaelsons",
    "dated": "pre-history",
    "category": "Wolves & Hybrids",
    "summary": "Werewolves are the older species. They existed long before Esther's spell, turning involuntarily and agonisingly on the full moon, and they are the reason the Mikaelsons hid one night a month. Vampires were, from day one, built partly as a defence against them.",
    "facts": [
      "The werewolf gene passes by blood but stays dormant until the carrier causes a human death. This single rule kills more characters than any villain in the franchise.",
      "A werewolf bite is fatal to a vampire. Klaus's hybrid blood is the only cure — the most valuable leverage anyone in this world can hold.",
      "Before the Original vampires, werewolves were the apex predator of the supernatural world and knew it.",
      "Post-vampire, wolves are systematically hunted, cursed and marginalised — in Mystic Falls by the Lockwoods' own secrecy, in New Orleans by Klaus's decree.",
      "A hybrid — half vampire, half wolf — turns at will and without pain, which is why Klaus's hybrids defect the second they are freed from his sire bond."
    ],
    "peopleInvolved": [
      "ansel",
      "tyler",
      "mason",
      "jules",
      "hayley",
      "klaus"
    ],
    "leadsTo": [
      {
        "node": "ansel",
        "relation": "of this village"
      },
      {
        "node": "henrik",
        "relation": "killed"
      },
      {
        "node": "wolfcurse",
        "relation": "continued as"
      }
    ]
  },
  {
    "id": "ansel",
    "title": "Ansel & the Affair",
    "era": "II — The Mikaelsons",
    "dated": "10th century",
    "category": "Wolves & Hybrids",
    "summary": "Esther had an affair with a man from the wolf village. Niklaus is his son, and neither of them knew it until Klaus's first kill woke his wolf side. Mikael's response was to kill Ansel, his family and half the village's wolves in a night — and to spend the next thousand years reminding Klaus what he was.",
    "facts": [
      "Klaus's rage, his loyalty tests, his compulsion to build a family that cannot leave — all of it dates from this.",
      "Ansel briefly returns from the dead in New Orleans. Klaus kills him. It is not subtle and it does not need to be.",
      "Ansel returns briefly in New Orleans, resurrected by Esther, offering Klaus the one thing nobody has ever offered him: a father who is glad he exists. Klaus kills him inside a day.",
      "Klaus's obsession with building a family that cannot leave him — hybrids, Marcel, eventually Hope — dates directly from being an unwanted son twice over."
    ],
    "peopleInvolved": [
      "ansel",
      "esther",
      "klaus",
      "mikael"
    ],
    "leadsTo": [
      {
        "node": "hybridcurse",
        "relation": "caused"
      },
      {
        "node": "originals",
        "relation": "father of Klaus"
      }
    ]
  },
  {
    "id": "henrik",
    "title": "Henrik’s Death",
    "era": "II — The Mikaelsons",
    "dated": "c. 1000",
    "category": "Bloodlines & Houses",
    "summary": "The youngest Mikaelson. Klaus sneaked him out to watch the wolves change and one of them tore him apart. Esther, refusing to bury another child, went looking for a spell that would make the rest of them impossible to kill. Everything in eleven seasons of television descends from one boy's curiosity and one brother's bad judgement.",
    "facts": [
      "Klaus has carried the blame for a thousand years and it informs every cruelty he commits.",
      "Rebekah and Klaus are the two who never stop talking about him. Rebekah remembers him; Klaus carries the guilt as his defining wound.",
      "Esther's grief is the reason the immortality spell exists at all, which makes Henrik the single most consequential dead child in television."
    ],
    "peopleInvolved": [
      "henrik",
      "klaus",
      "esther",
      "rebekah"
    ],
    "leadsTo": [
      {
        "node": "spell",
        "relation": "caused"
      }
    ]
  },
  {
    "id": "tatia",
    "title": "Tatia",
    "era": "II — The Mikaelsons",
    "dated": "c. 1000",
    "category": "Bloodlines & Houses",
    "summary": "A woman of the village whom both Elijah and Klaus loved, and the first Petrova doppelgänger — Amara's shadow, arriving exactly when the story needed her. Esther killed her, put her blood in the wine for the immortality spell, and used it again to bind Klaus's wolf.",
    "facts": [
      "The doppelgänger line is therefore built into the Originals from the first minute of their existence. Nothing about Elena's importance is coincidence.",
      "Elijah and Klaus's rivalry over one woman is a thousand-year-old pattern that repeats with Katherine, with Hayley, with everyone.",
      "Tatia had a child by another man before either brother courted her — the Petrova pattern of a disgraced pregnancy repeats with Katherine five hundred years later.",
      "Esther told her sons that Tatia had left. In fact she drained her for the spell and Elijah, newly turned, finished her — which Elijah only learns a thousand years later.",
      "Elijah has the memory compelled away — the \"red door\" — and recovering it in New Orleans nearly destroys him."
    ],
    "peopleInvolved": [
      "tatia",
      "elijah",
      "klaus",
      "esther",
      "amara"
    ],
    "leadsTo": [
      {
        "node": "doppel",
        "relation": "first of"
      },
      {
        "node": "spell",
        "relation": "blood used in"
      },
      {
        "node": "hybridcurse",
        "relation": "blood used in"
      }
    ]
  },
  {
    "id": "whiteoak",
    "title": "The White Oak",
    "era": "II — The Mikaelsons",
    "dated": "c. 1000",
    "category": "Origins & Immortals",
    "summary": "An ancient white oak at the centre of the village, whose life force Esther drew on for the spell. Because nature charges for everything, the same tree is the only thing in existence that can permanently kill what she made. The family burned it immediately. Wood from it kept turning up anyway.",
    "facts": [
      "Surviving pieces: a stake Mikael carried, and a tree the natives replanted some three hundred years after the family left, felled by the Salvatores around 1912 to build Wickery Bridge — and its sign.",
      "Kill an Original with white oak and every vampire they sired dies too. The cast spends years arguing over which line they belong to for exactly this reason.",
      "Esther burned the original tree the same century she used it. Mikael kept one stake back — the only weapon that could kill his own children.",
      "A white oak sapling planted in the 12th century grew into the tree used to build the Wickery Bridge sign, which is why Mystic Falls has a stake supply nobody knew about.",
      "White oak ash on a silver dagger neutralises an Original without killing them. It does not work on Klaus, because he is half werewolf.",
      "Alaric carves twelve white oak stakes from the Wickery Bridge sign in season three, and Klaus spends most of that season counting them."
    ],
    "peopleInvolved": [
      "mikael",
      "klaus",
      "rebekah",
      "damon",
      "elena",
      "esther"
    ],
    "leadsTo": [
      {
        "node": "spell",
        "relation": "fuelled"
      },
      {
        "node": "originaldeaths",
        "relation": "kills by"
      },
      {
        "node": "sirelines",
        "relation": "threatens"
      }
    ]
  },
  {
    "id": "spell",
    "title": "The Immortality Spell",
    "era": "II — The Mikaelsons",
    "dated": "c. 1000",
    "category": "Vampires",
    "summary": "Esther's working, cast on her husband and five surviving children — not on herself; she remained a witch. The ingredients: the white oak's life, the sun, Tatia's doppelgänger blood in the wine, and Mikael running each of them through with a sword. They woke wanting blood. Ayana refused to take part. Esther did it anyway.",
    "facts": [
      "She meant it as protection. What she produced was a species with no natural predator and an emotional range turned up to a level nobody can survive sober.",
      "Esther spends the rest of the story — including two separate returns from death — trying to undo it.",
      "Ayana warned that the spirits would not stand for it. Esther cast anyway, using Ayana's own talisman.",
      "Mikael drove a sword through each of his children to complete the transition, then forced them to feed. Finn never forgave any of it and spent his immortality wanting to die.",
      "The spell was intended as protection from the wolves. Its real effect was to invent an entire species with no predator, no off switch and a thousand years of family arguments."
    ],
    "peopleInvolved": [
      "esther",
      "mikael",
      "ayana",
      "tatia",
      "klaus",
      "elijah",
      "rebekah",
      "finn",
      "kol"
    ],
    "leadsTo": [
      {
        "node": "originals",
        "relation": "created"
      },
      {
        "node": "weakness",
        "relation": "cost"
      },
      {
        "node": "sirelines",
        "relation": "began"
      }
    ]
  },
  {
    "id": "originals",
    "title": "The Original Vampires",
    "era": "II — The Mikaelsons",
    "dated": "c. 1000 →",
    "category": "Vampires",
    "summary": "Mikael, Finn, Elijah, Niklaus, Kol and Rebekah — six of them; Esther cast the spell and stayed a witch. The first vampires, and the source of every vampire who has ever existed. Nothing kills them but white oak; a silver dagger dipped in white oak ash merely puts them to sleep, which is how Klaus keeps his siblings for centuries at a time.",
    "facts": [
      "\"Always and forever\" is Elijah's vow and the family's central promise — made, broken and re-made roughly once a season.",
      "Finn spent nine hundred years daggered. Kol spent a century. Rebekah lost decades. Klaus considers this a form of love, which is the show's most honest and most disturbing idea.",
      "Finn is the eldest surviving son and the only one who considers vampirism an abomination from the first day. He is daggered for 900 years and killed within months of waking.",
      "Kol is a witch-turned-vampire and the family's most reckless. He hates witches, fears the cure, and is killed by Jeremy Gilbert in 2012 with white oak.",
      "Rebekah wants a human life from the very first season she appears in and finally gets one, in New Orleans, roughly nine years of screen time later.",
      "Elijah is the family's conscience and its most efficient killer, which is the joke the show never stops telling."
    ],
    "peopleInvolved": [
      "mikael",
      "esther",
      "finn",
      "elijah",
      "klaus",
      "kol",
      "rebekah"
    ],
    "leadsTo": [
      {
        "node": "sirelines",
        "relation": "source of"
      },
      {
        "node": "mikaelhunt",
        "relation": "hunted by"
      },
      {
        "node": "nola",
        "relation": "built"
      },
      {
        "node": "klausarrives",
        "relation": "come to Mystic Falls"
      }
    ]
  },
  {
    "id": "weakness",
    "title": "What Nature Charged",
    "era": "II — The Mikaelsons",
    "dated": "the price",
    "category": "Vampires",
    "summary": "The counterweights that arrived with vampirism: burning in sunlight, no entry to a home without an invitation, vervain, wood through the heart, and every emotion amplified into something close to unbearable. Witches patched the first with daylight rings. Nothing patches the last.",
    "facts": [
      "The humanity switch — shutting emotion off entirely — is the flip side of that amplification, and the reason otherwise sympathetic characters commit massacres on a semi-regular schedule.",
      "Vervain blocks compulsion and burns on contact. Half the town drinks it in their coffee.",
      "A vampire in transition has 24 hours: feed on human blood or die.",
      "Daylight rings are spelled by a witch and keyed to one wearer. Remove it in sunlight and the vampire burns within seconds.",
      "Vervain in the bloodstream blocks compulsion entirely. The town's water supply is dosed at various points, which is a running quiet arms race.",
      "A vampire's emotions do not just intensify, they overwhelm judgement. This is why the show's most sympathetic characters have three-figure body counts.",
      "Turning off humanity is reversible, but the memories are not. Everyone who does it has to live afterwards with what they did while it was off."
    ],
    "peopleInvolved": [
      "stefan",
      "damon",
      "caroline",
      "elena",
      "lexi"
    ],
    "leadsTo": [
      {
        "node": "originals",
        "relation": "binds"
      },
      {
        "node": "ripper",
        "relation": "worsens"
      }
    ]
  },
  {
    "id": "hybridcurse",
    "title": "The Hybrid Curse",
    "era": "II — The Mikaelsons",
    "dated": "c. 1000",
    "category": "Wolves & Hybrids",
    "summary": "When Klaus's first kill triggered his wolf, Esther bound it — using Tatia's blood and the moonstone — so he could never be both. She did it to keep Mikael from killing him. Klaus spent a thousand years working to undo it, and the first two seasons of The Vampire Diaries are really about nothing else.",
    "facts": [
      "Undoing it requires the moonstone, a Petrova doppelgänger, a werewolf and a vampire, sacrificed on a full moon by a witch.",
      "The moonstone is the seal. It is also the single most passed-around object in television, changing hands about nine times in two seasons.",
      "Klaus's plan was never really power. It was to make more of himself, so he would not be the only one.",
      "The moonstone was created to seal it and is passed between Katherine, Mason, Tyler, Damon, Bonnie and Klaus over two seasons.",
      "Klaus does not want the curse broken for strength. He wants it broken so he can sire hybrids and never be alone again — which the show says out loud, repeatedly.",
      "The witch who performs the sacrifice is Greta Martin, daughter of the witch Jonas Martin, who chose Klaus's side against her own family. Damon kills her in the chaos afterwards."
    ],
    "peopleInvolved": [
      "klaus",
      "esther",
      "tatia",
      "elena",
      "jules",
      "jenna",
      "greta"
    ],
    "leadsTo": [
      {
        "node": "sunmoon",
        "relation": "disguised as"
      },
      {
        "node": "sacrifice",
        "relation": "broken by"
      },
      {
        "node": "tatia",
        "relation": "bound with"
      }
    ]
  },
  {
    "id": "sirelines",
    "title": "The Four Sirelines",
    "era": "II — The Mikaelsons",
    "dated": "c. 1000 →",
    "category": "Vampires",
    "summary": "Every vampire alive descends from one Original. Kill that Original with white oak and the entire line dies with them. Klaus's line is by far the largest, which makes him functionally unkillable — killing him would wipe out most vampires on Earth, including nearly everyone the audience likes.",
    "facts": [
      "The Originals maps the modern lines onto the first three vampires the family made: Lucien for Klaus's line, Tristan for Elijah's, Aurora for Rebekah's. Five Originals sired lines in all — Finn, Elijah, Klaus, Kol and Rebekah.",
      "The rule is applied inconsistently across the two shows. The version that survives: a line dies with its Original however he is killed — the exception is an Original whose spirit outlives his body, which is how Klaus's line survives his corpse more than once.",
      "Finn's death in 2012 proves the rule by killing his entire line, including Sage, on screen.",
      "Because Klaus's line contains Stefan, Damon, Caroline and almost everybody else, killing Klaus becomes narratively impossible for years.",
      "Lucien's serum is the loophole: his bite, and later Marcel's, kills an Original without triggering the sireline collapse."
    ],
    "peopleInvolved": [
      "klaus",
      "elijah",
      "rebekah",
      "kol",
      "finn",
      "lucien",
      "tristan",
      "aurora",
      "marcel"
    ],
    "leadsTo": [
      {
        "node": "lucien",
        "relation": "headed by"
      },
      {
        "node": "originaldeaths",
        "relation": "proven by"
      },
      {
        "node": "hollowend",
        "relation": "ends with"
      }
    ]
  },
  {
    "id": "mikaelhunt",
    "title": "Mikael the Destroyer",
    "era": "II — The Mikaelsons",
    "dated": "11th–20th c.",
    "category": "Vampires",
    "summary": "Esther made her husband a vampire too, and he became the thing that hunts them. Mikael fed on vampires rather than people, chased his own children across nine centuries and three continents, and killed Klaus's wolf father, Klaus's hybrids, and eventually — briefly — Klaus.",
    "facts": [
      "Klaus killed Esther after learning the truth about Ansel, and told his siblings Mikael did it. The lie held for a thousand years.",
      "Mikael can be summoned and staked, but he is the reason the family never stayed anywhere long enough to be happy.",
      "Mikael can be summoned by a witch and pinned by white oak, which is exactly how Klaus finally kills him in Mystic Falls in 2011.",
      "Davina brings him back once, in New Orleans, and he remains in both cities the only person Klaus is actually afraid of.",
      "He feeds on vampires, not humans, which makes him functionally a predator of his own children."
    ],
    "peopleInvolved": [
      "mikael",
      "klaus",
      "esther",
      "rebekah",
      "stefan"
    ],
    "leadsTo": [
      {
        "node": "nola1919",
        "relation": "drove them from New Orleans"
      },
      {
        "node": "originals",
        "relation": "hunts"
      }
    ]
  },
  {
    "id": "five",
    "title": "The Brotherhood of the Five",
    "era": "III — The Long Middle",
    "dated": "1110",
    "category": "Vampires",
    "summary": "Not Qetsiyah's own work, though it finishes her argument. In 1110 a dying witch descended from her created five supernatural hunters and burned a map into their skin — a tattoo that grows with every vampire they kill and, when complete, points to Silas and the cure. The point was to get somebody to dig him up and cure him, so he would die and land on the Other Side with her.",
    "facts": [
      "Killing a hunter earns the Hunter's Curse: relentless hallucinations of the people you have killed, until you kill yourself.",
      "Only a \"potential hunter\" can see the map. Jeremy Gilbert is one of the last, which is why he spends a season being marched around a table with his shirt off.",
      "The five in the original brotherhood, formed in 1110: Alexander, who daggered the Mikaelsons at a dinner in 1114, and four others whose line continues to modern hunters.",
      "Connor Jordan is the hunter who comes to Mystic Falls in 2012; Jeremy Gilbert completes the map on his own body after Connor dies.",
      "Professor Atticus Shane, who orchestrates most of the hunt, is working for Silas and wants his dead wife back.",
      "Galen Vaughn is the last living member of the brotherhood and reaches the island first."
    ],
    "peopleInvolved": [
      "qetsiyah",
      "connor",
      "jeremy",
      "alexander",
      "vaughn",
      "shane",
      "silas"
    ],
    "leadsTo": [
      {
        "node": "cure",
        "relation": "maps to"
      },
      {
        "node": "curehunt",
        "relation": "drives"
      }
    ]
  },
  {
    "id": "lucien",
    "title": "Lucien, Tristan & Aurora",
    "era": "III — The Long Middle",
    "dated": "11th century",
    "category": "Vampires",
    "summary": "The first three people the Mikaelsons ever turned: Lucien, a servant in the de Martel household; the nobleman Tristan de Martel; and Tristan's sister Aurora, whom Klaus loved and Rebekah turned against his wishes. Nine hundred years later all three come back at once, and the sireline structure they represent becomes the spine of the whole conflict.",
    "facts": [
      "Tristan took over the Strix — Elijah's own creation — a society of elite vampires that long outlives him and still runs half the world's money.",
      "Aurora was arguably the first vampire driven genuinely mad by immortality. She is still alive, and still furious, as late as Legacies.",
      "Lucien was a servant in the de Martel household, turned by Klaus and then compelled by Elijah to pose as Klaus while the family hid from Mikael. He spent nine hundred years being underestimated.",
      "Tristan de Martel was Elijah's; Elijah compelled him to walk into the sea repeatedly for centuries as punishment, and Tristan ends the story doing exactly that, forever, in a locked box.",
      "Aurora was Rebekah's, and Klaus loved her. Rebekah turned her against Klaus's wishes; Klaus's rage over it is a thousand years old and still fresh."
    ],
    "peopleInvolved": [
      "lucien",
      "tristan",
      "aurora",
      "klaus",
      "elijah",
      "rebekah"
    ],
    "leadsTo": [
      {
        "node": "sirelines",
        "relation": "embody"
      },
      {
        "node": "beast",
        "relation": "became"
      },
      {
        "node": "gods",
        "relation": "returns in"
      }
    ]
  },
  {
    "id": "sunmoon",
    "title": "The Curse of the Sun and the Moon",
    "era": "III — The Long Middle",
    "dated": "centuries",
    "category": "Wolves & Hybrids",
    "summary": "A lie, and a very good one. Klaus fabricated an ancient curse binding vampires to the night and werewolves to the moon, and seeded it into Aztec and Viking legend so both species would spend centuries hunting the moonstone and the doppelgänger on his behalf. There is no such curse. There is only his.",
    "facts": [
      "It works for a thousand years. Entire covens and packs die chasing a story he made up.",
      "Elijah is the one who eventually tells Elena the truth, which is the moment the show's mythology snaps into focus.",
      "The fake curse says a moonstone can free vampires from the sun and wolves from the moon. Every witch, wolf pack and vampire coven who believed it wasted centuries.",
      "Katherine knew it was fake and used the story to manipulate Mason, Tyler and the Salvatores anyway."
    ],
    "peopleInvolved": [
      "klaus",
      "elijah",
      "elena",
      "katherine",
      "mason"
    ],
    "leadsTo": [
      {
        "node": "hybridcurse",
        "relation": "covers for"
      }
    ]
  },
  {
    "id": "wolfcurse",
    "title": "The Werewolf Bloodlines",
    "era": "III — The Long Middle",
    "dated": "centuries",
    "category": "Wolves & Hybrids",
    "summary": "Packs carried the gene down the centuries: the Crescents and the Malraux around New Orleans, the Lockwoods in Mystic Falls. A wolf who has never killed does not know what they are, which means every werewolf's origin story is also a manslaughter.",
    "facts": [
      "Tyler Lockwood triggers his by a car accident. Jules, Mason, Hayley — all of them have a body somewhere behind them.",
      "Werewolf venom is lethal to vampires within roughly a day. Klaus's blood is the antidote, and he trades it like currency.",
      "Mason Lockwood triggers his by a fight that ends in a death; Tyler triggers his in a car accident he causes. Both are unaware the gene exists until it activates.",
      "The Lockwood family kept the cellar under their property for generations without any of them naming what it was for.",
      "Klaus's hybrids are wolves who have been turned and sire-bonded. Freeing them from the bond, which Elena's blood allows, causes an immediate mass defection."
    ],
    "peopleInvolved": [
      "tyler",
      "mason",
      "jules",
      "hayley",
      "jackson",
      "carol"
    ],
    "leadsTo": [
      {
        "node": "crescent",
        "relation": "cursed as"
      },
      {
        "node": "hayley",
        "relation": "of the Crescents"
      }
    ]
  },
  {
    "id": "ayana",
    "title": "Ayana & the Bennett Line",
    "era": "III — The Long Middle",
    "dated": "10th century →",
    "category": "Witches & Magic",
    "summary": "The witch who led the Mikaelsons across the sea and then refused to help Esther cast, calling the spell an abomination against nature. She was right. Her descendants spend the next thousand years cleaning up after it.",
    "facts": [
      "The Bennetts also carry Qetsiyah's blood, which is why Bonnie's power keeps turning out to be structurally necessary to the Other Side.",
      "Ayana's talisman passes down the Bennett line for a thousand years and turns up around Bonnie's neck in season one.",
      "The Bennetts are both the reason the Originals exist and the family that keeps paying to contain them."
    ],
    "peopleInvolved": [
      "ayana",
      "esther",
      "emily",
      "bonnie",
      "sheila"
    ],
    "leadsTo": [
      {
        "node": "bennett",
        "relation": "ancestor of"
      },
      {
        "node": "emily",
        "relation": "ancestor of"
      }
    ]
  },
  {
    "id": "bennett",
    "title": "The Bennett Witches",
    "era": "III — The Long Middle",
    "dated": "1000 →",
    "category": "Witches & Magic",
    "summary": "Ayana, Emily, Sheila \"Grams\", her daughter Abby, Lucy, and Bonnie. The most powerful and most routinely sacrificed family in the franchise. Almost every spell that holds the world together across eleven seasons is either cast by a Bennett or paid for with a Bennett's life.",
    "facts": [
      "Their magic is Spirit magic: drawn from nature, brokered through the dead witches who came before, and withdrawn the moment those witches disapprove.",
      "Grams dies opening the tomb. Abby is turned. Bonnie dies repeatedly. The pattern is the show's least examined and most obvious flaw, and Legacies eventually says so out loud.",
      "Sheila \"Grams\" Bennett dies opening the tomb in 2009 — the first of many Bennett deaths caused by a Salvatore's request.",
      "Abby Bennett abandoned Bonnie as a child after burying Mikael, and is later turned into a vampire, which severs her magic entirely.",
      "Lucy Bennett, a cousin, appears once, helps Katherine, and leaves — the only Bennett in the franchise who gets out.",
      "Bonnie's own count: dead or magically destroyed at least four times, and she is still the one who ends Hell."
    ],
    "peopleInvolved": [
      "ayana",
      "emily",
      "sheila",
      "abby",
      "lucy",
      "bonnie",
      "rudy"
    ],
    "leadsTo": [
      {
        "node": "emily",
        "relation": "includes"
      },
      {
        "node": "bonnie",
        "relation": "ends at"
      }
    ]
  },
  {
    "id": "katherine",
    "title": "Katerina Petrova",
    "era": "III — The Long Middle",
    "dated": "1490",
    "category": "Bloodlines & Houses",
    "summary": "A Bulgarian girl disgraced by a pregnancy, exiled by her father, and then hunted across Europe by Klaus as the doppelgänger he needed. She turned herself into a vampire specifically to be useless to him — the sacrifice requires a human — and then ran for five hundred years without ever once being caught.",
    "facts": [
      "Her daughter, Nadia Petrova, was taken at birth and spent five centuries looking for her.",
      "Rose and Trevor helped her escape and paid for it for half a millennium.",
      "Because she escaped, Klaus had to wait for the next Petrova. That wait is why there is a show.",
      "Born Katerina Petrova in 1473 in Bulgaria; her daughter was taken at birth in 1490 and she was exiled to England, where she fled Klaus and turned in 1492.",
      "Rose and Trevor helped her run, and Rose's blood is what she turned on. Trevor is beheaded by Elijah five hundred years later for it; Rose dies of a werewolf bite in Damon's care.",
      "She turned on Rose's blood and hanged herself to complete the transition, then killed the woman whose home she was hiding in. It took her one evening to understand exactly what she was.",
      "When the cure runs out of her, her daughter arranges the Traveler passenger spell that moves her consciousness into Elena's body — she has died and returned more times than anyone in the franchise."
    ],
    "peopleInvolved": [
      "katherine",
      "klaus",
      "elijah",
      "trevor",
      "rose",
      "nadia",
      "stefan",
      "damon"
    ],
    "leadsTo": [
      {
        "node": "doppel",
        "relation": "second of"
      },
      {
        "node": "katreturn",
        "relation": "returns as"
      },
      {
        "node": "salvatore",
        "relation": "turned"
      }
    ]
  },
  {
    "id": "nola",
    "title": "New Orleans",
    "era": "III — The Long Middle",
    "dated": "1700s",
    "category": "Bloodlines & Houses",
    "summary": "Klaus, Elijah and Rebekah arrived in a young colonial port and effectively built it. For two hundred years the Mikaelsons were New Orleans — its power, its rules, its brutality, and the one truce that ever held between vampires, witches and wolves.",
    "facts": [
      "They left in 1919 and did not come back for ninety years. The city did not stop being theirs; it just stopped knowing it.",
      "The Mikaelsons arrived in the 1700s and effectively invented the city's supernatural order: vampires rule, witches are permitted to practise under supervision, wolves are excluded.",
      "Klaus's rule was enforced through a compact with the human faction, later held by the O'Connell family and the church."
    ],
    "peopleInvolved": [
      "klaus",
      "elijah",
      "rebekah",
      "marcel",
      "kieran"
    ],
    "leadsTo": [
      {
        "node": "marcel",
        "relation": "raised"
      },
      {
        "node": "quarter",
        "relation": "became"
      },
      {
        "node": "nola1919",
        "relation": "ended by"
      }
    ]
  },
  {
    "id": "marcel",
    "title": "Marcel Gerard",
    "era": "III — The Long Middle",
    "dated": "1820s →",
    "category": "Vampires",
    "summary": "Born to an enslaved woman and the man who owned her, taken in by Klaus as a boy and named Marcellus — \"the little warrior.\" Klaus raised him, Rebekah loved him, and in 1919 Klaus abandoned him believing him dead. Marcel took the city instead and held it for a hundred years.",
    "facts": [
      "Half of The Originals is a custody fight between two men who each believe they made New Orleans and each believe they made the other.",
      "He is later turned into an upgraded Original by Lucien's serum, which makes him the one being whose bite can kill a Mikaelson without white oak.",
      "Klaus gave him vampire blood as a boy after a beating; Marcel later turned, and Klaus told him a fiction about how it happened.",
      "Marcel's rule of New Orleans depends on Davina Claire, a teenage witch he keeps hidden to suppress the covens' ancestral magic.",
      "He becomes \"the Beast\" of the prophecy after taking Lucien's serum — an upgraded Original whose bite kills Mikaelsons."
    ],
    "peopleInvolved": [
      "marcel",
      "klaus",
      "rebekah",
      "davina",
      "josh",
      "elijah"
    ],
    "leadsTo": [
      {
        "node": "nola1919",
        "relation": "abandoned in"
      },
      {
        "node": "quarter",
        "relation": "ruled"
      },
      {
        "node": "hollowend",
        "relation": "venom used in"
      }
    ]
  },
  {
    "id": "nola1919",
    "title": "1919 — Mikael Comes",
    "era": "III — The Long Middle",
    "dated": "1919",
    "category": "Vampires",
    "summary": "Mikael tracked his children to New Orleans and burned the opera house down around them. Klaus ran, Rebekah was daggered for calling her father there, Marcel was left for dead, and the family did not return for ninety years.",
    "facts": [
      "This is also the era Klaus spends in Chicago with Stefan — the \"ripper years\" that resurface, weaponised, in 2011.",
      "Rebekah summoned Mikael, hoping he would kill Klaus and free her to live with Marcel. He nearly killed everyone instead.",
      "Klaus daggered Rebekah for it and left her in a box for decades, then told Marcel she had abandoned him.",
      "The same era gives Klaus his Chicago period with Stefan and Rebekah — the \"ripper years\" that Klaus reactivates in 2011 as a weapon."
    ],
    "peopleInvolved": [
      "mikael",
      "klaus",
      "rebekah",
      "marcel",
      "stefan"
    ],
    "leadsTo": [
      {
        "node": "marcel",
        "relation": "abandoned"
      },
      {
        "node": "ripper",
        "relation": "Stefan era"
      },
      {
        "node": "quarter",
        "relation": "emptied"
      }
    ]
  },
  {
    "id": "crescent",
    "title": "The Crescent Curse",
    "era": "III — The Long Middle",
    "dated": "20th century",
    "category": "Wolves & Hybrids",
    "summary": "In 1991 — long after the Mikaelsons had left the city — Marcel Gerard had the Crescent pack cursed: the spell cast by the witch Brynne Deveraux, who was unknowingly possessed by Céleste Dubois. Locked in wolf form, with one night a month as humans at the full moon, an exact inversion of what they were. It is broken twenty-one years later.",
    "facts": [
      "Hayley's family — which means the boy Klaus raised cursed the pack of the woman who would later have Klaus's child, two years after she was born.",
      "The curse was cast in 1991 by Brynne Deveraux while possessed by Céleste Dubois, on Marcel's orders. Wolf form permanently; human for one night at the full moon — the exact reverse of what a werewolf is.",
      "Hayley's parents were killed and she was raised outside the pack entirely, which is why she has no idea what she is when the story starts.",
      "Jackson Kenner, the pack's rightful alpha, marries Hayley in a ritual that lets the whole pack turn at will. Klaus permits it and then never stops resenting it. Tristan de Martel rips Jackson's heart out in front of her."
    ],
    "peopleInvolved": [
      "hayley",
      "jackson",
      "celeste",
      "klaus",
      "marcel"
    ],
    "leadsTo": [
      {
        "node": "hayley",
        "relation": "trapped"
      },
      {
        "node": "wolfcurse",
        "relation": "inverted"
      }
    ]
  },
  {
    "id": "founders",
    "title": "The Founders’ Council",
    "era": "IV — Mystic Falls, 1864",
    "dated": "1864",
    "category": "Bloodlines & Houses",
    "summary": "Mystic Falls' founding families — Salvatore, Gilbert, Fell, Forbes, Lockwood — organised as a vampire-hunting council, dosed the town's drinks with vervain, and rounded up twenty-seven vampires to burn in a church. Their descendants inherit the Council, the ledger, and a truly world-class capacity for denial.",
    "facts": [
      "The Gilbert device, the vervain supply and half the town's secrets all date from this.",
      "A century and a half later the Council is still meeting, still burning things, and still headed by people whose own children are vampires.",
      "The five founding families: Salvatore, Gilbert, Fell, Forbes and Lockwood. Every modern protagonist descends from one of them.",
      "The Gilbert device — built by Johnathan Gilbert with Emily Bennett's magic — incapacitates every vampire and werewolf in range, which is how the town discovers the Lockwoods are wolves. Witches are unaffected.",
      "Sheriff Liz Forbes runs the Council in the modern day while her own daughter is a vampire, which she eventually accepts."
    ],
    "peopleInvolved": [
      "giuseppe",
      "johngilbert",
      "liz",
      "carol",
      "emily",
      "jeremy",
      "elena"
    ],
    "leadsTo": [
      {
        "node": "salvatore",
        "relation": "made"
      },
      {
        "node": "emily",
        "relation": "outwitted by"
      },
      {
        "node": "elena",
        "relation": "descends to"
      }
    ]
  },
  {
    "id": "salvatore",
    "title": "Stefan & Damon, 1864",
    "era": "IV — Mystic Falls, 1864",
    "dated": "1864",
    "category": "Vampires",
    "summary": "Two brothers in Confederate-era Virginia, both in love with the same houseguest — Katherine Pierce, who was compelling both of them and feeding on both of them and enjoying every minute. Their father shot them for protecting her. With her blood already in their systems, they woke in transition. Damon only completed it because Stefan made him.",
    "facts": [
      "Stefan's first feed was on their father, Giuseppe.",
      "Damon spent the next 145 years promising Stefan an eternity of misery, and mostly delivering.",
      "Katherine compelled both brothers to love her and fed on both of them for months while they believed it was a courtship.",
      "Giuseppe spiked Stefan's drink with vervain to expose Katherine, then shot them both for helping her escape the roundup.",
      "Stefan's first kill was his father. Damon's first was a girl on the road. Neither ever fully recovers from their first night."
    ],
    "peopleInvolved": [
      "stefan",
      "damon",
      "giuseppe",
      "katherine",
      "emily",
      "zach"
    ],
    "leadsTo": [
      {
        "node": "ripper",
        "relation": "made"
      },
      {
        "node": "katherine",
        "relation": "turned by"
      },
      {
        "node": "stefandamon",
        "relation": "return in 2009"
      }
    ]
  },
  {
    "id": "emily",
    "title": "Emily Bennett & the Tomb",
    "era": "IV — Mystic Falls, 1864",
    "dated": "1864",
    "category": "Witches & Magic",
    "summary": "Katherine's handmaiden and a Bennett witch. She faked Katherine's death in the church fire and sealed the other twenty-six vampires beneath it — not killed, just desiccating for 145 years, held under a spell keyed to a comet. It is the errand that brings Damon home in 2009.",
    "facts": [
      "Emily's grimoire and her spells run half the plot of the first season from beyond the grave.",
      "Her deal with Katherine is the reason Katherine is never where anyone thinks she is.",
      "Emily's deal with Katherine: she saves the vampires from the fire and Katherine leaves her descendants alone.",
      "The tomb spell is keyed to a comet passing over Mystic Falls, which is why Damon has to wait 145 years for one specific night in 2009.",
      "Emily is burned at the stake by the Founders. Her spirit possesses Bonnie in 2009 to destroy the talisman rather than let Damon use it."
    ],
    "peopleInvolved": [
      "emily",
      "katherine",
      "bonnie",
      "damon",
      "sheila"
    ],
    "leadsTo": [
      {
        "node": "bennett",
        "relation": "of the line"
      },
      {
        "node": "katreturn",
        "relation": "concealed"
      },
      {
        "node": "stefandamon",
        "relation": "draws home"
      }
    ]
  },
  {
    "id": "lily",
    "title": "Lily Salvatore",
    "era": "IV — Mystic Falls, 1864",
    "dated": "1858 →",
    "category": "Vampires",
    "summary": "Stefan and Damon's mother, officially dead of consumption in 1858. In fact a vampire, and a ripper, shipped off to Europe — and eventually sealed by the Gemini coven into a 1903 prison world with the family she preferred: six siphoner witches she had turned into vampires herself.",
    "facts": [
      "Her sons spend 150 years grieving a woman who chose someone else and then came back to say so.",
      "Damon's entire personality gets a retroactive explanation in about six episodes.",
      "Lily was turned in Europe and abandoned her sons rather than come home as a monster. She calls the Heretics her real family in front of both of them.",
      "Julian, the man she loved, murdered Valerie's unborn child — Stefan's — and Lily refused to believe it for over a century.",
      "She dies in 2016 in a way that finally forces Damon and Stefan to be brothers again, which is what she was for structurally."
    ],
    "peopleInvolved": [
      "lily",
      "stefan",
      "damon",
      "valerie",
      "julian",
      "kai"
    ],
    "leadsTo": [
      {
        "node": "heretics",
        "relation": "made"
      },
      {
        "node": "gemini",
        "relation": "imprisoned by"
      },
      {
        "node": "hereticwar",
        "relation": "causes"
      }
    ]
  },
  {
    "id": "gemini",
    "title": "The Gemini Coven",
    "era": "IV — Mystic Falls, 1864",
    "dated": "centuries",
    "category": "Witches & Magic",
    "summary": "A coven built around one horrifying tradition. Every generation produces a set of twins; at a set age they merge, and the stronger absorbs the weaker, who dies. The survivor leads the coven. They also build prison worlds — perfect looping repeats of a single day — and use them as cells.",
    "facts": [
      "Siphoners are Gemini children born without magic of their own who can only draw it out of other magical things. The coven treats them as abominations.",
      "The coven is wiped out in a single act in 2015 — Kai, its new leader, killing himself. The Merge tradition outlives every witch who believed in it, which is the entire tragedy of Legacies.",
      "Joshua Parker led the coven and was willing to sacrifice any of his children to the tradition, including sending his own son into a prison world.",
      "The merge produces one witch with the strength of two. The loser does not die instantly — they are absorbed, which the show is careful to make look horrible.",
      "Kai destroys the coven in 2015 by killing his father, which links every Gemini life to Joshua's and kills them all at once."
    ],
    "peopleInvolved": [
      "joshuaparker",
      "kai",
      "jo",
      "luke",
      "liv",
      "josie",
      "lizzie"
    ],
    "leadsTo": [
      {
        "node": "prisonworld",
        "relation": "built"
      },
      {
        "node": "heretics",
        "relation": "exiled"
      },
      {
        "node": "twins",
        "relation": "binds"
      },
      {
        "node": "merge",
        "relation": "demands"
      }
    ]
  },
  {
    "id": "augustine",
    "title": "Augustine & Whitmore",
    "era": "IV — Mystic Falls, 1864",
    "dated": "1950s →",
    "category": "Bloodlines & Houses",
    "summary": "A secret research society at Whitmore College that captured vampires and vivisected them for decades in the name of science. Damon was subject 21051 in 1953. Enzo was there for seventy years. It is the franchise's plainest statement of its own thesis: humans are not the safe species.",
    "facts": [
      "Damon escaped by leaving Enzo to burn, which is a debt the show collects on, at length, twenty years of story later.",
      "Damon and Enzo were kept in cages, bled and cut open for years, and told it was research.",
      "Damon escaped in 1958 and left Enzo in a burning building. Enzo survived and spent fifty years in captivity working out what he would say.",
      "Dr. Wes Maxfield revives the programme at Whitmore in the 2010s and invents a vampire that feeds on other vampires."
    ],
    "peopleInvolved": [
      "damon",
      "enzo",
      "meredith"
    ],
    "leadsTo": [
      {
        "node": "armory",
        "relation": "feeds into"
      },
      {
        "node": "hereticwar",
        "relation": "Enzo from"
      }
    ]
  },
  {
    "id": "ripper",
    "title": "The Ripper",
    "era": "IV — Mystic Falls, 1864",
    "dated": "1864 →",
    "category": "Vampires",
    "summary": "Stefan's condition. Human blood turns him into a compulsive, escalating killer who dismembers his victims and then, in remorse, reassembles them. It recurs across the entire series, and it is why he treats his own humanity switch like a loaded weapon he is holding for someone else.",
    "facts": [
      "Lily was a ripper. It runs in the family, which is either genetics or the show's idea of one.",
      "Klaus deliberately weaponises Stefan's version twice — in Chicago in the 1920s, and again in 2011 when he compels it back on.",
      "The pattern is specific: binge, dismember, then reassemble the body out of guilt. The show shows the aftermath rather than the act, and it is worse for it.",
      "Lexi spent decades pulling Stefan back from it and is killed by Damon within four episodes of appearing.",
      "Klaus compels Stefan's humanity off in 2011 and keeps him as a companion, which is the most intimate and most horrifying thing Klaus does to anyone."
    ],
    "peopleInvolved": [
      "stefan",
      "lily",
      "klaus",
      "lexi",
      "elena"
    ],
    "leadsTo": [
      {
        "node": "salvatore",
        "relation": "began at"
      },
      {
        "node": "lily",
        "relation": "inherited from"
      },
      {
        "node": "weakness",
        "relation": "extreme of"
      }
    ]
  },
  {
    "id": "heretics",
    "title": "The Heretics",
    "era": "IV — Mystic Falls, 1864",
    "dated": "1903 →",
    "category": "Witches & Magic",
    "summary": "Siphoners turned into vampires: Valerie, Oscar, Nora, Mary Louise, Beau and Malcolm — Lily's found family. A siphoner vampire is a magic-using vampire, the exact combination the Gemini built prison worlds to prevent, because a vampire is an endless magical battery to siphon from.",
    "facts": [
      "Locked away in 1903, released in 2015, and briefly the most dangerous thing in Virginia.",
      "Valerie was pregnant with Stefan's child in 1863 before Julian beat it out of her. The show does not soften this.",
      "Valerie Tulle was Stefan's first love in 1863; Julian beat her while she was pregnant with Stefan's child, and she killed herself, turning with Lily's blood already in her.",
      "Nora and Mary Louise are a couple who have been together for a century, and their relationship is treated as the most stable thing in the group.",
      "Beau does not speak — his throat was cut before he turned — and communicates by singing, which is the strangest and best detail in the arc."
    ],
    "peopleInvolved": [
      "valerie",
      "nora",
      "marylouise",
      "beau",
      "malcolm",
      "lily",
      "julian"
    ],
    "leadsTo": [
      {
        "node": "gemini",
        "relation": "outlawed by"
      },
      {
        "node": "hereticwar",
        "relation": "wage"
      },
      {
        "node": "lily",
        "relation": "family of"
      }
    ]
  },
  {
    "id": "prisonworld",
    "title": "Prison Worlds & Kai Parker",
    "era": "IV — Mystic Falls, 1864",
    "dated": "1994 →",
    "category": "Witches & Magic",
    "summary": "Gemini cells: one day, repeating forever, alone. Malachai \"Kai\" Parker — a siphoner and a genuine sociopath who murdered four of his siblings at twenty-two — spent 1994 in one, until Bonnie and Damon landed there and he came back out with them. He is the most effective villain the franchise produced.",
    "facts": [
      "Kai's linking spell puts Elena into a coma tied to Bonnie's lifespan, which removes the lead character for two seasons.",
      "Jo was his twin; Luke took her place in the Merge and lost. Kai later returns from the dead in Legacies to menace the next generation of Gemini twins.",
      "The 1994 world repeats 10 May 1994 forever. Kai spent eighteen years there before Damon and Bonnie arrived.",
      "Kai's exit requires the ascendant, a Bennett witch's blood and a celestial event — which is why he needed Bonnie specifically.",
      "He returns in Legacies, is beheaded by Alaric, and still manages to be the most memorable guest of the season."
    ],
    "peopleInvolved": [
      "kai",
      "bonnie",
      "damon",
      "jo",
      "luke",
      "liv",
      "josie",
      "lizzie",
      "elena"
    ],
    "leadsTo": [
      {
        "node": "gemini",
        "relation": "built by"
      },
      {
        "node": "curetaken",
        "relation": "held the cure"
      },
      {
        "node": "merge",
        "relation": "won a"
      },
      {
        "node": "osidefall",
        "relation": "escape route from"
      }
    ]
  },
  {
    "id": "armory",
    "title": "The Armory",
    "era": "IV — Mystic Falls, 1864",
    "dated": "19th century →",
    "category": "Bloodlines & Houses",
    "summary": "A secret society and vault run by the St. John family, holding centuries of supernatural artefacts — and one very old thing sealed in the basement that nobody should have gone looking for. Alaric ends up running the library, which is how the Salvatore School later acquires a research collection.",
    "facts": [
      "Everything the Armory contains eventually becomes either a weapon or a hostage.",
      "Run by the St. John family — Enzo's own — and hoarding artefacts since Dalton St. John found the vault in 1882. Alaric is hired to catalogue it after the time jump.",
      "The vault holds Sybil. Anyone who goes down there hears her, and anyone who hears her belongs to her."
    ],
    "peopleInvolved": [
      "alaric",
      "enzo",
      "bonnie",
      "sybil",
      "seline"
    ],
    "leadsTo": [
      {
        "node": "sirens",
        "relation": "held"
      },
      {
        "node": "school",
        "relation": "stocks"
      }
    ]
  },
  {
    "id": "rayna",
    "title": "Rayna Cruz & the Phoenix Stone",
    "era": "IV — Mystic Falls, 1864",
    "dated": "1800s →",
    "category": "Vampires",
    "summary": "A huntress with eight lives, bound to a sword that brands vampires and a stone that traps their souls in bespoke personal hells. Her mark makes every other vampire on Earth compulsively hunt whoever carries it — an elegant way to make one person the problem of an entire species.",
    "facts": [
      "The Phoenix Stone hells are the franchise's first real hint that the afterlife has more than one floor.",
      "Her mark on Stefan is what drives him to New Orleans, and produces the best crossover the two shows ever did.",
      "Rayna was the daughter of Vicente Cruz of the Brotherhood of the Five, given eight lives by the shamans who sacrificed themselves to forge her sword; each time she dies she comes back younger and angrier.",
      "The Phoenix Stone puts a trapped vampire through a hallucinated century of their own worst memories. Stefan and Elijah both come out of it wrong.",
      "Her mark passes to Bonnie, which turns Bonnie into the target of every vampire on Earth for half a season."
    ],
    "peopleInvolved": [
      "rayna",
      "stefan",
      "damon",
      "bonnie",
      "enzo"
    ],
    "leadsTo": [
      {
        "node": "cade",
        "relation": "foreshadows"
      },
      {
        "node": "hereticwar",
        "relation": "during"
      }
    ]
  },
  {
    "id": "cade",
    "title": "Arcadius & Hell",
    "era": "IV — Mystic Falls, 1864",
    "dated": "2nd century →",
    "category": "Death & Afterlives",
    "summary": "A psychic burned at the stake in the second century who refused to stop existing. His consciousness became a dimension that consumes the souls of the guilty. Once the Other Side collapses, Cade's Hell is where dead supernaturals go. He is, functionally, the Devil, and he keeps a ledger.",
    "facts": [
      "He offers deals, not damnation — which makes him the only antagonist in the franchise who never technically lies.",
      "Hell has a physical anchor beneath Mystic Falls, which is how it can be destroyed.",
      "Arcadius was a genuine psychic in the 2nd century, burned by people who feared him. Nothing about his origin makes him wrong about human nature, which is the problem.",
      "He does not compel or curse. He negotiates, and he keeps every deal, and everybody who deals with him loses anyway.",
      "Stefan kills him with the Maxwell blade — and Katherine, of all people, inherits the throne."
    ],
    "peopleInvolved": [
      "cade",
      "sybil",
      "seline",
      "stefan",
      "damon",
      "bonnie",
      "katherine"
    ],
    "leadsTo": [
      {
        "node": "sirens",
        "relation": "serve"
      },
      {
        "node": "osidefall",
        "relation": "succeeds"
      },
      {
        "node": "hellfire",
        "relation": "ended by"
      }
    ]
  },
  {
    "id": "sirens",
    "title": "Sybil & Seline",
    "era": "IV — Mystic Falls, 1864",
    "dated": "antiquity →",
    "category": "Death & Afterlives",
    "summary": "Two sisters from antiquity, made immortal by Cade and sent out to lure and psychically enslave people and deliver their souls to him. Sealed in the St. John family's Armory vault for centuries, released in 2016. They turn Damon and Stefan into Cade's collectors, which is how the final season earns its stakes.",
    "facts": [
      "A siren's control is total and does not require eye contact, which makes them the only villain compulsion cannot beat.",
      "Seline was the twins' nanny for a season before anyone worked out what she was.",
      "They eat people, and the show does not soften it — their immortality has a literal, cannibal cost.",
      "Seline posed as the Saltzman twins' nanny for months, grooming them as her replacement pair of sirens.",
      "Sybil's control works through the mind rather than the eyes, and cannot be blocked by vervain, which makes her the one villain the town's standard defences do nothing against."
    ],
    "peopleInvolved": [
      "sybil",
      "seline",
      "cade",
      "damon",
      "stefan",
      "josie",
      "lizzie"
    ],
    "leadsTo": [
      {
        "node": "cade",
        "relation": "serve"
      },
      {
        "node": "hellfire",
        "relation": "lead to"
      },
      {
        "node": "twins",
        "relation": "targeted"
      }
    ]
  },
  {
    "id": "elena",
    "title": "Elena Gilbert",
    "era": "V — The Doppelgänger War",
    "dated": "2009",
    "category": "Bloodlines & Houses",
    "summary": "Seventeen, newly orphaned, and the last Petrova doppelgänger. Her biological parents are Isobel Flemming — later a vampire — and John Gilbert; she was raised by John's brother Grayson and his wife as their own. Her blood is the key to a thousand-year-old curse, which makes her the most valuable object on Earth before she has any idea vampires exist.",
    "facts": [
      "Her survival of Klaus's ritual is the accident that makes hybrids impossible and drives the next two seasons.",
      "She is human, then a vampire, then human again, then asleep for two seasons, then human and old. The franchise treats her mortality as a dial.",
      "Grayson and Miranda Gilbert died in the Wickery Bridge crash; Stefan saved Elena first because Grayson, the only one conscious, refused rescue until his daughter was out.",
      "Isobel Flemming was Alaric's wife before she had herself turned. She is Elena's birth mother and dies in front of her.",
      "Elena turns in 2012 after dying with Damon's blood in her, becomes sire-bonded to Damon, takes the cure in 2015, and spends two seasons asleep."
    ],
    "peopleInvolved": [
      "elena",
      "stefan",
      "damon",
      "jeremy",
      "jenna",
      "johngilbert",
      "isobel",
      "grayson",
      "miranda",
      "bonnie",
      "caroline"
    ],
    "leadsTo": [
      {
        "node": "doppel",
        "relation": "last of"
      },
      {
        "node": "sacrifice",
        "relation": "dies in"
      },
      {
        "node": "curetaken",
        "relation": "takes cure"
      },
      {
        "node": "stefandamon",
        "relation": "loved by"
      }
    ]
  },
  {
    "id": "stefandamon",
    "title": "The Salvatores Return",
    "era": "V — The Doppelgänger War",
    "dated": "2009",
    "category": "Vampires",
    "summary": "Stefan comes back to Mystic Falls because a girl there has Katherine's face. Damon comes back to open the tomb and get Katherine out. Neither errand survives contact with reality, and the two of them stay for eight years.",
    "facts": [
      "Damon's plan collapses the moment he learns Katherine was never in the tomb and never came looking for him.",
      "The brothers' relationship — not either romance — is the actual spine of all eight seasons, and the finale knows it.",
      "Zach Salvatore, a descendant of the line, is living in the boarding house when they come back, growing vervain in the basement. Damon snaps his neck in episode five.",
      "Damon's opening move is to turn Caroline Forbes into a feeding source, which the show treats with the seriousness it deserves several seasons later."
    ],
    "peopleInvolved": [
      "stefan",
      "damon",
      "elena",
      "zach",
      "caroline",
      "bonnie",
      "alaric"
    ],
    "leadsTo": [
      {
        "node": "elena",
        "relation": "meets"
      },
      {
        "node": "katreturn",
        "relation": "looks for"
      },
      {
        "node": "tvdend",
        "relation": "ends in"
      }
    ]
  },
  {
    "id": "katreturn",
    "title": "Katherine’s Return",
    "era": "V — The Doppelgänger War",
    "dated": "2009–2017",
    "category": "Vampires",
    "summary": "She was never in the tomb. Katherine surfaces in 2009, plays every side of every conflict, is eventually forced to take the cure, ages five hundred years in weeks, possesses her own daughter's body to survive it, dies again, and comes back in 2017 as the queen of Hell. She structurally refuses to be finished.",
    "facts": [
      "Nadia, the daughter she lost in 1490, finds her, and dies of a werewolf bite within a season. Katherine's one uncomplicated feeling gets about four episodes.",
      "She is the best-constructed character in the show and the only one who is never once stupid.",
      "She takes the cure by force in 2013, starts ageing five centuries in weeks once Silas drains it back out of her, and passes her consciousness into Elena's body to escape dying.",
      "Nadia Petrova finds her after five hundred years and dies of a werewolf bite within a season of the reunion.",
      "In 2017 she returns from Hell as its ruler, with a plan to burn Mystic Falls, and is left standing in the hellfire."
    ],
    "peopleInvolved": [
      "katherine",
      "nadia",
      "elena",
      "stefan",
      "damon",
      "cade"
    ],
    "leadsTo": [
      {
        "node": "katherine",
        "relation": "is"
      },
      {
        "node": "hellfire",
        "relation": "dies in"
      },
      {
        "node": "cure",
        "relation": "took"
      }
    ]
  },
  {
    "id": "klausarrives",
    "title": "Klaus Comes to Mystic Falls",
    "era": "V — The Doppelgänger War",
    "dated": "2010",
    "category": "Vampires",
    "summary": "A thousand years of searching ends when the Originals learn a Petrova doppelgänger is alive in Virginia. Klaus arrives, and the series stops being about two brothers and a girl and starts being about a family older than most nations.",
    "facts": [
      "Rebekah, Elijah, Kol and Finn all follow. The show's ceiling goes up by an order of magnitude and never comes back down.",
      "Klaus arrives possessing Alaric's body, which is the single best reveal in the first three seasons.",
      "Elijah negotiates, Rebekah enrols in the high school, Kol causes chaos, and Finn wants everyone dead including himself.",
      "Klaus's interest in Caroline Forbes begins here and remains the franchise's most-discussed unfinished thread."
    ],
    "peopleInvolved": [
      "klaus",
      "elijah",
      "rebekah",
      "kol",
      "finn",
      "stefan",
      "caroline",
      "tyler"
    ],
    "leadsTo": [
      {
        "node": "originals",
        "relation": "brings"
      },
      {
        "node": "sacrifice",
        "relation": "performs"
      },
      {
        "node": "nola",
        "relation": "later leaves for"
      }
    ]
  },
  {
    "id": "sacrifice",
    "title": "Breaking the Curse",
    "era": "V — The Doppelgänger War",
    "dated": "2010",
    "category": "Wolves & Hybrids",
    "summary": "Klaus's ritual: drain a werewolf, a vampire and the doppelgänger on a full moon with the moonstone. He uses Jules, Jenna Sommers — turned specifically for the purpose — and Elena. It works. He becomes the Original hybrid. Then he discovers he cannot make more, because the doppelgänger did not stay dead.",
    "facts": [
      "Elena survives because John Gilbert trades his life for hers through a Bennett spell.",
      "She comes back human — no vampire blood involved. The death that actually turns her is two seasons later, when Meredith Fell heals her with Damon's blood before the second Wickery Bridge crash.",
      "Klaus's hybrids need doppelgänger blood to survive the turn, which is why Elena's continued existence remains a weekly emergency.",
      "Jenna Sommers is turned by Klaus specifically so she can be the vampire in the ritual. She dies within a day of turning.",
      "John Gilbert takes Elena's death onto himself through a Bennett spell — the one genuinely selfless thing he ever does.",
      "Klaus's hybrids fail because the doppelgänger lived. He needs Elena's blood to make more, which is why she is a permanent target afterwards."
    ],
    "peopleInvolved": [
      "klaus",
      "elena",
      "jenna",
      "jules",
      "greta",
      "bonnie",
      "johngilbert",
      "damon"
    ],
    "leadsTo": [
      {
        "node": "hybridcurse",
        "relation": "breaks"
      },
      {
        "node": "elena",
        "relation": "kills"
      },
      {
        "node": "originaldeaths",
        "relation": "provokes"
      }
    ]
  },
  {
    "id": "bonnie",
    "title": "Bonnie Bennett",
    "era": "V — The Doppelgänger War",
    "dated": "2009–2017",
    "category": "Witches & Magic",
    "summary": "The last Bennett. Across eight seasons she dies, becomes the Anchor, becomes the Other Side's load-bearing wall, loses her magic to the Travelers, gets stranded in 1994, has her lifespan tied to Elena's coma, and repeatedly hands over her own life so that other people's plots can proceed. By workload she is the protagonist.",
    "facts": [
      "She destroys Hell in the finale, which is the largest single act of magic anyone performs in the franchise.",
      "She survives. She is the only one of the original three friends who ends the show neither dead, undead, nor asleep.",
      "She loses her magic at least three times: to Expression, to the Travelers, and to Kai's linking spell.",
      "Her friendship with Damon, built in a prison world neither of them chose, becomes the most convincing relationship in the last four seasons.",
      "Enzo is her one real love, killed by Stefan, and she nearly burns down the world over it."
    ],
    "peopleInvolved": [
      "bonnie",
      "sheila",
      "abby",
      "elena",
      "damon",
      "enzo",
      "jeremy",
      "kai"
    ],
    "leadsTo": [
      {
        "node": "bennett",
        "relation": "last of"
      },
      {
        "node": "anchor",
        "relation": "holds"
      },
      {
        "node": "osidefall",
        "relation": "fails with"
      },
      {
        "node": "curetaken",
        "relation": "linked to"
      }
    ]
  },
  {
    "id": "originaldeaths",
    "title": "Killing an Original",
    "era": "V — The Doppelgänger War",
    "dated": "2012",
    "category": "Vampires",
    "summary": "White oak, at last. Finn dies in 2012 and takes a whole sireline with him — which is how everybody learns the rule. From that point the entire cast is one stake away from mass extinction, and the question of who sired whose line stops being trivia and becomes a survival problem.",
    "facts": [
      "Kol dies in 2012 by white oak, in Mystic Falls, at Jeremy's hands, and the fallout is enormous.",
      "Esther and Mikael both return from death in this stretch. Neither stays.",
      "Alaric is turned by Esther in 2012 into an Enhanced Original Vampire — a vampire built to exterminate vampires, briefly the most dangerous thing alive, and undone by his link to Elena's life.",
      "Kol is burned alive by Jeremy and Elena in 2012 in order to hunt the cure. Kol's whole sireline goes with him, and the show barely pauses.",
      "The rule is applied loosely afterwards; The Originals eventually settles it, which is the version this codex uses."
    ],
    "peopleInvolved": [
      "finn",
      "kol",
      "klaus",
      "elijah",
      "rebekah",
      "jeremy",
      "alaric",
      "esther"
    ],
    "leadsTo": [
      {
        "node": "whiteoak",
        "relation": "uses"
      },
      {
        "node": "sirelines",
        "relation": "proves"
      },
      {
        "node": "curehunt",
        "relation": "triggers"
      }
    ]
  },
  {
    "id": "curehunt",
    "title": "The Hunt for the Cure",
    "era": "V — The Doppelgänger War",
    "dated": "2012–2013",
    "category": "Origins & Immortals",
    "summary": "The hunter's map, Professor Shane, an island with a tomb under it, and the slow realisation that the cure comes attached to a two-thousand-year-old immortal who has been feeding Bonnie instructions in the shape of her dead grandmother. Katherine takes the cure. Silas gets loose.",
    "facts": [
      "Every faction wants it for a different reason: Klaus to make Elena human again for hybrid blood, Elijah for Katherine, Damon and Stefan for Elena, Silas to die.",
      "Professor Atticus Shane engineers the whole expedition — twelve human sacrifices, twelve vampires, twelve hybrids — to raise Silas and get his wife back.",
      "Silas appears to Bonnie as Grams for most of a season, which is a genuinely cruel piece of manipulation.",
      "Jeremy Gilbert is killed by Silas on the island. Bonnie's attempt to bring him back is what starts breaking the Other Side."
    ],
    "peopleInvolved": [
      "shane",
      "connor",
      "jeremy",
      "vaughn",
      "silas",
      "bonnie",
      "katherine",
      "elijah",
      "klaus"
    ],
    "leadsTo": [
      {
        "node": "five",
        "relation": "follows"
      },
      {
        "node": "cure",
        "relation": "seeks"
      },
      {
        "node": "silasrises",
        "relation": "frees"
      }
    ]
  },
  {
    "id": "silasrises",
    "title": "Silas Rises",
    "era": "V — The Doppelgänger War",
    "dated": "2013",
    "category": "Origins & Immortals",
    "summary": "Desiccated for two thousand years, Silas walks out wearing Stefan's face — because Stefan is his doppelgänger — and starts dismantling the Other Side so he can die and be with Amara. Qetsiyah, calling herself Tessa, comes back to stop him. Both are dead within the year, and the damage they do is permanent.",
    "facts": [
      "Amara is found alive, cured, and dies human within days, having been conscious for two millennia.",
      "Stefan spends a summer at the bottom of a quarry in a safe. The show does not really recover his character from it, and says so.",
      "Qetsiyah returns as \"Tessa\" and immediately starts a fight she has been waiting two thousand years for.",
      "Silas throws Stefan, in a safe, into a quarry, and leaves him there for three months. Stefan comes out with no memory and never really recovers.",
      "Amara, freed at last, kills herself the moment she is able. Both immortals die within an episode of each other."
    ],
    "peopleInvolved": [
      "silas",
      "qetsiyah",
      "amara",
      "stefan",
      "bonnie",
      "damon"
    ],
    "leadsTo": [
      {
        "node": "silas",
        "relation": "is"
      },
      {
        "node": "otherside",
        "relation": "breaks"
      },
      {
        "node": "osidefall",
        "relation": "begins"
      }
    ]
  },
  {
    "id": "markos",
    "title": "Markos & the Fall of Magic",
    "era": "V — The Doppelgänger War",
    "dated": "2014",
    "category": "Witches & Magic",
    "summary": "The Travelers finally get both living doppelgängers into one place and cast. It breaks the curse on them and simultaneously unmakes every other form of magic inside the town's borders — which is why Mystic Falls spends a season as a place where witches cannot cast and vampires cannot heal.",
    "facts": [
      "Vampires who enter the zone start dying of their original cause of death. It is the best single mechanic the show ever built.",
      "Killing Markos costs Damon and Elena their lives, temporarily — and the anti-magic border outlives them, until Kai Parker siphons it out of the ground months later.",
      "Travelers possess dozens of townspeople, including Sheriff Forbes, to gather enough witches for the spell.",
      "Once the spell lands, any vampire inside the town limits begins to die of whatever killed them originally. Vampires older than a century simply desiccate.",
      "Damon and Elena blow up the Grill with the Travelers inside; Bonnie has to become a doorway for the dead at the exact moment the Other Side falls."
    ],
    "peopleInvolved": [
      "markos",
      "stefan",
      "elena",
      "bonnie",
      "caroline",
      "liz",
      "tyler"
    ],
    "leadsTo": [
      {
        "node": "travelers",
        "relation": "led"
      },
      {
        "node": "doppel",
        "relation": "ends"
      },
      {
        "node": "osidefall",
        "relation": "coincides with"
      }
    ]
  },
  {
    "id": "osidefall",
    "title": "The Other Side Collapses",
    "era": "V — The Doppelgänger War",
    "dated": "2014",
    "category": "Death & Afterlives",
    "summary": "Two thousand years of accumulated damage — Silas, Qetsiyah, the Travelers, and one exhausted Bennett holding it up — and the purgatory disintegrates. A handful of the dead push back through into life. Most are simply unmade. Damon and Bonnie land in a prison world instead of nowhere.",
    "facts": [
      "This is the moment the franchise loses its resurrection button, and it is why Hell has to be invented two seasons later.",
      "Everyone who does not make it through is gone in a way nothing in this world usually is.",
      "Some of the dead come back through Bonnie as she holds the doorway: Alaric, Enzo, Stefan and others make it. Lexi does not.",
      "Grams uses the last of her power to push Bonnie and Damon somewhere rather than let them be unmade — which is how they land in 1994.",
      "After this, death in the franchise is close to permanent, and the show's whole tone shifts."
    ],
    "peopleInvolved": [
      "bonnie",
      "damon",
      "silas",
      "qetsiyah",
      "markos",
      "lexi",
      "alaric",
      "enzo"
    ],
    "leadsTo": [
      {
        "node": "otherside",
        "relation": "destroys"
      },
      {
        "node": "cade",
        "relation": "makes room for"
      },
      {
        "node": "prisonworld",
        "relation": "strands them in"
      }
    ]
  },
  {
    "id": "hereticwar",
    "title": "The Heretic War",
    "era": "V — The Doppelgänger War",
    "dated": "2015–2016",
    "category": "Vampires",
    "summary": "Lily's siphoner-vampire family takes Mystic Falls, drives the population out and forces the whole cast into a three-year time jump. The town is literally evacuated. It is the strangest structural decision the show ever makes and it works better than it has any right to.",
    "facts": [
      "Alaric returns from the Armory with a wife, twins-in-progress and a research library.",
      "Enzo, Bonnie, Caroline and Alaric's arcs all reset here into the shape that carries them into Legacies.",
      "Mystic Falls is evacuated and stays empty for three years. The show cuts forward and shows you the wreckage before explaining it.",
      "Caroline carries Alaric and Jo's twins after Jo is killed at their wedding by Kai.",
      "Julian, Lily's old love, arrives from the prison world and is the arc's actual villain — Lily's blindness about him is the tragedy."
    ],
    "peopleInvolved": [
      "lily",
      "valerie",
      "nora",
      "marylouise",
      "beau",
      "julian",
      "stefan",
      "damon",
      "caroline",
      "alaric",
      "bonnie",
      "enzo"
    ],
    "leadsTo": [
      {
        "node": "heretics",
        "relation": "waged by"
      },
      {
        "node": "lily",
        "relation": "led by"
      },
      {
        "node": "school",
        "relation": "clears way for"
      }
    ]
  },
  {
    "id": "curetaken",
    "title": "The Cure, Taken",
    "era": "V — The Doppelgänger War",
    "dated": "2015",
    "category": "Origins & Immortals",
    "summary": "Elena takes the cure and is human again — and then Kai's linking spell ties her life to Bonnie's: Elena sleeps until Bonnie dies. It costs the show its lead for two seasons, and costs Damon a wait he ultimately does not have to finish.",
    "facts": [
      "Bonnie is handed the choice between her own life and her best friend's consciousness, again, which is the fourth time.",
      "The cure survives in Elena's blood, which is what makes the finale possible.",
      "Kai's linking spell is cast at Jo and Alaric's wedding, immediately after he murders the bride.",
      "Damon chooses to give Elena the cure knowing it means losing her for Bonnie's whole life, which the show treats as his first genuinely unselfish act."
    ],
    "peopleInvolved": [
      "elena",
      "bonnie",
      "damon",
      "kai",
      "stefan"
    ],
    "leadsTo": [
      {
        "node": "cure",
        "relation": "uses"
      },
      {
        "node": "prisonworld",
        "relation": "recovered from"
      },
      {
        "node": "elena",
        "relation": "removes"
      },
      {
        "node": "tvdend",
        "relation": "undone at"
      }
    ]
  },
  {
    "id": "hellfire",
    "title": "Hellfire",
    "era": "V — The Doppelgänger War",
    "dated": "2017",
    "category": "Death & Afterlives",
    "summary": "Cade's Hell has a physical anchor beneath Mystic Falls, and the Maxwell bell can pull the fire up through the town — Matt rings it eleven times and lets his dead sister Vicki, sent back by Katherine, ring the twelfth. Katherine is left standing in it. Damon takes the cure out of Stefan's blood and lives. Stefan — human only until he hands the cure on, and a vampire again the moment he does, which is what lets him compel Damon away — walks into the fire to close it, and Bonnie destroys Hell along with him.",
    "facts": [
      "Stefan's last conversation is with Elena, and his last act is giving Damon the human life they both spent 145 years arguing about.",
      "Katherine dies in a burning building for the second time, which is the show's idea of a joke and a good one.",
      "The Maxwell bell, rung twelve times by a Maxwell, opens the hellfire beneath the town. Matt Donovan rings eleven; Vicki, sent back from Hell by Katherine, rings the twelfth, and Matt lets her.",
      "Stefan is cured, then compels Damon to leave, then dies. It is the only ending the character could honestly have had.",
      "Bonnie channels the dead witches of her own line to redirect the fire and destroy Hell, alone, on the street."
    ],
    "peopleInvolved": [
      "cade",
      "katherine",
      "stefan",
      "damon",
      "bonnie",
      "matt",
      "elena",
      "caroline"
    ],
    "leadsTo": [
      {
        "node": "cade",
        "relation": "destroys"
      },
      {
        "node": "katreturn",
        "relation": "kills"
      },
      {
        "node": "tvdend",
        "relation": "leads to"
      }
    ]
  },
  {
    "id": "tvdend",
    "title": "Peace",
    "era": "V — The Doppelgänger War",
    "dated": "2017 →",
    "category": "Death & Afterlives",
    "summary": "Hell is gone and the Other Side has been gone for years, so the dead simply find peace. Bonnie breaks the spell and Elena wakes. She and Damon grow old and die of nothing in particular. Stefan and Lexi are waiting. The Salvatore house becomes a school.",
    "facts": [
      "It is the tidiest ending any of the three shows gets, and the only one that closes its afterlife question properly.",
      "Bonnie survives, travels, and lives. Matt stays as sheriff. Caroline and Alaric open the school with a donation from Klaus.",
      "Damon and Elena grow old together and die of nothing supernatural whatsoever, which is the most radical thing the show ever does.",
      "Stefan finds Lexi. Damon finds Stefan. The last shot is the two brothers, which is what the whole thing was about."
    ],
    "peopleInvolved": [
      "elena",
      "damon",
      "stefan",
      "bonnie",
      "caroline",
      "alaric",
      "matt",
      "lexi",
      "jenna"
    ],
    "leadsTo": [
      {
        "node": "school",
        "relation": "becomes"
      },
      {
        "node": "bonnie",
        "relation": "freed by"
      }
    ]
  },
  {
    "id": "hayley",
    "title": "Hayley Marshall",
    "era": "VI — The Mikaelson Wars",
    "dated": "2011",
    "category": "Wolves & Hybrids",
    "summary": "A werewolf with no idea where she came from, who spends one night with Klaus in the Blue Ridge Mountains and turns up pregnant — which should be impossible, because vampires cannot procreate. It is possible because Klaus was born a werewolf and, technically, is not a vampire the way anyone else is.",
    "facts": [
      "She is the last living heir to the Crescent pack's ruling line, which makes the pregnancy a political event before it is a personal one.",
      "She becomes a hybrid, leads the wolves, and is killed after the seven years apart — by the vampire supremacist Greta Sienna, whom she burns to death in sunlight to save Klaus and Hope. Her death is what finally brings the scattered Mikaelsons back together.",
      "She spent the first season pregnant, hunted by every faction, and used by all of them — and spends the rest of the series becoming the wolves' actual leader.",
      "She dies in the final season, after the seven years apart — taken by the vampire supremacist Greta Sienna while searching for a young wolf called Henry Benoit, and burning in the sun to kill Greta and save Klaus and Hope. Her death is what pulls the scattered Mikaelsons back together.",
      "Her relationship with Elijah is the franchise's longest slow burn and never gets a clean ending."
    ],
    "peopleInvolved": [
      "hayley",
      "klaus",
      "elijah",
      "hope",
      "jackson",
      "marcel"
    ],
    "leadsTo": [
      {
        "node": "hope",
        "relation": "mother of"
      },
      {
        "node": "crescent",
        "relation": "of the"
      },
      {
        "node": "hollowsplit",
        "relation": "dies in"
      }
    ]
  },
  {
    "id": "hope",
    "title": "Hope Mikaelson",
    "era": "VI — The Mikaelson Wars",
    "dated": "2012 →",
    "category": "Wolves & Hybrids",
    "summary": "Born to a werewolf and the Original hybrid: witch by Esther's blood, wolf by Ansel's, vampire by Esther's spell. The first tribrid. Every faction in New Orleans wants her dead or owned before she can walk, and a thousand-year-old bargain has her name on it in advance.",
    "facts": [
      "Her existence is a mathematical consequence of every choice Esther made in era II. The franchise closes its own loop with her.",
      "She spends her childhood hidden, her adolescence at a boarding school, and her adulthood being the most powerful thing alive and hating it.",
      "Born in the bayou during a hurricane, hidden for a year with Rebekah, and hunted by covens who want to channel her before she can speak.",
      "Her witch magic manifests first, her wolf side at puberty, and her vampire side only when she dies with vampire blood in her.",
      "In Legacies she is briefly erased from everyone's memory by Malivore — including her own friends — and has to earn her existence back."
    ],
    "peopleInvolved": [
      "hope",
      "klaus",
      "hayley",
      "freya",
      "elijah",
      "rebekah",
      "landon",
      "josie",
      "lizzie",
      "alaric"
    ],
    "leadsTo": [
      {
        "node": "dahliareturn",
        "relation": "hunted by"
      },
      {
        "node": "hollow",
        "relation": "possessed by"
      },
      {
        "node": "tribrid",
        "relation": "becomes"
      },
      {
        "node": "school",
        "relation": "sent to"
      }
    ]
  },
  {
    "id": "quarter",
    "title": "The French Quarter",
    "era": "VI — The Mikaelson Wars",
    "dated": "2011 →",
    "category": "Bloodlines & Houses",
    "summary": "Three powers, one city. Marcel's vampires hold the streets. Nine covens of witches hold the ancestral magic and the cemeteries. The wolves are shut out of both. Klaus comes home in 2011 to take it back, and the next five years are that fight, restarted every season with different weapons.",
    "facts": [
      "The city itself is the show's fourth Mikaelson: everyone claims it, nobody keeps it, and it outlasts all of them.",
      "Nine covens, one vampire regime, and a wolf population living in the bayou under a curse Marcel ordered in 1991. Every season is a different configuration of the same three-way fight.",
      "Cami O'Connell and her uncle Kieran hold the human faction's seat, which exists mostly so someone in the story can say the obvious thing out loud."
    ],
    "peopleInvolved": [
      "klaus",
      "marcel",
      "davina",
      "vincent",
      "sophie",
      "josh",
      "cami",
      "kieran"
    ],
    "leadsTo": [
      {
        "node": "ancestors",
        "relation": "powered by"
      },
      {
        "node": "marcel",
        "relation": "held by"
      },
      {
        "node": "nola",
        "relation": "continues"
      }
    ]
  },
  {
    "id": "ancestors",
    "title": "Ancestral Magic",
    "era": "VI — The Mikaelson Wars",
    "dated": "centuries",
    "category": "Witches & Magic",
    "summary": "New Orleans witches do not draw on nature or on spirits generally. They draw on their own dead, buried in the city's cemeteries — and the dead have opinions, demands, and the ability to withdraw everything. It gives the covens enormous power and makes them hostage to a committee of ghosts.",
    "facts": [
      "Davina Claire is consecrated, resurrected, and eventually destroys the Ancestors entirely — freeing the witches and removing their power source in the same act.",
      "The Ancestors are also where the Hollow hid, which is the sting in the whole arrangement.",
      "The Harvest ritual sacrifices four girls to renew the coven's connection to the Ancestors; Davina is one of the four and survives it by accident.",
      "The Ancestors punish witches who defy them by cutting them off entirely, and torture the dead who displease them. They are not benign and the show is clear about it.",
      "Davina destroys them permanently, which frees New Orleans witchcraft and instantly makes the covens weaker."
    ],
    "peopleInvolved": [
      "davina",
      "vincent",
      "sophie",
      "monique",
      "genevieve",
      "celeste",
      "inadu"
    ],
    "leadsTo": [
      {
        "node": "quarter",
        "relation": "holds"
      },
      {
        "node": "hollow",
        "relation": "hid among"
      }
    ]
  },
  {
    "id": "dahliareturn",
    "title": "Dahlia Returns",
    "era": "VI — The Mikaelson Wars",
    "dated": "2015",
    "category": "Witches & Magic",
    "summary": "A thousand years late, Esther's sister arrives to collect the firstborn of the next generation: Hope. Freya — the first payment — comes back to help kill her. The family that spent a millennium tearing itself apart holds together for exactly one enemy, and only just.",
    "facts": [
      "Killing Dahlia requires Mikaelson blood, Viking soil and the one thing the family has never managed: cooperation.",
      "Freya arrives claiming to be their sister and is disbelieved for most of a season, which is the family's default setting.",
      "Klaus turns on everyone, including Elijah, to keep Hope safe — a strategy that looks like betrayal and is, for once, not."
    ],
    "peopleInvolved": [
      "dahlia",
      "freya",
      "esther",
      "klaus",
      "elijah",
      "rebekah",
      "hope",
      "hayley"
    ],
    "leadsTo": [
      {
        "node": "dahlia",
        "relation": "is"
      },
      {
        "node": "freya",
        "relation": "opposed by"
      },
      {
        "node": "hope",
        "relation": "hunts"
      }
    ]
  },
  {
    "id": "beast",
    "title": "The Prophecy & the Beast",
    "era": "VI — The Mikaelson Wars",
    "dated": "2016",
    "category": "Vampires",
    "summary": "A prophecy: the Mikaelsons will fall — one by friend, one by foe, one by family. Lucien engineers his half of it, refining Esther's original magic into a serum that makes him an upgraded Original whose bite kills even them. Tristan and Aurora take their own runs at it. All three of the first vampires the family ever made come home to bury them.",
    "facts": [
      "Lucien's serum is later used on Marcel, which is how a bite becomes the only non-white-oak way to kill a Mikaelson.",
      "Every prophecy in this franchise comes true, but never in the way the person avoiding it expects. That is the entire genre working correctly.",
      "The prophecy is delivered by the witch Alexis and comes true in every particular, exactly as everyone tries to prevent it.",
      "Lucien takes a serum derived from Esther's original spell and becomes stronger than the Originals. Marcel takes the same serum later.",
      "Aurora survives everything and is sealed in a box. She is out again by Legacies."
    ],
    "peopleInvolved": [
      "lucien",
      "tristan",
      "aurora",
      "klaus",
      "elijah",
      "marcel",
      "freya",
      "vincent"
    ],
    "leadsTo": [
      {
        "node": "lucien",
        "relation": "made by"
      },
      {
        "node": "sirelines",
        "relation": "targets"
      },
      {
        "node": "hollow",
        "relation": "sets up"
      }
    ]
  },
  {
    "id": "hollow",
    "title": "The Hollow",
    "era": "VI — The Mikaelson Wars",
    "dated": "2017",
    "category": "Witches & Magic",
    "summary": "Inadu: a witch child of extraordinary power born around 500 AD, killed by her own mother with an axe the elders had charged with their magic. Her own dying spell is the origin of the werewolf curse in the region. What she wants now is a suitable body, and the most powerful child in the world is eight years old and living in New Orleans.",
    "facts": [
      "Her power cannot be destroyed, only divided. The Mikaelsons split her four ways and take a quarter each.",
      "Inadu was killed by her own mother with an axe the elders had charged, and her own dying spell created the werewolf curse.",
      "Her power cannot be destroyed, only split. Each Mikaelson takes a quarter and must stay on a different continent.",
      "Vincent Griffith, the only New Orleans witch who consistently refuses to be used, is the one who works out how."
    ],
    "peopleInvolved": [
      "inadu",
      "hope",
      "klaus",
      "elijah",
      "vincent",
      "freya",
      "davina"
    ],
    "leadsTo": [
      {
        "node": "ancestors",
        "relation": "hid in"
      },
      {
        "node": "hollowsplit",
        "relation": "divided into"
      },
      {
        "node": "hope",
        "relation": "wants"
      }
    ]
  },
  {
    "id": "hollowsplit",
    "title": "Seven Years Apart",
    "era": "VI — The Mikaelson Wars",
    "dated": "2018–2025",
    "category": "Bloodlines & Houses",
    "summary": "Klaus, Elijah, Rebekah and Kol each carry a quarter of the Hollow and can never be in the same room again. Hope grows up mostly without her father, writing him letters. Hayley is killed. The last season of The Originals is a family that finally learned how to be together being forbidden from it.",
    "facts": [
      "It is the cruellest and cleanest thing the writers ever did to these characters, and it is the reason the ending lands.",
      "Hope grows up writing letters to Klaus and receiving drawings back, which is the emotional core of the last season.",
      "Klaus spends the seven years on a rampage across Europe, as far from Hope as he can get. The cell was earlier and not voluntary: Marcel kept him in the Garden for five years between the Hollow's defeat and the gap."
    ],
    "peopleInvolved": [
      "klaus",
      "elijah",
      "rebekah",
      "kol",
      "hope",
      "hayley",
      "marcel",
      "freya"
    ],
    "leadsTo": [
      {
        "node": "hollowend",
        "relation": "ends in"
      },
      {
        "node": "hope",
        "relation": "raised through"
      },
      {
        "node": "hayley",
        "relation": "kills"
      }
    ]
  },
  {
    "id": "hollowend",
    "title": "Klaus & Elijah",
    "era": "VI — The Mikaelson Wars",
    "dated": "2018",
    "category": "Vampires",
    "summary": "The Hollow ends up inside Hope, and the only way out is to move it into Klaus and then kill him — which would kill his entire sireline unless the killing is done with Marcel's venom instead of white oak. It is done with white oak in the end. Elijah snaps the last stake in half so they can die at the same moment.",
    "facts": [
      "\"Always and forever,\" finally kept, at the only price that ever made it mean anything.",
      "Klaus's last act is a message to his daughter, which Legacies does not deliver until its final episode.",
      "Hope absorbs the Hollow to save the city, and the only way to draw it out is into Klaus, then kill him.",
      "Klaus and Elijah walk to the bridge together. Elijah snaps the last white oak stake in half so they can run each other through at the same moment.",
      "Because they are killed by white oak and not by venom, the sireline question is finally, definitively closed."
    ],
    "peopleInvolved": [
      "klaus",
      "elijah",
      "hope",
      "marcel",
      "rebekah",
      "freya",
      "caroline"
    ],
    "leadsTo": [
      {
        "node": "hope",
        "relation": "saves"
      },
      {
        "node": "sirelines",
        "relation": "ends"
      },
      {
        "node": "marcel",
        "relation": "venom of"
      },
      {
        "node": "freyakeelin",
        "relation": "leaves behind"
      }
    ]
  },
  {
    "id": "freyakeelin",
    "title": "What’s Left of the Family",
    "era": "VI — The Mikaelson Wars",
    "dated": "2018 →",
    "category": "Bloodlines & Houses",
    "summary": "Rebekah takes the cure and a mortal life, with Marcel, and plans to grow old. Kol and Davina leave together. Freya marries Keelin. Hope inherits a fortune, a place at a school in Virginia, and a father she will spend four more seasons trying not to become.",
    "facts": [
      "Rebekah wanted to be human from the first season of The Vampire Diaries. She waits about nine years of screen time for it.",
      "Rebekah is promised the cure once Damon and Elena are finished with their mortal lives, and plans to grow old with Marcel.",
      "Klaus leaves his entire fortune to Hope, and a recorded message that Legacies does not deliver until its final episode."
    ],
    "peopleInvolved": [
      "freya",
      "keelin",
      "rebekah",
      "marcel",
      "kol",
      "davina",
      "hope",
      "caroline"
    ],
    "leadsTo": [
      {
        "node": "school",
        "relation": "endows"
      },
      {
        "node": "freya",
        "relation": "includes"
      }
    ]
  },
  {
    "id": "school",
    "title": "The Salvatore School",
    "era": "VII — The Legacies",
    "dated": "2018 →",
    "category": "Bloodlines & Houses",
    "summary": "The Salvatore boarding house, funded with Mikaelson money and run by Alaric Saltzman, turned into a school for young witches, vampires and wolves — somewhere supernatural children learn to hide in plain sight rather than be hunted for what they are. Caroline Forbes co-founds it and spends most of Legacies recruiting off-screen.",
    "facts": [
      "It is the franchise's one genuinely optimistic idea: the thing that killed all these people is now a curriculum.",
      "Matt Donovan is still the sheriff. Jeremy Gilbert turns up. Mystic Falls never lets anyone leave.",
      "The school takes in witches, vampires and wolves and hides them behind a cloaking spell and a boarding-school prospectus.",
      "Dorian Williams runs the library; Emma Tig is the school counsellor and a witch; Matt Donovan is the sheriff who covers for them.",
      "It is Caroline's idea and Klaus's money, which is a sentence that would have made no sense to anyone in 2010."
    ],
    "peopleInvolved": [
      "alaric",
      "caroline",
      "hope",
      "josie",
      "lizzie",
      "matt",
      "jeremy",
      "dorian",
      "emma",
      "mg",
      "kaleb",
      "rafael"
    ],
    "leadsTo": [
      {
        "node": "tvdend",
        "relation": "built on"
      },
      {
        "node": "twins",
        "relation": "houses"
      },
      {
        "node": "hope",
        "relation": "houses"
      },
      {
        "node": "freyakeelin",
        "relation": "funded by"
      }
    ]
  },
  {
    "id": "twins",
    "title": "Josie & Lizzie Saltzman",
    "era": "VII — The Legacies",
    "dated": "2014 →",
    "category": "Witches & Magic",
    "summary": "Alaric and Caroline's daughters. Conceived from Alaric and Jo's embryos, magically moved into Caroline when Jo was killed, and born Gemini twins — and siphoners, with no magic of their own, able only to draw it out of other magical things.",
    "facts": [
      "Josie siphons; Lizzie is loud, bipolar in the show's own words, and the more sympathetic of the two by a distance.",
      "They are the Gemini coven's last generation, which is the entire problem.",
      "Josie is the accommodating one, Lizzie the loud one, and the show is honest that the family dynamic set that up rather than nature.",
      "Josie goes dark in season two, absorbing enormous power and nearly killing everyone, and the recovery is treated seriously.",
      "Lizzie's arc is about being told she is the problem for long enough that she believes it."
    ],
    "peopleInvolved": [
      "josie",
      "lizzie",
      "alaric",
      "caroline",
      "jo",
      "kai",
      "joshuaparker"
    ],
    "leadsTo": [
      {
        "node": "gemini",
        "relation": "of the"
      },
      {
        "node": "merge",
        "relation": "face"
      },
      {
        "node": "school",
        "relation": "attend"
      }
    ]
  },
  {
    "id": "merge",
    "title": "The Merge",
    "era": "VII — The Legacies",
    "dated": "looms",
    "category": "Witches & Magic",
    "summary": "The Gemini tradition, aimed at two teenagers: at twenty-two, Josie and Lizzie must merge, and one of them will die. Alaric spends four seasons trying to break a rule written by a coven that no longer exists. In the end nobody breaks it: Hope kills Lizzie with her humanity off, Lizzie transitions into a vampire, and a vampire is not eligible to merge.",
    "facts": [
      "The coven is dead. The rule is not. Legacies is at its best when it is about inherited obligations nobody alive agreed to.",
      "Every Gemini merge on record: Kai and Jo (never completed), then Kai and Luke, who takes his sister's place and loses.",
      "Alaric's four-season project to break the tradition fails. What ends it is an accident: Hope, humanity off, kills Lizzie, and Lizzie comes back a vampire. Vampires cannot merge."
    ],
    "peopleInvolved": [
      "josie",
      "lizzie",
      "alaric",
      "kai",
      "jo",
      "joshuaparker",
      "luke",
      "liv"
    ],
    "leadsTo": [
      {
        "node": "gemini",
        "relation": "set by"
      },
      {
        "node": "legacyend",
        "relation": "broken at"
      }
    ]
  },
  {
    "id": "malivore",
    "title": "Malivore",
    "era": "VII — The Legacies",
    "dated": "ancient →",
    "category": "Death & Afterlives",
    "summary": "A pit made by a witch, a vampire and a werewolf — the triad — to swallow monsters and erase them from the world entirely. It works: anything Malivore consumes is forgotten by everyone who ever knew it. It has been eating the supernatural for centuries, which is a tidy explanation for why the first two shows never mentioned dragons.",
    "facts": [
      "Every monster Legacies fights is something Malivore already swallowed once and is trying to get back.",
      "Its golden mud is the show's most consistent visual, and the erasure mechanic is the smartest thing it invents.",
      "Built by a triad — a witch, a vampire and a werewolf, one from each species — to erase monsters from existence.",
      "Malivore's erasure is total: when it takes something, every record and every memory of it goes too. Characters keep re-learning facts they already knew.",
      "Landon and Clarke are both Malivore's sons, made to be its retrieval agents."
    ],
    "peopleInvolved": [
      "landon",
      "clarke",
      "hope",
      "necromancer",
      "ken"
    ],
    "leadsTo": [
      {
        "node": "landon",
        "relation": "father of"
      },
      {
        "node": "gods",
        "relation": "releases"
      },
      {
        "node": "tribrid",
        "relation": "destroyed by"
      }
    ]
  },
  {
    "id": "landon",
    "title": "Landon Kirby",
    "era": "VII — The Legacies",
    "dated": "2018 →",
    "category": "Death & Afterlives",
    "summary": "A foster kid with no idea what he is: Malivore's son, and a phoenix — he resurrects every time he dies, which is often. He is what the pit wants back, and he is the show's argument that being a monster is a job description rather than a nature.",
    "facts": [
      "Clarke, his half-brother, is Malivore's other son and considerably worse at being a person.",
      "He is a phoenix: burned, drowned, stabbed and shot, and he keeps coming back, which the show plays for both comedy and horror — until the last time, when he does not, and becomes Limbo's ferryman instead.",
      "Raised in foster care with Rafael Waithe, who is a werewolf and the person he trusts most."
    ],
    "peopleInvolved": [
      "landon",
      "rafael",
      "hope",
      "clarke",
      "mg"
    ],
    "leadsTo": [
      {
        "node": "malivore",
        "relation": "son of"
      },
      {
        "node": "tribrid",
        "relation": "dies for"
      }
    ]
  },
  {
    "id": "tribrid",
    "title": "Hope Becomes the Tribrid",
    "era": "VII — The Legacies",
    "dated": "2021",
    "category": "Wolves & Hybrids",
    "summary": "Hope's vampire nature stays dormant until she dies with vampire blood in her system. When she finally activates it she is the first fully-realised tribrid — and because a tribrid's vampire half comes with a humanity switch, briefly the most dangerous thing that has ever existed. Malivore is destroyed. So, nearly, is everyone else.",
    "facts": [
      "The switch is flipped off for a long stretch, and the show finally cashes in a thousand years of Mikaelson temper in one person.",
      "Klaus's daughter turning off her humanity to survive grief is the most on-theme thing the franchise ever does.",
      "Her transition requires her to die with vampire blood in her system, and she resists it for two full seasons.",
      "With her humanity off she is stronger than any Original ever was and the school has no mechanism to stop her.",
      "Turning it back on costs her more than the fight did, which is the same beat TVD ran with Stefan, done with the volume up."
    ],
    "peopleInvolved": [
      "hope",
      "landon",
      "alaric",
      "josie",
      "lizzie",
      "cleo",
      "mg"
    ],
    "leadsTo": [
      {
        "node": "hope",
        "relation": "is"
      },
      {
        "node": "malivore",
        "relation": "destroys"
      },
      {
        "node": "legacyend",
        "relation": "gives up at"
      }
    ]
  },
  {
    "id": "gods",
    "title": "The Gods Return",
    "era": "VII — The Legacies",
    "dated": "2021–2022",
    "category": "Witches & Magic",
    "summary": "With Malivore gone, the things it swallowed come back — and a pantheon that had slept through it in sarcophagi wakes up, Ken among them. Aurora de Martel arrives by a different route: Klaus entombed her in a wall, and Lucien let her out. The last season is the oldest characters in the franchise turning up at a high school.",
    "facts": [
      "Aurora appearing in Legacies is the only direct tissue connecting era II to era VII in a single living body.",
      "Ken is a god who slept through Malivore's reign in a sarcophagus rather than be eaten by it, and wakes when the pit dies to reclaim the world.",
      "Cleo Sowande is a muse whose power is inspiration itself, and she is the season's most interesting new idea.",
      "Aurora de Martel — turned by Rebekah in the 11th century — is the only character on screen who remembers the world before vampires existed."
    ],
    "peopleInvolved": [
      "ken",
      "aurora",
      "cleo",
      "hope",
      "lizzie",
      "josie",
      "necromancer"
    ],
    "leadsTo": [
      {
        "node": "lucien",
        "relation": "returns with"
      },
      {
        "node": "malivore",
        "relation": "freed by"
      },
      {
        "node": "legacyend",
        "relation": "fought at"
      }
    ]
  },
  {
    "id": "legacyend",
    "title": "How It Ends",
    "era": "VII — The Legacies",
    "dated": "2022 →",
    "category": "Bloodlines & Houses",
    "summary": "Josie and Lizzie never have to merge. Hope remains the tribrid, and what the show finally gives her is a life she has to keep living rather than an exit from it. Caroline comes home to run the school. And Klaus's last message to his daughter is the final word in the franchise — a recording Landon retrieves from Limbo, in which Klaus tells her she is his peace and that he regrets none of it.",
    "facts": [
      "Two thousand years from one badly cast immortality spell, and it ends with a school staying open and a father getting a recording through from the other side of death.",
      "Josie and Lizzie find a third option to the Merge, which is what four seasons of Alaric's research could not.",
      "Hope stays the tribrid and stays immortal. The loop Esther opened a thousand years earlier does not close; Hope simply agrees to keep carrying it.",
      "Klaus's last message is delivered at last — a recording Landon pulls out of Limbo and plays for Hope on a conjured screen. It is the last line of the franchise, and it is aimed squarely at anyone who watched all 331 episodes."
    ],
    "peopleInvolved": [
      "hope",
      "josie",
      "lizzie",
      "alaric",
      "caroline",
      "klaus",
      "landon",
      "mg",
      "cleo"
    ],
    "leadsTo": [
      {
        "node": "merge",
        "relation": "resolves"
      },
      {
        "node": "tribrid",
        "relation": "ends"
      },
      {
        "node": "school",
        "relation": "continues"
      }
    ]
  }
]
