import { App } from "../../App";
import { Page } from "../Page";
import { EquipmentSet } from "../../data/Equipment/EquipmentSet";
import { HeroKind } from "../../type/HeroKind";
import { EquipmentPart } from "../../type/EquipmentPart";
import { Util } from "../../Util";

export class Equipment {
  set: {
    Custom: EquipmentSet;
    Warrior: EquipmentSet;
    Wizard: EquipmentSet;
    Angel: EquipmentSet;
    Thief: EquipmentSet;
    Archer: EquipmentSet;
    Tamer: EquipmentSet;
  };
  constructor() {
    this.set = {
      Custom: new EquipmentSet("Custom"),
      Warrior: new EquipmentSet("Warrior"),
      Wizard: new EquipmentSet("Wizard"),
      Angel: new EquipmentSet("Angel", globalThis.data.inventory.getSet(HeroKind.Angel)),
      Thief: new EquipmentSet("Thief"),
      Archer: new EquipmentSet("Archer"),
      Tamer: new EquipmentSet("Tamer"),
    };
    // this.set.Custom = new EquipmentSet("Custom");
    // console.log(Util.render.Select("Armor"));

    // this.custom = { test: "hello" };
    // console.log(this.custom);
  }

  get html() {
    let html = ``;
    html += `<div>${this.set.Angel.html}</div>`;
    // html += `<hero-stat data-hero="Warrior"></hero-stat>`;
    // html += `<div data-endpoint="page.${this.url.slice(1)}.set.Custom.html"></div>`;
    // html += `<button onclick="globalThis.app.page.${this.url.slice(1)}.Save()">Save</button>`;
    return html;
  }
}
