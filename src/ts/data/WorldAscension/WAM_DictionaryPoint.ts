import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { WorldAscensionMiletoneKind } from "../../type/WorldAscensionMiletoneKind";
import { WorldAscensionMilestone } from "./WorldAscensionMilestone";
export class WAM_DictionaryPoint extends WorldAscensionMilestone {
  kind = WorldAscensionMiletoneKind.DictionaryPoint;

  PassiveEffectValue(level) {
    return 0.1 * level * Math.pow(2.0, (level - 1.0) / 9.0);
  }

  SetEffect() {
    globalThis.data.equipment.dictionaryUpgradeEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Add, () => this.currentPassiveEffectValue));
  }
}
