import { PetPassiveEffectKind } from "../../type/PetPassiveEffectKind";

export const MonsterParameter = {
  colorDropChanceBase: 0.001,
  dropChanceBase: 0.01,

  PetPassiveEffectMaxValue(kind: PetPassiveEffectKind) {
    switch (kind) {
      case PetPassiveEffectKind.DoubleMaterialChance:
        return 1.0;
      case PetPassiveEffectKind.DisassembleTownMatGain:
        return 10.0;
      case PetPassiveEffectKind.ChestPortalOrbChance:
        return 0.005;
      default:
        return 1e300;
    }
  },
  PetPassiveEffectValue(kind: PetPassiveEffectKind, rank: number) {
    switch (kind) {
      case PetPassiveEffectKind.ResourceGain:
        return 0.1 * rank;
      case PetPassiveEffectKind.PotionEffect:
        return 0.005 * rank;
      case PetPassiveEffectKind.TamingPointGain:
        return 0.05 * rank;
      case PetPassiveEffectKind.GoldCap:
        return 0.025 * rank;
      case PetPassiveEffectKind.GoldGain:
        return 0.025 * rank;
      case PetPassiveEffectKind.ExpGain:
        return 0.1 * rank;
      case PetPassiveEffectKind.DoubleMaterialChance:
        return 0.0005 * rank;
      case PetPassiveEffectKind.GoldGainOnDisassemblePotion:
        return 0.05 * rank;
      case PetPassiveEffectKind.DisassembleTownMatGain:
        return 0.01 * rank;
      case PetPassiveEffectKind.TownMatGainFromDungeonReward:
        return 0.01 * rank;
      case PetPassiveEffectKind.OilOfSlimeDropChance:
        return 0.001 * rank;
      case PetPassiveEffectKind.EnchantedClothDropChance:
        return 0.001 * rank;
      case PetPassiveEffectKind.SpiderSilkDropChance:
        return 0.001 * rank;
      case PetPassiveEffectKind.BatWingDropChance:
        return 0.001 * rank;
      case PetPassiveEffectKind.FairyDustDropChance:
        return 0.001 * rank;
      case PetPassiveEffectKind.FoxTailDropChance:
        return 0.001 * rank;
      case PetPassiveEffectKind.FishScalesDropChance:
        return 0.001 * rank;
      case PetPassiveEffectKind.CarvedBranchDropChance:
        return 0.001 * rank;
      case PetPassiveEffectKind.ThickFurDropChance:
        return 0.001 * rank;
      case PetPassiveEffectKind.UnicornHornDropChance:
        return 0.001 * rank;
      case PetPassiveEffectKind.EquipProfGain:
        return 0.01 * rank;
      case PetPassiveEffectKind.MysteriousWaterGain:
        return 0.01 * rank;
      case PetPassiveEffectKind.ChestPortalOrbChance:
        return 1e-6 * rank;
      case PetPassiveEffectKind.SkillProfGain:
        return 0.01 * rank;
      case PetPassiveEffectKind.TownMatGain:
        return 0.01 * rank;
      case PetPassiveEffectKind.ResearchPowerStone:
        return 0.025 * rank;
      case PetPassiveEffectKind.ResearchPowerCrystal:
        return 0.025 * rank;
      case PetPassiveEffectKind.ResearchPowerLeaf:
        return 0.025 * rank;
      case PetPassiveEffectKind.CatalystCriticalChance:
        return 0.01 * rank;
      case PetPassiveEffectKind.MysteriousWaterCap:
        return 2 * rank;
      case PetPassiveEffectKind.BlessingEffect:
        return 0.02 * rank;
      case PetPassiveEffectKind.LoyaltyPointGain:
        return 0.025 * rank;
      case PetPassiveEffectKind.PetExpGain:
        return 0.05 * rank;
      case PetPassiveEffectKind.ExpeditionExpGain:
        return 0.005 * rank;
      case PetPassiveEffectKind.EssenceConversionRate:
        return 0.005 * rank;
      case PetPassiveEffectKind.SlimeCoinEfficiency:
        return 0.005 * rank;
      case PetPassiveEffectKind.SlimeCoinCap:
        return 0.025 * rank;
      case PetPassiveEffectKind.EquipmentEffect:
        return 0.001 * rank;
      case PetPassiveEffectKind.AlchemyPointGain:
        return 0.01 * rank;
      default:
        return 0.0;
    }
  },

  petPassiveEffectKinds: [
    [
      PetPassiveEffectKind.ResourceGain,
      PetPassiveEffectKind.DoubleMaterialChance,
      PetPassiveEffectKind.OilOfSlimeDropChance,
      PetPassiveEffectKind.EquipProfGain,
      PetPassiveEffectKind.TownMatGain,
      PetPassiveEffectKind.GoldGain,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
    ],
    [
      PetPassiveEffectKind.PotionEffect,
      PetPassiveEffectKind.GoldGainOnDisassemblePotion,
      PetPassiveEffectKind.EnchantedClothDropChance,
      PetPassiveEffectKind.MysteriousWaterGain,
      PetPassiveEffectKind.ResearchPowerStone,
      PetPassiveEffectKind.ResearchPowerLeaf,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
    ],
    [
      PetPassiveEffectKind.TamingPointGain,
      PetPassiveEffectKind.TamingPointGain,
      PetPassiveEffectKind.SpiderSilkDropChance,
      PetPassiveEffectKind.TamingPointGain,
      PetPassiveEffectKind.TamingPointGain,
      PetPassiveEffectKind.TamingPointGain,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
    ],
    [
      PetPassiveEffectKind.GoldCap,
      PetPassiveEffectKind.DisassembleTownMatGain,
      PetPassiveEffectKind.BatWingDropChance,
      PetPassiveEffectKind.DisassembleTownMatGain,
      PetPassiveEffectKind.ResearchPowerCrystal,
      PetPassiveEffectKind.ResearchPowerCrystal,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
    ],
    [
      PetPassiveEffectKind.ExpGain,
      PetPassiveEffectKind.TownMatGainFromDungeonReward,
      PetPassiveEffectKind.FairyDustDropChance,
      PetPassiveEffectKind.ChestPortalOrbChance,
      PetPassiveEffectKind.TamingPointGain,
      PetPassiveEffectKind.TamingPointGain,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
    ],
    [
      PetPassiveEffectKind.GoldGain,
      PetPassiveEffectKind.DisassembleTownMatGain,
      PetPassiveEffectKind.FoxTailDropChance,
      PetPassiveEffectKind.SkillProfGain,
      PetPassiveEffectKind.ResearchPowerLeaf,
      PetPassiveEffectKind.ResearchPowerStone,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
    ],
    [
      PetPassiveEffectKind.CatalystCriticalChance,
      PetPassiveEffectKind.MysteriousWaterCap,
      PetPassiveEffectKind.FishScalesDropChance,
      PetPassiveEffectKind.PotionEffect,
      PetPassiveEffectKind.BlessingEffect,
      PetPassiveEffectKind.LoyaltyPointGain,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
    ],
    [
      PetPassiveEffectKind.ResourceGain,
      PetPassiveEffectKind.PetExpGain,
      PetPassiveEffectKind.CarvedBranchDropChance,
      PetPassiveEffectKind.SkillProfGain,
      PetPassiveEffectKind.LoyaltyPointGain,
      PetPassiveEffectKind.ExpeditionExpGain,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
    ],
    [
      PetPassiveEffectKind.EssenceConversionRate,
      PetPassiveEffectKind.SlimeCoinEfficiency,
      PetPassiveEffectKind.ThickFurDropChance,
      PetPassiveEffectKind.SlimeCoinCap,
      PetPassiveEffectKind.EquipmentEffect,
      PetPassiveEffectKind.AlchemyPointGain,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
    ],
    [
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.UnicornHornDropChance,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
      PetPassiveEffectKind.Nothing,
    ],
    [PetPassiveEffectKind.DisassembleTownMatGain, PetPassiveEffectKind.SpiderSilkDropChance],
  ],
};
