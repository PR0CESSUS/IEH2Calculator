import { DataExpedition } from ".";
import { ExpeditionPet } from "./ExpeditionPet";

export class Expedition {
  expeditionCtrl: DataExpedition;
  timeHours = [0.5, 1.0, 2.0, 4.0, 8.0, 16.0, 24.0, 48.0, 72.0, 120.0, 240.0, 480.0, 960.0, 1920.0, 3840.0];
  id;
  // progress: ExpeditionProgress;
  // unlock: Unlock;
  pets: ExpeditionPet[] = Array(3);
  tempDistance;
  #memoSpeed;
  #memoMostEffective;

  // get type() {return ExpeditionType.Distant;}

  // RequiredGold() {return 5000.0 * Math.max(1.0, Math.pow(this.PetNum(), 2.0)) * (1.0 + Math.pow(this.timeId, 2.0)) * Math.pow(2.0, Math.max(0, this.timeId - 3));}

  constructor(expeditionCtrl: DataExpedition, id) {
    this.expeditionCtrl = expeditionCtrl;
    this.id = id;
    //   this.timeId = new ExpeditionTimeId(id, -1, (() => this.timeHours.length));
    //   this.progress = new ExpeditionProgressthis;
    //   this.unlock = new Unlock();
    for (let slotId = 0; slotId < this.pets.length; slotId++) this.pets[slotId] = new ExpeditionPet(this, slotId);
  }
  get kind() {
    return this.expeditionCtrl.data.source.expeditionKinds[this.id];
  }
  set kind(value) {
    this.expeditionCtrl.data.source.expeditionKinds[this.id] = value;
  }
  get timeId() {
    return this.expeditionCtrl.data.source.expeditionTimeId[this.id];
  }
  set timeId(value) {
    this.expeditionCtrl.data.source.expeditionTimeId[this.id] = value >= this.timeHours.length ? 0 : value < 0 ? this.timeHours.length - 1 : value;
  }

  get globalInfo() {
    return this.expeditionCtrl.GlobalInfo(this.kind);
  }
  Start() {}

  // isStarted {
  //   get => globalThis.data.source.isStartedExpedition[this.id];
  //   set => globalThis.data.source.isStartedExpedition[this.id] = value;
  // }

  PetNum() {
    let num = 0;
    for (let index = 0; index < this.pets.length; index++) {
      if (this.pets[index].isSet) num++;
    }
    return num;
  }

  TotalRank() {
    let num = 0;
    for (let index = 0; index < this.pets.length; index++) {
      if (this.pets[index].isSet) num += this.pets[index].pet.rank;
    }
    return num;
  }

  TotalLevel() {
    let num = 0;
    for (let index = 0; index < this.pets.length; index++) {
      if (this.pets[index].isSet) num += this.pets[index].pet.level;
    }
    return num;
  }

  // TotalMutantCaptureNum() {
  //   let num = 0.0;
  //   for (let index = 0; index < this.pets.length; index++) {
  //     if (this.pets[index].isSet)
  //       num += this.pets[index].pet.globalInfo.CapturedNum(true);
  //   }
  //   return num;
  // }

  // RareChance() {return Math.pow(this.TotalMutantCaptureNum(), 2.0 / 3.0) * 0.0001 * this.timeHour;}

  TimeSpeed() {
    return (1.0 + this.TotalLevel() * 0.001) * this.TimeSpeedModifier();
  }

  TimeSpeedModifier() {
    return this.expeditionCtrl.speedMultiplier.Value() * this.globalInfo.SpeedModifierByExpeditionLevel();
  }

  MostEffective() {
    let bestTime = 0;
    let bestReward = 0;

    if (this.#memoSpeed == this.TimeSpeed() && this.#memoMostEffective != undefined) return this.#memoMostEffective;

    for (let index = 0; index < this.timeHours.length; index++) {
      let totalReward = 0;
      let rewardPerSec = 0;
      totalReward += this.globalInfo.RewardAmount(this, this.pets[0].pet, this.timeHours[index]);
      totalReward += this.globalInfo.RewardAmount(this, this.pets[1].pet, this.timeHours[index]);
      totalReward += this.globalInfo.RewardAmount(this, this.pets[2].pet, this.timeHours[index]);

      let time = this.timeHours[index] * 3600.0;
      if (this.TimeSpeed() > 0.0) time *= 1.0 / this.TimeSpeed();
      time = Math.max(this.minTime, time);
      rewardPerSec = totalReward / time;

      if (rewardPerSec > bestReward) {
        bestReward = rewardPerSec;
        bestTime = index;
      }
      // console.log(index, "rewardPerSec", rewardPerSec, "time", time);
    }
    const result = this.timeHours[bestTime] >= 8760 ? `${this.timeHours[bestTime] / 8760}y` : `${this.timeHours[bestTime]}h`;
    this.#memoSpeed = this.TimeSpeed();
    this.#memoMostEffective = result;

    return result;
  }
  //   ExpGainPerSec() {return this.globalInfo.PetExpGainPerSec();}

  get timeHour() {
    return this.timeHours[this.timeId];
  }

  set timeHour(value) {
    this.timeId = value;
  }

  get minTime() {
    return this.expeditionCtrl.lowerLimitTime.Value();
  }

  RequiredTimesec() {
    let val2 = this.timeHours[this.timeId] * 3600.0;
    if (this.TimeSpeed() > 0.0) val2 *= 1.0 / this.TimeSpeed();
    return Math.max(this.minTime, val2);
  }

  GetExpeditionExp() {
    return this.globalInfo.GetExp(this.PetNum());
  }
  // ProgressPercent() {return Math.min(1.0, Math.max(0.0, this.progress / this.RequiredTimesec()));}

  // TimesecLeft() {return Math.max(0.0, this.RequiredTimesec() - this.progress);}
}
