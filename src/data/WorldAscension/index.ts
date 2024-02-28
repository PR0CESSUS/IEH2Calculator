import { DATA } from "..";
import { WorldAscensionTier1 } from "./WorldAscensionTier1";

export class DataAscension {
  data: DATA;
  worldAscensions = [];

  constructor(DATA: DATA) {
    this.data = DATA;
    this.worldAscensions.push(new WorldAscensionTier1(DATA));
  }

  Start() {
    for (let index = 0; index < this.worldAscensions.length; index++) this.worldAscensions[index].Start();
  }
}
