import { Game } from ".";

export class Children1 {
  multiplier: number;

  constructor() {
    this.multiplier = 0;
  }

  get value() {
    return Game.data.source[0];
  }
}
