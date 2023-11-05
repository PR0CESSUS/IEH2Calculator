import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
export default class ThunderRope extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.ThunderRope;

  EffectValue(level) {
    return 0.2;
  }

  get effectValue() {
    return this.EffectValue(0) * globalThis.data.potion.trapEffectMultiplier.Value();
  }
}
