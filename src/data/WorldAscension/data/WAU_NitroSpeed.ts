import { MultiplierInfo } from "@/data/Multiplier";
import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { WorldAscensionUpgrade } from "@/data/WorldAscension/WorldAscensionUpgrade";
import { AscensionUpgradeKind } from "@type/AscensionUpgradeKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";

export class WAU_NitroSpeed extends WorldAscensionUpgrade {
  constructor(wa: WorldAscension) {
    super(wa);
  }

  get kind() {
    return AscensionUpgradeKind.NitroSpeed;
  }

  get maxLevel() {
    return 10;
  }

  EffectValue(level) {
    return 0.1 * level;
  }

  Cost(level) {
    return 100.0 * Math.pow(2.0, level);
  }

  SetEffect() {
    return this.data.nitro.maxNitroSpeed.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Add, () => this.effectValue));
  }
}
