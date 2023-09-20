import { StatisticModifier } from "./type/StatisticModifier";
import { statisticModifierKind } from "./type/StatisticModifierKind";
import { statisticModifierType } from "./type/StatisticModifierType";

export class Statistic {
  // value change to total
  // add isDirty
  valueLimitMax: number = 0;
  valueLimitMin: number = 0;
  modifiers: StatisticModifier[];

  constructor(baseValue: number) {
    this.modifiers = [
      {
        type: statisticModifierType.base,
        kind: statisticModifierKind.base,
        value: baseValue,
      },
    ];
  }

  reduce(value: number) {}

  get total() {
    let base = 0;
    let additive = 0;
    let multiplicative = 1;

    for (let index = 0; index < this.modifiers.length; index++) {
      const modifier = this.modifiers[index];
      switch (modifier.type) {
        case statisticModifierType.base:
          base = modifier.value;
          break;
        case statisticModifierType.add:
          additive += modifier.value;
          break;
        default:
          break;
      }
    }
    return (base + additive) * multiplicative;
  }

  add(modifier: StatisticModifier) {
    this.modifiers.push(modifier);
  }
}
