import { LogicGuild } from "./logic/guild";
import { LogicSettings } from "./logic/settings";
import { LogicSlimeBank } from "./logic/slimebank";

export class Logics {
  main;
  logic;
  constructor(main) {
    this.main = main;
  }
  update() {
    if (this.logic) {
      this.logic.update();
    }
  }

  switchLogic(type) {
    switch (type) {
      case "guild":
        this.logic = new LogicGuild(this.main);
        break;

      case "slimebank":
        this.logic = new LogicSlimeBank(this.main);
        break;
      case "settings":
        this.logic = new LogicSettings(this.main);
        break;
      default:
        break;
    }
  }
}
