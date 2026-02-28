//HTML Elements
const characterCreator = document.querySelector(".character-creator");
const raceSelect = document.getElementById("race-options");
const subRaceSelect = document.getElementById("sub-race-options");
const classSelect = document.getElementById("class-options");
const backgroundSelect = document.getElementById("background-options");
const languageSelect = document.getElementById("language-options");
const equipmentSelect = document.getElementById("equipment-options");
const background = document.querySelector(".background");
const race = document.querySelector(".race");
const subRace = document.querySelector(".sub-race");
const subRaceDisplay = document.querySelector("#sub-race-display");
const archetype = document.querySelector(".archetype");
const raceInfo = document.getElementById("race-info");
const modal = document.getElementById("modal-popup");
const imageModal = document.getElementById("image-modal-popup");
const weaponProficiencyModal = document.getElementById(
  "weapon-proficiency-modal-popup",
);
const armourProficiencyModal = document.getElementById(
  "armour-proficiency-modal-popup",
);
const toolProficiencyModal = document.getElementById(
  "tool-proficiency-modal-popup",
);
const equipment = document.getElementById("equipment-popup");
const diceRoller = document.getElementById("dice-popup");
const diceRollerInfo = document.querySelector(".dice-roller-info");
const diceRollerResult = document.querySelector(".dice-roller-result");
const language = document.getElementById("language-popup");
const savingThrow = document.getElementById("dice-result-popup");
const attackAndDamagePopup = document.getElementById(
  "attack-dice-result-popup",
);
const attackAndDamageTitle = document.getElementById("attack-damage-roll");
const attackAndDamageResult = document.getElementById(
  "attack-damage-roll-result",
);
const title = document.getElementById("title");
const weaponProficiencyTitle = document.getElementById(
  "weapon-proficiency-title",
);
const armourProficiencyTitle = document.getElementById(
  "armour-proficiency-title",
);
const toolProficiencyTitle = document.getElementById("tool-proficiency-title");
const imageTitle = document.getElementById("image-title");
const languageTitle = document.getElementById("language-title");
const equipmentTitle = document.getElementById("equipment-title");
const description = document.getElementById("description");
const weaponProficiencyDisplay = document.getElementById(
  "weapon-proficiencies",
);
const armourProficiencyDisplay = document.getElementById(
  "armour-proficiencies",
);
const toolProficiencyDisplay = document.getElementById("tool-proficiencies");
const imagePreview = document.getElementById("image-preview");
const savingThrowTitle = document.getElementById("saving-throw-title");
const savingThrowResult = document.getElementById("saving-throw-result");
const d20Img = document.getElementById("d20");
const attackd20Img = document.getElementById("attack-roll");
const openDiceRollerBtn = document.getElementById("roll-dice");
const acceptImagePreviewBtn = document.getElementById("accept-image-modal");
const closeBtn = document.getElementById("close-modal");
const closeWeaponProficiencyBtn = document.getElementById(
  "weapon-proficiency-close-modal",
);
const closeArmourProficiencyBtn = document.getElementById(
  "armour-proficiency-close-modal",
);
const closeToolProficiencyBtn = document.getElementById(
  "tool-proficiency-close-modal",
);
const closeImagePreviewBtn = document.getElementById("close-image-modal");
const closeEquipmentBtn = document.getElementById("close-equipment");
const closeDiceRollerBtn = document.getElementById("close-dice-roller");
const closeLangBtn = document.getElementById("close-language");
const closeSavingThrowBtn = document.getElementById("close-dice-result");
const closeAttackAndDamageRollBtn = document.getElementById(
  "close-attack-dice-result",
);
const rerollSavingThrowBtn = document.getElementById("repeat-dice-result");
const rerollDiceBtn = document.getElementById("repeat-dice-roll");
const rerollAttackDiceBtn = document.getElementById(
  "repeat-attack-dice-result",
);
const damageDiceBtn = document.getElementById("damage-dice-result");
const characterForm = document.querySelector(".form-container form");
const characterName = document.querySelector("#character");
const generateCharacter = document.getElementById("generate-character");
const characterSheet = document.querySelector(".character-sheet");
const sheet = document.querySelector(".sheet-container");
const equipmentPage = document.querySelector(".equipment-container");
const backstoryPage = document.querySelector(".backstory-container");
const backstoryPreview = document.querySelector("#backstory-preview");
const nameDisplay = document.querySelector("#character-name");
const modifiers = document.querySelectorAll(".modifier");
const savingThrowCheckboxes = document.querySelectorAll(".saving-throw");
const level = document.querySelector("#level");
const size = document.querySelector(".size");
const speed = document.querySelector(".speed");
const proficiency = document.querySelector(".proficiency");
const strength = document.querySelector("#strength");
const dexterity = document.querySelector("#dexterity");
const constitution = document.querySelector("#constitution");
const strMod = document.querySelector("#str-mod");
const conMod = document.querySelector("#con-mod");
const intMod = document.querySelector("#int-mod");
const wisMod = document.querySelector("#wis-mod");
const chaMod = document.querySelector("#cha-mod");
const intelligence = document.querySelector("#intelligence");
const wisdom = document.querySelector("#wisdom");
const charisma = document.querySelector("#charisma");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const plusLevelBtn = document.querySelector(".plus-level");
const minusLevelBtn = document.querySelector(".minus-level");
const rerollStatistics = document.querySelector("#reroll");
const initiative = document.querySelector("#initiative");
const strengthCheckBox = document.querySelector("#st");
const dexterityCheckBox = document.querySelector("#de");
const constitutionCheckBox = document.querySelector("#co");
const intelligenceCheckBox = document.querySelector("#in");
const wisdomCheckBox = document.querySelector("#wi");
const charismaCheckBox = document.querySelector("#ch");
const athletics = document.querySelector("#athletics");
const acrobatics = document.querySelector("#acrobatics");
const sleightHand = document.querySelector("#sleight-hand");
const stealth = document.querySelector("#stealth");
const arcanum = document.querySelector("#arcanum");
const historySkill = document.querySelector("#history");
const investigation = document.querySelector("#investigation");
const nature = document.querySelector("#nature");
const religion = document.querySelector("#religion");
const animalHandling = document.querySelector("#animal-handling");
const insight = document.querySelector("#insight");
const medicine = document.querySelector("#medicine");
const perception = document.querySelector("#perception");
const survival = document.querySelector("#survival");
const deception = document.querySelector("#deception");
const intimidation = document.querySelector("#intimidation");
const performanceSkill = document.querySelector("#performance");
const persuasion = document.querySelector("#persuasion");
const dexSkills = document.querySelectorAll('#dex input[type="checkbox"]');
const intSkills = document.querySelectorAll('#int input[type="checkbox"]');
const wisSkills = document.querySelectorAll('#wis input[type="checkbox"]');
const chaSkills = document.querySelectorAll('#cha input[type="checkbox"]');
const currentHP = document.querySelector("#current-hp");
const health = document.querySelector("#health");
const healthPlusBtn = document.querySelector("#health-up");
const healthMinusBtn = document.querySelector("#health-down");
const damageHeal = document.querySelector("#damage-heal");
const damageBtn = document.querySelector("#damage-HP");
const healBtn = document.querySelector("#heal-HP");
const armourClass = document.querySelector("#armour-class");
const addACBtn = document.querySelector(".plus-ac");
const subtractACBtn = document.querySelector(".minus-ac");
const deathSave = document.querySelector("#death-saving-throw");
const deathSuccess1 = document.querySelector("#success-1");
const deathSuccess2 = document.querySelector("#success-2");
const deathSuccess3 = document.querySelector("#success-3");
const deathCheck1 = document.querySelector("#check-1");
const deathCheck2 = document.querySelector("#check-2");
const deathCheck3 = document.querySelector("#check-3");
const deathFail1 = document.querySelector("#fail-1");
const deathFail2 = document.querySelector("#fail-2");
const deathFail3 = document.querySelector("#fail-3");
const deathX1 = document.querySelector("#x-1");
const deathX2 = document.querySelector("#x-2");
const deathX3 = document.querySelector("#x-3");
const copper = document.querySelector("#copper");
const silver = document.querySelector("#silver");
const electrum = document.querySelector("#electrum");
const gold = document.querySelector("#gold");
const platinum = document.querySelector("#platinum");
const addLanguage = document.querySelector("#language-add");
const languageContainer = document.querySelector(".added-languages");
const addWeapon = document.querySelector("#weapon-add");
const weaponAdd = document.querySelector("#add-weapons");
const weaponContainer = document.querySelector(".added-weapons");
const weaponDisplay = document.querySelector("#display-weapons");
const addArmour = document.querySelector("#armour-add");
const armourAdd = document.querySelector("#add-armour");
const armourContainer = document.querySelector(".added-armour");
const armourDisplay = document.querySelector("#display-armour");
const addItem = document.querySelector("#item-add");
const itemAdd = document.querySelector("#add-items");
const itemContainer = document.querySelector(".added-items");
const itemDisplay = document.querySelector("#display-items");
const dieNumber = document.querySelector("#die-number");
const dieType = document.querySelector("#die-type");
const dieTypeTitle = document.querySelector("#dice-type");
const rollResult = document.querySelector("#dice-roll");
const backstoryBtn = document.querySelector("#backstory");
const bondsBtn = document.querySelector("#bonds");
const flawsBtn = document.querySelector("#flaws");
const equipmentBtn = document.querySelector("#equipment");
const itemsBtn = document.querySelector("#items");
const spellsBtn = document.querySelector("#spells");
const newCharacterBtn = document.querySelector("#new-character");
const saveBtn = document.querySelector("#save");
const loadBtn = document.querySelector("#load");
const loadInput = document.querySelector("#load-input");
const inventoryExit = document.getElementById("inventory-exit");
const inventoryLabel = document.getElementById("inventory-label");
const currentWeight = document.getElementById("current-weight");
const remainingWeight = document.getElementById("remaining-weight");
const backstoryText = document.getElementById("backstory-text");
const backstoryExit = document.getElementById("backstory-exit");
const backstoryClearBtn = document.getElementById("backstory-clear");
const backstoryConfirmBtn = document.getElementById("backstory-confirm");
const subRaceLabel = document.getElementById("sub-race-label");
const hitDiceType = document.getElementById("hp-die-type");
const totalHitDiceQuantity = document.getElementById("hp-die-quantity");
const currentHitDiceQuantity = document.getElementById(
  "current-hp-die-quantity",
);
const shortRestModal = document.getElementById("short-rest-modal");
const hitDiceAvailable = document.getElementById("hit-dice-available");
const hitDicePool = document.getElementById("hit-dice-to-spend");
const shortRestBtn = document.getElementById("short-rest");
const confirmShortRestBtn = document.getElementById("confirm-short-rest");
const closeShortRestBtn = document.getElementById("cancel-short-rest");
const longRestBtn = document.getElementById("long-rest");
const characterImageUpload = document.getElementById("image-character-upload");
const profilePicture = document.getElementById("profile-picture");
const weaponProficiency = document.getElementById("weapon-proficiency");
const armourProficiency = document.getElementById("armour-proficiency");
const toolProficiency = document.getElementById("tool-proficiency");

//const dieImages = document.querySelector("#dice-images");

//Objects, Variables and Constants
const allSkillCheckboxes = [
  {
    value: "athletics",
    element: athletics,
  },
  {
    value: "acrobatics",
    element: acrobatics,
  },
  {
    value: "sleight of hand",
    element: sleightHand,
  },
  {
    value: "stealth",
    element: stealth,
  },
  {
    value: "arcanum",
    element: arcanum,
  },
  {
    value: "history",
    element: historySkill,
  },
  {
    value: "investigation",
    element: investigation,
  },
  {
    value: "nature",
    element: nature,
  },
  {
    value: "religion",
    element: religion,
  },
  {
    value: "animal handling",
    element: animalHandling,
  },
  {
    value: "insight",
    element: insight,
  },
  {
    value: "medicine",
    element: medicine,
  },
  {
    value: "perception",
    element: perception,
  },
  {
    value: "survival",
    element: survival,
  },
  {
    value: "deception",
    element: deception,
  },
  {
    value: "intimidation",
    element: intimidation,
  },
  {
    value: "performanceSkill",
    element: performanceSkill,
  },
  {
    value: "persuasion",
    element: persuasion,
  },
];

const strengthSkills = athletics;
const dexteritySkills = [acrobatics, sleightHand, stealth];
const intelligenceSkills = [
  arcanum,
  historySkill,
  investigation,
  nature,
  religion,
];
const wisdomSkills = [animalHandling, insight, medicine, perception, survival];
const charismaSkills = [deception, intimidation, performanceSkill, persuasion];

const currencyInCopper = {
  cp: 1,
  sp: 10,
  ep: 50,
  gp: 100,
  pp: 1000,
};

let successNumber = 0;
let failureNumber = 0;

let totalHitDice = 0;
let hitDiceToSpend = 0;
let classHitDieType = 0;
let isShortResting = false;

let imageSrc = "";

let roller = {
  rolls: [],
  total: 0,
};

let currentEquipmentType = "";
let totalWeight = 0;
let baseStatistics;

let equippedWeaponDiv = null;
let canWeaponAttack = false;

let equippedArmourDiv = null;
let isShieldEquipped = false;
let baseAC = 0;
let armourAC = 0;
let shieldAC = 0;

let characterClass = null;
let characterClassName = "";
let characterBackstory = null;
let armourEquipped = undefined;
let hasShield = false;

//Preload D20 Images
const d20Faces = [];
for (let i = 1; i <= 20; i++) {
  const img = new Image();
  img.src = `assets/img/d20/d20-${i}.png`;
  d20Faces.push(img);
}

// const valueSpan = document.getElementById("strength");
// let statValue = parseInt(valueSpan.textContent);

// const raceDescriptions = {
//   human:
//     "Humans are versatile and ambitious, adapting easily to many cultures.",
// };

// raceSelect.addEventListener("change", () => {
//   const value = raceSelect.value;

//   if (!value) {
//     raceInfo.innerHTML = "<em>Select a race to see details.</em>";
//     return;
//   }

//   raceInfo.textContent = raceDescriptions[value];
// });

// const races = {
//   human: {
//     name: "Human",
//     description:
//       "Humans are versatile and ambitious, adapting easily to many cultures.",
//   },
// };

//Arrays
const races = [
  {
    value: "human",
    name: "Human",
    size: "M",
    speed: 30,
    description: `Humans are the most adaptable and ambitious of the
     common races. With relatively short lifespans,
     they strive to achieve as much as possible in the time they have,
     leading to great innovation and diversity.
     Human cultures vary wildly in appearance, beliefs, and traditions,
     and their versatility allows them to excel in nearly any role.`,
    abilityScoreIncreases: {
      str: 1,
      dex: 1,
      con: 1,
      int: 1,
      wis: 1,
      cha: 1,
    },
  },
  {
    value: "elf",
    name: "Elf",
    size: "M",
    speed: 30,
    description: `Elves are graceful, long-lived humanoids with keen senses
     and a deep connection to magic and nature. They experience the world
     differently from shorter-lived races, viewing events through the lens
     of centuries rather than years. Elven culture emphasizes art, beauty,
     and personal expression, and many elves pursue mastery in multiple
     disciplines over their long lives. Though often perceived as aloof,
     elves feel emotions deeply and form strong bonds that can last for
     generations.`,
    abilityScoreIncreases: {
      str: 0,
      dex: 2,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
    },
    subraces: {
      high: {
        value: "highElf",
        name: "High Elf",
        abilityScoreIncreases: {
          str: 0,
          dex: 2,
          con: 0,
          int: 1,
          wis: 0,
          cha: 0,
        },
      },
      wood: {
        value: "woodElf",
        name: "Wood Elf",
        abilityScoreIncreases: {
          str: 0,
          dex: 0,
          con: 0,
          int: 0,
          wis: 1,
          cha: 0,
        },
      },
      drow: {
        value: "drow",
        name: "Dark Elf (Drow)",
        abilityScoreIncreases: {
          str: 0,
          dex: 0,
          con: 0,
          int: 0,
          wis: 0,
          cha: 1,
        },
      },
    },
  },
  {
    value: "dwarf",
    name: "Dwarf",
    size: "M",
    speed: 25,
    description: `Dwarves are short, sturdy humanoids known for their
    resilience, endurance, and mastery of stone and metal.
    They value tradition, ancestry, and craftsmanship, often
    spending centuries perfecting their skills. Dwarven culture prizes
    honor, loyalty, and perseverance, and grudges—both good and ill—are
    remembered for generations. Many dwarves live in grand underground
    halls carved from living rock, though others wander the world as
    warriors, merchants, or artisans.`,
    abilityScoreIncreases: {
      str: 0,
      dex: 0,
      con: 2,
      int: 0,
      wis: 0,
      cha: 0,
    },
    subraces: {
      hill: {
        value: "hillDwarf",
        name: "Hill Dwarf",
        abilityScoreIncreases: {
          str: 0,
          dex: 0,
          con: 0,
          int: 0,
          wis: 1,
          cha: 0,
        },
      },
      mountain: {
        value: "mountainDwarf",
        name: "Mountain Dwarf",
        abilityScoreIncreases: {
          str: 1,
          dex: 0,
          con: 0,
          int: 0,
          wis: 0,
          cha: 0,
        },
      },
    },
  },
  {
    value: "gnome",
    name: "Gnome",
    size: "S",
    speed: 25,
    description: `Dwarves are short, sturdy humanoids known for their
    resilience, endurance, and mastery of stone and metal.
    They value tradition, ancestry, and craftsmanship, often
    spending centuries perfecting their skills. Dwarven culture prizes
    honor, loyalty, and perseverance, and grudges—both good and ill—are
    remembered for generations. Many dwarves live in grand underground
    halls carved from living rock, though others wander the world as
    warriors, merchants, or artisans.`,
    abilityScoreIncreases: {
      str: 0,
      dex: 0,
      con: 0,
      int: 2,
      wis: 0,
      cha: 0,
    },
    subraces: {
      forest: {
        value: "forestGnome",
        name: "Forest Gnome",
        abilityScoreIncreases: {
          str: 0,
          dex: 1,
          con: 0,
          int: 0,
          wis: 0,
          cha: 0,
        },
      },
      rock: {
        value: "rockGnome",
        name: "Rock Gnome",
        abilityScoreIncreases: {
          str: 0,
          dex: 0,
          con: 1,
          int: 0,
          wis: 0,
          cha: 0,
        },
      },
    },
  },
  {
    value: "halfElf",
    name: "Half-Elf",
    size: "M",
    speed: 30,
    description: `Half-elves combine the adaptability and ambition of humans
     with the grace and perceptiveness of elves. Often feeling like
     outsiders in both societies, they are skilled at navigating different
     cultures and forging connections. Their mixed heritage grants them
     versatility, and many half-elves become diplomats, adventurers, or
     wanderers seeking a place where they truly belong.`,
    abilityScoreIncreases: {
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 2,
    },
    abilityScoreIncreaseChoice: {
      count: 2,
      value: 1,
      exclude: ["cha"],
    },
  },
  {
    value: "halfOrc",
    name: "Half-Orc",
    size: "M",
    speed: 30,
    description: `Half-orcs are born from the union of humans and orcs,
    inheriting physical power and fierce determination. Often judged by
    their appearance, they grow up learning to rely on strength and
    resilience to survive. Despite stereotypes, many half-orcs strive to
    control their rage and define themselves by personal honor, loyalty, or
    a chosen code, becoming formidable warriors and steadfast allies.`,
    abilityScoreIncreases: {
      str: 2,
      dex: 0,
      con: 1,
      int: 0,
      wis: 0,
      cha: 0,
    },
  },
  {
    value: "halfling",
    name: "Halfing",
    size: "S",
    speed: 25,
    description: `Halflings are small, nimble humanoids known for their
    optimism, courage, and remarkable luck. They value home, comfort, and
    community, preferring peaceful lives—but when danger arises, halflings
    often prove far braver than expected. Their ability to slip through
    tight spaces and avoid danger makes them excellent travelers and
    adventurers.`,
    abilityScoreIncreases: {
      str: 0,
      dex: 2,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
    },
    subraces: {
      lightfoot: {
        value: "lightfootHalfling",
        name: "Lightfoot Halfling",
        abilityScoreIncreases: {
          str: 0,
          dex: 0,
          con: 0,
          int: 0,
          wis: 0,
          cha: 1,
        },
      },
      stout: {
        value: "stoutHalfling",
        name: "Stout Halfling",
        abilityScoreIncreases: {
          str: 0,
          dex: 0,
          con: 1,
          int: 0,
          wis: 0,
          cha: 0,
        },
      },
    },
  },
  {
    value: "tiefling",
    name: "Tiefling",
    size: "M",
    speed: 30,
    description: `Tieflings are humanoids with infernal bloodlines, bearing
    horns, tails, and other fiendish traits that mark them as different.
    Though their appearance often invites fear or suspicion, tieflings are
    no more inherently evil than any other race. Many develop sharp wit,
    self-reliance, and ambition, using their innate magical talents to carve
     out their own place in the world.`,
    abilityScoreIncreases: {
      str: 0,
      dex: 0,
      con: 0,
      int: 1,
      wis: 0,
      cha: 2,
    },
  },
];

