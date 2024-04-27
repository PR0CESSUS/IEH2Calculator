import { UpgradeKind } from "@type/UpgradeKind";
import { DATA } from "..";

export class UpgradeLevel {
  data: DATA;
  kind: UpgradeKind;

  idFunc;
  maxValue;

  constructor(DATA: DATA, kind: UpgradeKind, id) {
    this.data = DATA;
    this.kind = kind;
    this.idFunc = id;
  }

  get id() {
    return this.idFunc();
  }

  get value() {
    switch (this.kind) {
      case UpgradeKind.Resource:
        return this.data.source.upgradeLevelsResource[this.id];
      case UpgradeKind.BasicStats:
        return this.data.source.upgradeLevelsBasicStats[this.id];
      case UpgradeKind.GoldGain:
        return this.data.source.upgradeLevelsGoldGain;
      case UpgradeKind.ExpGain:
        return this.data.source.upgradeLevelsExpGain;
      case UpgradeKind.GoldCap:
        return this.data.source.upgradeLevelsGoldCap[this.id];
      case UpgradeKind.SlimeBank:
        return this.data.source.upgradeLevelsSlimebank[this.id];
      case UpgradeKind.EquipmentInventory:
        return this.data.source.upgradeLevelsEquipmentInventory;
      default:
        return 0;
    }
  }
  set value(value) {
    switch (this.kind) {
      case UpgradeKind.Resource:
        this.data.source.upgradeLevelsResource[this.id] = value;
        break;
      case UpgradeKind.BasicStats:
        this.data.source.upgradeLevelsBasicStats[this.id] = value;
        break;
      case UpgradeKind.GoldGain:
        this.data.source.upgradeLevelsGoldGain = value;
        break;
      case UpgradeKind.ExpGain:
        this.data.source.upgradeLevelsExpGain = value;
        break;
      case UpgradeKind.GoldCap:
        this.data.source.upgradeLevelsGoldCap[this.id] = value;
        break;
      case UpgradeKind.SlimeBank:
        this.data.source.upgradeLevelsSlimebank[this.id] = value;
        break;
      case UpgradeKind.EquipmentInventory:
        this.data.source.upgradeLevelsEquipmentInventory = value;
        break;
      default:
        this.data.source.upgradeLevelsResource[this.id] = value;
        break;
    }
  }
}
