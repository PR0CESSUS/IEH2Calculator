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

export class CustomDialog extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild((document.getElementById("custom-dialog") as HTMLTemplateElement).content.cloneNode(true));
    this.shadowRoot.innerHTML += this.innerHTML;
    (this.shadowRoot.querySelector("#dialog") as HTMLDialogElement).showModal();
  }

  connectedCallback() {}
}
