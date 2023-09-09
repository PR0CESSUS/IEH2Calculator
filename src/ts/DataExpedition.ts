import { expeditionKind, ExpeditionKind } from "./type/ExpeditionKind";
import { DataType } from "./type/DataType";
import { monsterSpecies, monsterColor, MonsterKind, MonsterColor, petPassiveEffect } from "./type/MonsterKind";

export class DataExpedition implements ExpeditionKind {
  Equipment;
  #passiveEffectValueIncrementPerLevel = [0.01, 0.01, 0.01, 0.05, 0.02, 0.2, 0.05];
  #passiveEffectMultiplier = 1;
  totalLevel = 0;
  constructor(data: DataType) {
    console.log(data);
    this.initialization(data);
  }
  initialization(data: DataType) {
    if (data.isInitialized) {
      for (const [key, value] of Object.entries(data.localStorage.expedition)) {
        this[key] = value;
      }
    } else if (data.source.lastTimeLocal) {
      this.totalLevel = data.source.expeditionLevels.reduce((a, b) => a + b, 0);
      // console.log(data);

      // console.log(this.totalLevel);
      this.totalLevel >= 200 ? (this.#passiveEffectMultiplier += 0.25) : null;
      this.totalLevel >= 250 ? (this.#passiveEffectMultiplier += 0.25) : null;

      for (let index = 0; index < expeditionKind.length; index++) {
        const name = expeditionKind[index];
        this[name] = {
          level: data.source.expeditionLevels[index],
          effect: data.source.expeditionLevels[index] * this.#passiveEffectValueIncrementPerLevel[index] * this.#passiveEffectMultiplier,
        };
      }

      // this.getExpeditonTeams(data);
    }
  }
}
