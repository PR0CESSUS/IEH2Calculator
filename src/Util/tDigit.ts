import { convertTo } from "./convertTo";
import { ConvertType } from "../type/ConvertType";

export function tDigit(value, type = ConvertType.Normal) {
  return convertTo(value);
}
