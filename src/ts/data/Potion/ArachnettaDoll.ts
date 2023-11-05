import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
export default class ArachnettaDoll extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.ArachnettaDoll;

  EffectValue(level) {
    return 0.01 * level;
  }

  PassiveEffectValue(level) {
    return 0.01 * level;
  }

  SetPassiveEffect() {
    globalThis.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, () => this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.skill.baseAttackPoisonChance[heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.effectValue * equipNum()));
  }
}
