import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_PowerupFilterSlot extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.PowerupFilterSlot;
  }

  get isAutomation() {
    return true;
  }

  Cost(level) {
    return 10.0 * Math.pow(3.0, level);
  }

  SetEffect() {
    return this.sdgCtrl.powerupFilterSlot.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Add, () => this.EffectValue()));
  }

  get maxLevel() {
    return 5;
  }

  get initEffectValue() {
    return 0.0;
  }

  get incrementEffectValuePerLevel() {
    return 1.0;
  }
}
