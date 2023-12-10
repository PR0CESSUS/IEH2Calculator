import { SDGemKind } from "../../type/SDGemKind";
export class SDGem {
  // sdGemRitualCtrl: SDGemRitualController;

  constructor() {
    // this.sdGemRitualCtrl = sdGemRitualCtrl;
    //   this.level.maxValue = (() => this.maxLevel);
    //   this.exp = new SDGemExp(this, new Func<long, double>(this.RequiredExp), (INTEGER) this.level);
    //   this.unlock = new Unlock();
    //   this.motherStoneAssigned = new SDGemMotherStoneAssigned(this);
  }

  Start() {
    return this.SetEffect();
  }

  get level() {
    return globalThis.data.source.sdGemLevels[this.kind];
  }

  set level(value) {
    globalThis.data.source.sdGemLevels[this.kind] = value;
  }

  get kind() {
    return SDGemKind.Sunstone;
  }

  get maxLevel() {
    return 10;
  }

  RequiredExp(level) {
    return 1e300;
  }

  SetEffect() {}

  get initEffectValue() {
    return 0.0;
  }

  get effectIncrementPerLevel() {
    return 0.0;
  }

  EffectValue() {
    return this.initEffectValue + this.effectIncrementPerLevel * this.level;
  }
}