const classes = {
  Barbarian: {
    hitDie: "d12",
    hp: { level1: 12, perLevel: 7 },
    armor: ["Light Armor", "Medium Armor", "Shields"],
    weapons: ["Simple Weapons", "Martial Weapons"],
    description: "A fierce warrior who channels primal rage.",
    featuresByLevel: {
      1: ["Rage", "Unarmored Defense"],
      2: ["Reckless Attack", "Danger Sense"],
      3: ["Primal Path"],
      4: [{ type: "ASI", points: 2, allowFeats: true }],
      5: ["Extra Attack", "Fast Movement"],
      6: ["Path Feature"],
      7: ["Feral Instinct"],
      8: [{ type: "ASI", points: 2, allowFeats: true }],
      9: ["Brutal Critical (1 die)"],
      10: ["Path Feature"],
      11: ["Relentless Rage"],
      12: [{ type: "ASI", points: 2, allowFeats: true }],
      13: ["Brutal Critical (2 dice)"],
      14: ["Path Feature"],
      15: ["Persistent Rage"],
      16: [{ type: "ASI", points: 2, allowFeats: true }],
      17: ["Brutal Critical (3 dice)"],
      18: ["Indomitable Might"],
      19: [{ type: "ASI", points: 2, allowFeats: true }],
      20: ["Primal Champion"],
    },
  },

  Bard: {
    hitDie: "d8",
    hp: { level1: 8, perLevel: 5 },
    armor: ["Light Armor"],
    weapons: [
      "Simple Weapons",
      "Hand Crossbows",
      "Longswords",
      "Rapiers",
      "Shortswords",
    ],
    description: "A spellcaster whose magic comes from music and inspiration.",
    featuresByLevel: {
      1: ["Spellcasting", "Bardic Inspiration (d6)"],
      2: ["Jack of All Trades", "Song of Rest (d6)"],
      3: ["Bard College", "Expertise"],
      4: [{ type: "ASI", points: 2, allowFeats: true }],
      5: ["Bardic Inspiration (d8)", "Font of Inspiration"],
      6: ["College Feature"],
      7: [],
      8: [{ type: "ASI", points: 2, allowFeats: true }],
      9: ["Song of Rest (d8)"],
      10: ["Expertise", "Magical Secrets", "Bardic Inspiration (d10)"],
      11: [],
      12: [{ type: "ASI", points: 2, allowFeats: true }],
      13: ["Song of Rest (d10)"],
      14: ["College Feature", "Magical Secrets"],
      15: ["Bardic Inspiration (d12)"],
      16: [{ type: "ASI", points: 2, allowFeats: true }],
      17: ["Song of Rest (d12)"],
      18: ["Magical Secrets"],
      19: [{ type: "ASI", points: 2, allowFeats: true }],
      20: ["Superior Inspiration"],
    },
  },

  Cleric: {
    hitDie: "d8",
    hp: { level1: 8, perLevel: 5 },
    armor: ["Light Armor", "Medium Armor", "Shields"],
    weapons: ["Simple Weapons"],
    description: "A divine spellcaster devoted to a god.",
    featuresByLevel: {
      1: ["Spellcasting", "Divine Domain"],
      2: ["Channel Divinity (1/rest)", "Domain Feature"],
      3: [],
      4: [{ type: "ASI", points: 2, allowFeats: true }],
      5: ["Destroy Undead (CR 1/2)"],
      6: ["Channel Divinity (2/rest)", "Domain Feature"],
      7: [],
      8: [
        { type: "ASI", points: 2, allowFeats: true },
        "Destroy Undead (CR 1)",
        "Domain Feature",
      ],
      9: [],
      10: ["Divine Intervention"],
      11: ["Destroy Undead (CR 2)"],
      12: [{ type: "ASI", points: 2, allowFeats: true }],
      13: [],
      14: ["Destroy Undead (CR 3)"],
      15: [],
      16: [{ type: "ASI", points: 2, allowFeats: true }],
      17: ["Destroy Undead (CR 4)", "Domain Feature"],
      18: ["Channel Divinity (3/rest)"],
      19: [{ type: "ASI", points: 2, allowFeats: true }],
      20: ["Divine Intervention Improvement"],
    },
  },

  Druid: {
    hitDie: "d8",
    hp: { level1: 8, perLevel: 5 },
    armor: ["Light Armor", "Medium Armor", "Shields (non-metal)"],
    weapons: [
      "Clubs",
      "Daggers",
      "Darts",
      "Javelins",
      "Maces",
      "Quarterstaffs",
      "Scimitars",
      "Slings",
      "Spears",
    ],
    description: "A spellcaster who draws power from nature.",
    featuresByLevel: {
      1: ["Spellcasting", "Druidic"],
      2: ["Wild Shape", "Druid Circle"],
      3: [],
      4: [{ type: "ASI", points: 2, allowFeats: true }],
      5: [],
      6: ["Circle Feature"],
      7: [],
      8: [{ type: "ASI", points: 2, allowFeats: true }],
      9: [],
      10: ["Circle Feature"],
      11: [],
      12: [{ type: "ASI", points: 2, allowFeats: true }],
      13: [],
      14: ["Circle Feature"],
      15: [],
      16: [{ type: "ASI", points: 2, allowFeats: true }],
      17: [],
      18: ["Timeless Body", "Beast Spells"],
      19: [{ type: "ASI", points: 2, allowFeats: true }],
      20: ["Archdruid"],
    },
  },

  Fighter: {
    hitDie: "d10",
    hp: { level1: 10, perLevel: 6 },
    armor: ["All Armor", "Shields"],
    weapons: ["Simple Weapons", "Martial Weapons"],
    description: "A master of martial combat.",
    featuresByLevel: {
      1: ["Fighting Style", "Second Wind"],
      2: ["Action Surge (1 use)"],
      3: ["Martial Archetype"],
      4: [{ type: "ASI", points: 2, allowFeats: true }],
      5: ["Extra Attack"],
      6: [{ type: "ASI", points: 2, allowFeats: true }],
      7: ["Archetype Feature"],
      8: [{ type: "ASI", points: 2, allowFeats: true }],
      9: ["Indomitable (1 use)"],
      10: ["Archetype Feature"],
      11: ["Extra Attack (2)"],
      12: [{ type: "ASI", points: 2, allowFeats: true }],
      13: ["Indomitable (2 uses)"],
      14: [{ type: "ASI", points: 2, allowFeats: true }],
      15: ["Archetype Feature"],
      16: [{ type: "ASI", points: 2, allowFeats: true }],
      17: ["Action Surge (2 uses)", "Indomitable (3 uses)"],
      18: ["Archetype Feature"],
      19: [{ type: "ASI", points: 2, allowFeats: true }],
      20: ["Extra Attack (3)"],
    },
  },

  Monk: {
    hitDie: "d8",
    hp: { level1: 8, perLevel: 5 },
    armor: [],
    weapons: ["Simple Weapons", "Shortswords"],
    description: "A disciplined martial artist who channels ki.",
    featuresByLevel: {
      1: ["Unarmored Defense", "Martial Arts"],
      2: ["Ki", "Unarmored Movement"],
      3: ["Monastic Tradition"],
      4: [{ type: "ASI", points: 2, allowFeats: true }, "Slow Fall"],
      5: ["Extra Attack", "Stunning Strike"],
      6: ["Ki-Empowered Strikes", "Tradition Feature"],
      7: ["Evasion", "Stillness of Mind"],
      8: [{ type: "ASI", points: 2, allowFeats: true }],
      9: ["Unarmored Movement Improvement"],
      10: ["Purity of Body"],
      11: ["Tradition Feature"],
      12: [{ type: "ASI", points: 2, allowFeats: true }],
      13: ["Tongue of the Sun and Moon"],
      14: ["Diamond Soul"],
      15: ["Timeless Body"],
      16: [{ type: "ASI", points: 2, allowFeats: true }],
      17: ["Tradition Feature"],
      18: ["Empty Body"],
      19: [{ type: "ASI", points: 2, allowFeats: true }],
      20: ["Perfect Self"],
    },
  },

  Paladin: {
    hitDie: "d10",
    hp: { level1: 10, perLevel: 6 },
    armor: ["All Armor", "Shields"],
    weapons: ["Simple Weapons", "Martial Weapons"],
    description: "A holy warrior bound by sacred oaths.",
    featuresByLevel: {
      1: ["Divine Sense", "Lay on Hands"],
      2: ["Fighting Style", "Spellcasting", "Divine Smite"],
      3: ["Sacred Oath"],
      4: [{ type: "ASI", points: 2, allowFeats: true }],
      5: ["Extra Attack"],
      6: ["Aura of Protection"],
      7: ["Oath Feature"],
      8: [{ type: "ASI", points: 2, allowFeats: true }],
      9: [],
      10: ["Aura of Courage"],
      11: ["Improved Divine Smite"],
      12: [{ type: "ASI", points: 2, allowFeats: true }],
      13: [],
      14: ["Cleansing Touch"],
      15: ["Oath Feature"],
      16: [{ type: "ASI", points: 2, allowFeats: true }],
      17: [],
      18: ["Aura Improvements"],
      19: [{ type: "ASI", points: 2, allowFeats: true }],
      20: ["Oath Feature"],
    },
  },

  Ranger: {
    hitDie: "d10",
    hp: { level1: 10, perLevel: 6 },
    armor: ["Light Armor", "Medium Armor", "Shields"],
    weapons: ["Simple Weapons", "Martial Weapons"],
    description: "A warrior who hunts threats on the edge of civilization.",
    featuresByLevel: {
      1: ["Favored Enemy", "Natural Explorer"],
      2: ["Fighting Style", "Spellcasting"],
      3: ["Ranger Archetype", "Primeval Awareness"],
      4: [{ type: "ASI", points: 2, allowFeats: true }],
      5: ["Extra Attack"],
      6: ["Favored Enemy Improvement", "Natural Explorer Improvement"],
      7: ["Archetype Feature"],
      8: [{ type: "ASI", points: 2, allowFeats: true }, "Land's Stride"],
      9: [],
      10: ["Natural Explorer Improvement"],
      11: ["Archetype Feature"],
      12: [{ type: "ASI", points: 2, allowFeats: true }],
      13: [],
      14: ["Favored Enemy Improvement"],
      15: ["Archetype Feature"],
      16: [{ type: "ASI", points: 2, allowFeats: true }],
      17: [],
      18: ["Feral Senses"],
      19: [{ type: "ASI", points: 2, allowFeats: true }],
      20: ["Foe Slayer"],
    },
  },

  Rogue: {
    hitDie: "d8",
    hp: { level1: 8, perLevel: 5 },
    armor: ["Light Armor"],
    weapons: [
      "Simple Weapons",
      "Hand Crossbows",
      "Longswords",
      "Rapiers",
      "Shortswords",
    ],
    description: "A stealthy scoundrel who excels at precision.",
    featuresByLevel: {
      1: ["Expertise", "Sneak Attack", "Thieves' Cant"],
      2: ["Cunning Action"],
      3: ["Roguish Archetype"],
      4: [{ type: "ASI", points: 2, allowFeats: true }],
      5: ["Uncanny Dodge"],
      6: ["Expertise"],
      7: ["Evasion"],
      8: [{ type: "ASI", points: 2, allowFeats: true }],
      9: ["Archetype Feature"],
      10: [{ type: "ASI", points: 2, allowFeats: true }],
      11: ["Reliable Talent"],
      12: [{ type: "ASI", points: 2, allowFeats: true }],
      13: ["Archetype Feature"],
      14: ["Blindsense"],
      15: ["Slippery Mind"],
      16: [{ type: "ASI", points: 2, allowFeats: true }],
      17: ["Archetype Feature"],
      18: ["Elusive"],
      19: [{ type: "ASI", points: 2, allowFeats: true }],
      20: ["Stroke of Luck"],
    },
  },

  Sorcerer: {
    hitDie: "d6",
    hp: { level1: 6, perLevel: 4 },
    armor: [],
    weapons: ["Daggers", "Darts", "Slings", "Quarterstaffs", "Light Crossbows"],
    description: "A spellcaster born with innate magic.",
    featuresByLevel: {
      1: ["Spellcasting", "Sorcerous Origin"],
      2: ["Font of Magic"],
      3: ["Metamagic"],
      4: [{ type: "ASI", points: 2, allowFeats: true }],
      5: [],
      6: ["Origin Feature"],
      7: [],
      8: [{ type: "ASI", points: 2, allowFeats: true }],
      9: [],
      10: ["Metamagic"],
      11: [],
      12: [{ type: "ASI", points: 2, allowFeats: true }],
      13: [],
      14: ["Origin Feature"],
      15: [],
      16: [{ type: "ASI", points: 2, allowFeats: true }],
      17: ["Metamagic"],
      18: ["Origin Feature"],
      19: [{ type: "ASI", points: 2, allowFeats: true }],
      20: ["Sorcerous Restoration"],
    },
  },

  Warlock: {
    hitDie: "d8",
    hp: { level1: 8, perLevel: 5 },
    armor: ["Light Armor"],
    weapons: ["Simple Weapons"],
    description: "A spellcaster bound by a pact with an otherworldly patron.",
    featuresByLevel: {
      1: ["Otherworldly Patron", "Pact Magic"],
      2: ["Eldritch Invocations"],
      3: ["Pact Boon"],
      4: [{ type: "ASI", points: 2, allowFeats: true }],
      5: [],
      6: ["Patron Feature"],
      7: [],
      8: [{ type: "ASI", points: 2, allowFeats: true }],
      9: [],
      10: ["Patron Feature"],
      11: ["Mystic Arcanum (6th)"],
      12: [{ type: "ASI", points: 2, allowFeats: true }],
      13: ["Mystic Arcanum (7th)"],
      14: ["Patron Feature"],
      15: ["Mystic Arcanum (8th)"],
      16: [{ type: "ASI", points: 2, allowFeats: true }],
      17: ["Mystic Arcanum (9th)"],
      18: [],
      19: [{ type: "ASI", points: 2, allowFeats: true }],
      20: ["Eldritch Master"],
    },
  },

  Wizard: {
    hitDie: "d6",
    hp: { level1: 6, perLevel: 4 },
    armor: [],
    weapons: ["Daggers", "Darts", "Slings", "Quarterstaffs", "Light Crossbows"],
    description: "A scholarly spellcaster who learns magic through study.",
    featuresByLevel: {
      1: ["Spellcasting", "Arcane Recovery"],
      2: ["Arcane Tradition"],
      3: [],
      4: [{ type: "ASI", points: 2, allowFeats: true }],
      5: [],
      6: ["Tradition Feature"],
      7: [],
      8: [{ type: "ASI", points: 2, allowFeats: true }],
      9: [],
      10: ["Tradition Feature"],
      11: [],
      12: [{ type: "ASI", points: 2, allowFeats: true }],
      13: [],
      14: ["Tradition Feature"],
      15: [],
      16: [{ type: "ASI", points: 2, allowFeats: true }],
      17: [],
      18: ["Spell Mastery"],
      19: [{ type: "ASI", points: 2, allowFeats: true }],
      20: ["Signature Spells"],
    },
  },
};

const subClasses = {
  Barbarian: {
    Berserker: {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Frenzy"],
        6: ["Mindless Rage"],
        10: ["Intimidating Presence"],
        14: ["Retaliation"],
      },
    },
    "Totem Warrior": {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Totem Spirit"],
        6: ["Aspect of the Beast"],
        10: ["Spirit Walker"],
        14: ["Totemic Attunement"],
      },
    },
  },

  Bard: {
    "College of Lore": {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Bonus Proficiencies", "Cutting Words"],
        6: ["Additional Magical Secrets"],
        14: ["Peerless Skill"],
      },
    },
    "College of Valor": {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Bonus Proficiencies", "Combat Inspiration"],
        6: ["Extra Attack"],
        14: ["Battle Magic"],
      },
    },
  },

  Cleric: {
    Knowledge: {
      unlockedAt: 1,
      featuresByLevel: {
        1: ["Blessings of Knowledge"],
        2: ["Channel Divinity: Knowledge of the Ages"],
        6: ["Channel Divinity: Read Thoughts"],
        8: ["Potent Spellcasting"],
        17: ["Visions of the Past"],
      },
    },
    Life: {
      unlockedAt: 1,
      featuresByLevel: {
        1: ["Disciple of Life"],
        2: ["Channel Divinity: Preserve Life"],
        6: ["Blessed Healer"],
        8: ["Divine Strike"],
        17: ["Supreme Healing"],
      },
    },
    Light: {
      unlockedAt: 1,
      featuresByLevel: {
        1: ["Warding Flare"],
        2: ["Channel Divinity: Radiance of the Dawn"],
        6: ["Improved Warding Flare"],
        8: ["Potent Spellcasting"],
        17: ["Corona of Light"],
      },
    },
    Nature: {
      unlockedAt: 1,
      featuresByLevel: {
        1: ["Acolyte of Nature"],
        2: ["Channel Divinity: Charm Animals and Plants"],
        6: ["Dampen Elements"],
        8: ["Divine Strike"],
        17: ["Master of Nature"],
      },
    },
    Tempest: {
      unlockedAt: 1,
      featuresByLevel: {
        1: ["Wrath of the Storm"],
        2: ["Channel Divinity: Destructive Wrath"],
        6: ["Thunderbolt Strike"],
        8: ["Divine Strike"],
        17: ["Stormborn"],
      },
    },
    Trickery: {
      unlockedAt: 1,
      featuresByLevel: {
        1: ["Blessing of the Trickster"],
        2: ["Channel Divinity: Invoke Duplicity"],
        6: ["Channel Divinity: Cloak of Shadows"],
        8: ["Divine Strike"],
        17: ["Improved Duplicity"],
      },
    },
    War: {
      unlockedAt: 1,
      featuresByLevel: {
        1: ["War Priest"],
        2: ["Channel Divinity: Guided Strike"],
        6: ["Channel Divinity: War God's Blessing"],
        8: ["Divine Strike"],
        17: ["Avatar of Battle"],
      },
    },
  },

  Druid: {
    "Circle of the Land": {
      unlockedAt: 2,
      featuresByLevel: {
        2: ["Bonus Cantrip", "Natural Recovery"],
        6: ["Land's Stride"],
        10: ["Nature's Ward"],
        14: ["Nature's Sanctuary"],
      },
    },
    "Circle of the Moon": {
      unlockedAt: 2,
      featuresByLevel: {
        2: ["Combat Wild Shape", "Circle Forms"],
        6: ["Primal Strike"],
        10: ["Elemental Wild Shape"],
        14: ["Thousand Forms"],
      },
    },
  },

  Fighter: {
    Champion: {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Improved Critical"],
        7: ["Remarkable Athlete"],
        10: ["Additional Fighting Style"],
        15: ["Superior Critical"],
        18: ["Survivor"],
      },
    },
    "Battle Master": {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Combat Superiority", "Student of War"],
        7: ["Know Your Enemy"],
        10: ["Improved Combat Superiority"],
        15: ["Relentless"],
        18: ["Improved Combat Superiority"],
      },
    },
    "Eldritch Knight": {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Spellcasting", "Weapon Bond"],
        7: ["War Magic"],
        10: ["Eldritch Strike"],
        15: ["Arcane Charge"],
        18: ["Improved War Magic"],
      },
    },
  },

  Monk: {
    "Way of the Open Hand": {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Open Hand Technique"],
        6: ["Wholeness of Body"],
        11: ["Tranquility"],
        17: ["Quivering Palm"],
      },
    },
    "Way of Shadow": {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Shadow Arts"],
        6: ["Shadow Step"],
        11: ["Cloak of Shadows"],
        17: ["Opportunist"],
      },
    },
    "Way of the Four Elements": {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Disciple of the Elements"],
        6: ["Elemental Discipline"],
        11: ["Elemental Discipline"],
        17: ["Elemental Discipline"],
      },
    },
  },

  Paladin: {
    "Oath of Devotion": {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Sacred Weapon", "Turn the Unholy"],
        7: ["Aura of Devotion"],
        15: ["Purity of Spirit"],
        20: ["Holy Nimbus"],
      },
    },
    "Oath of the Ancients": {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Nature's Wrath", "Turn the Faithless"],
        7: ["Aura of Warding"],
        15: ["Undying Sentinel"],
        20: ["Elder Champion"],
      },
    },
    "Oath of Vengeance": {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Abjure Enemy", "Vow of Enmity"],
        7: ["Relentless Avenger"],
        15: ["Soul of Vengeance"],
        20: ["Avenging Angel"],
      },
    },
  },

  Ranger: {
    Hunter: {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Hunter's Prey"],
        7: ["Defensive Tactics"],
        11: ["Multiattack"],
        15: ["Superior Hunter's Defense"],
      },
    },
    "Beast Master": {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Ranger's Companion"],
        7: ["Exceptional Training"],
        11: ["Bestial Fury"],
        15: ["Share Spells"],
      },
    },
  },

  Rogue: {
    Thief: {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Fast Hands", "Second-Story Work"],
        9: ["Supreme Sneak"],
        13: ["Use Magic Device"],
        17: ["Thief's Reflexes"],
      },
    },
    Assassin: {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Assassinate"],
        9: ["Infiltration Expertise"],
        13: ["Impostor"],
        17: ["Death Strike"],
      },
    },
    "Arcane Trickster": {
      unlockedAt: 3,
      featuresByLevel: {
        3: ["Spellcasting", "Mage Hand Legerdemain"],
        9: ["Magical Ambush"],
        13: ["Versatile Trickster"],
        17: ["Spell Thief"],
      },
    },
  },

  Sorcerer: {
    "Draconic Bloodline": {
      unlockedAt: 1,
      featuresByLevel: {
        1: ["Dragon Ancestor", "Draconic Resilience"],
        6: ["Elemental Affinity"],
        14: ["Dragon Wings"],
        18: ["Draconic Presence"],
      },
    },
    "Wild Magic": {
      unlockedAt: 1,
      featuresByLevel: {
        1: ["Wild Magic Surge", "Tides of Chaos"],
        6: ["Bend Luck"],
        14: ["Controlled Chaos"],
        18: ["Spell Bombardment"],
      },
    },
  },

  Warlock: {
    Archfey: {
      unlockedAt: 1,
      featuresByLevel: {
        1: ["Fey Presence"],
        6: ["Misty Escape"],
        10: ["Beguiling Defenses"],
        14: ["Dark Delirium"],
      },
    },
    Fiend: {
      unlockedAt: 1,
      featuresByLevel: {
        1: ["Dark One's Blessing"],
        6: ["Dark One's Own Luck"],
        10: ["Fiendish Resilience"],
        14: ["Hurl Through Hell"],
      },
    },
    "Great Old One": {
      unlockedAt: 1,
      featuresByLevel: {
        1: ["Awakened Mind"],
        6: ["Entropic Ward"],
        10: ["Thought Shield"],
        14: ["Create Thrall"],
      },
    },
  },

  Wizard: {
    "School of Abjuration": {
      unlockedAt: 2,
      featuresByLevel: {
        2: ["Arcane Ward"],
        6: ["Projected Ward"],
        10: ["Improved Abjuration"],
        14: ["Spell Resistance"],
      },
    },
    "School of Evocation": {
      unlockedAt: 2,
      featuresByLevel: {
        2: ["Sculpt Spells"],
        6: ["Potent Cantrip"],
        10: ["Empowered Evocation"],
        14: ["Overchannel"],
      },
    },
    "School of Necromancy": {
      unlockedAt: 2,
      featuresByLevel: {
        2: ["Grim Harvest"],
        6: ["Undead Thralls"],
        10: ["Inured to Undeath"],
        14: ["Command Undead"],
      },
    },
    // (Other wizard schools follow identical structure)
  },
};

