import { Enums } from "@/Enums";
import { MultiplierInfo } from "@/data/Multiplier";
import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { WorldAscensionUpgrade } from "@/data/WorldAscension/WorldAscensionUpgrade";
import { AscensionUpgradeKind } from "@type/AscensionUpgradeKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";

export class WAU_PreRebirthTier1 extends WorldAscensionUpgrade {
  constructor(wa: WorldAscension) {
    super(wa);
  }

  get kind() {
    return AscensionUpgradeKind.PreRebirthTier1;
  }

  get maxLevel() {
    return 100;
  }

  EffectValue(level) {
    return level * 1000;
  }

  Cost(level) {
    return 1.0;
  }

  SetEffect() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      this.data.rebirth.Rebirth(index, 0).initRebirthPoint.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Add, () => this.effectValue));
    }
  }
}
