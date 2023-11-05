import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
export default class MinorRegenerationPoultice extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.MinorRegenerationPoultice;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.HpRegenerate(heroKind).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => this.effectValue));
  }

  EffectValue(level) {
    return 1.0 + 0.2 * level;
  }

  AlchemyPointGain(level) {
    return 2.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
