import { HeroKind } from "../../type/HeroKind";
import { PotionKind } from "../../type/PotionKind";
import { PotionType } from "../../type/PotionType";
import { TalismanRarity } from "../../type/TalismanRarity";
import { PotionGlobalInformation } from "./PotionGlobalInformation";

export class Talisman extends PotionGlobalInformation {
  type: PotionType = PotionType.Talisman;
  get talismanKind() {
    return PotionKind.AncientAngelsBadge;
  }
  get effectValue() {
    return this.EffectValue(this.level);
  }

  SetInfo() {
    this.kind = this.talismanKind;
    this.SetPassiveEffect();
  }

  SetPassiveEffect() {}

  Cost(level) {
    switch (this.talismanRarity) {
      case TalismanRarity.Common:
        return 9 * level + Math.pow(level, 2.0);
      case TalismanRarity.Uncommon:
        return 99 * level + Math.pow(level, 3.0);
      case TalismanRarity.Rare:
        return 999 * level + Math.pow(level, 4.0);
      case TalismanRarity.SuperRare:
        return 9999 * level + Math.pow(level, 5.0);
      case TalismanRarity.Epic:
        return 99999 * level + Math.pow(level, 10.0);
      default:
        return 10000000000000.0;
    }
  }
}
