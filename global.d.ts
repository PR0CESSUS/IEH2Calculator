import { App } from "./src/App";
import { DATA } from "./src/Data";

declare global {
  var app: App;
  var data: DATA;
}
