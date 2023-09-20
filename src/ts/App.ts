import { DATA } from "./Data";
import { Events } from "./Events";
import { set, get } from "lodash";
import { convertTo } from "./util/convertTo";
import { convertFrom } from "./util/convertFrom";

export class App {
  page;
  tab;
  data: DATA;
  event: Events;
  _set = set;
  _get = get;

  constructor() {
    this.data = new DATA();
    this.event = new Events(this);
  }

  get(endpoint, precision = 0, type = "", base = 0) {
    let isFunction = this._get(this.data, endpoint, false);
    if (isFunction instanceof Function) {
      // hack for now
      // let functionParent = endpoint.split(".").slice(0, -1).join(".");
      let module = endpoint.split(".")[0];
      let key = endpoint.split(".")[1];
      let method = endpoint.split(".")[2];
      if (module == "pet" || module == "misc") {
        return this.data[module][key]();
      }
      // this._get(functionParent)[isFunction]()
      // console.log("funkcja", this.data[module][key][method]());
      return this.data[module][key][method]();
    }
    // if (endpoint == "upgrade.SlimeBank.SlimeCoinCap2.level") {
    //   console.log("jest!");
    //   console.log(this._get(this.data, "upgrade.SlimeBank.SlimeCoinCap2.level", 0));
    //   console.log(this.data);
    // }
    //secondsToDhms(time)
    if (precision || type) {
      return convertTo(base + this._get(this.data, endpoint, 0), precision, type);
    } else {
      // console.log("_get", endpoint);
      return this._get(this.data, endpoint, 0);
    }
  }

  set(endpoint, value) {
    // console.log(endpoint, value);

    let controller = endpoint.split(".")[0];
    let lastElement = endpoint.split(".").slice(-1)[0];
    if ((controller == "custom" && lastElement == "name") || lastElement == "rarity" || lastElement == "team") {
      // console.log(lastElement);
      this._set(this.data, endpoint, value);
    } else {
      this._set(this.data, endpoint, convertFrom(value));
    }

    this.data.update(endpoint);
    // this._set(this.data, endpoint, value);

    // save new value to localStora ge
    this.data.save();
    // console.log("CalculatorMainframe after data.save()");
    // console.log(this.data.source.monsterPetLevels[81]);
  }

  updateContent() {
    // this.addTab();
    // .addEventListener("click", this.event.onTabChange.bind(this));

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
          // console.log("here", element.id);

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
