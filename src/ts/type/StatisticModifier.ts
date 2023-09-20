import { statisticModifierType } from "./StatisticModifierType";
import { statisticModifierKind } from "./StatisticModifierKind";

export type StatisticModifier = {
  type: statisticModifierType;
  kind: statisticModifierKind;
  value: number;
};
