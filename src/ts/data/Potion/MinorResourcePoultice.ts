import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { ResourceKind } from "../../type/ResourceKind";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
export default class MinorResourcePoultice extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.MinorResourcePoultice;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.ResourceGain(ResourceKind.Stone).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Mul, () => this.effectValue));
    globalThis.data.stats.ResourceGain(ResourceKind.Crystal).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Mul, () => this.effectValue));
    globalThis.data.stats.ResourceGain(ResourceKind.Leaf).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Mul, () => this.effectValue));
  }

  EffectValue(level) {
    return 0.25 + 0.05 * level;
  }

  AlchemyPointGain(level) {
    return 1.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
