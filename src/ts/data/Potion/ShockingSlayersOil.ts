import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Element } from "../../type/Element";
export default class ShockingSlayersOil extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.ShockingSlayersOil;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.ElementSlayerDamage(heroKind, Element.Thunder).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => this.effectValue));
  }

  EffectValue(level) {
    return 0.1 + level * 0.01;
  }

  AlchemyPointGain(level) {
    return 10.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
