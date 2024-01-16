import { GuildAbilityKind } from "../../type/GuildAbilityKind";
import { HeroKind } from "../../type/HeroKind";

export const GuildParameter = {
  maxGuildLevel: 300,
  maxGuildLevelCap: 500,
  FameGainPerHeroGrade: (grade) => (grade >= 153 ? 1010 + 10 * (grade - 153) : 5.0 + Math.floor(5.0 * Math.pow(2.0, grade / 20.0))),
  ExpGainPerHeroLevel: (level) => 200.0 + level * 5.0,
  RequiredExp: (level) =>
    Math.floor(
      (500.0 * (level + 1) +
        50.0 * Math.pow(level, 2.0) +
        500.0 * Math.pow(level / 5.0, 3.0) +
        2000.0 * Math.pow(level / 10.0, 6.0) +
        25000.0 * Math.pow(level / 20.0, 9.0) +
        300000.0 * Math.pow(level / 30.0, 12.0)) *
        Math.pow(10.0, Math.max(0, level - 300) / 25.0)
    ),
  MemberUnlockLevel: (heroKind) => {
    switch (heroKind) {
      case HeroKind.Warrior:
        return 0;
      case HeroKind.Wizard:
        return 5;
      case HeroKind.Angel:
        return 10;
      case HeroKind.Thief:
        return 30;
      case HeroKind.Archer:
        return 45;
      case HeroKind.Tamer:
        return 60;
      default:
        return 100;
    }
  },
  AbilityEffectValue: (kind, level) => {
    switch (kind) {
      case GuildAbilityKind.StoneGain:
        return Math.pow(2.0, level) - 1.0;
      case GuildAbilityKind.CrystalGain:
        return Math.pow(2.0, level) - 1.0;
      case GuildAbilityKind.LeafGain:
        return Math.pow(2.0, level) - 1.0;
      case GuildAbilityKind.GuildExpGain:
        return level * 0.1;
      case GuildAbilityKind.EquipmentInventory:
        return 3 * level;
      case GuildAbilityKind.EnchantInventory:
        return level;
      case GuildAbilityKind.PotionInventory:
        return 2 * level;
      case GuildAbilityKind.MysteriousWater:
        return 0.1 * level;
      case GuildAbilityKind.SkillProficiency:
        return 0.1 * level;
      case GuildAbilityKind.GlobalSkillSlot:
        return level;
      case GuildAbilityKind.GoldCap:
        return 0.1 * level;
      case GuildAbilityKind.GoldGain:
        return 0.1 * level;
      case GuildAbilityKind.Trapping:
        return 0.1 * level;
      case GuildAbilityKind.UpgradeCost:
        return 0.05 * level;
      case GuildAbilityKind.PhysicalAbsorption:
        return 0.01 * level;
      case GuildAbilityKind.MagicalAbsoption:
        return 0.01 * level;
      case GuildAbilityKind.ExpGain:
        return 0.1 * level;
      case GuildAbilityKind.EquipmentProficiency:
        return 0.2 * level;
      case GuildAbilityKind.MaterialDrop:
        return level;
      case GuildAbilityKind.NitroCap:
        return 1000 * level;
      default:
        return 0.0;
    }
  },
};
