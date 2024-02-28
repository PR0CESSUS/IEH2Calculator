import { MultiplierInfo } from "../../Multiplier";
import { SDGem } from "../SDGem";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SDGemKind } from "../../../type/SDGemKind";

export class SDG_Diamond extends SDGem {
  get kind() {
    return SDGemKind.Diamond;
  }

  get maxLevel() {
    return 100;
  }

  RequiredExp(level) {
    return level >= 63 ? 86400000000.0 * (1.0 + 0.1 * (level - 63)) : (17280000 + 17280000 * level) * Math.pow(2.0, level / 10.0);
  }

  SetEffect() {
    return this.data.potion.talismanPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDGemRitual, MultiplierType.Add, () => this.EffectValue()));
  }

  get initEffectValue() {
    return 0.0;
  }

  get effectIncrementPerLevel() {
    return 0.01;
  }
}
