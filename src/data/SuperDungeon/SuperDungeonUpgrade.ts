import { DataSuperDungeonGlobal } from ".";
import { Localization } from "../../localization";
import { SuperDungeonUpgradeKind } from "../../type/SuperDungeonUpgradeKind";

export class SuperDungeonUpgrade {
  sdgCtrl: DataSuperDungeonGlobal;
  effectValue: Function;

  get sdUpgradeCtrl() {
    return this.sdgCtrl.upgradeCtrl;
  }

  get kind() {
    return SuperDungeonUpgradeKind.MorePowerups;
  }

  constructor(sdgCtrl: DataSuperDungeonGlobal) {
    this.sdgCtrl = sdgCtrl;
  }

  get level() {
    return this.sdgCtrl.data.source.superDungeonUpgradeLevels[this.kind];
  }
  set level(value) {
    this.sdgCtrl.data.source.superDungeonUpgradeLevels[this.kind] = Math.min(value, this.maxLevel);
  }
  Start() {
    this.SetEffect();
  }

  SetEffect() {}

  get maxLevel() {
    return 1;
  }

  Cost(level) {
    return 1e300;
  }
  TotalCost() {
    let total = 0;
    for (let index = 0; index < this.level; index++) {
      total += this.Cost(index);
    }
    return total;
  }

  ModifiedCost(level) {
    return this.Cost(level) * this.sdUpgradeCtrl.costReduction.Value();
  }

  get initEffectValue() {
    return 0.0;
  }

  get incrementEffectValuePerLevel() {
    return 0.0;
  }

  // EffectValue() {return this.EffectValue(this.level);}

  EffectValue(level = this.level) {
    return this.initEffectValue + level * this.incrementEffectValuePerLevel;
  }

  IsActive() {
    return true;
  }

  NameString() {
    return Localization.SDUpgradeString(this.kind).name;
  }

  EffectValueString() {
    const localization = Localization.SDUpgradeString(this.kind, this.EffectValue());
    return localization.description + " " + localization.value;
  }
}
