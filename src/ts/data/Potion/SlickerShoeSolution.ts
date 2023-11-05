import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Stats } from "../../type/Stats";
export default class SlickerShoeSolution extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.SlickerShoeSolution;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.HeroStats(heroKind, Stats.MoveSpeed).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Mul, () => this.effectValue));
  }

  EffectValue(level) {
    return (1.25 + 0.005 * level) * globalThis.data.potion.GlobalInfo(PotionKind.SlickShoeSolution).effectValue;
  }

  AlchemyPointGain(level) {
    return 8.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
