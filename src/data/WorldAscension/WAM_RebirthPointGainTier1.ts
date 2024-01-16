import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { WorldAscensionMiletoneKind } from "../../type/WorldAscensionMiletoneKind";
import { WorldAscensionMilestone } from "./WorldAscensionMilestone";
import { Enums } from "../../Enums";

export class WAM_RebirthPointGainTier1 extends WorldAscensionMilestone {
  kind = WorldAscensionMiletoneKind.RebirthPointGainTier1;

  PassiveEffectValue(level) {
    return 0.1 * level * Math.pow(2.0, (level - 1.0) / 9.0);
  }

  SetEffect() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      let heroKind = index;
      globalThis.data.rebirth.Rebirth(heroKind, 0).rebirthPointGainFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Mul, () => this.currentPassiveEffectValue));
    }
  }
}
