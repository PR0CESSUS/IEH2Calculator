import { Util } from "@/Util";
import { WorldAscensionUpgrade } from "@/data/WorldAscension/WorldAscensionUpgrade";
import { AscensionUpgradeKind } from "@/type/AscensionUpgradeKind";

export function WorldAscensionUpgradeString(upgrade: WorldAscensionUpgrade, value = 0.0) {
  let str1 = "";
  let str2 = "";
  switch (upgrade.kind) {
    case AscensionUpgradeKind.GuildExpGain:
      str1 = "Guild EXP Booster";
      str2 = "Multiplies Guild EXP Gain by " + Util.percent(1.0 + value);
      break;
    case AscensionUpgradeKind.AreaClearCount:
      str1 = "Area Booster";
      str2 = "Increases Area Clear # and Clear Reward by " + Util.tDigit(value, 0);
      break;
    case AscensionUpgradeKind.ActiveHero:
      str1 = "Active Hero Slot Expansion";
      str2 = "Increases activable Hero slot by " + Util.tDigit(value, 0);
      break;
    case AscensionUpgradeKind.SkillProfGain:
      str1 = "Skill Proficiency Boost";
      str2 = "Increases Skill Proficiency Gain by " + Util.percent(value);
      break;
    case AscensionUpgradeKind.PreRebirthTier1:
      str1 = "Pre-Rebirth Tier 1";
      str2 = "Adds free Rebirth Tier 1 Point + " + Util.tDigit(value) + " at the start of a new WA";
      break;
    case AscensionUpgradeKind.PreRebirthTier2:
      str1 = "Pre-Rebirth Tier 2";
      str2 = "Adds free Rebirth Tier 2 Point + " + Util.tDigit(value) + " at the start of a new WA";
      break;
    case AscensionUpgradeKind.RebirthTier1BonusCap:
      str1 = "Rebirth Tier 1 Bonus Expansion";
      str2 = "Increases the level cap for Tier 1 Rebirth Bonus Ability Points by Lv " + Util.tDigit(value);
      break;
    case AscensionUpgradeKind.RebirthTier2BonusCap:
      str1 = "Rebirth Tier 2 Bonus Expansion";
      str2 = "Increases the level cap for Tier 2 Rebirth Bonus Ability Points by Lv " + Util.tDigit(value);
      break;
    case AscensionUpgradeKind.PointGainBonus:
      str1 = "WA Milestone Point Efficiency";
      str2 = "Increases the point gain per level of WA Milestones by " + Util.tDigit(value);
      break;
    case AscensionUpgradeKind.NitroSpeed:
      str1 = "Nitro Improvements";
      str2 = "Nitro Speed + " + Util.tDigit(value, 1) + "x";
      break;
  }
  return { name: str1, effect: str2 };
}
