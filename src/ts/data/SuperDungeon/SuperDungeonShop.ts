export class SuperDungeonShop {
  id;

  get sdgCtrl() {
    return globalThis.data.sdg;
  }

  // get kind() {return SuperDungeonShopKind.Artifact;}

  constructor(id) {
    this.id = id;
    //   this.purchasedNum = new SuperDungeonShopPurchasedNum(id);
  }

  get purchasedNum() {
    return globalThis.data.source.superDungeonShopPurchasedNums[this.id];
  }

  Start() {
    this.SetEffect();
  }

  SetEffect() {}

  RubyCost(level) {
    return 1.0;
  }
}
