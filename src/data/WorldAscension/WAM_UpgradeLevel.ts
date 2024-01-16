import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { WorldAscensionMiletoneKind } from "../../type/WorldAscensionMiletoneKind";
import { WorldAscensionMilestone } from "./WorldAscensionMilestone";

export class WAM_UpgradeLevel extends WorldAscensionMilestone {
  kind = WorldAscensionMiletoneKind.UpgradeLevel;

  PassiveEffectValue(level) {
    return Math.max(0.0, Math.pow(2.0, level) - 1.0);
  }

  SetEffect() {
    globalThis.data.stats.SetEffectResourceGain(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Mul, () => this.currentPassiveEffectValue));
  }
}
