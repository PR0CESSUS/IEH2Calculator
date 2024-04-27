import { Stats } from "../type/Stats";

export function Stat(stats: Stats) {
  switch (stats) {
    case Stats.FireRes:
      return "Fire Resistance";
    case Stats.IceRes:
      return "Ice Resistance";
    case Stats.ThunderRes:
      return "Thunder Resistance";
    case Stats.LightRes:
      return "Light Resistance";
    case Stats.DarkRes:
      return "Dark Resistance";
    case Stats.DebuffRes:
      return "Debuff Resistance";
    case Stats.PhysCritChance:
      return "Physical Critical Chance";
    case Stats.MagCritChance:
      return "Magical Critical Chance";
    case Stats.CriticalDamage:
      return "Critical Damage";
    case Stats.EquipmentDropChance:
      return "Equipment Drop Chance";
    case Stats.MoveSpeed:
      return "Move Speed";
    case Stats.SkillProficiencyGain:
      return "Skill Proficiency Gain";
    case Stats.EquipmentProficiencyGain:
      return "Equipment Proficiency Gain";
    case Stats.TamingPointGain:
      return "Taming Point Gain";
    case Stats.ExpGain:
      return "EXP Gain";
    case Stats.ArmoredFury:
      return "Armored Fury";
    case Stats.WardedFury:
      return "Warded Fury";
    case Stats.PetPhysCritChance:
      return "Pet Base Physical Critical Chance";
    case Stats.PetMagCritChance:
      return "Pet Base Magical Critical Chance";
    case Stats.PetCriticalDamage:
      return "Pet Base Critical Damage";
    case Stats.PetDebuffResistance:
      return "Pet Debuff Resistance";
    case Stats.ArtifactProficiencyGain:
      return "Artifact Proficiency Gain";
  }
}
