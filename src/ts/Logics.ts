import { LogicGuild } from "./logic/guild";
import { LogicSettings } from "./logic/settings";
import { LogicSlimeBank } from "./logic/slimebank";
import { LogicAnvil } from "./logic/anvil";

export class Logics {
  app;
  logic;
  constructor(app) {
    this.app = app;
  }
  update() {
    if (this.logic) {
      this.logic.update();
    }
  }

  switchLogic(type) {
    switch (type) {
      case "guild":
        this.logic = new LogicGuild(this.app);
        break;
      case "anvil":
        this.logic = new LogicAnvil(this.app);
        break;
      case "slimebank":
        this.logic = new LogicSlimeBank(this.app);
        break;
      case "settings":
        this.logic = new LogicSettings(this.app);
        break;
      default:
        break;
    }
  }
}
