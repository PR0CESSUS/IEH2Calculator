import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Stats } from "../../type/Stats";
export default class BasicElixirOfUnderstanding extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.BasicElixirOfUnderstanding;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.HeroStats(heroKind, Stats.SkillProficiencyGain).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Mul, () => this.effectValue));
  }

  EffectValue(level) {
    return 0.1 + 0.005 * level;
  }

  AlchemyPointGain(level) {
    return 5.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
