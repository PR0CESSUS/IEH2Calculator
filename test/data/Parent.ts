import { Game } from ".";
import { Children1 } from "./Children1";
import { Children2 } from "./Children2";

export class Parent {
  static instances: Parent[] = [];
  name: string;
  children1: Children1;
  children2: Children2;
  source: number[];

  constructor(name: string, initialValue: number[]) {
    this.name = name;
    this.source = initialValue;
    this.children1 = new Children1();
    this.children2 = new Children2();
    Parent.instances.push(this);
  }

  Test() {
    return Game.sss;
  }
}
