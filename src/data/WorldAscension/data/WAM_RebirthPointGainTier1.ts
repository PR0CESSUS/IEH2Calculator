import { MultiplierInfo } from "@/data/Multiplier";
import { Enums } from "@/Enums";
import { WorldAscensionMilestone } from "@/data/WorldAscension/WorldAscensionMilestone";
import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { WorldAscensionMiletoneKind } from "@type/WorldAscensionMiletoneKind";

export class WAM_RebirthPointGainTier1 extends WorldAscensionMilestone {
  constructor(wa: WorldAscension) {
    super(wa);
  }

  get kind() {
    return WorldAscensionMiletoneKind.RebirthPointGainTier1;
  }

  get currentValue() {
    return 0;
    // return this.data.rebirth.TotalRebirthPoint(0);
  }

  PassiveEffectValue(level) {
    return 0.1 * level * Math.pow(2.0, (level - 1.0) / 9.0);
  }

  SetEffect() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      this.data.rebirth
        .Rebirth(index, 0)
        .rebirthPointGainFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Mul, () => this.currentPassiveEffectValue));
    }
  }
}
