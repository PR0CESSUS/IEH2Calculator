import { MultiplierInfo } from "@/data/Multiplier";
import { WorldAscensionMilestone } from "@/data/WorldAscension/WorldAscensionMilestone";
import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { UpgradeKind } from "@type/UpgradeKind";
import { WorldAscensionMiletoneKind } from "@type/WorldAscensionMiletoneKind";

export class WAM_UpgradeLevel extends WorldAscensionMilestone {
  constructor(wa: WorldAscension) {
    super(wa);
  }

  get kind() {
    return WorldAscensionMiletoneKind.UpgradeLevel;
  }

  get currentValue() {
    return this.data.upgrade.TotalLevel(UpgradeKind.Resource);
  }

  PassiveEffectValue(level) {
    return Math.max(0.0, Math.pow(2.0, level) - 1.0);
  }

  SetEffect() {
    return this.data.stats.SetEffectResourceGain(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Mul, () => this.currentPassiveEffectValue));
  }
}
