import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
export default class ChilledHealthPotion extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.ChilledHealthPotion;

  EffectValue(level) {
    return (1.5 + 0.05 * level) * globalThis.data.potion.GlobalInfo(PotionKind.MinorHealthPotion).effectValue;
  }

  AlchemyPointGain(level) {
    return 5.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
