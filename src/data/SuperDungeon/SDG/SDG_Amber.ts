import { MultiplierInfo } from "../../Multiplier";
import { SDGem } from "../SDGem";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SDGemKind } from "../../../type/SDGemKind";

export class SDG_Amber extends SDGem {
  get kind() {
    return SDGemKind.Amber;
  }

  get maxLevel() {
    return 100;
  }

  RequiredExp(level) {
    return (8640000 + 8640000 * level) * Math.pow(10.0, level / 50.0);
  }

  SetEffect() {
    return this.data.area.SetEffectDungeonClearCount(new MultiplierInfo(MultiplierKind.SDGemRitual, MultiplierType.Add, () => this.EffectValue()));
  }

  get initEffectValue() {
    return 0.0;
  }

  get effectIncrementPerLevel() {
    return 1.0;
  }
}
