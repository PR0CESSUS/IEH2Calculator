import { App } from "./src/ts/App";
import { DATA } from "./src/ts/Data";

declare global {
  var app: App;
  var data: DATA;
}
