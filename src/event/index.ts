import { App } from "../App";
import { onChange } from "./onChange";
import { onClick } from "./onClick";
import { customDataExport } from "./customDataExport";
import { customDataImport } from "./customDataImport";
import { onhashchange } from "./onhashchange";
import { onKeyDown } from "./keydown";
import { dialogBackdropClose } from "./dialog";
import { SaveFileDencrypt } from "../SaveFileDencrypt";

export class Events {
  configRequest: Function;
  afterSettle: Function;
  onChange: Function;
  onLoadSaveFile: Function;
  onClick: Function;
  customDataExport: Function;
  customDataImport: Function;
  onKeyDown: Function;
  onhashchange;
  dialogBackdropClose;

  constructor(app: App) {
    // this.customDataExport = customDataExport.bind(app);
    // this.customDataImport = customDataImport.bind(app);
    // this.onChange = onChange;
    // this.onClick = onClick;
    // this.onhashchange = onhashchange.bind(app);
    // this.onKeyDown = onKeyDown;
    // this.dialogBackdropClose = dialogBackdropClose;

    // document.body.addEventListener("htmx:configRequest", this.configRequest.bind(app));
    // document.body.addEventListener("htmx:afterSettle", this.afterSettle.bind(app));
    // document.body.addEventListener("change", this.onChange.bind(app));

    (document.getElementById("saveFileImport") as HTMLInputElement).onchange = (event: Event & { target: HTMLInputElement }) => {
      if (!event.target.files) return;
      const filereader = new FileReader();
      filereader.readAsText(event.target.files[0]);
      filereader.onloadend = () => {
        globalThis.data.source = new SaveFileDencrypt(filereader.result as string).data;
        globalThis.data.save();
        window.alert("Save File loaded!");
        location.reload();
      };
    };
    document.getElementById("data-restart").onclick = (event) => {
      if (window.confirm("Clear data?")) {
        localStorage.clear();
        window.alert("Data cleared");
        location.reload();
      }
    };

    // document.body.addEventListener("click", this.onClick.bind(app));
    // document.body.addEventListener("keydown", this.onKeyDown.bind(app));
    // window.onhashchange = this.onhashchange;
  }
}
