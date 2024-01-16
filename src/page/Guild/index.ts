import { Util } from "../../Util";
import { secondsToDhms } from "../../Util/secondsToDhms";

export class PageGuild {
  database = {
    targetLevel: 0,
    expPerHour: 0,
  };
  endpoint = `page.routes.guild.template.database`;
  constructor() {
    this.database = globalThis.app.database.Connect("guild", this.database);
  }

  Initialization() {}
  getTime() {
    let levelTotal = this.database.targetLevel - globalThis.data.source.guildLevel;

    if (levelTotal > 0 && this.database.expPerHour > 0) {
      let requiredExpTotal = 0;
      let time = 0;
      let talismanPassive = 1.0 - globalThis.data.potion.talismans[0].passiveEffectValue;

      for (let i = 0; i < levelTotal; i++) {
        let level = globalThis.data.source.guildLevel + i;
        let requiredExp =
          Math.floor(
            (500.0 * (level + 1) +
              50.0 * Math.pow(level, 2.0) +
              500.0 * Math.pow(level / 5.0, 3.0) +
              2000.0 * Math.pow(level / 10.0, 6.0) +
              25000.0 * Math.pow(level / 20.0, 9.0) +
              300000.0 * Math.pow(level / 30.0, 12.0)) *
              Math.pow(10.0, Math.max(0, level - 300) / 25.0)
          ) * talismanPassive;

        requiredExpTotal += requiredExp;
      }

      let expPerSeconds = (this.database.expPerHour / 3600) * globalThis.data.source.nitroSpeed;
      time = requiredExpTotal / expPerSeconds;
      // console.log("expPerSeconds " + parseInt(expPerSeconds));
      // console.log("requiredExpTotal " + requiredExpTotal);

      // console.log("seconds " + time);

      // GuildParameter.RequiredExp(level) * (1.0 - this.expRequirementReduction.Value());

      return secondsToDhms(time);
    } else {
      return 0;
    }
    //
  }
  get html() {
    // globalThis.data.source.nitroSpeed
    let html = `<table>`;
    html += `<tr><td>Nitro Speed</td><td><custom-input data-endpoint="data.source.nitroSpeed" data-convert="true" data-precision="1"></custom-input></td></tr>`;
    html += `<tr><td>Current Level</td><td><custom-input data-endpoint="data.source.guildLevel"></custom-input></td></tr>`;
    html += `<tr><td>Target Level</td><td><custom-input data-endpoint="${this.endpoint}.targetLevel"></custom-input></td></tr>`;
    html += `<tr><td>Guild EXP per hour</td><td><custom-input data-endpoint="${this.endpoint}.expPerHour" data-convert="true"></custom-input></td></tr>`;
    html += `<tr><td>Guild Member's Emblem Disasambled</td><td><custom-input data-endpoint="data.potion.talismans[0].disassembledNum"></custom-input>Reduce Guild EXP requirement to level by ${Util.percent(
      globalThis.data.potion.talismans[0].passiveEffectValue
    )}</td></tr>`;
    html += `<tr><td>Approximate Time Needed</td><td>${this.getTime()}</td></tr>`;
    html += `</table>`;
    return html;
  }
}
