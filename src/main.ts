// import { SaveFileReader } from "./SaveFileReader";
import { ITest, DataInitialization } from "./ts/type/TestType";
import { saveFileData } from "../experiment/data";
// import { SaveFileReader } from "./ts/SaveFileReader";
import { App } from "./ts/App";
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
// hljs.registerLanguage("javascript", javascript);
// console.log(data.openedChestNum);
// console.log(saveFileData);
// localStorage.clear();
// localStorage.setItem("saveData", "chuj");
// localStorage.setItem("saveData", JSON.stringify(saveFileData));
// let router = new Router(data);

let app = new App();

if (process.env.NODE_ENV === "production") {
  // Code will only appear in production build.
  console.log("production", app.data.calculator.slimeBank.html);
}

if (process.env.NODE_ENV === "development") {
  // Code will only appear in production build.
  //   console.log("development", calculator.data.calculator.slimeBank.html);
}

function getCode(fn) {
  // console.log(fn);
  // const rawText = Object.getOwnPropertyDescriptors(CalculatorSlimeBank.prototype)[fn].get.toString();
  // const text = hljs.highlight(rawText, { language: "javascript" }).value;
  // console.log(text);
  // console.log(Object.getOwnPropertyDescriptors(CalculatorSlimeBank.prototype)[fn].get.toString());
  // return text.replaceAll(/(this.data.*)/gm, '<span class="link">$1</span>');
}

// <div class="tooltiptext">${getCode("slimeCoinCapTotal")}</div>

// for (const [key, value] of Object.entries(localStorage)) {
//   console.log(key, value);

// }
