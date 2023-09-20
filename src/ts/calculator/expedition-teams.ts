import { expeditionKind, ExpeditionKind } from "../type/ExpeditionKind";
import { DataType } from "../type/DataType";
import { monsterSpecies, monsterColor, MonsterKind, MonsterColor, petPassiveEffect } from "../type/MonsterKind";

export class CalculatorExpeditionTeams {
  data: DataType;
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
    this.data = data;
    // console.log(data);

    this.getExpeditonTeams(this.data);
    // console.log(this.html());
    // if (!this.data.custom?.expeditionTeams) {
    //   // console.log("brak danych w custom, adding");

    //   this.data.custom.expeditionTeams = this.data;
    //   this.data.save();
    //   // console.log("save");
    // } else {
    //   // console.log("dane sa, przypisanie");
    //   this.data = this.data.custom?.expeditionTeams;
    // }
  }

  getExpeditonTeams(data: DataType) {
    let nameIndex = 1;

    for (let index = 0; index < data.source.expeditionPetIsSet.length / 5; index++) {
      let speed = this.getSpeed(data.expedition.teams[nameIndex - 1]);
      let time = this.getBestTime(speed);
      let name = "team" + nameIndex;
      nameIndex++;

      let timeToFinish = Math.max(time / speed, 900);

      this[name] = {
        speed: speed,
        time: time,
        timeToFinish: timeToFinish,
      };
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
    if (this.data.expedition.totalLevel >= 175) {
      speedMultiplier += 0.25;
    }
    if (this.data.expedition.totalLevel >= 225) {
      speedMultiplier += 0.25;
    }

    return speedBase * (this.data.town.AdventuringParty.effect * speedMultiplier);
  }

  update(endpoint) {
    // let path = endpoint.split(".").slice(0, -1).slice(1);
    // let team = path[0];
    // // console.log(endpoint, path, team);
    // this[team].speed = this.getSpeed(this[team].level);
    // this[team].time = this.getBestTime(this[team].speed);
    // this[team].timeToFinish = Math.max(this.getBestTime(this[team].speed) / this[team].speed, 900);
  }

  html() {
    let html = "";
    html += `<table>`;
    html += `<thead>`;
    html += `<tr>`;
    html += `<th scope="col" class="tablehead">Team #</th>`;
    html += `<th scope="col" class="tablehead">Team Level</th>`;
    html += `<th scope="col" class="tablehead">Speed</th>`;
    html += `<th scope="col" class="tablehead">Best Duration</th>`;
    html += `<th scope="col" class="tablehead">Time to Finish</th>`;
    html += `</tr>`;
    html += `</thead>`;

    for (let index = 0; index < this.data.source.expeditionPetIsSet.length / 5; index++) {
      html += `<tr>`;
      html += `<td>Team ${index + 1}</td>`;
      html += `<td data-endpoint='expedition.teams[${index}]'></td>`;
      html += `<td data-endpoint='calculator.expedition.teams[team${index + 1}].speed' data-precision='2'></td>`;
      html += `<td data-endpoint='calculator.expedition.teams[team${index + 1}].time' data-type="time-h"></td>`;
      html += `<td data-endpoint='calculator.expedition.teams[team${index + 1}].timeToFinish' data-type="time"></td>`;
      html += `</tr>`;
    }

    html += "</table>";

    // for (let index = 0; index < this.teams.length; index++) {
    //   html += `Team${index} <span data-endpoint='expedition.teams[${index}]'></span><br>`;
    //   // html += `a <span data-endpoint='expedition.teams'></span><br>`;
    // }

    return html;
  }
}
