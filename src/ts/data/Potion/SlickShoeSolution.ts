import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Stats } from "../../type/Stats";
export default class SlickShoeSolution extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.SlickShoeSolution;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.HeroStats(heroKind, Stats.MoveSpeed).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Mul, () => this.effectValue));
  }

  EffectValue(level) {
    return 0.1 + 0.001 * level;
  }

  AlchemyPointGain(level) {
    return 3.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
