import { Data } from "./Data";
import { Events } from "./Events";
import { Logics } from "./Logics";
import { set, get } from "lodash";
import { convertTo } from "./util/convertTo";
import { convertFrom } from "./util/convertFrom";

export class CalculatorMainframe {
  page;
  tab;
  data;
  logic: Logics;
  event: Events;
  _set = set;
  _get = get;
  convertTo = convertTo;
  constructor() {
    this.load();
    // console.log(this.custom);

    this.logic = new Logics(this);
    this.event = new Events();

    // console.log(this._);

    this.eventDispatcher();
  }

  eventDispatcher() {
    // console.log(this.event.urlHashReload );

    document.body.addEventListener("htmx:configRequest", this.event.configRequest.bind(this));
    document.body.addEventListener("htmx:afterSettle", this.event.afterSettle.bind(this));
    document.body.addEventListener("change", this.event.onChange.bind(this));
    document.body.addEventListener("onLoadSaveFile", this.event.onLoadSaveFile.bind(this));
    // document.body.addEventListener("htmx:beforeRequest", this.event.beforeRequest.bind(this));
    // document.body.addEventListener("onTabChange", this.event.onTabChange.bind(this));
    // document.body.addEventListener("htmx:afterSettle", this.event.bind(this)  );
    // document.body.addEventListener("htmx:afterSettle", this.event.bind(this));
    // document.body.addEventListener("htmx:configRequest", this.event.urlHashReload.bind(this), { once: true });
  }

  get(endpoint, precision = 0, type = null) {
    //secondsToDhms(time)
    if (precision || type) {
      return convertTo(this._get(this.data, endpoint, 0), precision, type);
    } else {
      return this._get(this.data, endpoint, 0);
    }
  }

  set(endpoint, value) {
    // === or == ? find a better way to fix this shit
    // if (this.data == JSON.parse(localStorage.getItem("data"))) {
    // console.log(endpoint, value);
    // this._set(this.data, endpoint, convertFrom(value));
    this._set(this.data, endpoint, value);

    // save new value to localStorage
    localStorage.setItem("data", JSON.stringify(this.data));
    // } else {
    //   console.log("data missmatch, replacing with localStorage, and continue");
    //   this.data = JSON.parse(localStorage.getItem("data"));
    //   this._set(this.data, endpoint, convertFrom(value));
    //   localStorage.setItem("data", JSON.stringify(this.data));
    // }
  }

  load() {
    if (localStorage.getItem("data")) {
      this.data = JSON.parse(localStorage.getItem("data"));
      // console.log(this.data);
    } else {
      this.data = {};
    }
  }
  updateContent() {
    // this.addTab();
    // .addEventListener("click", this.event.onTabChange.bind(this));
    this.logic.update();
    const elementType = ["warning", "custom", "data"];
    // change class savefilewarning to savefileok if there is data in store

    let children: NodeListOf<HTMLElement> = document.querySelectorAll("[data-endpoint]");
    // console.log(children);

    for (let index = 0; index < children.length; index++) {
      const element = children[index] as HTMLInputElement;
      let precision = 0;
      let type = null;
      let base = 0;

      if (element.dataset.precision) {
        precision = parseInt(element.dataset.precision);
      }

      if (element.dataset.type) {
        type = element.dataset.type;
      }
      if (element.dataset.base) {
        base = parseInt(element.dataset.base);
      }
      //@ts-ignore

      //@ts-ignore
      // console.log(this.data.version);
      if (element.tagName == "INPUT" && element.type == "checkbox") {
        // console.log("checkbox update");
        // console.log(element);

        let value = this.get(element.dataset.endpoint, precision, type);
        // (element as HTMLInputElement).checked = value >= element.dataset.test ? true : false;
        element.checked = value >= element.dataset.test ? true : false;

        //@ts-ignore
      } else if (element.tagName == "INPUT" && element.type == "text") {
        element.value = base + this.get(element.dataset.endpoint, precision, type);

        //@ts-ignore

        // element.addEventListener("change", this.onChange);
        //@ts-ignore
        // console.log(this.getPath(element.dataset.endpoint));
      } else {
        //@ts-ignore
        element.innerHTML = base + this.get(element.dataset.endpoint, precision, type);
        // console.log("asd");
      }

      //@ts-ignore
      // console.log(element.dataset.endpoint);
    }

    // console.log("equ");
    // console.log(document.getElementById("content").children);
    //@ts-ignore

    // console.log(event.detail.requestConfig.elt.innerHTML);
  }

  highlight() {
    let pageChildren = document.getElementsByClassName("sidebar")[0].children;
    // console.log(pageChildren);

    for (let index = 0; index < pageChildren.length; index++) {
      const element = pageChildren[index];

      if (element.textContent.toLowerCase().replace(" ", "") == this.page) {
        element.classList.add("active");
      } else {
        element.classList.contains("active");
        element.classList.remove("active");
      }
    }

    if (document.getElementsByClassName("tablist").length) {
      // console.log(document.getElementsByClassName("tablist"));

      let children = document.getElementsByClassName("tablist")[0].children;
      // console.log(children);

      for (let index = 0; index < children.length; index++) {
        const element = children[index];
        // console.log(element.textContent.toLowerCase(), this.tab);
        if (element.textContent.toLowerCase() == this.tab) {
          element.classList.add("active");
        } else {
          element.classList.contains("active");
          element.classList.remove("active");
        }
      }
    }
  }
}
