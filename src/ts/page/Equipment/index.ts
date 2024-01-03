import { App } from "../../App";
import { Page } from "../Page";
import { HeroKind } from "../../type/HeroKind";
import { EquipmentPart } from "../../type/EquipmentPart";
import { Util } from "../../Util";
import { Enums } from "../../Enums";

export class CalculatorEquipment {
  constructor() {}

  Initialization() {}

  get html() {
    let html = ``;
    // html += `<custom-checkbox data-endpoint="data.custom.isSuperDungeon">Super Dungeon</custom-checkbox>`;
    html += `<equipment-loadout></equipment-loadout>`;
    html += `<hero-stat></hero-stat>`;

    return html;
  }
}
