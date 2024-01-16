import { MultiplierInfo } from "../../../Multiplier";
import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_SDUpgreadeSuperQueue extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.SDUpgreadeSuperQueue;
  }

  get isAutomation() {
    return true;
  }

  Cost(level) {
    return 40.0 * Math.pow(5.0, level);
  }

  SetEffect() {
    return this.sdUpgradeCtrl.availableSuperQueue.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Add, () => this.EffectValue())
    );
  }

  get maxLevel() {
    return 3;
  }

  get initEffectValue() {
    return 0.0;
  }

  get incrementEffectValuePerLevel() {
    return 1.0;
  }
}
