import { ExpeditionKind } from "../type/ExpeditionKind";
export function ExpeditionGlobalInformationString(expedition, text = "") {
  let str1 = "";
  let str2 = "";
  let str3 = "";
  let str4 = "";
  switch (expedition.kind) {
    case ExpeditionKind.Brick:
      str1 = "Manufacturing Bricks";
      //  str2 = "Bricks Gain : <color=green>" + UsefulMethod.percent(Math.Pow(1.1, expedition.level.value)) + "</color>  ( x1.1 / Lv )";
      //  str3 = (UsefulMethod.optStr + "Town Brick Buildings' level effect <color=green>+ " + UsefulMethod.percent(expedition.EffectValue()) + "</color>  ( + " + UsefulMethod.percent(expedition.passiveEffectValueIncrementPerLevel) + " / Lv )");
      break;
    case ExpeditionKind.Log:
      str1 = "Logging Trees";
      //  str2 = "Logs Gain : <color=green>" + UsefulMethod.percent(Math.Pow(1.1, expedition.level.value)) + "</color>  ( x1.1 / Lv )";
      //  str3 = (UsefulMethod.optStr + "Town Log Buildings' level effect <color=green>+ " + UsefulMethod.percent(expedition.EffectValue()) + "</color>  ( + " + UsefulMethod.percent(expedition.passiveEffectValueIncrementPerLevel) + " / Lv )");
      break;
    case ExpeditionKind.Shard:
      str1 = "Gathering Shards";
      //  str2 = "Shards Gain : <color=green>" + UsefulMethod.percent(Math.Pow(1.1, expedition.level.value)) + "</color>  ( x1.1 / Lv )";
      //  str3 = (UsefulMethod.optStr + "Town Shard Buildings' level effect <color=green>+ " + UsefulMethod.percent(expedition.EffectValue()) + "</color>  ( + " + UsefulMethod.percent(expedition.passiveEffectValueIncrementPerLevel) + " / Lv )");
      break;
    case ExpeditionKind.PetRank:
      str1 = "Capturing Monsters";
      //  str2 = "Taming Point : <color=green>" + UsefulMethod.percent(Math.Pow(1.1, expedition.level.value)) + "</color>  ( x1.1 / Lv )";
      //  str3 = (UsefulMethod.optStr + "Multiply Taming Point Gain by <color=green>" + UsefulMethod.percent(1.0 + expedition.EffectValue()) + "</color>  ( + " + UsefulMethod.percent(expedition.passiveEffectValueIncrementPerLevel) + " / Lv )");
      str4 = text + "'s Taming Point";
      break;
    case ExpeditionKind.Equipment:
      str1 = "Training Equipment";
      //  str2 = "Proficiency Scroll's Time : <color=green>" + UsefulMethod.percent(1.0 + 0.1 * expedition.level.value) + "</color>  ( + " + UsefulMethod.percent(0.1) + " / Lv )";
      //  str3 = (UsefulMethod.optStr + "Multiply Equipment Proficiency Gain by <color=green>" + UsefulMethod.percent(1.0 + expedition.EffectValue()) + "</color>  ( + " + UsefulMethod.percent(expedition.passiveEffectValueIncrementPerLevel) + " / Lv )");
      break;
    case ExpeditionKind.PetExp:
      str1 = "Field Training";
      //  str2 = "Pet EXP Gain : <color=green>" + UsefulMethod.percent(Math.Pow(1.2, expedition.level.value)) + "</color>  ( x1.2 / Lv )";
      //  str3 = (UsefulMethod.optStr + "Multiply Pet EXP Gain from any expeditions by <color=green>" + UsefulMethod.percent(1.0 + expedition.EffectValue()) + "</color>  ( + " + UsefulMethod.percent(expedition.passiveEffectValueIncrementPerLevel) + " / Lv )");
      str4 = text + "'s Pet EXP";
      break;
    case ExpeditionKind.WalkDistance:
      str1 = "Marathon Race";
      //  str2 = "Walked Distance : <color=green>" + UsefulMethod.percent(Math.Pow(1.2, expedition.level.value)) + "</color>  ( x1.2 / Lv )";
      //  str3 = (UsefulMethod.optStr + "Walked Distance Gain from expeditions <color=green>+ " + UsefulMethod.percent(expedition.EffectValue()) + "</color>  ( + " + UsefulMethod.percent(expedition.passiveEffectValueIncrementPerLevel) + " / Lv )");
      str4 = text + " Walked Distance";
      break;
  }
  return { name: str1, effect: str2, passive: str3, reward: str4 };
}