const classOptions = Object.keys(classes).map((className) => ({
  name:
    className.substring(0, 1).toUpperCase() +
    className.substring(1).toLowerCase(),
  value: className,
}));

const backgrounds = {
  Acolyte: {
    description:
      "You have spent your life in the service of a temple to a specific god or pantheon of gods.",
    skillProficiencies: ["Insight", "Religion"],
    toolProficiencies: [],
    languages: 2, // number of extra languages
    feature: "Shelter of the Faithful",
    suggestedCharacteristics: {
      personalityTraits: [
        "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example.",
        "I can find common ground between the fiercest enemies, empathizing with them and trying to bring peace.",
      ],
      ideals: [
        "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld.",
        "Charity. I always try to help those in need, no matter what the personal cost.",
      ],
      bonds: [
        "I would die to recover an ancient relic of my faith that was lost long ago.",
        "I owe my life to the priest who took me in when my parents died.",
      ],
      flaws: [
        "I judge others harshly, and myself even more severely.",
        "I am inflexible in my thinking.",
      ],
    },
  },

  Charlatan: {
    description:
      "You have always had a way with deception, trickery, and fast-talking to get what you want.",
    skillProficiencies: ["Deception", "Sleight of Hand"],
    toolProficiencies: ["Disguise Kit", "Forgery Kit"],
    languages: 0,
    feature: "False Identity",
    suggestedCharacteristics: {
      personalityTraits: [
        "I fall in and out of love easily, and am always pursuing someone.",
        "I have a joke for every occasion, especially occasions where humor is inappropriate.",
      ],
      ideals: [
        "Independence. I am a free spirit—no one tells me what to do.",
        "Aspiration. I'm determined to make something of myself.",
      ],
      bonds: [
        "I owe everything to my mentor—a cunning con artist who took me under their wing.",
        "I stole something very valuable from a powerful person, and I aim to return it.",
      ],
      flaws: [
        "I can't resist a pretty face.",
        "I can't resist swindling people who are easier targets than I am.",
      ],
    },
  },

  Criminal: {
    description:
      "You are experienced in breaking the law, and know how to thrive in the underworld.",
    skillProficiencies: ["Deception", "Stealth"],
    toolProficiencies: ["One type of gaming set", "Thieves' tools"],
    languages: 0,
    feature: "Criminal Contact",
    suggestedCharacteristics: {
      personalityTraits: [
        "I always have a plan for what to do when things go wrong.",
        "I am always calm, no matter what the situation.",
      ],
      ideals: [
        "Honor. I don't steal from others in my community.",
        "Freedom. Chains are meant to be broken, as are those who would forge them.",
      ],
      bonds: [
        "I'm trying to pay off an old debt I owe to a generous benefactor.",
        "I will become the greatest thief that ever lived.",
      ],
      flaws: [
        "When I see something valuable, I can't think about anything but how to steal it.",
        "An innocent person is in prison for a crime that I committed. I'm okay with that.",
      ],
    },
  },

  Entertainer: {
    description:
      "You thrive on performing, captivating audiences with your music, dance, or dramatic arts.",
    skillProficiencies: ["Acrobatics", "Performance"],
    toolProficiencies: ["Disguise Kit", "One type of musical instrument"],
    languages: 0,
    feature: "By Popular Demand",
    suggestedCharacteristics: {
      personalityTraits: [
        "I know a story relevant to almost every situation.",
        "Whenever I come to a new place, I collect local rumors and spread gossip.",
      ],
      ideals: [
        "Beauty. When I perform, I make the world better than it was.",
        "Creativity. The world is in need of new ideas and bold action.",
      ],
      bonds: [
        "I idolize a hero of the stage or screen, and will do anything to meet them.",
        "I will do anything to protect my troupe or performing companions.",
      ],
      flaws: [
        "I'll do anything to win the approval of my fans, even if it's unethical.",
        "I'm a sucker for a pretty face.",
      ],
    },
  },

  "Folk Hero": {
    description:
      "You come from humble beginnings, and have risen up to defend the common people.",
    skillProficiencies: ["Animal Handling", "Survival"],
    toolProficiencies: ["One type of artisan's tools", "Vehicles (land)"],
    languages: 0,
    feature: "Rustic Hospitality",
    suggestedCharacteristics: {
      personalityTraits: [
        "I judge people by their actions, not their words.",
        "If someone is in trouble, I'm always ready to help them.",
      ],
      ideals: [
        "Respect. People deserve to be treated with dignity.",
        "Fairness. Everyone should have a chance to succeed.",
      ],
      bonds: [
        "I protect those who cannot protect themselves.",
        "I come from a place that is threatened by a tyrant.",
      ],
      flaws: [
        "I have little respect for the rich and powerful.",
        "I'm convinced of the superiority of my own abilities.",
      ],
    },
  },

  "Guild Artisan": {
    description:
      "You are a member of an artisan's guild, respected for your craft.",
    skillProficiencies: ["Insight", "Persuasion"],
    toolProficiencies: ["One type of artisan's tools"],
    languages: 1,
    feature: "Guild Membership",
    suggestedCharacteristics: {
      personalityTraits: [
        "I believe that anything worth doing is worth doing well.",
        "I'm always polite and well-mannered.",
      ],
      ideals: [
        "Community. It is the duty of all civilized people to strengthen the bonds of community.",
        "Aspiration. I strive to be the best at my craft.",
      ],
      bonds: [
        "I will protect my guild at all costs.",
        "I owe my guild a great debt.",
      ],
      flaws: [
        "I'm quick to assume that someone is trying to cheat me.",
        "I work too hard, and neglect my friends and family.",
      ],
    },
  },

  Hermit: {
    description:
      "You lived in seclusion, away from society, for a period of time.",
    skillProficiencies: ["Medicine", "Religion"],
    toolProficiencies: ["Herbalism Kit"],
    languages: 1,
    feature: "Discovery",
    suggestedCharacteristics: {
      personalityTraits: [
        "I feel tremendous empathy for all who suffer.",
        "I am utterly serene, even in the face of disaster.",
      ],
      ideals: [
        "Greater Good. My isolation allowed me to better understand the world.",
        "Self-Knowledge. The path to power and self-improvement is through wisdom.",
      ],
      bonds: [
        "My discovery must be shared with the world.",
        "I owe my life to the sage who taught me.",
      ],
      flaws: [
        "I am dogmatic in my thoughts.",
        "I am unaware of social niceties.",
      ],
    },
  },

  Noble: {
    description: "You come from a family of wealth and privilege.",
    skillProficiencies: ["History", "Persuasion"],
    toolProficiencies: [],
    languages: 1,
    feature: "Position of Privilege",
    suggestedCharacteristics: {
      personalityTraits: [
        "My eloquence and poise are unmatched.",
        "I take great pride in my family and name.",
      ],
      ideals: [
        "Respect. Respect for authority and tradition is paramount.",
        "Responsibility. I must work to improve the lives of those less fortunate.",
      ],
      bonds: [
        "I will face any challenge to uphold my family's honor.",
        "I owe my life to my loyal retainers.",
      ],
      flaws: [
        "I secretly believe that everyone is beneath me.",
        "I hide a truly scandalous secret that could ruin my family.",
      ],
    },
  },

  Outlander: {
    description: "You grew up in the wilds, far from civilization.",
    skillProficiencies: ["Athletics", "Survival"],
    toolProficiencies: ["One type of musical instrument"],
    languages: 1,
    feature: "Wanderer",
    suggestedCharacteristics: {
      personalityTraits: [
        "I'm always picking things up, keen to learn about the environment.",
        "I feel more comfortable in the wild than in a city.",
      ],
      ideals: [
        "Change. Life is like the seasons, in constant change.",
        "Self-Reliance. I rely on myself above all else.",
      ],
      bonds: [
        "I'm trying to return to a homeland I've never seen.",
        "My tribe or family is my greatest treasure.",
      ],
      flaws: [
        "I'm slow to trust strangers.",
        "I judge people harshly by their appearance.",
      ],
    },
  },

  Sage: {
    description: "You spent years learning the lore of the multiverse.",
    skillProficiencies: ["Arcana", "History"],
    toolProficiencies: [],
    languages: 2,
    feature: "Researcher",
    suggestedCharacteristics: {
      personalityTraits: [
        "I use big words to sound smarter than I am.",
        "I'm lost in thought and forget my surroundings.",
      ],
      ideals: [
        "Knowledge. The path to power and self-improvement is through learning.",
        "Curiosity. I can't resist learning new things.",
      ],
      bonds: [
        "I've uncovered a secret that must be preserved at all costs.",
        "I owe my life to my mentor.",
      ],
      flaws: [
        "I am easily distracted by the promise of information.",
        "I have trouble remembering mundane details.",
      ],
    },
  },

  Sailor: {
    description: "You spent your life aboard a seafaring vessel.",
    skillProficiencies: ["Athletics", "Perception"],
    toolProficiencies: ["Navigator's tools", "Vehicles (water)"],
    languages: 0,
    feature: "Ship's Passage",
    suggestedCharacteristics: {
      personalityTraits: [
        "I love the sea, and the freedom it brings.",
        "I'm always singing or whistling a sea shanty.",
      ],
      ideals: [
        "Respect. Everyone aboard ship has a role and deserves respect.",
        "Freedom. Life on the open sea is the only life worth living.",
      ],
      bonds: [
        "I will protect my crewmates with my life.",
        "My ship is my home, and I'll fight to defend it.",
      ],
      flaws: [
        "I can't resist gambling or drinking.",
        "I'm quick to anger when insulted.",
      ],
    },
  },

  Soldier: {
    description:
      "You are a trained warrior who has served in an army or militia.",
    skillProficiencies: ["Athletics", "Intimidation"],
    toolProficiencies: ["One type of gaming set", "Vehicles (land)"],
    languages: 0,
    feature: "Military Rank",
    suggestedCharacteristics: {
      personalityTraits: [
        "I face problems head-on, never avoiding a fight.",
        "I'm always calm under pressure.",
      ],
      ideals: [
        "Greater Good. My service is for the benefit of all.",
        "Responsibility. I must uphold my duty and honor.",
      ],
      bonds: [
        "I would lay down my life to protect my comrades.",
        "I owe my life to a mentor or commander.",
      ],
      flaws: [
        "I obey orders to the letter, even if I disagree with them.",
        "I have little patience for civilians who don't understand military life.",
      ],
    },
  },

  Urchin: {
    description: "You grew up on the streets, surviving by your wits.",
    skillProficiencies: ["Sleight of Hand", "Stealth"],
    toolProficiencies: ["Disguise Kit", "Thieves' Tools"],
    languages: 0,
    feature: "City Secrets",
    suggestedCharacteristics: {
      personalityTraits: [
        "I hide scraps of food and trinkets away for later.",
        "I am always alert and quick to act.",
      ],
      ideals: [
        "Independence. I can take care of myself without anyone else.",
        "Change. Life in the streets is unpredictable, so I adapt.",
      ],
      bonds: [
        "I care for those weaker than myself.",
        "I want to reclaim the home I lost as a child.",
      ],
      flaws: [
        "I steal when I can get away with it.",
        "I can't resist taking risks.",
      ],
    },
  },
};

const backgroundOptions = Object.keys(backgrounds).map((bgName) => ({
  name: bgName,
  value: bgName,
}));

const languages = [
  {
    value: "common",
    name: "Common",
    description: "The lingua franca of the world",
  },
  { value: "aquan", name: "Aquan" },
  { value: "giant", name: "Giant" },
];

const listedLanguages = [
  {
    value: "common",
    name: "Common",
    description: "The lingua franca of the world",
  },
  { value: "aquan", name: "Aquan" },
  { value: "giant", name: "Giant" },
];

const weapons = [
  // ───── SIMPLE MELEE ─────
  {
    value: "club",
    name: "Club",
    category: "simple",
    type: "melee",
    damage: "1d4",
    damageType: "bludgeoning",
    properties: ["light"],
    weight: 2,
  },
  {
    value: "dagger",
    name: "Dagger",
    category: "simple",
    type: "melee",
    damage: "1d4",
    damageType: "piercing",
    properties: ["finesse", "light", "thrown"],
    weight: 1,
  },
  {
    value: "greatclub",
    name: "Greatclub",
    category: "simple",
    type: "melee",
    damage: "1d8",
    damageType: "bludgeoning",
    properties: ["two-handed"],
    weight: 10,
  },
  {
    value: "handaxe",
    name: "Handaxe",
    category: "simple",
    type: "melee",
    damage: "1d6",
    damageType: "slashing",
    properties: ["light", "thrown"],
    weight: 2,
  },
  {
    value: "javelin",
    name: "Javelin",
    category: "simple",
    type: "melee",
    damage: "1d6",
    damageType: "piercing",
    properties: ["thrown"],
    weight: 2,
  },
  {
    value: "lightHammer",
    name: "Light Hammer",
    category: "simple",
    type: "melee",
    damage: "1d4",
    damageType: "bludgeoning",
    properties: ["light", "thrown"],
    weight: 2,
  },
  {
    value: "mace",
    name: "Mace",
    category: "simple",
    type: "melee",
    damage: "1d6",
    damageType: "bludgeoning",
    properties: [],
    weight: 4,
  },
  {
    value: "quarterstaff",
    name: "Quarterstaff",
    category: "simple",
    type: "melee",
    damage: "1d6",
    damageType: "bludgeoning",
    properties: ["versatile"],
    weight: 4,
  },
  {
    value: "sickle",
    name: "Sickle",
    category: "simple",
    type: "melee",
    damage: "1d4",
    damageType: "slashing",
    properties: ["light"],
    weight: 4,
  },
  {
    value: "spear",
    name: "Spear",
    category: "simple",
    type: "melee",
    damage: "1d6",
    damageType: "piercing",
    properties: ["thrown", "versatile"],
    weight: 3,
  },

  // ───── SIMPLE RANGED ─────
  {
    value: "lightCrossbow",
    name: "Light Crossbow",
    category: "simple",
    type: "ranged",
    damage: "1d8",
    damageType: "piercing",
    properties: ["ammunition", "loading", "two-handed"],
    weight: 5,
  },
  {
    value: "dart",
    name: "Dart",
    category: "simple",
    type: "ranged",
    damage: "1d4",
    damageType: "piercing",
    properties: ["finesse", "thrown"],
    weight: 0.25,
  },
  {
    value: "shortbow",
    name: "Shortbow",
    category: "simple",
    type: "ranged",
    damage: "1d6",
    damageType: "piercing",
    properties: ["ammunition", "two-handed"],
    weight: 2,
  },
  {
    value: "sling",
    name: "Sling",
    category: "simple",
    type: "ranged",
    damage: "1d4",
    damageType: "bludgeoning",
    properties: ["ammunition"],
    weight: 0,
  },

  // ───── MARTIAL MELEE ─────
  {
    value: "battleaxe",
    name: "Battleaxe",
    category: "martial",
    type: "melee",
    damage: "1d8",
    damageType: "slashing",
    properties: ["versatile"],
    weight: 4,
  },
  {
    value: "flail",
    name: "Flail",
    category: "martial",
    type: "melee",
    damage: "1d8",
    damageType: "bludgeoning",
    properties: [],
    weight: 2,
  },
  {
    value: "glaive",
    name: "Glaive",
    category: "martial",
    type: "melee",
    damage: "1d10",
    damageType: "slashing",
    properties: ["heavy", "reach", "two-handed"],
    weight: 6,
  },
  {
    value: "greataxe",
    name: "Greataxe",
    category: "martial",
    type: "melee",
    damage: "1d12",
    damageType: "slashing",
    properties: ["heavy", "two-handed"],
    weight: 7,
  },
  {
    value: "greatsword",
    name: "Greatsword",
    category: "martial",
    type: "melee",
    damage: "2d6",
    damageType: "slashing",
    properties: ["heavy", "two-handed"],
    weight: 6,
  },
  {
    value: "halberd",
    name: "Halberd",
    category: "martial",
    type: "melee",
    damage: "1d10",
    damageType: "slashing",
    properties: ["heavy", "reach", "two-handed"],
    weight: 6,
  },
  {
    value: "lance",
    name: "Lance",
    category: "martial",
    type: "melee",
    damage: "1d12",
    damageType: "piercing",
    properties: ["reach", "special"],
    weight: 6,
  },
  {
    value: "longsword",
    name: "Longsword",
    category: "martial",
    type: "melee",
    damage: "1d8",
    damageType: "slashing",
    properties: ["versatile"],
    weight: 3,
  },
  {
    value: "maul",
    name: "Maul",
    category: "martial",
    type: "melee",
    damage: "2d6",
    damageType: "bludgeoning",
    properties: ["heavy", "two-handed"],
    weight: 10,
  },
  {
    value: "morningstar",
    name: "Morningstar",
    category: "martial",
    type: "melee",
    damage: "1d8",
    damageType: "piercing",
    properties: [],
    weight: 4,
  },
  {
    value: "pike",
    name: "Pike",
    category: "martial",
    type: "melee",
    damage: "1d10",
    damageType: "piercing",
    properties: ["heavy", "reach", "two-handed"],
    weight: 18,
  },
  {
    value: "rapier",
    name: "Rapier",
    category: "martial",
    type: "melee",
    damage: "1d8",
    damageType: "piercing",
    properties: ["finesse"],
    weight: 2,
  },
  {
    value: "scimitar",
    name: "Scimitar",
    category: "martial",
    type: "melee",
    damage: "1d6",
    damageType: "slashing",
    properties: ["finesse", "light"],
    weight: 3,
  },
  {
    value: "shortsword",
    name: "Shortsword",
    category: "martial",
    type: "melee",
    damage: "1d6",
    damageType: "piercing",
    properties: ["finesse", "light"],
    weight: 2,
  },
  {
    value: "trident",
    name: "Trident",
    category: "martial",
    type: "melee",
    damage: "1d6",
    damageType: "piercing",
    properties: ["thrown", "versatile"],
    weight: 4,
  },
  {
    value: "warPick",
    name: "War Pick",
    category: "martial",
    type: "melee",
    damage: "1d8",
    damageType: "piercing",
    properties: [],
    weight: 2,
  },
  {
    value: "warhammer",
    name: "Warhammer",
    category: "martial",
    type: "melee",
    damage: "1d8",
    damageType: "bludgeoning",
    properties: ["versatile"],
    weight: 2,
  },
  {
    value: "whip",
    name: "Whip",
    category: "martial",
    type: "melee",
    damage: "1d4",
    damageType: "slashing",
    properties: ["finesse", "reach"],
    weight: 3,
  },

  // ───── MARTIAL RANGED ─────
  {
    value: "blowgun",
    name: "Blowgun",
    category: "martial",
    type: "ranged",
    damage: "1d1",
    damageType: "piercing",
    properties: ["ammunition", "loading"],
    weight: 1,
  },
  {
    value: "handCrossbow",
    name: "Hand Crossbow",
    category: "martial",
    type: "ranged",
    damage: "1d6",
    damageType: "piercing",
    properties: ["ammunition", "light", "loading"],
    weight: 3,
  },
  {
    value: "heavyCrossbow",
    name: "Heavy Crossbow",
    category: "martial",
    type: "ranged",
    damage: "1d10",
    damageType: "piercing",
    properties: ["ammunition", "heavy", "loading", "two-handed"],
    weight: 18,
  },
  {
    value: "longbow",
    name: "Longbow",
    category: "martial",
    type: "ranged",
    damage: "1d8",
    damageType: "piercing",
    properties: ["ammunition", "heavy", "two-handed"],
    weight: 2,
  },
  {
    value: "net",
    name: "Net",
    category: "martial",
    type: "ranged",
    damage: "1d0",
    damageType: "none",
    properties: ["special", "thrown"],
    weight: 3,
  },
];

const armors = [
  // ───── LIGHT ARMOR ─────
  {
    value: "padded",
    name: "Padded",
    category: "light",
    baseAC: 11,
    dexBonus: "full",
    maxDex: null,
    stealthDisadvantage: true,
    properties: [],
    weight: 8,
  },
  {
    value: "leather",
    name: "Leather",
    category: "light",
    baseAC: 11,
    dexBonus: "full",
    maxDex: null,
    stealthDisadvantage: false,
    properties: [],
    weight: 10,
  },
  {
    value: "studdedLeather",
    name: "Studded Leather",
    category: "light",
    baseAC: 12,
    dexBonus: "full",
    maxDex: null,
    stealthDisadvantage: false,
    properties: [],
    weight: 13,
  },

  // ───── MEDIUM ARMOR ─────
  {
    value: "hide",
    name: "Hide",
    category: "medium",
    baseAC: 12,
    dexBonus: "limited",
    maxDex: 2,
    stealthDisadvantage: false,
    properties: [],
    weight: 12,
  },
  {
    value: "chainShirt",
    name: "Chain Shirt",
    category: "medium",
    baseAC: 13,
    dexBonus: "limited",
    maxDex: 2,
    stealthDisadvantage: false,
    properties: [],
    weight: 20,
  },
  {
    value: "scaleMail",
    name: "Scale Mail",
    category: "medium",
    baseAC: 14,
    dexBonus: "limited",
    maxDex: 2,
    stealthDisadvantage: true,
    properties: [],
    weight: 45,
  },
  {
    value: "breastplate",
    name: "Breastplate",
    category: "medium",
    baseAC: 14,
    dexBonus: "limited",
    maxDex: 2,
    stealthDisadvantage: false,
    properties: [],
    weight: 20,
  },
  {
    value: "halfPlate",
    name: "Half Plate",
    category: "medium",
    baseAC: 15,
    dexBonus: "limited",
    maxDex: 2,
    stealthDisadvantage: true,
    properties: [],
    weight: 40,
  },

  // ───── HEAVY ARMOR ─────
  {
    value: "ringMail",
    name: "Ring Mail",
    category: "heavy",
    baseAC: 14,
    dexBonus: "none",
    maxDex: 0,
    stealthDisadvantage: true,
    properties: [],
    weight: 40,
  },
  {
    value: "chainMail",
    name: "Chain Mail",
    category: "heavy",
    baseAC: 16,
    dexBonus: "none",
    maxDex: 0,
    stealthDisadvantage: true,
    strengthRequirement: 13,
    properties: [],
    weight: 55,
  },
  {
    value: "splint",
    name: "Splint",
    category: "heavy",
    baseAC: 17,
    dexBonus: "none",
    maxDex: 0,
    stealthDisadvantage: true,
    strengthRequirement: 15,
    properties: [],
    weight: 60,
  },
  {
    value: "plate",
    name: "Plate",
    category: "heavy",
    baseAC: 18,
    dexBonus: "none",
    maxDex: 0,
    stealthDisadvantage: true,
    strengthRequirement: 15,
    properties: [],
    weight: 65,
  },

  // ───── SHIELDS ─────
  // {
  //   value: "shield",
  //   name: "Shield",
  //   category: "shield",
  //   baseAC: 2,
  //   dexBonus: "n/a",
  //   maxDex: null,
  //   stealthDisadvantage: false,
  //   properties: ["requires-hand"],
  //   weight: 6,
  // },
];

