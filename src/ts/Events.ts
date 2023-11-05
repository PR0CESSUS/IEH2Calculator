import { App } from "./App";
import { onChange } from "./event/onChange";
import { onClick } from "./event/onClick";
import { customDataExport } from "./event/customDataExport";
import { customDataImport } from "./event/customDataImport";
import { onhashchange } from "./event/onhashchange";

export class Events {
  configRequest: Function;
  afterSettle: Function;
  onChange: Function;
  onLoadSaveFile: Function;
  onClick: Function;
  customDataExport: Function;
  customDataImport: Function;
  onhashchange;

  constructor(app: App) {
    this.customDataExport = customDataExport.bind(app);
    this.customDataImport = customDataImport.bind(app);
    this.onChange = onChange;
    this.onClick = onClick;
    this.onhashchange = onhashchange.bind(app);

    // document.body.addEventListener("htmx:configRequest", this.configRequest.bind(app));
    // document.body.addEventListener("htmx:afterSettle", this.afterSettle.bind(app));
    document.body.addEventListener("change", this.onChange.bind(app));
    document.body.addEventListener("click", this.onClick.bind(app));
    window.onhashchange = this.onhashchange;
  }
}
