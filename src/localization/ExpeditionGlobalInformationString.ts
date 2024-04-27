import { Util } from "../Util";
import { ExpeditionKind } from "../type/ExpeditionKind";
export function ExpeditionGlobalInformationString(expedition, text = "") {
  let str1 = "";
  let str2 = "";
  let str3 = "";
  let str4 = "";
  switch (expedition.kind) {
    case ExpeditionKind.Brick:
      str1 = "Manufacturing Bricks";
      //  str2 = "Bricks Gain : " + Util.percent(Math.Pow(1.1, expedition.level.value)) + "  ( x1.1 / Lv )";
      str3 = `Town Brick Buildings' level effect + ${Util.percent(expedition.EffectValue())} ( + ${Util.percent(expedition.passiveEffectValueIncrementPerLevel)} / Lv )`;

      break;
    case ExpeditionKind.Log:
      str1 = "Logging Trees";
      //  str2 = "Logs Gain : " + Util.percent(Math.Pow(1.1, expedition.level.value)) + "  ( x1.1 / Lv )";
      str3 = "Town Log Buildings' level effect + " + Util.percent(expedition.EffectValue()) + "  ( + " + Util.percent(expedition.passiveEffectValueIncrementPerLevel) + " / Lv )";
      break;
    case ExpeditionKind.Shard:
      str1 = "Gathering Shards";
      //  str2 = "Shards Gain : " + Util.percent(Math.Pow(1.1, expedition.level.value)) + "  ( x1.1 / Lv )";
      str3 = "Town Shard Buildings' level effect + " + Util.percent(expedition.EffectValue()) + "  ( + " + Util.percent(expedition.passiveEffectValueIncrementPerLevel) + " / Lv )";
      break;
    case ExpeditionKind.PetRank:
      str1 = "Capturing Monsters";
      //  str2 = "Taming Point : " + Util.percent(Math.Pow(1.1, expedition.level.value)) + "  ( x1.1 / Lv )";
      str3 = "Multiply Taming Point Gain by " + Util.percent(1.0 + expedition.EffectValue()) + "  ( + " + Util.percent(expedition.passiveEffectValueIncrementPerLevel) + " / Lv )";
      str4 = text + "'s Taming Point";
      break;
    case ExpeditionKind.Equipment:
      str1 = "Training Equipment";
      //  str2 = "Proficiency Scroll's Time : " + Util.percent(1.0 + 0.1 * expedition.level.value) + "  ( + " + Util.percent(0.1) + " / Lv )";
      str3 =
        "Multiply Equipment Proficiency Gain by " +
        Util.percent(1.0 + expedition.EffectValue()) +
        "  ( + " +
        Util.percent(expedition.passiveEffectValueIncrementPerLevel) +
        " / Lv )";
      break;
    case ExpeditionKind.PetExp:
      str1 = "Field Training";
      //  str2 = "Pet EXP Gain : " + Util.percent(Math.Pow(1.2, expedition.level.value)) + "  ( x1.2 / Lv )";
      str3 =
        "Multiply Pet EXP Gain from any expeditions by " +
        Util.percent(1.0 + expedition.EffectValue()) +
        "  ( + " +
        Util.percent(expedition.passiveEffectValueIncrementPerLevel) +
        " / Lv )";
      str4 = text + "'s Pet EXP";
      break;
    case ExpeditionKind.WalkDistance:
      str1 = "Marathon Race";
      //  str2 = "Walked Distance : " + Util.percent(Math.Pow(1.2, expedition.level.value)) + "  ( x1.2 / Lv )";
      str3 =
        "Walked Distance Gain from expeditions + " + Util.percent(expedition.EffectValue()) + "  ( + " + Util.percent(expedition.passiveEffectValueIncrementPerLevel) + " / Lv )";
      str4 = text + " Walked Distance";
      break;
  }
  return { name: str1, effect: str2, passive: str3, reward: str4 };
}
