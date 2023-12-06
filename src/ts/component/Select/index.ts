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

export class customSelect extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: "open" });
    // const input = document.createElement("input");
    // input.type = "text";
    // input.value = "value";
    // this.shadowRoot.appendChild(input);
    // console.log(this.data);

    this.attachShadow({ mode: "open" }).appendChild(
      (document.getElementById("custom-select") as HTMLTemplateElement).content.cloneNode(true)
    );

    this.shadowRoot.querySelector("select").innerHTML = this.createOption();
    // this.shadowRoot.querySelector("input").value = this.data;
    this.shadowRoot.querySelector("select").onchange = this.inputChange.bind(this);
    // this.shadowRoot.querySelector(".icon48").addEventListener("click", this.openEdit.bind(this));
    // this.shadowRoot.querySelector('[name="kind"]').addEventListener("change", this.changeKind.bind(this));

    // this.render();

    //   <div id="modal">
    //   <div class="modal-underlay" onclick="window.app.router.load()"></div>
    //   <div id="modal-content" class="modal-content"></div>
    // </div>
  }
  createOption() {
    let options = ``;
    if (this.dataset.type) {
      for (let index = 0; index < Enums[this.dataset.type]; index++) {
        options += `<option value="${index}" ${parseInt(this.innerHTML) == index ? "selected" : ""}>${this.type[index]}</option>`;
      }
    } else {
      options = `<option value="0">Nothing</option>`;
    }

    return options;
  }

  get type() {
    switch (this.dataset.type) {
      case "HeroKind":
        return HeroKind;

      default:
        return null;
    }
  }

  inputChange(event: Event & { target: HTMLInputElement }) {
    // console.log(, this);
    // console.log(event.target.value);

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
