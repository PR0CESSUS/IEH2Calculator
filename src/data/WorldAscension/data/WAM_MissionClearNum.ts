import { MultiplierInfo } from "@/data/Multiplier";
import { WorldAscensionMilestone } from "@/data/WorldAscension/WorldAscensionMilestone";
import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { WorldAscensionMiletoneKind } from "@type/WorldAscensionMiletoneKind";

export class WAM_MissionClearNum extends WorldAscensionMilestone {
  constructor(wa: WorldAscension) {
    super(wa);
  }

  get kind() {
    return WorldAscensionMiletoneKind.MissionClearNum;
  }

  get currentValue() {
    return this.data.area.TotalClearedMissionNum();
  }

  PassiveEffectValue(level) {
    return level * 0.5;
  }

  SetEffect() {
    return this.data.area.townMaterialGainPerDifficultyMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Add, () => this.currentPassiveEffectValue)
    );
  }
}
