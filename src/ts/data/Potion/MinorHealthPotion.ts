import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
export default class MinorHealthPotion extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.MinorHealthPotion;

  EffectValue(level) {
    return 15 + 5 * level;
  }

  AlchemyPointGain(level) {
    return 1.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
