import { App } from "../App";
import { Page } from "../Page";

export class Test extends Page {
  constructor(app: App) {
    super(app);
    this.url = "#test";
    this.name = "Test";
    // globalThis.app.router.register("#test", this.html);
    // console.log(EquipmentKind.FoxHamayayumi);
    // console.log(data.source.equipmentKinds);
    // console.log(this);
  }

  get html() {
    let html = ``;

    html += `Hello Test <button onclick="console.log(globalThis.data)">DATA</button>`;
    html += `Hello Test <button onclick="console.log(globalThis.data.town.townLevelEffectMultiplier)">townLevelEffectMultiplier</button>`;
    html += `Hello Test <button onclick="console.log(globalThis.data.town.townLevelEffectMultipliers)">townLevelEffectMultipliers</button>`;
    html += `Hello Test <button onclick="console.log(globalThis.data.town.buildings[11])">AdventuringParty</button>`;
    html += `Hello Test <button onclick="console.log(globalThis.data.expedition.speedMultiplier)">passiveEffectMultiplier</button>`;

    return html;
  }
}
