import { MultiplierInfo } from "../../../Multiplier";
import { SDGem } from "../SDGem";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SDGemKind } from "../../../type/SDGemKind";

export class SDG_Turquoise extends SDGem {
  get kind() {
    return SDGemKind.Turquoise;
  }

  get maxLevel() {
    return 100;
  }

  RequiredExp(level) {
    return (3600000 + 3600000 * level) * Math.pow(3.0, level / 20.0);
  }

  SetEffect() {
    return globalThis.data.expedition.rewardModifierPerHour.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.SDGemRitual, MultiplierType.Add, () => this.EffectValue())
    );
  }

  get initEffectValue() {
    return 0.0;
  }

  get effectIncrementPerLevel() {
    return 0.001;
  }
}