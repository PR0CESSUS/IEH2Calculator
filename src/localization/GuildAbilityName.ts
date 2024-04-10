import { GuildAbilityKind } from "@/type/GuildAbilityKind";

export function GuildAbilityName(kind: GuildAbilityKind) {
  switch (kind) {
    case GuildAbilityKind.StoneGain:
      return "Mining";
    case GuildAbilityKind.CrystalGain:
      return "Synthesizing";
    case GuildAbilityKind.LeafGain:
      return "Gathering";
    case GuildAbilityKind.GuildExpGain:
      return "Training";
    case GuildAbilityKind.EquipmentInventory:
      return "Collecting";
    case GuildAbilityKind.EnchantInventory:
      return "Enchanting";
    case GuildAbilityKind.PotionInventory:
      return "Alchemising";
    case GuildAbilityKind.MysteriousWater:
      return "Purifying";
    case GuildAbilityKind.SkillProficiency:
      return "Studying";
    case GuildAbilityKind.GlobalSkillSlot:
      return "Imitating";
    case GuildAbilityKind.GoldCap:
      return "Banking";
    case GuildAbilityKind.GoldGain:
      return "Monetizing";
    case GuildAbilityKind.Trapping:
      return "Trapping";
    case GuildAbilityKind.UpgradeCost:
      return "Financing";
    case GuildAbilityKind.PhysicalAbsorption:
      return "Shielding";
    case GuildAbilityKind.MagicalAbsoption:
      return "Dispersing";
    case GuildAbilityKind.ExpGain:
      return "Learning";
    case GuildAbilityKind.EquipmentProficiency:
      return "Smithing";
    case GuildAbilityKind.MaterialDrop:
      return "Finding";
    case GuildAbilityKind.NitroCap:
      return "Racing";
    default:
      return "Not Implemented";
  }
}
