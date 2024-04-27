import { PotionGlobalInformation } from "../PotionGlobalInformation";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";

export class ChilledHealthPotion extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.ChilledHealthPotion;
    this.type = PotionType.Health;
  }

  get isEffectedByLowerTier() {
    return true;
  }

  EffectValue(level) {
    return (1.5 + 0.05 * level) * this.data.potion.GlobalInfo(PotionKind.MinorHealthPotion).effectValue;
  }

  AlchemyPointGain(level) {
    return 5.0 * this.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