const armorProficiencies = {
  barbarian: ["light", "medium", "shield"],
  bard: ["light"],
  cleric: ["light", "medium", "shield"],
  druid: ["light", "medium", "shield"],
  fighter: ["light", "medium", "heavy", "shield"],
  monk: [],
  paladin: ["light", "medium", "heavy", "shield"],
  ranger: ["light", "medium", "shield"],
  rogue: ["light"],
  wizard: [],
};

const items = [
  {
    value: "shield",
    name: "Shield",
    category: "shield",
    // baseAC: 2,
    weight: 6,
    properties: ["requires-hand", 2],
  },
  {
    value: "backpack",
    name: "Backpack",
    category: "gear",
    weight: 5,
    properties: ["container"],
  },
  {
    value: "bedroll",
    name: "Bedroll",
    category: "gear",
    weight: 7,
    properties: [],
  },
  {
    value: "rope_hempen",
    name: "Hempen Rope (50 ft)",
    category: "gear",
    weight: 10,
    properties: ["rope"],
  },
  {
    value: "rope_silk",
    name: "Silk Rope (50 ft)",
    category: "gear",
    weight: 5,
    properties: ["rope"],
  },
  {
    value: "torch",
    name: "Torch",
    category: "gear",
    weight: 1,
    properties: ["light"],
  },
  {
    value: "rations",
    name: "Rations (1 day)",
    category: "gear",
    weight: 2,
    properties: ["consumable"],
  },
  {
    value: "waterskin",
    name: "Waterskin",
    category: "gear",
    weight: 5,
    properties: ["container"],
  },
  {
    value: "mess_kit",
    name: "Mess Kit",
    category: "gear",
    weight: 1,
    properties: [],
  },
  {
    value: "tinderbox",
    name: "Tinderbox",
    category: "gear",
    weight: 1,
    properties: ["fire"],
  },
  {
    value: "crowbar",
    name: "Crowbar",
    category: "gear",
    weight: 5,
    properties: ["advantage-strength-checks"],
  },
  {
    value: "hammer",
    name: "Hammer",
    category: "tool",
    weight: 3,
    properties: [],
  },
  {
    value: "piton",
    name: "Piton",
    category: "gear",
    weight: 0.25,
    properties: ["climbing"],
  },
  {
    value: "flask_oil",
    name: "Oil (flask)",
    category: "gear",
    weight: 1,
    properties: ["flammable"],
  },
  {
    value: "holy_symbol",
    name: "Holy Symbol",
    category: "focus",
    weight: 1,
    properties: ["spellcasting-focus"],
  },
];

const packs = [
  {
    value: "explorers_pack",
    name: "Explorer's Pack",
    contents: [
      { item: "backpack", qty: 1 },
      { item: "bedroll", qty: 1 },
      { item: "mess_kit", qty: 1 },
      { item: "tinderbox", qty: 1 },
      { item: "torch", qty: 10 },
      { item: "rations", qty: 10 },
      { item: "waterskin", qty: 1 },
      { item: "rope_hempen", qty: 1 },
    ],
  },
  {
    value: "dungeoneers_pack",
    name: "Dungeoneer's Pack",
    contents: [
      { item: "backpack", qty: 1 },
      { item: "crowbar", qty: 1 },
      { item: "hammer", qty: 1 },
      { item: "piton", qty: 10 },
      { item: "torch", qty: 10 },
      { item: "rations", qty: 10 },
      { item: "waterskin", qty: 1 },
      { item: "rope_hempen", qty: 1 },
    ],
  },
  {
    value: "priests_pack",
    name: "Priest's Pack",
    contents: [
      { item: "backpack", qty: 1 },
      { item: "blanket", qty: 1 },
      { item: "rations", qty: 10 },
      { item: "waterskin", qty: 1 },
      { item: "holy_symbol", qty: 1 },
    ],
  },
];

//Short Rest
shortRestBtn.addEventListener("click", () => {
  if (+currentHP.textContent === +health.value) {
    modal.classList.remove("hidden");
    title.textContent = "INFORMATION";
    description.textContent = `HP is full! No need to heal!`;
    return;
  }

  if (+currentHitDiceQuantity.textContent === 0) {
    modal.classList.remove("hidden");
    title.textContent = "WARNING";
    description.textContent = `No hit dice to spend!`;
    return;
  }

  hitDiceAvailable.textContent = `${currentHitDiceQuantity.textContent} / ${totalHitDiceQuantity.textContent}`;

  hitDicePool.max = +currentHitDiceQuantity.textContent;
  hitDicePool.min = 1;
  hitDicePool.value = 1;
  hitDicePool.style.width = "40px";
  hitDicePool.style.textAlign = "center";

  shortRestModal.classList.remove("hidden");
});

confirmShortRestBtn.addEventListener("click", () => {
  isShortResting = true;
  const diceToSpend = Number(hitDicePool.value);

  if (diceToSpend < 1 || diceToSpend > +currentHitDiceQuantity.textContent) {
    return;
  }
  const result = shortRest(classHitDieType, diceToSpend);
  currentHP.textContent = +currentHP.textContent + result.healing;
  if (+currentHP.textContent >= +health.value) {
    currentHP.textContent = +health.value;
  }
  currentHitDiceQuantity.textContent =
    +currentHitDiceQuantity.textContent - result.diceSpent;

  shortRestModal.classList.add("hidden");
  //updateUI();

  // showMessage(
  //   `You recover ${result.healing} HP by spending ${result.diceSpent} Hit Dice.`,
  // );
});

//Long Rest
longRestBtn.addEventListener("click", () => {
  currentHitDiceQuantity.textContent =
    +currentHitDiceQuantity.textContent +
    Math.floor(+totalHitDiceQuantity.textContent / 2);
  if (+currentHitDiceQuantity.textContent > +totalHitDiceQuantity.textContent) {
    currentHitDiceQuantity.textContent = +totalHitDiceQuantity.textContent;
  }
  isShortResting = false;
  currentHP.textContent = +health.value;
});

//Allow user input
hitDicePool.addEventListener("input", () => {
  let value = hitDicePool.value;

  // Remove everything except digits
  value = value.replace(/[^0-9]/g, "");

  if (value === "") {
    hitDicePool.value = 1;
    return;
  }

  let number = Number(value);

  if (number < 1) number = 1;
  if (number > +currentHitDiceQuantity.textContent)
    number = +currentHitDiceQuantity.textContent;

  hitDicePool.value = number;
});

// longRestBtn.addEventListener("click", () => {
//   const result = longRest(character);

//   updateUI();
//   showMessage(
//     `Long rest completed. Recovered ${result.diceRecovered} Hit Dice.`,
//   );
// });

function updateUI() {
  shortRestBtn.disabled =
    currentHitDiceQuantity.textContent === 0 ||
    currentHP.textContent === health.value;
  longRestBtn.disabled = false;

  hitDicePool.textContent = `${currentHP.textContent} / ${health.value}`;
  hitDicePool.textContent = `${currentHitDiceQuantity.textContent} / ${totalHitDiceQuantity.textContent}`;
}

//Reset Image Upload
characterImageUpload.addEventListener("click", () => {
  // Reset BEFORE opening the file picker; click fires before file picker is launched
  characterImageUpload.value = "";
});

//Image Preview
characterImageUpload.addEventListener("change", () => {
  if (characterImageUpload.files.length > 1) {
    modal.classList.remove("hidden");
    title.textContent = "WARNING";
    description.innerHTML = `Only <u>one image</u> can be uploaded!`;
  }
  const file = characterImageUpload.files[0];
  imageSrc = characterImageUpload.files[0];
  imageModal.classList.remove("hidden");
  imageTitle.textContent = file.name;
  imagePreview.src = URL.createObjectURL(file);
  imagePreview.style.width = "100%"; //fits image to parent container
  imagePreview.style.height = "auto"; //to keep aspect ratio
  //profilePicture.style.height = "100px"; //to fill AND crop, alongside 100% width
});

//Character Image Upload
acceptImagePreviewBtn.addEventListener("click", () => {
  profilePicture.src = URL.createObjectURL(imageSrc);
  profilePicture.style.width = "100%"; //fits image to parent container
  profilePicture.style.height = "auto"; //to keep aspect ratio
  //profilePicture.style.height = "100px"; //to fill AND crop, alongside 100% width
  imageModal.classList.add("hidden");
});

//New Character
newCharacterBtn.addEventListener("click", () => {
  location.reload();
});

//Equipment Page
equipmentBtn.addEventListener("click", () => {
  sheet.style.display = "none";
  equipmentPage.style.display = "block";
  inventoryLabel.textContent = `(Maximum Weight = ${+strength.value * 15} lbs)`;
  currentWeight.textContent = `Current Carrying Weight = ${totalWeight} lbs`;
  remainingWeight.textContent = `Remaining Carrying Weight = ${+strength.value * 15 - totalWeight} lbs`;
});

//Backstory Page
backstoryBtn.addEventListener("click", () => {
  sheet.style.display = "none";
  backstoryPage.style.display = "block";
  backstoryText.value = backstoryText.value;
});

backstoryClearBtn.addEventListener("click", () => {
  backstoryText.value = "";
  if (backstoryConfirmBtn.disabled) {
    backstoryConfirmBtn.disabled = false;
    backstoryPreview.style.display = "none";
    backstoryText.style.display = "block";
  }
});

backstoryConfirmBtn.addEventListener("click", () => {
  if (backstoryText.value === "") {
    return;
  }
  backstoryPreview.style.display = "block";
  backstoryPreview.innerHTML = marked.parse(backstoryText.value); //markdown parsing
  backstoryText.style.display = "none";
  backstoryConfirmBtn.disabled = true;
});

//Language Choice
addLanguage.addEventListener("click", () => {
  populateSelect(languageSelect, languages);
  languageTitle.textContent = "Language Dialog";
  language.classList.remove("hidden");
});

languageSelect.addEventListener("change", () => {
  const value = languageSelect.value;
  if (!value) return;

  // Check if weapon already exists in the container
  const alreadyAdded = Array.from(languageContainer.children).some(
    (child) => child.dataset.language === value,
  );

  if (!alreadyAdded) {
    // Find the selected weapon from the array
    const chosenLanguage = languages.find((l) => l.value === value);
    if (!chosenLanguage) return;

    // Update the title and description
    title.textContent = chosenLanguage.name;
    description.textContent = chosenLanguage.description;

    // Create the new div
    const addedLanguage = document.createElement("div");
    addedLanguage.dataset.language = chosenLanguage.value; // store value for duplicate check
    addedLanguage.innerHTML = `<b>${chosenLanguage.name}</b>`;
    addedLanguage.style.backgroundColor = "aliceblue";
    addedLanguage.style.border = "2px solid black";
    addedLanguage.style.borderRadius = "10%";
    addedLanguage.style.cursor = "pointer";

    // Add right-click removal
    addedLanguage.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      languageContainer.removeChild(addedLanguage);
    });

    // Append to container
    languageContainer.appendChild(addedLanguage);
  } else {
    title.textContent = "WARNING";
    description.textContent = "Language already added!";
  }

  language.classList.add("hidden");
  modal.classList.remove("hidden");
});

//Modal Description
raceSelect.addEventListener("change", () => {
  const value = raceSelect.value;
  if (!value) return;

  races.forEach((race) => {
    if (race.value == value) {
      title.textContent = race.name;
      description.textContent = race.description;
      if (!race.subraces) {
        subRaceLabel.style.display = "none";
        subRaceSelect.classList.add("hidden");
        subRaceSelect.required = false;
        return;
      } else {
        subRaceLabel.classList.remove("hidden");
        subRaceLabel.classList.add("push-downwards");
        subRaceLabel.style.display = "flex";
        subRaceLabel.style.gap = "5px";
        subRaceSelect.classList.remove("hidden");
        subRaceSelect.required = true;
        populateSelect(subRaceSelect, Object.values(race.subraces));
        characterCreator.style.height = "550px";
      }
    }
  });
  // title.textContent = races[value].name;
  // description.textContent = races[value].description;

  modal.classList.remove("hidden");
});

// backgroundSelect.addEventListener("change", () => {
//   const value = backgroundSelect.value;
//   if (!value) return;

//   backgrounds.forEach((background) => {
//     if (background.value == value) {
//       title.textContent = background.name;
//       description.textContent = background.description;
//     }
//   });

//   modal.classList.remove("hidden");
// });

backgroundSelect.addEventListener("change", () => {
  const backgroundKey = backgroundSelect.value;
  characterBackstory = backgroundSelect.value;
  if (!backgroundKey) return;

  const characterBackground = backgrounds[backgroundKey];

  title.textContent =
    backgroundKey.substring(0, 1).toUpperCase() +
    backgroundKey.substring(1).toLowerCase();
  description.textContent = characterBackground.description;

  const { skillProficiencies } = backgrounds[backgroundKey];

  console.log(skillProficiencies);
  console.log(allSkillCheckboxes);

  skillProficiencies.forEach((skill) => {
    const checkbox = allSkillCheckboxes.find(
      (cb) => cb.value === skill.toLowerCase(),
    );
    console.log(checkbox);
    if (checkbox) {
      checkbox.element.checked = true;
      //checkbox.disabled = true; // optional
    }
  });

  modal.classList.remove("hidden");
});

classSelect.addEventListener("change", () => {
  const classKey = classSelect.value;
  if (!classKey) return;

  const characterClass = classes[classKey];

  title.textContent =
    classKey.substring(0, 1).toUpperCase() +
    classKey.substring(1).toLowerCase();
  description.textContent = characterClass.description;

  modal.classList.remove("hidden");
});

// classSelect.addEventListener("change", () => {
//   const value = classSelect.value;
//   if (!value) return;

//   classes.forEach((characterClass) => {
//     if (characterClass.value == value) {
//       title.textContent = characterClass.name;
//       description.textContent = characterClass.description;
//     }
//   });

//   modal.classList.remove("hidden");
// });

//Close handlers
closeWeaponProficiencyBtn.addEventListener("click", () => {
  weaponProficiencyModal.classList.add("hidden");
});

closeArmourProficiencyBtn.addEventListener("click", () => {
  armourProficiencyModal.classList.add("hidden");
});

closeToolProficiencyBtn.addEventListener("click", () => {
  toolProficiencyModal.classList.add("hidden");
});

closeShortRestBtn.addEventListener("click", () => {
  shortRestModal.classList.add("hidden");
});

closeImagePreviewBtn.addEventListener("click", () => {
  imageModal.classList.add("hidden");
});

closeAttackAndDamageRollBtn.addEventListener("click", () => {
  attackAndDamagePopup.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

closeLangBtn.addEventListener("click", () => {
  language.classList.add("hidden");
});

closeEquipmentBtn.addEventListener("click", () => {
  equipment.classList.add("hidden");
});

closeDiceRollerBtn.addEventListener("click", () => {
  diceRoller.classList.add("hidden");
});

shortRestModal.addEventListener("click", (e) => {
  if (e.target === shortRestModal) {
    shortRestModal.classList.add("hidden");
  }
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

weaponProficiencyModal.addEventListener("click", (e) => {
  if (e.target === weaponProficiencyModal) {
    weaponProficiencyModal.classList.add("hidden");
  }
});

armourProficiencyModal.addEventListener("click", (e) => {
  if (e.target === armourProficiencyModal) {
    armourProficiencyModal.classList.add("hidden");
  }
});

toolProficiencyModal.addEventListener("click", (e) => {
  if (e.target === toolProficiencyModal) {
    toolProficiencyModal.classList.add("hidden");
  }
});

imageModal.addEventListener("click", (e) => {
  if (e.target === imageModal) {
    imageModal.classList.add("hidden");
  }
});

diceRoller.addEventListener("click", (e) => {
  if (e.target === diceRoller) {
    diceRoller.classList.add("hidden");
  }
});

language.addEventListener("click", (e) => {
  if (e.target === language) {
    language.classList.add("hidden");
  }
});

equipment.addEventListener("click", (e) => {
  if (e.target === equipment) {
    equipment.classList.add("hidden");
  }
});

attackAndDamagePopup.addEventListener("click", (e) => {
  if (e.target === attackAndDamagePopup) {
    attackAndDamagePopup.classList.add("hidden");
  }
});

//Closes popups with esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    weaponProficiencyModal.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    armourProficiencyModal.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    toolProficiencyModal.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    shortRestModal.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    imageModal.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    language.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    equipment.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    diceRoller.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    attackAndDamagePopup.classList.add("hidden");
  }
});

//Close skill check result
closeSavingThrowBtn.addEventListener("click", () => {
  savingThrow.classList.add("hidden");
});

savingThrow.addEventListener("click", (e) => {
  if (e.target === savingThrow) {
    savingThrow.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    savingThrow.classList.add("hidden");
  }
});

//Dice Roller
//Open dice roller
openDiceRollerBtn.addEventListener("click", () => {
  diceRoller.classList.remove("hidden");
  dieNumber.value = "";
  dieType.value = "";
  diceRollerInfo.style.display = "block";
  diceRollerResult.style.display = "none";
});

diceRollerInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  diceRollerInfo.style.display = "none";
  diceRollerResult.style.display = "block";
  rollResult.textContent = "";
  dieTypeTitle.textContent = `${dieNumber.value}d${dieType.value}`;

  rollResult.style.fontSize = "3rem";
  roller = rollDice(+dieNumber.value, +dieType.value);
  rollResult.innerHTML = `Rolls: ${roller.rolls}<br>Total: ${roller.total}`;
});

//Reroll Dice Roller
rerollDiceBtn.addEventListener("click", () => {
  rollResult.textContent = "";

  rollResult.style.fontSize = "3rem";
  roller = rollDice(+dieNumber.value, +dieType.value);
  rollResult.innerHTML = `Rolls: ${roller.rolls}<br>Total: ${roller.total}`;
  diceRoller.classList.remove("hidden");
});

//Roll Dice
function rollDice(numberOfDice, dieType) {
  const rolls = [];
  let total = 0;

  for (let i = 0; i < numberOfDice; i++) {
    const roll = Math.floor(Math.random() * dieType) + 1;
    rolls.push(roll);
    total += roll;
  }

  return {
    rolls,
    total,
  };
}

//Allow user input
dieNumber.addEventListener("input", () => {
  let value = dieNumber.value;

  // Remove everything except digits
  value = value.replace(/[^0-9]/g, "");

  if (value === "") {
    dieNumber.value = "";
    return;
  }

  let number = Number(value);

  if (number < 1) number = 1;

  dieNumber.value = number;
});

dieType.addEventListener("input", () => {
  let value = dieType.value;

  // Remove everything except digits
  value = value.replace(/[^0-9]/g, "");

  if (value === "") {
    dieType.value = "";
    return;
  }

  let number = Number(value);

  if (number < 1) number = 1;

  dieType.value = number;
});

//Populate select options dynamically
function populateSelect(selectElement, optionsArray) {
  // Clear existing options (optional)
  selectElement.innerHTML = "";

  // Add placeholder option
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = `Select ${selectElement.name}`;
  placeholder.disabled = true;
  placeholder.selected = true;
  placeholder.hidden = true;
  selectElement.appendChild(placeholder);

  //Sorts based on alphabetical order
  //optionsArray.sort((a, b) => a.name.localeCompare(b.name));

  //Ignores case differences
  //Handles accented characters correctly
  optionsArray.sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
  );

  // Add options dynamically
  optionsArray.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option.value;
    if (option.weight !== undefined) {
      opt.textContent = `${option.name} (${option.weight} lbs)`;
    } else {
      opt.textContent = option.name;
    }
    selectElement.appendChild(opt);
  });
}

populateSelect(raceSelect, races);
//populateSelect(classSelect, classes);
populateSelect(classSelect, classOptions);
//populateSelect(backgroundSelect, backgrounds);
populateSelect(backgroundSelect, backgroundOptions);
populateSelect(languageSelect, languages);

//Generate character statistics

//Name Input Validation
characterName.addEventListener("input", () => {
  // Remove anything that's not a letter or space
  characterName.value = characterName.value.replace(/[^A-Za-z\s]/g, "");
});

//Character Form Submission
characterForm.addEventListener("submit", (e) => {
  const name = characterName.value.trim();
  if (!/^[A-Za-z\s]+$/.test(name)) {
    e.preventDefault();
  } else {
    e.preventDefault();
    initializeSheet();
  }
});

//Update modifiers dynamically based on changes in ability scores
function updateAbilityModifier(abilityScore, abilityScoreModifier) {
  abilityScoreModifier.style.textAlign = "center";
  abilityScoreModifier.style.fontSize = "2rem";
  abilityScoreModifier.textContent = Math.floor((abilityScore.value - 10) / 2);
}

