// import { log } from "node:console";
// import { readFileSync, readdirSync } from "node:fs";
import fs from "fs";

console.log(`========== Generator ==========`);
// console.log(fs);

// let importFile = ``;
let group = {};

fs.readdirSync("D:/Project/vue/src/data/Potion/data").forEach((file, index) => {
  try {
    // console.log(file);
    let str = ``;

    let data = fs.readFileSync(`D:/Project/vue/src/data/Potion/data/${file}`, "utf8") as string;

    const kind = data.match(/PotionKind.([a-zA-Z]+)/gm);
    const rarity = data.match(/TalismanRarity.([a-zA-Z]+)/gm);
    const passiveEffectMaxValue = data.match(/get passiveEffectMaxValue\(\) {\n?.*return .*?;/gm);
    const EffectValue = data.match(/  EffectValue\(level\) {\n?.*return .*?;/gm);

    // if (passiveEffectMaxValue) str += `retunr ${passiveEffectMaxValue};\n`;
    if (EffectValue) {
      str += `case ${kind}:\n`;
      console.log(str);
      let temp = EffectValue[0].slice(22);
      // let temp = EffectValue[0].slice(21);
      console.log(temp);
    }

    // if (rarity) {
    //   if (group[rarity as unknown as string] == undefined) {
    //     group[rarity as unknown as string] = [];
    //   } else {
    //     group[rarity as unknown as string].push(kind[0]);
    //   }
    // }

    // if (rarity) str += `  return ${rarity};`;

    // importFile += `import { ${file.slice(0, -4)} } from "./D:/IEH2Calculator/src/ts/data/SuperDungeon/SDP/${file.slice(0, -4)}";\n`;

    // console.log(file.slice(0, -2), data.match(/Cost\(level\) {.*?return (.*?)}/gms)[0]);
    // console.log();
    // fs.writeFileSync(`${CONFIG.PATH_OUTPUT}/${file.slice(0, -4)}.ts`, Replace(data, CONFIG.RULES, true));
    // console.log(`#${index} - ${CONFIG.PATH_OUTPUT}/${file.slice(0, -4)}.ts`);
  } catch (err) {
    console.error(err);
  }
});

// console.log(group);

// let str = ``;
// for (const [key, value] of Object.entries(group)) {
//   for (let index = 0; index < (value as string[]).length; index++) {
//     str += `case ${value[index]}:\n`;
//   }
//   str += `  return ${key};\n`;
// }
// console.log(str);
