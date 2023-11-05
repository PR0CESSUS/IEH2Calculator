import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
export default class MasonsTrowel extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.MasonsTrowel;

  passiveEffectMaxValue = 2.0;
  EffectValue(level) {
    return 0.1 * level;
  }

  PassiveEffectValue(level) {
    return Math.min(this.passiveEffectMaxValue, 0.001 * level);
  }

  SetPassiveEffect() {
    globalThis.data.town.townLevelEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, () => this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.town.townMaterialGainMultiplier[heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Mul, () => this.effectValue * equipNum()));
  }
}
