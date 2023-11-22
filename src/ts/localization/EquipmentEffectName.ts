import { EquipmentEffectKind } from "../type/EquipmentEffectKind";

export function EquipmentEffectName(kind: EquipmentEffectKind) {
  switch (kind) {
    case EquipmentEffectKind.Nothing:
      return "Enchant Slot";
    case EquipmentEffectKind.HPAdder:
      return "HP Adder";
    case EquipmentEffectKind.MPAdder:
      return "MP Adder";
    case EquipmentEffectKind.ATKAdder:
      return "ATK Adder";
    case EquipmentEffectKind.MATKAdder:
      return "MATK Adder";
    case EquipmentEffectKind.DEFAdder:
      return "DEF Adder";
    case EquipmentEffectKind.MDEFAdder:
      return "MDEF Adder";
    case EquipmentEffectKind.SPDAdder:
      return "SPD Adder";
    case EquipmentEffectKind.HPMultiplier:
      return "HP Multiplier";
    case EquipmentEffectKind.MPMultiplier:
      return "MP Multiplier";
    case EquipmentEffectKind.ATKMultiplier:
      return "ATK Multiplier";
    case EquipmentEffectKind.MATKMultiplier:
      return "MATK Multiplier";
    case EquipmentEffectKind.DEFMultiplier:
      return "DEF Multiplier";
    case EquipmentEffectKind.MDEFMultiplier:
      return "MDEF Multiplier";
    case EquipmentEffectKind.ATKPropotion:
      return "ATK Proportion";
    case EquipmentEffectKind.MATKPropotion:
      return "MATK Proportion";
    case EquipmentEffectKind.DEFPropotion:
      return "DEF Proportion";
    case EquipmentEffectKind.MDEFPropotion:
      return "MDEF Proportion";
    case EquipmentEffectKind.FireResistance:
      return "Fire Resistance";
    case EquipmentEffectKind.IceResistance:
      return "Ice Resistance";
    case EquipmentEffectKind.ThunderResistance:
      return "Thunder Resistance";
    case EquipmentEffectKind.LightResistance:
      return "Light Resistance";
    case EquipmentEffectKind.DarkResistance:
      return "Dark Resistance";
    case EquipmentEffectKind.PhysicalAbsorption:
      return "Physical Absorption";
    case EquipmentEffectKind.FireAbsorption:
      return "Fire Absorption";
    case EquipmentEffectKind.IceAbsorption:
      return "Ice Absorption";
    case EquipmentEffectKind.ThunderAbsorption:
      return "Thunder Absorption";
    case EquipmentEffectKind.LightAbsorption:
      return "Light Absorption";
    case EquipmentEffectKind.DarkAbsorption:
      return "Dark Absorption";
    case EquipmentEffectKind.DebuffResistance:
      return "Debuff Resistance";
    case EquipmentEffectKind.EquipmentDropChance:
      return "Equipment Drop";
    case EquipmentEffectKind.SlimeDropChance:
      return "Slime Drop";
    case EquipmentEffectKind.MagicSlimeDropChance:
      return "Magicslime Drop";
    case EquipmentEffectKind.SpiderDropChance:
      return "Spider Drop";
    case EquipmentEffectKind.BatDropChance:
      return "Bat Drop";
    case EquipmentEffectKind.FairyDropChance:
      return "Fairy Drop";
    case EquipmentEffectKind.FoxDropChance:
      return "Fox Drop";
    case EquipmentEffectKind.DevilFishDropChance:
      return "Devilfish Drop";
    case EquipmentEffectKind.TreantDropChance:
      return "Treant Drop";
    case EquipmentEffectKind.FlameTigerDropChance:
      return "Flametiger Drop";
    case EquipmentEffectKind.UnicornDropChance:
      return "Unicorn Drop";
    case EquipmentEffectKind.ColorMaterialDropChance:
      return "Rare Material Drop";
    case EquipmentEffectKind.PhysicalCritical:
      return "Physical Critical";
    case EquipmentEffectKind.MagicalCritical:
      return "Magical Critical";
    case EquipmentEffectKind.EXPGain:
      return "EXP Gain";
    case EquipmentEffectKind.SkillProficiency:
      return "Skill Proficiency";
    case EquipmentEffectKind.EquipmentProficiency:
      return "Equipment Proficiency";
    case EquipmentEffectKind.MoveSpeedMultiplier:
      return "Move Speed Multiplier";
    case EquipmentEffectKind.GoldGain:
      return "Gold Gain";
    case EquipmentEffectKind.StoneGain:
      return "Stone Gain";
    case EquipmentEffectKind.CrystalGain:
      return "Crystal Gain";
    case EquipmentEffectKind.LeafGain:
      return "Leaf Gain";
    case EquipmentEffectKind.WarriorSkillLevel:
      return "Warrior Skill";
    case EquipmentEffectKind.WizardSkillLevel:
      return "Wizard Skill";
    case EquipmentEffectKind.AngelSkillLevel:
      return "Angel Skill";
    case EquipmentEffectKind.ThiefSkillLevel:
      return "Thief Skill";
    case EquipmentEffectKind.ArcherSkillLevel:
      return "Archer Skill";
    case EquipmentEffectKind.TamerSkillLevel:
      return "Tamer Skill";
    case EquipmentEffectKind.AllSkillLevel:
      return "All Skill";
    case EquipmentEffectKind.SlimeKnowledge:
      return "Slime Knowledge";
    case EquipmentEffectKind.MagicSlimeKnowledge:
      return "Magicslime Knowledge";
    case EquipmentEffectKind.SpiderKnowledge:
      return "Spider Knowledge";
    case EquipmentEffectKind.BatKnowledge:
      return "Bat Knowledge";
    case EquipmentEffectKind.FairyKnowledge:
      return "Fairy Knowledge";
    case EquipmentEffectKind.FoxKnowledge:
      return "Fox Knowledge";
    case EquipmentEffectKind.DevilFishKnowledge:
      return "Devilfish Knowledge";
    case EquipmentEffectKind.TreantKnowledge:
      return "Treant Knowledge";
    case EquipmentEffectKind.FlameTigerKnowledge:
      return "Flametiger Knowledge";
    case EquipmentEffectKind.UnicornKnowledge:
      return "Unicorn Knowledge";
    case EquipmentEffectKind.PhysicalDamage:
      return "Physical Damage";
    case EquipmentEffectKind.FireDamage:
      return "Fire Damage";
    case EquipmentEffectKind.IceDamage:
      return "Ice Damage";
    case EquipmentEffectKind.ThunderDamage:
      return "Thunder Damage";
    case EquipmentEffectKind.LightDamage:
      return "Light Damage";
    case EquipmentEffectKind.DarkDamage:
      return "Dark Damage";
    case EquipmentEffectKind.HpRegen:
      return "HP Regeneration";
    case EquipmentEffectKind.MpRegen:
      return "MP Regeneration";
    case EquipmentEffectKind.TamingPoint:
      return "Taming Point";
    case EquipmentEffectKind.WarriorSkillRange:
      return "Warrior Skill Range";
    case EquipmentEffectKind.WizardSkillRange:
      return "Wizard Skill Range";
    case EquipmentEffectKind.AngelSkillRange:
      return "Angel Skill Range";
    case EquipmentEffectKind.ThiefSkillRange:
      return "Thief Skill Range";
    case EquipmentEffectKind.ArcherSkillRange:
      return "Archer Skill Range";
    case EquipmentEffectKind.TamerSkillRange:
      return "Tamer Skill Range";
    case EquipmentEffectKind.TownMatGain:
      return "Town Material Gain";
    case EquipmentEffectKind.TownMatAreaClearGain:
      return "Area Town Material";
    case EquipmentEffectKind.RebirthPointGain1:
      return "Tier 1 Rebirth PoGain";
    case EquipmentEffectKind.RebirthPointGain2:
      return "Tier 2 Rebirth PoGain";
    case EquipmentEffectKind.RebirthPointGain3:
      return "Tier 3 Rebirth PoGain";
    case EquipmentEffectKind.CriticalDamage:
      return "Critical Damage";
    case EquipmentEffectKind.BlessingEffect:
      return "Blessing Effect";
    case EquipmentEffectKind.MoveSpeedAdder:
      return "Move Speed Adder";
    case EquipmentEffectKind.PetEXPGain:
      return "Pet EXP Gain";
    case EquipmentEffectKind.LoyaltyPointGain:
      return "Loyalty PoGain";
    case EquipmentEffectKind.CatalystDoubleCriticalChance:
      return "Catalyst Double Critical";
    case EquipmentEffectKind.WarriorSkillEffectRange:
      return "Warrior of: Area Effect";
    case EquipmentEffectKind.WizardSkillEffectRange:
      return "Wizard of: Area Effect";
    case EquipmentEffectKind.AngelSkillEffectRange:
      return "Angel of: Area Effect";
    case EquipmentEffectKind.ThiefSkillEffectRange:
      return "Thief of: Area Effect";
    case EquipmentEffectKind.ArcherSkillEffectRange:
      return "Archer of: Area Effect";
    case EquipmentEffectKind.TamerSkillEffectRange:
      return "Tamer of: Area Effect";
    case EquipmentEffectKind.HpRegenMultiplier:
      return "HP Regen Multiplier";
    case EquipmentEffectKind.MpRegenMultiplier:
      return "MP Regen Multiplier";
    case EquipmentEffectKind.ArmoredFury:
      return "Armored Fury";
    case EquipmentEffectKind.WardedFury:
      return "Warded Fury";
    case EquipmentEffectKind.PetPhysicalCriticalChance:
      return "Pet Physical Critical Chance";
    case EquipmentEffectKind.PetMagicalCriticalChance:
      return "Pet Magical Critical Chance";
    case EquipmentEffectKind.PetCriticalDamage:
      return "Pet Critical Damage";
    case EquipmentEffectKind.PetDebuffResistance:
      return "Pet Debuff Resistance";
    case EquipmentEffectKind.StoneTownResearchPower:
      return "Stone Research Power";
    case EquipmentEffectKind.CrystalTownResearchPower:
      return "Crystal Research Power";
    case EquipmentEffectKind.LeafTownResearchPower:
      return "Leaf Research Power";
    case EquipmentEffectKind.GuildEXPGain:
      return "Guild EXP Gain";
    case EquipmentEffectKind.SPDMultiplier:
      return "SPD Multiplier";
    case EquipmentEffectKind.CriticalDamageMultiplier:
      return "Critical Damage Multiplier";
    case EquipmentEffectKind.SkillProficiencyMultiplier:
      return "Skill Proficiency Multiplier";
    case EquipmentEffectKind.EquipmentProficiencyMultiplier:
      return "Equipment Proficiency Multiplier";
    case EquipmentEffectKind.EXPGainMultiplier:
      return "EXP Gain Multiplier";
    case EquipmentEffectKind.GoldGainMultiplier:
      return "Gold Gain Multiplier";
    case EquipmentEffectKind.PhysicalDamageMultiplier:
      return "Physical Damage Multiplier";
    case EquipmentEffectKind.FireDamageMultiplier:
      return "Fire Damage Multiplier";
    case EquipmentEffectKind.IceDamageMultiplier:
      return "Ice Damage Multiplier";
    case EquipmentEffectKind.ThunderDamageMultiplier:
      return "Thunder Damage Multiplier";
    case EquipmentEffectKind.LightDamageMultiplier:
      return "Light Damage Multiplier";
    case EquipmentEffectKind.DarkDamageMultiplier:
      return "Dark Damage Multiplier";
    case EquipmentEffectKind.TamingPointMultiplier:
      return "Taming PoMultiplier";
    case EquipmentEffectKind.PetEXPGainMultiplier:
      return "Pet EXP Gain Multiplier";
    case EquipmentEffectKind.LoyaltyPointGainMultiplier:
      return "Loyalty PoGain Multiplier";
    case EquipmentEffectKind.BlessingEffectMultiplier:
      return "Blessing Effect Multiplier";
    case EquipmentEffectKind.PhysicalCriticalMultiplier:
      return "Physical Critical Multiplier";
    case EquipmentEffectKind.MagicalCriticalMultiplier:
      return "Magical Critical Multiplier";
    case EquipmentEffectKind.ChallengeBossKnowledge:
      return "Challenge Boss Knowledge";
    case EquipmentEffectKind.HPAfter:
      return "HP After";
    case EquipmentEffectKind.MPAfter:
      return "MP After";
    case EquipmentEffectKind.ATKAfter:
      return "ATK After";
    case EquipmentEffectKind.MATKAfter:
      return "MATK After";
    case EquipmentEffectKind.DEFAfter:
      return "DEF After";
    case EquipmentEffectKind.MDEFAfter:
      return "MDEF After";
    case EquipmentEffectKind.SPDAfter:
      return "SPD After";
    case EquipmentEffectKind.MoveSpeedAfter:
      return "Move Speed After";
    case EquipmentEffectKind.PhysicalCriticalAfter:
      return "Physical Critical After";
    case EquipmentEffectKind.MagicalCriticalAfter:
      return "Magical Critical After";
    case EquipmentEffectKind.CriticalDamageAfter:
      return "Critical Damage After";
    case EquipmentEffectKind.DebuffResistanceAfter:
      return "Debuff Resistance After";
    case EquipmentEffectKind.PhysicalDamageAfter:
      return "Physical Damage After";
    case EquipmentEffectKind.FireDamageAfter:
      return "Fire Damage After";
    case EquipmentEffectKind.IceDamageAfter:
      return "Ice Damage After";
    case EquipmentEffectKind.ThunderDamageAfter:
      return "Thunder Damage After";
    case EquipmentEffectKind.LightDamageAfter:
      return "Light Damage After";
    case EquipmentEffectKind.DarkDamageAfter:
      return "Dark Damage After";
    case EquipmentEffectKind.FireResistanceAfter:
      return "Fire Resistance After";
    case EquipmentEffectKind.IceResistanceAfter:
      return "Ice Resistance After";
    case EquipmentEffectKind.ThunderResistanceAfter:
      return "Thunder Resistance After";
    case EquipmentEffectKind.LightResistanceAfter:
      return "Light Resistance After";
    case EquipmentEffectKind.DarkResistanceAfter:
      return "Dark Resistance After";
    case EquipmentEffectKind.SlimeKnowledgeAfter:
      return "Slime Knowledge After";
    case EquipmentEffectKind.MagicSlimeKnowledgeAfter:
      return "Magicslime Knowledge After";
    case EquipmentEffectKind.SpiderKnowledgeAfter:
      return "Spider Knowledge After";
    case EquipmentEffectKind.BatKnowledgeAfter:
      return "Bat Knowledge After";
    case EquipmentEffectKind.FairyKnowledgeAfter:
      return "Fairy Knowledge After";
    case EquipmentEffectKind.FoxKnowledgeAfter:
      return "Fox Knowledge After";
    case EquipmentEffectKind.DevilFishKnowledgeAfter:
      return "Devilfish Knowledge After";
    case EquipmentEffectKind.TreantKnowledgeAfter:
      return "Treant Knowledge After";
    case EquipmentEffectKind.FlameTigerKnowledgeAfter:
      return "Flametiger Knowledge After";
    case EquipmentEffectKind.UnicornKnowledgeAfter:
      return "Unicorn Knowledge After";
    case EquipmentEffectKind.ChallengeBossKnowledgeAfter:
      return "Challenge Boss Knowledge After";
    case EquipmentEffectKind.SDDamageMultiplier:
      return "SD Damage Multiplier";
    case EquipmentEffectKind.SDDamageCutMultiplier:
      return "SD Damage Cut Multiplier";
    case EquipmentEffectKind.FameGain:
      return "Fame Gain";
    case EquipmentEffectKind.DungeonCoinGain:
      return "Dungeon Coin Gain";
    case EquipmentEffectKind.ExtraAfterDamage:
      return "Extra After Damage";
    default:
      return kind;
  }
}
