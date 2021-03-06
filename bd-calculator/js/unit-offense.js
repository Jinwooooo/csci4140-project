var offenseUnitDB = {
  "rignette": {
    "type": "Offense",
    "range": ["skip", "B1"],
    "atk": 759,
    "flatRuneAtk": 0,
    "percRuneAtk": 0,
    "currentAtk": 759,
    "hp": 2480,
    "flatRuneHp": 0,
    "percRuneHp": 0,
    "maxHp": 2480,
    "currentHp": 2480,
    "def": 0,
    "cRate": 15,
    "cDmg": 50,
    "agi": 35,
    "extra": true,
    "extraDmg": ["self", ["cRate", "atk"], 100],
    "permDmgReduc": 0,
    "addDmgReduc": 0,
    "immunity": [false, false, false, false],
    "prohibition": [false, false]
  },
  "cordelia": {
    "type": "Offense",
    "range": ["front", "B2"],
    "atk": 684,
    "flatRuneAtk": 0,
    "percRuneAtk": 0,
    "currentAtk": 684,
    "hp": 2370,
    "flatRuneHp": 0,
    "percRuneHp": 0,
    "maxHp": 2370,
    "currentHp": 2370,
    "def": 3,
    "cRate": 7.5,
    "cDmg": 7.5,
    "agi": 0,
    "extra": true,
    "extraDmg": ["self", ["atk"], 50],
    "permDmgReduc": 0,
    "addDmgReduc": 0,
    "immunity": [false, false, false, false],
    "prohibition": [false, false]
  },
  "bran": {
    "type": "Offense",
    "range": ["back", "A0"],
    "atk": 1419,
    "flatRuneAtk": 0,
    "percRuneAtk": 0,
    "currentAtk": 1419,
    "hp": 590,
    "flatRuneHp": 0,
    "percRuneHp": 0,
    "maxHp": 590,
    "currentHp": 590,
    "def": 0,
    "cRate": 10,
    "cDmg": 50,
    "agi": 0,
    "extra": true,
    "extraDmg": ["self", ["atk"], 300],
    "permDmgReduc": 0,
    "addDmgReduc": 0,
    "immunity": [false, false, false, false],
    "prohibition": [false, false]
  },
  "beatrix": {
    "type": "Offense",
    "range": ["back", "A0"],
    "atk": 961,
    "flatRuneAtk": 0,
    "percRuneAtk": 0,
    "currentAtk": 961,
    "hp": 3234,
    "flatRuneHp": 0,
    "percRuneHp": 0,
    "maxHp": 3234,
    "currentHp": 3234,
    "def": 0,
    "cRate": 10,
    "cDmg": 50,
    "agi": 0,
    "extra": true,
    "extraDmg": ["self", ["atk"], 125],
    "permDmgReduc": 0,
    "addDmgReduc": 0,
    "immunity": [false, false, false, false],
    "prohibition": [false, false]
  },
  "wiggle": {
    "type": "Offense",
    "range": ["front", "F1"],
    "atk": 3849,
    "flatRuneAtk": 0,
    "percRuneAtk": 0,
    "currentAtk": 3849,
    "hp": 585,
    "flatRuneHp": 0,
    "percRuneHp": 0,
    "maxHp": 585,
    "currentHp": 585,
    "def": 0,
    "cRate": 5,
    "cDmg": 50,
    "agi": 0,
    "extra": false,
    "extraDmg": null,
    "permDmgReduc": 0,
    "addDmgReduc": 0,
    "immunity": [false, false, false, false],
    "prohibition": [false, false]
  }
};
//
// var rignette = {
//   type: "Offense",
//   range: ["skip", "B1"],
//   atk: 759,
//   flatRuneAtk: 0,
//   percRuneAtk: 0,
//   currentAtk: 759,
//   hp: 2480,
//   flatRuneHp: 0,
//   percRuneHp: 0,
//   maxHp: 2480,
//   currentHp: 2480,
//   def: 0,
//   cRate: 15,
//   cDmg: 50,
//   agi: 35,
//   extra: true,
//   extraDmg: ["self", ["cRate", "atk"], 100],
//   permDmgReduc: 0,
//   addDmgReduc: 0,
//   immunity: [false, false, false, false],
//   prohibition: [false, false]
// };
//
// var cordelia = {
//   type: "Offense",
//   range: ["front", "B2"],
//   atk: 684,
//   flatRuneAtk: 0,
//   percRuneAtk: 0,
//   currentAtk: 684,
//   hp: 2370,
//   flatRuneHp: 0,
//   percRuneHp: 0,
//   maxHp: 2370,
//   currentHp: 2370,
//   def: 3,
//   cRate: 7.5,
//   cDmg: 7.5,
//   agi: 0,
//   extra: true,
//   extraDmg: ["self", ["atk"], 50],
//   permDmgReduc: 0,
//   addDmgReduc: 0,
//   immunity: [false, false, false, false],
//   prohibition: [false, false]
// };
//
// var bran = {
//   type: "Offense",
//   range: ["back", "A0"],
//   atk: 1419,
//   flatRuneAtk: 0,
//   percRuneAtk: 0,
//   currentAtk: 1419,
//   hp: 590,
//   flatRuneHp: 0,
//   percRuneHp: 0,
//   maxHp: 590,
//   currentHp: 590,
//   def: 0,
//   cRate: 10,
//   cDmg: 50,
//   agi: 0,
//   extra: true,
//   extraDmg: ["self", ["atk"], 300],
//   permDmgReduc: 0,
//   addDmgReduc: 0,
//   immunity: [false, false, false, false],
//   prohibition: [false, false]
// };
//
// var beatrix = {
//   type: "Offense",
//   range: ["back", "A0"],
//   atk: 961,
//   flatRuneAtk: 0,
//   percRuneAtk: 0,
//   currentAtk: 961,
//   hp: 3234,
//   flatRuneHp: 0,
//   percRuneHp: 0,
//   maxHp: 3234,
//   currentHp: 3234,
//   def: 0,
//   cRate: 10,
//   cDmg: 50,
//   agi: 0,
//   extra: true,
//   extraDmg: ["self", ["atk"], 125],
//   permDmgReduc: 0,
//   addDmgReduc: 0,
//   immunity: [false, false, false, false],
//   prohibition: [false, false]
// };
//
// var wiggle = {
//   type: "Offense",
//   range: ["front", "F1"],
//   atk: 3849,
//   flatRuneAtk: 0,
//   percRuneAtk: 0,
//   currentAtk: 3849,
//   hp: 585,
//   flatRuneHp: 0,
//   percRuneHp: 0,
//   maxHp: 585,
//   currentHp: 585,
//   def: 0,
//   cRate: 5,
//   cDmg: 50,
//   agi: 0,
//   extra: false,
//   extraDmg: null,
//   permDmgReduc: 0,
//   addDmgReduc: 0,
//   immunity: [false, false, false, false],
//   prohibition: [false, false]
// };
