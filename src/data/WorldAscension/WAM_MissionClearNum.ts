import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { WorldAscensionMiletoneKind } from "../../type/WorldAscensionMiletoneKind";
import { WorldAscensionMilestone } from "./WorldAscensionMilestone";
export class WAM_MissionClearNum extends WorldAscensionMilestone {
  kind = WorldAscensionMiletoneKind.MissionClearNum;

  PassiveEffectValue(level) {
    return level * 0.5;
  }

  SetEffect() {
    globalThis.data.area.townMaterialGainPerDifficultyMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Add, () => this.currentPassiveEffectValue));
  }
}
