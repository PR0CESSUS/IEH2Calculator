import { MultiplierKind } from "./type/MultiplierKind";
import { MultiplierType } from "./type/MultiplierType";
import { convertTo } from "./util/convertTo";

export class Multiplier {
  isDirty: boolean;
  modifiers: MultiplierInfo[] = [];
  additiveKind: { [key in keyof typeof MultiplierKind]: number } = {} as any;
  multiplicativeKind: { [key in keyof typeof MultiplierKind]: number } = {} as any;
  additive = 0;
  multiplicative = 1;
  maxValue: Function | null;
  minValue: Function | null;
  constructor(multiplier: MultiplierInfo = new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0), maxValue: Function = null, minValue: Function = null) {
    // Func<double> maxValue = null, Func<double> minValue = null

    this.RegisterMultiplier(multiplier);
  }

  get value() {
    if (this.isDirty) this.calculate();
    return this.additive * this.multiplicative;
  }
  Value() {
    if (this.isDirty) this.calculate();
    return this.additive * this.multiplicative;
  }

  RegisterMultiplier(modifier: MultiplierInfo) {
    this.modifiers.push(modifier);
    this.isDirty = true;
  }

  calculate() {
    this.additiveKind = {} as any;
    this.multiplicativeKind = {} as any;
    for (let index = 0; index < this.modifiers.length; index++) {
      const modifier = this.modifiers[index];
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
        default:
          break;
      }
    }
    this.isDirty = false;
  }

  get html() {
    if (this.isDirty) this.calculate();
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
  constructor(kind: MultiplierKind, type: MultiplierType, value: Function) {
    this.kind = kind;
    this.type = type;
    this.value = value;
  }

  get Value() {
    return this.value();
  }
}
