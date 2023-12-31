import { Enums } from "../../Enums";
import { Equipment } from "../../data/Equipment/Equipment";
import { EquipmentPotion } from "../../data/Equipment/EquipmentPotion";
import { Localization } from "../../localization";
import { CustomSelectType } from "../../type/CustomSelectType";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { EquipmentKind } from "../../type/EquipmentKind";
import { EquipmentPart } from "../../type/EquipmentPart";
import { EquipmentRarity } from "../../type/EquipmentRarity";
import { EquipmentSetKind } from "../../type/EquipmentSetKind";
import { HeroKind } from "../../type/HeroKind";
import { PotionKind } from "../../type/PotionKind";
import { ComponentEquipmentLoadout } from "../Equipment-Loadout";
import { ComponentEquipmentInfo } from "../equipment";
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

    this.attachShadow({ mode: "open" }).appendChild((document.getElementById("custom-select") as HTMLTemplateElement).content.cloneNode(true));

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
    if (this.dataset.type == undefined) return `<option value="0">Nothing</option>`;
    for (let index = 0; index < this.length; index++) {
      const isSelected = parseInt(this.innerHTML) == index ? " selected" : "";
      switch (parseInt(this.dataset.type)) {
        case CustomSelectType.HeroKind:
          options += `<option value="${index}"${isSelected}>${HeroKind[index]}</option>`;
          break;
        case CustomSelectType.SuperDungeon:
          options += `<option value="${index}"${isSelected}>${Localization.SDName(index)}</option>`;
          break;
        case CustomSelectType.Weapon:
          if (globalThis.data.equipment.globalInformations[index].part == EquipmentPart.Weapon || index == 0)
            options += `<option value="${index}"${isSelected}>${Localization.EquipmentName(index)}</option>`;
          break;
        case CustomSelectType.Armor:
          if (globalThis.data.equipment.globalInformations[index].part == EquipmentPart.Armor || index == 0)
            options += `<option value="${index}"${isSelected}>${Localization.EquipmentName(index)}</option>`;
          break;
        case CustomSelectType.Jewelry:
          if (globalThis.data.equipment.globalInformations[index].part == EquipmentPart.Jewelry || index == 0)
            options += `<option value="${index}"${isSelected}>${Localization.EquipmentName(index)}</option>`;
          break;
        case CustomSelectType.PotionKind:
          options += `<option value="${index}"${isSelected}>${Localization.PotionName(index)}</option>`;
          break;
        case CustomSelectType.EquipmentEffectKind:
          options += `<option value="${index}"${isSelected}>${Localization.EquipmentEffectName(index)}</option>`;
          break;
        case CustomSelectType.EquipmentForgeEffectKind:
          options += `<option value="${index}"${isSelected}>${Localization.ForgeNameString(index)}</option>`;
          break;
        default:
          break;
      }
    }
    return options;
  }

  get length() {
    switch (parseInt(this.dataset.type)) {
      case CustomSelectType.EquipmentKind:
      case CustomSelectType.Weapon:
      case CustomSelectType.Armor:
      case CustomSelectType.Jewelry:
        return Enums.EquipmentKind;
      case CustomSelectType.HeroKind:
        return Enums.HeroKind;
      case CustomSelectType.PotionKind:
        return Enums.PotionKind;
      case CustomSelectType.EquipmentEffectKind:
        return Enums.EquipmentEffectKind;
      case CustomSelectType.EquipmentForgeEffectKind:
        return Enums.EquipmentForgeEffectKind;
      case CustomSelectType.SuperDungeon:
        return 5;
      default:
        return 0;
    }
  }

  inputChange(event: Event & { target: HTMLInputElement }) {
    // console.log(, this);
    // console.log(event.target.value);
    // event.preventDefault();
    //@ts-ignore
    // console.dir(event.composedPath()[1].host.parentElement);

    if (this.dataset.endpoint == undefined || this.dataset.endpoint == "") return;

    set(globalThis.app, this.dataset.endpoint, parseInt(event.target.value));
    globalThis.app.Save();
    // globalThis.data.expedition.rewardModifierPerHour.isDirty = true;
    const type = parseInt(this.dataset.type);
    if (type == CustomSelectType.Weapon || type == CustomSelectType.Armor || type == CustomSelectType.Jewelry || type == CustomSelectType.EquipmentEffectKind) {
      // console.log("equipment event : ", this.dataset.id);
      const equipmentInfo = document.querySelector("equipment-loadout").shadowRoot.querySelector(`equipment-info[data-id="${this.dataset.id}"]`) as ComponentEquipmentInfo;

      equipmentInfo.changeKind();
      // (.changeKind(customEvent);
    }
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
