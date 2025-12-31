//HTML Elements
const characterCreator = document.querySelector(".character-creator");
const raceSelect = document.getElementById("race-options");
const classSelect = document.getElementById("class-options");
const backgroundSelect = document.getElementById("background-options");
const languageSelect = document.getElementById("language-options");
const equipmentSelect = document.getElementById("equipment-options");
const background = document.querySelector(".background");
const race = document.querySelector(".race");
const archetype = document.querySelector(".archetype");
const raceInfo = document.getElementById("race-info");
const modal = document.getElementById("modal-popup");
const equipment = document.getElementById("equipment-popup");
const diceRoller = document.getElementById("dice-popup");
const diceRollerInfo = document.querySelector(".dice-roller-info");
const diceRollerResult = document.querySelector(".dice-roller-result");
const language = document.getElementById("language-popup");
const savingThrow = document.getElementById("dice-result-popup");
const title = document.getElementById("title");
const languageTitle = document.getElementById("language-title");
const equipmentTitle = document.getElementById("equipment-title");
const description = document.getElementById("description");
const savingThrowTitle = document.getElementById("saving-throw-title");
const savingThrowResult = document.getElementById("saving-throw-result");
const d20Img = document.getElementById("d20");
const openDiceRollerBtn = document.getElementById("roll-dice");
const closeBtn = document.getElementById("close-modal");
const closeEquipmentBtn = document.getElementById("close-equipment");
const closeDiceRollerBtn = document.getElementById("close-dice-roller");
const closeLangBtn = document.getElementById("close-language");
const closeSavingThrowBtn = document.getElementById("close-dice-result");
const rerollSavingThrowBtn = document.getElementById("repeat-dice-result");
const rerollDiceBtn = document.getElementById("repeat-dice-roll");
const characterForm = document.querySelector(".form-container form");
const characterName = document.querySelector("#character");
const generateCharacter = document.getElementById("generate-character");
const characterSheet = document.querySelector(".character-sheet");
const sheet = document.querySelector(".sheet-container");
const equipmentPage = document.querySelector(".equipment-container");
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
const weaponContainer = document.querySelector(".added-weapons");
const addArmour = document.querySelector("#armour-add");
const armourContainer = document.querySelector(".added-armour");
const addItem = document.querySelector("#item-add");
const itemContainer = document.querySelector(".added-items");
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

//const dieImages = document.querySelector("#dice-images");

//Objects, Variables and Constants
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

let roller = {
  rolls: [],
  total: 0,
};

let currentEquipmentType = "";

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
    description:
      "Humans are versatile and ambitious, adapting easily to many cultures.",
  },
  { value: "elf", name: "Elf" },
  { value: "dwarf", name: "Dwarf" },
];

const classes = [
  { value: "fighter", name: "Fighter" },
  { value: "wizard", name: "Wizard" },
  { value: "rogue", name: "Rogue" },
];

