import { Element } from "../../type/Element";
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

  monsterAttackElements: [
    [
      Element.Physical,
      Element.Physical,
      Element.Physical,
      Element.Physical,
      Element.Physical,
      Element.Physical,
      Element.Physical,
      Element.Physical,
    ],
    [Element.Ice, Element.Ice, Element.Thunder, Element.Fire, Element.Light, Element.Dark, Element.Fire, Element.Physical],

    [Element.Physical, Element.Ice, Element.Physical, Element.Fire, Element.Physical, Element.Dark, Element.Physical, Element.Physical],

    [Element.Fire, Element.Ice, Element.Thunder, Element.Fire, Element.Light, Element.Dark, Element.Dark, Element.Physical],

    [
      Element.Thunder,
      Element.Physical,
      Element.Thunder,
      Element.Physical,
      Element.Light,
      Element.Physical,
      Element.Thunder,
      Element.Physical,
    ],

    [Element.Physical, Element.Ice, Element.Physical, Element.Fire, Element.Physical, Element.Dark, Element.Physical, Element.Physical],

    [Element.Fire, Element.Ice, Element.Thunder, Element.Fire, Element.Light, Element.Dark, Element.Physical, Element.Physical],

    [Element.Physical, Element.Ice, Element.Physical, Element.Fire, Element.Physical, Element.Dark, Element.Physical, Element.Physical],

    [Element.Physical, Element.Ice, Element.Physical, Element.Fire, Element.Physical, Element.Dark, Element.Physical, Element.Physical],
    [Element.Physical],

    [
      Element.Physical,
      Element.Dark,
      Element.Physical,
      Element.Physical,
      Element.Fire,
      Element.Thunder,
      Element.Physical,
      Element.Physical,
      Element.Physical,
      Element.Physical,
    ],
  ],
  monsterStats: [
    [
      [10.0, 0.0, 0.5, 0.0, 0.0, 0.0, 5.0, -0.5, -0.5, -0.5, -0.5, -0.5],

      [20.0, 0.0, 0.75, 0.0, 0.0, 0.0, 5.0, -0.5, -0.5, -0.5, -0.5, -0.5],

      [10.0, 0.0, 0.5, 0.0, 0.0, 0.0, 7.5, -0.5, -0.5, -0.5, -0.5, -0.5],

      [20.0, 0.0, 1.25, 0.0, 0.0, 0.0, 2.5, -0.5, -0.5, -0.5, -0.5, -0.5],

      [30.0, 0.0, 0.75, 0.0, 5.0, 1.0, 10.0, -0.5, -0.5, -0.5, -0.5, -0.5],

      [50.0, 0.0, 2.5, 0.0, 5.0, 1.0, 2.5, -0.5, -0.5, -0.5, -0.5, -0.5],

      [200.0, 0.0, 2.5, 0.0, 20.0, 5.0, 5.0, -0.2, -0.2, -0.2, -0.2, -0.2],

      [1.0, 0.0, 0.1, 0.1, 1e300, 1e300, 10.0, 0.9, 0.9, 0.9, 0.9, 0.9],
    ],
    [
      [10.0, 0.0, 0.0, 0.5, 0.0, 0.0, 5.0, -0.5, -0.5, -0.5, -0.5, -0.5],

      [20.0, 0.0, 0.0, 0.75, 0.0, 0.0, 5.0, 0.0, 0.5, -0.5, 0.0, 0.0],

      [10.0, 0.0, 0.0, 0.5, 0.0, 0.0, 7.5, -0.5, 0.0, 0.5, 0.0, 0.0],

      [20.0, 0.0, 0.0, 1.25, 0.0, 0.0, 2.5, 0.5, -0.5, 0.0, 0.0, 0.0],

      [30.0, 0.0, 0.0, 0.75, 1.0, 5.0, 10.0, 0.0, 0.0, 0.0, 0.5, -0.5],

      [50.0, 0.0, 0.0, 2.5, 1.0, 5.0, 2.5, 0.0, 0.0, 0.0, -0.5, 0.5],

      [200.0, 0.0, 0.0, 2.5, 5.0, 20.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0],

      [2.0, 0.0, 0.1, 0.1, 1e300, 1e300, 10.0, 0.9, 0.9, 0.9, 0.9, 0.9],
    ],

    [
      [7.5, 0.0, 1.0, 0.0, 2.5, 0.5, 5.0, -0.2, 0.0, 0.0, -0.5, 0.5],

      [15.0, 0.0, 0.0, 1.0, 0.5, 2.5, 5.0, -0.2, 0.6, -0.4, -0.5, 0.5],

      [10.0, 0.0, 0.75, 0.0, 2.5, 0.5, 7.5, -0.6, 0.0, 0.6, -0.5, 0.5],

      [15.0, 0.0, 0.0, 1.5, 0.5, 2.5, 2.5, 0.4, -0.4, 0.0, -0.5, 0.5],

      [20.0, 0.0, 1.0, 0.0, 5.0, 1.0, 10.0, -0.2, 0.0, 0.0, -0.5, 0.5],

      [30.0, 0.0, 0.0, 3.0, 1.0, 5.0, 2.5, -0.2, 0.0, 0.0, -1.0, 0.9],

      [150.0, 0.0, 3.75, 0.0, 20.0, 20.0, 5.0, 0.5, 0.5, 0.5, -0.5, 0.5],

      [3.0, 0.0, 0.1, 0.1, 1e300, 1e300, 10.0, 0.9, 0.9, 0.9, 0.9, 0.9],
    ],

    [
      [7.5, 0.0, 0.5, 0.0, 2.5, 0.5, 20.0, -0.2, -0.2, -0.2, -0.5, 0.0],

      [15.0, 0.0, 0.5, 0.0, 2.5, 0.5, 20.0, -0.2, 0.5, -0.2, -0.5, 0.0],

      [10.0, 0.0, 0.4, 0.0, 2.5, 0.5, 30.0, -0.2, -0.2, 0.5, -0.5, 0.0],

      [15.0, 0.0, 1.0, 0.0, 2.5, 0.5, 10.0, 0.5, -0.2, -0.2, -0.5, 0.0],

      [20.0, 0.0, 0.6, 0.0, 5.0, 1.0, 40.0, -0.2, -0.2, -0.2, -0.2, 0.0],

      [30.0, 0.0, 1.5, 0.0, 5.0, 1.0, 10.0, -0.2, -0.2, -0.2, -0.5, 0.5],

      [150.0, 0.0, 2.0, 0.0, 20.0, 5.0, 40.0, 0.0, 0.0, 0.0, -0.5, 0.0],

      [4.0, 0.0, 0.1, 0.1, 1e300, 1e300, 10.0, 0.9, 0.9, 0.9, 0.9, 0.9],
    ],

    [
      [7.5, 0.0, 0.0, 0.5, 0.5, 2.5, 20.0, 0.0, 0.0, 0.0, 0.5, -0.5],

      [15.0, 0.0, 0.0, 0.5, 0.5, 2.5, 20.0, 0.0, 0.5, -0.2, 0.5, -0.5],

      [10.0, 0.0, 0.0, 0.4, 0.5, 2.5, 30.0, -0.2, 0.0, 0.5, 0.5, -0.5],

      [15.0, 0.0, 0.0, 1.0, 0.5, 2.5, 10.0, 0.5, -0.2, 0.0, 0.5, -0.5],

      [20.0, 0.0, 0.0, 0.6, 1.0, 5.0, 40.0, 0.0, 0.0, 0.0, 0.9, -0.5],

      [30.0, 0.0, 0.0, 1.5, 1.0, 5.0, 10.0, 0.0, 0.0, 0.0, 0.5, -0.2],

      [150.0, 0.0, 0.0, 2.0, 5.0, 20.0, 40.0, 0.2, 0.2, 0.2, 0.9, -0.2],

      [5.0, 0.0, 0.1, 0.1, 1e300, 1e300, 10.0, 0.9, 0.9, 0.9, 0.9, 0.9],
    ],

    [
      [10.0, 0.0, 0.0, 1.0, 1.0, 1.0, 5.0, -0.2, 0.1, 0.8, 0.5, -0.25],

      [20.0, 0.0, 1.5, 0.0, 1.0, 1.0, 5.0, -0.2, 0.1, 0.25, 0.5, -0.25],

      [10.0, 0.0, 0.0, 1.0, 1.0, 1.0, 7.5, -0.2, 0.1, 0.8, 0.5, -0.25],

      [20.0, 0.0, 2.5, 0.0, 1.0, 1.0, 2.5, -0.2, 0.1, 0.5, 0.5, -0.25],

      [30.0, 0.0, 0.0, 1.5, 2.0, 2.0, 10.0, -0.2, 0.1, 0.5, 0.9, -0.25],

      [50.0, 0.0, 5.0, 0.0, 2.0, 2.0, 2.5, -0.2, 0.1, 0.5, 0.5, -0.25],

      [200.0, 0.0, 0.0, 5.0, 5.0, 5.0, 5.0, 0.0, 0.5, 0.9, 0.9, -0.1],

      [6.0, 0.0, 0.1, 0.1, 1e300, 1e300, 10.0, 0.9, 0.9, 0.9, 0.9, 0.9],
    ],

    [
      [25.0, 0.0, 0.5, 0.0, 10.0, 10.0, 2.5, 0.5, 0.2, -0.5, -0.25, 0.8],

      [50.0, 0.0, 0.0, 0.75, 10.0, 10.0, 2.5, 0.5, 0.5, -0.5, -0.25, 0.8],

      [25.0, 0.0, 0.5, 0.0, 10.0, 10.0, 3.5, 0.5, 0.2, -0.5, -0.25, 0.8],

      [50.0, 0.0, 0.0, 1.25, 10.0, 10.0, 1.5, 0.5, 0.2, -0.5, -0.25, 0.8],

      [75.0, 0.0, 0.75, 0.0, 25.0, 25.0, 3.5, 0.5, 0.2, -0.5, -0.25, 0.8],

      [125.0, 0.0, 0.0, 2.5, 25.0, 25.0, 1.5, 0.5, 0.2, -0.5, -0.25, 0.9],

      [500.0, 0.0, 2.5, 0.0, 50.0, 50.0, 2.5, 0.9, 0.5, -0.2, 0.0, 0.9],

      [7.0, 0.0, 0.1, 0.1, 1e300, 1e300, 10.0, 0.9, 0.9, 0.9, 0.9, 0.9],
    ],

    [
      [50.0, 0.0, 0.75, 0.0, 40.0, 40.0, 2.0, -0.25, 0.2, 0.2, -0.25, 0.8],

      [100.0, 0.0, 1.0, 0.0, 40.0, 40.0, 2.0, -0.25, 0.2, 0.2, -0.25, 0.8],

      [50.0, 0.0, 0.75, 0.0, 40.0, 40.0, 3.0, -0.25, 0.2, 0.2, -0.25, 0.8],

      [100.0, 0.0, 1.5, 0.0, 40.0, 40.0, 1.25, -0.25, 0.2, 0.2, -0.25, 0.8],

      [150.0, 0.0, 1.0, 0.0, 100.0, 100.0, 3.0, -0.25, 0.2, 0.2, -0.25, 0.8],

      [250.0, 0.0, 3.0, 0.0, 100.0, 100.0, 1.25, -0.25, 0.2, 0.2, -0.25, 0.9],

      [1000.0, 0.0, 3.0, 0.0, 100.0, 100.0, 2.5, 0.0, 0.5, 0.5, 0.0, 0.9],

      [8.0, 0.0, 0.1, 0.1, 1e300, 1e300, 10.0, 0.9, 0.9, 0.9, 0.9, 0.9],
    ],

    [
      [10.0, 0.0, 0.0, 1.0, 0.0, 0.5, 10.0, 0.5, 0.5, 0.5, 0.5, 0.5],

      [20.0, 0.0, 0.0, 1.5, 0.0, 0.5, 10.0, 0.5, 0.9, 0.5, 0.5, 0.5],

      [10.0, 0.0, 0.0, 1.0, 0.0, 0.5, 15.0, 0.5, 0.5, 0.9, 0.5, 0.5],

      [20.0, 0.0, 0.0, 2.5, 0.0, 0.5, 5.0, 0.9, 0.5, 0.5, 0.5, 0.5],

      [30.0, 0.0, 0.0, 1.5, 0.0, 1.0, 20.0, 0.5, 0.5, 0.5, 0.9, 0.5],

      [50.0, 0.0, 0.0, 5.0, 0.0, 1.0, 5.0, 0.5, 0.5, 0.5, 0.5, 0.9],

      [200.0, 0.0, 5.0, 0.0, 1.0, 2.5, 10.0, 0.9, 0.9, 0.9, 0.9, 0.9],

      [9.0, 0.0, 0.1, 0.1, 1e300, 1e300, 10.0, 0.9, 0.9, 0.9, 0.9, 0.9],
    ],

    [
      [7.5, 0.0, 0.5, 2.5, 0.0, 0.0, 5.0, -0.2, 0.0, 0.0, -0.5, 0.5],

      [15.0, 0.0, 0.0, 1.0, 0.0, 2.5, 5.0, -0.6, 0.6, 0.0, -0.5, 0.5],

      [10.0, 0.0, 0.75, 0.0, 2.5, 0.0, 7.5, -0.2, 0.0, 0.0, -0.5, 0.5],

      [15.0, 0.0, 0.0, 1.5, 0.0, 2.5, 2.5, 0.4, -0.6, 0.0, -0.5, 0.5],

      [20.0, 0.0, 1.0, 0.0, 5.0, 0.0, 10.0, -0.2, 0.0, 0.0, -0.5, 0.5],

      [30.0, 0.0, 0.0, 3.0, 0.0, 5.0, 2.5, -0.2, 0.0, 0.0, -1.0, 0.9],

      [150.0, 0.0, 3.75, 0.0, 20.0, 20.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0],

      [0.3, 0.0, 0.1, 0.1, 1e300, 1e300, 10.0, 0.9, 0.9, 0.9, 0.9, 0.9],
    ],

    [[200.0, 0.0, 1.0, 0.0, 10.0, 10.0, 5.0, 0.0, 0.0, 0.0, 0.0, 0.0]],

    [
      [1000.0, 0.0, 3.5, 0.0, 10.0, 10.0, 2.5, 0.0, 0.0, 0.0, 0.0, 0.0],

      [850.0, 0.0, 0.0, 7.5, 100.0, 10.0, 2.5, 0.5, 0.5, 0.5, -0.5, 0.5],

      [2000.0, 0.0, 7.5, 7.5, 200.0, 200.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0],

      [1000.0, 0.0, 3.5, 0.0, 50.0, 10.0, 10.0 / 3.0, 0.0, 0.0, 0.0, -0.2, 0.5],

      [1200.0, 0.0, 0.0, 3.5, 50.0, 100.0, 4.0, 0.6, 0.6, 0.6, 0.9, 0.1],

      [2000.0, 0.0, 10.0, 10.0, 100.0, 100.0, 2.5, 0.5, 0.6, 0.9, 0.9, 0.3],

      [100000.0, 0.0, 10.0, 0.0, 200.0, 200.0, 2.5, 0.9, 0.9, 0.9, 0.9, 0.9],

      [2000.0, 0.0, 5.0, 5.0, 200.0, 200.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0],

      [2000.0, 0.0, 5.0, 5.0, 200.0, 200.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0],

      [2000.0, 0.0, 5.0, 5.0, 200.0, 200.0, 2.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    ],
  ],
};
