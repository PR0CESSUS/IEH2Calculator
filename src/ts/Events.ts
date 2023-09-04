import { urlHashReload } from "./event/urlHashReload";
// import { loadFromSaveFile } from "./event/loadFromSaveFile";
import { afterSettle } from "./event/afterSettle";
import { onChange } from "./event/onChange";

export class Events {
  urlHashReload = urlHashReload;
  // loadFromSaveFile = loadFromSaveFile;
  afterSettle = afterSettle;
  onChange = onChange;

  constructor() {}
}
