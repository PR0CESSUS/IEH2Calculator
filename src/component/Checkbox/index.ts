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
import style from '!!css-loader?{"sourceMap":false,"exportType":"string"}!./style.css';
import { set, get } from "lodash";

export class ComponentCustomCheckbox extends HTMLElement {
  data: any;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.data = get(globalThis.app, this.dataset.endpoint, null);

    this.shadowRoot.innerHTML += `<style>${style}</style>`;
    // this.shadowRoot.innerHTML += template;

    const input = document.createElement("input");
    const name = document.createElement("span");
    this.style.display = "flex";

    name.innerHTML += this.innerHTML;
    input.type = "checkbox";
    input.checked = this.data;
    input.onchange = this.inputChange.bind(this);
    // this.classList.forEach((className) => {
    //   input.classList.add(className);
    // });
    // this.shadowRoot.querySelector(".icon48").addEventListener("click", this.openEdit.bind(this));
    // this.shadowRoot.querySelector('[name="kind"]').addEventListener("change", this.changeKind.bind(this));

    this.shadowRoot.append(input);
    this.shadowRoot.append(name);
  }

  inputChange(event: Event & { target: HTMLInputElement }) {
    // console.log(, this);
    // console.log(event.target.value);

    set(globalThis.app, this.dataset.endpoint, event.target.checked);
    // globalThis.app.Save();
    // hideous build in logic
    if (this.dataset.endpoint == "data.custom.isSuperDungeon") {
      globalThis.data.SetLog10();
      globalThis.data.inventory.Update();
    }

    // globalThis.data.expedition.rewardModifierPerHour.isDirty = true;
    // globalThis.data.expedition.rewardModifierPerHour.isDirty = true;
    if (this.dataset.reload != "false") globalThis.app.page.Load();
    // this.data = event.target.value;
    // console.log(globalThis.data.source.sdGemLevels[8]);
  }

  connectedCallback() {
    // console.log("s");
    // console.log("connectedCallback()");
    // this.render();
  }
}
