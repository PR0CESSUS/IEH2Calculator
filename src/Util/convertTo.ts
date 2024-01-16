//@ts-nocheck
import { secondsToDhms } from "./secondsToDhms";

export function convertTo(input, precision = 2, kind: string | null = null) {
  input = parseFloat(input);
  let output = 0;
  let kindPercent = ["percent", "%"];
  let kindRaw = ["MoveSpeedAdder"];
  let isNegative = false;

  if (kind == "time-h") {
    return input / 60 / 60 + "h";
  }
  if (kind == "time") {
    return secondsToDhms(input);
  }

  if (kind == "E") {
    return input.toExponential(precision);
  }
  // kindPercent.forEach(element => {
  //   if (kind == element) {
  //     input *= 100;
  //   }
  // });
  if (kindRaw.includes(kind)) {
    input /= 100;
  }

  if (kindPercent.includes(kind)) {
    input *= 100;
  }
  if (input < 0) {
    // console.log("negative");

    input *= -1;
    // console.log(input);
    isNegative = true;
  }
  if (kind == "meter") {
    input = input / 100;
  }

  if (input == 0) {
    output = 0;
  } else if (input <= 10000) {
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
  if (kind == "meter") {
    return output + "m / sec";
  }
  if (isNegative) {
    output.slice(0, 1);
    output = "-" + output;
  }

  kindPercent.forEach((element) => {
    if (kind == element) {
      output += "%";
    }
  });

  return output;
}
