import { MultiplierInfo } from "@/data/Multiplier";
import { WorldAscensionMilestone } from "@/data/WorldAscension/WorldAscensionMilestone";
import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { Stats } from "@type/Stats";
import { WorldAscensionMiletoneKind } from "@type/WorldAscensionMiletoneKind";

export class WAM_MoveDistance extends WorldAscensionMilestone {
  constructor(wa: WorldAscension) {
    super(wa);
  }

  get kind() {
    return WorldAscensionMiletoneKind.MoveDistance;
  }

  get currentValue() {
    return this.data.stats.TotalMovedDistance() / 100.0;
  }

  GoalValue(level) {
    return (500000000.0 * Math.pow(3.0, level - 1)) / 100.0;
  }

  PassiveEffectValue(level) {
    return 0.01 * Math.pow(level, 2.0);
  }

  SetEffect() {
    return this.data.stats.SetEffectStats(Stats.MoveSpeed, new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Mul, () => this.currentPassiveEffectValue));
  }
}
