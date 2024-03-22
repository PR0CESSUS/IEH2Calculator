import { MultiplierInfo } from "@/data/Multiplier";
import { WorldAscensionMilestone } from "@/data/WorldAscension/WorldAscensionMilestone";
import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { WorldAscensionMiletoneKind } from "@type/WorldAscensionMiletoneKind";

export class WAM_DictionaryPoint extends WorldAscensionMilestone {
  constructor(wa: WorldAscension) {
    super(wa);
  }

  get kind() {
    return WorldAscensionMiletoneKind.DictionaryPoint;
  }

  get currentValue() {
    return 0;
    // return this.data.equipment.DictionaryTotalPoint();
  }

  PassiveEffectValue(level) {
    return 0.1 * level * Math.pow(2.0, (level - 1.0) / 9.0);
  }

  SetEffect() {
    return this.data.equipment.dictionaryUpgradeEffectMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Add, () => this.currentPassiveEffectValue)
    );
  }
}
