// import { potionKind } from "./type/PotionKind";

export class DataMisc {
  ClearedMission: number;
  BuildingLevelBonus: number;
  nitroSpeed: number;
  constructor(data) {
    this.initialization(data);
  }
  initialization(data) {
    // data.pet.isInitialized = false;
    // console.log("data.isInitialized:", data.isInitialized);
    // console.log("data.upgrade.isInitialized:", data?.upgrade?.isInitialized);
    if (data.isInitialized) {
      for (const [key, value] of Object.entries(data.localStorage.misc)) {
        this[key] = value;
      }
    } else if (data.source.lastTimeLocal) {
      this.ClearedMission = this.getClearedMission(data);
      this.BuildingLevelBonus = this.getBuildingLevelBonus();
      this.nitroSpeed = data.source.nitroSpeed;
    }
  }

  private getClearedMission(data) {
    let counter = 0;

    for (let index = 0; index < data.source.isClearedMission.length; index++) {
      if (data.source.isClearedMission[index]) {
        counter++;
      }
    }
    return counter;
  }

  private getBuildingLevelBonus() {
    let bonus = 0;
    if (this.ClearedMission >= 550) {
      bonus += 10;
    }
    if (this.ClearedMission >= 1350) {
      bonus += 10;
    }
    if (this.ClearedMission >= 2300) {
      bonus += 10;
    }
    return bonus;
  }
}
