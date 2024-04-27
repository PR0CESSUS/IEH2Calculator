import { Util } from "@/Util";
import { WorldAscensionMilestone } from "@/data/WorldAscension/WorldAscensionMilestone";
import { WorldAscensionMiletoneKind } from "@/type/WorldAscensionMiletoneKind";

export function WorldAscensionMilestoneString(milestone: WorldAscensionMilestone, currentValue = 0.0, nextValue = 0.0) {
  let str1 = "";
  let str2 = "";
  let str3 = "";
  switch (milestone.kind) {
    case WorldAscensionMiletoneKind.TownBuldingLevel:
      str1 = "Raise the Town";
      str2 = "Total levels of Town Buildings";
      str3 = "Town Building's level effect + " + Util.percent(currentValue);
      break;
    case WorldAscensionMiletoneKind.MissionClearNum:
      str1 = "Map Milestoner";
      str2 = "Area Missions completed this ascension #";
      str3 = "Town Material reward per Area Difficulty + " + Util.percent(currentValue);
      break;
    case WorldAscensionMiletoneKind.UpgradeLevel:
      str1 = "Very Resourceful";
      str2 = "Total levels of Resource Upgrades";
      str3 = "Resource Gain + " + Util.percent(currentValue);
      break;
    case WorldAscensionMiletoneKind.MoveDistance:
      str1 = "Walk the World";
      str2 = "Total Walked Distance (meters)";
      str3 = "Move Speed + " + Util.percent(currentValue);
      break;
    case WorldAscensionMiletoneKind.DictionaryPoint:
      str1 = "Polished Equipper";
      str2 = "Total Dictionary Points gained";
      str3 = "Dictionary Upgrade effect + " + Util.percent(currentValue);
      break;
    case WorldAscensionMiletoneKind.DisassembleEquipment:
      str1 = "Pro Disassembler";
      str2 = "Total Town Material Gained from disassembling Equipment";
      str3 = "Equipment Proficiency Gain + " + Util.percent(currentValue);
      break;
    case WorldAscensionMiletoneKind.RebirthPointGainTier1:
      str1 = "Rebirther 1";
      str2 = "Total Tier 1 Rebirth Points gained";
      str3 = "Tier 1 Rebirth Point Gain + " + Util.percent(currentValue);
      break;
    case WorldAscensionMiletoneKind.RebirthPointGainTier2:
      str1 = "Rebirther 2";
      str2 = "Total Tier 2 Rebirth Points gained";
      str3 = "Tier 2 Rebirth Point Gain + " + Util.percent(currentValue);
      break;
  }
  return { name: str1, effect: str3, requirement: str2 };
}
