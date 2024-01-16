import { MultiplierInfo } from "../../../Multiplier";
import { SDGem } from "../SDGem";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SDGemKind } from "../../../type/SDGemKind";

export class SDG_Obsidian extends SDGem {
  get kind() {
    return SDGemKind.Obsidian;
  }

  get maxLevel() {
    return 1000;
  }

  RequiredExp(level) {
    return level >= 599 ? 86400000000.0 * (1.0 + 0.01 * (level - 599)) : (36000 + 36000 * level) * Math.pow(2.0, level / 50.0);
  }

  SetEffect() {
    return globalThis.data.monster.monsterDefeatNumMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.SDGemRitual, MultiplierType.Add, () => this.EffectValue())
    );
  }

  get initEffectValue() {
    return 0.0;
  }

  get effectIncrementPerLevel() {
    return 1.0;
  }
}
