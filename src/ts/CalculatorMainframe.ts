import { DATA } from "./Data";
import { Events } from "./Events";
import { Logics } from "./Logics";
import { set, get } from "lodash";
import { convertTo } from "./util/convertTo";
import { convertFrom } from "./util/convertFrom";

export class CalculatorMainframe {
  page;
  tab;
  data: DATA;
  logic: Logics;
  event: Events;
  _set = set;
  _get = get;

  constructor() {
    this.data = new DATA();
    this.event = new Events();
    this.logic = new Logics(this);
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

  get(endpoint, precision = 0, type = "", base = 0) {
    // if (endpoint == "upgrade.SlimeBank.SlimeCoinCap2.level") {
    //   console.log("jest!");
    //   console.log(this._get(this.data, "upgrade.SlimeBank.SlimeCoinCap2.level", 0));
    //   console.log(this.data);
    // }
    //secondsToDhms(time)
    if (precision || type) {
      return convertTo(base + this._get(this.data, endpoint, 0), precision, type);
    } else {
      return this._get(this.data, endpoint, 0);
    }
  }

  set(endpoint, value) {
    // console.log(endpoint, value, convertFrom(value));

    let controller = endpoint.split(".")[0];
    let lastElement = endpoint.split(".").slice(-1)[0];
    if (controller == "custom" && lastElement == "name") {
      // console.log(lastElement);
      this._set(this.data, endpoint, value);
    } else {
      this._set(this.data, endpoint, convertFrom(value));
    }

    this.data.update(endpoint);
    // this._set(this.data, endpoint, value);

    // save new value to localStora ge
    this.data.save();
  }

  load() {}
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

      switch (element.tagName) {
        case "INPUT":
          switch (element.type) {
            case "checkbox":
              let value = this.get(element.dataset.endpoint, precision, type);
              element.checked = value >= element.dataset.test ? true : false;
              break;
            case "text":
              element.value = this.get(element.dataset.endpoint, precision, type, base);
              break;
            default:
              break;
          }

          break;
        case "SELECT":
          let value = this.get(element.dataset.endpoint, precision, type);
          // console.log(value);
          // console.log(element.id, element.value, value);
          //@ts-ignore
          document.getElementById(element.id).value = value;
          // element.value = value;
          break;
        default:
          // console.log("default");

          element.innerHTML = this.get(element.dataset.endpoint, precision, type, base);
          break;
      }

      //@ts-ignore
      // console.log(this.data.version);

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
