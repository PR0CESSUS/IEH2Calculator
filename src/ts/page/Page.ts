import { App } from "../App";

export class Page {
  name: string = "";
  url: string = "";
  logic: any;
  constructor(url: string = "", name: string = "", logic) {
    this.url = url;
    this.name = name;
    this.logic = logic;
    this.logic.endpoint = `page['${this.url.slice(1)}'].logic`;
    // console.log(this.logic);
    this.Load();
    this.logic.Initialization();

    globalThis.app.router.register(
      () => this.url,
      () => this.name,
      () => this.html
    );
  }

  get html() {
    return this.logic.html;
  }

  Load() {
    let data = localStorage.getItem(`CustomData-${this.url.slice(1)}`);
    // console.log(data, `CustomData-${this.url.slice(1)}`);

    if (data == null && this.logic.custom != undefined) {
      localStorage.setItem(`CustomData-${this.url.slice(1)}`, JSON.stringify(this.logic.custom));
    } else {
      this.logic.custom = { ...this.logic.custom, ...JSON.parse(data) };
      // if (this.url == "#equipment") console.log(data);
    }
    // this.Initialization();
    // // console.log(data);
    // if (data && data != "undefined") {
    //   data = JSON.parse(localStorage.getItem("CustomData"));
    //   this.custom = { ...this.custom, ...data[this.url.slice(1)] };
    // } else {
    // }
  }

  Save() {
    if (this.logic.custom != undefined && Object.keys(this.logic.custom).length != 0)
      localStorage.setItem(`CustomData-${this.url.slice(1)}`, JSON.stringify(this.logic.custom));
    // let data = localStorage.getItem("CustomData");
    // if (data == null) {
    //   let custom = {
    //     [this.url.slice(1)]: this.custom,
    //   };
    //   console.log(custom);
    //   localStorage.setItem("CustomData", JSON.stringify(custom));
    // }
    // data = JSON.parse(data);
    // if (data[this.url.slice(1)] == undefined || data[this.url.slice(1)] == "undefined" || data[this.url.slice(1)] == null)
    //   data[this.url.slice(1)] = {};
    // data[this.url.slice(1)] = this.custom;
    // localStorage.setItem("CustomData", JSON.stringify(data));
    // console.log("asd", data[this.url.slice(1)]);
    //
  }
}
