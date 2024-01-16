import { convertTo } from "./convertTo";

export function percent(value, num = 2, isDecimalExponential = false) {
  return convertTo(value, 3, "%");
}
