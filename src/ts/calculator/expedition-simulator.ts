import { DataType } from "../type/DataType";

export class CalculatorExpeditionSimulator {
  data: DataType;
  simulator = {
    petPerTeam: 0,
    teams: 0,
    playtimeHourPerDay: 0,
    currentLevel: 0,
    targetLevel: 0,
    nitroSink: 0,
  };

  constructor(data: DataType) {
    this.data = data;
    if (!this.data.custom.expedition) {
      this.data.custom.expedition = {};
      if (!this.data.custom.expedition.simulator) this.data.custom.expedition.simulator = this.simulator;
    } else {
      this.simulator = this.data.custom.expedition.simulator;
    }
  }
  get expeditionExpPerSec() {
    let bonusMilestone = 1;
    if (this.data.misc.ClearedMission >= 120) {
      bonusMilestone += 1;
    }
    if (this.data.misc.ClearedMission >= 1650) {
      bonusMilestone += 1;
    }

    return 1 * bonusMilestone * (1 + this.data.pet.Treant.Purple.effect) * (1 + this.data.town.AdventuringParty.research.crystal.effect);
  }

  get expeditionExpPerSecTeam() {
    return this.expeditionExpPerSec * this.simulator.petPerTeam;
  }

  get expeditionExpPerSecTotal() {
    return this.expeditionExpPerSecTeam * this.simulator.teams;
  }

  get expeditionExpPerDay() {
    return this.expeditionExpPerSecTotal * this.simulator.playtimeHourPerDay * 3600 * this.data.misc.nitroSpeed;
  }

  get expeditionExpPerNitroSink() {
    return this.nitroTime * this.expeditionExpPerSecTotal;
  }

  get expeditionExpPerNitroSinkDay() {
    return this.expeditionExpPerNitroSink * this.simulator.nitroSink;
  }

  get expeditionExpPerDayTotal() {
    return this.expeditionExpPerDay + this.expeditionExpPerNitroSinkDay;
  }

  get nitroTime() {
    let nitro = this.data.custom?.nitroTotal;

    let num = 0.0;
    for (let index = 1; index < 10; ++index) {
      if (nitro >= index * 86400) {
        num += 86400.0 / index;
      } else {
        num += (nitro - 86400 * (index - 1)) / index;
        break;
      }
    }
    return num;
  }

  get requiredExp() {
    let totalExp = 0;
    for (let level = this.simulator.currentLevel; level < this.simulator.targetLevel; level++) {
      totalExp += 86400.0 * (1 + level + 0.25 * Math.pow(Math.max(0, level - 3), 2.0));
    }
    return totalExp;
  }