//Initialize sheet
function initializeSheet() {
  characterCreator.style.display = "none";
  characterClass = classSelect.value;
  let chosenRace = races.find((r) => r.value === raceSelect.value);
  baseStatistics = {
    str: +strength.value,
    dex: +dexterity.value,
    con: +constitution.value,
    int: +intelligence.value,
    wis: +wisdom.value,
    cha: +charisma.value,
  };
  console.log(baseStatistics);
  let selectedSubraceValue;
  if (chosenRace.subraces) {
    selectedSubraceValue = subRaceSelect.value;
    const selectedSubraceName = Object.values(chosenRace.subraces).find(
      (subrace) => subrace.value === selectedSubraceValue,
    )?.name;
    subRace.classList.remove("hidden");
    subRace.textContent = selectedSubraceName;
    subRace.style.border = "2px solid black";
    subRace.style.textAlign = "center";
    subRace.style.backgroundColor = "aliceblue";
    const subraceKey = Object.values(chosenRace.subraces).find(
      (subrace) => subrace.value === selectedSubraceValue,
    );
    strength.value =
      baseStatistics.str + getRacialASI(chosenRace, subraceKey, "str");
    updateAbilityModifier(strength, strMod);
    dexterity.value =
      baseStatistics.dex + getRacialASI(chosenRace, subraceKey, "dex");
    updateAbilityModifier(dexterity, initiative);
    constitution.value =
      baseStatistics.con + getRacialASI(chosenRace, subraceKey, "con");
    updateAbilityModifier(constitution, conMod);
    intelligence.value =
      baseStatistics.int + getRacialASI(chosenRace, subraceKey, "int");
    updateAbilityModifier(intelligence, intMod);
    wisdom.value =
      baseStatistics.wis + getRacialASI(chosenRace, subraceKey, "wis");
    updateAbilityModifier(wisdom, wisMod);
    charisma.value =
      baseStatistics.cha + getRacialASI(chosenRace, subraceKey, "cha");
    updateAbilityModifier(charisma, chaMod);
  } else {
    strength.value =
      baseStatistics.str + getRacialASI(chosenRace, undefined, "str");
    updateAbilityModifier(strength, strMod);
    dexterity.value =
      baseStatistics.dex + getRacialASI(chosenRace, undefined, "dex");
    updateAbilityModifier(dexterity, initiative);
    constitution.value =
      baseStatistics.con + getRacialASI(chosenRace, undefined, "con");
    updateAbilityModifier(constitution, conMod);
    intelligence.value =
      baseStatistics.int + getRacialASI(chosenRace, undefined, "int");
    updateAbilityModifier(intelligence, intMod);
    wisdom.value =
      baseStatistics.wis + getRacialASI(chosenRace, undefined, "wis");
    updateAbilityModifier(wisdom, wisMod);
    charisma.value =
      baseStatistics.cha + getRacialASI(chosenRace, undefined, "cha");
    updateAbilityModifier(charisma, chaMod);
  }
  size.style.fontSize = "2rem";
  size.textContent = chosenRace.size;
  speed.style.fontSize = "2rem";
  speed.textContent = chosenRace.speed;
  health.value = classes[characterClass].hp.level1 + +conMod.textContent;
  currentHP.style.fontSize = "2rem";
  currentHP.textContent = +health.value;
  armourClass.value = +initiative.textContent + 10;
  baseAC = +armourClass.value;
  damageHeal.value = 0;
  level.style.fontSize = "2rem";
  level.value = 1;
  totalHitDiceQuantity.textContent = +level.value;
  currentHitDiceQuantity.textContent = +totalHitDiceQuantity.textContent;
  hitDiceType.textContent = classes[characterClass].hitDie;
  classHitDieType = classes[characterClass].hitDie.match(/\d+/)[0];
  characterClassName = characterClass.toLowerCase();
  proficiency.textContent = getProficiencyBonus(+level.value);
  archetype.textContent = `${characterClass
    .substring(0, 1)
    .toUpperCase()}${characterClass.substring(1).toLowerCase()}`;
  race.textContent = `${chosenRace.name
    .substring(0, 1)
    .toUpperCase()}${chosenRace.name.substring(1).toLowerCase()}`;
  let name = backgroundSelect.value;
  background.textContent = `${name.substring(0, 1).toUpperCase()}${name
    .substring(1)
    .toLowerCase()}`;
  nameDisplay.style.display = "block";
  nameDisplay.innerHTML = `<b><i>${characterName.value}</i></b>`;
  sheet.style.display = "block";
  characterSheet.style.display = "flex";
  characterSheet.style.position = "absolute";
  initiative.style.cursor = "pointer";
}

//Take short rest
function shortRest(hitDieType, diceToSpend) {
  if (diceToSpend <= 0) return;

  // const spendableDice = Math.min(
  //   diceToSpend,
  //   +currentHitDiceQuantity.textContent,
  // );

  const spendableDice = diceToSpend;
  let totalHealing = 0;

  for (let i = 0; i < spendableDice; i++) {
    const roll = Math.floor(Math.random() * hitDieType) + 1;
    totalHealing += roll + +conMod.textContent;
  }

  // currentHP.textContent = Math.min(
  //   +currentHP.textContent + totalHealing,
  //   +health.textContent,
  // );

  //currentHP.textContent -= spendableDice;

  return {
    healing: totalHealing,
    diceSpent: spendableDice,
  };
}

//Take long rest
function longRest(character) {
  const diceRecovered = Math.max(1, Math.floor(character.maxHitDice / 2));

  character.currentHitDice = Math.min(
    character.currentHitDice + diceRecovered,
    character.maxHitDice,
  );

  character.currentHP = character.maxHP;

  return {
    diceRecovered,
  };
}

//Calculate racial ability score increases
function getRacialASI(race, subraceKey, ability) {
  const raceBonus = race.abilityScoreIncreases?.[ability] ?? 0;
  const subraceBonus =
    subraceKey && subraceKey.abilityScoreIncreases?.[ability]
      ? subraceKey.abilityScoreIncreases?.[ability]
      : 0;
  return raceBonus + subraceBonus;
}

//Proficiency Bonus Calculation
function getProficiencyBonus(level) {
  if (level < 1) return 0;
  return Math.floor((level - 1) / 4) + 2;
}

//Roll Statistics
function rollStat() {
  const rolls = Array.from(
    { length: 4 },
    () => Math.floor(Math.random() * 6) + 1,
  );
  rolls.sort((a, b) => a - b);
  return rolls.slice(1).reduce((a, b) => a + b, 0);
}

//Ability Score

//Increment and decrement ability scores
document.querySelectorAll(".stat-control").forEach((control) => {
  const input = control.querySelector("input");
  const plus = control.querySelector(".plus");
  const minus = control.querySelector(".minus");
  const mod = control.querySelector(".modifier");

  const min = Number(input.min);
  const max = Number(input.max);
  let oldModifier = 0;

  // Initialize empty inputs
  if (!input.value) {
    input.value = rollStat();
    oldModifier = Math.floor((input.value - 10) / 2);
    mod.style.textAlign = "center";
    mod.style.fontSize = "2rem";
    mod.textContent = Math.floor((input.value - 10) / 2);
  }

  //Allow user input
  input.addEventListener("input", () => {
    let value = input.value;
    // Remove everything except digits
    value = value.replace(/[^0-9]/g, "");

    if (value === "") {
      input.value = 1;
      mod.style.textAlign = "center";
      mod.style.fontSize = "2rem";
      mod.textContent = Math.floor((input.value - 10) / 2);
      if (mod.id === "initiative") {
        newMod = +mod.textContent;
        baseAC = baseAC + (newMod - oldModifier);
        const ac = calculateArmorClass(
          armourEquipped,
          characterClassName,
          hasShield,
        );
        armourClass.value = ac.ac;
      }
      return;
    }

    let number = Number(value);

    if (number < 1) number = 1;
    if (number > 40) number = 40;

    input.value = number;
    mod.style.textAlign = "center";
    mod.style.fontSize = "2rem";
    mod.textContent = Math.floor((input.value - 10) / 2);
    if (mod.id === "initiative") {
      newMod = +mod.textContent;
      baseAC = baseAC + (newMod - oldModifier);
      const ac = calculateArmorClass(
        armourEquipped,
        characterClassName,
        hasShield,
      );
      armourClass.value = ac.ac;
    }
  });

  //Increment
  plus.addEventListener("click", () => {
    let value = Number(input.value);
    let oldMod = calculateAbilityScoreModifier(input);
    if (value < max) {
      input.value = value + 1;
      mod.style.textAlign = "center";
      mod.style.fontSize = "2rem";
      mod.textContent = Math.floor((input.value - 10) / 2);
      if (mod.id === "initiative") {
        newMod = +mod.textContent;
        baseAC = baseAC + (newMod - oldMod);
        const ac = calculateArmorClass(
          armourEquipped,
          characterClassName,
          hasShield,
        );
        armourClass.value = ac.ac;
      }
    }
  });

  //Decrement
  minus.addEventListener("click", () => {
    let value = Number(input.value);
    let oldMod = calculateAbilityScoreModifier(input);
    if (value > min) {
      input.value = value - 1;
      mod.style.textAlign = "center";
      mod.style.fontSize = "2rem";
      mod.textContent = Math.floor((input.value - 10) / 2);
      if (mod.id === "initiative") {
        newMod = +mod.textContent;
        baseAC = baseAC + (newMod - oldMod);
        const ac = calculateArmorClass(
          armourEquipped,
          characterClassName,
          hasShield,
        );
        armourClass.value = ac.ac;
      }
    }
  });
});

//Update Armour Class Dynamically
function updateArmourClass(acBase, acArmour, acShield) {
  return acBase + acArmour + acShield;
}

//Calculate modifier
function calculateAbilityScoreModifier(abilityScore) {
  return Math.floor((+abilityScore.value - 10) / 2);
}

//Update ability score and modifier
function updateAbility(abilityScore, mod, delta) {
  let value = Number(abilityScore.value);
  if ((delta > 0 && value >= max) || (delta < 0 && value <= min)) return;

  const oldScore = value;
  const oldMod = calculateAbilityScoreModifier(oldScore);

  const newScore = oldScore + delta;
  abilityScore.value = newScore;

  const newMod = calculateAbilityScoreModifier(newScore);

  // update displayed mod
  mod.style.textAlign = "center";
  mod.style.fontSize = "2rem";
  mod.textContent = newMod;

  // apply ONLY the change in mod to AC
  if (mod.id === "initiative") {
    // (you probably mean dexterity here)
    const ac = Number(armourClass.value) || 0;
    armourClass.value = ac + (newMod - oldMod);
  }
}

//D20 Dice Roller
function getRandomFace() {
  return Math.floor(Math.random() * 20) + 1;
}

//Death Saving Throw
deathSave.addEventListener("click", () => {
  closeSavingThrowBtn.disabled = true;
  rerollSavingThrowBtn.disabled = true;
  savingThrowResult.textContent = "";
  savingThrowTitle.textContent = `Death Saving Throw`;

  // Start animation
  const intervalId = setInterval(() => {
    const randomFace = getRandomFace();
    d20Img.src = `assets/img/d20/d20-${randomFace}.png`;
  }, 60);

  // Stop animation & show final roll
  setTimeout(() => {
    clearInterval(intervalId);
    const finalIndex = Math.floor(Math.random() * 20);
    d20Img.src = d20Faces[finalIndex].src;
    savingThrowResult.style.fontSize = "3rem";
    savingThrowResult.textContent = `${finalIndex + 1}`;
    if (checkDeathSave(finalIndex + 1)) {
      ++successNumber;
      if (successNumber == 1) {
        deathSuccess1.style.display = "none";
        deathCheck1.style.display = "block";
      } else if (successNumber == 2) {
        deathSuccess1.style.display = "none";
        deathCheck1.style.display = "block";
        deathSuccess2.style.display = "none";
        deathCheck2.style.display = "block";
      } else if (successNumber >= 3) {
        deathSuccess1.style.display = "none";
        deathCheck1.style.display = "block";
        deathSuccess2.style.display = "none";
        deathCheck2.style.display = "block";
        deathSuccess3.style.display = "none";
        deathCheck3.style.display = "block";
        getCharacterStatus("stable");
        resetDeathSaves();
        currentHP.textContent = 1;
      }
    } else {
      ++failureNumber;
      if (failureNumber == 1) {
        deathFail1.style.display = "none";
        deathX1.style.display = "block";
      } else if (failureNumber == 2) {
        deathFail1.style.display = "none";
        deathX1.style.display = "block";
        deathFail2.style.display = "none";
        deathX2.style.display = "block";
      } else if (failureNumber >= 3) {
        deathFail1.style.display = "none";
        deathX1.style.display = "block";
        deathFail2.style.display = "none";
        deathX2.style.display = "block";
        deathFail3.style.display = "none";
        deathX3.style.display = "block";
        getCharacterStatus("dead");
      }
    }
    closeSavingThrowBtn.disabled = false;
  }, 1000);
  savingThrow.classList.remove("hidden");

  //No Reroll
  rerollSavingThrowBtn.disabled = true;
});

//Reset Death Saves
function resetDeathSaves() {
  successNumber = 0;
  failureNumber = 0;
  deathSuccess1.style.display = "block";
  deathCheck1.style.display = "none";
  deathSuccess2.style.display = "block";
  deathCheck2.style.display = "none";
  deathSuccess3.style.display = "block";
  deathCheck3.style.display = "none";
  deathFail1.style.display = "block";
  deathX1.style.display = "none";
  deathFail2.style.display = "block";
  deathX2.style.display = "none";
  deathFail3.style.display = "block";
  deathX3.style.display = "none";
}

//Checking if death save failed or not
function checkDeathSave(roll) {
  if (roll === 1) {
    ++failureNumber;
    return false;
  } else if (roll >= 2 && roll < 10) {
    return false;
  } else if (roll >= 10 && roll < 20) {
    return true;
  } else if (roll == 20) {
    ++successNumber;
    return true;
  }
}

//Announcing character status
function getCharacterStatus(status) {
  savingThrowResult.textContent = "";
  savingThrowTitle.textContent = `CHARACTER STATUS`;
  if (status === "dead") {
    savingThrowResult.innerHTML = "Character is dead!<br>Game over!";
    characterDeath();
  } else if (status === "stable") {
    savingThrowResult.innerHTML =
      "Character is stable!<br>However, character is unconsious!";
  }
}

//Character Death Consequences
function characterDeath() {
  failureNumber = 0;
  currentHP.textContent = 0;
  currentHP.disabled = true;
  currentHP.style.cursor = "not-allowed";
  health.disabled = true;
  health.style.cursor = "not-allowed";
  healthPlusBtn.disabled = true;
  healthPlusBtn.style.cursor = "not-allowed";
  healthMinusBtn.disabled = true;
  healthMinusBtn.style.cursor = "not-allowed";
  damageHeal.value = 0;
  damageHeal.disabled = true;
  damageHeal.style.cursor = "not-allowed";
  healBtn.disabled = true;
  healBtn.style.cursor = "not-allowed";
  damageBtn.disabled = true;
  damageBtn.style.cursor = "not-allowed";
  deathSave.disabled = true;
  deathSave.style.cursor = "not-allowed";
  deathSave.style.opacity = "0.5";
}

//Saving Throws
document.querySelectorAll(".saving-throw-check").forEach((label) => {
  label.addEventListener("click", () => {
    rerollSavingThrowBtn.disabled = true;
    savingThrowResult.textContent = "";
    savingThrowTitle.textContent = `${label.textContent} Saving Throw`;

    // Start animation
    const intervalId = setInterval(() => {
      const randomFace = getRandomFace();
      d20Img.src = `assets/img/d20/d20-${randomFace}.png`;
    }, 60);

    // Stop animation & show final roll
    setTimeout(() => {
      clearInterval(intervalId);
      const finalIndex = Math.floor(Math.random() * 20);
      d20Img.src = d20Faces[finalIndex].src;
      savingThrowResult.style.fontSize = "3rem";
      getSavingThrowModifier(label.textContent, finalIndex, modifiers);
    }, 1000);
    savingThrow.classList.remove("hidden");

    //Reroll Saving Throw
    rerollSavingThrowBtn.addEventListener("click", () => {
      rerollSavingThrowBtn.disabled = true;
      savingThrowResult.textContent = "";

      // Start animation
      const intervalId = setInterval(() => {
        const randomFace = getRandomFace();
        d20Img.src = `assets/img/d20/d20-${randomFace}.png`;
      }, 60);

      // Stop animation & show final roll
      setTimeout(() => {
        clearInterval(intervalId);
        const finalIndex = Math.floor(Math.random() * 20);
        d20Img.src = d20Faces[finalIndex].src;
        savingThrowResult.style.fontSize = "3rem";
        getSavingThrowModifier(label.textContent, finalIndex, modifiers);
      }, 1000);
      savingThrow.classList.remove("hidden");
    });
  });
});

