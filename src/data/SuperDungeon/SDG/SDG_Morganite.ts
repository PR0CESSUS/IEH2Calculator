import { MultiplierInfo } from "../../Multiplier";
import { SDGem } from "../SDGem";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SDGemKind } from "../../../type/SDGemKind";

export class SDG_Morganite extends SDGem {
  get kind() {
    return SDGemKind.Morganite;
  }

  get maxLevel() {
    return 500;
  }

  RequiredExp(level) {
    return level >= 181 ? 86400000000.0 * (1.0 + 0.01 * (level - 181)) : (1800 + 1800 * level) * Math.pow(2.0, level / 10.0);
  }

  SetEffect() {
    return this.data.stats.heroLevelIncrementLimit.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDGemRitual, MultiplierType.Add, () => this.EffectValue()));
  }

  get initEffectValue() {
    return 0.0;
  }

  get effectIncrementPerLevel() {
    return 1.0;
  }
}
