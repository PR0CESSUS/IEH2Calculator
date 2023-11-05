import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
export default class LightRope extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.LightRope;

  EffectValue(level) {
    return 0.2;
  }

  get effectValue() {
    return this.EffectValue(0) * globalThis.data.potion.trapEffectMultiplier.Value();
  }
}
