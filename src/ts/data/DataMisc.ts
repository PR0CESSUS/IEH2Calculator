// import { potionKind } from "./type/PotionKind";

export class DataMisc {
  data;
  BuildingLevelBonus: number;
  nitroTotal: number;
  fn: {};
  constructor(data) {
    this.data = data;
    this.initialization(data);
  }
  initialization(data) {
    // data.pet.isInitialized = false;
    // console.log("data.isInitialized:", data.isInitialized);
    // console.log("data.upgrade.isInitialized:", data?.upgrade?.isInitialized);

    this.BuildingLevelBonus = this.getBuildingLevelBonus();
    // this.nitroSpeed = data.source.nitroSpeed;

    // cleaning up consumed data
    // delete data.source.isClearedMission;
    // delete data.source.nitroSpeed;
  }
  get nitroSpeed() {
    return this.data.source.nitroSpeed;
  }
  set nitroSpeed(value) {
    this.data.source.nitroSpeed = value;
  }
  get ClearedMission() {
    return this.data.source.isClearedMission.filter(Boolean).length;
  }
  set ClearedMission(value) {
    const empty = 10000 - value;
    // console.log([...Array(value).fill(1), ...Array(empty).fill(0)]);

    this.data.source.isClearedMission = [...Array(value).fill(1), ...Array(empty).fill(0)];
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

  html() {
    let html = "";

    html += `Total Cleared Mission: <span data-endpoint="misc.ClearedMission"></span><br>`;
    html += "<hr>";

    return html;
  }
}
