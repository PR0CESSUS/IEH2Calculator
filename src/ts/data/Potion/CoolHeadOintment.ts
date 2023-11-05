import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Stats } from "../../type/Stats";
export default class CoolHeadOintment extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.CoolHeadOintment;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.HeroStats(heroKind, Stats.ExpGain).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => this.effectValue));
  }

  EffectValue(level) {
    return 0.2 + level * 0.02;
  }

  AlchemyPointGain(level) {
    return 10.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
