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
