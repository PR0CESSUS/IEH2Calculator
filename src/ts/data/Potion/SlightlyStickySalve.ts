import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
export default class SlightlyStickSalve extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.SlightlyStickySalve;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.GoldGain().RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Mul, () => this.effectValue));
  }

  EffectValue(level) {
    return 0.25 + level * 0.01;
  }

  AlchemyPointGain(level) {
    return 10.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
