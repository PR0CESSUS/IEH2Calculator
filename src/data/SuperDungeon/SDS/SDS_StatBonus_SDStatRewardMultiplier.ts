import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonShop_StatBonus } from "../SuperDungeonShop_StatBonus";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";

export class SDS_StatBonus_SDStatRewardMultiplier extends SuperDungeonShop_StatBonus {
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
    return 0.05 * level;
  }

  SetEffect() {
    return this.data.challenge.sdStatRewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDShop, MultiplierType.Mul, () => this.effectValue));
  }
}
