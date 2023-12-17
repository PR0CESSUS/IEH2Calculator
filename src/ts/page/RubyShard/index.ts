import { App } from "../../App";
import { Util } from "../../Util";
import { Page } from "../Page";

export class RubyShard {
  endpoint = "";
  custom = {
    ticket: 0,
    reset: 0,
    failure: 0,
    dungeon: 0,
    modifier: 0,
    floor: 0,
  };
  constructor() {}

  Initialization(): void {
    this.custom;
  }

  runsNum() {
    let runs = 0;
    while (this.custom.reset > Math.pow(2, runs)) runs++;
    return runs;
  }

  costPerTicket() {
    // console.log(this.custom);
    let runs = this.runsNum();
    let cost = 0;
    for (let index = 0; index < runs; index++) {
      cost += Math.pow(2, index) * 5;
    }

    return cost;
  }

  getShardsGain() {
    let SUM = 0;
    // const modifier = JSON.parse(this.custom.modifier);

    for (let index = 1; index < Math.floor(this.custom.floor / 10) + 1; index++) {
      let floor = index * 10;
      let gain = (floor / 10 + this.custom.modifier) * (1 + this.custom.dungeon);
      // console.log(gain, index + this.custom.modifier);
      SUM += gain;
    }
    return SUM;
  }

  get html() {
    const convertCost = globalThis.data.sdg.shopCtrl.rubyConverterPieceOfRubyCost.Value();
    let html = ``;
    html += `Dungeon: <custom-select data-type="SDdungeon" data-endpoint="page['ruby-shard'].logic.custom.dungeon">${this.custom.dungeon}</custom-select>`;
    html += `Modifier: <user-input data-endpoint="${this.endpoint}.custom.modifier"></user-input>`;
    html += `Floors Cleared: <user-input data-endpoint="${this.endpoint}.custom.floor"></user-input>`;
    html += `<br>`;
    html += `Shard per Dungeon : ${this.getShardsGain()}<br>`;
    html += `Failure Rate % : <user-input data-endpoint="${this.endpoint}.custom.failure"></user-input> (Total Ruby Shards = Total Ruby Shards - Total Ruby Shards * failure rate)<br>`;
    html += `Tickets : <user-input data-endpoint="${this.endpoint}.custom.ticket"></user-input><br>`;
    html += `Reset Value : <user-input data-endpoint="${this.endpoint}.custom.reset"></user-input><br>`;
    html += `Portal Orb Cost : ${Util.convertTo(this.costPerTicket() * this.custom.ticket)}<br>`;
    html += `Runs ${this.runsNum() * 5 * this.custom.ticket}<br>`;
    let shard = this.runsNum() * 5 * this.custom.ticket * this.getShardsGain();
    shard = shard - shard * (this.custom.failure / 100);

    html += `Total Ruby Shards ${Util.convertTo(shard, 3)}<br>`;
    html += `Ruby Converter : ${Util.convertTo(convertCost)}<br>`;
    html += `Total Ruby : ${Math.floor(shard / convertCost)}<br>`;
    html += `<hr>`;

    return html;
  }
}
