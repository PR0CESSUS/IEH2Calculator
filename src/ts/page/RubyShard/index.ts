import { App } from "../../App";
import { Util } from "../../Util";
import { CustomSelectType } from "../../type/CustomSelectType";
import { Page } from "../Page";

export class CalculatorRubyShard {
  endpoint = "";
  custom = {
    ticket: 0,
    failure: 0,
    dungeon: 0,
    modifier: 0,
    floor: 100,
  };
  constructor() {}

  Initialization(): void {
    this.custom;
  }

  runsNum() {
    let runs = 0;
    while (globalThis.data.source.SDAutoLeaveAndRetryTargetEntryCost > Math.pow(2, runs)) runs++;
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
    // CustomSelectType
    html += `Dungeon: <custom-select data-type="${CustomSelectType.SuperDungeon}" data-endpoint="page['ruby-shard'].logic.custom.dungeon">${this.custom.dungeon}</custom-select>`;
    html += `Modifier: <user-input data-endpoint="${this.endpoint}.custom.modifier"></user-input>`;
    html += `Floors Cleared: <user-input data-endpoint="${this.endpoint}.custom.floor"></user-input>`;
    html += `<table>`;

    html += `<tr><td>Failure Rate %</td><td><user-input data-endpoint="${this.endpoint}.custom.failure"></user-input> (Total Ruby Shards = Total Ruby Shards - Total Ruby Shards * failure rate)</td></tr>`;
    html += `<tr><td>Tickets</td><td><user-input data-endpoint="${this.endpoint}.custom.ticket"></user-input></td></tr>`;
    html += `<tr><td>Reset Value</td><td><user-input data-endpoint="data.source.SDAutoLeaveAndRetryTargetEntryCost"></user-input></td></tr>`;
    html += `<tr><td>Portal Orb Cost</td><td>${Util.convertTo(this.costPerTicket() * this.custom.ticket)}</td></tr>`;
    html += `<tr><td>Runs</td><td>${this.runsNum() * 5 * this.custom.ticket}</td></tr>`;
    let shard = this.runsNum() * 5 * this.custom.ticket * this.getShardsGain();
    shard = shard - shard * (this.custom.failure / 100);
    html += `<tr><td>Ruby Shard per Dungeon</td><td>${this.getShardsGain()}</td></tr>`;
    html += `<tr><td>Total Ruby Shards</td><td>${Util.convertTo(shard, 3)}</td></tr>`;
    html += `<tr><td>Ruby Converter</td><td>${Util.convertTo(convertCost)}</td></tr>`;
    html += `<tr><td>Total Ruby</td><td>${Math.floor(shard / convertCost)}</td></tr>`;
    html += `</table>`;
    html += `<hr>`;

    return html;
  }
}
