import { PotionType } from "../type/PotionType";

export function PotionTypeString(type: PotionType) {
  switch (type) {
    case PotionType.Health:
      return "Health";
    case PotionType.HealthRegen:
      return "Health Regen";
    case PotionType.ResourceGain:
      return "Resource";
    case PotionType.Move:
      return "Move";
    case PotionType.Mana:
      return "Mana";
    case PotionType.ManaRegen:
      return "Mana Regen";
    case PotionType.MaterialGain:
      return "Material";
    case PotionType.PhysicalDamage:
      return "Physical Damage";
    case PotionType.MagicalDamage:
      return "Magical Damage";
    case PotionType.MaxHP:
      return "Max HP";
    case PotionType.MaxMP:
      return "Max MP";
    case PotionType.SkillProfGain:
      return "Skill Proficiency";
    case PotionType.ElementResistance:
      return "Element Resistance";
    case PotionType.Aura:
      return "Aura";
    case PotionType.GoldGain:
      return "Gold";
    case PotionType.ExpGain:
      return "EXP";
    case PotionType.SlayerOil:
      return "Slayer Oil";
    case PotionType.Trap:
      return "Trap";
    case PotionType.Talisman:
      return "Talisman";
    default:
      return "Nothing";
  }
}
