import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonShop_StatBonus } from "../SuperDungeonShop_StatBonus";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";

export class SDS_StatBonus_SlimeCoinCap extends SuperDungeonShop_StatBonus {
  constructor(DATA, id) {
    super(DATA, id);
  }
  RubyCost(level) {
    return 5.0;
  }

  get maxLevel() {
    return 1000;
  }

  EffectValue(level) {
    return 0.1 * level;
  }

  SetEffect() {
    return this.data.resource.slimeCoinCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDShop, MultiplierType.Mul, () => this.effectValue));
  }
}
