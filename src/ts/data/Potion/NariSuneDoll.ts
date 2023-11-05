import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
export default class NariSuneDoll extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.NariSuneDoll;

  passiveEffectMaxValue = 1.0;
  EffectValue(level) {
    return 0.005 * level;
  }

  PassiveEffectValue(level) {
    return Math.min(this.passiveEffectMaxValue, 0.0005 * level);
  }

  SetPassiveEffect() {
    globalThis.data.area.largeSwarmChanceInsteadOfRegular.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.skill.skillRangeMultiplier[heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.effectValue * equipNum()));
  }
}
