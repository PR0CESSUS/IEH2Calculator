import { DATA } from "..";
import { Localization } from "../../localization";
import { HeroKind } from "../../type/HeroKind";
import { PotionKind } from "../../type/PotionKind";
import { PotionType } from "../../type/PotionType";
import { TalismanRarity } from "../../type/TalismanRarity";

export class PotionGlobalInformation {
  data: DATA;
  kind: PotionKind = 0;
  type: PotionType;
  //   talismanRarity: TalismanRarity;

  constructor(DATA: DATA) {
    this.data = DATA;
    this.SetInfo();
  }

  get talismanRarity() {
    return TalismanRarity.Common;
  }

  get level() {
    return this.data.source.potionLevels[this.kind];
  }

  set level(value) {
    this.data.source.potionLevels[this.kind] = Math.min(this.type == PotionType.Talisman ? 50 : 100, value);
  }

  EffectValue(level) {
    return 0.0;
  }
  IsActiveEffect(heroKind: HeroKind, stack: Function) {
    if (!this.data.source.isActiveBattle[heroKind] || stack() == 0 || this.kind == 0) return false;

    return true;
  }
  get effectValue() {
    return this.EffectValue(this.level) * this.data.potion.effectMultiplier.Value();
  }

  PassiveEffectValue(level) {
    return this.EffectValue(level) * 0.01;
  }

  ModifiedPassiveEffectValue(level) {
    return this.PassiveEffectValue(level) * this.data.potion.talismanPassiveEffectMultiplier.Value();
  }

  get passiveEffectMaxValue() {
    return 0.0;
  }

  //   UsefulMethod.passiveEffectNumberType: NumberType => UsefulMethod.NumberType.percent;

  get passiveEffectValue() {
    return this.passiveEffectMaxValue <= 0.0
      ? this.ModifiedPassiveEffectValue(this.disassembledNum)
      : Math.min(this.passiveEffectMaxValue, this.ModifiedPassiveEffectValue(this.disassembledNum));
  }

  get cooltime() {
    return 0.0;
  }

  SetInfo() {}
  get disassembledNum() {
    return this.data.source.potionDisassembledNums[this.kind];
  }
  set disassembledNum(value) {
    this.data.source.potionDisassembledNums[this.kind] = value;
  }

  get talismanDisassembleFragmentNumPerLevel() {
    return Math.pow(5.0, this.talismanRarity);
  }
  SetEffect(heroKind, equipNum) {}
  NameString() {
    return Localization.PotionName(this.kind);
  }

  EffectValueString() {
    return Localization.PotionEffect(this.kind, this.passiveEffectValue, true);
  }
  //   Name() {return Localized.localized.PotionName(this.kind);}
}
