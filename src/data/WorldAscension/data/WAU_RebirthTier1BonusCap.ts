import { MultiplierInfo } from "@/data/Multiplier";
import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { WorldAscensionUpgrade } from "@/data/WorldAscension/WorldAscensionUpgrade";
import { AscensionUpgradeKind } from "@type/AscensionUpgradeKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";

export class WAU_RebirthTier1BonusCap extends WorldAscensionUpgrade {
  constructor(wa: WorldAscension) {
    super(wa);
  }

  get kind() {
    return AscensionUpgradeKind.RebirthTier1BonusCap;
  }

  get maxLevel() {
    return 10;
  }

  EffectValue(level) {
    return 25 * level;
  }

  Cost(level) {
    return 1 + level;
  }

  SetEffect() {
    return this.data.rebirth.tier1AbilityPointBonusLevelCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Add, () => this.effectValue));
  }
}
