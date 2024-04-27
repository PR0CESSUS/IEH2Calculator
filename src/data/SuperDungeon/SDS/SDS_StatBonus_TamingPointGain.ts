import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonShop_StatBonus } from "../SuperDungeonShop_StatBonus";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { Stats } from "../../../type/Stats";

export class SDS_StatBonus_TamingPointGain extends SuperDungeonShop_StatBonus {
  constructor(DATA, id) {
    super(DATA, id);
  }
  RubyCost(level) {
    return 10.0;
  }

  get maxLevel() {
    return 1000;
  }

  EffectValue(level) {
    return 0.1 * level;
  }

  SetEffect() {
    return this.data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.SDShop, MultiplierType.Mul, () => this.effectValue));
  }
}
