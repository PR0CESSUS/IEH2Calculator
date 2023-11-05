import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Element } from "../../type/Element";
export default class BurningDefensePotion extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.BurningDefensePotion;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.ElementResistance(heroKind, Element.Fire).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => this.effectValue));
  }

  EffectValue(level) {
    return 0.2 + level * 0.01;
  }

  AlchemyPointGain(level) {
    return 5.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
