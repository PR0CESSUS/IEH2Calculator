import { DataType } from "../type/DataType";
import { CalculatorMainframe } from "../CalculatorMainframe";

export class LogicExpedition {
  name = "anvil";
  app: CalculatorMainframe;
  expedition = {
    expeditionExpPerSec: 0,
    expeditionExpPerSecTeam: 0,
    petPerTeam: 0,
    expeditionExpPerSecTotal: 0,
    teams: 0,
    expeditionExpPerDay: 0,
    playtimeHourPerDay: 0,
    nitroTime: 0,
    expeditionExpPerNitroSink: 0,
    expeditionExpPerNitroSinkDay: 0,
    currentLevel: 0,
    targetLevel: 0,
    totalExp: 0,
    time: 0,
  };

  constructor(app: CalculatorMainframe) {
    this.app = app;
    // console.log(this.app.data.custom?.dungeon);

    if (!this.app.data.custom?.expedition?.teams) {
      this.app.data.custom.expedition = this.expedition;
      // console.log("brak danych w custom, adding");
      this.app.data.save();
      // console.log("save");
    } else {
      // console.log("dane sa, przypisanie");
      this.expedition = this.app.data.custom?.expedition;
    }
  }

  // console.log("class constructor aka Init");

  update() {
    // console.log("update start");
    let bonusMilestone = 1;
    if (this.app.data.misc.ClearedMission >= 120) {
      bonusMilestone += 1;
    }
    if (this.app.data.misc.ClearedMission >= 1650) {
      bonusMilestone += 1;
    }
    this.expedition.expeditionExpPerSec =
      1 * bonusMilestone * (1 + this.app.data.pet.Treant.Purple.effect) * (1 + this.app.data.town?.AdventuringParty.research.crystal.effect);

    // console.log(this.expedition);
    // this.expedition.petPerTeam = 3;
    this.expedition.expeditionExpPerSecTeam = this.expedition.expeditionExpPerSec * this.expedition.petPerTeam;
    // this.expedition.teams = 8;
    this.expedition.expeditionExpPerSecTotal = this.expedition.expeditionExpPerSecTeam * this.expedition.teams;
    this.expedition.expeditionExpPerDay =
      this.expedition.expeditionExpPerSecTotal * this.expedition.playtimeHourPerDay * 3600 * this.app.data.misc.nitroSpeed;
    // console.log("update just befor functions");
    this.expedition.totalExp = this.requiredExp();
    this.expedition.nitroTime = this.getNitroTime();

    this.expedition.expeditionExpPerNitroSink = this.expedition.nitroTime * this.expedition.expeditionExpPerSecTotal;
    this.expedition.expeditionExpPerNitroSinkDay = this.expedition.expeditionExpPerNitroSink * 5;

    this.expedition.time = this.timeSkip();
    // save
    this.app.data.custom.expedition = this.expedition;
    // console.log("update finish");
  }

  getNitroTime() {
    let nitro = this.app.data.custom?.nitroTotal;

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

  requiredExp() {
    let currentLevel = this.expedition.currentLevel;
    let targetLevel = this.expedition.targetLevel;
    let totalExp = 0;
    for (let level = currentLevel; level < targetLevel; level++) {
      totalExp += 86400.0 * (1 + level + 0.25 * Math.pow(Math.max(0, level - 3), 2.0));
    }
    return totalExp;
  }

  timeSkip() {
    if (this.expedition.totalExp > 0 && this.expedition.nitroTime > 0 && this.expedition.expeditionExpPerDay > 0) {
      let expLeft = this.expedition.totalExp;
      let time = 0;
      // 86400 seconds in day
      if (this.expedition.totalExp < this.expedition.expeditionExpPerDay) {
        return this.expedition.totalExp / this.expedition.expeditionExpPerSecTotal;
      } else {
        while (true) {
          expLeft -= this.expedition.expeditionExpPerNitroSink * 5;
          time += 86400;
          if (expLeft <= 0) {
            break;
          }
          if (expLeft - this.expedition.expeditionExpPerDay <= 0) {
            time += expLeft / this.expedition.expeditionExpPerSecTotal;
            break;
          }

          expLeft -= this.expedition.expeditionExpPerDay;
        }
        return time;
      }
    } else {
      return 0;
    }
  }
}
