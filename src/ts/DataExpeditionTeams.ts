import { expeditionKind, ExpeditionKind } from "./type/ExpeditionKind";
import { DataType } from "./type/DataType";
import { monsterSpecies, monsterColor, MonsterKind, MonsterColor, petPassiveEffect } from "./type/MonsterKind";

export class DataExpeditionTeams {
  #data: DataType;
  #speedTable = [
    [106.519, 172000],
    [68.014, 86400],
    [35.495, 57600],
    [17.759, 28800],
    [8.877, 14400],
    [4.439, 7200],
    [2.2, 3600],
  ];

  constructor(data: DataType) {
    this.#data = data;
    // console.log(data);
    this.initialization(data);
  }
  initialization(data: DataType) {
    if (data.isInitialized) {
      for (const [key, value] of Object.entries(data.localStorage.expeditionTeams)) {
        this[key] = value;
      }
    } else if (data.source.isInitialized) {
      this.getExpeditonTeams(data);
    }
  }

  getExpeditonTeams(data: DataType) {
    let counter = 0;
    let nameIndex = 1;
    let totalLevel = 0;
    for (let index = 0; index < data.source.expeditionPetIsSet.length; index++) {
      counter++;
      const pet = data.source.expeditionPetIsSet[index];
      if (pet) {
        const species = monsterSpecies[data.source.expeditionPetSpecies[index]];
        const color = monsterColor[data.source.expeditionPetColors[index]];

        totalLevel += data.pet[species][color].level;

        // console.log();
      }
      if (counter == 5) {
        let level = totalLevel;
        let speed = this.getSpeed(level);
        let time = this.getBestTime(speed);
        let name = "team" + nameIndex;
        nameIndex++;

        let timeToFinish = Math.max(time / speed, 900);
        let team = {
          level: level,
          speed: speed,
          time: time,
          timeToFinish: timeToFinish,
        };
        this[name] = team;
        counter = 0;
        totalLevel = 0;
      }
    }
  }

  getBestTime(speed: number) {
    for (let i = 0; i < this.#speedTable.length; i++) {
      if (speed >= this.#speedTable[i][0]) {
        return this.#speedTable[i][1];
      }
    }
  }

  getSpeed(level: number) {
    let speedBase = 1 + level * 0.001;
    let speedMultiplier = 1;
    if (this.#data.expedition.totalLevel >= 175) {
      speedMultiplier += 0.25;
    }
    if (this.#data.expedition.totalLevel >= 225) {
      speedMultiplier += 0.25;
    }

    return speedBase * (this.#data.town.AdventuringParty.effect * speedMultiplier);
  }

  update(endpoint) {
    let path = endpoint.split(".").slice(0, -1).slice(1);
    let team = path[0];
    console.log(endpoint, path, team);

    this[team].speed = this.getSpeed(this[team].level);
    this[team].time = this.getBestTime(this[team].speed);
    this[team].timeToFinish = Math.max(this.getBestTime(this[team].speed) / this[team].speed, 900);
  }
}
