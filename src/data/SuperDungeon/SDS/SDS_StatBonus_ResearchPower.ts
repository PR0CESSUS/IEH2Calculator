import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonShop_StatBonus } from "../SuperDungeonShop_StatBonus";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";

export class SDS_StatBonus_ResearchPower extends SuperDungeonShop_StatBonus {
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
    return 0.2 * level;
  }

  SetEffect() {
    this.data.town.researchPower[0].RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDShop, MultiplierType.Mul, () => this.effectValue));
    this.data.town.researchPower[1].RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDShop, MultiplierType.Mul, () => this.effectValue));
    this.data.town.researchPower[2].RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDShop, MultiplierType.Mul, () => this.effectValue));
  }
}