const backgrounds = [
  { value: "acolyte", name: "Acolyte" },
  { value: "soldier", name: "Soldier" },
  { value: "noble", name: "Noble" },
];

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
  },
  {
    value: "dagger",
    name: "Dagger",
    category: "simple",
    type: "melee",
    damage: "1d4",
    damageType: "piercing",
    properties: ["finesse", "light", "thrown"],
  },
  {
    value: "greatclub",
    name: "Greatclub",
    category: "simple",
    type: "melee",
    damage: "1d8",
    damageType: "bludgeoning",
    properties: ["two-handed"],
  },
  {
    value: "handaxe",
    name: "Handaxe",
    category: "simple",
    type: "melee",
    damage: "1d6",
    damageType: "slashing",
    properties: ["light", "thrown"],
  },
  {
    value: "javelin",
    name: "Javelin",
    category: "simple",
    type: "melee",
    damage: "1d6",
    damageType: "piercing",
    properties: ["thrown"],
  },
  {
    value: "mace",
    name: "Mace",
    category: "simple",
    type: "melee",
    damage: "1d6",
    damageType: "bludgeoning",
    properties: [],
  },
  {
    value: "quarterstaff",
    name: "Quarterstaff",
    category: "simple",
    type: "melee",
    damage: "1d6",
    damageType: "bludgeoning",
    properties: ["versatile"],
  },
  {
    value: "sickle",
    name: "Sickle",
    category: "simple",
    type: "melee",
    damage: "1d4",
    damageType: "slashing",
    properties: ["light"],
  },
  {
    value: "spear",
    name: "Spear",
    category: "simple",
    type: "melee",
    damage: "1d6",
    damageType: "piercing",
    properties: ["thrown", "versatile"],
  },

  // ───── SIMPLE RANGED ─────
  {
    value: "light_crossbow",
    name: "Light Crossbow",
    category: "simple",
    type: "ranged",
    damage: "1d8",
    damageType: "piercing",
    properties: ["ammunition", "loading", "two-handed"],
  },
  {
    value: "dart",
    name: "Dart",
    category: "simple",
    type: "ranged",
    damage: "1d4",
    damageType: "piercing",
    properties: ["finesse", "thrown"],
  },
  {
    value: "shortbow",
    name: "Shortbow",
    category: "simple",
    type: "ranged",
    damage: "1d6",
    damageType: "piercing",
    properties: ["ammunition", "two-handed"],
  },
  {
    value: "sling",
    name: "Sling",
    category: "simple",
    type: "ranged",
    damage: "1d4",
    damageType: "bludgeoning",
    properties: ["ammunition"],
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
  },
  {
    value: "flail",
    name: "Flail",
    category: "martial",
    type: "melee",
    damage: "1d8",
    damageType: "bludgeoning",
    properties: [],
  },
  {
    value: "glaive",
    name: "Glaive",
    category: "martial",
    type: "melee",
    damage: "1d10",
    damageType: "slashing",
    properties: ["heavy", "reach", "two-handed"],
  },
  {
    value: "greataxe",
    name: "Greataxe",
    category: "martial",
    type: "melee",
    damage: "1d12",
    damageType: "slashing",
    properties: ["heavy", "two-handed"],
  },
  {
    value: "greatsword",
    name: "Greatsword",
    category: "martial",
    type: "melee",
    damage: "2d6",
    damageType: "slashing",
    properties: ["heavy", "two-handed"],
  },
  {
    value: "longsword",
    name: "Longsword",
    category: "martial",
    type: "melee",
    damage: "1d8",
    damageType: "slashing",
    properties: ["versatile"],
  },
  {
    value: "rapier",
    name: "Rapier",
    category: "martial",
    type: "melee",
    damage: "1d8",
    damageType: "piercing",
    properties: ["finesse"],
  },
  {
    value: "scimitar",
    name: "Scimitar",
    category: "martial",
    type: "melee",
    damage: "1d6",
    damageType: "slashing",
    properties: ["finesse", "light"],
  },

  // ───── MARTIAL RANGED ─────
  {
    value: "hand_crossbow",
    name: "Hand Crossbow",
    category: "martial",
    type: "ranged",
    damage: "1d6",
    damageType: "piercing",
    properties: ["ammunition", "light", "loading"],
  },
  {
    value: "heavy_crossbow",
    name: "Heavy Crossbow",
    category: "martial",
    type: "ranged",
    damage: "1d10",
    damageType: "piercing",
    properties: ["ammunition", "heavy", "loading", "two-handed"],
  },
  {
    value: "longbow",
    name: "Longbow",
    category: "martial",
    type: "ranged",
    damage: "1d8",
    damageType: "piercing",
    properties: ["ammunition", "heavy", "two-handed"],
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
  },
  {
    value: "studded_leather",
    name: "Studded Leather",
    category: "light",
    baseAC: 12,
    dexBonus: "full",
    maxDex: null,
    stealthDisadvantage: false,
    properties: [],
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
  },
  {
    value: "chain_shirt",
    name: "Chain Shirt",
    category: "medium",
    baseAC: 13,
    dexBonus: "limited",
    maxDex: 2,
    stealthDisadvantage: false,
    properties: [],
  },
  {
    value: "scale_mail",
    name: "Scale Mail",
    category: "medium",
    baseAC: 14,
    dexBonus: "limited",
    maxDex: 2,
    stealthDisadvantage: true,
    properties: [],
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
  },
  {
    value: "half_plate",
    name: "Half Plate",
    category: "medium",
    baseAC: 15,
    dexBonus: "limited",
    maxDex: 2,
    stealthDisadvantage: true,
    properties: [],
  },

  // ───── HEAVY ARMOR ─────
  {
    value: "ring_mail",
    name: "Ring Mail",
    category: "heavy",
    baseAC: 14,
    dexBonus: "none",
    maxDex: 0,
    stealthDisadvantage: true,
    properties: [],
  },
  {
    value: "chain_mail",
    name: "Chain Mail",
    category: "heavy",
    baseAC: 16,
    dexBonus: "none",
    maxDex: 0,
    stealthDisadvantage: true,
    strengthRequirement: 13,
    properties: [],
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
  },

  // ───── SHIELDS ─────
  {
    value: "shield",
    name: "Shield",
    category: "shield",
    baseAC: 2,
    dexBonus: "n/a",
    maxDex: null,
    stealthDisadvantage: false,
    properties: ["requires-hand"],
  },
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

