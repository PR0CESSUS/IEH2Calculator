import { Util } from "@/Util";
import { GuildAbilityKind } from "@/type/GuildAbilityKind";

export function GuildAbilityEffect(kind: GuildAbilityKind, effectValue: number) {
  switch (kind) {
    case GuildAbilityKind.StoneGain:
      return "Multiply Stone Gain by " + Util.percent(1.0 + effectValue);
    case GuildAbilityKind.CrystalGain:
      return "Multiply Crystal Gain by " + Util.percent(1.0 + effectValue);
    case GuildAbilityKind.LeafGain:
      return "Multiply Leaf Gain by " + Util.percent(1.0 + effectValue);
    case GuildAbilityKind.GuildExpGain:
      return "Guild EXP Gain + " + Util.percent(effectValue);
    case GuildAbilityKind.EquipmentInventory:
      return "Equipment Inventory + " + Util.tDigit(effectValue);
    case GuildAbilityKind.EnchantInventory:
      return "Enchant Inventory + " + Util.tDigit(effectValue);
    case GuildAbilityKind.PotionInventory:
      return "Utility Inventory + " + Util.tDigit(effectValue);
    case GuildAbilityKind.MysteriousWater:
      return "Mysterious Water Gain + " + Util.percent(effectValue);
    case GuildAbilityKind.SkillProficiency:
      return "Multiply Skill Proficiency Gain by " + Util.percent(1.0 + effectValue);
    case GuildAbilityKind.GlobalSkillSlot:
      return "Global Skill Slot + " + Util.tDigit(effectValue);
    case GuildAbilityKind.GoldCap:
      return "Multiply Gold Cap by " + Util.percent(1.0 + effectValue);
    case GuildAbilityKind.GoldGain:
      return "Multiply Gold Gain by " + Util.percent(1.0 + effectValue);
    case GuildAbilityKind.Trapping:
      return "Double Capture Chance + " + Util.percent(effectValue);
    case GuildAbilityKind.UpgradeCost:
      return "Decrease General Upgrade Cost by " + Util.percent(effectValue);
    case GuildAbilityKind.PhysicalAbsorption:
      return "Physical Absorption + " + Util.percent(effectValue);
    case GuildAbilityKind.MagicalAbsoption:
      return "Magical Absorption + " + Util.percent(effectValue);
    case GuildAbilityKind.ExpGain:
      return "Multiply EXP Gain by " + Util.percent(1.0 + effectValue);
    case GuildAbilityKind.EquipmentProficiency:
      return "Multiply Equipment Proficiency Gain by " + Util.percent(1.0 + effectValue);
    case GuildAbilityKind.MaterialDrop:
      return "Increases dropped amount of materials by " + Util.tDigit(effectValue);
    case GuildAbilityKind.NitroCap:
      return "Nitro Cap + " + Util.tDigit(effectValue);
    default:
      return "Not Implemented";
  }
}
