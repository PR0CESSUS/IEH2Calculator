import { Enums } from "../../Enums";
import { HeroKind } from "../../type/HeroKind";
import { PotionKind } from "../../type/PotionKind";
import { PotionType } from "../../type/PotionType";
import { TalismanRarity } from "../../type/TalismanRarity";

export class PotionGlobalInformation {
  kind: PotionKind = 0;
  type: PotionType;
  //   talismanRarity: TalismanRarity;

  get talismanRarity() {
    return 0;
  }

  get level() {
    return globalThis.data.source.potionLevels[this.kind];
  }

  set level(value) {
    globalThis.data.source.potionLevels[this.kind] = Math.min(this.type == PotionType.Talisman ? 50 : 100, value);
  }

  EffectValue(level) {
    return 0.0;
  }
  IsActiveEffect(heroKind: HeroKind, stack: Function) {
    if (!globalThis.data.source.isActiveBattle[heroKind] || stack() == 0 || this.kind == 0) return false;

    return true;
  }
  get effectValue() {
    return this.EffectValue(this.level) * globalThis.data.potion.effectMultiplier.Value();
  }

  PassiveEffectValue(level) {
    return this.EffectValue(level) * 0.01;
  }

  ModifiedPassiveEffectValue(level) {
    return this.PassiveEffectValue(level) * globalThis.data.potion.talismanPassiveEffectMultiplier.Value();
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
    return globalThis.data.source.potionDisassembledNums[this.kind];
  }
  set disassembledNum(value) {
    globalThis.data.source.potionDisassembledNums[this.kind] = value;
  }
  constructor() {
    this.SetInfo();
  }

  get talismanDisassembleFragmentNumPerLevel() {
    return Math.pow(5.0, this.talismanRarity);
  }

  //   Name() {return Localized.localized.PotionName(this.kind);}
}
