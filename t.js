let alphabet = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzżź";
let alphabetExtended = "àáâãäåæçèéêëìíîïðñòôõöøùúûüýÿāăĉċčďđēĕėěĝğġģĥħĩīĭįĳĵķņňōŏőœŕŗřŝşšţťŧũūŭůűųŵŷžƀƅƈƌƒƙƕļľŀĺþƞơƣƥ";
//þƞơƣƥ
let offset = 0;

// for (let index = 0; index < 10; index++) {
//   console.log(`case ${offset}:\n    return "${index}";`);
//   offset++;
// }

for (let index = 0; index < alphabet.length; index++) {
  // console.log(`case ${offset}:\n    return "${alphabet[index]}";`);
  console.log(`${alphabet[index]},`);
  console.log(`${alphabet[index].toUpperCase()},`);
  // offset++;
}

// for (let index = 0; index < alphabet.length; index++) {
//   console.log(`case ${offset}:\n    return "${alphabet[index].toUpperCase()}";`);
//   offset++;
// }

for (let index = 0; index < alphabetExtended.length; index++) {
  console.log(`${alphabetExtended[index]},`);
  console.log(`${alphabetExtended[index].toUpperCase()},`);
  // console.log(`case ${offset}:\n    return "${alphabetExtended[index]}";`);
  // offset++;
  // console.log(`case ${offset}:\n    return "${alphabetExtended[index].toUpperCase()}";`);
  // offset++;
}

function printDups(str) {
  let charCount = {};

  for (let i = 0; i < str.length; i++) {
    let character = str[i];
    charCount[character] = (charCount[character] || 0) + 1;
  }

  for (let char in charCount) {
    if (charCount[char] > 1) {
      console.log(char + ", count = " + charCount[char]);
    }
  }
}

let superString = alphabet + alphabet.toUpperCase() + alphabetExtended + alphabetExtended.toUpperCase();

let str = "geeksforgeeks";
printDups(superString);
console.log(superString);