//New Character
newCharacterBtn.addEventListener("click", () => {
  location.reload();
});

//Equipment Page
equipmentBtn.addEventListener("click", () => {
  sheet.style.display = "none";
  equipmentPage.style.display = "block";
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
    (child) => child.dataset.language === value
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
    }
  });
  // title.textContent = races[value].name;
  // description.textContent = races[value].description;

  modal.classList.remove("hidden");
});

backgroundSelect.addEventListener("change", () => {
  const value = backgroundSelect.value;
  if (!value) return;

  backgrounds.forEach((background) => {
    if (background.value == value) {
      title.textContent = background.name;
      description.textContent = background.description;
    }
  });

  modal.classList.remove("hidden");
});

classSelect.addEventListener("change", () => {
  const value = classSelect.value;
  if (!value) return;

  classes.forEach((characterClass) => {
    if (characterClass.value == value) {
      title.textContent = characterClass.name;
      description.textContent = characterClass.description;
    }
  });

  modal.classList.remove("hidden");
});

//Close handlers
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

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
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

//Closes popups with esc
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
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );

  // Add options dynamically
  optionsArray.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option.value;
    opt.textContent = option.name;
    selectElement.appendChild(opt);
  });
}

populateSelect(raceSelect, races);
populateSelect(classSelect, classes);
populateSelect(backgroundSelect, backgrounds);
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

