import { Children1 } from "./Children1";
import { Children2 } from "./Children2";
import { Parent } from "./Parent";

export class Game {
  static data: Parent;
  static snap: Parent;
  static get sss() {
    return Parent.instances;
  }
  data: Parent;
  snap: Parent;

  constructor() {
    this.data = new Parent("main", [10, 10]);
    this.snap = new Parent("snap", [3, 3]);
    Game.data = this.data;
    Game.snap = this.snap;
  }
}
