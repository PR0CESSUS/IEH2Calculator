import { SDGem } from "../SDGem";
import { SDGemKind } from "../../../type/SDGemKind";

export class SDG_Placeholder extends SDGem {
  tempKind: SDGemKind;

  get kind() {
    return this.tempKind;
  }

  get maxLevel() {
    return 100;
  }

  RequiredExp(level) {
    return (1800 + 1800 * level) * Math.pow(2.0, level / 10.0);
  }

  SetEffect() {}

  get initEffectValue() {
    return 0.0;
  }

  get effectIncrementPerLevel() {
    return 1.0;
  }
}
