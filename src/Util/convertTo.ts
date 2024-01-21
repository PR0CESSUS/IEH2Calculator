import { NumberType } from "../type/NumberType";
import { secondsToDhms } from "./secondsToDhms";

export function convertTo(input, precision = 2, type: NumberType | null = null) {
  input = parseFloat(input);
  let output: number | string = 0;
  let isNegative = false;
  if (type == NumberType.TimeDhms) return secondsToDhms(input);
  if (type == NumberType.Meter) input /= 100;
  if (type == NumberType.Percent) input *= 100;

  if (input < 0) {
    input *= -1;
    isNegative = true;
  }

  if (input <= 10000) {
    output = input.toFixed(precision);
  } else if (input < 1000000) {
    output = (input / 1000).toFixed(precision) + "K";
  } else if (input < 1000000000) {
    output = (input / 1000000).toFixed(precision) + "M";
  } else if (input < 1000000000000) {
    output = (input / 1000000000).toFixed(precision) + "B";
  } else if (input < 1000000000000000) {
    output = (input / 1000000000000).toFixed(precision) + "T";
  } else {
    output = input.toExponential(precision);
  }
  if (type == NumberType.Meter) return output + "m / sec";

  if (isNegative) {
    (output as string).slice(0, 1);
    output = "-" + output;
  }
  if (type == NumberType.Percent) output += "%";

  return output.toString();
}
