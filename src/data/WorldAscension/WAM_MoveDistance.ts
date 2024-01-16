import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { WorldAscensionMiletoneKind } from "../../type/WorldAscensionMiletoneKind";
import { WorldAscensionMilestone } from "./WorldAscensionMilestone";
import { Stats } from "../../type/Stats";

export class WAM_MoveDistance extends WorldAscensionMilestone {
  kind = WorldAscensionMiletoneKind.MoveDistance;

  PassiveEffectValue(level) {
    return 0.01 * Math.pow(level, 2.0);
  }

  SetEffect() {
    globalThis.data.stats.SetEffectStats(Stats.MoveSpeed, new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Mul, () => this.currentPassiveEffectValue));
  }
}
