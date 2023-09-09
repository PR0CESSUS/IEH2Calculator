import { expeditionKind, ExpeditionKind } from "./type/ExpeditionKind";
import { DataType } from "./type/DataType";
import { monsterSpecies, monsterColor, MonsterKind, MonsterColor, petPassiveEffect } from "./type/MonsterKind";

export class DataExpeditionTeams {
  constructor(data: DataType) {
    console.log(data);
    this.initialization(data);
  }
  initialization(data: DataType) {
    if (data.isInitialized) {
      for (const [key, value] of Object.entries(data.localStorage.expeditionTeams)) {
        this[key] = value;
      }
    } else if (data.source.lastTimeLocal) {
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
        let speedBase = 1 + totalLevel * 0.001;
        let speedMultiplier = 1;
        let name = "team" + nameIndex;
        nameIndex++;
        if (data.expedition.totalLevel >= 175) {
          speedMultiplier += 0.25;
        }
        if (data.expedition.totalLevel >= 225) {
          speedMultiplier += 0.25;
        }
        console.log(data.town);

        let speedTotal = speedBase * (data.town.AdventuringParty.effect * speedMultiplier);

        let team = {
          level: totalLevel,
          speed: speedTotal,
          time: 0,
        };
        this[name] = team;
        counter = 0;
        totalLevel = 0;
      }
    }
  }
}
