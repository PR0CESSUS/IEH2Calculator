import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { ResourceKind } from "../../type/ResourceKind";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Stats } from "../../type/Stats";
export default class FlametigerBadge extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.FlametigerBadge;

  EffectValue(level) {
    return 0.005 * level;
  }

  PassiveEffectValue(level) {
    return 0.025 * level;
  }

  SetPassiveEffect() {
    globalThis.data.stats.ResourceGain(ResourceKind.Leaf).RegisterMultiplier(new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, () => this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.HeroStats(heroKind, Stats.EquipmentProficiencyGain).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.effectValue * equipNum()));
  }
}
