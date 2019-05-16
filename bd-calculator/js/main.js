// // importing unit data
// unitJS = ["js/unit-defense.js","js/unit-offense.js","js/unit-support.js"];
// // var importJS;
// for(var i = 0; i < unitJS.length; i++) {
//   importJS = document.createElement("script");
//   importJS.src = unitJS[i];
//   document.head.appendChild(importJS);
// }
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
    "sg": [0,0,0],
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
    "sg": [0,0,0],
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
    "sg": [0,0,0],
    "extra": true,
    "extraDmg": ["self", ["atk"], 300],
    "permDmgReduc": 0,
    "addDmgReduc": 0,
    "immunity": [false, false, false, false],
    "prohibition": [false, false]
  },
  "beatrix": {
    "type": "Offense",
    "range": ["front", "A0"],
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
    "sg": [0,0,0],
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
    "sg": [0,0,0],
    "extra": false,
    "extraDmg": null,
    "permDmgReduc": 0,
    "addDmgReduc": 0,
    "immunity": [false, false, false, false],
    "prohibition": [false, false]
  }
};
var defenseUnitDB = {
  "sloan": {
    "type": "Defense",
    "range": ["front", "A0"],
    "atk": 722,
    "flatRuneAtk": 0,
    "percRuneAtk": 0,
    "currentAtk": 722,
    "hp": 4492,
    "flatRuneHp": 0,
    "percRuneHp": 0,
    "maxHp": 4492,
    "currentHp": 4492,
    "def": 10,
    "cRate": 5,
    "cDmg": 50,
    "agi": 0,
    "sg": [0,0,0],
    "extra": false,
    "extraDmg": null,
    "permDmgReduc": 0,
    "addDmgReduc": 35,
    "immunity": [false, false, false, false],
    "prohibition": [false, false]
  },
  "carlson": {
    "type": "Defense",
    "range": ["front", "A0"],
    "atk": 704,
    "flatRuneAtk": 0,
    "percRuneAtk": 0,
    "currentAtk": 704,
    "hp": 5478,
    "flatRuneHp": 0,
    "percRuneHp": 0,
    "maxHp": 5478,
    "currentHp": 5478,
    "def": 12,
    "cRate": 10,
    "cDmg": 50,
    "agi": 0,
    "sg": [0,0,0],
    "extra": false,
    "extraDmg": null,
    "permDmgReduc": 0,
    "addDmgReduc": 35,
    "immunity": [false, false, false, false],
    "prohibition": [false, false]
  },
  "casey": {
    "type": "Defense",
    "range": ["front", "B1"],
    "atk": 560,
    "flatRuneAtk": 0,
    "percRuneAtk": 0,
    "currentAtk": 560,
    "hp": 4123,
    "flatRuneHp": 0,
    "percRuneHp": 0,
    "maxHp": 4123,
    "currentHp": 4123,
    "def": 12,
    "cRate": 10,
    "cDmg": 50,
    "agi": 0,
    "sg": [0,0,0],
    "extra": false,
    "extraDmg": null,
    "permDmgReduc": 0,
    "addDmgReduc": 70,
    "immunity": [false, false, false, false],
    "prohibition": [false, false]
  },
  "tiara": {
    "type": "Defense",
    "range": ["front", "A0"],
    "atk": 615,
    "flatRuneAtk": 0,
    "percRuneAtk": 0,
    "currentAtk": 615,
    "hp": 4081,
    "flatRuneHp": 0,
    "percRuneHp": 0,
    "maxHp": 4081,
    "currentHp": 4081,
    "def": 10,
    "cRate": 10,
    "cDmg": 50,
    "agi": 0,
    "sg": [0,0,0],
    "extra": false,
    "extraDmg": null,
    "permDmgReduc": 0,
    "addDmgReduc": 50,
    "immunity": [false, false, false, false],
    "prohibition": [false, false]
  },
  "horan": {
    "type": "Defense",
    "range": ["front", "A0"],
    "atk": 804,
    "flatRuneAtk": 0,
    "percRuneAtk": 0,
    "currentAtk": 804,
    "hp": 3837,
    "flatRuneHp": 0,
    "percRuneHp": 0,
    "maxHp": 3837,
    "currentHp": 3837,
    "def": 0,
    "cRate": 10,
    "cDmg": 50,
    "agi": 20,
    "sg": [0,0,0],
    "extra": false,
    "extraDmg": null,
    "permDmgReduc": 30,
    "addDmgReduc": 0,
    "immunity": [false, false, false, false],
    "prohibition": [false, false]
  }
};
var supportUnitDB = {
  "arines": {
    "type": "Support",
    "range": ["next", "H1"],
    "support": 164.96,
    "hp": 2343,
    "flatRuneHp": 0,
    "percRuneHp": 0,
    "maxHp": 2343,
    "currentHp": 2343,
    "def": 5,
    "cRate": 0,
    "cDmg": 0,
    "agi": 5,
    "sg": [0,0,0],
    "permDmgReduc": 0,
    "addDmgReduc": 0,
    "immunity": [false, false, false, false],
    "prohibition": [false, false],
    "dpsBuff": [40, 5, 0],
    "healBuff": [null, 0],
    "dmgReducBuff": 15
  },
  "asera": {
    "type": "Support",
    "range": ["next", "H1"],
    "support": 164.96,
    "hp": 1733,
    "flatRuneHp": 0,
    "percRuneHp": 0,
    "maxHp": 1733,
    "currentHp": 1733,
    "def": 0,
    "cRate": 0,
    "cDmg": 0,
    "agi": 5,
    "sg": [0,0,0],
    "permDmgReduc": 0,
    "addDmgReduc": 0,
    "immunity": [false, false, false, false],
    "prohibition": [false, false],
    "dpsBuff": [0, 0, 0],
    "healBuff": ["target", 10],
    "dmgReducBuff": 0
  },
  "clarice": {
    "type": "Support",
    "range": ["next", "H1"],
    "support": 164.96,
    "hp": 1733,
    "flatRuneHp": 0,
    "percRuneHp": 0,
    "maxHp": 1733,
    "currentHp": 1733,
    "def": 0,
    "cRate": 0,
    "cDmg": 0,
    "agi": 5,
    "sg": [0,0,0],
    "permDmgReduc": 0,
    "addDmgReduc": 0,
    "immunity": [false, false, false, false],
    "prohibition": [false, false],
    "dpsBuff": [0, 0, 0],
    "healBuff": [null, 0],
    "dmgReducBuff": 32
  },
  "edan": {
    "type": "Support",
    "range": ["next", "G1"],
    "support": 164.96,
    "hp": 1643,
    "flatRuneHp": 0,
    "percRuneHp": 0,
    "maxHp": 1643,
    "currentHp": 1643,
    "def": 0,
    "cRate": 0,
    "cDmg": 0,
    "agi": 5,
    "sg": [0,0,0],
    "permDmgReduc": 0,
    "addDmgReduc": 0,
    "immunity": [false, false, false, false],
    "prohibition": [false, false],
    "dpsBuff": [0, 0, 0],
    "healBuff": ["target", 15],
    "dmgReducBuff": 5
  },
  "hyeonwul": {
    "type": "Support",
    "range": ["next", "F1"],
    "support": 164.96,
    "hp": 1989,
    "flatRuneHp": 0,
    "percRuneHp": 0,
    "maxHp": 1989,
    "currentHp": 1989,
    "def": 0,
    "cRate": 0,
    "cDmg": 0,
    "agi": 10,
    "sg": [0,0,0],
    "permDmgReduc": 0,
    "addDmgReduc": 0,
    "immunity": [false, false, false, false],
    "prohibition": [false, false],
    "dpsBuff": [20, 15, 36],
    "healBuff": [null, 0],
    "dmgReducBuff": 0
  }
};
var offenseUnit = JSON.parse(JSON.stringify(offenseUnitDB));
var defenseUnit = JSON.parse(JSON.stringify(defenseUnitDB));
var supportUnit = JSON.parse(JSON.stringify(supportUnitDB));

