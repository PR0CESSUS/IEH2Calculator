import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";
import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";

export class SDU_ATKMultiplier extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.ATKMultiplier;
  }

  Cost(level) {
    return (500 + 500 * level) * Math.pow(2.0, level / 10.0);
  }

  SetEffect() {
    return this.sdgCtrl.data.stats.SetEffectBasicStats(BasicStatsKind.ATK, new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, () => this.EffectValue()));
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
