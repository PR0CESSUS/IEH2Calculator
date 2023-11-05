import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { WorldAscensionMiletoneKind } from "../../type/WorldAscensionMiletoneKind";
import { WorldAscensionMilestone } from "./WorldAscensionMilestone";
import { Stats } from "../../type/Stats";

export class WAM_DisassembleEquipment extends WorldAscensionMilestone {
  kind = WorldAscensionMiletoneKind.DisassembleEquipment;

  PassiveEffectValue(level) {
    return 0.2 * level * Math.pow(2.0, (level - 1.0) / 9.0);
  }

  SetEffect() {
    globalThis.data.stats.SetEffectStats(Stats.EquipmentProficiencyGain, new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Mul, () => this.currentPassiveEffectValue));
  }
}
