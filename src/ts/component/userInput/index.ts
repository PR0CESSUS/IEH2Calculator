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

export default class userInput extends HTMLElement {
  data: any;

  constructor() {
    super();
    this.data = get(globalThis.app, this.dataset.endpoint, null);
    // this.attachShadow({ mode: "open" });
    // const input = document.createElement("input");
    // input.type = "text";
    // input.value = "value";
    // this.shadowRoot.appendChild(input);
    // console.log(this.data);

    this.attachShadow({ mode: "open" }).appendChild((document.getElementById("user-input") as HTMLTemplateElement).content.cloneNode(true));
    this.shadowRoot.innerHTML += this.innerHTML;
    this.shadowRoot.querySelector("input").value = this.data;
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
    set(globalThis.app, this.dataset.endpoint, event.target.value);
    globalThis.app.Save();
    // globalThis.data.expedition.rewardModifierPerHour.isDirty = true;
    // globalThis.data.expedition.rewardModifierPerHour.isDirty = true;
    globalThis.app.router.load();
    // this.data = event.target.value;
    // console.log(globalThis.data.source.sdGemLevels[8]);
  }

  connectedCallback() {
    // console.log("s");
    // console.log("connectedCallback()");
    // this.render();
  }
}
