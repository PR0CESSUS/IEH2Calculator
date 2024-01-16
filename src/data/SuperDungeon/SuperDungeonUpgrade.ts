import { SuperDungeonGlobalController } from ".";
import { SuperDungeonUpgradeKind } from "../../type/SuperDungeonUpgradeKind";

export class SuperDungeonUpgrade {
  sdgCtrl: SuperDungeonGlobalController;
  effectValue: Function;

  get sdUpgradeCtrl() {
    return this.sdgCtrl.upgradeCtrl;
  }

  get kind() {
    return SuperDungeonUpgradeKind.MorePowerups;
  }

  constructor(sdgCtrl: SuperDungeonGlobalController) {
    this.sdgCtrl = sdgCtrl;
  }

  get level() {
    return globalThis.data.source.superDungeonUpgradeLevels[this.kind];
  }
  set level(value) {
    globalThis.data.source.superDungeonUpgradeLevels[this.kind] = Math.min(value, this.maxLevel);
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
}
