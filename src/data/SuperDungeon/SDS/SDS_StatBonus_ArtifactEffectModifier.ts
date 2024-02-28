import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonShop_StatBonus } from "../SuperDungeonShop_StatBonus";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";

export class SDS_StatBonus_ArtifactEffectModifier extends SuperDungeonShop_StatBonus {
  #data;
  constructor(DATA, id) {
    super(DATA, id);
    this.#data = DATA;
  }
  RubyCost(level) {
    return 5 + level * 5;
  }

  get maxLevel() {
    return 1000;
  }

  EffectValue(level) {
    return 0.001 * level;
  }

  SetEffect() {
    return this.#data.equipment.effectMultiplierModifierForArtifact.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDShop, MultiplierType.Add, () => this.effectValue));
  }
}
