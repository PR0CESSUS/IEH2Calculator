//@ts-nocheck
export function convertFrom(input) {
  // console.log("convertFrom", input);
  if (input instanceof String) {
    if (input.includes("e+")) {
      // console.log(input);
      return input;
    }
  }

  // console.log("object !");
  if (input >= 1e15) {
    return input;
  }
  // console.log(input);
  input = input.toString();

  input = input.replace(/,/g, "."); // convert , to .
  if (/^\d*\.?\d+$/.test(input)) {
    return parseFloat(input);
  } // return rounded number if there is no abbreviete
  else {
    const regex = /(.*)(\D)$/gm;
    input = input.toLowerCase();
    input = input.replace(/ /g, ""); // removes all spaces

    input = regex.exec(input);
    let output = 0;
    if (input[2] == "t") {
      output = input[1] * 1000 ** 4;
    } else if (input[2] == "b") {
      output = input[1] * 1000 ** 3;
    } else if (input[2] == "m") {
      output = input[1] * 1000 ** 2;
    } else if (input[2] == "k") {
      output = input[1] * 1000 ** 1;
    }
    // console.log(output, "from");

    //@ts-ignore
    return parseFloat(output);
  }
}
