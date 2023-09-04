import { Data } from "./Data";
import { Events } from "./Events";
import { Logics } from "./Logics";
import { set, get } from "lodash";
import { convertTo } from "./util/convertTo";
import { convertFrom } from "./util/convertFrom";

export class CalculatorMainframe {
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
    // console.log(this.event.urlHashReload);

    document.body.addEventListener("htmx:configRequest", this.event.urlHashReload, { once: true });
    document.body.addEventListener("htmx:afterSettle", this.event.afterSettle.bind(this));
    document.body.addEventListener("change", this.event.onChange.bind(this));
    // document.body.addEventListener("htmx:afterSettle", this.event.bind(this));
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
    // console.log(endpoint, value);
    this._set(this.data, endpoint, convertFrom(value));

    // save new value to localStorage
    localStorage.setItem("data", JSON.stringify(this.data));
  }

  load() {
    if (localStorage.getItem("data")) {
      this.data = JSON.parse(localStorage.getItem("data"));
      // console.log(this.data);
    } else {
      this.data = {
        custom: {},
        source: {},
      };
    }
  }
  updateContent() {
    this.logic.update();
    const elementType = ["warning", "custom", "data"];
    // change class savefilewarning to savefileok if there is data in store
    //@ts-ignore
    // console.log(document.getElementById("content").childNodes);
    // console.log(document.getElementsByClassName("savefilewarning"));
    for (let index = 0; index < elementType.length; index++) {
      let children = document.getElementsByClassName(elementType[index]);
      for (let index = 0; index < children.length; index++) {
        const element = children[index];
        let precision = 0;
        let orgin = "data";
        let type = null;
        //@ts-ignore
        if (element.dataset.precision) {
          //@ts-ignore
          precision = element.dataset.precision;
        }
        //@ts-ignore
        if (element.dataset.type) {
          //@ts-ignore
          type = element.dataset.type;
        }
        //@ts-ignore
        if (element.dataset.orgin && element.dataset.orgin != "data") {
          //@ts-ignore
          orgin = element.dataset.orgin;
        }
        //@ts-ignore
        // console.log(this.data.version);
        if (element.dataset.endpoint) {
          if (element.tagName == "INPUT") {
            //@ts-ignore
            // element.value = this.data[element.dataset.endpoint];
            //@ts-ignore
            element.value = this.get(element.dataset.endpoint, precision, type);
            // element.addEventListener("change", this.onChange);
            //@ts-ignore
            // console.log(this.getPath(element.dataset.endpoint));
          } else {
            //@ts-ignore
            element.innerHTML = this.get(element.dataset.endpoint, precision, type);
            // console.log("asd");
          }
        }

        //@ts-ignore
        // console.log(element.dataset.endpoint);
      }
    }

    // console.log("equ");
    // console.log(document.getElementById("content").children);
    //@ts-ignore

    // console.log(event.detail.requestConfig.elt.innerHTML);
  }
}
