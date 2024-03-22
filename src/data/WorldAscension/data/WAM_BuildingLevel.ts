import { MultiplierInfo } from "@/data/Multiplier";
import { WorldAscensionMilestone } from "@/data/WorldAscension/WorldAscensionMilestone";
import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { WorldAscensionMiletoneKind } from "@type/WorldAscensionMiletoneKind";

export class WAM_BuildingLevel extends WorldAscensionMilestone {
  constructor(wa: WorldAscension) {
    super(wa);
  }

  get kind() {
    return WorldAscensionMiletoneKind.TownBuldingLevel;
  }

  get currentValue() {
    return this.data.town.TotalBuildingLevel();
  }

  PassiveEffectValue(level) {
    return 0.1 * level * Math.pow(2.0, (level - 1.0) / 9.0);
  }

  SetEffect() {
    return this.data.town.townLevelEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Add, () => this.currentPassiveEffectValue));
  }
}
