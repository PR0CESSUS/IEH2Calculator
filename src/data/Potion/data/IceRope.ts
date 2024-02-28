import { PotionGlobalInformation } from "../PotionGlobalInformation";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";

export class IceRope extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.IceRope;
    this.type = PotionType.Trap;
  }

  EffectValue(level) {
    return 0.2;
  }

  get effectValue() {
    return this.EffectValue(0) * this.data.potion.trapEffectMultiplier.Value();
  }
}
