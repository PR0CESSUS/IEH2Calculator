import { MultiplierInfo } from "../../Multiplier";
import { SDGem } from "../SDGem";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SDGemKind } from "../../../type/SDGemKind";

export class SDG_Peridot extends SDGem {
  get kind() {
    return SDGemKind.Peridot;
  }

  get maxLevel() {
    return 1000;
  }

  RequiredExp(level) {
    return level >= 171 ? 86400000000.0 * (1.0 + 0.005 * (level - 171)) : (3600 + 3600 * level) * Math.pow(2.0, level / 10.0);
  }

  SetEffect() {
    return this.data.town.researchEffectMultipliers[2].RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDGemRitual, MultiplierType.Add, () => this.EffectValue()));
  }

  get initEffectValue() {
    return 0.0;
  }

  get effectIncrementPerLevel() {
    return 0.005;
  }
}
