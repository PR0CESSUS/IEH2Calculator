export class Potion {
  kind = 0;
  passiveEffectMaxValue = 0;
  constructor() {}
  get disassembled() {
    return globalThis.data.source.potionDisassembledNums[this.kind];
  }
  get level() {
    return globalThis.data.source.potionLevels[this.kind];
  }
  ModifiedPassiveEffectValue(level) {
    return this.PassiveEffectValue(level) * globalThis.data.potion.talismanPassiveEffectMultiplier.Value();
  }
  get passiveEffectValue() {
    // if (this.kind >= 32) {
    //   if (this.passiveEffectMaxValue < this.PassiveEffectValue(this.disassembled)) return this.PassiveEffectValue(this.disassembled) * globalThis.data.potion.talismanPassiveEffectMultiplier.Value();
    // }
    return this.passiveEffectMaxValue <= 0.0 ? this.ModifiedPassiveEffectValue(this.disassembled) : Math.min(this.passiveEffectMaxValue, this.ModifiedPassiveEffectValue(this.disassembled));
    return this.PassiveEffectValue(this.disassembled);
  }

  get alchemyPointGain() {
    return this.AlchemyPointGain(this.level);
  }

  get effectValue() {
    return this.EffectValue(this.level) * globalThis.data.potion.effectMultiplier.Value();
  }

  get passiveEffectNumberType() {
    return "percent";
  }

  PassiveEffectValue(level) {
    return this.EffectValue(level) * 0.01;
  }

  EffectValue(level) {
    return 0.0;
  }

  AlchemyPointGain(level) {
    return 1;
  }

  SetEffect(heroKind, equipNum) {}

  SetPassiveEffect() {}
}
