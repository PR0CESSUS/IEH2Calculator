import { MultiplierInfo } from "../../../Multiplier";
import { SDGem } from "../SDGem";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SDGemKind } from "../../../type/SDGemKind";

export class SDG_Emerald extends SDGem {
  get kind() {
    return SDGemKind.Emerald;
  }

  get maxLevel() {
    return 1000;
  }

  RequiredExp(level) {
    return 86400000 + 86400000 * level;
  }

  SetEffect() {
    return globalThis.data.sdg.powerupPermEffectMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.SDGemRitual, MultiplierType.Mul, () => this.EffectValue())
    );
  }

  get initEffectValue() {
    return 0.0;
  }

  get effectIncrementPerLevel() {
    return 0.01;
  }
}
