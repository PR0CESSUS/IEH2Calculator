import { Enums } from "../../Enums";
import { Equipment } from "../../data/Equipment/Equipment";
import { EquipmentPotion } from "../../data/Equipment/EquipmentPotion";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { EquipmentKind } from "../../type/EquipmentKind";
import { EquipmentPart } from "../../type/EquipmentPart";
import { EquipmentRarity } from "../../type/EquipmentRarity";
import { EquipmentSetKind } from "../../type/EquipmentSetKind";
import { HeroKind } from "../../type/HeroKind";
import { PotionKind } from "../../type/PotionKind";
import template from "./template.html";

import { set, get } from "lodash";

document.body.innerHTML += template;

export class customCheckbox extends HTMLElement {
  data: any;
  constructor() {
    super();
    this.data = get(globalThis.app, this.dataset.endpoint, null);

    this.attachShadow({ mode: "open" }).appendChild((document.getElementById("custom-checkbox") as HTMLTemplateElement).content.cloneNode(true));

    this.shadowRoot.querySelector('[name="name"]').innerHTML += this.innerHTML;
    this.shadowRoot.querySelector("input").checked = this.data;
    this.shadowRoot.querySelector("input").onchange = this.inputChange.bind(this);
    // this.shadowRoot.querySelector(".icon48").addEventListener("click", this.openEdit.bind(this));
    // this.shadowRoot.querySelector('[name="kind"]').addEventListener("change", this.changeKind.bind(this));

    // this.render();

    //   <div id="modal">
    //   <div class="modal-underlay" onclick="window.app.router.load()"></div>
    //   <div id="modal-content" class="modal-content"></div>
    // </div>
  }

  inputChange(event: Event & { target: HTMLInputElement }) {
    // console.log(, this);
    // console.log(event.target.value);

    set(globalThis.app, this.dataset.endpoint, event.target.checked);
    globalThis.app.Save();
    if (this.dataset.type == "superdungeon") {
      globalThis.data.inventory.Update();
      // console.log("checkbox superdungeon");

      // document.querySelector('hero-stat')
    }
    // globalThis.data.expedition.rewardModifierPerHour.isDirty = true;
    // globalThis.data.expedition.rewardModifierPerHour.isDirty = true;
    if (this.dataset.reload != "false") globalThis.app.router.load();
    // this.data = event.target.value;
    // console.log(globalThis.data.source.sdGemLevels[8]);
  }

  connectedCallback() {
    // console.log("s");
    // console.log("connectedCallback()");
    // this.render();
  }
}
