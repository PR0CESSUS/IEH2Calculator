import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Stats } from "../../type/Stats";
export default class TamersBadge extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.TamersBadge;

  passiveEffectMaxValue = 0.9999;
  EffectValue(level) {
    return 0.05 * level;
  }

  PassiveEffectValue(level) {
    return Math.min(this.passiveEffectMaxValue, 0.0001 * level);
  }

  SetPassiveEffect() {
    globalThis.data.skill.skillRankCostFactors[5].RegisterMultiplier(new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, () => -this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.HeroStats(heroKind, Stats.ExpGain).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.effectValue * equipNum()));
  }
}
