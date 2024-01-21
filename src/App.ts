import { DATA } from "./Data";
import { Database } from "./Database";
import { Events } from "./event";
import { Router } from "./router";
import component from "./component";
import { DEBUG } from "./debug";
import { HeroKind } from "./type/HeroKind";

export class App {
  data: DATA;
  event: Events;
  page: Router;
  database: Database;

  constructor() {
    globalThis.app = this;

    this.database = new Database("app");
    this.event = new Events(this);
    this.data = new DATA();
    this.page = new Router();

    component();
    // document.addEventListener(
    //   "focus",
    //   function () {
    //     console.log("focused: ", document.activeElement);
    //   },
    //   true
    // );
    const id = 2020;
    const debug = new DEBUG.DebugEquipment();
    // debug.item(id);
    // debug.hero(HeroKind.Archer);
  }

  Save() {
    this.data.save();
    this.database.Save();

    console.log("manual save invoked");

    // this.page.save()
  }
}
