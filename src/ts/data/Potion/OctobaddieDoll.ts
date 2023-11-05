import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
export default class OctobaddieDoll extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.OctobaddieDoll;

  EffectValue(level) {
    return (1.0 / 400.0) * level;
  }

  PassiveEffectValue(level) {
    return 0.01 * level;
  }

  SetPassiveEffect() {
    globalThis.data.resource.slimeCoinEfficiency.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Mul, () => this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.skill.skillEffectRangeMultiplier[heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.effectValue * equipNum()));
  }
}
