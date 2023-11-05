import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Element } from "../../type/Element";
export default class BasicElixirOfBrawn extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.BasicElixirOfBrawn;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.ElementDamage(heroKind, Element.Physical).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => this.effectValue));
  }

  EffectValue(level) {
    return 0.2 + 0.02 * level;
  }

  AlchemyPointGain(level) {
    return 4.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
