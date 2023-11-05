import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
export default class EnchantedAlembic extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.EnchantedAlembic;

  passiveEffectMaxValue = 5.0;
  get passiveEffectNumberType() {
    return "normal";
  }

  EffectValue(level) {
    return 0.001 * level;
  }

  PassiveEffectValue(level) {
    return Math.min(this.passiveEffectMaxValue, 0.001 * level);
  }

  SetPassiveEffect() {
    globalThis.data.alchemy.mysteriousWaterProductionPerSec.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Add, () => this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.potion.effectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Mul, () => this.effectValue * equipNum()));
  }
}
