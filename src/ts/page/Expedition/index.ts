import { App } from "../../App";
import { Page } from "../Page";
import { ExpeditionKind } from "../../type/ExpeditionKind";
import { convertTo } from "../../Util/convertTo";
import { secondsToDhms } from "../../Util/secondsToDhms";

export class CalculatorExpedition {
  app;
  minExpeditiontTimeSeconds = 900;
  times = [0.5, 1.0, 2.0, 4.0, 8.0, 16.0, 24.0, 48.0, 72.0, 120.0, 240.0, 480.0, 960.0, 1920.0, 3840.0];
  teams = Array(20).fill(0);

  constructor() {
    this.app = globalThis.app;

    // console.log(app.data.source.expeditionPetIsSet);
    // console.log(app.data.source.expeditionPetColors);
    // console.log(app.data.source.expeditionLevels);
    // console.log(app.data.source.expeditionKinds);
    this.minExpeditiontTimeSeconds = this.app.data.expedition.lowerLimitTime.value;
    // console.log(this.minExpeditiontTimeSeconds);
    let i = 0;
    for (let index = 0; index < app.data.source.expeditionPetIsSet.length; index++) {
      const spiecies = app.data.source.expeditionPetSpecies[index];
      const color = app.data.source.expeditionPetColors[index];
      const level = app.data.source.monsterPetLevels[spiecies * 10 + color];

      if (index % 5 == 0 && index != 0) i++;
      if (app.data.source.expeditionPetIsSet[index]) this.teams[i] += level;

      // console.log(index, i, app.data.source.expeditionPetIsSet[index], spiecies, color);
    }
    // console.log(this);

    // console.log("Expedition Calculator");
    // console.log("speed:", this.speed);
    // console.log("best:", this.getBest());
    // this.times.forEach((element, index) => {
    //   console.log(`expedition [${element} h] \t time: ${this.getTime(element) / 60}m \t efficiency: ${this.getEfficiency(element)}`);
    //   // console.log(48 / 0.25 / Math.pow(2, 0.85));
    // });
    //  RewardAmount(expedition, pet, timeHour) => 60.0 * Math.pow(1.1, this.level.value) * GameController.game.townCtrl.MaxTownMaterialGainMultiplier() * (1.0 + 0.5 *  pet.rank.value) * Math.max(0.55478474, Math.pow(timeHour, this.expeditionCtrl.rewardModifierPerHour.Value())) * expedition.expeditionCtrl.rewardMultiplier.Value();
    //  RewardAmount(expedition, pet, timeHour) => 60.0 * Math.max(0.55478474, Math.pow(timeHour, this.expeditionCtrl.rewardModifierPerHour.Value()));
    // console.log(0.55478474 / ((0.55478474 * 0.5) / 0.5));
    // console.log(this.getReward(1) / (this.getReward(0.5) * (60 / 30)));
  }
  // getSpeed(level: number) {
  //   let speedBase = 1 + level * 0.001;
  //   let speedMultiplier = 1;
  //   if (this.data.expedition.totalLevel >= 175) {
  //     speedMultiplier += 0.25;
  //   }
  //   if (this.data.expedition.totalLevel >= 225) {
  //     speedMultiplier += 0.25;
  //   }

  //   return speedBase * (this.data.town.AdventuringParty.effect * speedMultiplier);
  // }

  Initialization() {}

  getSpeed(team) {
    let totalLevel = this.teams[team];
    let kind = this.app.data.source.expeditionKinds[team];
    let SpeedModifierByExpeditionLevel = Math.pow(1.1, Math.floor(this.app.data.source.expeditionLevels[kind] / 10.0));

    // 26.15 ze startysktk
    return ((1 + 0.001 * totalLevel) * globalThis.data.expedition.speedMultiplier.Value() * SpeedModifierByExpeditionLevel).toFixed(3);
  }

  getBest(speed) {
    let bestEfficiency: number = 0;
    let bestTime = 0;
    this.times.forEach((time, index) => {
      if (bestEfficiency < this.getEfficiency(time, speed)) {
        bestEfficiency = this.getEfficiency(time, speed);
        bestTime = time;
      }
    });
    return bestTime;
  }

  getTime(timeHour, speed) {
    return Math.max((timeHour * 3600) / speed, this.minExpeditiontTimeSeconds);
  }

  getEfficiency(timeHour, speed): number {
    return this.getReward(timeHour) / (this.getReward(0.5) * (this.getTime(timeHour, speed) / this.getTime(0.5, speed)));
  }

  getReward(timeHour) {
    return Math.max(0.55478474, Math.pow(timeHour, this.app.data.expedition.rewardModifierPerHour.value));
  }

  get html() {
    let html = `
    <p>Hackmanite: <user-input data-endpoint="data.source.sdGemLevels[7]"></user-input> effect: -${secondsToDhms(
      900 - this.app.data.expedition.lowerLimitTime.value
    )}</p>
    <p>Turquoise lv <user-input data-endpoint="data.source.sdGemLevels[8]"></user-input> effect: ${
      this.app.data.expedition.rewardModifierPerHour.value
    }</p>
    <p>Expedition Speed Multiplier: ${convertTo(this.app.data.expedition.speedMultiplier.Value(), 2, "%")}</p>
    <p>Hackmanite: <user-input data-endpoint="data.source.sdGemLevels[7]"></user-input> effect: -${
      this.app.data.expedition.lowerLimitTime.value
    }</p>
    
    
  
    <table>
    <th>
    <tr>
    <td>Team #</td>
    <td>Expedition</td>
    <td>Level</td>
    <td style="width: 20%;">Speed</td>
    <td>Best Option</td>
    <td>Actual Time</td>
    </tr>
    </th>`;
    // console.log(this.teams);

    this.teams.forEach((team, index) => {
      html += `<tr>
      <td>Team ${index + 1}</td>
      <td>${ExpeditionKind[this.app.data.source.expeditionKinds[index]]}</td>
      <td>${team}</td>
      <td>${this.getSpeed(index)}</td>
      <td>${this.getBest(this.getSpeed(index))}h</td>
      <td>${secondsToDhms(this.getTime(this.getBest(this.getSpeed(index)), this.getSpeed(index)))}</td>
      
      </tr>`;
    });
    return html;
  }
}
