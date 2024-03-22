import { Enums } from "@/Enums";
import { MultiplierInfo } from "@/data/Multiplier";
import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { WorldAscensionUpgrade } from "@/data/WorldAscension/WorldAscensionUpgrade";
import { AscensionUpgradeKind } from "@type/AscensionUpgradeKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";

export class WAU_PreRebirthTier2 extends WorldAscensionUpgrade {
  constructor(wa: WorldAscension) {
    super(wa);
  }

  get kind() {
    return AscensionUpgradeKind.PreRebirthTier2;
  }

  get maxLevel() {
    return 100;
  }

  //   EffectString() {return base.EffectString() + "\n<color=yellow>" + Localization.WorldAscensionString(3) + "</color>";}

  EffectValue(level) {
    return level * 1000;
  }

  Cost(level) {
    return 2.0;
  }

  SetEffect() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      this.data.rebirth.Rebirth(index, 1).initRebirthPoint.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Add, () => this.effectValue));
    }
  }
}
