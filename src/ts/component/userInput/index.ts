import { Enums } from "../../Enums";
import { Util } from "../../Util";
import { Equipment } from "../../data/Equipment/Equipment";
import { EquipmentPotion } from "../../data/Equipment/EquipmentPotion";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { EquipmentKind } from "../../type/EquipmentKind";
import { EquipmentPart } from "../../type/EquipmentPart";
import { EquipmentRarity } from "../../type/EquipmentRarity";
import { EquipmentSetKind } from "../../type/EquipmentSetKind";
import { HeroKind } from "../../type/HeroKind";
import { PotionKind } from "../../type/PotionKind";
import { ComponentEquipmentInfo } from "../equipment";
import template from "./template.html";

import { set, get } from "lodash";

document.body.innerHTML += template;

export default class userInput extends HTMLElement {
  data: any;
  precision = 2;

  constructor() {
    super();
    this.data = get(globalThis.app, this.dataset.endpoint, null);
    this.precision = this.dataset.precision ? parseInt(this.dataset.precision) : 2;
    // this.attachShadow({ mode: "open" });
    // const input = document.createElement("input");
    // input.type = "text";
    // input.value = "value";
    // this.shadowRoot.appendChild(input);
    // console.log(this.data);

    this.attachShadow({ mode: "open" }).appendChild((document.getElementById("user-input") as HTMLTemplateElement).content.cloneNode(true));
    this.shadowRoot.innerHTML += this.innerHTML;
    const input = this.shadowRoot.querySelector("input") as HTMLInputElement;
    input.value = this.dataset.convert == "true" ? Util.convertTo(this.data, this.precision) : this.data;

    input.onchange = this.inputChange.bind(this);

    if (this.dataset.width) input.style.width = this.dataset.width;

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
    let value = this.dataset.convert == "true" ? Util.convertFrom(event.target.value) : parseFloat(event.target.value);
    // console.log(value);

    // return;
    // let value = parseFloat(event.target.value);

    if (this.dataset.max) {
      value = Math.min(value, parseFloat(this.dataset.max));
    }
    set(globalThis.app, this.dataset.endpoint, value);
    globalThis.app.Save();

    // this.shadowRoot.querySelector("input").value = get(globalThis.app, this.dataset.endpoint, null);
    // console.dir();

    if (this.offsetParent.id == "equipment-dialog") {
      // console.log("equipment event : ", this.dataset.id);
      const equipmentInfo = document.querySelector("equipment-loadout").shadowRoot.querySelector(`equipment-info[data-id="${this.dataset.id}"]`) as ComponentEquipmentInfo;

      equipmentInfo.render(true);
      // (.changeKind(customEvent);
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
