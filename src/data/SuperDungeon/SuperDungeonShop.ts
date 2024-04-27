import { DATA } from "..";
import { Localization } from "../../localization";

export class SuperDungeonShop {
  data: DATA;
  id;
  constructor(DATA: DATA, id) {
    this.data = DATA;
    this.id = id;
    //   this.purchasedNum = new SuperDungeonShopPurchasedNum(id);
  }

  get sdgCtrl() {
    return this.data.sdg;
  }

  // get kind() {return SuperDungeonShopKind.Artifact;}

  get purchasedNum() {
    return this.data.source.superDungeonShopPurchasedNums[this.id];
  }

  set purchasedNum(value) {
    this.data.source.superDungeonShopPurchasedNums[this.id] = Math.min(this.maxLevel, value);
  }

  get effectValue() {
    return this.EffectValue(this.purchasedNum);
  }

  get maxLevel() {
    return 1;
  }
  Start() {
    this.SetEffect();
  }

  SetEffect() {}

  RubyCost(level) {
    return 1.0;
  }
  EffectValue(level) {
    return level;
  }
  NameString() {
    return Localization.SDShopNameString(this.id);
  }

  EffectValueString() {
    // return this.EffectValue(this.purchasedNum);
    // return Localization.SDShopEffectValueString(this.id, this.EffectValue(this.purchasedNum), this.EffectValue(1), 0);
    // console.log(this.data);

    return Localization.SDShopEffectValueString(this.id, this.EffectValue(this.purchasedNum), this.EffectValue(1), this.data.equipment.ArtifactEffectMultiplier());
  }
}