//Initialize sheet
function initializeSheet() {
  characterCreator.style.display = "none";
  let characterClass = classSelect.value;
  size.style.fontSize = "2rem";
  size.textContent = "M";
  speed.style.fontSize = "2rem";
  speed.textContent = "30";
  health.value = 1;
  currentHP.style.fontSize = "2rem";
  currentHP.textContent = +health.value;
  armourClass.value = 10;
  damageHeal.value = 0;
  level.style.fontSize = "2rem";
  level.value = 1;
  proficiency.textContent = getProficiencyBonus(+level.value);
  archetype.textContent = `${characterClass
    .substring(0, 1)
    .toUpperCase()}${characterClass.substring(1).toLowerCase()}`;
  let characterRace = raceSelect.value;
  race.textContent = `${characterRace
    .substring(0, 1)
    .toUpperCase()}${characterRace.substring(1).toLowerCase()}`;
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

//Proficiency Bonus Calculation
function getProficiencyBonus(level) {
  if (level < 1) return 0;
  return Math.floor((level - 1) / 4) + 2;
}

//Roll Statistics
function rollStat() {
  const rolls = Array.from(
    { length: 4 },
    () => Math.floor(Math.random() * 6) + 1
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

  // Initialize empty inputs
  if (!input.value) {
    input.value = rollStat();
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
      input.value = "";
      return;
    }

    let number = Number(value);

    if (number < 1) number = 1;
    if (number > 40) number = 40;

    input.value = number;
    mod.style.textAlign = "center";
    mod.style.fontSize = "2rem";
    mod.textContent = Math.floor((input.value - 10) / 2);
  });

  //Increment
  plus.addEventListener("click", () => {
    let value = Number(input.value);
    if (value < max) {
      input.value = value + 1;
      mod.style.textAlign = "center";
      mod.style.fontSize = "2rem";
      mod.textContent = Math.floor((input.value - 10) / 2);
    }
  });

  //Decrement
  minus.addEventListener("click", () => {
    let value = Number(input.value);
    if (value > min) {
      input.value = value - 1;
      mod.style.textAlign = "center";
      mod.style.fontSize = "2rem";
      mod.textContent = Math.floor((input.value - 10) / 2);
    }
  });
});

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
        modifiers
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
    level.value = "";
    return;
  }

  let number = Number(value);

  if (number < 1) number = 1;
  if (number > 40) number = 40;

  level.value = number;
  proficiency.textContent = getProficiencyBonus(+level.value);
});

//Level Increment and Decrement
plusLevelBtn.addEventListener("click", () => {
  const max = Number(level.max);
  let value = Number(level.value);
  if (value < max) {
    level.value = value + 1;
    proficiency.textContent = getProficiencyBonus(+level.value);
  }
});

