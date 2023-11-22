import { MultiplierInfo } from "../../../Multiplier";
import { SDGem } from "../SDGem";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SDGemKind } from "../../../type/SDGemKind";

export class SDG_Hackmanite extends SDGem {
  get kind() {
    return SDGemKind.Hackmanite;
  }

  get maxLevel() {
    return 300;
  }

  RequiredExp(level) {
    return level >= 157 ? 86400000000.0 * (1.0 + 0.025 * (level - 157)) : (10800 + 10800 * level) * Math.pow(2.0, level / 10.0);
  }

  SetEffect() {
    return globalThis.data.expedition.lowerLimitTime.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.SDGemRitual, MultiplierType.Add, () => -this.EffectValue())
    );
  }

  get initEffectValue() {
    return 0.0;
  }

  get effectIncrementPerLevel() {
    return 2.0;
  }
}
