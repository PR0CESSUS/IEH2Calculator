import { Statistic } from "../Statistic";
import { DataType } from "../type/DataType";

export class DataStatistic {
  data: DataType;
  nitro: Statistic;
  nitroTotal: number;
  constructor(data: DataType) {
    this.data = data;
    this.nitro = new Statistic(5000);

    // console.log("this.data.source.epicStorePurchasedNum:", this.data.source.epicStorePurchasedNum);
    // console.log(this);
  }

  html() {
    let html = "";

    html += `Total Cleared Mission: <span data-endpoint="misc.ClearedMission"></span><br>`;
    html += "<hr>";

    return html;
  }
}
