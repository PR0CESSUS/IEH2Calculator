import { DATA } from "..";
import { Localization } from "../../localization";
import { SDGemKind } from "../../type/SDGemKind";
export class SDGem {
  data: DATA;
  // sdGemRitualCtrl: SDGemRitualController;

  constructor(DATA: DATA) {
    this.data = DATA;
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
    return this.data.source.sdGemLevels[this.kind];
  }

  set level(value) {
    this.data.source.sdGemLevels[this.kind] = Math.min(value, this.maxLevel);
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

  NameString() {
    return Localization.SDGemString(this.kind).name;
  }

  EffectValueString() {
    return Localization.SDGemString(this.kind, this.EffectValue()).description;
  }
}
