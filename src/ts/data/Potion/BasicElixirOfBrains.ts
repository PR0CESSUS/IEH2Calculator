import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Element } from "../../type/Element";
export default class BasicElixirOfBrains extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.BasicElixirOfBrains;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.ElementDamage(heroKind, Element.Fire).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => this.effectValue));
    globalThis.data.stats.ElementDamage(heroKind, Element.Ice).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => this.effectValue));
    globalThis.data.stats.ElementDamage(heroKind, Element.Thunder).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => this.effectValue));
    globalThis.data.stats.ElementDamage(heroKind, Element.Light).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => this.effectValue));
    globalThis.data.stats.ElementDamage(heroKind, Element.Dark).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => this.effectValue));
  }

  EffectValue(level) {
    return 0.2 + 0.02 * level;
  }

  AlchemyPointGain(level) {
    return 4.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
