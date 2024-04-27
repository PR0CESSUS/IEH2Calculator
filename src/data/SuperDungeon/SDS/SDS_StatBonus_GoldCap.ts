import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonShop_StatBonus } from "../SuperDungeonShop_StatBonus";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";

export class SDS_StatBonus_GoldCap extends SuperDungeonShop_StatBonus {
  #data;
  constructor(DATA, id) {
    super(DATA, id);
    this.#data = DATA;
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
    return this.#data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDShop, MultiplierType.Mul, () => this.effectValue));
  }
}
