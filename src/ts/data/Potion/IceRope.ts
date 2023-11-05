import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
export default class IceRope extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.IceRope;

  EffectValue(level) {
    return 0.2;
  }

  get effectValue() {
    return this.EffectValue(0) * globalThis.data.potion.trapEffectMultiplier.Value();
  }
}
