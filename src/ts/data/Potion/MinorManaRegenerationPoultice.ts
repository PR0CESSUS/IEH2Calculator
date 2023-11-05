import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
export default class MinorManaRegenerationPoultice extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.MinorManaRegenerationPoultice;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.MpRegenerate(heroKind).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => this.effectValue));
  }

  EffectValue(level) {
    return 5 + level;
  }

  AlchemyPointGain(level) {
    return 3.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
