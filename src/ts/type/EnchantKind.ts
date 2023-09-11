export const enchantKind = [
  "Nothing", //adds an empty enchant slot
  "HPAdder",
  "MPAdder",
  "ATKAdder",
  "MATKAdder",
  "DEFAdder",
  "MDEFAdder",
  "SPDAdder",
  "HPMultiplier",
  "MPMultiplier",
  "ATKMultiplier",
  "MATKMultiplier",
  "DEFMultiplier",
  "MDEFMultiplier",
  "ATKPropotion",
  "MATKPropotion",
  "DEFPropotion",
  "MDEFPropotion",
  "FireResistance",
  "IceResistance",
  "ThunderResistance",
  "LightResistance",
  "DarkResistance",
  "PhysicalAbsorption",
  "FireAbsorption",
  "IceAbsorption",
  "ThunderAbsorption",
  "LightAbsorption",
  "DarkAbsorption",
  "DebuffResistance",
  "EquipmentDropChance",
  "SlimeDropChance",
  "MagicSlimeDropChance",
  "SpiderDropChance",
  "BatDropChance",
  "FairyDropChance",
  "FoxDropChance",
  "DevilFishDropChance",
  "TreantDropChance",
  "FlameTigerDropChance",
  "UnicornDropChance",
  "ColorMaterialDropChance",
  "PhysicalCritical",
  "MagicalCritical",
  "EXPGain",
  "SkillProficiency",
  "EquipmentProficiency",
  "MoveSpeedMultiplier",
  "GoldGain",
  "StoneGain",
  "CrystalGain",
  "LeafGain",
  "WarriorSkillLevel",
  "WizardSkillLevel",
  "AngelSkillLevel",
  "ThiefSkillLevel",
  "ArcherSkillLevel",
  "TamerSkillLevel",
  "AllSkillLevel",
  "SlimeKnowledge",
  "MagicSlimeKnowledge",
  "SpiderKnowledge",
  "BatKnowledge",
  "FairyKnowledge",
  "FoxKnowledge",
  "DevilFishKnowledge",
  "TreantKnowledge",
  "FlameTigerKnowledge",
  "UnicornKnowledge",
  "PhysicalDamage",
  "FireDamage",
  "IceDamage",
  "ThunderDamage",
  "LightDamage",
  "DarkDamage",
  "HpRegen",
  "MpRegen",
  "TamingPoint",
  "WarriorSkillRange",
  "WizardSkillRange",
  "AngelSkillRange",
  "ThiefSkillRange",
  "ArcherSkillRange",
  "TamerSkillRange",
  "TownMatGain",
  "TownMatAreaClearGain",
  "RebirthPointGain1",
  "RebirthPointGain2",
  "RebirthPointGain3",
  "CriticalDamage",
  "BlessingEffect",
  "MoveSpeedAdder",
  "PetEXPGain",
  "LoyaltyPointGain",
  "CatalystDoubleCriticalChance",
  "WarriorSkillEffectRange",
  "WizardSkillEffectRange",
  "AngelSkillEffectRange",
  "ThiefSkillEffectRange",
  "ArcherSkillEffectRange",
  "TamerSkillEffectRange",
  "HpRegenMultiplier",
  "MpRegenMultiplier",
  "ArmoredFury",
  "WardedFury",
  "PetPhysicalCriticalChance",
  "PetMagicalCriticalChance",
  "PetCriticalDamage",
  "PetDebuffResistance",
  "StoneTownResearchPower",
  "CrystalTownResearchPower",
  "LeafTownResearchPower",
  "GuildEXPGain",
  "SPDMultiplier",
  "CriticalDamageMultiplier",
  "SkillProficiencyMultiplier",
  "EquipmentProficiencyMultiplier",
  "EXPGainMultiplier",
  "GoldGainMultiplier",
  "PhysicalDamageMultiplier",
  "FireDamageMultiplier",
  "IceDamageMultiplier",
  "ThunderDamageMultiplier",
  "LightDamageMultiplier",
  "DarkDamageMultiplier",
  "TamingPointMultiplier",
  "PetEXPGainMultiplier",
  "LoyaltyPointGainMultiplier",
  "BlessingEffectMultiplier",
  "PhysicalCriticalMultiplier",
  "MagicalCriticalMultiplier",
  "ChallengeBossKnowledge",
] as const;

export type EnchantKind = (typeof enchantKind)[number];
