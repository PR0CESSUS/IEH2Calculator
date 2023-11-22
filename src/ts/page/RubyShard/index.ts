import { App } from "../../App";
import { Util } from "../../Util";
import { Page } from "../Page";

export class RubyShard extends Page {
  constructor(app: App) {
    super(app);

    this.url = "#ruby-shard";
    this.name = "Ruby Shard";
  }

  Initialization(): void {
    this.custom = {
      shard: 0,
      ticket: 0,
      reset: 0,
      failure: 0,
    };
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

  get html() {
    let html = ``;
    html += `Shard per Dungeon : <user-input data-endpoint="page['ruby-shard'].custom.shard"></user-input><br>`;
    html += `Failure Rate % : <user-input data-endpoint="page['ruby-shard'].custom.failure"></user-input><br>`;
    html += `Tickets : <user-input data-endpoint="page['ruby-shard'].custom.ticket"></user-input><br>`;
    html += `Reset Value : <user-input data-endpoint="page['ruby-shard'].custom.reset"></user-input><br>`;
    html += `Runs Cost ${this.costPerTicket() * this.custom.ticket}<br>`;
    html += `Runs ${this.runsNum() * 5 * this.custom.ticket}<br>`;
    let shard = this.runsNum() * 5 * this.custom.ticket * this.custom.shard;
    shard = shard - shard * (this.custom.failure / 100);
    html += `Shards ${Util.convertTo(shard, 3)}<br>`;
    return html;
  }
}
