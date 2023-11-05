import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { BasicStatsKind } from "../../type/BasicStatsKind";
export default class SpiderBadge extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.SpiderBadge;

  EffectValue(level) {
    return 0.001 * level;
  }

  PassiveEffectValue(level) {
    return 0.1 * level;
  }

  SetPassiveEffect() {
    globalThis.data.stats.SetEffectBasicStats(BasicStatsKind.DEF, new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Add, () => this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.DEF).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Mul, () => this.effectValue * equipNum()));
  }
}
