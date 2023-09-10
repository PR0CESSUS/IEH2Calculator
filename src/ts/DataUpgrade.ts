import { UpgradeKind, slimeBankUpgradeKind, SlimeBankUpgradeKind, BasicStatsKind, basicStatsKind } from "./type/UpgradeKind";
import { SourceKind } from "./type/SourceKind";
import { DataType } from "./type/DataType";
import { resourceKind } from "./type/ResourceKind";
import { dataUpgrade } from "./data/dataUpgrade";
import { DATA } from "./Data";
export class DataUpgrade implements UpgradeKind {
  Resource: any;
  BasicStats: BasicStatsKind;
  GoldGain: any;
  ExpGain: any;
  GoldCap: any;
  SlimeBank: SlimeBankUpgradeKind;
  EquipmentInventory: any;
  constructor(data: DataType) {
    this.initialization(data);
  }
  initialization(data: DataType) {
    // data.pet.isInitialized = false;
    // console.log("data.isInitialized:", data.isInitialized);
    // console.log("data.upgrade.isInitialized:", data?.upgrade?.isInitialized);
    if (data.isInitialized) {
      for (const [key, value] of Object.entries(data.localStorage.upgrade)) {
        this[key] = value;
      }
    } else if (data.source.isInitialized) {
      this.SlimeBank = this.getValue("SlimeBank", data.source.upgradeLevelsSlimebank);
      this.GoldCap = this.getValue("GoldCap", data.source.upgradeLevelsGoldCap);
      this.GoldGain = this.getValue("GoldGain", data.source.upgradeLevelsGoldGain);
      this.ExpGain = this.getValue("GoldGain", data.source.upgradeLevelsExpGain);
      this.EquipmentInventory = this.getValue("GoldGain", data.source.upgradeLevelsEquipmentInventory);
      this.BasicStats = this.getValue("BasicStats", data.source.upgradeLevelsBasicStats);
      this.Resource = this.getValue("Resource", data.source.upgradeLevelsResource);

      // cleaning up consumed data
      delete data.source.upgradeLevelsSlimebank;
      delete data.source.upgradeLevelsGoldCap;
      delete data.source.upgradeLevelsGoldGain;
      delete data.source.upgradeLevelsExpGain;
      delete data.source.upgradeLevelsEquipmentInventory;
      delete data.source.upgradeLevelsBasicStats;
      delete data.source.upgradeLevelsResource;
    }
  }

  getValue(key, data) {
    let dataset = {} as any;
    let kind = null;
    switch (key) {
      case "GoldGain":
        return {
          level: data,
          cost: dataUpgrade[key].cost(data),
          effect: dataUpgrade[key].effect(data, 1), // 1 = statsMultiplier
        };
      case "EquipmentInventory":
        return {
          level: data,
          cost: dataUpgrade[key].cost(data),
          effect: dataUpgrade[key].effect(data),
        };
      case "ExpGain":
        return {
          level: data,
          cost: dataUpgrade[key].cost(data, 1), // CostModifier
          effect: dataUpgrade[key].effect(data, 1), // 1 = statsMultiplier
        };
      case "GoldCap":
        dataset = {};
        kind = resourceKind;
        for (let index = 0; index < data.length; index++) {
          dataset[kind[index]] = {
            level: data[index],
            effect: dataUpgrade[key][kind[index]].effect(data[index], 1, 1),
            cost: dataUpgrade[key][kind[index]].cost(data[index]),
          };
        }
        return dataset;
      case "SlimeBank":
        dataset = {};
        kind = slimeBankUpgradeKind;
        for (let index = 0; index < data.length; index++) {
          dataset[kind[index]] = {
            level: data[index],
            effect: dataUpgrade[key][kind[index]].effect(data[index]), // statsMultiplier
            cost: dataUpgrade[key][kind[index]].cost(data[index]),
          };
        }
        return dataset;
      case "BasicStats":
        dataset = {};
        kind = basicStatsKind;
        for (let index = 0; index < data.length - 1; index++) {
          dataset[kind[index]] = {
            level: data[index],
            effect: dataUpgrade[key][kind[index]].effect(data[index], 1),
            cost: dataUpgrade[key][kind[index]].cost(data[index]),
          };
        }
        return dataset;
      case "Resource":
        dataset = {};

        for (let index = 0; index < data.length; index++) {
          const name = "ResourceGain" + (index + 1);

          dataset[name] = {
            level: data[index],
            cost: dataUpgrade[key].cost(data[index], index, 1), // resourceCostIncrementPerLevelReduction
            effect: dataUpgrade[key].effect(),
          };
        }
        return dataset;
      default:
        break;
    }
  }

  update(endpoint) {
    // fixit for jus key access
    let path = endpoint.split(".").slice(0, -1).slice(1);
    let key = path[0];
    let upgrade = path[1];
    if (upgrade) {
      this[key][upgrade].effect = dataUpgrade[key][upgrade].effect(this[key][upgrade].level, 1, 1);
      this[key][upgrade].cost = dataUpgrade[key][upgrade].cost(this[key][upgrade].level, 1, 1);
    } else {
      switch (key) {
        case "GoldGain":
          this[key].effect = dataUpgrade[key].effect(this[key].level, 1);
          this[key].cost = dataUpgrade[key].cost(this[key].level);
          break;
        case "ExpGain":
          console.log(this[key].level);

          this[key].effect = dataUpgrade[key].effect(this[key].level, 1);
          this[key].cost = dataUpgrade[key].cost(this[key].level, 1);
          break;
        case "GoldCap":
          this[key].effect = dataUpgrade[key].effect(this[key].level, 1, 1);
          this[key].cost = dataUpgrade[key].cost(this[key].level);
          break;
        default:
          this[key].effect = dataUpgrade[key].effect(this[key].level);
          this[key].cost = dataUpgrade[key].cost(this[key].level);
          break;
      }
    }

    // console.log(endpoint);
  }
}
