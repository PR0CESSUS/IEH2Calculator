import { MultiplierInfo } from "../../Multiplier";
import { SDGem } from "../SDGem";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SDGemKind } from "../../../type/SDGemKind";

export class SDG_Almandine extends SDGem {
  get kind() {
    return SDGemKind.Almandine;
  }

  get maxLevel() {
    return 20;
  }

  RequiredExp(level) {
    return 864000000.0 * Math.pow(10.0, level / 10.0);
  }

  SetEffect() {
    return this.data.nitro.maxNitroSpeed.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDGemRitual, MultiplierType.Add, () => this.EffectValue()));
  }

  get initEffectValue() {
    return 0.0;
  }

  get effectIncrementPerLevel() {
    return 0.1;
  }
}
