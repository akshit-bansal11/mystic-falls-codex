import type { Person } from '@/types/codex/person'

export const PEOPLE: Person[] = [
  {
    "id": "silas",
    "name": "Silas",
    "alsoKnownAs": "The world’s first immortal",
    "lived": "c. 100 BC – 2013",
    "kind": "Immortal",
    "house": "None",
    "appearsIn": "TVD",
    "group": "ancients",
    "category": "origin",
    "oneLine": "The man the whole franchise is a consequence of.",
    "biography": [
      "A warlock of the ancient world, engaged to the most powerful witch alive, who talked her into creating an immortality elixir and then drank it with her handmaiden. Qetsiyah buried him alive on an island with the only cure beside him, so that his only escape would be to become mortal, die, and be trapped on her Other Side forever rather than find peace with Amara.",
      "He spent two thousand years desiccated in a tomb, conscious, and came out in 2013 with a powerful psychic gift and one goal: destroy the Other Side, die, and find Amara. He got two out of three. Amara was already free, already cured, and killed herself within days. Silas was cured with Katherine's blood and killed by Stefan Salvatore, whose face he had been wearing for months."
    ],
    "facts": [
      "Immortality here is not vampirism — he ages not at all, walks in daylight, eats normally, and cannot be staked.",
      "His psychic power lets him make anyone see anything, which is how he impersonates Stefan for most of a season without being caught.",
      "Stefan Salvatore is his doppelgänger, which is the entire reason they look alike.",
      "He spent a season pretending to be Bonnie Bennett's dead grandmother in order to manipulate her."
    ],
    "connections": [
      {
        "id": "qetsiyah",
        "relation": "betrothed to"
      },
      {
        "id": "amara",
        "relation": "loved"
      },
      {
        "id": "stefan",
        "relation": "his doppelgänger"
      },
      {
        "id": "bonnie",
        "relation": "manipulated"
      },
      {
        "id": "shane",
        "relation": "served by"
      }
    ]
  },
  {
    "id": "qetsiyah",
    "name": "Qetsiyah",
    "alsoKnownAs": "“Tessa”",
    "lived": "c. 100 BC – 2013",
    "kind": "Witch (immortal by proxy)",
    "house": "Founder of Spirit magic",
    "appearsIn": "TVD",
    "group": "ancients",
    "category": "witch",
    "oneLine": "The architect of nearly every rule in this universe.",
    "biography": [
      "The strongest witch of the ancient world and the origin of what later witches call Spirit or Traditional magic. She created the immortality elixir at Silas's request, expecting to drink it with him. When she found out he intended it for her handmaiden, she constructed a revenge with more engineering in it than most religions: she buried him alive with the only cure, built the Other Side as a purgatory designed to hold him, and turned Amara into its living Anchor.",
      "Two thousand years later she was still angry enough to create the Brotherhood of the Five — five hunters carrying a living map to Silas's tomb — purely so that someone would eventually dig him up and cure him. She returns in 2013 calling herself Tessa, fights Silas one last time, and then kills herself so she can be waiting for him on the Other Side. It works: Stefan kills Silas, and Silas lands on the Other Side rather than in peace with Amara."
    ],
    "facts": [
      "Bonnie Bennett is descended from her, which is why Bennett magic keeps turning out to be structurally necessary to the Other Side.",
      "She and Silas were both Travelers. It was the wider witch community, frightened that a coven that powerful could unbalance nature the way she just had, that cursed them with permanent homelessness.",
      "She is the one who states the franchise's only real law out loud: nature demands balance. She takes her own life in 2013 so she can be waiting for Silas on the Other Side.",
      "She wins the part she cared about. Silas is killed by his own doppelgänger and lands on the Other Side instead of finding peace with Amara — and when the Other Side collapses, he is pulled into Hell."
    ],
    "connections": [
      {
        "id": "silas",
        "relation": "betrothed to"
      },
      {
        "id": "amara",
        "relation": "punished"
      },
      {
        "id": "bonnie",
        "relation": "ancestor of"
      },
      {
        "id": "markos",
        "relation": "cursed"
      },
      {
        "id": "cade",
        "relation": "preceded"
      }
    ]
  },
  {
    "id": "amara",
    "name": "Amara",
    "alsoKnownAs": "The first Anchor",
    "lived": "c. 100 BC – 2013",
    "kind": "Immortal",
    "house": "Handmaiden to Qetsiyah",
    "appearsIn": "TVD",
    "group": "ancients",
    "category": "origin",
    "oneLine": "The face every Petrova wears, and the doorway every dead supernatural walks through.",
    "biography": [
      "Qetsiyah's handmaiden, and the woman Silas chose. She drank the second dose of the elixir. Qetsiyah did not kill her — she made her the Anchor to the Other Side, immortal and conscious, and every supernatural death for the next two thousand years passed physically through her. She was kept in a stone box. Silas was shown a body and allowed to believe she was dead.",
      "She is freed in 2013, by which point she is not remotely sane and wants nothing except to stop existing. She takes the cure — and once Stefan has killed Silas, she picks up the same blade and stabs herself, dying human minutes after him."
    ],
    "facts": [
      "Every Petrova doppelgänger — Tatia, Katherine, Elena — is a copy of her face, printed by nature as a correction for her immortality.",
      "Bonnie Bennett takes the Anchor role from her, which is why Bonnie can suddenly touch the dead.",
      "She is the oldest continuously conscious being in the franchise: roughly two thousand years without sleep, sedation or company."
    ],
    "connections": [
      {
        "id": "silas",
        "relation": "loved"
      },
      {
        "id": "qetsiyah",
        "relation": "served"
      },
      {
        "id": "elena",
        "relation": "her doppelgänger"
      },
      {
        "id": "bonnie",
        "relation": "succeeded by"
      }
    ]
  },
  {
    "id": "cade",
    "name": "Arcadius",
    "alsoKnownAs": "Cade · the Devil",
    "lived": "before 2200 BC – 2017",
    "kind": "Psychic → a dimension",
    "house": "Hell",
    "appearsIn": "TVD",
    "group": "ancients",
    "category": "death",
    "oneLine": "What was underneath the Other Side the whole time.",
    "biography": [
      "A genuine psychic of the deep BC era — the wiki puts his birth before 2200 BC and his burning before 750 BC — killed at the stake by people frightened of what he could see. He did not stop existing. His consciousness became a dimension that consumes the souls of the guilty — functionally Hell, with a proprietor who negotiates rather than damns and who keeps a ledger of everyone who owes him.",
      "He was there for eighteen hundred years before anyone in the story noticed, and once the Other Side collapsed in 2014, his Hell is where dead supernaturals went. He is destroyed in 2017 — stabbed by Stefan Salvatore with a dagger forged from his own bone and ash — and the whole dimension is then unmade by Bonnie Bennett."
    ],
    "facts": [
      "He never lies and never breaks a deal, which somehow makes him worse.",
      "He made Sybil and Seline immortal and sent them out to harvest souls for him.",
      "Hell has a physical anchor beneath Mystic Falls, which is the only reason it can be destroyed.",
      "Katherine Pierce inherits the throne after he dies, which is the funniest thing the show ever does."
    ],
    "connections": [
      {
        "id": "sybil",
        "relation": "made"
      },
      {
        "id": "seline",
        "relation": "made"
      },
      {
        "id": "stefan",
        "relation": "collected"
      },
      {
        "id": "damon",
        "relation": "collected"
      },
      {
        "id": "katherine",
        "relation": "succeeded by"
      },
      {
        "id": "bonnie",
        "relation": "destroyed by"
      }
    ]
  },
  {
    "id": "sybil",
    "name": "Sybil",
    "alsoKnownAs": "The first siren",
    "lived": "antiquity – 2017",
    "kind": "Siren (immortal)",
    "house": "Cade",
    "appearsIn": "TVD",
    "group": "ancients",
    "category": "death",
    "oneLine": "Psychic enslavement with no counter.",
    "biography": [
      "One of two sisters shipwrecked in antiquity, kept alive by Cade and made immortal in exchange for delivering him souls. Sirens lure people psychically, take total control of their minds, and eat. The show does not soften the cannibalism.",
      "Sealed in the St. John family's Armory vault for centuries, released in 2016, and immediately in Damon and Stefan's heads. Her control does not require eye contact and cannot be blocked by vervain, which makes her the one antagonist against whom the town's standard defences do nothing at all."
    ],
    "facts": [
      "Seline is her sister, and betrayed her — Sybil spent most of their shared history believing a lie about their origin.",
      "Anyone who hears her voice in the vault belongs to her, which is how the Armory falls."
    ],
    "connections": [
      {
        "id": "seline",
        "relation": "sister"
      },
      {
        "id": "cade",
        "relation": "serves"
      },
      {
        "id": "damon",
        "relation": "enslaved"
      },
      {
        "id": "stefan",
        "relation": "enslaved"
      },
      {
        "id": "enzo",
        "relation": "tormented"
      }
    ]
  },
  {
    "id": "seline",
    "name": "Seline",
    "alsoKnownAs": "The twins’ nanny",
    "lived": "antiquity – 2017",
    "kind": "Siren (immortal)",
    "house": "Cade",
    "appearsIn": "TVD",
    "group": "ancients",
    "category": "death",
    "oneLine": "The one who was looking for replacements.",
    "biography": [
      "Sybil's sister, and the more patient of the two. She spent months posing as Josie and Lizzie Saltzman's nanny while grooming them to become the next pair of sirens, so she and Sybil could finally stop working for Cade.",
      "She is the one who tells the truth about their origin in the end, which is the closest thing to a conscience anyone in Cade's employ has."
    ],
    "facts": [
      "Her long game is escape, not power — she has been trying to get out of Cade's service for two thousand years.",
      "She is the reason the Saltzman twins spend a season being the most interesting characters on the show."
    ],
    "connections": [
      {
        "id": "sybil",
        "relation": "sister"
      },
      {
        "id": "cade",
        "relation": "serves"
      },
      {
        "id": "josie",
        "relation": "targeted"
      },
      {
        "id": "lizzie",
        "relation": "targeted"
      },
      {
        "id": "alaric",
        "relation": "deceived"
      }
    ]
  },
  {
    "id": "inadu",
    "name": "Inadu",
    "alsoKnownAs": "The Hollow",
    "lived": "c. 500 – 2018",
    "kind": "Witch → dark force",
    "house": "The Labonair line’s tribe",
    "appearsIn": "TO",
    "group": "ancients",
    "category": "witch",
    "oneLine": "The reason werewolves in the region exist at all.",
    "biography": [
      "A witch child of extraordinary power born to a tribe around 500 AD, killed by her own mother with an axe the elders had charged with their magic after she began killing to grow stronger. Her own dying spell created the region's werewolf curse — which is why the wolf line and the Mikaelson story converge at all.",
      "She is not alive and not dead, and she wants a suitable body. In the 21st century the most powerful child in the world is eight years old and living in New Orleans. Her power cannot be destroyed, only divided; the Mikaelsons split it four ways and scatter to opposite ends of the earth to keep her from re-forming."
    ],
    "facts": [
      "She hid inside the Ancestors of New Orleans, which is why destroying them was both necessary and useless.",
      "She is the last villain the Mikaelsons face and the only one who costs them Klaus and Elijah."
    ],
    "connections": [
      {
        "id": "hope",
        "relation": "wants"
      },
      {
        "id": "klaus",
        "relation": "killed"
      },
      {
        "id": "elijah",
        "relation": "killed"
      },
      {
        "id": "vincent",
        "relation": "opposed by"
      },
      {
        "id": "freya",
        "relation": "contained by"
      }
    ]
  },
  {
    "id": "markos",
    "name": "Markos",
    "alsoKnownAs": "Leader of the Travelers",
    "lived": "ancient – 2014",
    "kind": "Traveler witch",
    "house": "The Travelers",
    "appearsIn": "TVD",
    "group": "ancients",
    "category": "witch",
    "oneLine": "Two thousand years of homelessness, cashed in at once.",
    "biography": [
      "The leader of the witches who took Silas's side against Qetsiyah and were cursed to wander forever. Markos passes his consciousness from body to body across the centuries and finally, in 2014, gets what every Traveler since the beginning has been chasing: both living doppelgängers in one place at one time.",
      "The spell breaks the curse on the Travelers and simultaneously unmakes every other kind of magic inside Mystic Falls. Vampires in the town start dying of whatever killed them originally. It is the most effective thing any villain in the franchise achieves, and it costs Bonnie and Damon their lives to reverse."
    ],
    "facts": [
      "Travelers possess bodies rather than reincarnate; a Traveler's death is a change of address.",
      "Sheriff Liz Forbes, Stefan and half the town are used as vessels in the run-up."
    ],
    "connections": [
      {
        "id": "qetsiyah",
        "relation": "cursed by"
      },
      {
        "id": "stefan",
        "relation": "used"
      },
      {
        "id": "elena",
        "relation": "used"
      },
      {
        "id": "bonnie",
        "relation": "opposed by"
      }
    ]
  },
  {
    "id": "mikael",
    "name": "Mikael",
    "alsoKnownAs": "The Destroyer · the Vampire who hunts vampires",
    "lived": "10th century – 2011 / 2015",
    "kind": "Original vampire",
    "house": "Mikaelson",
    "appearsIn": "TVD · TO",
    "group": "mikaelson",
    "category": "vamp",
    "oneLine": "The worst father in a franchise with a lot of competition.",
    "biography": [
      "A warrior of the Old World who despised weakness and made that his children's entire childhood. When Esther's spell made them all vampires, Mikael became the thing that hunts them: he feeds on other vampires rather than on people, and he chased his own children across nine centuries and three continents.",
      "He learned that Niklaus was not his son, killed Ansel, his family and half the village's wolves in a night, and spent the next thousand years telling Klaus exactly what he thought of him. Klaus finally kills him with white oak in Mystic Falls in 2011. He is brought back once afterwards, by Davina in New Orleans, and is in both cities the only person Klaus is genuinely afraid of."
    ],
    "facts": [
      "He kept one white oak stake back after Esther burned the tree — the only weapon that could kill his own children.",
      "He can be summoned and pinned by a witch, which is how Klaus eventually manages it.",
      "Rebekah summoned him to New Orleans in 1919 hoping he would kill Klaus. He nearly killed everyone."
    ],
    "connections": [
      {
        "id": "esther",
        "relation": "married to"
      },
      {
        "id": "klaus",
        "relation": "not his son"
      },
      {
        "id": "rebekah",
        "relation": "daughter"
      },
      {
        "id": "elijah",
        "relation": "son"
      },
      {
        "id": "finn",
        "relation": "son"
      },
      {
        "id": "kol",
        "relation": "son"
      },
      {
        "id": "ansel",
        "relation": "killed"
      }
    ]
  },
  {
    "id": "esther",
    "name": "Esther",
    "alsoKnownAs": "The Original Witch",
    "lived": "10th century – 2012 / 2015",
    "kind": "Witch",
    "house": "Mikaelson",
    "appearsIn": "TVD · TO",
    "group": "mikaelson",
    "category": "witch",
    "oneLine": "Everything catastrophic in this world is downstream of one decision she made.",
    "biography": [
      "A witch of the Old World, trained alongside Ayana, married to Mikael, and unable to have children until her sister Dahlia made her fertile in exchange for the firstborn of every generation of their line. She paid with Freya and hid the rest. She had an affair with a werewolf named Ansel and bore Niklaus. And when her youngest son Henrik was killed by wolves, she refused to bury another child and cast the immortality spell that created vampires.",
      "She also bound Klaus's werewolf side to keep Mikael from killing him, and never told Klaus why he was different. Klaus killed her for it and blamed Mikael. She returns from the dead twice — in Mystic Falls and in New Orleans — both times intending to undo her own work, and neither attempt succeeds."
    ],
    "facts": [
      "Ayana warned her the spirits would not stand for it. She used Ayana's own talisman and cast anyway.",
      "Her second return involves trying to move her children's souls into new mortal bodies, which they consider a threat rather than a gift.",
      "She is the most powerful witch in the franchise's history and the most destructive person in it, and those two facts are the same fact."
    ],
    "connections": [
      {
        "id": "mikael",
        "relation": "married to"
      },
      {
        "id": "dahlia",
        "relation": "sister"
      },
      {
        "id": "ansel",
        "relation": "lover"
      },
      {
        "id": "ayana",
        "relation": "friend of"
      },
      {
        "id": "klaus",
        "relation": "son"
      },
      {
        "id": "freya",
        "relation": "daughter"
      },
      {
        "id": "henrik",
        "relation": "son"
      },
      {
        "id": "tatia",
        "relation": "killed"
      }
    ]
  },
  {
    "id": "dahlia",
    "name": "Dahlia",
    "alsoKnownAs": "The first firstborn",
    "lived": "10th century – 2015",
    "kind": "Witch",
    "house": "Mikaelson (by blood)",
    "appearsIn": "TO",
    "group": "mikaelson",
    "category": "witch",
    "oneLine": "A thousand-year-old invoice with a newborn’s name on it.",
    "biography": [
      "Esther's elder sister, and by a wide margin the stronger of the two. She gave Esther fertility in exchange for the firstborn of every generation of their bloodline, forever, and collected Freya as the first payment. She sleeps a century between each waking year, sustained by the firstborn magic she takes.",
      "A thousand years later she comes to New Orleans to collect Hope Mikaelson. Killing her requires Mikaelson blood, Viking soil, and the family cooperating completely for the first time in their history — including with Freya, the daughter Dahlia stole and raised as a weapon."
    ],
    "facts": [
      "Her binding spell means she can find the firstborn anywhere in the world the instant their magic surfaces.",
      "She raised Freya, and the relationship is genuinely and unpleasantly maternal, which is what makes her interesting rather than just powerful."
    ],
    "connections": [
      {
        "id": "esther",
        "relation": "sister"
      },
      {
        "id": "freya",
        "relation": "raised"
      },
      {
        "id": "hope",
        "relation": "came for"
      },
      {
        "id": "klaus",
        "relation": "opposed by"
      }
    ]
  },
  {
    "id": "ansel",
    "name": "Ansel",
    "alsoKnownAs": "Klaus’s father",
    "lived": "10th century – 2014",
    "kind": "Werewolf",
    "house": "The wolf village",
    "appearsIn": "TO",
    "group": "mikaelson",
    "category": "wolf",
    "oneLine": "The father Klaus never knew he had, killed twice.",
    "biography": [
      "A man from the werewolf village next to the Mikaelsons' settlement, and Esther's lover. Niklaus is his son. Mikael found out when Klaus's first kill triggered the wolf gene, and killed Ansel and everyone else in the village that night.",
      "Esther resurrects him a thousand years later in New Orleans. He offers Klaus the one thing nobody has ever offered him — a father who is glad he exists — and Klaus kills him inside a day rather than believe it."
    ],
    "facts": [
      "Hope Mikaelson's werewolf side comes from him, which makes him the grandfather of the first tribrid.",
      "Klaus's entire personality — the loyalty tests, the compulsion to build a family that cannot leave — traces to being an unwanted son twice over."
    ],
    "connections": [
      {
        "id": "esther",
        "relation": "lover"
      },
      {
        "id": "klaus",
        "relation": "father of"
      },
      {
        "id": "mikael",
        "relation": "killed by"
      },
      {
        "id": "hope",
        "relation": "grandfather of"
      }
    ]
  },
  {
    "id": "freya",
    "name": "Freya Mikaelson",
    "alsoKnownAs": "The firstborn",
    "lived": "10th century – living",
    "kind": "Witch",
    "house": "Mikaelson",
    "appearsIn": "TO · Legacies",
    "group": "mikaelson",
    "category": "witch",
    "oneLine": "The only Mikaelson who is still a witch, and the only one who plans.",
    "biography": [
      "The Mikaelsons' true firstborn, handed to Dahlia as payment and reported dead of plague. She was raised as Dahlia's weapon and held in the same cycle — a century's sleep for every year awake — for a thousand years, believing her mother had sold her — which was true — and that her family would not want her, which was not.",
      "She turns up in New Orleans in the 21st century claiming to be their sister, is disbelieved for most of a season, and then becomes the person who actually solves things. Nearly every workable spell in The Originals is hers: killing Dahlia, containing the Hollow, keeping Hope alive. She marries Keelin, a werewolf doctor, and gets one of the very few uncomplicated happy endings in the franchise."
    ],
    "facts": [
      "Her sense of time is unlike anyone else's alive: she has been awake for roughly ten years spread across a millennium.",
      "She appears in Legacies to help Hope, which makes her one of the few characters to appear across all the family's generations."
    ],
    "connections": [
      {
        "id": "dahlia",
        "relation": "raised by"
      },
      {
        "id": "esther",
        "relation": "mother"
      },
      {
        "id": "klaus",
        "relation": "brother"
      },
      {
        "id": "elijah",
        "relation": "brother"
      },
      {
        "id": "rebekah",
        "relation": "sister"
      },
      {
        "id": "keelin",
        "relation": "wife"
      },
      {
        "id": "hope",
        "relation": "niece"
      }
    ]
  },
  {
    "id": "finn",
    "name": "Finn Mikaelson",
    "alsoKnownAs": "",
    "lived": "10th century – 2012",
    "kind": "Original vampire → witch",
    "house": "Mikaelson",
    "appearsIn": "TVD · TO",
    "group": "mikaelson",
    "category": "vamp",
    "oneLine": "The one who never wanted any of it.",
    "biography": [
      "The eldest surviving Mikaelson son, and the only one who considered vampirism an abomination from the first day. Klaus daggered him for roughly nine hundred years. When he woke in 2012 he immediately sided with Esther in her plan to kill the entire family, including himself.",
      "He is killed with white oak in 2012, and his whole sireline dies with him — which is how everyone in the story learns the rule that governs the rest of the franchise. He returns later possessing a body in New Orleans, as a witch, and dies again."
    ],
    "facts": [
      "Sage, the vampire he loved in the 12th century, dies at the same moment he does because she was in his line.",
      "Nine hundred years in a box means he has, in lived time, barely been an adult."
    ],
    "connections": [
      {
        "id": "esther",
        "relation": "son"
      },
      {
        "id": "mikael",
        "relation": "son"
      },
      {
        "id": "klaus",
        "relation": "daggered by"
      },
      {
        "id": "elijah",
        "relation": "brother"
      },
      {
        "id": "rebekah",
        "relation": "brother"
      }
    ]
  },
  {
    "id": "elijah",
    "name": "Elijah Mikaelson",
    "alsoKnownAs": "The Noble Stag",
    "lived": "10th century – 2018",
    "kind": "Original vampire",
    "house": "Mikaelson",
    "appearsIn": "TVD · TO",
    "group": "mikaelson",
    "category": "vamp",
    "oneLine": "The family’s conscience and its most efficient killer.",
    "biography": [
      "The second Mikaelson son, and the one who invented \"always and forever\" — the promise that the family will stay together no matter what, made over Henrik's body and broken roughly once a season for a thousand years. He loved Tatia, and Katherine, and eventually Hayley, which is a pattern that repeats every five hundred years with the same face.",
      "He is the most reasonable person in any room and also the person most likely to remove someone's heart mid-sentence, and the show never stops finding this funny. He spends centuries compelling his own worst memories out of his head. In 2018 he snaps the last white oak stake in half so that he and Klaus can run each other through at the same moment, and neither has to die alone."
    ],
    "facts": [
      "He punished Tristan de Martel by compelling him to walk into the sea over and over for centuries; Tristan ends the story doing exactly that, forever, in a locked box.",
      "He learns only a thousand years late that he killed Tatia himself, and that his mother hid it from him behind a compelled \"red door\".",
      "His relationship with Hayley Marshall is the franchise's longest slow burn and never gets a clean ending."
    ],
    "connections": [
      {
        "id": "klaus",
        "relation": "brother"
      },
      {
        "id": "rebekah",
        "relation": "brother"
      },
      {
        "id": "esther",
        "relation": "son"
      },
      {
        "id": "tatia",
        "relation": "loved"
      },
      {
        "id": "katherine",
        "relation": "loved"
      },
      {
        "id": "hayley",
        "relation": "loved"
      },
      {
        "id": "tristan",
        "relation": "sired"
      },
      {
        "id": "hope",
        "relation": "uncle"
      }
    ]
  },
  {
    "id": "klaus",
    "name": "Niklaus Mikaelson",
    "alsoKnownAs": "Klaus · the Original Hybrid",
    "lived": "10th century – 2018",
    "kind": "Original vampire / werewolf hybrid",
    "house": "Mikaelson",
    "appearsIn": "TVD · TO · Legacies",
    "group": "mikaelson",
    "category": "wolf",
    "oneLine": "The villain the franchise could not kill and eventually could not do without.",
    "biography": [
      "Esther's son by the werewolf Ansel, raised by a father who despised him and never told him why. His first kill woke his wolf side; his mother bound it to keep Mikael from killing him; he spent a thousand years undoing that binding and inventing a fake curse to make two entire species help him look for the pieces. He killed his mother, blamed his father, and kept his siblings in boxes for centuries at a time as a form of love.",
      "He broke the curse in 2010 and discovered it had bought him nothing — the hybrids he wanted needed a doppelgänger's blood, and the doppelgänger had survived. He went to New Orleans, found out he was going to be a father, and spent seven years being a worse and then a better one. He dies in 2018 by white oak, to take a thousand-year-old darkness out of his daughter, and his last words in the franchise are a recorded message, delivered ten years late, telling her she is his peace."
    ],
    "facts": [
      "His blood is the only cure for a werewolf bite, which makes him the most useful person alive to have owed you a favour.",
      "His interest in Caroline Forbes runs from 2011 to the last season of The Originals and is the franchise's most-discussed unresolved thread.",
      "He raised Marcel Gerard as a son, abandoned him, and spent a century pretending it was the other way round.",
      "He funded the Salvatore School. Posthumously, his money is what makes Legacies possible."
    ],
    "connections": [
      {
        "id": "esther",
        "relation": "son"
      },
      {
        "id": "ansel",
        "relation": "father"
      },
      {
        "id": "mikael",
        "relation": "raised by"
      },
      {
        "id": "elijah",
        "relation": "brother"
      },
      {
        "id": "rebekah",
        "relation": "brother"
      },
      {
        "id": "kol",
        "relation": "brother"
      },
      {
        "id": "hope",
        "relation": "daughter"
      },
      {
        "id": "hayley",
        "relation": "mother of his child"
      },
      {
        "id": "marcel",
        "relation": "raised"
      },
      {
        "id": "caroline",
        "relation": "loved"
      },
      {
        "id": "stefan",
        "relation": "friend and victim"
      },
      {
        "id": "aurora",
        "relation": "loved"
      },
      {
        "id": "lucien",
        "relation": "sired"
      }
    ]
  },
  {
    "id": "kol",
    "name": "Kol Mikaelson",
    "alsoKnownAs": "",
    "lived": "10th century – 2012 / living",
    "kind": "Original vampire (was a witch)",
    "house": "Mikaelson",
    "appearsIn": "TVD · TO",
    "group": "mikaelson",
    "category": "vamp",
    "oneLine": "The reckless one, and the only Original who was a witch first.",
    "biography": [
      "The third Mikaelson son and the youngest brother to survive the spell — Henrik was younger — a witch before it and a vampire after it, which left him with a permanent grudge against magic and the people who use it. Klaus kept him daggered for over a century. He is killed in 2012 by Jeremy Gilbert with white oak — burned alive in a kitchen — to advance the hunt for the cure, and his entire sireline dies with him.",
      "He returns in New Orleans in a witch's body, falls in love with Davina Claire, is turned back into an Original, and finally gets to leave with her at the end of the story. It is the least-earned and most satisfying happy ending in the family."
    ],
    "facts": [
      "He is the only Mikaelson who is frightened of the cure, because he does not want to be mortal.",
      "He carries a quarter of the Hollow in the last season, like his siblings, and cannot see any of them for seven years."
    ],
    "connections": [
      {
        "id": "klaus",
        "relation": "brother"
      },
      {
        "id": "elijah",
        "relation": "brother"
      },
      {
        "id": "rebekah",
        "relation": "brother"
      },
      {
        "id": "davina",
        "relation": "loved"
      },
      {
        "id": "jeremy",
        "relation": "killed by"
      },
      {
        "id": "esther",
        "relation": "son"
      }
    ]
  },
  {
    "id": "rebekah",
    "name": "Rebekah Mikaelson",
    "alsoKnownAs": "",
    "lived": "10th century – living (cured)",
    "kind": "Original vampire → human",
    "house": "Mikaelson",
    "appearsIn": "TVD · TO · Legacies",
    "group": "mikaelson",
    "category": "vamp",
    "oneLine": "A thousand years of wanting an ordinary life.",
    "biography": [
      "The second Mikaelson daughter — Freya was born first and stolen — and the one who says out loud what the family is: a group of people who love each other badly and will not let each other leave. She has wanted to be human since the first season she appears in. Klaus daggered her repeatedly — decades at a time — for loving the wrong people, starting with Marcel in New Orleans in 1919 and continuing for another century.",
      "She summoned Mikael to New Orleans hoping he would free her from Klaus, and it cost her everything. She ends the story promised the cure, planning a mortal life with Marcel, and she is the character who most obviously earned it."
    ],
    "facts": [
      "She turned Aurora de Martel against Klaus's explicit wishes, which is a grudge still running a thousand years later.",
      "She hid Hope for the first year of her life, in secret, from everyone including most of her own family.",
      "She appears in Legacies to help Hope through her transition, which closes a circle that opened in a Mystic Falls high school."
    ],
    "connections": [
      {
        "id": "klaus",
        "relation": "sister"
      },
      {
        "id": "elijah",
        "relation": "sister"
      },
      {
        "id": "marcel",
        "relation": "loved"
      },
      {
        "id": "mikael",
        "relation": "daughter"
      },
      {
        "id": "aurora",
        "relation": "sired"
      },
      {
        "id": "hope",
        "relation": "aunt"
      },
      {
        "id": "stefan",
        "relation": "friend"
      }
    ]
  },
  {
    "id": "henrik",
    "name": "Henrik Mikaelson",
    "alsoKnownAs": "",
    "lived": "c. 985 – c. 1000",
    "kind": "Human",
    "house": "Mikaelson",
    "appearsIn": "TVD · TO (flashback)",
    "group": "mikaelson",
    "category": "house",
    "oneLine": "The most consequential dead child in television.",
    "biography": [
      "The youngest Mikaelson. He wanted to see the wolves change on a full moon, and Niklaus took him out to watch, and a wolf killed him. Esther refused to bury another child and went looking for a spell that would make the rest of her family impossible to kill.",
      "Everything else in eleven seasons of television is downstream of that. Klaus has carried the blame for a thousand years, and it informs every cruelty he commits."
    ],
    "facts": [
      "\"Always and forever\" was sworn over his body."
    ],
    "connections": [
      {
        "id": "klaus",
        "relation": "killed by (accidentally)"
      },
      {
        "id": "esther",
        "relation": "son"
      },
      {
        "id": "rebekah",
        "relation": "brother"
      }
    ]
  },
  {
    "id": "hope",
    "name": "Hope Mikaelson",
    "alsoKnownAs": "The Tribrid",
    "lived": "2012 – living",
    "kind": "Witch / werewolf / vampire tribrid",
    "house": "Mikaelson · Labonair",
    "appearsIn": "TO · Legacies",
    "group": "mikaelson",
    "category": "wolf",
    "oneLine": "The first tribrid, and the character the whole franchise hands itself to.",
    "biography": [
      "Born in the bayou during a hurricane to a werewolf and the Original hybrid: witch by Esther's blood, wolf by Ansel's, vampire by Esther's spell. Every faction in New Orleans wanted her dead or owned before she could speak, and Dahlia's thousand-year-old bargain had her name on it in advance. She was hidden as an infant, hunted as a toddler, and grew up mostly without her father, writing letters he could not answer in person.",
      "At the Salvatore School she is erased from the world by Malivore and has to earn her own existence back. Her vampire side activates only when she dies with vampire blood in her, and when it does she is briefly the most dangerous thing that has ever existed, with her humanity switched off and nothing on Earth able to stop her. She gives the tribrid nature to the end, and the last thing the franchise gives her is her father telling her to be proud of it."
    ],
    "facts": [
      "Klaus Mikaelson's daughter turning off her humanity to survive grief is the single most on-theme thing the franchise ever does.",
      "Her mother Hayley dies while she is a teenager; her father dies to take the Hollow out of her.",
      "She closes, exactly, the loop Esther opened by refusing to bury another child."
    ],
    "connections": [
      {
        "id": "klaus",
        "relation": "daughter"
      },
      {
        "id": "hayley",
        "relation": "daughter"
      },
      {
        "id": "freya",
        "relation": "niece"
      },
      {
        "id": "elijah",
        "relation": "niece"
      },
      {
        "id": "rebekah",
        "relation": "niece"
      },
      {
        "id": "landon",
        "relation": "loved"
      },
      {
        "id": "alaric",
        "relation": "student of"
      },
      {
        "id": "josie",
        "relation": "friend"
      },
      {
        "id": "lizzie",
        "relation": "friend"
      },
      {
        "id": "inadu",
        "relation": "possessed by"
      }
    ]
  },
  {
    "id": "hayley",
    "name": "Hayley Marshall",
    "alsoKnownAs": "Andrea Labonair",
    "lived": "1991 – 2025",
    "kind": "Werewolf → hybrid",
    "house": "Crescent pack · Mikaelson",
    "appearsIn": "TVD · TO",
    "group": "mikaelson",
    "category": "wolf",
    "oneLine": "The last heir of the Crescent line, and the wolves’ actual leader.",
    "biography": [
      "A werewolf with no idea where she came from, who spent one night with Klaus Mikaelson in the Blue Ridge Mountains and turned up pregnant — which should be impossible, and is possible only because Klaus was born a werewolf and is not, technically, dead the way other vampires are. She is in fact Andrea Labonair, the last living heir to the Crescent pack's ruling line, cursed by Klaus himself decades before she was born.",
      "She spends the first season being used by every faction in New Orleans and the rest of the series becoming the person the wolves actually follow. She marries Jackson Kenner in a ritual that lets the whole pack turn at will, becomes a hybrid, and is killed during the seven-year separation while protecting a wolf who had been poisoned."
    ],
    "facts": [
      "Her parents were killed and she was raised outside the pack entirely, which is why she has no idea what she is when the story starts.",
      "Her relationship with Elijah runs the length of The Originals and never resolves cleanly.",
      "Her death is what finally pulls the scattered Mikaelsons back together for the last time."
    ],
    "connections": [
      {
        "id": "klaus",
        "relation": "mother of his child"
      },
      {
        "id": "hope",
        "relation": "mother"
      },
      {
        "id": "elijah",
        "relation": "loved"
      },
      {
        "id": "jackson",
        "relation": "married"
      },
      {
        "id": "marcel",
        "relation": "ally"
      }
    ]
  },
  {
    "id": "marcel",
    "name": "Marcel Gerard",
    "alsoKnownAs": "Marcellus · the Beast",
    "lived": "1810s – living",
    "kind": "Vampire → upgraded Original",
    "house": "New Orleans",
    "appearsIn": "TO · Legacies",
    "group": "mikaelson",
    "category": "vamp",
    "oneLine": "Klaus’s son in everything but blood, and the only man who ever took the city off him.",
    "biography": [
      "Born to an enslaved woman and the man who owned her, taken in by Klaus as a boy and named Marcellus — \"the little warrior.\" Klaus raised him, taught him everything, and turned him. Rebekah loved him. In 1919 Mikael came, Klaus fled, and Marcel was left for dead. He was not dead. He took New Orleans instead and ruled it for ninety years, keeping the witches suppressed by hiding a teenage witch named Davina Claire and using her power against her own covens.",
      "Half of The Originals is a custody fight between two men who each believe they made the city and each believe they made the other. He eventually takes Lucien's serum and becomes the Beast of the prophecy — an upgraded Original whose bite can kill a Mikaelson without white oak."
    ],
    "facts": [
      "Klaus fed him vampire blood as a boy after a beating and then told him a fiction about how he turned.",
      "He appears in Legacies, still running New Orleans, still not finished with that family."
    ],
    "connections": [
      {
        "id": "klaus",
        "relation": "raised by"
      },
      {
        "id": "rebekah",
        "relation": "loved"
      },
      {
        "id": "davina",
        "relation": "protected"
      },
      {
        "id": "josh",
        "relation": "sired"
      },
      {
        "id": "elijah",
        "relation": "rival"
      },
      {
        "id": "hope",
        "relation": "protects"
      }
    ]
  },
  {
    "id": "tatia",
    "name": "Tatia",
    "alsoKnownAs": "The first doppelgänger",
    "lived": "10th century – c. 1000",
    "kind": "Human doppelgänger",
    "house": "Petrova line",
    "appearsIn": "TO (flashback)",
    "group": "petrova",
    "category": "house",
    "oneLine": "Amara’s first shadow, and the blood in the immortality spell.",
    "biography": [
      "A woman of the Mikaelsons' village whom both Elijah and Niklaus loved, and the first Petrova doppelgänger — Amara's shadow, arriving precisely when the story needed her. She had a child by another man before either brother courted her, which is a pattern the line repeats with Katherine five hundred years later.",
      "Esther killed her and put her blood in the wine for the immortality spell, then used it again to bind Klaus's werewolf side. She told her sons Tatia had left. Elijah learns the truth a thousand years later and it nearly destroys him."
    ],
    "facts": [
      "Her blood is in the foundation of vampirism itself — every vampire alive exists partly because of her.",
      "Elijah compelled the memory of what happened out of his own head to survive it."
    ],
    "connections": [
      {
        "id": "amara",
        "relation": "doppelgänger of"
      },
      {
        "id": "elijah",
        "relation": "loved by"
      },
      {
        "id": "klaus",
        "relation": "loved by"
      },
      {
        "id": "esther",
        "relation": "killed by"
      },
      {
        "id": "katherine",
        "relation": "succeeded by"
      }
    ]
  },
  {
    "id": "katherine",
    "name": "Katherine Pierce",
    "alsoKnownAs": "Katerina Petrova",
    "lived": "1473 – 2017",
    "kind": "Human → vampire → human → dead → Queen of Hell",
    "house": "Petrova",
    "appearsIn": "TVD",
    "group": "petrova",
    "category": "vamp",
    "oneLine": "Five hundred years of never being where anyone expected.",
    "biography": [
      "Born Katerina Petrova in Bulgaria in 1473, disgraced by a pregnancy, and thrown out by her father after her daughter was taken at birth. Within months she was in England being courted by a charming lord who intended to drain her on an altar. She found out, stole the moonstone, and ran — and then did the one thing that made her permanently worthless to Klaus: she fed on a vampire's blood and hanged herself, because the ritual requires a human.",
      "Klaus slaughtered her entire family for it. She ran for five hundred years, turned up in Mystic Falls in 1864 to compel two brothers into loving her, and surfaced again in 2009 to play every side of every conflict. She was forced to take the cure in 2013, aged five centuries in weeks once Silas drained it out of her, refused her daughter's body and had a Traveler move her into Elena's instead, died, and came back in 2017 as the ruler of Hell."
    ],
    "facts": [
      "Her daughter Nadia found her after five hundred years and died of a werewolf bite within a season of the reunion.",
      "Rose and Trevor helped her escape in 1492 — Rose's blood is what turned her — and both paid for it centuries later: Trevor with his head, Rose with a wolf bite.",
      "She is never once stupid, which makes her the best-constructed character in the show.",
      "She dies in a burning building for the second time in the series finale. The show knows exactly what it is doing."
    ],
    "connections": [
      {
        "id": "klaus",
        "relation": "fled from"
      },
      {
        "id": "elijah",
        "relation": "loved by"
      },
      {
        "id": "stefan",
        "relation": "turned"
      },
      {
        "id": "damon",
        "relation": "turned"
      },
      {
        "id": "nadia",
        "relation": "daughter"
      },
      {
        "id": "elena",
        "relation": "her doppelgänger"
      },
      {
        "id": "emily",
        "relation": "served by"
      },
      {
        "id": "cade",
        "relation": "succeeded"
      }
    ]
  },
  {
    "id": "elena",
    "name": "Elena Gilbert",
    "alsoKnownAs": "The last doppelgänger",
    "lived": "1992 – old age",
    "kind": "Human → vampire → human",
    "house": "Gilbert · Petrova",
    "appearsIn": "TVD",
    "group": "petrova",
    "category": "house",
    "oneLine": "The most valuable object on Earth before she knew vampires existed.",
    "biography": [
      "Seventeen and newly orphaned when the series starts. Her biological parents are Isobel Flemming — later a vampire — and John Gilbert; she was raised by John's brother Grayson and his wife Miranda, both of whom drowned when their car went off Wickery Bridge. Stefan Salvatore pulled her unconscious from the water because Grayson refused to be saved first, then enrolled in her school because she has Katherine's face.",
      "Her blood is the key to a thousand-year-old curse. She dies on Klaus's altar in 2010 and comes back; she dies with Damon's blood in her in 2012 and turns; she takes the cure in 2015 and is put to sleep by a spell binding her life to Bonnie's. She wakes in 2017, grows old with Damon, and dies of nothing supernatural whatsoever, which is the most radical thing the show ever does."
    ],
    "facts": [
      "Her sire bond to Damon is the show's most uncomfortable idea and it does not pretend otherwise.",
      "John Gilbert traded his own life for hers through a Bennett spell — the one genuinely selfless thing he ever did.",
      "Amara, Tatia and Katherine all wear her face. Nina Dobrev plays all four across two thousand years."
    ],
    "connections": [
      {
        "id": "stefan",
        "relation": "loved"
      },
      {
        "id": "damon",
        "relation": "married"
      },
      {
        "id": "bonnie",
        "relation": "best friend"
      },
      {
        "id": "caroline",
        "relation": "best friend"
      },
      {
        "id": "jeremy",
        "relation": "brother"
      },
      {
        "id": "jenna",
        "relation": "aunt"
      },
      {
        "id": "isobel",
        "relation": "birth mother"
      },
      {
        "id": "johngilbert",
        "relation": "birth father"
      },
      {
        "id": "katherine",
        "relation": "her doppelgänger"
      },
      {
        "id": "klaus",
        "relation": "sacrificed by"
      }
    ]
  },
  {
    "id": "nadia",
    "name": "Nadia Petrova",
    "alsoKnownAs": "",
    "lived": "1490 – 2014",
    "kind": "Vampire · Traveler",
    "house": "Petrova",
    "appearsIn": "TVD",
    "group": "petrova",
    "category": "house",
    "oneLine": "Five centuries looking for a mother who did not want to be found.",
    "biography": [
      "Katherine's daughter, taken from her at birth in 1490 and raised by strangers. She spent five hundred years looking for her mother, found her in 2013, and got a handful of episodes with her before dying of a werewolf bite.",
      "She offers her own body first, is refused, and then arranges for a Traveler to pass Katherine's consciousness into Elena instead — which gives her mother a few more weeks and the show one of its better twists."
    ],
    "facts": [
      "Her death is the only time Katherine Pierce is uncomplicatedly sincere on screen."
    ],
    "connections": [
      {
        "id": "katherine",
        "relation": "daughter"
      },
      {
        "id": "elena",
        "relation": "possessed"
      },
      {
        "id": "markos",
        "relation": "worked with"
      }
    ]
  },
  {
    "id": "isobel",
    "name": "Isobel Flemming",
    "alsoKnownAs": "Isobel Saltzman",
    "lived": "1975 – 2010",
    "kind": "Human → vampire",
    "house": "Gilbert (by blood)",
    "appearsIn": "TVD",
    "group": "petrova",
    "category": "vamp",
    "oneLine": "Alaric’s wife, Elena’s mother, and neither for very long.",
    "biography": [
      "A researcher into local vampire folklore who married Alaric Saltzman and then had herself turned by Damon Salvatore, abandoning both her husband and the daughter she had given up at sixteen. She works for Klaus, then for John Gilbert, then for herself, and is never straightforwardly on anyone's side.",
      "She meets Elena twice, is cold both times, and then walks into the sun in front of her under Klaus's compulsion."
    ],
    "facts": [
      "Her disappearance is what turns Alaric into a vampire hunter, which is how he ends up in Mystic Falls at all."
    ],
    "connections": [
      {
        "id": "alaric",
        "relation": "married"
      },
      {
        "id": "elena",
        "relation": "birth mother"
      },
      {
        "id": "johngilbert",
        "relation": "with"
      },
      {
        "id": "damon",
        "relation": "turned by"
      }
    ]
  },
  {
    "id": "johngilbert",
    "name": "John Gilbert",
    "alsoKnownAs": "",
    "lived": "– 2010",
    "kind": "Human",
    "house": "Gilbert · Founders",
    "appearsIn": "TVD",
    "group": "petrova",
    "category": "house",
    "oneLine": "A bad man who does exactly one great thing.",
    "biography": [
      "Elena's biological father, Grayson's brother, and a Founders' Council hardliner who spends most of two seasons trying to kill vampires including the ones his daughter loves. He is manipulative, cruel to Jeremy, and largely correct about the danger, which is what makes him unbearable.",
      "In 2010 he takes Elena's death onto himself through a Bennett spell so that she survives Klaus's sacrifice, and dies leaving her a letter. It is the only unselfish act of his life and it is enough."
    ],
    "facts": [
      "He is the one who resurrects the Gilbert device to incapacitate every vampire and werewolf in Mystic Falls — including Caroline and Tyler, which is how the town discovers werewolves."
    ],
    "connections": [
      {
        "id": "elena",
        "relation": "father"
      },
      {
        "id": "isobel",
        "relation": "with"
      },
      {
        "id": "grayson",
        "relation": "brother"
      },
      {
        "id": "jeremy",
        "relation": "uncle"
      }
    ]
  },
  {
    "id": "grayson",
    "name": "Grayson Gilbert",
    "alsoKnownAs": "",
    "lived": "– 2009",
    "kind": "Human",
    "house": "Gilbert · Founders",
    "appearsIn": "TVD",
    "group": "petrova",
    "category": "house",
    "oneLine": "The father Elena had, and the one she let drown.",
    "biography": [
      "A doctor and a Founders' Council member who raised his brother's daughter as his own and never told her. He also, quietly, experimented on captured vampires in the basement of the hospital — the Gilberts are not a clean family.",
      "He and his wife Miranda died when their car went off Wickery Bridge. Stefan reached the car first; Grayson told him to take Elena and refused to be saved himself."
    ],
    "facts": [
      "Jeremy and Elena both find out about the basement years later, which recontextualises their entire childhood."
    ],
    "connections": [
      {
        "id": "elena",
        "relation": "raised"
      },
      {
        "id": "miranda",
        "relation": "married"
      },
      {
        "id": "johngilbert",
        "relation": "brother"
      },
      {
        "id": "jeremy",
        "relation": "father"
      }
    ]
  },
  {
    "id": "miranda",
    "name": "Miranda Sommers-Gilbert",
    "alsoKnownAs": "",
    "lived": "– 2009",
    "kind": "Human",
    "house": "Gilbert · Sommers",
    "appearsIn": "TVD",
    "group": "petrova",
    "category": "house",
    "oneLine": "Elena and Jeremy’s mother; Jenna’s sister.",
    "biography": [
      "Jenna Sommers' older sister, married to Grayson Gilbert, and the woman who raised Elena as her own daughter. She died in the Wickery Bridge crash, which is the event the entire first season proceeds from."
    ],
    "facts": [
      "Her death is why Jenna — twenty-something and unprepared — becomes guardian to two teenagers."
    ],
    "connections": [
      {
        "id": "grayson",
        "relation": "married"
      },
      {
        "id": "jenna",
        "relation": "sister"
      },
      {
        "id": "elena",
        "relation": "raised"
      },
      {
        "id": "jeremy",
        "relation": "mother"
      }
    ]
  },
  {
    "id": "jenna",
    "name": "Jenna Sommers",
    "alsoKnownAs": "",
    "lived": "– 2010",
    "kind": "Human → vampire",
    "house": "Sommers · Gilbert",
    "appearsIn": "TVD",
    "group": "petrova",
    "category": "house",
    "oneLine": "Turned into a vampire specifically so she could be killed.",
    "biography": [
      "Elena and Jeremy's aunt, made their guardian at short notice after her sister died, and comprehensively lied to by everyone she loves for two seasons \"for her own protection.\"",
      "Klaus turns her into a vampire in 2010 for the sole purpose of using her as the vampire in his sacrifice. She is dead within a day of turning. It is the cruellest thing that happens to any bystander in the franchise."
    ],
    "facts": [
      "She was dating Alaric Saltzman, whose missing wife turned out to be Elena's mother.",
      "She learns the truth about vampires roughly two episodes before it kills her."
    ],
    "connections": [
      {
        "id": "elena",
        "relation": "aunt"
      },
      {
        "id": "jeremy",
        "relation": "aunt"
      },
      {
        "id": "alaric",
        "relation": "partner"
      },
      {
        "id": "klaus",
        "relation": "killed by"
      },
      {
        "id": "miranda",
        "relation": "sister"
      }
    ]
  },
  {
    "id": "jeremy",
    "name": "Jeremy Gilbert",
    "alsoKnownAs": "",
    "lived": "1994 – living",
    "kind": "Human · hunter of the Five",
    "house": "Gilbert · The Five",
    "appearsIn": "TVD · Legacies",
    "group": "petrova",
    "category": "vamp",
    "oneLine": "A teenager who becomes a supernatural hunter and then a teacher.",
    "biography": [
      "Elena's younger brother, orphaned at fifteen, and one of the last potential members of the Brotherhood of the Five. When Connor Jordan dies, Jeremy's hunter's mark activates and grows with every vampire he kills — a living map to Silas and the cure, burned into his skin.",
      "He dies repeatedly. He is brought back by a Bennett witch's ring, then killed by Silas on the island, then resurrected in a way that starts breaking the Other Side. He kills Kol Mikaelson with white oak and takes a whole sireline with him. He turns up in Legacies as a hunter working with the Salvatore School."
    ],
    "facts": [
      "His hunter's instinct compels him to kill vampires, including Elena, which is a problem the show handles bluntly.",
      "He is one of only three characters from the TVD pilot to turn up in Legacies — alongside Matt and Vicki Donovan."
    ],
    "connections": [
      {
        "id": "elena",
        "relation": "brother"
      },
      {
        "id": "bonnie",
        "relation": "loved"
      },
      {
        "id": "kol",
        "relation": "killed"
      },
      {
        "id": "connor",
        "relation": "succeeded"
      },
      {
        "id": "alaric",
        "relation": "trained by"
      },
      {
        "id": "vicki",
        "relation": "loved"
      }
    ]
  },
  {
    "id": "tomavery",
    "name": "Tom Avery",
    "alsoKnownAs": "",
    "lived": "– 2013",
    "kind": "Human doppelgänger",
    "house": "Silas’s line",
    "appearsIn": "TVD",
    "group": "petrova",
    "category": "origin",
    "oneLine": "Proof that the Silas line is real.",
    "biography": [
      "A paramedic in Atlanta with Stefan Salvatore's face, and the last-born doppelgänger of Silas — younger than Stefan, not older. Enzo snaps his neck to keep the Travelers from using him."
    ],
    "facts": [
      "His death leaves Stefan as the last Silas doppelgänger alive, which is what makes the Travelers' plan turn on Stefan specifically."
    ],
    "connections": [
      {
        "id": "silas",
        "relation": "doppelgänger of"
      },
      {
        "id": "stefan",
        "relation": "doppelgänger of"
      },
      {
        "id": "markos",
        "relation": "hunted by"
      }
    ]
  },
  {
    "id": "stefan",
    "name": "Stefan Salvatore",
    "alsoKnownAs": "The Ripper",
    "lived": "1846 – 2017",
    "kind": "Vampire → human",
    "house": "Salvatore",
    "appearsIn": "TVD · TO",
    "group": "salvatore",
    "category": "vamp",
    "oneLine": "A hundred and seventy years of white-knuckling it.",
    "biography": [
      "The younger Salvatore brother, turned in 1864 after his father shot him for protecting Katherine Pierce. His first feed was on that father. Human blood switches him into a compulsive, escalating killer who dismembers his victims and then reassembles them out of guilt, and he has spent every decade since managing that with varying success. He is also, coincidentally and not coincidentally at all, Silas's doppelgänger.",
      "He comes to Mystic Falls in 2009 because a girl there has Katherine's face. He spends eight seasons being the person everyone else's plot happens to, is thrown into a quarry in a safe for three months, is turned into Cade's collector, is cured, and then walks into the hellfire to close Hell — human only until he passes the cure to Damon, and a vampire again the instant he does, which is what lets him compel his brother away."
    ],
    "facts": [
      "Klaus compelled his humanity off in 1922 and again in 2011 and kept him as a companion, which is the most intimate and most horrifying thing Klaus does to anyone.",
      "Lexi spent decades pulling him back from the ripper and is killed by Damon four episodes after she appears.",
      "He gives Damon the cure and the human life the two of them spent 145 years arguing about, and then dies.",
      "Valerie Tulle was his first love, in 1863, and was pregnant with his child."
    ],
    "connections": [
      {
        "id": "damon",
        "relation": "brother"
      },
      {
        "id": "elena",
        "relation": "loved"
      },
      {
        "id": "katherine",
        "relation": "turned by"
      },
      {
        "id": "giuseppe",
        "relation": "killed"
      },
      {
        "id": "lily",
        "relation": "son"
      },
      {
        "id": "klaus",
        "relation": "friend and victim"
      },
      {
        "id": "lexi",
        "relation": "best friend"
      },
      {
        "id": "caroline",
        "relation": "married"
      },
      {
        "id": "silas",
        "relation": "his doppelgänger"
      },
      {
        "id": "valerie",
        "relation": "loved"
      }
    ]
  },
  {
    "id": "damon",
    "name": "Damon Salvatore",
    "alsoKnownAs": "",
    "lived": "1839 – old age",
    "kind": "Vampire → human",
    "house": "Salvatore",
    "appearsIn": "TVD",
    "group": "salvatore",
    "category": "vamp",
    "oneLine": "The most destructive person in Mystic Falls, and eventually the point of it.",
    "biography": [
      "The elder Salvatore brother, turned in 1864 only because Stefan made him complete the transition, and furious about it for a hundred and forty-five years. He came back to Mystic Falls in 2009 to open a tomb and get Katherine out, discovered she had never been in it, and stayed.",
      "He was Augustine subject 21051 in 1953 and escaped by leaving Enzo St. John to burn. He kills Vicki Donovan, Zach Salvatore, Lexi, Aaron Whitmore, Enzo and a great many others, and the show does not let him off any of it. He is cured by Stefan's blood in 2017, grows old with Elena, and dies human."
    ],
    "facts": [
      "His friendship with Bonnie Bennett, built in a prison world neither of them chose, is the most convincing relationship in the last four seasons.",
      "He is sired to nobody and sire-bonds Elena to himself by accident, which he hates.",
      "He spends sixty years planning to wait for Elena and never has to, which is the closest the show gets to mercy."
    ],
    "connections": [
      {
        "id": "stefan",
        "relation": "brother"
      },
      {
        "id": "elena",
        "relation": "married"
      },
      {
        "id": "katherine",
        "relation": "turned by"
      },
      {
        "id": "bonnie",
        "relation": "friend"
      },
      {
        "id": "enzo",
        "relation": "betrayed"
      },
      {
        "id": "lily",
        "relation": "son"
      },
      {
        "id": "alaric",
        "relation": "friend"
      },
      {
        "id": "cade",
        "relation": "collected by"
      }
    ]
  },
  {
    "id": "giuseppe",
    "name": "Giuseppe Salvatore",
    "alsoKnownAs": "",
    "lived": "– 1864",
    "kind": "Human",
    "house": "Salvatore · Founders",
    "appearsIn": "TVD (flashback)",
    "group": "salvatore",
    "category": "house",
    "oneLine": "Shot both his sons and made two monsters doing it.",
    "biography": [
      "A founding family patriarch and Council member who spiked Stefan's drink with vervain to prove what Katherine was, then shot both his sons for helping her escape the roundup. He is Stefan's first kill, hours later."
    ],
    "facts": [
      "He told his sons their mother had died of consumption. She had not."
    ],
    "connections": [
      {
        "id": "stefan",
        "relation": "killed by"
      },
      {
        "id": "damon",
        "relation": "father"
      },
      {
        "id": "lily",
        "relation": "married"
      },
      {
        "id": "founders",
        "relation": "of the Council"
      }
    ]
  },
  {
    "id": "lily",
    "name": "Lily Salvatore",
    "alsoKnownAs": "",
    "lived": "1830s – 2016",
    "kind": "Vampire · ripper",
    "house": "Salvatore · the Heretics",
    "appearsIn": "TVD",
    "group": "salvatore",
    "category": "vamp",
    "oneLine": "Chose a different family and came back to say so.",
    "biography": [
      "Stefan and Damon's mother, officially dead of consumption in 1858 and in fact a vampire — and a ripper, which her younger son inherits in every way that matters. She went to Europe rather than come home as a monster, turned six siphoner witches into vampires, and called them her real family in front of both her sons.",
      "The Gemini coven sealed all of them into a 1903 prison world. She comes back in 2015, refuses for a hundred and fifty years to believe what Julian did to Valerie, and dies in a way that finally forces Damon and Stefan to be brothers again."
    ],
    "facts": [
      "Her return recontextualises Damon's entire personality in about six episodes.",
      "Valerie Tulle was carrying Stefan's child when Julian beat her; Lily did not believe it until it was far too late."
    ],
    "connections": [
      {
        "id": "stefan",
        "relation": "mother"
      },
      {
        "id": "damon",
        "relation": "mother"
      },
      {
        "id": "valerie",
        "relation": "turned"
      },
      {
        "id": "julian",
        "relation": "loved"
      },
      {
        "id": "giuseppe",
        "relation": "married"
      },
      {
        "id": "gemini",
        "relation": "imprisoned by"
      }
    ]
  },
  {
    "id": "valerie",
    "name": "Valerie Tulle",
    "alsoKnownAs": "",
    "lived": "1840s – living",
    "kind": "Heretic (siphoner-vampire)",
    "house": "The Heretics",
    "appearsIn": "TVD",
    "group": "salvatore",
    "category": "witch",
    "oneLine": "Stefan’s first love, and the one who remembers what it cost.",
    "biography": [
      "A siphoner witch, cast out by the Gemini coven, who met Stefan Salvatore in 1863 and fell in love with him. She was pregnant with his child when Julian beat her; she died and turned with Lily's blood already in her system. She spent a century and a half being told by Lily that Julian would never have done it.",
      "She is the most sympathetic of the Heretics and the one who does the most damage, because she is the one with a reason."
    ],
    "facts": [
      "Her child would have been the only Salvatore heir. The show does not let that go.",
      "She is a siphoner and a vampire at once — a magic-using vampire, which is precisely the combination the Gemini built prison worlds to prevent."
    ],
    "connections": [
      {
        "id": "stefan",
        "relation": "loved"
      },
      {
        "id": "lily",
        "relation": "turned by"
      },
      {
        "id": "julian",
        "relation": "victim of"
      },
      {
        "id": "gemini",
        "relation": "cast out by"
      },
      {
        "id": "nora",
        "relation": "sister-in-arms"
      }
    ]
  },
  {
    "id": "julian",
    "name": "Julian",
    "alsoKnownAs": "",
    "lived": "– 2016",
    "kind": "Vampire",
    "house": "The Heretics’ circle",
    "appearsIn": "TVD",
    "group": "salvatore",
    "category": "vamp",
    "oneLine": "Lily’s blind spot, and the arc’s real villain.",
    "biography": [
      "The man Lily Salvatore loved, released from the 1903 prison world along with the Heretics. He murdered Valerie's unborn child in 1863 and spent a century and a half being defended by a woman who could not afford to believe it."
    ],
    "facts": [
      "He is defeated only when Lily finally accepts what he is, which kills her too."
    ],
    "connections": [
      {
        "id": "lily",
        "relation": "loved by"
      },
      {
        "id": "valerie",
        "relation": "attacked"
      },
      {
        "id": "stefan",
        "relation": "enemy"
      },
      {
        "id": "damon",
        "relation": "enemy"
      }
    ]
  },
  {
    "id": "zach",
    "name": "Zach Salvatore",
    "alsoKnownAs": "",
    "lived": "– 2009",
    "kind": "Human",
    "house": "Salvatore",
    "appearsIn": "TVD",
    "group": "salvatore",
    "category": "house",
    "oneLine": "The last human Salvatore, killed in episode five.",
    "biography": [
      "A descendant of the Salvatore line living quietly in the boarding house and growing vervain in the basement, on the understanding that his immortal uncles would leave him alone. Damon snaps his neck five episodes into the series."
    ],
    "facts": [
      "He is the reason there is a vervain supply in Mystic Falls at all when the series begins."
    ],
    "connections": [
      {
        "id": "damon",
        "relation": "killed by"
      },
      {
        "id": "stefan",
        "relation": "nephew of"
      }
    ]
  },
  {
    "id": "ayana",
    "name": "Ayana",
    "alsoKnownAs": "",
    "lived": "10th century",
    "kind": "Witch",
    "house": "Bennett line",
    "appearsIn": "TVD (flashback)",
    "group": "bennett",
    "category": "witch",
    "oneLine": "Told Esther not to. Was right.",
    "biography": [
      "The witch who led the Mikaelsons across the sea to the New World and then refused to cast Esther's immortality spell, calling it an abomination against nature and warning that the spirits would not stand for it. Esther used Ayana's own talisman and cast it anyway.",
      "Her descendants spend the next thousand years cleaning up after that decision."
    ],
    "facts": [
      "Her talisman passes down the Bennett line and turns up around Bonnie Bennett's neck in 2009."
    ],
    "connections": [
      {
        "id": "esther",
        "relation": "friend of"
      },
      {
        "id": "emily",
        "relation": "ancestor of"
      },
      {
        "id": "bonnie",
        "relation": "ancestor of"
      }
    ]
  },
  {
    "id": "emily",
    "name": "Emily Bennett",
    "alsoKnownAs": "",
    "lived": "– 1864",
    "kind": "Witch",
    "house": "Bennett",
    "appearsIn": "TVD",
    "group": "bennett",
    "category": "witch",
    "oneLine": "Sealed twenty-six vampires under a church for 145 years.",
    "biography": [
      "Katherine Pierce's handmaiden and a Bennett witch. She faked Katherine's death in the 1864 church fire and sealed the other twenty-six vampires in a tomb beneath it — not dead, just desiccating, under a spell keyed to a comet that would not return for 145 years. The Founders burned her at the stake.",
      "Her grimoire and her spells drive half the plot of the first season from beyond the grave, and her spirit possesses Bonnie in 2009 to destroy her own talisman rather than let Damon use it."
    ],
    "facts": [
      "Her deal with Katherine was simple: save the vampires, and leave the Bennett line alone.",
      "The comet timing is the only reason Damon Salvatore comes home in the pilot."
    ],
    "connections": [
      {
        "id": "katherine",
        "relation": "served"
      },
      {
        "id": "bonnie",
        "relation": "ancestor of"
      },
      {
        "id": "damon",
        "relation": "deceived"
      },
      {
        "id": "sheila",
        "relation": "ancestor of"
      }
    ]
  },
  {
    "id": "sheila",
    "name": "Sheila Bennett",
    "alsoKnownAs": "Grams",
    "lived": "– 2009",
    "kind": "Witch",
    "house": "Bennett",
    "appearsIn": "TVD",
    "group": "bennett",
    "category": "witch",
    "oneLine": "The first Bennett the Salvatores get killed.",
    "biography": [
      "Bonnie's maternal grandmother — Abby's mother — a professor, and the witch who teaches Bonnie what she is. She dies in 2009 from the strain of opening the tomb — a favour to Damon Salvatore, who wanted Katherine out of it.",
      "She reappears from the Other Side more than once, including at the very end, to push Bonnie and Damon somewhere rather than let them be unmade."
    ],
    "facts": [
      "Silas spends most of a season impersonating her to manipulate Bonnie, which is among the cruellest things in the show."
    ],
    "connections": [
      {
        "id": "bonnie",
        "relation": "grandmother"
      },
      {
        "id": "damon",
        "relation": "killed by (indirectly)"
      },
      {
        "id": "abby",
        "relation": "mother of"
      },
      {
        "id": "emily",
        "relation": "descendant of"
      }
    ]
  },
  {
    "id": "abby",
    "name": "Abby Bennett Wilson",
    "alsoKnownAs": "",
    "lived": "living",
    "kind": "Witch → vampire",
    "house": "Bennett",
    "appearsIn": "TVD",
    "group": "bennett",
    "category": "witch",
    "oneLine": "Buried Mikael, abandoned her daughter, lost her magic.",
    "biography": [
      "Sheila Bennett's daughter and Bonnie's mother, who used the last of her power to desiccate Mikael and bury him in the 1990s, then left Bonnie behind and started a new life. She comes back in 2012, is turned into a vampire by Damon to save her life, and loses her magic entirely as a result."
    ],
    "facts": [
      "A witch who becomes a vampire loses magic permanently, unless she is a siphoner. Abby is not."
    ],
    "connections": [
      {
        "id": "bonnie",
        "relation": "mother"
      },
      {
        "id": "mikael",
        "relation": "buried"
      },
      {
        "id": "damon",
        "relation": "turned by"
      },
      {
        "id": "sheila",
        "relation": "daughter of"
      }
    ]
  },
  {
    "id": "lucy",
    "name": "Lucy Bennett",
    "alsoKnownAs": "",
    "lived": "living",
    "kind": "Witch",
    "house": "Bennett",
    "appearsIn": "TVD",
    "group": "bennett",
    "category": "witch",
    "oneLine": "The only Bennett who gets out.",
    "biography": [
      "A Bennett cousin brought to Mystic Falls in 2010 under an obligation to Katherine Pierce. She helps, discovers what Katherine actually is, breaks the debt, warns Bonnie, and leaves. She is never seen again, and she is the only member of the family who ends the story unharmed."
    ],
    "facts": [
      "She is the one who tells Bonnie that Bennett blood is stronger than any deal, which turns out to be the theme."
    ],
    "connections": [
      {
        "id": "bonnie",
        "relation": "cousin"
      },
      {
        "id": "katherine",
        "relation": "indebted to"
      }
    ]
  },
  {
    "id": "bonnie",
    "name": "Bonnie Bennett",
    "alsoKnownAs": "The Anchor",
    "lived": "1992 – living",
    "kind": "Witch",
    "house": "Bennett",
    "appearsIn": "TVD",
    "group": "bennett",
    "category": "witch",
    "oneLine": "By workload, the protagonist.",
    "biography": [
      "The last Bennett witch, and — through Ayana and, further back, Qetsiyah — the inheritor of the oldest magical line in the story. Across eight seasons she dies, becomes the Anchor to the Other Side, becomes the load-bearing wall holding that entire dimension up, loses her magic three separate times, is stranded in 1994, and has her lifespan tied to whether her best friend gets to be awake.",
      "She destroys Hell in the series finale, channelling every dead witch in her line, alone, on a street corner. And she survives: she and Elena are the two of the three original friends who end the show alive and human — and Bonnie is the one who wakes Elena."
    ],
    "facts": [
      "Her friendship with Damon Salvatore is the most convincing relationship in the last four seasons and neither of them expected it.",
      "Enzo St. John is her one real love. Stefan kills him, and she nearly ends the world over it.",
      "Every major spell that holds this world together is either cast by a Bennett or paid for by one — a pattern Legacies eventually names out loud."
    ],
    "connections": [
      {
        "id": "sheila",
        "relation": "granddaughter"
      },
      {
        "id": "abby",
        "relation": "daughter"
      },
      {
        "id": "elena",
        "relation": "best friend"
      },
      {
        "id": "caroline",
        "relation": "best friend"
      },
      {
        "id": "damon",
        "relation": "friend"
      },
      {
        "id": "enzo",
        "relation": "loved"
      },
      {
        "id": "jeremy",
        "relation": "loved"
      },
      {
        "id": "amara",
        "relation": "succeeded"
      },
      {
        "id": "qetsiyah",
        "relation": "descendant of"
      },
      {
        "id": "kai",
        "relation": "victim of"
      }
    ]
  },
  {
    "id": "rudy",
    "name": "Rudy Hopkins",
    "alsoKnownAs": "",
    "lived": "– 2013",
    "kind": "Human",
    "house": "Bennett",
    "appearsIn": "TVD",
    "group": "bennett",
    "category": "house",
    "oneLine": "Bonnie’s father, and the mayor of a town he did not understand.",
    "biography": [
      "Bonnie's father — who married into the Bennett line rather than being born to it — and, briefly, the mayor of Mystic Falls — a man determined to run the town on ordinary rules while his daughter held a dimension together. He is killed by Silas."
    ],
    "facts": [
      "His death, and his refusal to see what the town was, is the last thing tethering Bonnie to a normal life."
    ],
    "connections": [
      {
        "id": "bonnie",
        "relation": "father"
      },
      {
        "id": "silas",
        "relation": "killed by"
      },
      {
        "id": "abby",
        "relation": "married"
      }
    ]
  },
  {
    "id": "caroline",
    "name": "Caroline Forbes",
    "alsoKnownAs": "",
    "lived": "1992 – living",
    "kind": "Vampire",
    "house": "Forbes · Founders",
    "appearsIn": "TVD · TO · Legacies",
    "group": "mysticfalls",
    "category": "vamp",
    "oneLine": "Turned against her will, and became the best version of it anyone manages.",
    "biography": [
      "The sheriff's daughter, insecure and overlooked, used by Damon Salvatore as a food source in the first season and turned into a vampire in the second by Katherine — as a message. What she does with it is the show's most complete character arc: she becomes the most competent, most organised and most morally intact vampire in Mystic Falls, and the person everyone else calls when the plan fails.",
      "She carries Alaric and Jo's twins after Jo is murdered, marries Stefan Salvatore hours before he dies, and co-founds a school for supernatural children with the money of a thousand-year-old hybrid who has been in love with her since 2011. She ends the franchise as its headmistress."
    ],
    "facts": [
      "Klaus Mikaelson's interest in her spans both shows and remains the most-discussed unresolved thread in the franchise.",
      "She is the one who says the school should exist. Klaus is the one who pays for it.",
      "Her last act in Legacies is to read Klaus's letter to his daughter."
    ],
    "connections": [
      {
        "id": "elena",
        "relation": "best friend"
      },
      {
        "id": "bonnie",
        "relation": "best friend"
      },
      {
        "id": "stefan",
        "relation": "married"
      },
      {
        "id": "klaus",
        "relation": "loved by"
      },
      {
        "id": "liz",
        "relation": "daughter"
      },
      {
        "id": "alaric",
        "relation": "co-founder with"
      },
      {
        "id": "josie",
        "relation": "carried"
      },
      {
        "id": "lizzie",
        "relation": "carried"
      },
      {
        "id": "tyler",
        "relation": "loved"
      }
    ]
  },
  {
    "id": "matt",
    "name": "Matt Donovan",
    "alsoKnownAs": "",
    "lived": "1992 – living",
    "kind": "Human",
    "house": "Donovan · Maxwell",
    "appearsIn": "TVD · TO · Legacies",
    "group": "mysticfalls",
    "category": "house",
    "oneLine": "The only one who stays human the whole way through.",
    "biography": [
      "A bartender and eventually a sheriff, and the one main character who never turns, never gets magic, and never asks for any of it. He loses his sister, his girlfriends and most of his twenties to other people's supernatural problems, and stays.",
      "He is also a Maxwell by descent, which matters in the last season: only a Maxwell can ring the bell that opens the hellfire under Mystic Falls, and he is the one who has to do it."
    ],
    "facts": [
      "He appears in all three shows, which almost nobody else manages.",
      "His refusal to be turned is treated by the show as the correct choice, not a failure of nerve."
    ],
    "connections": [
      {
        "id": "vicki",
        "relation": "brother"
      },
      {
        "id": "elena",
        "relation": "loved"
      },
      {
        "id": "caroline",
        "relation": "loved"
      },
      {
        "id": "tyler",
        "relation": "friend"
      },
      {
        "id": "alaric",
        "relation": "ally"
      },
      {
        "id": "hope",
        "relation": "protects"
      }
    ]
  },
  {
    "id": "tyler",
    "name": "Tyler Lockwood",
    "alsoKnownAs": "",
    "lived": "1992 – 2016",
    "kind": "Werewolf → hybrid → werewolf",
    "house": "Lockwood · Founders",
    "appearsIn": "TVD · TO",
    "group": "mysticfalls",
    "category": "wolf",
    "oneLine": "The first werewolf the audience meets, and Klaus’s first hybrid.",
    "biography": [
      "A Founders' son who triggers the Lockwood werewolf gene in a car accident he causes, without knowing the gene exists. He is turned into one of Klaus's hybrids and sire-bonded to him, spends a season working out how to break the bond, and leads the hybrid defection when Elena's blood makes it possible.",
      "He crosses to New Orleans early in The Originals to take revenge on Klaus and finds out about Hayley's pregnancy. Damon, under Sybil's control, kills him in 2016 and leaves the body in a car boot."
    ],
    "facts": [
      "The Lockwoods kept a cellar under their property for generations without any of them naming what it was for.",
      "His uncle Mason triggered the same gene and was killed by Damon over the moonstone."
    ],
    "connections": [
      {
        "id": "mason",
        "relation": "nephew of"
      },
      {
        "id": "klaus",
        "relation": "sired by"
      },
      {
        "id": "caroline",
        "relation": "loved"
      },
      {
        "id": "carol",
        "relation": "son"
      },
      {
        "id": "matt",
        "relation": "friend"
      },
      {
        "id": "hayley",
        "relation": "allied with"
      }
    ]
  },
  {
    "id": "vicki",
    "name": "Vicki Donovan",
    "alsoKnownAs": "",
    "lived": "– 2009",
    "kind": "Human → vampire",
    "house": "Donovan",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "house",
    "oneLine": "The first person Damon kills on screen, and a recurring ghost.",
    "biography": [
      "Matt's older sister, turned by Damon in the first season on a whim and killed by Stefan days later when she cannot control it. She keeps coming back — through the Other Side, and again in the final season working for Cade to ring the bell that would destroy the town."
    ],
    "facts": [
      "Her death is the show's first statement that turning is not a gift."
    ],
    "connections": [
      {
        "id": "matt",
        "relation": "sister"
      },
      {
        "id": "jeremy",
        "relation": "loved"
      },
      {
        "id": "damon",
        "relation": "turned by"
      },
      {
        "id": "stefan",
        "relation": "killed by"
      },
      {
        "id": "cade",
        "relation": "worked for"
      }
    ]
  },
  {
    "id": "alaric",
    "name": "Alaric Saltzman",
    "alsoKnownAs": "Ric",
    "lived": "1976 – living",
    "kind": "Human · hunter · briefly an Original",
    "house": "Saltzman · Salvatore School",
    "appearsIn": "TVD · TO · Legacies",
    "group": "mysticfalls",
    "category": "house",
    "oneLine": "History teacher, vampire hunter, headmaster.",
    "biography": [
      "He came to Mystic Falls hunting the vampire who took his wife Isobel and stayed as a history teacher, a drinking companion and the closest thing the teenagers have to a functional adult. He is killed and resurrected repeatedly by a Gilbert ring, which slowly breaks his mind, and in 2012 Esther turns him into an Enhanced Original Vampire — a vampire engineered to wipe out vampires, briefly the most dangerous being alive, undone by the fact that his life is linked to Elena's.",
      "Afterwards he catalogues the Armory, marries Jo Laughlin, loses her at the wedding, and becomes the father of twin siphoner witches. He spends the last decade of the franchise running a school and failing to break a Gemini tradition that will kill one of his daughters."
    ],
    "facts": [
      "He carries the franchise across all three shows more than any other character.",
      "His weapons — vervain darts, wooden bullets, the Gilbert ring — are the reason humans are ever a threat at all."
    ],
    "connections": [
      {
        "id": "isobel",
        "relation": "married"
      },
      {
        "id": "jenna",
        "relation": "partner"
      },
      {
        "id": "jo",
        "relation": "married"
      },
      {
        "id": "caroline",
        "relation": "co-founder with"
      },
      {
        "id": "josie",
        "relation": "father"
      },
      {
        "id": "lizzie",
        "relation": "father"
      },
      {
        "id": "damon",
        "relation": "friend"
      },
      {
        "id": "elena",
        "relation": "mentor"
      },
      {
        "id": "hope",
        "relation": "headmaster of"
      }
    ]
  },
  {
    "id": "liz",
    "name": "Liz Forbes",
    "alsoKnownAs": "Sheriff Forbes",
    "lived": "– 2015",
    "kind": "Human",
    "house": "Forbes · Founders",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "house",
    "oneLine": "Ran a vampire-hunting council while her daughter was a vampire.",
    "biography": [
      "Sheriff of Mystic Falls and head of the Founders' Council, which spends decades hunting vampires. When she finds out Caroline is one, she chooses her daughter, and the town's whole security apparatus quietly becomes something else. She dies of cancer in 2015, which is the only ordinary death anyone in this show gets."
    ],
    "facts": [
      "She is possessed by the Travelers in 2014 as one of dozens of vessels.",
      "Her funeral is the last time the original cast is together and happy."
    ],
    "connections": [
      {
        "id": "caroline",
        "relation": "mother"
      },
      {
        "id": "damon",
        "relation": "ally"
      },
      {
        "id": "stefan",
        "relation": "ally"
      },
      {
        "id": "matt",
        "relation": "deputised"
      }
    ]
  },
  {
    "id": "lexi",
    "name": "Lexi Branson",
    "alsoKnownAs": "",
    "lived": "– 2009",
    "kind": "Vampire",
    "house": "None",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "vamp",
    "oneLine": "Spent decades pulling Stefan back and got four episodes for it.",
    "biography": [
      "Stefan's oldest friend, 350 years old, and the person who repeatedly dragged him out of ripper phases across the 20th century. She arrives in Mystic Falls for his birthday and Damon stakes her in public to protect his own cover.",
      "She reappears from the Other Side, and she is who is waiting for Stefan at the very end."
    ],
    "facts": [
      "Her method for pulling a ripper back is simple, brutal, and takes years: lock him up, dry him out, and stay."
    ],
    "connections": [
      {
        "id": "stefan",
        "relation": "best friend"
      },
      {
        "id": "damon",
        "relation": "killed by"
      }
    ]
  },
  {
    "id": "enzo",
    "name": "Enzo St. John",
    "alsoKnownAs": "",
    "lived": "1900s – 2017",
    "kind": "Vampire",
    "house": "Augustine · the Armory",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "vamp",
    "oneLine": "Seventy years in a cage, and a very long memory.",
    "biography": [
      "Captured by the Augustine society and held for seventy years, bled and cut open as research alongside Damon Salvatore. Damon escaped in 1958 and left him in a burning building. Enzo survived, stayed in captivity for another half-century, and came out with a plan for exactly what he would say.",
      "He becomes Bonnie Bennett's one real love, is enslaved by Sybil, and is killed by Stefan in front of Bonnie — which nearly costs the world a Bennett witch's restraint."
    ],
    "facts": [
      "He is the reason Damon's guilt is not abstract: the show gives it a face that talks back."
    ],
    "connections": [
      {
        "id": "damon",
        "relation": "betrayed by"
      },
      {
        "id": "bonnie",
        "relation": "loved"
      },
      {
        "id": "sybil",
        "relation": "enslaved by"
      },
      {
        "id": "stefan",
        "relation": "killed by"
      },
      {
        "id": "alaric",
        "relation": "worked with"
      }
    ]
  },
  {
    "id": "mason",
    "name": "Mason Lockwood",
    "alsoKnownAs": "",
    "lived": "– 2010",
    "kind": "Werewolf",
    "house": "Lockwood",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "wolf",
    "oneLine": "The first werewolf on screen, and Katherine’s tool.",
    "biography": [
      "Tyler's uncle, who triggered the Lockwood gene by causing a death and came back to Mystic Falls to find the moonstone. Katherine used him for it, and Damon tortured and killed him for it."
    ],
    "facts": [
      "His death is what teaches the town that a werewolf bite kills vampires."
    ],
    "connections": [
      {
        "id": "tyler",
        "relation": "uncle"
      },
      {
        "id": "katherine",
        "relation": "used by"
      },
      {
        "id": "damon",
        "relation": "killed by"
      },
      {
        "id": "jules",
        "relation": "ally"
      }
    ]
  },
  {
    "id": "jules",
    "name": "Jules",
    "alsoKnownAs": "",
    "lived": "– 2010",
    "kind": "Werewolf",
    "house": "A wolf pack",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "wolf",
    "oneLine": "The werewolf in Klaus’s sacrifice.",
    "biography": [
      "A werewolf who comes to Mystic Falls looking for Mason and ends up on Klaus's altar as the werewolf component of the ritual that breaks his curse."
    ],
    "facts": [
      "She is one of three people killed to make Klaus a hybrid; the others are Jenna Sommers and Elena."
    ],
    "connections": [
      {
        "id": "klaus",
        "relation": "killed by"
      },
      {
        "id": "mason",
        "relation": "looked for"
      },
      {
        "id": "tyler",
        "relation": "mentored"
      }
    ]
  },
  {
    "id": "carol",
    "name": "Carol Lockwood",
    "alsoKnownAs": "",
    "lived": "– 2012",
    "kind": "Human",
    "house": "Lockwood · Founders",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "house",
    "oneLine": "Mayor of a town she was lying to.",
    "biography": [
      "Tyler's mother and mayor of Mystic Falls, a Founders' Council member who does not know her own family carries the werewolf gene until the Gilbert device incapacitates her son. She is drowned by Klaus as a message to Tyler."
    ],
    "facts": [
      "The Lockwood family secret survived generations by simply never being discussed."
    ],
    "connections": [
      {
        "id": "tyler",
        "relation": "mother"
      },
      {
        "id": "klaus",
        "relation": "killed by"
      },
      {
        "id": "liz",
        "relation": "colleague"
      }
    ]
  },
  {
    "id": "pearl",
    "name": "Pearl",
    "alsoKnownAs": "",
    "lived": "– 2010",
    "kind": "Vampire",
    "house": "The tomb vampires",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "vamp",
    "oneLine": "One of the twenty-six under the church.",
    "biography": [
      "A vampire sealed in the tomb by Emily Bennett in 1864 and released 145 years later, along with her daughter Anna. She wants to rebuild a life in Mystic Falls and is staked by John Gilbert within weeks of getting out."
    ],
    "facts": [
      "The tomb vampires' release is what turns the first season's mystery into a war."
    ],
    "connections": [
      {
        "id": "anna",
        "relation": "mother"
      },
      {
        "id": "emily",
        "relation": "sealed by"
      },
      {
        "id": "johngilbert",
        "relation": "killed by"
      },
      {
        "id": "katherine",
        "relation": "associate"
      }
    ]
  },
  {
    "id": "anna",
    "name": "Anna",
    "alsoKnownAs": "Annabelle",
    "lived": "– 2010",
    "kind": "Vampire",
    "house": "The tomb vampires",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "vamp",
    "oneLine": "Waited 145 years to open a tomb her mother was in.",
    "biography": [
      "Pearl's daughter, who spent a century and a half working out how to open the tomb her mother was sealed in, and who falls in love with Jeremy Gilbert while doing it. She is killed by John Gilbert and returns repeatedly as a ghost."
    ],
    "facts": [
      "Her blood heals Jeremy rather than turning him — he wakes up human. He only becomes a medium later, after Bonnie brings him back from a bullet."
    ],
    "connections": [
      {
        "id": "pearl",
        "relation": "daughter"
      },
      {
        "id": "jeremy",
        "relation": "loved"
      },
      {
        "id": "johngilbert",
        "relation": "killed by"
      }
    ]
  },
  {
    "id": "shane",
    "name": "Atticus Shane",
    "alsoKnownAs": "Professor Shane",
    "lived": "– 2013",
    "kind": "Human",
    "house": "Silas’s cult",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "origin",
    "oneLine": "Orchestrated the cure hunt to get his dead wife back.",
    "biography": [
      "An occult studies professor at Whitmore who engineers the entire expedition to Silas's island — twelve human sacrifices, twelve vampires, twelve hybrids — while pretending to be a helpful academic. He is working for Silas, who has promised to raise his dead wife and son when the Other Side falls."
    ],
    "facts": [
      "He teaches Bonnie Expression, a raw and corrupting form of magic that answers to nothing, which nearly destroys her."
    ],
    "connections": [
      {
        "id": "silas",
        "relation": "served"
      },
      {
        "id": "bonnie",
        "relation": "taught"
      },
      {
        "id": "jeremy",
        "relation": "used"
      },
      {
        "id": "vaughn",
        "relation": "opposed by"
      }
    ]
  },
  {
    "id": "connor",
    "name": "Connor Jordan",
    "alsoKnownAs": "",
    "lived": "– 2012",
    "kind": "Human · hunter of the Five",
    "house": "The Five",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "vamp",
    "oneLine": "The hunter whose death activates Jeremy.",
    "biography": [
      "A member of the Brotherhood of the Five who arrives in Mystic Falls in 2012 with a growing tattoo nobody else can see. Elena kills him, which inflicts the Hunter's Curse on her, and his death activates Jeremy Gilbert as the next hunter."
    ],
    "facts": [
      "Killing a hunter of the Five means hallucinating your victims until you kill yourself. Elena nearly does."
    ],
    "connections": [
      {
        "id": "jeremy",
        "relation": "succeeded by"
      },
      {
        "id": "elena",
        "relation": "killed by"
      },
      {
        "id": "alexander",
        "relation": "of the same line"
      }
    ]
  },
  {
    "id": "alexander",
    "name": "Alexander",
    "alsoKnownAs": "",
    "lived": "12th century",
    "kind": "Human · hunter of the Five",
    "house": "The Five",
    "appearsIn": "TVD (flashback)",
    "group": "mysticfalls",
    "category": "vamp",
    "oneLine": "The hunter who daggered the Mikaelsons — all but Klaus.",
    "biography": [
      "One of the original Brotherhood, who befriended Rebekah Mikaelson, learned everything about her family, and then daggered every Mikaelson except Klaus at a dinner he had arranged in 1114 — the daggers do not work on a hybrid, so Klaus woke and killed all five hunters. Rebekah has not forgotten it."
    ],
    "facts": [
      "He is where the silver-dagger-and-white-oak-ash method comes from."
    ],
    "connections": [
      {
        "id": "rebekah",
        "relation": "betrayed"
      },
      {
        "id": "qetsiyah",
        "relation": "created by"
      },
      {
        "id": "connor",
        "relation": "of the same line"
      }
    ]
  },
  {
    "id": "vaughn",
    "name": "Galen Vaughn",
    "alsoKnownAs": "",
    "lived": "– 2013",
    "kind": "Human · hunter of the Five",
    "house": "The Five",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "vamp",
    "oneLine": "The last of the Five, and the first to the island.",
    "biography": [
      "A Scottish hunter and the last surviving member of the brotherhood, who reaches Silas's tomb ahead of everyone else and understands, better than the rest, exactly what is buried there."
    ],
    "facts": [
      "He is the only person in the cure hunt whose motives are consistent from beginning to end."
    ],
    "connections": [
      {
        "id": "shane",
        "relation": "opposed"
      },
      {
        "id": "silas",
        "relation": "hunted"
      },
      {
        "id": "jeremy",
        "relation": "rival"
      }
    ]
  },
  {
    "id": "rayna",
    "name": "Rayna Cruz",
    "alsoKnownAs": "The Huntress",
    "lived": "1800s – 2016",
    "kind": "Human · huntress with eight lives",
    "house": "The Everlasting",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "vamp",
    "oneLine": "A sword, a stone, and eight chances.",
    "biography": [
      "The daughter of Vicente Cruz, a hunter of the Brotherhood of the Five, given eight lives by the shamans who died to make her sword. Her blade brands a vampire, and the mark makes every other vampire on Earth hunt whoever carries it. Her Phoenix Stone traps vampire souls in bespoke hells built out of their own worst memories.",
      "She marks Stefan Salvatore, which is what drives him to New Orleans and produces the best crossover the two shows ever did."
    ],
    "facts": [
      "Damon and Stefan both spend time inside the Phoenix Stone and neither comes out right.",
      "The mark eventually passes to Bonnie Bennett, turning her into the target of every vampire alive."
    ],
    "connections": [
      {
        "id": "stefan",
        "relation": "marked"
      },
      {
        "id": "bonnie",
        "relation": "passed mark to"
      },
      {
        "id": "damon",
        "relation": "hunted"
      },
      {
        "id": "elijah",
        "relation": "tormented"
      }
    ]
  },
  {
    "id": "joshuaparker",
    "name": "Joshua Parker",
    "alsoKnownAs": "",
    "lived": "– 2015",
    "kind": "Witch",
    "house": "Gemini coven",
    "appearsIn": "TVD",
    "group": "gemini",
    "category": "witch",
    "oneLine": "Would sacrifice any of his children to the tradition.",
    "biography": [
      "Leader of the Gemini coven, and the man who sealed his own son into a prison world and raised two more sets of twins knowing what the Merge would do to them. The coven's lives are linked to whoever leads it. Kai takes the leadership by winning the Merge — and then cuts his own throat, and every Gemini witch on Earth, Joshua included, dies with him."
    ],
    "facts": [
      "He is the show's clearest statement that tradition and love are not the same thing."
    ],
    "connections": [
      {
        "id": "kai",
        "relation": "father"
      },
      {
        "id": "jo",
        "relation": "father"
      },
      {
        "id": "luke",
        "relation": "father"
      },
      {
        "id": "liv",
        "relation": "father"
      },
      {
        "id": "gemini",
        "relation": "led"
      }
    ]
  },
  {
    "id": "kai",
    "name": "Malachai Parker",
    "alsoKnownAs": "Kai",
    "lived": "1972 – 2020",
    "kind": "Siphoner witch → heretic",
    "house": "Gemini coven",
    "appearsIn": "TVD · Legacies",
    "group": "gemini",
    "category": "witch",
    "oneLine": "The most effective villain in the franchise.",
    "biography": [
      "A siphoner born to the Gemini coven with no magic of his own, treated as an abomination by his own father, and a genuine sociopath who murdered four of his siblings at twenty-two. He was sealed in a 1994 prison world for eighteen years until Bonnie Bennett and Damon Salvatore landed there and he came back out with them.",
      "He merges with his twin Luke, murders his sister Jo at her own wedding to Alaric, links Elena's life to Bonnie's so that Elena sleeps until Bonnie dies, and wipes out the Gemini coven by cutting his own throat while leading it — every Gemini life was tied to his. He returns in Legacies to menace the next generation of Gemini twins and is beheaded by Alaric."
    ],
    "facts": [
      "His exit from the prison world required the ascendant, a Bennett witch's blood and a celestial event, which is why he needed Bonnie specifically.",
      "He removes two of the show's leads from play — Elena and Jo — in a single scene at a wedding."
    ],
    "connections": [
      {
        "id": "jo",
        "relation": "killed"
      },
      {
        "id": "luke",
        "relation": "merged with"
      },
      {
        "id": "joshuaparker",
        "relation": "killed"
      },
      {
        "id": "bonnie",
        "relation": "tormented"
      },
      {
        "id": "damon",
        "relation": "freed by"
      },
      {
        "id": "elena",
        "relation": "cursed"
      },
      {
        "id": "alaric",
        "relation": "killed by"
      },
      {
        "id": "josie",
        "relation": "threatened"
      }
    ]
  },
  {
    "id": "jo",
    "name": "Josette Laughlin",
    "alsoKnownAs": "Jo",
    "lived": "1970s – 2015",
    "kind": "Witch (magic siphoned away)",
    "house": "Gemini coven",
    "appearsIn": "TVD · Legacies",
    "group": "gemini",
    "category": "witch",
    "oneLine": "Hid from her own coven, and died at her wedding.",
    "biography": [
      "Kai's twin sister, who buried her own magic in a knife rather than merge with him, and lived for twenty years as an ordinary doctor. She marries Alaric Saltzman and is murdered by Kai at the reception while pregnant with their twins.",
      "The twins are saved by a Gemini spell that moves them into Caroline Forbes. Jo is briefly resurrected in Legacies and gets one conversation with the daughters she never met."
    ],
    "facts": [
      "Her death is the pivot the last three seasons of TVD turn on, and the origin of the whole of Legacies."
    ],
    "connections": [
      {
        "id": "kai",
        "relation": "twin"
      },
      {
        "id": "alaric",
        "relation": "married"
      },
      {
        "id": "josie",
        "relation": "mother"
      },
      {
        "id": "lizzie",
        "relation": "mother"
      },
      {
        "id": "caroline",
        "relation": "carried by"
      }
    ]
  },
  {
    "id": "luke",
    "name": "Luke Parker",
    "alsoKnownAs": "",
    "lived": "– 2015",
    "kind": "Witch",
    "house": "Gemini coven",
    "appearsIn": "TVD",
    "group": "gemini",
    "category": "witch",
    "oneLine": "Merged with Kai so his sister would not have to.",
    "biography": [
      "One of Joshua Parker's younger twins, who takes Jo's place in the Merge against Kai and loses. It is a deliberate sacrifice and the show treats it as one."
    ],
    "facts": [
      "The Merge does not kill instantly — the loser is absorbed, which the show is careful to make look horrible."
    ],
    "connections": [
      {
        "id": "liv",
        "relation": "twin"
      },
      {
        "id": "kai",
        "relation": "merged with"
      },
      {
        "id": "joshuaparker",
        "relation": "son"
      }
    ]
  },
  {
    "id": "liv",
    "name": "Liv Parker",
    "alsoKnownAs": "",
    "lived": "– 2015",
    "kind": "Witch",
    "house": "Gemini coven",
    "appearsIn": "TVD",
    "group": "gemini",
    "category": "witch",
    "oneLine": "Survived the Merge and did not want to.",
    "biography": [
      "Luke's twin, who spends a season being told she must either kill her brother or die, and then loses him anyway. She dies shortly afterwards helping Tyler Lockwood."
    ],
    "facts": [
      "The Parker siblings between them demonstrate every possible outcome of the Merge except a good one."
    ],
    "connections": [
      {
        "id": "luke",
        "relation": "twin"
      },
      {
        "id": "kai",
        "relation": "sibling"
      },
      {
        "id": "tyler",
        "relation": "helped"
      }
    ]
  },
  {
    "id": "josie",
    "name": "Josie Saltzman",
    "alsoKnownAs": "Josette",
    "lived": "2014 – living",
    "kind": "Siphoner witch",
    "house": "Saltzman · Gemini",
    "appearsIn": "Legacies",
    "group": "gemini",
    "category": "witch",
    "oneLine": "The accommodating twin, which nearly kills everyone.",
    "biography": [
      "Alaric and Jo's daughter, carried by Caroline Forbes, and named for a mother she never met. A siphoner: no magic of her own, only what she can draw out of other magical things. She spends her childhood being the easy one, absorbing everyone else's needs, and in her teens absorbs an enormous amount of dark magic and nearly destroys the school.",
      "Her recovery is treated seriously and at length, which is unusual for this franchise and to its credit. The Merge never happens — not because anyone solves it, but because Lizzie is killed by Hope and comes back a vampire, which takes her out of the ritual entirely."
    ],
    "facts": [
      "She travels to New Orleans to ask Freya Mikaelson for help, which is one of the tidiest crossovers Legacies does."
    ],
    "connections": [
      {
        "id": "lizzie",
        "relation": "twin"
      },
      {
        "id": "alaric",
        "relation": "father"
      },
      {
        "id": "jo",
        "relation": "mother"
      },
      {
        "id": "caroline",
        "relation": "carried by"
      },
      {
        "id": "hope",
        "relation": "friend"
      },
      {
        "id": "landon",
        "relation": "friend"
      },
      {
        "id": "kai",
        "relation": "threatened by"
      }
    ]
  },
  {
    "id": "lizzie",
    "name": "Lizzie Saltzman",
    "alsoKnownAs": "Elizabeth",
    "lived": "2014 – living",
    "kind": "Siphoner witch",
    "house": "Saltzman · Gemini",
    "appearsIn": "Legacies",
    "group": "gemini",
    "category": "witch",
    "oneLine": "The loud twin, told she is the problem until she believes it.",
    "biography": [
      "Josie's twin, named for Elizabeth Forbes. Louder, angrier, and openly struggling in a way the school has no idea how to handle — the show names her bipolar disorder plainly and does not use it as a punchline.",
      "Her arc is about being cast as the difficult one for so long that she stops arguing, and then deciding not to accept it. She is the more sympathetic twin by a distance, and she knows exactly how that sounds."
    ],
    "facts": [
      "Caroline Forbes writes to her from the road throughout the series, and the letters are read aloud."
    ],
    "connections": [
      {
        "id": "josie",
        "relation": "twin"
      },
      {
        "id": "alaric",
        "relation": "father"
      },
      {
        "id": "jo",
        "relation": "mother"
      },
      {
        "id": "caroline",
        "relation": "carried by"
      },
      {
        "id": "hope",
        "relation": "friend"
      },
      {
        "id": "mg",
        "relation": "loved by"
      },
      {
        "id": "seline",
        "relation": "targeted by"
      }
    ]
  },
  {
    "id": "nora",
    "name": "Nora Hildegard",
    "alsoKnownAs": "",
    "lived": "1800s – 2016",
    "kind": "Heretic (siphoner-vampire)",
    "house": "The Heretics",
    "appearsIn": "TVD",
    "group": "gemini",
    "category": "witch",
    "oneLine": "A century-long relationship in the middle of a war.",
    "biography": [
      "One of Lily Salvatore's Heretics, and half of the most stable relationship in the arc: she and Mary Louise have been together for over a hundred years, and the show treats it as the only genuinely settled thing about any of them."
    ],
    "facts": [
      "She and Mary Louise die together, which is the point."
    ],
    "connections": [
      {
        "id": "marylouise",
        "relation": "partner"
      },
      {
        "id": "lily",
        "relation": "turned by"
      },
      {
        "id": "valerie",
        "relation": "sister-in-arms"
      }
    ]
  },
  {
    "id": "marylouise",
    "name": "Mary Louise",
    "alsoKnownAs": "",
    "lived": "1800s – 2016",
    "kind": "Heretic (siphoner-vampire)",
    "house": "The Heretics",
    "appearsIn": "TVD",
    "group": "gemini",
    "category": "witch",
    "oneLine": "The most dangerous of the Heretics, and the most loyal.",
    "biography": [
      "Nora's partner of a century, and Lily's fiercest defender. She is the one who most resents the Salvatores for turning up and reclaiming a mother she considers hers."
    ],
    "facts": [
      "Her fury is inherited: the Gemini exiled her for being a siphoner, and Lily gave her a family instead."
    ],
    "connections": [
      {
        "id": "nora",
        "relation": "partner"
      },
      {
        "id": "lily",
        "relation": "turned by"
      },
      {
        "id": "damon",
        "relation": "enemy"
      }
    ]
  },
  {
    "id": "beau",
    "name": "Beau",
    "alsoKnownAs": "",
    "lived": "1800s – 2016",
    "kind": "Heretic (siphoner-vampire)",
    "house": "The Heretics",
    "appearsIn": "TVD",
    "group": "gemini",
    "category": "witch",
    "oneLine": "An opera singer with no voice left.",
    "biography": [
      "An opera singer before he turned, whose vocal cords were cut by Rayna Cruz's blade. He cannot speak and never does; everything he communicates is gesture, presence and magic."
    ],
    "facts": [
      "His silence makes him the only Heretic nobody manages to manipulate."
    ],
    "connections": [
      {
        "id": "lily",
        "relation": "turned by"
      },
      {
        "id": "valerie",
        "relation": "ally"
      },
      {
        "id": "nora",
        "relation": "ally"
      }
    ]
  },
  {
    "id": "malcolm",
    "name": "Malcolm",
    "alsoKnownAs": "",
    "lived": "1800s – 2015",
    "kind": "Heretic (siphoner-vampire)",
    "house": "The Heretics",
    "appearsIn": "TVD",
    "group": "gemini",
    "category": "witch",
    "oneLine": "The first Heretic to die, and the reason the war starts.",
    "biography": [
      "Lily's eldest Heretic, killed by Damon shortly after the family is released. His death is what turns Lily against her sons permanently."
    ],
    "facts": [
      "Damon kills him to hurt his mother, which is a sentence that explains most of Damon Salvatore."
    ],
    "connections": [
      {
        "id": "lily",
        "relation": "turned by"
      },
      {
        "id": "damon",
        "relation": "killed by"
      }
    ]
  },
  {
    "id": "davina",
    "name": "Davina Claire",
    "alsoKnownAs": "The Harvest girl",
    "lived": "1990s – living",
    "kind": "Witch · Regent",
    "house": "New Orleans covens",
    "appearsIn": "TO",
    "group": "nola",
    "category": "witch",
    "oneLine": "A teenager with more raw power than any coven, used by everyone.",
    "biography": [
      "One of four girls chosen for the Harvest — a ritual in which the coven sacrifices four of its own to renew its connection to the Ancestors. Three died; Marcel's vampires carried her off before her throat was cut and was hidden by Marcel Gerard in an attic, where he used her power to suppress the very covens she came from.",
      "She becomes Regent of the nine covens, destroys the Ancestors entirely, dies, is resurrected, and eventually leaves New Orleans with Kol Mikaelson. She is the most powerful witch the city has produced in centuries and spends most of her life being someone else's instrument."
    ],
    "facts": [
      "Destroying the Ancestors frees New Orleans witchcraft and simultaneously guts its power source. She does it anyway.",
      "Hers is one of three Mikaelson romances that end with both parties alive — alongside Freya and Keelin, and Rebekah and Marcel."
    ],
    "connections": [
      {
        "id": "marcel",
        "relation": "protected by"
      },
      {
        "id": "kol",
        "relation": "loved"
      },
      {
        "id": "vincent",
        "relation": "allied"
      },
      {
        "id": "monique",
        "relation": "Harvest sister"
      },
      {
        "id": "klaus",
        "relation": "opposed"
      }
    ]
  },
  {
    "id": "cami",
    "name": "Camille O’Connell",
    "alsoKnownAs": "Cami",
    "lived": "1990s – 2016",
    "kind": "Human → vampire",
    "house": "O’Connell · the human faction",
    "appearsIn": "TO",
    "group": "nola",
    "category": "house",
    "oneLine": "A psychologist who says the obvious thing out loud.",
    "biography": [
      "A graduate student in psychology who ends up as the human faction's representative and, more importantly, as the one person willing to tell Klaus Mikaelson exactly what is wrong with him to his face. She is compelled, used, and lied to repeatedly and keeps coming back on her own terms.",
      "Aurora turns her — compelling her to cut her own throat with Aurora's blood in her system — and Lucien's venom finishes her in 2016. Klaus's grief over her is the first time the character is allowed to be simply sad."
    ],
    "facts": [
      "Her uncle Kieran held the human faction's seat before her, and the compact between humans, witches and vampires runs through it."
    ],
    "connections": [
      {
        "id": "klaus",
        "relation": "challenged"
      },
      {
        "id": "kieran",
        "relation": "niece"
      },
      {
        "id": "marcel",
        "relation": "ally"
      },
      {
        "id": "lucien",
        "relation": "killed by"
      },
      {
        "id": "vincent",
        "relation": "friend"
      }
    ]
  },
  {
    "id": "josh",
    "name": "Joshua Rosza",
    "alsoKnownAs": "Josh",
    "lived": "1990s – 2025",
    "kind": "Vampire",
    "house": "Marcel’s vampires",
    "appearsIn": "TO",
    "group": "nola",
    "category": "vamp",
    "oneLine": "An ordinary person turned into a soldier in someone else’s war.",
    "biography": [
      "A young man turned by Marcel's vampires and immediately compelled by Klaus into spying on Marcel, because Klaus is a great deal better at compulsion than anyone Josh knows. He becomes Davina's closest friend and one of the few characters in New Orleans with no ambitions at all beyond surviving and having a life."
    ],
    "facts": [
      "Aiden, a werewolf, was his boyfriend — the show's central vampire-and-wolf romance — until Dahlia killed him. Josh himself dies in the final season, of werewolf venom, in Marcel's arms."
    ],
    "connections": [
      {
        "id": "marcel",
        "relation": "sired by"
      },
      {
        "id": "davina",
        "relation": "best friend"
      },
      {
        "id": "klaus",
        "relation": "compelled by"
      }
    ]
  },
  {
    "id": "vincent",
    "name": "Vincent Griffith",
    "alsoKnownAs": "Finn’s host",
    "lived": "1980s – living",
    "kind": "Witch",
    "house": "New Orleans covens",
    "appearsIn": "TO",
    "group": "nola",
    "category": "witch",
    "oneLine": "The only New Orleans witch who consistently refuses to be used.",
    "biography": [
      "A powerful witch who was possessed by Finn Mikaelson, forced to serve the Ancestors as Regent, and who spends the rest of the series trying to build a version of New Orleans witchcraft that does not run on child sacrifice and dead people's demands.",
      "He is the one who works out what the Hollow is and how to contain her, and he is the closest thing the city has to a conscience."
    ],
    "facts": [
      "He wants the Mikaelsons gone more than any other character and is also the one who saves them most often."
    ],
    "connections": [
      {
        "id": "finn",
        "relation": "possessed by"
      },
      {
        "id": "inadu",
        "relation": "opposed"
      },
      {
        "id": "davina",
        "relation": "allied"
      },
      {
        "id": "marcel",
        "relation": "ally"
      },
      {
        "id": "cami",
        "relation": "friend"
      }
    ]
  },
  {
    "id": "sophie",
    "name": "Sophie Deveraux",
    "alsoKnownAs": "",
    "lived": "– 2013",
    "kind": "Witch",
    "house": "French Quarter coven",
    "appearsIn": "TO",
    "group": "nola",
    "category": "witch",
    "oneLine": "The witch who starts the entire series.",
    "biography": [
      "A New Orleans witch who links her own life to Hayley Marshall's and uses the pregnancy as leverage to force Klaus back to the city. Everything in The Originals proceeds from her gamble."
    ],
    "facts": [
      "Her sister Jane-Anne is killed by Marcel for practising magic, which is what makes the covens desperate enough to try it."
    ],
    "connections": [
      {
        "id": "hayley",
        "relation": "linked to"
      },
      {
        "id": "klaus",
        "relation": "manipulated"
      },
      {
        "id": "monique",
        "relation": "niece"
      },
      {
        "id": "marcel",
        "relation": "opposed"
      }
    ]
  },
  {
    "id": "monique",
    "name": "Monique Deveraux",
    "alsoKnownAs": "",
    "lived": "– 2014",
    "kind": "Witch",
    "house": "French Quarter coven",
    "appearsIn": "TO",
    "group": "nola",
    "category": "witch",
    "oneLine": "A Harvest girl who came back believing the Ancestors.",
    "biography": [
      "One of the four Harvest girls, resurrected by the completed ritual and entirely committed to the Ancestors' agenda, including killing the Mikaelson child. She is the argument against the covens' whole theology, delivered by a teenager."
    ],
    "facts": [
      "She is Davina's opposite: same ritual, same power, entirely different conclusion."
    ],
    "connections": [
      {
        "id": "davina",
        "relation": "Harvest sister"
      },
      {
        "id": "sophie",
        "relation": "aunt"
      },
      {
        "id": "genevieve",
        "relation": "allied"
      }
    ]
  },
  {
    "id": "genevieve",
    "name": "Genevieve",
    "alsoKnownAs": "",
    "lived": "1910s – 2014",
    "kind": "Witch",
    "house": "French Quarter coven",
    "appearsIn": "TO",
    "group": "nola",
    "category": "witch",
    "oneLine": "A century of resentment, resurrected.",
    "biography": [
      "A witch who died of plague in 1919 after Rebekah betrayed her, brought back a century later by Céleste Dubois with power stolen from the Harvest, with a very long memory and a strong interest in making Klaus's life worse."
    ],
    "facts": [
      "Her return is the mechanism by which the show tells the audience what happened in 1919."
    ],
    "connections": [
      {
        "id": "rebekah",
        "relation": "betrayed by"
      },
      {
        "id": "klaus",
        "relation": "manipulated"
      },
      {
        "id": "monique",
        "relation": "allied"
      }
    ]
  },
  {
    "id": "celeste",
    "name": "Céleste Dubois",
    "alsoKnownAs": "",
    "lived": "19th century – 2014",
    "kind": "Witch",
    "house": "French Quarter coven",
    "appearsIn": "TO",
    "group": "nola",
    "category": "witch",
    "oneLine": "Body-hops for a century, and casts the Crescent curse from inside someone else.",
    "biography": [
      "Elijah Mikaelson's lover in the 19th century, killed in a riot he indirectly caused. She survives by moving from body to body for a century, and in 1991 — possessing the witch Brynne Deveraux — casts the curse that traps the Crescent pack in wolf form."
    ],
    "facts": [
      "Elijah's guilt over her is the reason he keeps a great many memories compelled out of his own head."
    ],
    "connections": [
      {
        "id": "elijah",
        "relation": "loved"
      },
      {
        "id": "crescent",
        "relation": "cursed"
      },
      {
        "id": "hayley",
        "relation": "cursed her pack"
      }
    ]
  },
  {
    "id": "keelin",
    "name": "Keelin",
    "alsoKnownAs": "",
    "lived": "1990s – living",
    "kind": "Werewolf · doctor",
    "house": "Malraux pack",
    "appearsIn": "TO",
    "group": "nola",
    "category": "wolf",
    "oneLine": "The last of the Malraux line, and Freya’s wife.",
    "biography": [
      "A doctor and the last surviving member of the Malraux werewolf pack, held captive by Freya Mikaelson so her venom could be made into an antidote to Marcel's bite, and then, improbably and slowly, the person Freya marries. They get the least complicated ending in the family."
    ],
    "facts": [
      "Freya took her for her venom, to brew an antidote to Marcel's upgraded-Original bite."
    ],
    "connections": [
      {
        "id": "freya",
        "relation": "married"
      },
      {
        "id": "hayley",
        "relation": "ally"
      },
      {
        "id": "klaus",
        "relation": "wary of"
      }
    ]
  },
  {
    "id": "jackson",
    "name": "Jackson Kenner",
    "alsoKnownAs": "",
    "lived": "1990s – 2016",
    "kind": "Werewolf",
    "house": "Crescent pack",
    "appearsIn": "TO",
    "group": "nola",
    "category": "wolf",
    "oneLine": "The Crescent alpha who married Hayley to free the pack.",
    "biography": [
      "The rightful alpha of the Crescent wolves, betrothed to Hayley by an arrangement made before either of them was born, and the man who marries her in a unification ritual that gives the whole pack the ability to turn at will and keep their minds.",
      "Klaus permits it and resents it permanently. Tristan de Martel rips his heart out in front of Hayley."
    ],
    "facts": [
      "The unification ritual is the single biggest improvement in werewolf quality of life in the franchise's history."
    ],
    "connections": [
      {
        "id": "hayley",
        "relation": "married"
      },
      {
        "id": "klaus",
        "relation": "resented by"
      },
      {
        "id": "aurora",
        "relation": "killed by"
      },
      {
        "id": "crescent",
        "relation": "alpha of"
      }
    ]
  },
  {
    "id": "kieran",
    "name": "Kieran O’Connell",
    "alsoKnownAs": "Father Kieran",
    "lived": "– 2014",
    "kind": "Human",
    "house": "The human faction",
    "appearsIn": "TO",
    "group": "nola",
    "category": "house",
    "oneLine": "The priest who held the compact.",
    "biography": [
      "Cami's uncle, a Catholic priest, and the human faction's representative in the compact that keeps New Orleans from open war. He knows exactly what the city is and negotiates with it anyway."
    ],
    "facts": [
      "The O'Connell family hold the human seat for generations; when Kieran dies it passes to Cami."
    ],
    "connections": [
      {
        "id": "cami",
        "relation": "uncle"
      },
      {
        "id": "marcel",
        "relation": "negotiated with"
      },
      {
        "id": "klaus",
        "relation": "negotiated with"
      }
    ]
  },
  {
    "id": "lucien",
    "name": "Lucien Castle",
    "alsoKnownAs": "The Beast",
    "lived": "11th century – 2016",
    "kind": "Vampire → upgraded Original",
    "house": "Klaus’s sireline",
    "appearsIn": "TO",
    "group": "nola",
    "category": "vamp",
    "oneLine": "The first vampire the Mikaelsons ever made.",
    "biography": [
      "A servant of the de Martel household in the 11th century, turned by Klaus and then compelled by Elijah to believe he was Klaus — a decoy while the family hid from Mikael, and then left behind. Nine hundred years of being underestimated later, he engineers the prophecy that will destroy the family, refines Esther's original magic into a serum, and makes himself stronger than the Originals — a Beast whose bite kills them."
    ],
    "facts": [
      "His serum is later used on Marcel, which permanently changes what is possible in the franchise.",
      "He heads Klaus's sireline, which contains most of the vampires in the world."
    ],
    "connections": [
      {
        "id": "klaus",
        "relation": "sired by"
      },
      {
        "id": "tristan",
        "relation": "rival"
      },
      {
        "id": "aurora",
        "relation": "loved"
      },
      {
        "id": "marcel",
        "relation": "preceded"
      },
      {
        "id": "cami",
        "relation": "killed"
      }
    ]
  },
  {
    "id": "tristan",
    "name": "Tristan de Martel",
    "alsoKnownAs": "",
    "lived": "11th century – imprisoned",
    "kind": "Vampire",
    "house": "Elijah’s sireline · the Strix",
    "appearsIn": "TO",
    "group": "nola",
    "category": "vamp",
    "oneLine": "Seized the Strix from Elijah. Ends up in a box at the bottom of the sea.",
    "biography": [
      "A nobleman turned by Elijah Mikaelson in the 11th century, who seized command of the Strix — Elijah's own creation — a society of elite vampires that outlives him by centuries and quietly runs a great deal of the world's money. Elijah once punished him by compelling him to walk into the sea over and over.",
      "He ends the story locked in a sealed container at the bottom of the ocean, drowning and reviving — until Elijah's death takes his whole sireline, Tristan with it."
    ],
    "facts": [
      "He heads Elijah's sireline, and his interest in the family is entirely about who owns whom."
    ],
    "connections": [
      {
        "id": "elijah",
        "relation": "sired by"
      },
      {
        "id": "aurora",
        "relation": "brother"
      },
      {
        "id": "lucien",
        "relation": "rival"
      },
      {
        "id": "marcel",
        "relation": "recruited"
      }
    ]
  },
  {
    "id": "aurora",
    "name": "Aurora de Martel",
    "alsoKnownAs": "",
    "lived": "11th century – 2022",
    "kind": "Vampire",
    "house": "Rebekah’s sireline",
    "appearsIn": "TO · Legacies",
    "group": "nola",
    "category": "vamp",
    "oneLine": "The only character on screen who remembers the world before vampires.",
    "biography": [
      "Tristan's sister, whom Klaus loved in the 11th century and Rebekah turned against his explicit wishes. She is arguably the first vampire genuinely driven mad by immortality, and she has had a thousand years to become very good at it.",
      "She survives everything The Originals throws at her, is entombed in a wall by Klaus, is let out by Lucien, and turns up in the final season of Legacies as a season-long antagonist — the only thread connecting the 11th century directly to the last stretch of the franchise. Ken's spear kills her, shielding Hope, and she gets a Viking funeral."
    ],
    "facts": [
      "She turns Camille O'Connell by compulsion, and her grudge against Klaus is a thousand years old and entirely personal.",
      "She heads Rebekah's sireline."
    ],
    "connections": [
      {
        "id": "klaus",
        "relation": "loved"
      },
      {
        "id": "rebekah",
        "relation": "sired by"
      },
      {
        "id": "tristan",
        "relation": "sister"
      },
      {
        "id": "jackson",
        "relation": "killed"
      },
      {
        "id": "hope",
        "relation": "antagonist of"
      },
      {
        "id": "lizzie",
        "relation": "antagonist of"
      }
    ]
  },
  {
    "id": "tunde",
    "name": "Papa Tunde",
    "alsoKnownAs": "",
    "lived": "– 1919",
    "kind": "Witch",
    "house": "A rival coven",
    "appearsIn": "TO",
    "group": "nola",
    "category": "witch",
    "oneLine": "A blade that holds a century of agony.",
    "biography": [
      "A witch who came to New Orleans in the early 20th century to take the city and was destroyed by the Mikaelsons. His power was bound into a blade that inflicts unbearable pain on anything it stabs, including an Original, and the blade circulates for decades afterwards."
    ],
    "facts": [
      "Papa Tunde's blade is the most-passed-around weapon in The Originals, in the same way the moonstone was in TVD."
    ],
    "connections": [
      {
        "id": "klaus",
        "relation": "destroyed by"
      },
      {
        "id": "elijah",
        "relation": "tortured"
      },
      {
        "id": "marcel",
        "relation": "used the blade"
      }
    ]
  },
  {
    "id": "landon",
    "name": "Landon Kirby",
    "alsoKnownAs": "",
    "lived": "2000s – 2022",
    "kind": "Phoenix → Ferryman of Limbo",
    "house": "Malivore",
    "appearsIn": "Legacies",
    "group": "legacies",
    "category": "death",
    "oneLine": "Dies constantly. Keeps coming back.",
    "biography": [
      "A foster kid with no idea what he is, who turns out to be the son of Malivore — the pit built to erase monsters from the world — and a phoenix, which means he resurrects every time he is killed, and he is killed a lot.",
      "He is what the pit wants back, and he is the show's argument that being a monster is a job description rather than a nature. He and Hope are the central relationship of Legacies — and in the end his resurrections stop: he stays dead, and takes over as the Ferryman of Limbo."
    ],
    "facts": [
      "Raised in foster care with Rafael Waithe, who is a werewolf and the person he trusts most.",
      "His half-brother Clarke is Malivore's other son and considerably worse at being a person."
    ],
    "connections": [
      {
        "id": "hope",
        "relation": "loved"
      },
      {
        "id": "rafael",
        "relation": "foster brother"
      },
      {
        "id": "clarke",
        "relation": "half-brother"
      },
      {
        "id": "malivore",
        "relation": "son of"
      },
      {
        "id": "mg",
        "relation": "friend"
      }
    ]
  },
  {
    "id": "rafael",
    "name": "Rafael Waithe",
    "alsoKnownAs": "",
    "lived": "2000s – living",
    "kind": "Werewolf",
    "house": "Salvatore School",
    "appearsIn": "Legacies",
    "group": "legacies",
    "category": "wolf",
    "oneLine": "Triggered the curse in a car accident, like Tyler before him.",
    "biography": [
      "Landon's foster brother, who triggers the werewolf gene in a crash that kills his girlfriend and arrives at the Salvatore School with no idea such a place exists. He is the school's wolf pack leader in everything but title."
    ],
    "facts": [
      "His trigger is a near-exact repeat of Tyler Lockwood's, which the show does deliberately."
    ],
    "connections": [
      {
        "id": "landon",
        "relation": "foster brother"
      },
      {
        "id": "hope",
        "relation": "friend"
      },
      {
        "id": "jed",
        "relation": "packmate"
      }
    ]
  },
  {
    "id": "mg",
    "name": "Milton Greasley",
    "alsoKnownAs": "MG",
    "lived": "2000s – living",
    "kind": "Vampire",
    "house": "Salvatore School",
    "appearsIn": "Legacies",
    "group": "legacies",
    "category": "vamp",
    "oneLine": "A ripper who reads comics.",
    "biography": [
      "A vampire student, a comic-book obsessive, and — because the franchise cannot help itself — a ripper, whose blood urges are far worse than anyone at the school realises. He is the most decent person in the building and spends four seasons being afraid of himself."
    ],
    "facts": [
      "His ripper arc deliberately mirrors Stefan's, at teenage scale and with more honesty about therapy."
    ],
    "connections": [
      {
        "id": "lizzie",
        "relation": "loved"
      },
      {
        "id": "landon",
        "relation": "friend"
      },
      {
        "id": "kaleb",
        "relation": "sired by"
      },
      {
        "id": "alaric",
        "relation": "student of"
      }
    ]
  },
  {
    "id": "kaleb",
    "name": "Kaleb Hawkins",
    "alsoKnownAs": "",
    "lived": "2000s – living",
    "kind": "Vampire",
    "house": "Salvatore School",
    "appearsIn": "Legacies",
    "group": "legacies",
    "category": "vamp",
    "oneLine": "Malivore wore him for a while, and he came out of it.",
    "biography": [
      "A vampire student who is briefly Malivore's host — and briefly part dragon because of it. He is the school's most self-possessed student and the one most often used as a vessel by things older than the building."
    ],
    "facts": [
      "He did not turn MG: MG was already a vampire when Kaleb transferred in, and Kaleb's own sire is never named."
    ],
    "connections": [
      {
        "id": "mg",
        "relation": "sired"
      },
      {
        "id": "hope",
        "relation": "ally"
      },
      {
        "id": "ken",
        "relation": "possessed by"
      }
    ]
  },
  {
    "id": "jed",
    "name": "Jed Tien",
    "alsoKnownAs": "",
    "lived": "2000s – living",
    "kind": "Werewolf",
    "house": "Salvatore School",
    "appearsIn": "Legacies",
    "group": "legacies",
    "category": "wolf",
    "oneLine": "The school’s alpha, and the school’s best late-arriving character.",
    "biography": [
      "Leader of the Salvatore School wolf pack, introduced as a bully and gradually revealed as the most emotionally honest student in the building."
    ],
    "facts": [
      "His arc is the clearest example of Legacies being better at its supporting cast than its plot."
    ],
    "connections": [
      {
        "id": "rafael",
        "relation": "packmate"
      },
      {
        "id": "alaric",
        "relation": "student of"
      }
    ]
  },
  {
    "id": "clarke",
    "name": "Ryan Clarke",
    "alsoKnownAs": "",
    "lived": "– living",
    "kind": "Malivore’s son",
    "house": "Malivore",
    "appearsIn": "Legacies",
    "group": "legacies",
    "category": "death",
    "oneLine": "Landon’s half-brother, and a much worse person.",
    "biography": [
      "Malivore's other son, sent to retrieve Landon and the golden urn, and considerably more committed to his father's project. He is the franchise's most enjoyable mid-tier villain because he is entirely honest about what he wants."
    ],
    "facts": [
      "He and Landon are the same experiment run twice with different results, which the show is explicit about."
    ],
    "connections": [
      {
        "id": "landon",
        "relation": "half-brother"
      },
      {
        "id": "malivore",
        "relation": "son of"
      },
      {
        "id": "hope",
        "relation": "enemy"
      }
    ]
  },
  {
    "id": "necromancer",
    "name": "The Necromancer",
    "alsoKnownAs": "",
    "lived": "ancient – living",
    "kind": "Undead sorcerer",
    "house": "Malivore’s escapees",
    "appearsIn": "Legacies",
    "group": "legacies",
    "category": "death",
    "oneLine": "Raises the dead, badly, and enjoys it enormously.",
    "biography": [
      "An ancient sorcerer swallowed by Malivore and released, who can resurrect the dead and mostly uses the power for petty theatre. He is the comic register of the show and occasionally its most genuinely unsettling element."
    ],
    "facts": [
      "He resurrects the school's own dead — Rafael, Alyssa, Landon — which is how Legacies keeps taking its losses back."
    ],
    "connections": [
      {
        "id": "malivore",
        "relation": "escaped"
      },
      {
        "id": "landon",
        "relation": "tormented"
      },
      {
        "id": "ken",
        "relation": "served"
      }
    ]
  },
  {
    "id": "ken",
    "name": "Ken",
    "alsoKnownAs": "The god",
    "lived": "ancient – 2022",
    "kind": "God",
    "house": "The pantheon",
    "appearsIn": "Legacies",
    "group": "legacies",
    "category": "witch",
    "oneLine": "A god who was erased and came back for the world.",
    "biography": [
      "A god who was never eaten at all. Malivore could erase gods, so Ken's daughter Jen built magical sarcophagi and put the family to sleep until the pit was gone. He wakes when it is destroyed and sets about reclaiming a world that has entirely forgotten he existed. He is the last major antagonist of the franchise."
    ],
    "facts": [
      "His existence retroactively explains why the earlier shows never mentioned gods: the pantheon had put itself to sleep to survive Malivore, and slept through both series."
    ],
    "connections": [
      {
        "id": "malivore",
        "relation": "erased by"
      },
      {
        "id": "hope",
        "relation": "opposed"
      },
      {
        "id": "cleo",
        "relation": "opposed"
      },
      {
        "id": "kaleb",
        "relation": "possessed"
      }
    ]
  },
  {
    "id": "cleo",
    "name": "Cleo Sowande",
    "alsoKnownAs": "The Muse",
    "lived": "ancient – living",
    "kind": "Muse",
    "house": "Salvatore School",
    "appearsIn": "Legacies",
    "group": "legacies",
    "category": "witch",
    "oneLine": "Her power is inspiration itself.",
    "biography": [
      "One of the original muses, swallowed by Malivore and released, who arrives at the Salvatore School as a student and turns out to be the most interesting new idea the show has: a person whose power is the ability to inspire, which is both a gift and a way to make anyone do anything."
    ],
    "facts": [
      "She is the best-written character introduced in the last two seasons of the franchise."
    ],
    "connections": [
      {
        "id": "hope",
        "relation": "friend"
      },
      {
        "id": "ken",
        "relation": "opposed"
      },
      {
        "id": "malivore",
        "relation": "erased by"
      }
    ]
  },
  {
    "id": "alyssa",
    "name": "Alyssa Chang",
    "alsoKnownAs": "",
    "lived": "2000s – living",
    "kind": "Witch",
    "house": "Salvatore School",
    "appearsIn": "Legacies",
    "group": "legacies",
    "category": "witch",
    "oneLine": "A witch with a grudge and a stolen ascendant.",
    "biography": [
      "A Salvatore School student expelled and then readmitted, who links two ascendants together and banishes Alaric and the twins into the Gemini coven's old 2018 prison world. She is proof the Gemini technology outlived the Gemini."
    ],
    "facts": [
      "She reaches for Gemini prison-world technology barely five years after Kai wiped the coven out, and it still works."
    ],
    "connections": [
      {
        "id": "josie",
        "relation": "rival"
      },
      {
        "id": "lizzie",
        "relation": "rival"
      },
      {
        "id": "alaric",
        "relation": "student of"
      }
    ]
  },
  {
    "id": "ethan",
    "name": "Ethan Machado",
    "alsoKnownAs": "",
    "lived": "2000s – living",
    "kind": "Human → Pukwudgie → spirit",
    "house": "Mystic Falls",
    "appearsIn": "Legacies",
    "group": "legacies",
    "category": "house",
    "oneLine": "An ordinary Mystic Falls teenager, which never lasts.",
    "biography": [
      "A human student from the town who finds out what the school actually is, is turned into a Pukwudgie by Malivore, and ends the series dead and at peace as a spirit."
    ],
    "facts": [
      "He is the Matt Donovan role for the next generation, which the show acknowledges."
    ],
    "connections": [
      {
        "id": "lizzie",
        "relation": "friend"
      },
      {
        "id": "alaric",
        "relation": "known to"
      }
    ]
  },
  {
    "id": "dorian",
    "name": "Dorian Williams",
    "alsoKnownAs": "",
    "lived": "– living",
    "kind": "Human",
    "house": "Salvatore School",
    "appearsIn": "TVD · Legacies",
    "group": "legacies",
    "category": "house",
    "oneLine": "Runs the library, which in this franchise is a combat role.",
    "biography": [
      "Alaric's colleague from the Armory era who becomes the Salvatore School's librarian and researcher, and one of very few humans on staff who knows exactly what he signed up for."
    ],
    "facts": [
      "The school's research collection is essentially the Armory's, and Dorian is why it is usable."
    ],
    "connections": [
      {
        "id": "alaric",
        "relation": "colleague"
      },
      {
        "id": "hope",
        "relation": "taught"
      },
      {
        "id": "josie",
        "relation": "taught"
      }
    ]
  },
  {
    "id": "emma",
    "name": "Emma Tig",
    "alsoKnownAs": "",
    "lived": "– living",
    "kind": "Witch",
    "house": "Salvatore School",
    "appearsIn": "Legacies",
    "group": "legacies",
    "category": "witch",
    "oneLine": "School counsellor, and the only adult asking how anyone feels.",
    "biography": [
      "A witch and the school's counsellor, and the person who most consistently points out that these children are traumatised rather than merely powerful. Given the franchise's history, this is close to revolutionary."
    ],
    "facts": [
      "She casts the school's cloaking and containment spells, which is the least of what she does."
    ],
    "connections": [
      {
        "id": "alaric",
        "relation": "colleague"
      },
      {
        "id": "josie",
        "relation": "counselled"
      },
      {
        "id": "lizzie",
        "relation": "counselled"
      }
    ]
  },
  {
    "id": "rose",
    "name": "Rose-Marie",
    "alsoKnownAs": "Rose",
    "lived": "1450 – 2010",
    "kind": "Vampire",
    "house": "None",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "vamp",
    "oneLine": "Helped Katherine escape in 1492 and ran for five hundred years.",
    "biography": [
      "A vampire who, with Trevor, helped Katerina Petrova escape Klaus in 1492 — and then spent five centuries running from the Mikaelsons for it. She hands Elena over to Elijah in 2010 hoping to buy her own freedom, changes her mind, and dies of a werewolf bite in Damon Salvatore's care days later."
    ],
    "facts": [
      "Her death is the first time the show demonstrates that a wolf bite is fatal to vampires and that Damon can be gentle."
    ],
    "connections": [
      {
        "id": "katherine",
        "relation": "helped"
      },
      {
        "id": "trevor",
        "relation": "partner"
      },
      {
        "id": "damon",
        "relation": "died with"
      },
      {
        "id": "elijah",
        "relation": "fled from"
      }
    ]
  },
  {
    "id": "trevor",
    "name": "Trevor",
    "alsoKnownAs": "",
    "lived": "– 2010",
    "kind": "Vampire",
    "house": "None",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "vamp",
    "oneLine": "Beheaded by Elijah five hundred years late.",
    "biography": [
      "The vampire who fell for Katerina Petrova and gave her the escape route. It was Rose's blood, not his, that she turned on — but Elijah hunted them both for five centuries all the same. Elijah beheads him in 2010 the moment the debt is finally called in."
    ],
    "facts": [
      "It was Rose's blood, not his, that turned Katherine — Rose healed her wound without knowing what it was for."
    ],
    "connections": [
      {
        "id": "katherine",
        "relation": "turned"
      },
      {
        "id": "rose",
        "relation": "partner"
      },
      {
        "id": "elijah",
        "relation": "killed by"
      }
    ]
  },
  {
    "id": "greta",
    "name": "Greta Martin",
    "alsoKnownAs": "",
    "lived": "– 2010",
    "kind": "Witch",
    "house": "Klaus’s circle",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "witch",
    "oneLine": "The witch who performed Klaus’s sacrifice.",
    "biography": [
      "A witch who chose Klaus's side against her own family and cast the ritual that broke the hybrid curse in 2010 — the fire circles, the altar, all of it. Damon kills her in the chaos at the end of it and carries Elena's body away."
    ],
    "facts": [
      "Her brother Luka and father Jonas were working against Klaus at the same time, which is the whole tragedy in one family."
    ],
    "connections": [
      {
        "id": "klaus",
        "relation": "served"
      },
      {
        "id": "elena",
        "relation": "sacrificed"
      },
      {
        "id": "jenna",
        "relation": "sacrificed"
      },
      {
        "id": "bonnie",
        "relation": "opposed by"
      }
    ]
  },
  {
    "id": "meredith",
    "name": "Meredith Fell",
    "alsoKnownAs": "",
    "lived": "living",
    "kind": "Human",
    "house": "Fell · Founders",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "house",
    "oneLine": "A doctor who treats vampire blood as a medicine.",
    "biography": [
      "A Mystic Falls doctor and Founders' family descendant who quietly uses vampire blood to save patients who would otherwise die — the only person in town with a genuinely practical attitude to the supernatural. She sedates Alaric as he dies rather than let him turn, and later moves to Alaska."
    ],
    "facts": [
      "Her willingness to use vampire blood clinically is what saves several main characters and gets her accused of murder."
    ],
    "connections": [
      {
        "id": "alaric",
        "relation": "married"
      },
      {
        "id": "elena",
        "relation": "treated"
      },
      {
        "id": "damon",
        "relation": "ally"
      }
    ]
  },
  {
    "id": "oscar",
    "name": "Oscar",
    "alsoKnownAs": "",
    "lived": "1800s – 2015",
    "kind": "Heretic (siphoner-vampire)",
    "house": "The Heretics",
    "appearsIn": "TVD",
    "group": "gemini",
    "category": "witch",
    "oneLine": "The sixth Heretic, and the one nobody counts.",
    "biography": [
      "A Gemini siphoner cast out by his own coven, turned by Lily Salvatore, and sealed into the 1903 prison world with the rest of her found family. He is the first of them sent back out into the modern world to fetch the ascendant, and he never makes it home — Valerie kills him to keep Lily from getting her family back intact."
    ],
    "facts": [
      "There were six Heretics, not five. Oscar is routinely forgotten, including by summaries of the show."
    ],
    "connections": [
      {
        "id": "lily",
        "relation": "turned by"
      },
      {
        "id": "valerie",
        "relation": "killed by"
      },
      {
        "id": "gemini",
        "relation": "cast out by"
      },
      {
        "id": "damon",
        "relation": "entangled with"
      }
    ]
  },
  {
    "id": "maryporter",
    "name": "Mary Porter",
    "alsoKnownAs": "“Scary Mary”",
    "lived": "– 2013",
    "kind": "Vampire",
    "house": "Klaus’s sireline",
    "appearsIn": "TVD",
    "group": "mysticfalls",
    "category": "vamp",
    "oneLine": "The link that puts the entire main cast in Klaus’s bloodline.",
    "biography": [
      "An old vampire turned by Klaus, and the one who turned Rose-Marie. That makes the chain Klaus → Mary → Rose → Katherine → Stefan and Damon — which is how the Salvatores discover, in the middle of the hunt for the cure, that killing Klaus would kill almost everyone they know. Silas kills her for the information."
    ],
    "facts": [
      "She exists in the story for roughly one scene and is load-bearing for two whole seasons of plot."
    ],
    "connections": [
      {
        "id": "klaus",
        "relation": "sired by"
      },
      {
        "id": "rose",
        "relation": "turned"
      },
      {
        "id": "katherine",
        "relation": "ancestor of"
      },
      {
        "id": "silas",
        "relation": "killed by"
      }
    ]
  }
]
