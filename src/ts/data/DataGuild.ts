import { DataType } from "../type/DataType";

export class DataGuild {
  data: DataType;
  constructor(data: DataType) {
    this.data = data;
  }

  get level() {
    return this.data.source.guildLevel;
  }
  set level(value) {
    this.data.source.guildLevel = value;
  }

  html() {
    let html = "";

    html += `Total Cleared Mission: <span data-endpoint="misc.ClearedMission"></span><br>`;
    html += "<hr>";

    return html;
  }
}
