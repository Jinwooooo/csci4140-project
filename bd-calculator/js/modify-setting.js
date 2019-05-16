function modifyStatOnRunes(unit, flatAtk, percAtk, flatVital, percVital, fatal, rage, armor, agi) {
  var runes = refineRuneValues([flatAtk, percAtk, flatVital, percVital, fatal, rage, armor, agi]);

  unit["flatRuneAtk"] += runes[0];
  unit["percRuneAtk"] += runes[1];
  unit["flatRuneHp"] += runes[2];
  unit["percRuneHp"] += runes[3];
  unit["cRate"] += runes[4];
  unit["cDmg"] += runes[5];
  unit["def"] += runes[6];
  unit["agi"] += runes[7];

  updateCurrentStat(unit);
  limitStatCheck(unit);
}

function modifyStatOnSG(unit, weapon, armor, totem) {
  if(unit["type"] != "support") {
    if(weapon == true) unit["sg"][0] += unit["atk"] * 0.05;
    if(armor == true) unit["sg"][1] += unit["hp"] * 0.05;
    if(totem == true) {
      unit["sg"][0] += unit["atk"] * 0.05;
      unit["sg"][1] += unit["hp"] * 0.05;
    }
  } else {
    if(weapon == true) unit["sg"][2] += 5;
    if(armor == true) unit["sg"][1] += unit["hp"] * 0.05;
    if(totem == true) {
      unit["sg"][2] += 5;
      unit["sg"][1] += unit["hp"] * 0.05;
    }
  }

  updateCurrentStat(unit);
  limitStatCheck(unit);
}

function modifyStatOnSupport(receiver, supportList) {
  for(var i = 0; i < supportList.length; i++) {
    var supportName = supportList[i];

    if(supportName != "default") {
      var support = supportUnit[supportName];
      console.log(support);

      var atkBuff = support["support"] * support["dpsBuff"][0] / 100;
      var cRateBuff = support["support"] * support["dpsBuff"][1] / 100;
      var cDmgBuff = support["support"] * support["dpsBuff"][2] / 100;

      receiver['currentAtk'] = (receiver['atk'] + receiver['flatRuneAtk']) * ((100 + receiver["percRuneAtk"] + atkBuff) / 100) + receiver["sg"][0];
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
  }
}

function refineRuneValues(runeList) {
  for(var i  = 0; i < runeList.length; i++) {
    runeList[i] = (runeList[i] == "") ? 0.0 : parseFloat(runeList[i]);
  }
  return(runeList);
}

function updateCurrentStat(unit) {
  unit["currentAtk"] = ((unit["atk"] + unit["flatRuneAtk"]) * ((100 + unit["percRuneAtk"]) / 100)) + unit["sg"][0];
  unit["maxHp"] = ((unit["hp"] + unit["flatRuneHp"]) * ((100 + unit["percRuneHp"]) / 100)) + unit["sg"][1];
  unit["currentHp"] = unit["maxHp"];

  unit["agi"] += unit["sg"][2];
}

function limitStatCheck(unit) {
  limitedStat = ["cRate", "def", "agi"];
  for(var i = 0; i < limitedStat.length; i ++) {
    if(unit[i] > 100) unit[i] = 100;
  }
}
