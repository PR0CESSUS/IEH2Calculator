import { DATA } from "./Data";
import { Events } from "./Events";
import { set, get } from "lodash";
import { convertTo } from "./Util/convertTo";
import { convertFrom } from "./Util/convertFrom";
import { Router } from "./Router";
import { CalculatorExpedition } from "./page/Expedition";
import { Test } from "./page/Test";
import { CalculatorEquipment } from "./page/Equipment";
import { CalculatorRubyShard } from "./page/RubyShard";
import { Page } from "./page/Page";
import { PageData } from "./page/Data";
import { PageDropChance } from "./page/Drop-Chance";
import { CalculatorGuild } from "./page/Guild";
import component from "./component";

export class App {
  data: DATA;
  event: Events;
  router: Router;
  page = {};

  _set = set;
  _get = get;

  constructor() {
    globalThis.app = this;
    this.router = new Router(this);
    this.event = new Events(this);
    this.data = new DATA(this);
    // this.page.push(new CalculatorExpedition(this));
    // this.page.push(new Test(this));
    // this.page.push(new Equipment(this));
    this.addPage(new Page("#data", "Data", new PageData()));
    this.addPage(new Page("#equipment", "Equipment", new CalculatorEquipment()));
    // this.addPage(new Page("#expedition", "Expedition", new CalculatorExpedition()));
    this.addPage(new Page("#ruby-shard", "Ruby Shard", new CalculatorRubyShard()));
    this.addPage(new Page("#guild", "Guild", new CalculatorGuild()));
    // this.addPage(new Page("#test", "Test", new Test()));
    this.addPage(new Page("#drop-chance", "Drop Chance", new PageDropChance()));

    // this.page = [];
    this.router.initialization();
    component();
    // this.Save();
    // console.log(this);
  }

  Save() {
    this.data.save();
    // console.log();
    let custom = {};
    Object.keys(this.page).forEach((page) => {
      this.page[page].Save();
      // console.log(page);

      // console.log(this.page[page]);
    });
    // this.page.save()
  }

  addPage(page: Page) {
    this.page[page.url.slice(1)] = page;
  }

  get(element: HTMLElement & HTMLInputElement) {
    // console.log(element.dataset);

    const value = this._get(this, element.dataset.endpoint, undefined);
    // console.log(value);

    const endpoint = element.dataset.endpoint;
    const part = element.dataset.part as "Armor" | "Weapon" | "Jewelry" | "Utility";
    const prefix = element.dataset.prefix;
    const suffix = element.dataset.suffix;
    const type = element.dataset.type;
    const base = element.dataset.base ?? 0;
    const precision: any = element.dataset.precision ?? 2;
    // console.log(`
    // endpoint: ${endpoint},
    // value: ${value},
    // type: ${type}
    // `);
    // console.log(endpoint, type, endpointData);
    switch (type) {
      case "object":
        const getCircularReplacer = () => {
          const seen = new WeakSet();
          return (key, value) => {
            if (key == "data") return undefined;
            if (typeof value === "object" && value !== null) {
              if (seen.has(value)) {
                return;
              }
              seen.add(value);
            }
            return value;
          };
        };

        return JSON.stringify(this._get(this.data, endpoint, 0), getCircularReplacer(), 0);
      case "array":
        let string = "";
        this._get(this.data, endpoint, []).forEach((element) => {
          // console.log(element);
          string += JSON.stringify(element);
          string += "\n";
        });
        return string;

      case "equipment":
      // return this.data.calculator.equipment.item(value, part, false);
      case "equipment-edit":
      // return this.data.calculator.equipment.item(value, part, true);
      case "time":
      case "percent":
      case "number":
      case "time-h":
        // console.log(base + value, precision, type);

        return convertTo(base + value, precision, type);
      case "image":
        return prefix + value + suffix;
      default:
        // console.log("get default", endpoint);

        return value;
    }
  }

  set(element: HTMLElement & HTMLInputElement) {
    // console.log(element.value);

    const endpoint = element.dataset.endpoint;
    const type = element.dataset.type;
    let value: any = element.value;

    if (element.type == "checkbox") value = element.checked;

    // console.log(endpoint, type, value, convertFrom(value));

    const controller = endpoint.split(".")[0];
    // const type = endpoint.split(".").slice(-1)[0];

    switch (element.tagName) {
      case "SELECT":
        this._set(this.data, endpoint, convertFrom(value));
        break;

      default:
        switch (type) {
          case "rarity":
          case "completed":
          case "name":
          case "checkbox":
          case "team":
            this._set(this.data, endpoint, value);
            // console.log(endpoint, value);
            break;
          case "array":
          case "number":
            this._set(this.data, endpoint, convertFrom(value));
            break;
          default:
            this._set(this.data, endpoint, value);
            break;
        }
        break;
    }

    // console.log("save");
    // save new value to localStora ge
    this.data.save();
    this.update();
    // console.log("CalculatorMainframe after data.save()");
    // console.log(this.data.source.monsterPetLevels[81]);
  }

  update() {
    return;
    document.querySelectorAll("[data-endpoint]").forEach((element: HTMLElement & HTMLInputElement) => {
      const value = this.get(element);
      switch (element.tagName) {
        case "INPUT":
        case "SELECT":
          element.type == "checkbox" ? (element.checked = value) : (element.value = value);
          break;
        case "IMG":
          element.src = value;
          break;
        default:
          element.innerHTML = value;
          break;
      }

      // if (element.tagName == "IMG") element.src = this.get(element);
      // if (element.value) element.value = this.get(element);
      // console.log(element, element.value);
    });
  }

  get html() {
    return "Welcome Page";
  }

  get htmlSettings() {
    if (!document.getElementById("saveFileloader")) {
      var script = document.createElement("script");
      script.src = "SaveFileLoader.bundle.js";
      script.id = "saveFileloader";
      document.head.appendChild(script);
    }
    return /*html*/ ` <h3>Options</h3>
    <form id="settings">
      <br>
      <label for="saveFileImport" class="btn btn-orange">Import Save File</label>
      <input type="file" id="saveFileImport" accept=".txt" />
      <label for="customDataImport" class="btn btn-orange">Import Custom Data</label>
      <input type="file" id="customDataImport" accept=".json" /><br>
      <br>
      <button id="data-restart" type="reset" class="btn btn-gray">Hard Reset</button>
      <button type="button" id="customDataExport" class="btn btn-orange">Export Custom Data</button>
      <!-- <input type="button" id="settings.saveToFileSource" value="Export Source Data" class="button-orange" /> -->
      <br>
    </form>`;
  }
}