  get timeSkip() {
    if (this.requiredExp > 0 && this.expeditionExpPerDay > 0) {
      let expLeft = this.requiredExp;
      let time = 0;
      // 86400 seconds in day
      if (this.requiredExp < this.expeditionExpPerDay) {
        console.log("requiredExp", this.requiredExp);
        console.log("expeditionExpPerDay", this.expeditionExpPerDay);
        console.log("requiredExp / ", this.requiredExp / this.expeditionExpPerSecTotal);
        console.log("requiredExp", this.requiredExp, this.expeditionExpPerDay, this.requiredExp / this.expeditionExpPerSecTotal);
        return expLeft / (this.expeditionExpPerSecTotal * this.data.misc.nitroSpeed);
      } else {
        while (true) {
          if (expLeft - this.expeditionExpPerDay <= 0) {
            time += expLeft / (this.expeditionExpPerSecTotal * this.data.misc.nitroSpeed);
            break;
          }
          expLeft -= this.expeditionExpPerDay;
          expLeft -= this.expeditionExpPerNitroSink * this.simulator.nitroSink;
          time += 86400;
          if (expLeft <= 0) {
            break;
          }
        }
        return time;
      }
    } else {
      return 0;
    }
  }
  html() {
    let html = "";
    html += `<h3>Expedition Leveling Simulator</h3>`;
    html += `<table>`;
    html += `<thead>`;
    html += `<tr><td></td><td></td><td colspan="3" class="tablehead" style='text-align: center;'>Exp/sec per</td><td colspan="3" class="tablehead" style='text-align: center;'>Exp/day</td></tr>`;
    html += `<tr>`;
    html += `<th scope="col">Name</th>`;
    html += `<th scope="col"></th>`;

    html += `<th scope="col">Pet</th>`;
    html += `<th scope="col">Team</th>`;
    html += `<th scope="col">Total</th>`;
    html += `<th scope="col">Teams</th>`;
    html += `<th scope="col">Nitro Sink</th>`;
    html += `<th scope="col">Total</th>`;
    html += `</tr>`;

    html += `<tr>`;
    html += `<td>Playtime hour per day:</td>`;
    html += `<td><input data-endpoint="custom.expedition.simulator.playtimeHourPerDay" type="text" class="default-input custom"></td>`;

    html += `<td data-endpoint='calculator.expedition.simulator.expeditionExpPerSec'></td>`;
    html += `<td data-endpoint='calculator.expedition.simulator.expeditionExpPerSecTeam'></td>`;
    html += `<td data-endpoint='calculator.expedition.simulator.expeditionExpPerSecTotal'></td>`;
    html += `<td data-endpoint='calculator.expedition.simulator.expeditionExpPerDay' data-precision='2'></td>`;
    html += `<td data-endpoint='calculator.expedition.simulator.expeditionExpPerNitroSink' data-precision='2'></td>`;
    html += `<td data-endpoint='calculator.expedition.simulator.expeditionExpPerDayTotal' data-precision='2'></td>`;
    html += `</tr>`;
    html += `<tr>`;
    html += `<td>Pet per Team:</td>`;
    html += `<td><input data-endpoint="custom.expedition.simulator.petPerTeam" type="text" class="default-input custom"></td>`;
    html += `</tr>`;
    html += `<tr>`;
    html += `<td>Total Teams:</td>`;
    html += `<td ><input data-endpoint="custom.expedition.simulator.teams" type="text" class="default-input custom"></td>`;
    html += `</tr>`;
    html += `<tr>`;
    html += `<td>Nitro Sink used:</td>`;
    html += `<td ><input data-endpoint="custom.expedition.simulator.nitroSink" type="text" class="default-input custom"></td>`;
    html += `</tr>`;
    html += `<tr>`;
    html += `<td>Current Level:</td>`;
    html += `<td><input id="expedition-currentLevel" data-endpoint="custom.expedition.simulator.currentLevel" type="text" class="default-input custom"></td>`;
    html += `</tr>`;
    html += `<tr>`;
    html += `<td>Target Level:</td>`;
    html += `<td><input id="expedition-targetLevel" data-endpoint="custom.expedition.simulator.targetLevel" type="text"class="default-input custom"></td>`;
    html += `</tr>`;
    html += "</table>";

    html += `<hr>`;
    html += `nitroTime <span data-endpoint='calculator.expedition.simulator.nitroTime'  data-type="time"></span><br>`;
    html += `requiredExp <span data-endpoint='calculator.expedition.simulator.requiredExp' data-precision='2'></span><br>`;
    html += `timeSkip <span data-endpoint='calculator.expedition.simulator.timeSkip' data-type="time"></span><br>`;
    html += `<hr>`;

    // for (let index = 0; index < this.data.source.expeditionPetIsSet.length / 5; index++) {
    //   html += `<tr>`;
    //   html += `<td>Team ${index + 1}</td>`;
    //   html += `<td data-endpoint='expedition.teams[${index}]'></td>`;
    //   html += `<td data-endpoint='calculator.expedition.teams[team${index + 1}].speed' data-precision='2'></td>`;
    //   html += `<td data-endpoint='calculator.expedition.teams[team${index + 1}].time' data-type="time-h"></td>`;
    //   html += `<td data-endpoint='calculator.expedition.teams[team${index + 1}].timeToFinish' data-type="time"></td>`;
    //   html += `</tr>`;
    // }

    html += `    
    <p style="padding-left: 20px;"><img src="./img/nitro.png" class="icon"> Nitro Speed:
        <input id="anvil.nitro.speed" type="text" data-endpoint="misc.nitroSpeed" class="default-input warning"> Max
        Nitro:
        <input type="text" data-endpoint="custom.nitroTotal" class="default-input custom">
    </p>
`;
    // for (let index = 0; index < this.teams.length; index++) {
    //   html += `Team${index} <span data-endpoint='expedition.teams[${index}]'></span><br>`;
    //   // html += `a <span data-endpoint='expedition.teams'></span><br>`;
    // }

    return html;
  }
}
