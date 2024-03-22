import { MultiplierInfo } from "@/data/Multiplier";
import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { WorldAscensionUpgrade } from "@/data/WorldAscension/WorldAscensionUpgrade";
import { AscensionUpgradeKind } from "@type/AscensionUpgradeKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";

export class WAU_AreaClearCount extends WorldAscensionUpgrade {
  constructor(wa: WorldAscension) {
    super(wa);
  }

  get kind() {
    return AscensionUpgradeKind.AreaClearCount;
  }

  get maxLevel() {
    return 100;
  }

  EffectValue(level) {
    return level;
  }

  Cost(level) {
    return level >= 50 ? Math.floor((2.0 + 2 * level) * (1.0 + (level - 50.0) / 50.0)) : 2 + 2 * level;
  }

  SetEffect() {
    return this.data.area.SetEffectClearCount(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Add, () => this.effectValue));
  }
}