minusLevelBtn.addEventListener("click", () => {
  const min = Number(level.min);
  let value = Number(level.value);
  if (value > min) {
    level.value = value - 1;
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
});

//Deal Damage
damageBtn.addEventListener("click", () => {
  let min = Number(damageHeal.min);
  let value = Number(damageHeal.value);
  if (value > min) {
    currentHP.textContent -= value;
  }
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
      currency
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
addArmour.addEventListener("click", (e) => {
  if (e.target.id === "armour-add") {
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

  let ac = armor.baseAC + dex;

  if (hasShield) {
    ac += 2;
  }

  return ac;
}

//Calculate Unarmoured AC
function calculateUnarmoredAC(character) {
  const dexMod = abilityModifier(character.abilities.dexterity);

  if (character.class === "barbarian") {
    const conMod = abilityModifier(character.abilities.constitution);
    return 10 + dexMod + conMod;
  }

  if (character.class === "monk") {
    const wisMod = abilityModifier(character.abilities.wisdom);
    return 10 + dexMod + wisMod;
  }

  // Default unarmored
  return 10 + dexMod;
}

//Check armour proficiency
function isProficientWithArmor(character, armor) {
  if (!armor) return true; // unarmored
  const profs = armorProficiencies[character.class] || [];
  return profs.includes(armor.category);
}

//Final AC Calculator
function calculateArmorClass(character) {
  const dexMod = abilityModifier(character.abilities.dexterity);

  const armor = armors.find((a) => a.value === character.equippedArmor);

  let ac;
  let hasPenalty = false;

  // ───── UNARMORED ─────
  if (!armor) {
    ac = calculateUnarmoredAC(character);
  }
  // ───── ARMORED ─────
  else {
    ac = calculateArmorClassWithArmor(armor, dexMod, character.hasShield);

    if (!isProficientWithArmor(character, armor)) {
      hasPenalty = true;
    }
  }

  return {
    ac,
    hasPenalty,
  };
}

//Weapon Choice
addWeapon.addEventListener("click", (e) => {
  if (e.target.id === "weapon-add") {
    populateSelect(equipmentSelect, weapons);
  }
  equipmentTitle.textContent = "Weapons Dialog";
  equipment.classList.remove("hidden");
  currentEquipmentType = e.target.id;
});

//Selecting equipment => weapon, item, armour
equipmentSelect.addEventListener("change", () => {
  const value = equipmentSelect.value;
  if (!value) return;

  if (currentEquipmentType == "weapon-add") {
    // Check if weapon already exists in the container
    const alreadyAdded = Array.from(weaponContainer.children).some(
      (child) => child.dataset.weapon === value
    );

    if (!alreadyAdded) {
      // Find the selected weapon from the array
      const chosenWeapon = weapons.find((w) => w.value === value);
      if (!chosenWeapon) return;

      // Update the title and description
      title.textContent = chosenWeapon.name;
      description.textContent = chosenWeapon.description;

      // Create the new div
      const addedWeapon = document.createElement("div");
      addedWeapon.dataset.weapon = chosenWeapon.value; // store value for duplicate check
      addedWeapon.innerHTML = `<b>${chosenWeapon.name}</b>`;
      addedWeapon.style.backgroundColor = "aliceblue";
      addedWeapon.style.border = "2px solid black";
      addedWeapon.style.borderRadius = "10%";
      addedWeapon.style.cursor = "pointer";

      // Add right-click removal
      addedWeapon.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        weaponContainer.removeChild(addedWeapon);
      });

      // Append to container
      weaponContainer.appendChild(addedWeapon);
    } else {
      title.textContent = "WARNING";
      description.textContent = "Weapon already added!";
    }
  } else if (currentEquipmentType == "armour-add") {
    // Check if weapon already exists in the container
    const alreadyAdded = Array.from(armourContainer.children).some(
      (child) => child.dataset.armour === value
    );

    if (!alreadyAdded) {
      // Find the selected weapon from the array
      const chosenArmour = armors.find((w) => w.value === value);
      if (!chosenArmour) return;

      // Update the title and description
      title.textContent = chosenArmour.name;
      description.textContent = chosenArmour.description;

      // Create the new div
      const addedArmour = document.createElement("div");
      addedArmour.dataset.armour = chosenArmour.value; // store value for duplicate check
      addedArmour.innerHTML = `<b>${chosenArmour.name}</b>`;
      addedArmour.style.backgroundColor = "aliceblue";
      addedArmour.style.border = "2px solid black";
      addedArmour.style.borderRadius = "10%";
      addedArmour.style.cursor = "pointer";

      // Add right-click removal
      addedArmour.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        armourContainer.removeChild(addedArmour);
      });

      // Append to container
      armourContainer.appendChild(addedArmour);
    } else {
      title.textContent = "WARNING";
      description.textContent = "Armour already added!";
    }
  } else if (currentEquipmentType == "item-add") {
    // Check if weapon already exists in the container
    const alreadyAdded = Array.from(itemContainer.children).some(
      (child) => child.dataset.item === value
    );

    if (!alreadyAdded) {
      // Find the selected weapon from the array
      const chosenItem = items.find((w) => w.value === value);
      if (!chosenItem) return;

      // Update the title and description
      title.textContent = chosenItem.name;
      description.textContent = chosenItem.description;

      // Create the new div
      const addedItem = document.createElement("div");
      addedItem.dataset.item = chosenItem.value; // store value for duplicate check
      addedItem.innerHTML = `<b>${chosenItem.name}</b>`;
      addedItem.style.backgroundColor = "aliceblue";
      addedItem.style.border = "2px solid black";
      addedItem.style.borderRadius = "10%";
      addedItem.style.cursor = "pointer";

      // Add right-click removal
      addedItem.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        itemContainer.removeChild(addedItem);
      });

      // Append to container
      itemContainer.appendChild(addedItem);
    } else {
      title.textContent = "WARNING";
      description.textContent = "Item already added!";
    }
  }

  equipment.classList.add("hidden");
  modal.classList.remove("hidden");
});

//Items or Inventory

//Adding items
//Armour Choice
addItem.addEventListener("click", (e) => {
  if (e.target.id === "item-add") {
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
