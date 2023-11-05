import { WorldAscensionTier1 } from "./WorldAscensionTier1";

export class DataAscension {
  worldAscensions = [new WorldAscensionTier1()];

  Start() {
    for (let index = 0; index < this.worldAscensions.length; index++) this.worldAscensions[index].Start();
  }
}
