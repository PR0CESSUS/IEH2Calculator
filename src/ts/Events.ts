import { configRequest } from "./event/configRequest";
// import { loadFromSaveFile } from "./event/loadFromSaveFile";
import { afterSettle } from "./event/afterSettle";
import { onChange } from "./event/onChange";
import { onLoadSaveFile } from "./event/onLoadSaveFile";
import { onTabChange } from "./event/onTabChange";
import { onClick } from "./event/onClick";
import { beforeRequest } from "./event/beforeRequest";

export class Events {
  configRequest = configRequest;
  // loadFromSaveFile = loadFromSaveFile;
  afterSettle = afterSettle;
  onChange = onChange;
  onLoadSaveFile = onLoadSaveFile;
  onTabChange = onTabChange;
  onClick = onClick;
  beforeRequest = beforeRequest;
  constructor() {}
}