//Matching Saving Throw Modifier
function getSavingThrowModifier(scoreName, finalIndex, modArray) {
  let modifierName = "";
  let modifierValue = 0;
  modArray.forEach((mod) => {
    modifierName = mod.dataset.ability;
    modifierValue = mod.textContent;
    if (scoreName === "STRENGTH (STR)") {
      if (modifierName === "might") {
        if (strengthCheckBox.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (scoreName === "DEXTERITY (DEX)") {
      if (modifierName === "finesse") {
        if (dexterityCheckBox.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (scoreName === "INITIATIVE ROLL") {
      if (modifierName === "finesse") {
        if (modifierValue < 0) {
          savingThrowResult.textContent = `${finalIndex + 1} - ${
            +modifierValue * -1
          } = ${finalIndex + 1 + +modifierValue}`;
        } else {
          savingThrowResult.textContent = `${
            finalIndex + 1
          } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
        }
      }
    } else if (scoreName === "CONSTITUTION (CON)") {
      if (modifierName === "resolve") {
        if (constitutionCheckBox.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (scoreName === "INTELLIGENCE (INT)") {
      if (modifierName === "erudition") {
        if (intelligenceCheckBox.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (scoreName === "WISDOM (WIS)") {
      if (modifierName === "pragmatism") {
        if (wisdomCheckBox.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (scoreName === "CHARISMA (CHA)") {
      if (modifierName === "conveyance") {
        if (charismaCheckBox.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if ((scoreName = "Death Saving Throw")) {
      savingThrowResult.textContent = `${finalIndex + 1}`;
      rerollSavingThrowBtn.disabled = true;
      return;
    }
  });
  rerollSavingThrowBtn.disabled = false;
}

//Initiative Roll
initiative.addEventListener("click", () => {
  rerollSavingThrowBtn.disabled = true;
  savingThrowResult.textContent = "";
  savingThrowTitle.textContent = `INITIATIVE ROLL`;
  // Start animation
  const intervalId = setInterval(() => {
    const randomFace = getRandomFace();
    d20Img.src = `assets/img/d20/d20-${randomFace}.png`;
  }, 60);

  // Stop animation & show final roll
  setTimeout(() => {
    clearInterval(intervalId);
    const finalIndex = Math.floor(Math.random() * 20);
    d20Img.src = d20Faces[finalIndex].src;
    savingThrowResult.style.fontSize = "3rem";
    getSavingThrowModifier(savingThrowTitle.textContent, finalIndex, modifiers);
  }, 1000);
  savingThrow.classList.remove("hidden");

  //Reroll Saving Throw
  rerollSavingThrowBtn.addEventListener("click", () => {
    rerollSavingThrowBtn.disabled = true;
    savingThrowResult.textContent = "";

    // Start animation
    const intervalId = setInterval(() => {
      const randomFace = getRandomFace();
      d20Img.src = `assets/img/d20/d20-${randomFace}.png`;
    }, 60);

    // Stop animation & show final roll
    setTimeout(() => {
      clearInterval(intervalId);
      const finalIndex = Math.floor(Math.random() * 20);
      d20Img.src = d20Faces[finalIndex].src;
      savingThrowResult.style.fontSize = "3rem";
      getSavingThrowModifier(
        savingThrowTitle.textContent,
        finalIndex,
        modifiers,
      );
    }, 1000);
    savingThrow.classList.remove("hidden");
  });
});

//Reroll Statistics
rerollStatistics.addEventListener("click", () => {
  document.querySelectorAll(".stat-control").forEach((control) => {
    const input = control.querySelector("input");
    const mod = control.querySelector(".modifier");

    input.value = rollStat();
    mod.style.textAlign = "center";
    mod.style.fontSize = "2rem";
    mod.textContent = Math.floor((input.value - 10) / 2);
  });
});

//Level Manual Input
level.addEventListener("input", () => {
  let value = level.value;

  // Remove everything except digits
  value = value.replace(/[^0-9]/g, "");

  if (value === "") {
    level.value = 1;
    return;
  }

  let number = Number(value);

  if (number < 1) number = 1;
  if (number > 40) number = 40;

  level.value = number;
  totalHitDiceQuantity.textContent = +level.value;
  if (!isShortResting) {
    currentHitDiceQuantity.textContent = +totalHitDiceQuantity.textContent;
  }
  proficiency.textContent = getProficiencyBonus(+level.value);
});

//Level Increment and Decrement
plusLevelBtn.addEventListener("click", () => {
  const max = Number(level.max);
  let value = Number(level.value);
  if (value < max) {
    level.value = value + 1;
    totalHitDiceQuantity.textContent = +level.value;
    if (!isShortResting) {
      currentHitDiceQuantity.textContent = +totalHitDiceQuantity.textContent;
    }
    proficiency.textContent = getProficiencyBonus(+level.value);
  }
});

minusLevelBtn.addEventListener("click", () => {
  const min = Number(level.min);
  let value = Number(level.value);
  if (value > min) {
    level.value = value - 1;
    totalHitDiceQuantity.textContent = +level.value;
    if (!isShortResting) {
      currentHitDiceQuantity.textContent = +totalHitDiceQuantity.textContent;
    }
    proficiency.textContent = getProficiencyBonus(+level.value);
  }
});

//Skill Checks
document.querySelectorAll(".skill-check").forEach((label) => {
  label.addEventListener("click", () => {
    rerollSavingThrowBtn.disabled = true;
    savingThrowResult.textContent = "";
    savingThrowTitle.textContent = `${label.textContent} Check`;

    // Start animation
    const intervalId = setInterval(() => {
      const randomFace = getRandomFace();
      d20Img.src = `assets/img/d20/d20-${randomFace}.png`;
    }, 60);

    // Stop animation & show final roll
    setTimeout(() => {
      clearInterval(intervalId);
      const finalIndex = Math.floor(Math.random() * 20);
      d20Img.src = d20Faces[finalIndex].src;
      savingThrowResult.style.fontSize = "3rem";
      getSkillCheckModifier(label.textContent, finalIndex, modifiers);
    }, 1000);
    savingThrow.classList.remove("hidden");

    //Reroll Saving Throw
    rerollSavingThrowBtn.addEventListener("click", () => {
      rerollSavingThrowBtn.disabled = true;
      savingThrowResult.textContent = "";

      // Start animation
      const intervalId = setInterval(() => {
        const randomFace = getRandomFace();
        d20Img.src = `assets/img/d20/d20-${randomFace}.png`;
      }, 60);

      // Stop animation & show final roll
      setTimeout(() => {
        clearInterval(intervalId);
        const finalIndex = Math.floor(Math.random() * 20);
        d20Img.src = d20Faces[finalIndex].src;
        savingThrowResult.style.fontSize = "3rem";
        getSkillCheckModifier(label.textContent, finalIndex, modifiers);
      }, 1000);
      savingThrow.classList.remove("hidden");
    });
  });
});

//Matching Skill Check Modifier
function getSkillCheckModifier(skillName, finalIndex, modArray) {
  //NOTE: Adding the for attribute to the label triggers checkbox checking automatically when clicked
  let modifierName = "";
  let modifierValue = 0;
  modArray.forEach((mod) => {
    modifierName = mod.dataset.ability;
    modifierValue = mod.textContent;
    if (skillName === "Atheltics") {
      if (modifierName === "might") {
        if (athletics.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Acrobatics") {
      if (modifierName === "finesse") {
        if (acrobatics.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Sleight of Hand") {
      if (modifierName === "finesse") {
        if (sleightHand.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Stealth") {
      if (modifierName === "finesse") {
        if (stealth.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Arcanum") {
      if (modifierName === "erudition") {
        if (arcanum.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Investigation") {
      if (modifierName === "erudition") {
        if (investigation.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "History") {
      if (modifierName === "erudition") {
        if (historySkill.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Nature") {
      if (modifierName === "erudition") {
        if (acrobatics.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Religion") {
      if (modifierName === "erudition") {
        if (religion.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Animal Handling") {
      if (modifierName === "pragmatism") {
        if (animalHandling.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Insight") {
      if (modifierName === "pragmatism") {
        if (insight.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Medicine") {
      if (modifierName === "pragmatism") {
        if (medicine.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Perception") {
      if (modifierName === "pragmatism") {
        if (perception.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Survival") {
      if (modifierName === "pragmatism") {
        if (survival.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Deception") {
      if (modifierName === "conveyance") {
        if (deception.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Intimidation") {
      if (modifierName === "conveyance") {
        if (intimidation.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Performance") {
      if (modifierName === "conveyance") {
        if (performanceSkill.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    } else if (skillName === "Persuasion") {
      if (modifierName === "conveyance") {
        if (persuasion.checked) {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} + ${+proficiency.textContent} = ${
              finalIndex + 1 + +modifierValue + +proficiency.textContent
            }`;
          }
        } else {
          if (modifierValue < 0) {
            savingThrowResult.textContent = `${finalIndex + 1} - ${
              +modifierValue * -1
            } = ${finalIndex + 1 + +modifierValue}`;
          } else {
            savingThrowResult.textContent = `${
              finalIndex + 1
            } + ${+modifierValue} = ${finalIndex + 1 + +modifierValue}`;
          }
        }
      }
    }
  });
  rerollSavingThrowBtn.disabled = false;
}

//Hit Points
//Allow user input
health.addEventListener("input", () => {
  let value = health.value;

  // Remove everything except digits
  value = value.replace(/[^0-9]/g, "");

  if (value === "") {
    health.value = "";
    return;
  }

  let number = Number(value);

  if (number < 1) number = 1;
  if (number > 1000) number = 1000;

  health.value = number;
});

//Increment Hit Points
healthPlusBtn.addEventListener("click", () => {
  let value = Number(health.value);
  health.value = value + 1;
});

//Decrement Hit Points
healthMinusBtn.addEventListener("click", () => {
  let value = Number(health.value);
  health.value = value - 1;
  if (+currentHP.textContent > +health.value) {
    currentHP.textContent = +health.value;
  }
});

//Damage-Heal Input
//Allow user input
damageHeal.addEventListener("input", () => {
  let value = damageHeal.value;

  // Remove everything except digits
  value = value.replace(/[^0-9]/g, "");

  if (value === "") {
    damageHeal.value = "";
    return;
  }

  let number = Number(value);

  if (number < 1) number = 1;
  if (number > 1000) number = 1000;

  damageHeal.value = number;
});

//Heal Damage
healBtn.addEventListener("click", () => {
  let value = Number(damageHeal.value);
  currentHP.textContent = +currentHP.textContent + +value;
  if (+currentHP.textContent > +health.value) {
    currentHP.textContent = +health.value;
  }
  damageHeal.value = 0;
});

//Deal Damage
damageBtn.addEventListener("click", () => {
  let min = Number(damageHeal.min);
  let value = Number(damageHeal.value);
  if (value > min) {
    currentHP.textContent -= value;
    // if (+currentHP.textContent <= 0) {
    //   currentHP.textContent = 0;
    // }
  }
  damageHeal.value = 0;
});

//Armour Class
//Allow user input
armourClass.addEventListener("input", () => {
  let value = armourClass.value;

  // Remove everything except digits
  value = value.replace(/[^0-9]/g, "");

  if (value === "") {
    armourClass.value = "";
    return;
  }

  let number = Number(value);

  if (number < 1) number = 1;
  if (number > 40) number = 40;

  armourClass.value = number;
});

//Increment
addACBtn.addEventListener("click", () => {
  const max = Number(armourClass.max);
  let value = Number(armourClass.value);
  if (value < max) {
    armourClass.value = value + 1;
  }
});

//Decrement
subtractACBtn.addEventListener("click", () => {
  const min = Number(armourClass.min);
  let value = Number(armourClass.value);
  if (value > min) {
    armourClass.value = value - 1;
  }
});

//Currency
//Increment and decrement currency
document.querySelectorAll(".money").forEach((control) => {
  const input = control.querySelector("input");
  const label = control.querySelector("label");
  const plus = control.querySelector(".plus-money");
  const minus = control.querySelector(".minus-money");

  const min = Number(input.min);

  // Initialize empty inputs
  if (!input.value) {
    input.value = 0;
  }

  //Allow user input
  input.addEventListener("input", () => {
    let value = input.value;

    // Remove everything except digits
    value = value.replace(/[^0-9]/g, "");

    if (value === "") {
      input.value = "";
      return;
    }

    let number = Number(value);

    if (number < 1) number = 1;

    input.value = number;
  });

  //Increment
  plus.addEventListener("click", () => {
    let value = Number(input.value);
    input.value = value + 1;
  });

  //Decrement
  minus.addEventListener("click", () => {
    let value = Number(input.value);
    if (value > min) {
      input.value = value - 1;
    }
  });

  //Calculate and display total amount of coins
  label.addEventListener("click", () => {
    const currency = label.dataset.currency;
    const total = {
      cp: +copper.value,
      sp: +silver.value,
      ep: +electrum.value,
      gp: +gold.value,
      pp: +platinum.value,
    };
    console.log(convertPouch(total, currency));
    description.style.textAlign = "center";
    description.textContent = `${convertPouch(
      total,
      currency,
    )} ${currency.toUpperCase()}`;
    title.textContent = `Total ${label.textContent}`;
    modal.classList.remove("hidden");
  });
});

//Currency Converter

//One-One
function convert(amount, from, to) {
  return (amount * currencyInCopper[from]) / currencyInCopper[to];
}

//All-One
function convertPouch(total, to) {
  let totalCopper = 0;

  for (const currency in total) {
    totalCopper += total[currency] * currencyInCopper[currency];
  }

  return totalCopper / currencyInCopper[to];
}

//Save and Load

//Save
//Create character to be saved
const character = {
  name: characterName.value,
  race: raceSelect.value,
  class: classSelect.value,
  background: backgroundSelect,
  level: level.value,

  abilities: {
    str: 8,
    dex: 14,
    con: 12,
    int: 16,
    wis: 13,
    cha: 10,
  },

  maxHP: health.value,
  currentHP: currentHP.value,
  speed: speed.textContent,

  proficiencies: {
    skills: ["arcana", "history"],
    saves: ["int", "wis"],
    weapons: [],
  },

  equipment: ["spellbook", "dagger"],
};

//Convert character to JSON
function serializeCharacter(character) {
  return JSON.stringify(character, null, 2); //null, 2 → pretty printed JSON (human-readable)
}

//Save to a .json file (browser download)
function saveCharacterToFile(character) {
  const json = serializeCharacter(character);

  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${character.name || "character"}.json`;
  a.click();

  URL.revokeObjectURL(url);
}

//Save Character
saveBtn.addEventListener("click", () => {
  saveCharacterToFile(character);
});

//Load
function loadCharacterFromFile(file, callback) {
  const reader = new FileReader();

  reader.onload = (event) => {
    try {
      const loadedCharacter = JSON.parse(event.target.result);
      callback(loadedCharacter);
    } catch (err) {
      alert("Invalid character file");
    }
  };

  reader.readAsText(file);
}

//Open load file option by clicking button
loadBtn.addEventListener("click", () => {
  loadInput.click(); //opens file picker
});

loadInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  loadCharacterFromFile(file, (loadedCharacter) => {
    rebuildCharacter(loadedCharacter);
  });
});

function rebuildCharacter(loadedCharacter) {
  Object.assign(character, loadedCharacter);

  updateCharacterSheetUI();
}

function updateCharacterSheetUI() {
  nameInput.value = character.name;
  raceSelect.value = character.race;
  classSelect.value = character.class;

  for (const ability in character.abilities) {
    document.querySelector(`#${ability}`).value = character.abilities[ability];
  }

  hpDisplay.textContent = `${character.currentHP} / ${character.maxHP}`;
}

//Save and Load using localStorage

//Save
// function autoSave(character) {
//   localStorage.setItem("character", JSON.stringify(character));
// }

//Load
// function autoLoad() {
//   const saved = localStorage.getItem("character");
//   if (saved) {
//     rebuildCharacter(JSON.parse(saved));
//   }
// }

//Validate loaded json
// function isValidCharacter(obj) {
//   return (
//     obj &&
//     typeof obj.name === "string" &&
//     obj.abilities &&
//     typeof obj.abilities.str === "number"
//   );
// }

//Equipment

//Armour Choice
// addArmour.addEventListener("click", (e) => {
//   if (e.target.id === "armour-add") {
//     populateSelect(equipmentSelect, armors);
//   }
//   equipmentTitle.textContent = "Armours Dialog";
//   equipment.classList.remove("hidden");
//   currentEquipmentType = e.target.id;
// });

armourAdd.addEventListener("click", (e) => {
  if (e.target.id === "add-armour") {
    populateSelect(equipmentSelect, armors);
  }
  equipmentTitle.textContent = "Armours Dialog";
  equipment.classList.remove("hidden");
  currentEquipmentType = e.target.id;
});

//Calculate Armour Class (AC) With Armour
function calculateArmorClassWithArmor(armor, dexMod, hasShield = false) {
  let dex = 0;

  if (armor.dexBonus === "full") {
    dex = dexMod;
  } else if (armor.dexBonus === "limited") {
    dex = Math.min(dexMod, armor.maxDex);
  } else if (armor.dexBonus === "none") {
    dex = 0; // heavy armor ignores Dex completely
  }

  let ac = 0;
  if (!armor) {
    ac = 10 + +initiative.textContent;
  } else {
    ac = armor.baseAC + dex;
  }

  if (hasShield) {
    ac += 2;
  }

  return ac;
}

// //Calculate Unarmoured AC
// function calculateUnarmoredAC(character) {
//   const dexMod = abilityModifier(character.abilities.dexterity);

//   if (character.class === "barbarian") {
//     const conMod = abilityModifier(character.abilities.constitution);
//     return 10 + dexMod + conMod;
//   }

//   if (character.class === "monk") {
//     const wisMod = abilityModifier(character.abilities.wisdom);
//     return 10 + dexMod + wisMod;
//   }

//   // Default unarmored
//   return 10 + dexMod;
// }

//Calculate Unarmoured AC
function calculateUnarmoredAC(className) {
  if (className === "barbarian") {
    return 10 + +initiative.textContent + +conMod.textContent;
  }

  if (className === "monk") {
    return 10 + +initiative.textContent + +wisMod.textContent;
  }

  // Default unarmored
  return 10 + +initiative.textContent;
}

//Check armour proficiency
function isProficientWithArmor(className, armor) {
  if (!armor) return true; // unarmored
  const profs = armorProficiencies[className] || [];
  return profs.includes(armor.category);
}

//Final AC Calculator
function calculateArmorClass(armourName, className, hasShield) {
  const armor = armors.find((a) => a.value === armourName);

  let ac = 0;
  let hasPenalty = false;

  // ───── UNARMORED w/ SHIELD ─────
  if (!armor && hasShield) {
    ac = calculateUnarmoredAC(className);
    ac += 2;
  }
  // ───── UNARMORED ─────
  else if (!armor) {
    ac = calculateUnarmoredAC(className);
  }
  // ───── ARMORED ─────
  else {
    ac = calculateArmorClassWithArmor(
      armor,
      +initiative.textContent,
      hasShield,
    );

    if (!isProficientWithArmor(className, armor)) {
      hasPenalty = true;
    }
  }

  return {
    ac,
    hasPenalty,
  };
}

//Weapon Choice
// addWeapon.addEventListener("click", (e) => {
//   if (e.target.id === "weapon-add") {
//     populateSelect(equipmentSelect, weapons);
//   }
//   equipmentTitle.textContent = "Weapons Dialog";
//   equipment.classList.remove("hidden");
//   currentEquipmentType = e.target.id;
// });

weaponAdd.addEventListener("click", (e) => {
  if (e.target.id === "add-weapons") {
    populateSelect(equipmentSelect, weapons);
  }
  equipmentTitle.textContent = "Weapons Dialog";
  equipment.classList.remove("hidden");
  currentEquipmentType = e.target.id;
});

//Selecting equipment => weapon, item, armour
// equipmentSelect.addEventListener("change", () => {
//   const value = equipmentSelect.value;
//   let weaponQuantity = 1;
//   if (!value) return;

//   //if (currentEquipmentType == "weapon-add")
//   if (currentEquipmentType == "add-weapons") {
//     // Check if weapon already exists in the container
//     // const alreadyAdded = Array.from(weaponContainer.children).some(
//     //   (child) => child.dataset.weapon === value
//     // );
//     const alreadyAdded = Array.from(weaponDisplay.children).some(
//       (child) => child.dataset.weapon === value
//     );

//     if (!alreadyAdded) {
//       // Find the selected weapon from the array
//       const chosenWeapon = weapons.find((w) => w.value === value);
//       if (!chosenWeapon) return;

//       const weaponWeight = Number(chosenWeapon.weight);

//       if (!canCarry(weaponWeight)) {
//         title.textContent = "ENCUMBERED";
//         description.textContent = "You cannot carry this weapon.";
//         isEncumbered = true;
//         modal.classList.remove("hidden");
//         return;
//       }

//       totalWeight += weaponWeight;

//       // Update the title and description
//       title.textContent = `${chosenWeapon.name} (${chosenWeapon.weight} lbs)`;
//       description.textContent = chosenWeapon.description;

//       // Create the new div
//       const weaponDiv = document.createElement("div");
//       weaponDiv.style.display = "flex";
//       weaponDiv.style.gap = "10px";
//       weaponDiv.style.alignItems = "center";

//       const quantityWeaponDiv = document.createElement("div");
//       quantityWeaponDiv.style.display = "flex";
//       quantityWeaponDiv.style.alignItems = "center";

//       const incrementWeaponQty = document.createElement("button");
//       incrementWeaponQty.textContent = "+";
//       incrementWeaponQty.style.height = "30px";
//       incrementWeaponQty.style.display = "flex";
//       incrementWeaponQty.style.justifyContent = "center";
//       incrementWeaponQty.style.alignItems = "center";
//       incrementWeaponQty.style.fontSize = "2rem";
//       incrementWeaponQty.style.borderRadius = "50%";
//       incrementWeaponQty.style.cursor = "pointer";
//       incrementWeaponQty.style.backgroundColor = "greenyellow";
//       quantityWeaponDiv.appendChild(incrementWeaponQty);

//       const weaponQty = document.createElement("input");
//       weaponQty.style.width = "50px";
//       weaponQty.style.textAlign = "center";
//       weaponQty.value = weaponQuantity;
//       quantityWeaponDiv.appendChild(weaponQty);

//       incrementWeaponQty.addEventListener(
//         "click",
//         () => {
//           const currentQty = Number(weaponQty.value);
//           const nextQty = currentQty + 1;
//           const addedWeight = Number(chosenWeapon.weight);

//           const maxCarry = Number(strength.value) * 15;
//           const projectedWeight = totalWeight + addedWeight;

//           if (projectedWeight > maxCarry) {
//             title.textContent = "ENCUMBERED";
//             description.textContent = "You cannot carry any more weight.";
//             isEncumbered = true;
//             modal.classList.remove("hidden");
//             return;
//           }

//           weaponQty.value = nextQty;
//           totalWeight = projectedWeight;
//         }
//       );

//       const decrementWeaponQty = document.createElement("button");
//       decrementWeaponQty.textContent = "-";
//       decrementWeaponQty.style.height = "30px";
//       decrementWeaponQty.style.display = "flex";
//       decrementWeaponQty.style.justifyContent = "center";
//       decrementWeaponQty.style.alignItems = "center";
//       decrementWeaponQty.style.fontSize = "2rem";
//       decrementWeaponQty.style.borderRadius = "50%";
//       decrementWeaponQty.style.cursor = "pointer";
//       decrementWeaponQty.style.backgroundColor = "red";
//       quantityWeaponDiv.appendChild(decrementWeaponQty);

//       decrementWeaponQty.addEventListener(
//         "click",
//         () => {
//           const currentQty = Number(weaponQty.value);
//           if (currentQty <= 1) return;

//           weaponQty.value = currentQty - 1;
//           totalWeight -= Number(chosenWeapon.weight);
//         }
//       );

//       weaponDiv.appendChild(quantityWeaponDiv);

//       const addedWeapon = document.createElement("div");
//       //addedWeapon.dataset.weapon = chosenWeapon.value; // store value for duplicate check
//       weaponDiv.dataset.weapon = chosenWeapon.value;
//       addedWeapon.innerHTML = `<b>${chosenWeapon.name}</b>`;
//       addedWeapon.style.backgroundColor = "aliceblue";
//       addedWeapon.style.border = "2px solid black";
//       addedWeapon.style.borderRadius = "10%";
//       addedWeapon.style.cursor = "pointer";

//       weaponDiv.appendChild(addedWeapon);

//       // Add right-click removal
//       addedWeapon.addEventListener("contextmenu", (e) => {
//         e.preventDefault();
//         //weaponContainer.removeChild(addedWeapon);
//         weaponDisplay.removeChild(weaponDiv);
//       });

//       // Append to container
//       //weaponContainer.appendChild(addedWeapon);
//       weaponDisplay.appendChild(weaponDiv);
//     } else {
//       title.textContent = "WARNING";
//       description.textContent = "Weapon already added!";
//     }
//   } //else if (currentEquipmentType == "armour-add")
//   else if (currentEquipmentType == "add-armour") {
//     // Check if weapon already exists in the container
//     // const alreadyAdded = Array.from(armourContainer.children).some(
//     //   (child) => child.dataset.armour === value
//     // );
//     const alreadyAdded = Array.from(armourDisplay.children).some(
//       (child) => child.dataset.armour === value
//     );

//     if (!alreadyAdded) {
//       // Find the selected weapon from the array
//       const chosenArmour = armors.find((w) => w.value === value);
//       if (!chosenArmour) return;

//       // Update the title and description
//       title.textContent = `${chosenArmour.name} (${chosenArmour.weight} lbs)`;
//       description.textContent = chosenArmour.description;
//       const armourWeight = Number(chosenArmour.weight);

//       if (!canCarry(armourWeight)) {
//         title.textContent = "ENCUMBERED";
//         description.textContent = "You cannot carry this armour.";
//         modal.classList.remove("hidden");
//         return;
//       }

//       applyWeight(armourWeight);

//       // Create the new div
//       const addedArmour = document.createElement("div");
//       addedArmour.dataset.armour = chosenArmour.value; // store value for duplicate check
//       addedArmour.innerHTML = `<b>${chosenArmour.name}</b>`;
//       addedArmour.style.backgroundColor = "aliceblue";
//       addedArmour.style.border = "2px solid black";
//       addedArmour.style.borderRadius = "10%";
//       addedArmour.style.cursor = "pointer";

//       // Add right-click removal
//       addedArmour.addEventListener("contextmenu", (e) => {
//         e.preventDefault();
//         //armourContainer.removeChild(addedArmour);
//         armourDisplay.removeChild(addedArmour);
//       });

//       // Append to container
//       //armourContainer.appendChild(addedArmour);
//       armourDisplay.appendChild(addedArmour);
//     } else {
//       title.textContent = "WARNING";
//       description.textContent = "Armour already added!";
//     }
//   } //else if (currentEquipmentType == "item-add")
//   else if (currentEquipmentType == "add-items") {
//     // Check if weapon already exists in the container
//     // const alreadyAdded = Array.from(itemContainer.children).some(
//     //   (child) => child.dataset.item === value
//     // );
//     const alreadyAdded = Array.from(itemDisplay.children).some(
//       (child) => child.dataset.item === value
//     );

//     if (!alreadyAdded) {
//       // Find the selected weapon from the array
//       const chosenItem = items.find((w) => w.value === value);
//       if (!chosenItem) return;

//       // Update the title and description
//       title.textContent = `${chosenItem.name} (${chosenItem.weight} lbs)`;
//       description.textContent = chosenItem.description;
//       const itemWeight = Number(chosenItem.weight);

//       if (!canCarry(itemWeight)) {
//         title.textContent = "ENCUMBERED";
//         description.textContent = "You cannot carry this item.";
//         modal.classList.remove("hidden");
//         return;
//       }

//       applyWeight(itemWeight);

//       // Create the new div
//       const addedItem = document.createElement("div");
//       addedItem.dataset.item = chosenItem.value; // store value for duplicate check
//       addedItem.innerHTML = `<b>${chosenItem.name}</b>`;
//       addedItem.style.backgroundColor = "aliceblue";
//       addedItem.style.border = "2px solid black";
//       addedItem.style.borderRadius = "10%";
//       addedItem.style.cursor = "pointer";

//       // Add right-click removal
//       addedItem.addEventListener("contextmenu", (e) => {
//         e.preventDefault();
//         //itemContainer.removeChild(addedItem);
//         itemDisplay.removeChild(addedItem);
//       });

//       // Append to container
//       //itemContainer.appendChild(addedItem);
//       itemDisplay.appendChild(addedItem);
//     } else {
//       title.textContent = "WARNING";
//       description.textContent = "Item already added!";
//     }
//   }

//   equipment.classList.add("hidden");
//   modal.classList.remove("hidden");
// });

// Selecting equipment => weapon, item, armour
// equipmentSelect.addEventListener("change", () => {
//   const value = equipmentSelect.value;
//   if (!value) return;

//   /* ===================== WEAPONS ===================== */
//   if (currentEquipmentType === "add-weapons") {
//     const alreadyAdded = Array.from(weaponDisplay.children).some(
//       (child) => child.dataset.weapon === value,
//     );

//     if (alreadyAdded) {
//       title.textContent = "WARNING";
//       description.textContent = "Weapon already added!";
//       modal.classList.remove("hidden");
//       equipment.classList.add("hidden");
//       return;
//     }

//     const chosenWeapon = weapons.find((w) => w.value === value);
//     if (!chosenWeapon) return;

//     const weaponWeight = Number(chosenWeapon.weight);

//     // Encumbrance check BEFORE adding
//     if (!canCarry(weaponWeight)) {
//       title.textContent = "ENCUMBERED";
//       description.textContent = "You cannot carry this weapon.";
//       modal.classList.remove("hidden");
//       return;
//     }

//     applyWeight(weaponWeight);

//     title.textContent = `${chosenWeapon.name} (${weaponWeight} lbs)`;
//     description.textContent = chosenWeapon.description;

//     const weaponDiv = document.createElement("div");
//     weaponDiv.dataset.weapon = chosenWeapon.value;
//     weaponDiv.style.display = "flex";
//     weaponDiv.style.gap = "10px";
//     weaponDiv.style.alignItems = "center";

//     /* Quantity Controls */
//     const quantityWeaponDiv = document.createElement("div");
//     quantityWeaponDiv.style.display = "flex";
//     quantityWeaponDiv.style.alignItems = "center";

//     let lastValidQty = 1;

//     const weaponQty = document.createElement("input");
//     weaponQty.type = "number";
//     weaponQty.min = 1;
//     weaponQty.step = 1;
//     weaponQty.value = 1;
//     weaponQty.style.width = "40px";
//     weaponQty.style.height = "30px";
//     weaponQty.style.textAlign = "center";

//     weaponQty.addEventListener("change", () => {
//       let newQty = Number(weaponQty.value);

//       // Invalid input protection
//       if (!Number.isInteger(newQty) || newQty < 1) {
//         weaponQty.value = lastValidQty;
//         return;
//       }

//       const deltaQty = newQty - lastValidQty;
//       const deltaWeight = deltaQty * Number(chosenWeapon.weight);

//       // If increasing quantity, check encumbrance
//       if (deltaWeight > 0 && !canCarry(deltaWeight)) {
//         title.textContent = "ENCUMBERED";
//         description.textContent = "You cannot carry that many.";
//         modal.classList.remove("hidden");
//         weaponQty.value = lastValidQty;
//         return;
//       }

//       // Apply change
//       if (deltaWeight > 0) {
//         applyWeight(deltaWeight);
//       } else if (deltaWeight < 0) {
//         refundWeight(Math.abs(deltaWeight));
//       }

//       lastValidQty = newQty;
//     });

//     const incrementWeaponQty = document.createElement("button");
//     incrementWeaponQty.textContent = "+";
//     incrementWeaponQty.style.cursor = "pointer";
//     incrementWeaponQty.style.borderRadius = "50%";
//     incrementWeaponQty.style.backgroundColor = "greenyellow";

//     const decrementWeaponQty = document.createElement("button");
//     decrementWeaponQty.textContent = "-";
//     decrementWeaponQty.style.cursor = "pointer";
//     decrementWeaponQty.style.borderRadius = "50%";
//     decrementWeaponQty.style.backgroundColor = "red";

//     incrementWeaponQty.addEventListener("click", () => {
//       const projectedWeight = Number(chosenWeapon.weight);

//       if (!canCarry(projectedWeight)) {
//         title.textContent = "ENCUMBERED";
//         description.textContent = "You cannot carry any more weight.";
//         modal.classList.remove("hidden");
//         return;
//       }

//       lastValidQty++;
//       weaponQty.value = lastValidQty;
//       applyWeight(projectedWeight);
//     });

//     decrementWeaponQty.addEventListener("click", () => {
//       if (lastValidQty <= 1) return;
//       lastValidQty--;
//       weaponQty.value = lastValidQty;
//       refundWeight(chosenWeapon.weight);
//     });

//     quantityWeaponDiv.append(incrementWeaponQty, weaponQty, decrementWeaponQty);

//     const addedWeapon = document.createElement("div");
//     addedWeapon.innerHTML = `<b>${chosenWeapon.name}</b>`;
//     addedWeapon.style.cursor = "pointer";
//     addedWeapon.style.fontWeight = "normal";
//     addedWeapon.style.fontSize = "x-large";

//     addedWeapon.addEventListener("contextmenu", (e) => {
//       e.preventDefault();
//       const qty = Number(weaponQty.value);
//       refundWeight(qty * weaponWeight);
//       weaponDisplay.removeChild(weaponDiv);
//     });

//     weaponDiv.append(quantityWeaponDiv, addedWeapon);
//     weaponDisplay.appendChild(weaponDiv);

//     /* ===================== ARMOUR ===================== */
//   } else if (currentEquipmentType === "add-armour") {
//     const alreadyAdded = Array.from(armourDisplay.children).some(
//       (child) => child.dataset.armour === value,
//     );

//     if (alreadyAdded) {
//       title.textContent = "WARNING";
//       description.textContent = "Armour already added!";
//       modal.classList.remove("hidden");
//       return;
//     }

//     const chosenArmour = armors.find((a) => a.value === value);
//     if (!chosenArmour) return;

//     const armourWeight = Number(chosenArmour.weight);

//     if (!canCarry(armourWeight)) {
//       title.textContent = "ENCUMBERED";
//       description.textContent = "You cannot carry this armour.";
//       modal.classList.remove("hidden");
//       return;
//     }

//     applyWeight(armourWeight);

//     title.textContent = `${chosenArmour.name} (${armourWeight} lbs)`;
//     description.textContent = chosenArmour.description;

//     const addedArmour = document.createElement("div");
//     addedArmour.dataset.armour = chosenArmour.value;
//     addedArmour.innerHTML = `<b>${chosenArmour.name}</b>`;
//     addedArmour.style.cursor = "pointer";

//     addedArmour.addEventListener("contextmenu", (e) => {
//       e.preventDefault();
//       refundWeight(armourWeight);
//       armourDisplay.removeChild(addedArmour);
//     });

//     armourDisplay.appendChild(addedArmour);

//     /* ===================== ITEMS ===================== */
//   } else if (currentEquipmentType === "add-items") {
//     const alreadyAdded = Array.from(itemDisplay.children).some(
//       (child) => child.dataset.item === value,
//     );

//     if (alreadyAdded) {
//       title.textContent = "WARNING";
//       description.textContent = "Item already added!";
//       modal.classList.remove("hidden");
//       return;
//     }

//     const chosenItem = items.find((i) => i.value === value);
//     if (!chosenItem) return;

//     const itemWeight = Number(chosenItem.weight);

//     if (!canCarry(itemWeight)) {
//       title.textContent = "ENCUMBERED";
//       description.textContent = "You cannot carry this item.";
//       modal.classList.remove("hidden");
//       return;
//     }

//     applyWeight(itemWeight);

//     title.textContent = `${chosenItem.name} (${itemWeight} lbs)`;
//     description.textContent = chosenItem.description;

//     const addedItem = document.createElement("div");
//     addedItem.dataset.item = chosenItem.value;
//     addedItem.innerHTML = `<b>${chosenItem.name}</b>`;
//     addedItem.style.cursor = "pointer";

//     addedItem.addEventListener("contextmenu", (e) => {
//       e.preventDefault();
//       refundWeight(itemWeight);
//       itemDisplay.removeChild(addedItem);
//     });

//     itemDisplay.appendChild(addedItem);
//   }

//   equipment.classList.add("hidden");
//   modal.classList.remove("hidden");
// });

// Selecting equipment => weapon, item, armour
equipmentSelect.addEventListener("change", () => {
  const value = equipmentSelect.value;
  if (!value) return;

  /* ===================== WEAPONS ===================== */
  if (currentEquipmentType === "add-weapons") {
    const alreadyAdded = Array.from(weaponDisplay.children).some(
      (child) => child.dataset.weapon === value,
    );

    if (alreadyAdded) {
      title.textContent = "WARNING";
      description.textContent = "Weapon already added!";
      modal.classList.remove("hidden");
      equipment.classList.add("hidden");
      return;
    }

    const chosenWeapon = weapons.find((w) => w.value === value);
    if (!chosenWeapon) return;

    const weaponWeight = Number(chosenWeapon.weight);

    // Encumbrance check BEFORE adding
    if (!canCarry(weaponWeight)) {
      title.textContent = "ENCUMBERED";
      description.textContent = "You cannot carry this weapon.";
      modal.classList.remove("hidden");
      equipment.classList.add("hidden");
      return;
    }

    applyWeight(weaponWeight);

    let formattedArray = chosenWeapon.properties;
    for (let i = 0; i < formattedArray.length; i++) {
      formattedArray[i] =
        formattedArray[i].substring(0, 1).toUpperCase() +
        formattedArray[i].substring(1).toLowerCase();
    }
    title.textContent = `${chosenWeapon.name} (${weaponWeight} lbs)`;
    description.innerHTML = `${chosenWeapon.description}<br>
    Category: ${chosenWeapon.category.substring(0, 1).toUpperCase() + chosenWeapon.category.substring(1).toLowerCase()}<br>
    Type: ${chosenWeapon.type.substring(0, 1).toUpperCase() + chosenWeapon.type.substring(1).toLowerCase()}<br>
    Properties: ${formattedArray}
    `;

    const weaponDiv = document.createElement("div");
    weaponDiv.dataset.weapon = chosenWeapon.value;
    weaponDiv.style.display = "flex";
    weaponDiv.style.gap = "10px";
    weaponDiv.style.alignItems = "center";

    /* Quantity Controls */
    const quantityWeaponDiv = document.createElement("div");
    quantityWeaponDiv.style.display = "flex";
    quantityWeaponDiv.style.alignItems = "center";

    let lastValidQty = 1;

    const weaponQty = document.createElement("input");
    weaponQty.type = "number";
    weaponQty.min = 1;
    weaponQty.step = 1;
    weaponQty.value = 1;
    weaponQty.style.width = "40px";
    weaponQty.style.height = "30px";
    weaponQty.style.textAlign = "center";

    weaponQty.addEventListener("change", () => {
      let newQty = Number(weaponQty.value);

      // Invalid input protection
      if (!Number.isInteger(newQty)) {
        weaponQty.value = lastValidQty;
        return;
      }

      const deltaQty = newQty - lastValidQty;
      const deltaWeight = deltaQty * Number(chosenWeapon.weight);

      // If increasing quantity, check encumbrance
      if (deltaWeight > 0 && !canCarry(deltaWeight)) {
        title.textContent = "ENCUMBERED";
        description.textContent = "You cannot carry that many.";
        modal.classList.remove("hidden");
        weaponQty.value = lastValidQty;
        return;
      }

      // Apply change
      if (deltaWeight > 0) {
        applyWeight(deltaWeight);
      } else if (deltaWeight < 0) {
        refundWeight(Math.abs(deltaWeight));
      }

      lastValidQty = newQty;

      if (newQty < 1) {
        const qty = Number(weaponQty.value);
        refundWeight(qty * weaponWeight);
        weaponDisplay.removeChild(weaponDiv);
        return;
      }
    });

    const incrementWeaponQty = document.createElement("button");
    incrementWeaponQty.textContent = "+";
    incrementWeaponQty.style.cursor = "pointer";
    incrementWeaponQty.style.borderRadius = "50%";
    incrementWeaponQty.style.backgroundColor = "greenyellow";

    const decrementWeaponQty = document.createElement("button");
    decrementWeaponQty.textContent = "-";
    decrementWeaponQty.style.cursor = "pointer";
    decrementWeaponQty.style.borderRadius = "50%";
    decrementWeaponQty.style.backgroundColor = "red";

    incrementWeaponQty.addEventListener("click", () => {
      const projectedWeight = Number(chosenWeapon.weight);

      if (!canCarry(projectedWeight)) {
        title.textContent = "ENCUMBERED";
        description.textContent = "You cannot carry any more weight.";
        modal.classList.remove("hidden");
        return;
      }

      lastValidQty++;
      weaponQty.value = lastValidQty;
      applyWeight(projectedWeight);
    });

    decrementWeaponQty.addEventListener("click", () => {
      if (lastValidQty <= 1) {
        const qty = Number(weaponQty.value);
        refundWeight(qty * weaponWeight);
        weaponDisplay.removeChild(weaponDiv);
        return;
      }
      lastValidQty--;
      weaponQty.value = lastValidQty;
      refundWeight(chosenWeapon.weight);
    });

    quantityWeaponDiv.append(incrementWeaponQty, weaponQty, decrementWeaponQty);

    const addedWeapon = document.createElement("div");
    addedWeapon.innerHTML = `<b>${chosenWeapon.name} (${chosenWeapon.weight} lbs)</b>`;
    addedWeapon.style.cursor = "pointer";
    addedWeapon.style.fontSize = "x-large";

    addedWeapon.addEventListener("click", () => {
      const isThisEquipped = equippedWeaponDiv === weaponDiv;

      // If clicking the currently equipped one -> unequip it
      if (isThisEquipped) {
        canWeaponAttack = false;
        //addedWeapon.removeAttribute("tabIndex");
        addedWeapon.style.color = "black";
        addedWeapon.style.backgroundColor = "transparent";
        incrementWeaponQty.classList.remove("hidden");
        decrementWeaponQty.classList.remove("hidden");
        weaponQty.classList.remove("hidden");

        const weaponName = addedWeapon.textContent;
        const regex = /^(.*?)\s*\((\d+)\s*lbs\)$/;
        const match = weaponName.match(regex);

        const selectedWeapon = weapons.find(
          (weapon) => weapon.name === match[1],
        );

        equippedWeaponDiv = null;
        weaponEquipped = undefined;
        return;
      }

      // Otherwise, equip this one and unequip the previous (if any)
      if (equippedWeaponDiv) {
        canWeaponAttack = false;
        //addedWeapon.removeAttribute("tabIndex");
        // Safer: directly target children you created:
        const prevQuantityDiv = equippedWeaponDiv.firstChild;
        const prevInc = prevQuantityDiv.children[0];
        const prevInput = prevQuantityDiv.children[1];
        const prevDec = prevQuantityDiv.children[2];
        const prevLabel = equippedWeaponDiv.children[1];

        prevLabel.style.color = "black";
        prevLabel.style.backgroundColor = "transparent";
        prevInc.classList.remove("hidden");
        prevDec.classList.remove("hidden");
        prevInput.classList.remove("hidden");
      }

      // Equip this one
      canWeaponAttack = true;
      //addedWeapon.setAttribute("tabIndex", "0");
      addedWeapon.style.color = "yellow";
      addedWeapon.style.backgroundColor = "yellowgreen";
      incrementWeaponQty.classList.add("hidden");
      decrementWeaponQty.classList.add("hidden");
      weaponQty.classList.add("hidden");

      const weaponName = addedWeapon.textContent;
      const regex = /^(.*?)\s*\((\d+)\s*lbs\)$/;
      const match = weaponName.match(regex);

      const selectedWeapon = weapons.find((weapon) => weapon.name === match[1]);
      weaponEquipped = selectedWeapon.value;
      equippedWeaponDiv = weaponDiv;

      if (canWeaponAttack) {
        const match = selectedWeapon.damage.match(/^(\d+)d(\d+)$/);
        let attackMod = 0;
        let proficiency = 0;
        let damageDiceNumber = 0;
        let damageDieType = 0;
        addedWeapon.addEventListener("mousedown", (e) => {
          if (e.button === 0 && e.shiftKey) {
            attackd20Img.style.display = "block";
            rerollAttackDiceBtn.disabled = true;
            damageDiceBtn.disabled = true;
            attackAndDamageResult.textContent = "";
            if ((selectedWeapon.type = "melee")) {
              attackAndDamageTitle.textContent = `Attack Roll (STRENGTH)`;
            } else if ((selectedWeapon.type = "ranged")) {
              attackAndDamageTitle.textContent = `Attack Roll (DEXTERITY)`;
            }

            //Start animation
            const intervalId = setInterval(() => {
              const randomFace = getRandomFace();
              attackd20Img.src = `assets/img/d20/d20-${randomFace}.png`;
            }, 60);

            // Stop animation & show final roll
            setTimeout(() => {
              clearInterval(intervalId);
              const finalIndex = Math.floor(Math.random() * 20);
              attackd20Img.src = d20Faces[finalIndex].src;
              attackAndDamageResult.style.fontSize = "3rem";
              attackMod = calculateAttackBonus(
                selectedWeapon.value,
                selectedWeapon.type,
              ).abilityMod;
              proficiency = calculateAttackBonus(
                selectedWeapon.value,
                selectedWeapon.type,
              ).proficiency;
              if (attackMod < 0) {
                attackAndDamageResult.textContent = `${finalIndex + 1} - ${Math.abs(attackMod)} + ${proficiency} 
              = ${finalIndex + 1 + attackMod + proficiency}`;
              } else {
                attackAndDamageResult.textContent = `${finalIndex + 1} + ${attackMod} + ${proficiency} 
              = ${finalIndex + 1 + attackMod + proficiency}`;
              }
              rerollAttackDiceBtn.disabled = false;
              damageDiceBtn.disabled = false;
            }, 1000);
            attackAndDamagePopup.classList.remove("hidden");

            //Reroll Saving Throw
            rerollAttackDiceBtn.addEventListener("click", () => {
              rerollAttackDiceBtn.disabled = true;
              damageDiceBtn.disabled = true;
              attackAndDamageResult.textContent = "";
              if ((selectedWeapon.type = "melee")) {
                attackAndDamageTitle.textContent = `Attack Roll (STRENGTH)`;
              } else if ((selectedWeapon.type = "ranged")) {
                attackAndDamageTitle.textContent = `Attack Roll (DEXTERITY)`;
              }

              //Start animation
              const intervalId = setInterval(() => {
                const randomFace = getRandomFace();
                attackd20Img.src = `assets/img/d20/d20-${randomFace}.png`;
              }, 60);

              // Stop animation & show final roll
              setTimeout(() => {
                clearInterval(intervalId);
                const finalIndex = Math.floor(Math.random() * 20);
                attackd20Img.src = d20Faces[finalIndex].src;
                attackAndDamageResult.style.fontSize = "3rem";
                attackMod = calculateAttackBonus(
                  selectedWeapon.value,
                  selectedWeapon.type,
                ).abilityMod;
                proficiency = calculateAttackBonus(
                  selectedWeapon.value,
                  selectedWeapon.type,
                ).proficiency;
                if (attackMod < 0) {
                  attackAndDamageResult.textContent = `${finalIndex + 1} - ${Math.abs(attackMod)} + ${proficiency} 
              = ${finalIndex + 1 + attackMod + proficiency}`;
                } else {
                  attackAndDamageResult.textContent = `${finalIndex + 1} + ${attackMod} + ${proficiency} 
              = ${finalIndex + 1 + attackMod + proficiency}`;
                }
                rerollAttackDiceBtn.disabled = false;
                damageDiceBtn.disabled = false;
              }, 1000);
              attackAndDamagePopup.classList.remove("hidden");
            });

            //Apply Damage Roll
            damageDiceBtn.addEventListener("click", () => {
              damageDiceNumber = match[1];
              damageDieType = match[2];
              damageDiceBtn.disabled = true;
              rerollAttackDiceBtn.disabled = true;
              attackAndDamageResult.textContent = "";
              if ((selectedWeapon.type = "melee")) {
                attackAndDamageTitle.textContent = `Damage Roll (STRENGTH)`;
              } else if ((selectedWeapon.type = "ranged")) {
                attackAndDamageTitle.textContent = `Damage Roll (DEXTERITY)`;
              }

              roller = rollDice(damageDiceNumber, damageDieType);
              attackd20Img.style.display = "none";
              attackAndDamageResult.style.fontSize = "3rem";
              attackAndDamageResult.innerHTML = `Damage Rolls: ${roller.rolls}<br>Total Damage: ${roller.total} 
              + ${attackMod} = ${roller.total + attackMod}`;
              attackAndDamagePopup.classList.remove("hidden");
            });
          }
        });
      }
    });

    addedWeapon.addEventListener("contextmenu", (e) => e.preventDefault());

    //Shift+Right-click = Delete
    addedWeapon.addEventListener("mousedown", (e) => {
      //0 → Left, 1 → Middle, 2 → Right
      if (e.button === 2 && e.shiftKey) {
        const qty = Number(weaponQty.value);
        refundWeight(qty * weaponWeight);
        weaponDisplay.removeChild(weaponDiv);
      }
    });

    weaponDiv.append(quantityWeaponDiv, addedWeapon);
    weaponDisplay.appendChild(weaponDiv);

    /* ===================== ARMOUR ===================== */
  } else if (currentEquipmentType === "add-armour") {
    const alreadyAdded = Array.from(armourDisplay.children).some(
      (child) => child.dataset.armour === value,
    );

    if (alreadyAdded) {
      title.textContent = "WARNING";
      description.textContent = "Armour already added!";
      modal.classList.remove("hidden");
      equipment.classList.add("hidden");
      return;
    }

    const chosenArmour = armors.find((a) => a.value === value);
    if (!chosenArmour) return;

    const armourWeight = Number(chosenArmour.weight);

    // Encumbrance check BEFORE adding
    if (!canCarry(armourWeight)) {
      title.textContent = "ENCUMBERED";
      description.textContent = "You cannot carry this armour.";
      modal.classList.remove("hidden");
      equipment.classList.add("hidden");
      return;
    }

    applyWeight(armourWeight);

    title.textContent = `${chosenArmour.name} (${armourWeight} lbs)`;
    description.innerHTML = `${chosenArmour.description}<br>
    Weight Category: ${chosenArmour.category.substring(0, 1).toUpperCase() + chosenArmour.category.substring(1).toLowerCase()}
    `;

    const armourDiv = document.createElement("div");
    armourDiv.dataset.armour = chosenArmour.value;
    armourDiv.style.display = "flex";
    armourDiv.style.gap = "10px";
    armourDiv.style.alignItems = "center";

    /* Quantity Controls */
    const quantityArmourDiv = document.createElement("div");
    quantityArmourDiv.style.display = "flex";
    quantityArmourDiv.style.alignItems = "center";

    let lastValidQty = 1;

    const armourQty = document.createElement("input");
    armourQty.type = "number";
    armourQty.min = 1;
    armourQty.step = 1;
    armourQty.value = 1;
    armourQty.style.width = "40px";
    armourQty.style.height = "30px";
    armourQty.style.textAlign = "center";

    armourQty.addEventListener("change", () => {
      let newQty = Number(armourQty.value);

      // Invalid input protection
      if (!Number.isInteger(newQty)) {
        armourQty.value = lastValidQty;
        return;
      }

      const deltaQty = newQty - lastValidQty;
      const deltaWeight = deltaQty * Number(chosenArmour.weight);

      // If increasing quantity, check encumbrance
      if (deltaWeight > 0 && !canCarry(deltaWeight)) {
        title.textContent = "ENCUMBERED";
        description.textContent = "You cannot carry that many.";
        modal.classList.remove("hidden");
        armourQty.value = lastValidQty;
        return;
      }

      // Apply change
      if (deltaWeight > 0) {
        applyWeight(deltaWeight);
      } else if (deltaWeight < 0) {
        refundWeight(Math.abs(deltaWeight));
      }

      lastValidQty = newQty;

      if (newQty < 1) {
        const qty = Number(armourQty.value);
        refundWeight(qty * armourWeight);
        armourDisplay.removeChild(armourDiv);
        return;
      }
    });

    const incrementArmourQty = document.createElement("button");
    incrementArmourQty.textContent = "+";
    incrementArmourQty.style.cursor = "pointer";
    incrementArmourQty.style.borderRadius = "50%";
    incrementArmourQty.style.backgroundColor = "greenyellow";

    const decrementArmourQty = document.createElement("button");
    decrementArmourQty.textContent = "-";
    decrementArmourQty.style.cursor = "pointer";
    decrementArmourQty.style.borderRadius = "50%";
    decrementArmourQty.style.backgroundColor = "red";

    incrementArmourQty.addEventListener("click", () => {
      const projectedWeight = Number(chosenArmour.weight);

      if (!canCarry(projectedWeight)) {
        title.textContent = "ENCUMBERED";
        description.textContent = "You cannot carry any more weight.";
        modal.classList.remove("hidden");
        return;
      }

      lastValidQty++;
      armourQty.value = lastValidQty;
      applyWeight(projectedWeight);
    });

    decrementArmourQty.addEventListener("click", () => {
      if (lastValidQty <= 1) {
        const qty = Number(armourQty.value);
        refundWeight(qty * armourWeight);
        armourDisplay.removeChild(armourDiv);
        return;
      }
      lastValidQty--;
      armourQty.value = lastValidQty;
      refundWeight(chosenArmour.weight);
    });

    quantityArmourDiv.append(incrementArmourQty, armourQty, decrementArmourQty);

    const addedArmour = document.createElement("div");
    addedArmour.innerHTML = `<b>${chosenArmour.name} (${chosenArmour.weight} lbs)</b>`;
    addedArmour.style.cursor = "pointer";
    addedArmour.style.fontSize = "x-large";

    addedArmour.addEventListener("click", () => {
      const armourName = addedArmour.textContent;
      const regex = /^(.*?)\s*\((\d+)\s*lbs\)$/;
      const match = armourName.match(regex);
      const selectedArmour = armors.find((armour) => armour.name === match[1]);

      // PROFICIENCY CHECK FIRST
      if (!isProficientWithArmour(selectedArmour)) {
        title.textContent = "WARNING";
        description.textContent =
          "Your class is not proficient with this armour. It cannot be donned!";
        modal.classList.remove("hidden");
        return;
      }

      const isThisEquipped = equippedArmourDiv === armourDiv;

      // If clicking the currently equipped one -> unequip it
      if (isThisEquipped) {
        addedArmour.style.color = "black";
        addedArmour.style.backgroundColor = "transparent";
        incrementArmourQty.classList.remove("hidden");
        decrementArmourQty.classList.remove("hidden");
        armourQty.classList.remove("hidden");

        equippedArmourDiv = null;
        armourAC = selectedArmour.baseAC;
        armourEquipped = undefined;
        const ac = calculateArmorClass(
          armourEquipped,
          characterClassName,
          hasShield,
        );
        armourClass.value = ac.ac;
        return;
      }

      // Otherwise, equip this one and unequip the previous (if any)
      if (equippedArmourDiv) {
        const prevQuantityDiv = equippedArmourDiv.firstChild;
        const prevInc = prevQuantityDiv.children[0];
        const prevInput = prevQuantityDiv.children[1];
        const prevDec = prevQuantityDiv.children[2];
        const prevLabel = equippedArmourDiv.children[1];

        prevLabel.style.color = "black";
        prevLabel.style.backgroundColor = "transparent";
        prevInc.classList.remove("hidden");
        prevDec.classList.remove("hidden");
        prevInput.classList.remove("hidden");
      }

      // Equip this one
      addedArmour.style.color = "yellow";
      addedArmour.style.backgroundColor = "yellowgreen";
      incrementArmourQty.classList.add("hidden");
      decrementArmourQty.classList.add("hidden");
      armourQty.classList.add("hidden");

      armourAC = selectedArmour.baseAC;
      armourEquipped = selectedArmour.value;
      const ac = calculateArmorClass(
        armourEquipped,
        characterClassName,
        hasShield,
      );
      armourClass.value = ac.ac;
      equippedArmourDiv = armourDiv;
    });

    addedArmour.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    addedArmour.addEventListener("mousedown", (e) => {
      if (e.button === 2 && e.shiftKey) {
        const qty = Number(armourQty.value);
        refundWeight(qty * armourWeight);
        armourDisplay.removeChild(armourDiv);
      }
    });

    armourDiv.append(quantityArmourDiv, addedArmour);
    armourDisplay.appendChild(armourDiv);

    /* ===================== ITEMS ===================== */
  } else if (currentEquipmentType === "add-items") {
    const alreadyAdded = Array.from(itemDisplay.children).some(
      (child) => child.dataset.item === value,
    );

    if (alreadyAdded) {
      title.textContent = "WARNING";
      description.textContent = "Item already added!";
      modal.classList.remove("hidden");
      equipment.classList.add("hidden");
      return;
    }

    const chosenItem = items.find((a) => a.value === value);
    if (!chosenItem) return;

    const itemWeight = Number(chosenItem.weight);

    // Encumbrance check BEFORE adding
    if (!canCarry(itemWeight)) {
      title.textContent = "ENCUMBERED";
      description.textContent = "You cannot carry this item.";
      modal.classList.remove("hidden");
      equipment.classList.add("hidden");
      return;
    }

    applyWeight(itemWeight);

    title.textContent = `${chosenItem.name} (${itemWeight} lbs)`;
    description.textContent = chosenItem.description;

    const itemDiv = document.createElement("div");
    itemDiv.dataset.item = chosenItem.value;
    itemDiv.style.display = "flex";
    itemDiv.style.gap = "10px";
    itemDiv.style.alignItems = "center";

    /* Quantity Controls */
    const quantityItemDiv = document.createElement("div");
    quantityItemDiv.style.display = "flex";
    quantityItemDiv.style.alignItems = "center";

    let lastValidQty = 1;

    const itemQty = document.createElement("input");
    itemQty.type = "number";
    itemQty.min = 1;
    itemQty.step = 1;
    itemQty.value = 1;
    itemQty.style.width = "40px";
    itemQty.style.height = "30px";
    itemQty.style.textAlign = "center";

    itemQty.addEventListener("change", () => {
      let newQty = Number(itemQty.value);

      // Invalid input protection
      if (!Number.isInteger(newQty)) {
        itemQty.value = lastValidQty;
        return;
      }

      const deltaQty = newQty - lastValidQty;
      const deltaWeight = deltaQty * Number(chosenItem.weight);

      // If increasing quantity, check encumbrance
      if (deltaWeight > 0 && !canCarry(deltaWeight)) {
        title.textContent = "ENCUMBERED";
        description.textContent = "You cannot carry that many.";
        modal.classList.remove("hidden");
        itemQty.value = lastValidQty;
        return;
      }

      // Apply change
      if (deltaWeight > 0) {
        applyWeight(deltaWeight);
      } else if (deltaWeight < 0) {
        refundWeight(Math.abs(deltaWeight));
      }

      lastValidQty = newQty;

      if (newQty < 1) {
        const qty = Number(itemQty.value);
        refundWeight(qty * itemWeight);
        itemDisplay.removeChild(itemDiv);
        return;
      }
    });

    const incrementItemQty = document.createElement("button");
    incrementItemQty.textContent = "+";
    incrementItemQty.style.cursor = "pointer";
    incrementItemQty.style.borderRadius = "50%";
    incrementItemQty.style.backgroundColor = "greenyellow";

    const decrementItemQty = document.createElement("button");
    decrementItemQty.textContent = "-";
    decrementItemQty.style.cursor = "pointer";
    decrementItemQty.style.borderRadius = "50%";
    decrementItemQty.style.backgroundColor = "red";

    incrementItemQty.addEventListener("click", () => {
      const projectedWeight = Number(chosenItem.weight);

      if (!canCarry(projectedWeight)) {
        title.textContent = "ENCUMBERED";
        description.textContent = "You cannot carry any more weight.";
        modal.classList.remove("hidden");
        return;
      }

      lastValidQty++;
      itemQty.value = lastValidQty;
      applyWeight(projectedWeight);
    });

    decrementItemQty.addEventListener("click", () => {
      if (lastValidQty <= 1) {
        const qty = Number(itemQty.value);
        refundWeight(qty * itemWeight);
        itemDisplay.removeChild(itemDiv);
        return;
      }
      lastValidQty--;
      itemQty.value = lastValidQty;
      refundWeight(chosenItem.weight);
    });

    quantityItemDiv.append(incrementItemQty, itemQty, decrementItemQty);

    const addedItem = document.createElement("div");
    addedItem.innerHTML = `<b>${chosenItem.name} (${chosenItem.weight} lbs)</b>`;
    addedItem.style.cursor = "pointer";
    addedItem.style.fontSize = "x-large";

    addedItem.addEventListener("click", () => {
      const itemName = addedItem.textContent;
      const regex = /^(.*?)\s*\((\d+)\s*lbs\)$/;
      const match = itemName.match(regex);
      // if (match[1] === "Shield") {
      //   isShieldEquipped = !isShieldEquipped;
      //   if (isShieldEquipped) {
      //     addedItem.style.color = "yellow";
      //     addedItem.style.backgroundColor = "yellowgreen";
      //     incrementItemQty.classList.add("hidden");
      //     decrementItemQty.classList.add("hidden");
      //     itemQty.classList.add("hidden");
      //     hasShield = true;
      //     const ac = calculateArmorClass(
      //       armourEquipped,
      //       characterClassName,
      //       hasShield,
      //     );
      //     armourClass.value = ac.ac;
      //   } else {
      //     addedItem.style.color = "black";
      //     addedItem.style.backgroundColor = "transparent";
      //     incrementItemQty.classList.remove("hidden");
      //     decrementItemQty.classList.remove("hidden");
      //     itemQty.classList.remove("hidden");
      //     hasShield = false;
      //     const ac = calculateArmorClass(
      //       armourEquipped,
      //       characterClassName,
      //       hasShield,
      //     );
      //     armourClass.value = ac.ac;
      //   }
      // }
      if (match[1] === "Shield") {
        const classKey = characterClass || classSelect.value;
        const proficientArmours = getArmourProficiencyNamesFromClass(classKey);

        // PROFICIENCY CHECK FIRST
        if (!proficientArmours.includes("Shield")) {
          title.textContent = "WARNING";
          description.textContent =
            "Your class is not proficient with shields. It cannot be equipped!";
          modal.classList.remove("hidden");
          return;
        }

        // Toggle only if proficient
        isShieldEquipped = !isShieldEquipped;

        if (isShieldEquipped) {
          addedItem.style.color = "yellow";
          addedItem.style.backgroundColor = "yellowgreen";
          incrementItemQty.classList.add("hidden");
          decrementItemQty.classList.add("hidden");
          itemQty.classList.add("hidden");
          hasShield = true;
        } else {
          addedItem.style.color = "black";
          addedItem.style.backgroundColor = "transparent";
          incrementItemQty.classList.remove("hidden");
          decrementItemQty.classList.remove("hidden");
          itemQty.classList.remove("hidden");
          hasShield = false;
        }

        const ac = calculateArmorClass(
          armourEquipped,
          characterClassName,
          hasShield,
        );
        armourClass.value = ac.ac;
      }
    });

    addedItem.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    addedItem.addEventListener("mousedown", (e) => {
      if (e.button === 2 && e.shiftKey) {
        const qty = Number(itemQty.value);
        refundWeight(qty * itemWeight);
        itemDisplay.removeChild(itemDiv);
      }
    });

    itemDiv.append(quantityItemDiv, addedItem);
    itemDisplay.appendChild(itemDiv);
  }
  equipment.classList.add("hidden");
  modal.classList.remove("hidden");
});

//Encumbrance Check
function maxCarry() {
  return Number(strength.value) * 15;
}

function canCarry(extraWeight) {
  const maxCarry = Number(strength.value) * 15;
  return totalWeight + Number(extraWeight) <= maxCarry;
}

function applyWeight(weight) {
  totalWeight += Number(weight);
  currentWeight.textContent = `Current Carrying Weight = ${totalWeight} lbs`;
  remainingWeight.textContent = `Remaining Carrying Weight = ${+strength.value * 15 - totalWeight} lbs`;
}

function refundWeight(weight) {
  totalWeight -= Number(weight);
  currentWeight.textContent = `Current Carrying Weight = ${totalWeight} lbs`;
  remainingWeight.textContent = `Remaining Carrying Weight = ${+strength.value * 15 - totalWeight} lbs`;
}

function adjustSpeedBasedOnEncumbrance(isEncumbered) {
  let originalSpeed = +speed.textContent;
  if (isEncumbered) {
    speed.textContent -= 10;
  } else {
    if (+speed.textContent !== originalSpeed) {
      speed.textContent = originalSpeed;
    }
  }
}

// //Dice Roller
// function rollDice(numberOfDice, diceSides) {
//   let total = 0;

//   for (let i = 0; i < numberOfDice; i++) {
//     const roll = Math.floor(Math.random() * diceSides) + 1;
//     total += roll;
//   }

//   return total;
// }

//Attack Roll Calculation
function calculateAttackBonus(weaponValue, weaponType) {
  const classKey = characterClass || classSelect.value;
  const proficientWeapons = getWeaponProficiencyNamesFromClass(classKey);

  const weaponObj = weapons.find((w) => w.value === weaponValue);

  let abilityMod = 0;

  if (weaponType === "melee") {
    abilityMod = +strMod.textContent;
  } else if (weaponType === "ranged") {
    abilityMod = +initiative.textContent;
  }
  const isProficient = proficientWeapons.includes(weaponObj.name);

  return {
    abilityMod: abilityMod,
    proficiency: isProficient ? +proficiency.textContent : 0,
  };
}

/**
 * Expand class weapon proficiencies (e.g. "Simple Weapons") into an actual list of weapon names.
 * Uses the `weapons` array (equipment list) to determine which weapons are simple/martial.
 */
function getWeaponProficiencyNamesFromClass(classKey) {
  const classData = classes[classKey];
  if (!classData || !Array.isArray(classData.weapons)) return [];

  // Build a lookup map once per call (fast enough for click).
  const weaponLookup = new Map();
  weapons.forEach((w) => {
    weaponLookup.set(normalizeLabel(w.name), w.name);
    weaponLookup.set(normalizeLabel(w.value), w.name);
  });

  const out = new Set();

  classData.weapons.forEach((prof) => {
    const p = String(prof);

    // Category-based proficiencies
    if (p.toLowerCase().includes("simple weapons")) {
      weapons
        .filter((w) => w.category === "simple")
        .forEach((w) => out.add(w.name));
      return;
    }

    if (p.toLowerCase().includes("martial weapons")) {
      weapons
        .filter((w) => w.category === "martial")
        .forEach((w) => out.add(w.name));
      return;
    }

    // Specific-weapon proficiency (e.g. "Longswords")
    const normalized = normalizeLabel(p);
    const matched = weaponLookup.get(normalized);

    if (matched) {
      out.add(matched);
    } else {
      // Fallback: if we can't match it, still display the text from the class.
      out.add(p);
    }
  });

  return Array.from(out).sort();
}

/**
 * Expand class armour proficiencies (e.g. "Light Armor") into the armour names from `armors`.
 * Note: Shield is handled separately because in your data it lives in the `items` list, not `armors`.
 */
function getArmourProficiencyNamesFromClass(classKey) {
  const classData = classes[classKey];
  if (!classData || !Array.isArray(classData.armor)) return [];

  const out = new Set();

  classData.armor.forEach((prof) => {
    const p = String(prof).toLowerCase();

    if (p.includes("all armor")) {
      armors.forEach((a) => out.add(a.name));
      out.add("Shield");
      return;
    }

    if (p.includes("light armor")) {
      armors
        .filter((a) => a.category === "light")
        .forEach((a) => out.add(a.name));
      return;
    }

    if (p.includes("medium armor")) {
      armors
        .filter((a) => a.category === "medium")
        .forEach((a) => out.add(a.name));
      return;
    }

    if (p.includes("heavy armor")) {
      armors
        .filter((a) => a.category === "heavy")
        .forEach((a) => out.add(a.name));
      return;
    }

    if (p.includes("shield")) {
      out.add("Shield");
      return;
    }

    // Fallback: show raw text if it doesn't fit a known category.
    out.add(prof);
  });

  return Array.from(out).sort();
}

function isProficientWithArmour(armourObj) {
  const classKey = characterClass || classSelect.value;
  if (!classKey) return false;

  const proficientArmours = getArmourProficiencyNamesFromClass(classKey);

  // Direct match (e.g. "Shield")
  if (proficientArmours.includes(armourObj.name)) return true;

  // Category match (light/medium/heavy)
  if (
    proficientArmours.some((p) => p.toLowerCase().includes(armourObj.category))
  ) {
    return true;
  }

  return false;
}

/**
 * Background tool proficiencies are already explicit strings in the `backgrounds` data.
 */
function getToolProficiencyNamesFromBackground(backgroundKey) {
  const bg = backgrounds[backgroundKey];
  if (!bg || !Array.isArray(bg.toolProficiencies)) return [];
  return [...new Set(bg.toolProficiencies)].sort();
}

weaponProficiency.addEventListener("click", () => {
  weaponProficiencyTitle.textContent = "Weapon Proficiencies";
  weaponProficiencyModal.classList.remove("hidden");

  // Prefer the stored selection; fall back to the dropdown value just in case.
  const classKey = characterClass || classSelect.value;
  const weaponNames = getWeaponProficiencyNamesFromClass(classKey);

  renderProficiencyList(
    weaponProficiencyDisplay,
    `From Class: ${classKey ? classKey : "(none selected)"}`,
    weaponNames,
  );
});

armourProficiency.addEventListener("click", () => {
  armourProficiencyTitle.textContent = "Armour Proficiencies";
  armourProficiencyModal.classList.remove("hidden");

  const classKey = characterClass || classSelect.value;
  const armourNames = getArmourProficiencyNamesFromClass(classKey);

  renderProficiencyList(
    armourProficiencyDisplay,
    `From Class: ${classKey ? classKey : "(none selected)"}`,
    armourNames,
  );
});

toolProficiency.addEventListener("click", () => {
  toolProficiencyTitle.textContent = "Tool Proficiencies";
  toolProficiencyModal.classList.remove("hidden");
  const backgroundKey = characterBackstory || backgroundSelect.value;
  const toolNames = getToolProficiencyNamesFromBackground(backgroundKey);

  renderProficiencyList(
    toolProficiencyDisplay,
    `From Background: ${backgroundKey ? backgroundKey : "(none selected)"}`,
    toolNames,
  );
});

/**
 * Normalizes a proficiency label so we can match it against entries in the `weapons` list.
 * Example: "Hand Crossbows" -> "handcrossbow"
 */
function normalizeLabel(label) {
  return String(label || "")
    .toLowerCase()
    .replace(/\(.*?\)/g, "") // remove parenthetical notes, e.g. "(non-metal)"
    .replace(/[^a-z0-9]/g, "") // remove spaces, apostrophes, hyphens, etc.
    .replace(/s$/, ""); // very small plural handling (crossbows -> crossbow)
}

/**
 * Renders a simple bullet list into a modal container.
 * We clear + rebuild each time so the dialog always reflects the latest class/background selection.
 */
function renderProficiencyList(containerEl, titleText, items) {
  containerEl.innerHTML = ""; // clear previous content

  const heading = document.createElement("h3");
  heading.textContent = titleText;
  heading.style.margin = "0 0 10px 0";
  containerEl.appendChild(heading);

  if (!items || items.length === 0) {
    const empty = document.createElement("div");
    empty.textContent = "No proficiencies found for the current selections.";
    containerEl.appendChild(empty);
    return;
  }

  const ul = document.createElement("ul");
  ul.style.margin = "0";
  ul.style.paddingLeft = "20px";

  items.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    ul.appendChild(li);
  });

  containerEl.appendChild(ul);
}

//Items or Inventory

//Adding items
//Item Choice
// addItem.addEventListener("click", (e) => {
//   if (e.target.id === "item-add") {
//     populateSelect(equipmentSelect, items);
//   }
//   equipmentTitle.textContent = "Items Dialog";
//   equipment.classList.remove("hidden");
//   currentEquipmentType = e.target.id;
// });

itemAdd.addEventListener("click", (e) => {
  if (e.target.id === "add-items") {
    populateSelect(equipmentSelect, items);
  }
  equipmentTitle.textContent = "Items Dialog";
  equipment.classList.remove("hidden");
  currentEquipmentType = e.target.id;
});

//Finding an item
function getItemByValue(value) {
  return items.find((i) => i.value === value);
}

//Adding packs to inventory
function addPackToInventory(character, packValue) {
  const pack = packs.find((p) => p.value === packValue);
  if (!pack) return;

  pack.contents.forEach((entry) => {
    const item = getItemByValue(entry.item);
    if (!item) return;

    character.inventory.push({
      ...item,
      quantity: entry.qty,
    });
  });
}

inventoryExit.addEventListener("click", () => {
  sheet.style.display = "block";
  equipmentPage.style.display = "none";
});

backstoryExit.addEventListener("click", () => {
  sheet.style.display = "block";
  backstoryPage.style.display = "none";
});
