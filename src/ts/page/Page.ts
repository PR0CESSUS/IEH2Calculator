import { App } from "../App";

export class Page {
  app: App;
  name: string = "";
  url: string = "";
  custom: any;
  constructor(app: App) {
    this.app = app;
    app.router.register(
      () => this.url,
      () => this.name,
      () => this.html
    );
    // this.Load();
  }

  get html() {
    return "Missing html";
  }

  Load() {
    let data = localStorage.getItem("CustomData");

    // console.log(data);

    if (data && data != "undefined") {
      data = JSON.parse(localStorage.getItem("CustomData"));
      this.custom = data[this.url.slice(1)];
    } else {
      this.Initialization();
    }
  }

  Initialization() {
    this.custom = {};
  }

  Save() {
    let data = localStorage.getItem("CustomData");

    if (data == null) localStorage.setItem("CustomData", JSON.stringify({}));

    data = JSON.parse(data);
    data[this.url.slice(1)] = this.custom;
    localStorage.setItem("CustomData", JSON.stringify(data));
    // console.log("asd", data[this.url.slice(1)]);

    //
  }
}
