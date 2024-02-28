import { stringToPath } from "./stringToPath";

export function get(object, path: string) {
  const pathArray = stringToPath(path);
  for (let index = 0; index < pathArray.length; index++) {
    if (pathArray[index].includes("(")) {
      const func = pathArray[index].replace(/(\w+)\((.*?)\)/gm, "$1");
      const args = pathArray[index].replace(/(\w+)\((.*?)\)/gm, "$2");
      object = object[func](args);
    } else if (pathArray[index]) {
      object = object[pathArray[index]];
    }
  }

  return object;
}
