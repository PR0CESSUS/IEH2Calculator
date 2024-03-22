import { MultiplierInfo } from "@/data/Multiplier";
import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { WorldAscensionUpgrade } from "@/data/WorldAscension/WorldAscensionUpgrade";
import { AscensionUpgradeKind } from "@type/AscensionUpgradeKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";

export class WAU_PointGainBonus extends WorldAscensionUpgrade {
  constructor(wa: WorldAscension) {
    super(wa);
  }

  get kind() {
    return AscensionUpgradeKind.PointGainBonus;
  }

  get maxLevel() {
    return 10;
  }

  EffectValue(level) {
    return level;
  }

  Cost(level) {
    return 25.0 * Math.pow(2.0, level);
  }

  SetEffect() {
    return this.wa.pointGainBonus.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Add, () => this.effectValue));
  }
}
