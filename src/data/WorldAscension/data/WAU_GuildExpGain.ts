import { MultiplierInfo } from "@/data/Multiplier";
import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { WorldAscensionUpgrade } from "@/data/WorldAscension/WorldAscensionUpgrade";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { AscensionUpgradeKind } from "@type/AscensionUpgradeKind";

export class WAU_GuildExpGain extends WorldAscensionUpgrade {
  constructor(wa: WorldAscension) {
    super(wa);
  }

  get kind() {
    return AscensionUpgradeKind.GuildExpGain;
  }

  get maxLevel() {
    return 100;
  }

  EffectValue(level) {
    return 0.25 * level;
  }

  Cost(level) {
    return level >= 50 ? Math.floor((1.0 + level) * (1.0 + (level - 50.0) / 25.0)) : 1 + level;
  }

  SetEffect() {
    return this.data.stats.SetEffectGuildExp(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Mul, () => this.effectValue));
  }
}
