import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
export default class MaterialMultiplierMist extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.MaterialMultiplierMist;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.MaterialLootGain(heroKind).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => this.effectValue));
  }

  EffectValue(level) {
    return 1.0 + 0.1 * level;
  }

  get effectValue() {
    return Math.floor(this.EffectValue(this.level) * globalThis.data.potion.effectMultiplier.Value());
  }

  AlchemyPointGain(level) {
    return 4.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
