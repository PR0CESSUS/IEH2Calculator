import { ConvertType } from "./type/ConvertType";
import { MultiplierKind } from "./type/MultiplierKind";
import { MultiplierType } from "./type/MultiplierType";
import { convertTo } from "./Util/convertTo";

export class Multiplier {
  isDirty: boolean = true;
  modifiers: MultiplierInfo[] = [];
  additiveKind: { [key in keyof typeof MultiplierKind]: number } = {} as any;
  multiplicativeKind: { [key in keyof typeof MultiplierKind]: number } = {} as any;
  afterKind: { [key in keyof typeof MultiplierKind]: number } = {} as any;
  additive = 0;
  after = 0;
  temp = 0;
  log = 0;
  isLog: boolean = false;
  numberType: ConvertType = ConvertType.Percent;
  multiplicative = 1;
  maxValue: Function;
  minValue: Function;
  constructor(
    multiplier: MultiplierInfo = new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
    maxValue: Function = () => 1e300,
    minValue: Function = () => 0
  ) {
    // Func<double> maxValue = null, Func<double> minValue = null
    this.maxValue = maxValue;
    this.minValue = minValue;

    this.RegisterMultiplier(multiplier);
    this.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Mul, () => 0));
  }

  get value() {
    this.isDirty = true;
    return this.Value();
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
      Value: this.Value(),
      After: this.After(),
      temp: this.temp,
    };
  }

  Value() {
    this.Calculate();

    return Math.max(this.minValue(), Math.min(this.maxValue(), this.TotalValue()));
  }

  TotalValue() {
    return this.BeforeTotalValue(this.isLog) + this.After();
  }

  RegisterMultiplier(modifier: MultiplierInfo) {
    modifier.index = this.modifiers.length;
    this.modifiers.push(modifier);
    this.isDirty = true;
    return () => this.UnregisterMultplier(modifier.index);
  }

  UnregisterMultplier(index) {
    if (index) console.log(`Multiplier # removing index ${index} `);
    if (index > -1) this.modifiers.splice(index, 1);
    this.isDirty = true;
  }

  After() {
    this.Calculate();

    return this.after;
  }

  Calculate() {
    // if (this.isDirty == false) return;
    this.additiveKind = {} as any;
    this.multiplicativeKind = {} as any;
    this.afterKind = {} as any;
    for (let index = 0; index < this.modifiers.length; index++) {
      const modifier = this.modifiers[index];
      if (modifier.kind == 24) {
        // console.log(modifier.value);
      }
      if (modifier.trigger() == false) continue;
      // if (modifier.kind == 10) console.log(modifier.value());

      switch (modifier.type) {
        case MultiplierType.Add:
          if (this.additiveKind[MultiplierKind[modifier.kind]]) {
            this.additiveKind[MultiplierKind[modifier.kind]] += modifier.value();
          } else {
            this.additiveKind[MultiplierKind[modifier.kind]] = modifier.value();
          }
          this.additive = Object.values(this.additiveKind).reduce((a, b) => a + b, 0);
          break;
        case MultiplierType.Mul:
          if (this.multiplicativeKind[MultiplierKind[modifier.kind]]) {
            this.multiplicativeKind[MultiplierKind[modifier.kind]] += modifier.value();
          } else {
            this.multiplicativeKind[MultiplierKind[modifier.kind]] = 1 + modifier.value();
          }
          this.multiplicative = Object.values(this.multiplicativeKind).reduce((a, b) => a * b);
          break;
        case MultiplierType.After:
          if (this.afterKind[MultiplierKind[modifier.kind]]) {
            this.afterKind[MultiplierKind[modifier.kind]] += modifier.value();
          } else {
            this.afterKind[MultiplierKind[modifier.kind]] = modifier.value();
          }
          this.after = Object.values(this.afterKind).reduce((a, b) => a + b, 0);
          break;
        default:
          break;
      }
    }

    this.temp = this.BeforeTotalValue(false);
    this.log = this.BeforeTotalValue(true);
    // TODO liczenie log dla normal i procent

    this.isDirty = false;
  }

  BeforeTotalValue(isLog: boolean) {
    if (isLog) {
      let a = this.additive * this.multiplicative;
      switch (this.numberType) {
        case ConvertType.Normal:
          return a < 1.0 ? a : this.modifiers[0].Value + Math.log10(a);
        case ConvertType.Percent:
          return this.modifiers[0].Value >= 1.0
            ? a < 1.0
              ? a
              : this.modifiers[0].Value + Math.log10(a)
            : a < 0.01
            ? a
            : this.modifiers[0].Value + Math.log10(a * 100.0) / 100.0;
        case ConvertType.Meter:
          return a < 100.0 ? a : this.modifiers[0].Value + Math.log10(a / 100.0) * 100.0;
      }
    }
    return this.additive * this.multiplicative;
  }

  get html() {
    if (this.isDirty) this.Calculate();
    let str = "";
    str += /*html*/ `<table>`;
    str += /*html*/ `<tr><td class="equipment-heading">Additive:</td> <td></td></tr>`;
    for (const [key, value] of Object.entries(this.additiveKind)) {
      str += `<tr><td>-${key}</td> <td>${convertTo(value, 2, "%")}</td></tr>`;
    }
    str += /*html*/ `<tr><td></td></tr>`;
    str += /*html*/ `<tr><td></td></tr>`;
    str += /*html*/ `<tr><td class="equipment-heading">Multiplicative:</td> <td></td></tr>`;
    for (const [key, value] of Object.entries(this.multiplicativeKind)) {
      str += `<tr><td>-${key}</td> <td>${convertTo(value, 2, "%")}</td></tr>`;
    }
    str += /*html*/ `<tr><td></td></tr>`;
    str += /*html*/ `<tr><td></td></tr>`;
    str += /*html*/ `<tr><td class="equipment-heading">Total:</td> <td>${convertTo(this.Value(), 2, "%")}</td></tr>`;
    str += /*html*/ `</table>`;
    return str;
  }
}

export class MultiplierInfo {
  kind: MultiplierKind;
  type: MultiplierType;
  value: Function;
  trigger: Function;
  index: number;
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
