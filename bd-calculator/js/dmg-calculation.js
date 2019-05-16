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

function calcDmgDone(main, target) {
  var normalNoCrit = main["currentAtk"];
  var normalCrit = main["currentAtk"] * (((100 + (100 + main["cDmg"])) / 100));
  var extraNoCrit = 0;
  var extraCrit = 0;

  if(main["extra"] == true) {
    if(main["extraDmg"][0] == "self") {
      switch(main["extraDmg"][1]) {
        case "atk":
          extraNoCrit = main["currentAtk"] * (main["extraDmg"][2] / 100);
          extraCrit = (main["currentAtk"] * (main["extraDmg"][2]) / 100) * (((100 + (100 + main["cDmg"])) / 100));
          break;
        case "hp":
          extraNoCrit = main["maxHp"] * (main["extraDmg"][2] / 100);
          extraCrit = (main["maxHp"] * (main["extraDmg"][2]) / 100) * (((100 + (100 + main["cDmg"])) / 100));
          break;
        case "def":
          extraNoCrit = main["def"] * (main["extraDmg"][2] / 100);
          extraCrit = (main["def"] * (main["extraDmg"][2]) / 100) * (((100 + (100 + main["cDmg"])) / 100));
          break;
      }
    } else if(main["extraDmg"][0] == "target") {
      extraNoCrit = target["currentHp"] * (main["extraDmg"][2] / 100);
      extraCrit = (main["currentAtk"] * (main["extraDmg"][2] / 100)) * (((100 + (100 + main["cDmg"])) / 100));
    }
  }
  return [normalNoCrit, normalCrit, extraNoCrit, extraCrit];
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
