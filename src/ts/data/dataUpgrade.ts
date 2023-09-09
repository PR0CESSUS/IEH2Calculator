// import { SlimeBankUpgradeKind } from "../type/SlimeBankUpgradeKind";
import { UpgradeKind, UpgradeType } from "../type/UpgradeKind";

export const dataUpgrade: UpgradeKind = {
  Resource: {
    effect: () => 1,
    cost: (level, id, resourceCostIncrementPerLevelReduction) =>
      20.0 * Math.pow(5.0, id) * Math.pow(1.0 + (Math.pow(1.1 + 0.125 * id, 0.5) - 1.0) * (1.0 - resourceCostIncrementPerLevelReduction), level),
  },
  BasicStats: {
    HP: {
      effect: (level, statsMultiplier) => level * 25.0 * statsMultiplier,
      cost: (level) => 100.0 * Math.pow(1000.0, level / 4.0),
    },
    MP: {
      effect: (level, statsMultiplier) => level * 10.0 * statsMultiplier,
      cost: (level) => 100.0 * Math.pow(1000.0, level / 4.0),
    },
    ATK: {
      effect: (level, statsMultiplier) => level * statsMultiplier,
      cost: (level) => 100.0 * Math.pow(1000.0, level / 4.0),
    },
    MATK: {
      effect: (level, statsMultiplier) => level * statsMultiplier,
      cost: (level) => 100.0 * Math.pow(1000.0, level / 4.0),
    },
    DEF: {
      effect: (level, statsMultiplier) => level * statsMultiplier,
      cost: (level) => 100.0 * Math.pow(1000.0, level / 4.0),
    },
    MDEF: {
      effect: (level, statsMultiplier) => level * statsMultiplier,
      cost: (level) => 100.0 * Math.pow(1000.0, level / 4.0),
    },
    SPD: {
      effect: (level, statsMultiplier) => level * statsMultiplier,
      cost: (level) => 100.0 * Math.pow(1000.0, level / 4.0),
    },
  },
  GoldGain: { effect: (level, statsMultiplier) => level * statsMultiplier, cost: (level) => 200.0 * Math.pow(1.5, level) },
  ExpGain: { effect: (level, statsMultiplier) => level * 5 * statsMultiplier, cost: (level, CostModifier) => 200 * CostModifier },
  GoldCap: {
    Stone: {
      effect: (level, goldcapMultiplier, goldcapMultiplier2) => level * 50 * goldcapMultiplier * goldcapMultiplier2,
      cost: (level) => 1000.0 * Math.pow(2.0, level / 5.0),
    },
    Crystal: {
      effect: (level, goldcapMultiplier, goldcapMultiplier2) => level * 50 * goldcapMultiplier * goldcapMultiplier2,
      cost: (level) => 1000.0 * Math.pow(2.0, level / 5.0),
    },
    Leaf: {
      effect: (level, goldcapMultiplier, goldcapMultiplier2) => level * 50 * goldcapMultiplier * goldcapMultiplier2,
      cost: (level) => 1000.0 * Math.pow(2.0, level / 5.0),
    },
  },
  SlimeBank: {
    SlimeCoinCap: {
      effect: (level) => 10000.0 + 10000.0 * level + 10.0 * Math.pow(level, 2.0),
      cost: function (level) {
        if (level >= 500000000000000) {
          return 1.0e27;
        }
        if (level >= 100000000000000) {
          return 1.0e26;
        }
        if (level >= 50000000000000) {
          return 1.0e25;
        }
        if (level >= 10000000000000) {
          return 1.0e24;
        }
        if (level >= 5000000000000) {
          return 1.0e23;
        }
        if (level >= 1000000000000) {
          return 1.0e22;
        }
        if (level >= 500000000000) {
          return 1.0e21;
        }
        if (level >= 100000000000) {
          return 1.0e20;
        }
        if (level >= 50000000000) {
          return 1.0e19;
        }
        if (level >= 10_000_000_000) {
          return 1.0e18;
        }
        if (level >= 5000000000) {
          return 1.0e17;
        }
        if (level >= 1_000_000_000) {
          return 1.0e16;
        }
        if (level >= 500000000) {
          return 1.0e15;
        }
        if (level >= 100_000_000) {
          return 100000000000000;
        }
        if (level >= 50000000) {
          return 10000000000000;
        }
        if (level >= 10000000) {
          return 1000000000000;
        }
        return level * 10000 + 10000;
      },
    },
    SlimeCoinEfficiency: { effect: (level) => 0.0005 + level * 0.00025, cost: (level) => 7500.0 * Math.pow(2.0, level) },
    UpgradeCostReduction: { effect: (level) => level * (1.0 / 400.0), cost: (level) => 100.0 * Math.pow(1.35, level) },
    ResourceBooster: { effect: (level) => level * 0.25, cost: (level) => 500.0 * Math.pow(1.2, level) },
    StatsBooster: { effect: (level) => level * 0.2, cost: (level) => 1000.0 * Math.pow(1.5, level) },
    GoldCapBooster: { effect: (level) => level * 0.2, cost: (level) => 2000.0 * Math.pow(1.5, level) },
    MysteriousWaterGain: { effect: (level) => level * 0.002, cost: (level) => 2000.0 * Math.pow(1.25, level) },
    MaterialFinder: { effect: (level) => level * 0.05, cost: (level) => 5000.0 * Math.pow(1.5, level) },
    ShopTimer: { effect: (level) => Math.min(590, level * 5), cost: (level) => 10000.0 * Math.pow(1.2, level) },
    ResearchPower: { effect: (level) => level * 0.1, cost: (level) => 5000.0 * Math.pow(1.25, level) },
    SPD: { effect: (level) => 5 * level, cost: (level) => 1000.0 * Math.pow(1.1, level) },
    FireRes: { effect: (level) => level * (1.0 / 400.0), cost: (level) => 500.0 * Math.pow(1.25, level) },
    IceRes: { effect: (level) => level * (1.0 / 400.0), cost: (level) => 500.0 * Math.pow(1.25, level) },
    ThunderRes: { effect: (level) => level * (1.0 / 400.0), cost: (level) => 500.0 * Math.pow(1.25, level) },
    LightRes: { effect: (level) => level * (1.0 / 400.0), cost: (level) => 500.0 * Math.pow(1.25, level) },
    DarkRes: { effect: (level) => level * (1.0 / 400.0), cost: (level) => 500.0 * Math.pow(1.25, level) },
    DebuffRes: { effect: (level) => level * (1.0 / 400.0), cost: (level) => 4000.0 * Math.pow(1.25, level) },
    SkillProf: { effect: (level) => level * 0.05, cost: (level) => 10000.0 * Math.pow(1.2, level) },
    EquipmentProf: { effect: (level) => level * 0.05, cost: (level) => 10000.0 * Math.pow(1.2, level) },
    CritDamage: { effect: (level) => 0.025 * level, cost: (level) => 50000.0 * Math.pow(1.1, level) },
    GoldGain: { effect: (level) => level * 0.01, cost: (level) => 100.0 * Math.pow(1.1, level) },
    SlimeCoinCap2: { effect: (level) => 0.1 * Math.pow(level, 2.0), cost: (level) => 10000000000.0 * Math.pow(2.0, level) },
  },
  EquipmentInventory: { effect: (level) => level, cost: (level) => 5000.0 * Math.pow(10.0, level / 5.0) },
};