// UI for unit selection and modification
$(document).ready(function() {
  $('.unit-type').click(function() {
    var getType = $('.unit-type:checked').val();
    $(".unit-select").hide();
    $("#unit-select-" + getType).show();
  });

  var sgWeapon = $("#sg-weapon");
  var sgArmor = $("#sg-armor");
  var sgTotem = $("#sg-totem");

  $('#submit-setting').click(function() {
    // getting unit name
    var getType = $('.unit-type:checked').val();
    var selectedUnit = $("#unit-select-" + getType + " option:selected").val();

    // getting unit base info
    var unit;
    if(getType == "offense") {
      unit = offenseUnitDB[selectedUnit];
    } else if(getType == "defense") {
      unit = defenseUnitDB[selectedUnit];
    } else {
      unit = mageUnitDB[selectedUnit];
    }

    // modifying stat with runes;
    var runeFlatAssault = $('#rune-flat-assault').val();
    var runePercAssault = $('#rune-perc-assault').val();
    var runeFlatVital = $('#rune-flat-vital').val();
    var runePercVital = $('#rune-perc-vital').val();
    var runeFatal = $('#rune-fatal').val();
    var runeRage = $('#rune-rage').val();
    var runeArmor = $('#rune-armor').val();
    var runeAgi = $('#rune-agi').val();

    modifyStatOnRunes(unit, runeFlatAssault, runePercAssault, runeFlatVital, runePercVital, runeFatal, runeRage, runeArmor, runeAgi);

    // modifying stat with SG;
    var weapon = $("#sg-weapon").prop("checked");
    var armor = $("#sg-armor").prop("checked");
    var totem = $("#sg-totem").prop("checked");

    modifyStatOnSG(unit, weapon, armor, totem);

    // modifying stat with Support;
    var support1 = $("#unit-support-1" +  " option:selected").val();
    var support2 = $("#unit-support-2" +  " option:selected").val();
    var support3 = $("#unit-support-3" +  " option:selected").val();
    var support4 = $("#unit-support-4" +  " option:selected").val();
    var support5 = $("#unit-support-5" +  " option:selected").val();

    modifyStatOnSupport(unit, [support1, support2, support3, support4, support5]);
  });


});

// immunity: ['stat reduction', 'dot', 'attack interference', 'debuff']
// prohibition: ['heal', 'buff']
// dpsBuff: ["Attack", "Crit Rate", "Crit Dmg"]
// healBuff: [target, multiplier]

tempPercHpRune = {
  type: "hp",
  flatEffect: false,
  value: 40
};

tempFlatHpRune = {
  type: "hp",
  flatEffect: true,
  value: 1000
};

tempDefRune = {
  type: "def",
  flatEffect: false,
  value: 25
};

tempPercAtkRune = {
  type: "atk",
  flatEffect: false,
  value: 40
};

tempFlatAtkRune = {
  type: "atk",
  flatEffect: true,
  value: 40
};

tempCRateRune = {
  type: "cRate",
  flatEffect: false,
  value: 40
};

tempCDmgRune = {
  type: "cDmg",
  flatEffect: false,
  value: 100
};
