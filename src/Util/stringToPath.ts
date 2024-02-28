const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const reEscapeChar = /\\(\\)?/g;

export function stringToPath(string) {
  let path = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    path.push("");
  }
  string.replace(rePropName, function (match, number, quote, subString) {
    path.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });

  return path;
}
