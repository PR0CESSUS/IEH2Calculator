import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { BasicStatsKind } from "../../type/BasicStatsKind";
export default class SlimeBadge extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.SlimeBadge;

  EffectValue(level) {
    return 0.001 * level;
  }

  PassiveEffectValue(level) {
    return 1.0 * level;
  }

  SetPassiveEffect() {
    globalThis.data.stats.SetEffectBasicStats(BasicStatsKind.HP, new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Add, () => this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.HP).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Mul, () => this.effectValue * equipNum()));
  }
}
