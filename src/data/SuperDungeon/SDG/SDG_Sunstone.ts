import { MultiplierInfo } from "../../../Multiplier";
import { SDGem } from "../SDGem";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SDGemKind } from "../../../type/SDGemKind";

export class SDG_Sunstone extends SDGem {
  get kind() {
    return SDGemKind.Sunstone;
  }

  get maxLevel() {
    return 1000;
  }

  RequiredExp(level) {
    return level >= 914 ? 86400000000.0 * (1.0 + 0.05 * (level - 914)) : (300 + 300 * level) * Math.pow(2.0, level / 50.0);
  }

  SetEffect() {
    return globalThis.data.stats.SetEffectGuildExp(
      new MultiplierInfo(MultiplierKind.SDGemRitual, MultiplierType.Mul, () => this.EffectValue())
    );
  }

  get initEffectValue() {
    return 0.0;
  }

  get effectIncrementPerLevel() {
    return 0.005;
  }
}
