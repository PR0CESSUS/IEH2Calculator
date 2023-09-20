import { App } from "./App";
import { configRequest } from "./event/configRequest";
// import { loadFromSaveFile } from "./event/loadFromSaveFile";
import { afterSettle } from "./event/afterSettle";
import { onChange } from "./event/onChange";
import { onLoadSaveFile } from "./event/onLoadSaveFile";
import { onTabChange } from "./event/onTabChange";
import { onClick } from "./event/onClick";
import { beforeRequest } from "./event/beforeRequest";
import { downloadCustomData } from "./event/downloadCustomData";
import { uploadCustomData } from "./event/uploadCustomData";

export class Events {
  configRequest: Function;
  // loadFromSaveFile = loadFromSaveFile;
  afterSettle: Function;
  onChange: Function;
  onLoadSaveFile: Function;
  onTabChange: Function;
  onClick: Function;
  beforeRequest: Function;
  downloadCustomData: Function;
  uploadCustomData: Function;
  constructor(app: App) {
    this.downloadCustomData = downloadCustomData.bind(app);
    this.uploadCustomData = uploadCustomData.bind(app);
    this.afterSettle = afterSettle;
    this.configRequest = configRequest;
    this.onChange = onChange;
    this.onLoadSaveFile = onLoadSaveFile;
    this.onClick = onClick;

    document.body.addEventListener("htmx:configRequest", this.configRequest.bind(app));
    document.body.addEventListener("htmx:afterSettle", this.afterSettle.bind(app));
    document.body.addEventListener("change", this.onChange.bind(app));
    document.body.addEventListener("onLoadSaveFile", this.onLoadSaveFile.bind(app));
    document.body.addEventListener("click", this.onClick.bind(app));
  }
}
