import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_LoyaltyPointGainMul extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.LoyaltyPointGainMul;
  }

  Cost(level) {
    return (5000 + 5000 * level) * Math.pow(2.0, level / 10.0);
  }

  SetEffect() {
    return this.sdgCtrl.data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, () => this.EffectValue()));
  }

  get maxLevel() {
    return 1000;
  }

  get initEffectValue() {
    return 0.0;
  }

  get incrementEffectValuePerLevel() {
    return 0.025;
  }
}
