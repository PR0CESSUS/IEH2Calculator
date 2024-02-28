import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_MorePowerups extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.MorePowerups;
  }

  Cost(level) {
    return 100.0 * Math.pow(1000.0, level);
  }

  SetEffect() {
    return this.sdgCtrl.powerupShowNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Add, () => this.EffectValue()));
  }

  get maxLevel() {
    return 3;
  }

  get initEffectValue() {
    return 2.0;
  }

  get incrementEffectValuePerLevel() {
    return 1.0;
  }
}
