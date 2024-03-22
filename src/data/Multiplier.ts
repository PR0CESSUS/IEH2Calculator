import { NumberType } from "../type/NumberType";
import { MultiplierKind } from "../type/MultiplierKind";
import { MultiplierType } from "../type/MultiplierType";
import { Util } from "../Util";
import { Localization } from "@/localization";

export class Multiplier {
  modifiers: MultiplierInfo[] = [];
  additiveKind: { [key in keyof typeof MultiplierKind]: number };
  multiplicativeKind: any;
  afterKind: any;
  additive: number = 0;
  after: number = 0;
  temp: number = 0;
  value: number = 0;
  log: number = 0;
  isLog: boolean = false;
  numberType: NumberType = NumberType.Percent;
  multiplicative: number = 1;
  maxValue: Function;
  minValue: Function;
  debug = false;
  name: string = "";
  constructor(multiplier: MultiplierInfo = new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0), maxValue: Function = () => 1e300, minValue: Function = () => 0) {
    // Func<double> maxValue = null, Func<double> minValue = null
    this.maxValue = maxValue;
    this.minValue = minValue;

    this.RegisterMultiplier(multiplier);
    this.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Mul, () => 0));
  }

  Debug(kind: MultiplierKind, type: MultiplierType) {
    this.modifiers.forEach((modifier) => {
      if (modifier.kind == kind && modifier.type == type) console.log("modifier", modifier);
    });
  }

  Snapshot() {
    this.Calculate();
    return {
      additive: this.additive,
      multiplicative: this.multiplicative,
      after: this.after,
      multiplicativeKind: this.multiplicativeKind,
      additiveKind: this.additiveKind,
      afterKind: this.afterKind,
      value: this.value,
      temp: this.temp,
      log: this.log,
      numberType: this.numberType,
      isLog: this.isLog,
      ValueString: () => this.ValueString(),
      Value: () => this.Value(),
    };
  }

  Value() {
    this.Calculate();

    return this.value;
  }

  ValueString() {
    switch (this.numberType) {
      case NumberType.Normal:
        return Util.tDigit(this.Value(), 2);
      case NumberType.Percent:
        return Util.percent(this.Value(), 2);
      case NumberType.Meter:
        return Util.meter(this.Value(), 2);
      default:
        return this.Value();
    }
  }

  TotalValue() {
    return this.BeforeTotalValue(this.isLog) + this.After();
  }

  RegisterMultiplier(modifier: MultiplierInfo) {
    this.modifiers.push(modifier);
    return () => this.UnregisterMultplier(modifier);
  }

  UnregisterMultplier(modifier: MultiplierInfo) {
    for (let index = 0; index < this.modifiers.length; index++) {
      if (this.modifiers[index] == modifier) this.modifiers.splice(index, 1);
    }
  }

  After() {
    return this.after;
  }

  Calculate() {
    // if (this.isDirty == false) return;
    this.additiveKind = {} as { [key in keyof typeof MultiplierKind]: number };
    this.multiplicativeKind = {} as any;
    this.afterKind = {} as any;
    for (let index = 0; index < this.modifiers.length; index++) {
      const modifier = this.modifiers[index];
      if (modifier.trigger() == false) continue;
      // if (modifier.kind == 10) console.log(modifier.value());

      switch (modifier.type) {
        case MultiplierType.Add:
          if (this.additiveKind[MultiplierKind[modifier.kind]]) {
            this.additiveKind[MultiplierKind[modifier.kind]] += modifier.value();
          } else {
            this.additiveKind[MultiplierKind[modifier.kind]] = modifier.value();
          }

          break;
        case MultiplierType.Mul:
          if (this.multiplicativeKind[MultiplierKind[modifier.kind]]) {
            this.multiplicativeKind[MultiplierKind[modifier.kind]] += modifier.value();
          } else {
            this.multiplicativeKind[MultiplierKind[modifier.kind]] = 1 + modifier.value();
          }

          break;
        case MultiplierType.After:
          if (this.afterKind[MultiplierKind[modifier.kind]]) {
            this.afterKind[MultiplierKind[modifier.kind]] += modifier.value();
          } else {
            this.afterKind[MultiplierKind[modifier.kind]] = modifier.value();
          }

          break;
        default:
          break;
      }
    }
    this.additive = Object.values(this.additiveKind).reduce((a, b) => (a as number) + (b as number), 0) as number;
    this.multiplicative = Object.values(this.multiplicativeKind).reduce((a, b) => (a as number) * (b as number)) as number;
    this.after = Object.values(this.afterKind).reduce((a, b) => (a as number) + (b as number), 0) as number;
    this.temp = this.BeforeTotalValue(false);
    this.log = this.BeforeTotalValue(true);
    this.value = Math.max(this.minValue(), Math.min(this.maxValue(), this.TotalValue()));
  }

  BeforeTotalValue(isLog: boolean) {
    if (isLog) {
      let a = this.additive * this.multiplicative;

      switch (this.numberType) {
        case NumberType.Normal:
          return a < 1.0 ? a : this.modifiers[0].Value + Math.log10(a);
        case NumberType.Percent:
          return this.modifiers[0].Value >= 1.0 ? (a < 1.0 ? a : this.modifiers[0].Value + Math.log10(a)) : a < 0.01 ? a : this.modifiers[0].Value + Math.log10(a * 100.0) / 100.0;
        case NumberType.Meter:
          return a < 100.0 ? a : this.modifiers[0].Value + Math.log10(a / 100.0) * 100.0;
      }
    }
    return this.additive * this.multiplicative;
  }

  PrintModifiers(type: MultiplierType = 0) {
    for (let index = 0; index < this.modifiers.length; index++) {
      const modifier = this.modifiers[index];
      if (modifier.type == type) console.log(Localization.StatsBreakdown(modifier.kind), MultiplierType[modifier.type], modifier.Value);
    }
  }
}

export class MultiplierInfo {
  kind: MultiplierKind;
  type: MultiplierType;
  value: Function;
  trigger: Function;
  constructor(kind: MultiplierKind, type: MultiplierType, value: Function, trigger: Function = () => true) {
    this.kind = kind;
    this.type = type;
    this.value = value;
    this.trigger = trigger;
  }

  get Value() {
    return this.value();
  }

  get info() {
    return `kind: ${MultiplierKind[this.kind]}, type: ${MultiplierType[this.type]}, trigger: ${this.trigger()}, value: ${this.Value}`;
  }
}
