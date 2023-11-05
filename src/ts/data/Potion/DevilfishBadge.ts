import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { ResourceKind } from "../../type/ResourceKind";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Stats } from "../../type/Stats";
export default class DevilfishBadge extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.DevilfishBadge;

  EffectValue(level) {
    return 0.0005 * level;
  }

  PassiveEffectValue(level) {
    return 0.025 * level;
  }

  SetPassiveEffect() {
    globalThis.data.stats.ResourceGain(ResourceKind.Stone).RegisterMultiplier(new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, () => this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.HeroStats(heroKind, Stats.MoveSpeed).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Mul, () => this.effectValue * equipNum()));
  }
}
