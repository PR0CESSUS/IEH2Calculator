import { MultiplierInfo } from "../../../Multiplier";
import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { Stats } from "../../../type/Stats";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_ATKMultiplier extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.ATKMultiplier;
  }

  Cost(level) {
    return (500 + 500 * level) * Math.pow(2.0, level / 10.0);
  }

  SetEffect() {
    return globalThis.data.stats.SetEffectBasicStats(
      BasicStatsKind.ATK,
      new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, () => this.EffectValue())
    );
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
