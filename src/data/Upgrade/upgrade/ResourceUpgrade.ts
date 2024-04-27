import { DATA } from "@/Data";
import { UPGRADE } from "@/data/upgrade/UPGRADE";
import { UpgradeKind } from "@type/UpgradeKind";

export class ResourceUpgrade extends UPGRADE {
  baseCostIncrementPerLevel;

  //   get resource() {return this.data.resource.gold;}
  constructor(DATA: DATA, id) {
    super(DATA);
    this.id = id;
    this.baseCostIncrementPerLevel = Math.pow(1.1 + 0.125 * id, 0.5);
  }
  get kind() {
    return UpgradeKind.Resource;
  }

  Cost(level) {
    return this.InitCost() * Math.pow(this.CostIncrementPerLevel(), level);
  }

  InitCost() {
    return 10.0 * Math.pow(5.0, this.id);
  }

  CostIncrementPerLevel() {
    return 1.0 + (this.baseCostIncrementPerLevel - 1.0) * (1.0 - this.data.upgrade.resourceCostIncrementPerLevelReduction.Value());
  }

  Name(): string {
    return `Resource Gain ${this.id + 1}`;
  }
}
