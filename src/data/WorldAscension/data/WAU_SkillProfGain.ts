import { MultiplierInfo } from "@/data/Multiplier";
import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { WorldAscensionUpgrade } from "@/data/WorldAscension/WorldAscensionUpgrade";
import { AscensionUpgradeKind } from "@type/AscensionUpgradeKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { Stats } from "@type/Stats";

export class WAU_SkillProfGain extends WorldAscensionUpgrade {
  constructor(wa: WorldAscension) {
    super(wa);
  }

  get kind() {
    return AscensionUpgradeKind.SkillProfGain;
  }

  get maxLevel() {
    return 100;
  }

  EffectValue(level) {
    return 0.25 * level;
  }

  Cost(level) {
    return 2.0;
  }

  SetEffect() {
    return this.data.stats.SetEffectStats(Stats.SkillProficiencyGain, new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Mul, () => this.effectValue));
  }
}
