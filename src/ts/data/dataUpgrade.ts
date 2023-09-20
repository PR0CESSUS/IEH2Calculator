import { UpgradeKind, slimeBankUpgradeKind, SlimeBankUpgradeKind, BasicStatsKind, basicStatsKind } from "../type/UpgradeKind";
import { SourceKind } from "../type/SourceKind";
import { DataType } from "../type/DataType";
import { resourceKind } from "../type/ResourceKind";
import { DATA } from "../Data";
export class DataUpgrade implements UpgradeKind {
  Resource: any;
  BasicStats: any;
  GoldGain: any;
  ExpGain: any;
  GoldCap: any;
  SlimeBank: SlimeBankUpgradeKind;
  EquipmentInventory: any;
  constructor(data: DataType) {
    // data.pet.isInitialized = false;
    // console.log("data.isInitialized:", data.isInitialized);
    // console.log("data.upgrade.isInitialized:", data?.upgrade?.isInitialized);
    const dataUpgrade: UpgradeKind = {
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
    this.SlimeBank = {};
    for (let index = 0; index < slimeBankUpgradeKind.length; index++) {
      const slimeBankUpgrade = slimeBankUpgradeKind[index];
      this.SlimeBank[slimeBankUpgrade] = {
        get level() {
          return data.source.upgradeLevelsSlimebank[index];
        },
        set level(value) {
          data.source.upgradeLevelsSlimebank[index] = value;
        },
        get cost() {
          return dataUpgrade.SlimeBank[slimeBankUpgrade].cost(data.source.upgradeLevelsSlimebank[index]);
        },
        get effect() {
          return dataUpgrade.SlimeBank[slimeBankUpgrade].effect(data.source.upgradeLevelsSlimebank[index]);
        }, // 1 = statsMultiplier
      };
    }
    // this.GoldCap = this.getValue("GoldCap", data.source.upgradeLevelsGoldCap);
    this.GoldGain = {
      get level() {
        return data.source.upgradeLevelsGoldGain;
      },
      set level(value) {
        data.source.upgradeLevelsGoldGain = value;
      },
      get cost() {
        return dataUpgrade.GoldGain.cost(data.source.upgradeLevelsGoldGain);
      },
      get effect() {
        return dataUpgrade.GoldGain.effect(data.source.upgradeLevelsGoldGain, 1);
      }, // 1 = statsMultiplier
    };
    this.ExpGain = {
      get level() {
        return data.source.upgradeLevelsExpGain;
      },
      set level(value) {
        data.source.upgradeLevelsExpGain = value;
      },
      get cost() {
        return dataUpgrade.ExpGain.cost(data.source.upgradeLevelsExpGain, 1);
      }, // CostModifier
      get effect() {
        return dataUpgrade.ExpGain.effect(data.source.upgradeLevelsExpGain, 1);
      }, // 1 = statsMultiplier
    };
    this.EquipmentInventory = {
      get level() {
        return data.source.upgradeLevelsEquipmentInventory;
      },
      set level(value) {
        data.source.upgradeLevelsEquipmentInventory = value;
      },
      get cost() {
        return dataUpgrade.EquipmentInventory.cost(data.source.upgradeLevelsEquipmentInventory);
      },
      get effect() {
        return dataUpgrade.EquipmentInventory.effect(data.source.upgradeLevelsEquipmentInventory);
      }, // 1 = statsMultiplier
    };
    this.BasicStats = {};
    for (let index = 0; index < basicStatsKind.length; index++) {
      const basicStat = basicStatsKind[index];
      this.BasicStats[basicStat] = {
        get level() {
          return data.source.upgradeLevelsBasicStats[index];
        },
        set level(value) {
          data.source.upgradeLevelsBasicStats[index] = value;
        },
        get cost() {
          return dataUpgrade.BasicStats[basicStat].cost(data.source.upgradeLevelsBasicStats[index]);
        },
        get effect() {
          return dataUpgrade.BasicStats[basicStat].effect(data.source.upgradeLevelsBasicStats[index], 1);
        }, // 1 = statsMultiplier
      };
    }

    //
    this.GoldCap = {};
    for (let index = 0; index < resourceKind.length; index++) {
      const resource = resourceKind[index];
      this.GoldCap[resource] = {
        get level() {
          return data.source.upgradeLevelsGoldCap[index];
        },
        set level(value) {
          data.source.upgradeLevelsGoldCap[index] = value;
        },
        get cost() {
          return dataUpgrade.GoldCap[resource].cost(data.source.upgradeLevelsGoldCap[index]);
        },
        get effect() {
          return dataUpgrade.GoldCap[resource].effect(data.source.upgradeLevelsGoldCap[index], 1, 1);
        }, // 1 = statsMultiplier
      };
    }
    this.Resource = {};
    for (let index = 0; index < data.source.upgradeLevelsResource.length; index++) {
      const upgrade = "ResourceGain" + (index + 1);
      this.Resource[upgrade] = {
        get level() {
          return data.source.upgradeLevelsResource[index];
        },
        set level(value) {
          data.source.upgradeLevelsResource[index] = value;
        },
        get cost() {
          return dataUpgrade.Resource.cost(data.source.upgradeLevelsResource[index], index, 1); // resourceCostIncrementPerLevelReduction
        },
        get effect() {
          return dataUpgrade.Resource.effect();
        }, // 1 = statsMultiplier
      };
    }
    // cleaning up consumed data
    // delete data.source.upgradeLevelsSlimebank;
    // delete data.source.upgradeLevelsGoldCap;
    // delete data.source.upgradeLevelsGoldGain;
    // delete data.source.upgradeLevelsExpGain;
    // delete data.source.upgradeLevelsEquipmentInventory;
    // delete data.source.upgradeLevelsBasicStats;
    // delete data.source.upgradeLevelsResource;
  }

  // update(endpoint) {
  //   // fixit for jus key access
  //   let path = endpoint.split(".").slice(0, -1).slice(1);
  //   let key = path[0];
  //   let upgrade = path[1];
  //   if (upgrade) {
  //     this[key][upgrade].effect = dataUpgrade[key][upgrade].effect(this[key][upgrade].level, 1, 1);
  //     this[key][upgrade].cost = dataUpgrade[key][upgrade].cost(this[key][upgrade].level, 1, 1);
  //   } else {
  //     switch (key) {
  //       case "GoldGain":
  //         this[key].effect = dataUpgrade[key].effect(this[key].level, 1);
  //         this[key].cost = dataUpgrade[key].cost(this[key].level);
  //         break;
  //       case "ExpGain":
  //         console.log(this[key].level);

  //         this[key].effect = dataUpgrade[key].effect(this[key].level, 1);
  //         this[key].cost = dataUpgrade[key].cost(this[key].level, 1);
  //         break;
  //       case "GoldCap":
  //         this[key].effect = dataUpgrade[key].effect(this[key].level, 1, 1);
  //         this[key].cost = dataUpgrade[key].cost(this[key].level);
  //         break;
  //       default:
  //         this[key].effect = dataUpgrade[key].effect(this[key].level);
  //         this[key].cost = dataUpgrade[key].cost(this[key].level);
  //         break;
  //     }
  //   }

  //   // console.log(endpoint);
  // }

  getHtml() {
    let html = "";
    const list = ["Resource", "BasicStats", "GoldGain", "ExpGain", "GoldCap", "SlimeBank", "EquipmentInventory"];
    html += `<table>  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Level</th>
      <th scope="col">Effect</th>
      <th scope="col">Cost</th>
    </tr>
  </thead>`;

    for (let index = 0; index < list.length; index++) {
      const name = list[index];
      if (this[name].level) {
        html += `<tr><td>${name}</td><td><input type='text' data-endpoint='upgrade.${name}.level'></td>`;
        html += `<td><span data-endpoint='upgrade.${name}.effect' data-precision='3'></span></td>`;
        html += `<td><span data-endpoint='upgrade.${name}.cost' data-precision='3'></span></td></tr>`;
      } else {
        const subList = Object.keys(this[name]);
        for (let index = 0; index < subList.length; index++) {
          const element = subList[index];
          html += `<tr><td>${name}.${element}</td><td><input type='text' data-endpoint='upgrade.${name}.${element}.level'></td>`;
          html += `<td><span data-endpoint='upgrade.${name}.${element}.effect' data-precision='3'></span></td>`;
          html += `<td><span data-endpoint='upgrade.${name}.${element}.cost' data-precision='3'></span></td></tr>`;
        }
      }
    }

    html += "</table>";
    return html;
  }
}
