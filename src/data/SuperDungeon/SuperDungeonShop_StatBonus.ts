import { SuperDungeonShop } from "./SuperDungeonShop";

export class SuperDungeonShop_StatBonus extends SuperDungeonShop {
  //   get kind() {return SuperDungeonShopKind.Stats;}

  constructor(id) {
    super(id);
  }

  EffectValue(level) {
    return level;
  }

  get effectValue() {
    return this.EffectValue(this.purchasedNum);
  }

  get maxLevel() {
    return 1;
  }
}
