import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
export default class BerserkersStone extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.BerserkersStone;

  passiveEffectMaxValue = 1.0;
  EffectValue(level) {
    return 0.2 * level;
  }

  PassiveEffectValue(level) {
    return Math.min(this.passiveEffectMaxValue, 0.001 * level);
  }

  SetPassiveEffect() {
    globalThis.data.equipment.effectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Mul, () => this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats
      .MonsterDamage(heroKind, MonsterSpecies.ChallengeBoss)
      .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Mul, () => this.effectValue * equipNum()));
  }
}
