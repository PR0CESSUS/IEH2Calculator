import { Game } from ".";

export class Children2 {
  multiplier: number;

  constructor() {
    this.multiplier = 0;
  }

  get value() {
    return Game.data.source[1];
  }
}
