// immunity: ['stat reduction', 'dot', 'attack interference', 'debuff']
// prohibition: ['heal', 'buff']
// dpsBuff: ["Attack", "Crit Rate", "Crit Dmg"]
// healBuff: [target, multiplier]

var sloan = {
  type: "Defense",
  range: ["front", "A0"],
  atk: 722,
  flatRuneAtk: 0,
  percRuneAtk: 0,
  currentAtk: 722,
  hp: 4492,
  flatRuneHp: 0,
  percRuneHp: 0,
  maxHp: 4492,
  currentHp: 4492,
  def: 10,
  cRate: 5,
  cDmg: 50,
  agi: 0,
  permDmgReduc: 0,
  addDmgReduc: 0,
  immunity: [false, false, false, false],
  prohibition: [false, false]
};

var cordelia = {
  type: "Offense",
  range: ["front", "B2"],
  atk: 684,
  flatRuneAtk: 0,
  percRuneAtk: 0,
  currentAtk: 684,
  hp: 2370,
  flatRuneHp: 0,
  percRuneHp: 0,
  maxHp: 2370,
  currentHp: 2370,
  def: 3,
  cRate: 7.5,
  cDmg: 7.5,
  agi: 0,
  permDmgReduc: 0,
  addDmgReduc: 0,
  immunity: [false, false, false, false],
  prohibition: [false, false]
};

var arines = {
  type: "Support",
  range: ["next", "H1"],
  support: 164.96,
  hp: 2343,
  flatRuneHp: 0,
  percRuneHp: 0,
  maxHp: 2343,
  currentHp: 2343,
  def: 5,
  cRate: 0,
  cDmg: 0,
  agi: 5,
  permDmgReduc: 0,
  addDmgReduc: 0,
  immunity: [false, false, false, false],
  prohibition: [false, false],
  dpsBuff: [40, 5, 0],
  healBuff: [null, 0],
  dmgReducBuff: 15
};

var asera = {
  type: "Support",
  range: ["next", "H1"],
  support: 164.96,
  hp: 1733,
  flatRuneHp: 0,
  percRuneHp: 0,
  maxHp: 1733,
  currentHp: 1733,
  def: 0,
  cRate: 0,
  cDmg: 0,
  agi: 5,
  currentHp: 1733,
  permDmgReduc: 0,
  addDmgReduc: 0,
  immunity: [false, false, false, false],
  prohibition: [false, false],
  dpsBuff: [0, 0, 0],
  healBuff: ["target", 10],
  dmgReducBuff: 0
};

tempPercHpRune = {
  type: "hp",
  flatEffect: false,
  value: 40,
  bonus: [null, null]
};

tempFlatHpRune = {
  type: "hp",
  flatEffect: true,
  value: 1000,
  bonuse: [null, null]
};

tempDefRune = {
  type: "def",
  flatEffect: false,
  value: 25,
  bonus: [null, null]
};

tempPercAtkRune = {
  type: "atk",
  flatEffect: false,
  value: 40,
  bonus: [null, null]
};

tempFlatAtkRune = {
  type: "atk",
  flatEffect: true,
  value: 40,
  bonus: [null, null]
};

tempCRateRune = {
  type: "cRate",
  flatEffect: false,
  value: 40,
  bonus: [null, null]
};

tempCDmgRune = {
  type: "cDmg",
  flatEffect: false,
  value: 100,
  bonus: [null, null]
};

function modifyStatOnRunes(unit, rune) {
  if(rune["flatEffect"] == true) {
    if(rune["type"] == "atk") {
      unit["flatRuneAtk"] += rune["value"];
    } else if(rune["type"] == "hp") {
      unit["flatRuneHp"] += rune["value"];
    }
  } else {
    var add = ["def", "cRate", "cDmg"];
    var multiply = ["atk", "hp"];

    if(add.includes(rune["type"])) {
      unit[rune["type"]] += rune["value"];
    } else if(multiply.includes(rune["type"])) {
      if(rune["type"] == "atk") {
        unit["percRuneAtk"] += rune["value"];
      } else if(rune["type"] == "hp") {
        unit["percRuneHp"] += rune["value"];
      }
    }
  }
  updateCurrentStat(unit);
}

function updateCurrentStat(unit) {
  unit["currentAtk"] = (unit["atk"] + unit["flatRuneAtk"]) * ((100 + unit["percRuneAtk"]) / 100);
  unit["maxHp"] = (unit["hp"] + unit["flatRuneHp"]) * ((100 + unit["percRuneHp"]) / 100);
  unit["currentHp"] = unit["maxHp"];

}

function modifyStatOnSupport(support, receiver) {
  var atkBuff = support["support"] * support["dpsBuff"][0] / 100;
  var cRateBuff = support["support"] * support["dpsBuff"][1] / 100;
  var cDmgBuff = support["support"] * support["dpsBuff"][2] / 100;

  receiver['currentAtk'] = (receiver['atk'] + receiver['flatRuneAtk']) * ((100 + atkBuff)/100);
  receiver['cRate'] += cRateBuff;
  receiver['cDmg'] += cDmgBuff;

  if(support["healBuff"][0] != null) {
    var heal = 0;

    if(support["healBuff"][0] == "self") {
      heal = support["maxHp"] * (support["healBuff"][1] / 100);
    } else if(support["healBuff"][0] == "target") {
      heal = receiver["maxHp"] * (support["healBuff"][1] / 100);
    }

    if((receiver["maxHp"] - receiver["currentHp"]) > heal) {
      receiver["currentHp"] += heal;
    } else {
      receiver["currentHp"] = receiver["maxHp"];
    }
  }

  if(support["dmgReducBuff"] != null) {
    var base = (100 - receiver["addDmgReduc"]) / 100;
    var compound = (100 - support["dmgReducBuff"]) / 100;
    receiver["addDmgReduc"] = 100 - ((base * compound) * 100);
  }
}

function calcDmgDone(unit) {
  var normalNoCrit = unit['currentAtk'];
  var normalCrit = unit['currentAtk'] * (((100 + (100 + unit["cDmg"])) / 100));
  var extraNoCrit = unit['currentAtk'];
  var extraCrit = unit['currentAtk'] * (((100 + (100 + unit["cDmg"])) / 100));

  return [normalNoCrit, normalCrit, extraNoCrit, extraCrit]
}

function calcDmgReceived(unit, dmgList) {
  var dmgReduc = (100 - unit["addDmgReduc"]) / 100;
  var defReduc = (100 - unit["def"]) / 100;
  var agiReduc = 0.65;

  var normalNoCritReceived = dmgList[0] * dmgReduc * defReduc;
  var normalNoCritReceivedGrazed = dmgList[0] * dmgReduc * defReduc * agiReduc;
  var normalCritReceived = dmgList[1] * dmgReduc * defReduc;
  var normalCritReceivedGrazed = dmgList[1] * dmgReduc * defReduc * agiReduc;
  var extraNoCritReceived = dmgList[2] * dmgReduc * defReduc;
  var extraNoCritReceivedGrazed = dmgList[2] * dmgReduc * defReduc * agiReduc;
  var extraCritReceived = dmgList[3] * dmgReduc * defReduc;
  var extraCritReceivedGrazed = dmgList[3] * dmgReduc * defReduc * agiReduc;

  return [normalNoCritReceived, normalNoCritReceivedGrazed,
          normalCritReceived, normalCritReceivedGrazed,
          extraNoCritReceived, extraNoCritReceivedGrazed,
          extraCritReceived, extraCritReceivedGrazed]
}
