import { convertTo } from "./convertTo";

export function percent(value) {
  return convertTo(value, 2, "%");
}
