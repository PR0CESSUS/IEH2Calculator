import { Enums } from "../../Enums";
import { Util } from "../../Util";
import { Localization } from "../../localization";
import { Equipment } from "../../data/Equipment/Equipment";
import { EquipmentPotion } from "../../data/Equipment/EquipmentPotion";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { EquipmentForgeEffectKind } from "../../type/EquipmentForgeEffectKind";
import { EquipmentKind } from "../../type/EquipmentKind";
import { EquipmentPart } from "../../type/EquipmentPart";
import { EquipmentRarity } from "../../type/EquipmentRarity";
import { EquipmentSetKind } from "../../type/EquipmentSetKind";
import { HeroKind } from "../../type/HeroKind";
import { PotionKind } from "../../type/PotionKind";
import template from "./template.html";
import style from '!!css-loader?{"sourceMap":false,"exportType":"string"}!./style.css';
import { set, get } from "lodash";
import { EquipmentParameter } from "../../data/Equipment/EquipmentParameter";
import { CustomSelectType } from "../../type/CustomSelectType";
import { ComponentHeroStat } from "../Hero-Stat";

export class ComponentPotionInfo extends HTMLElement {
  potion: EquipmentPotion;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML += `<style>@import "./styles-bundle.css";${style}</style>`;
    this.shadowRoot.innerHTML += template;
    // console.log(this.shadowRoot);

    // this.data = get(globalThis.app, this.dataset.endpoint, 0);
    // console.log(this.equipment);

    this.potion = globalThis.data.inventory.potionSlots[parseInt(this.dataset.id)];

    // this.shadowRoot.querySelector(".icon48").addEventListener("click", this.openEdit.bind(this));
    // this.shadowRoot.querySelector(".icon48").addEventListener("mouseover", this.initialRender.bind(this), { once: true });
    // this.shadowRoot.querySelector(".icon48").addEventListener("mouseover", this.mouseOverHandler.bind(this));
    // this.shadowRoot.querySelector('[name="kind"]').addEventListener("change", this.changeKind.bind(this));

    // if (this.equipment?.kind == 0 || this.potion?.kind == 0) (this.shadowRoot.querySelector(".tooltip-text") as HTMLDivElement).style.display = "none";

    this.render();
  }

  mouseOverHandler() {}

  openEdit() {
    if (this.dataset.disabled == "true") return;
    this.render(true);
    const modal = this.shadowRoot.querySelector("#equipment-dialog") as HTMLDialogElement;
    const content = modal.querySelector(`[name="dialog-content"]`) as HTMLDivElement;
    const title = modal.querySelector(`[name="dialog-title"]`) as HTMLHeadingElement;
    const closeEdit = this.closeEdit.bind(this);

    // modal.style.width = "700px";
    content.appendChild(this.shadowRoot.querySelector(".content"));
    title.innerHTML = "";

    // content.innerHTML = `<custom-select data-type="${CustomSelectType.HeroKind}"
    // data-endpoint="data.source.currentHero">${globalThis.data.source.currentHero}</custom-select>`;
    // content.append(this.createSelect(CustomSelectType.PotionKind, selected, part));
    modal.showModal();
  }

  closeEdit() {
    const modal = this.shadowRoot.querySelector("#equipment-dialog") as HTMLDialogElement;
    if (modal.open) {
      modal.close();
    }
    this.shadowRoot.querySelector(".tooltip-text").appendChild(this.shadowRoot.querySelector(".content"));
    this.render();
    (document.querySelector("hero-stat") as ComponentHeroStat).render();
  }
  renderIcon() {
    const icon = this.shadowRoot.querySelector(".icon48") as HTMLImageElement;
    if (this.potion.isDisabled()) {
      icon.classList.add("disabled");
    }
    icon.src = `./img/equip/${this.potion.kind == 0 ? "EquipSlotPotion" : PotionKind[this.potion.kind]}.png`;
  }
  render(edit: boolean = false) {
    this.renderIcon();
    const tooltip = this.shadowRoot.querySelector('[slot="tooltip"]') as HTMLDivElement;
    const dialog = this.shadowRoot.querySelector('[slot="dialog"]') as HTMLSlotElement;
    if (this.potion.kind == 0) {
      tooltip.style.display = "none";
    } else {
      tooltip.style.display = "block";
    }

    tooltip.innerHTML = this.renderInfo();
    dialog.innerHTML = this.renderInfo(true);
  }
  renderInfo(edit: boolean = false) {
    let html = `
  <div style="height: 100px; font-size: 14px;">
  <img class="icon96 icon-border" style="margin-right: 10px;" src="./img/equip/${PotionKind[this.potion.kind]}.png">`;
    if (edit) {
      html += `<custom-select data-type="${CustomSelectType.PotionKind}" data-reload="false"
      data-endpoint="data.inventory.potionSlots[${this.potion.slotId}].kind" data-id="${this.potion.slotId}" data-render="equipment-loadout#${this.id}">${this.potion.kind}</custom-select>`;
    } else {
      html += `<span name="kind">${Localization.PotionName(this.potion.kind)}</span>`;
    }

    html += `&lt; <span class="green" name="level">Lv ${this.potion.level}</span> &gt;<br><br>
  <div data-type="potion">
    <p>Type: ${Localization.PotionTypeString(this.potion.type)}</p><br>
    <p>Stack #: ${this.potion.stack}/30</p>
  </div>
</div>
<h5>Equipped Effect</h5>
<p name="effect">- ${Localization.PotionEffect(this.potion.kind, this.potion.effectValue, false)}</p>
`;

    return html;
  }

  Update() {
    this.render();

    (document.querySelector("hero-stat") as ComponentHeroStat).Update();
  }

  connectedCallback() {
    // console.log("connectedCallback()");
    // this.render();
  }

  changeKind() {
    // this.elements.kind.value;
    // console.log("changeKind");

    this.render(true);

    // this.equipment.kind = parseInt(event.target.value);
    // // console.log(event.target.value);
    // if (this.equipment.kind != 0) (this.shadowRoot.querySelector(".tooltip-text") as HTMLDivElement).style.display = "block";
    // if (this.equipment.kind == 0) (this.shadowRoot.querySelector(".tooltip-text") as HTMLDivElement).style.display = "none";
    // this.render(true);
    // const clone = this.shadowRoot.querySelector(".tooltip-text").cloneNode(true);
    // document.getElementById("modal-content").innerHTML = this.shadowRoot.querySelector("tooltip-text").innerHTML;
    // document.getElementById("modal-content").appendChild(clone);
  }

  copyEvent(type = null) {
    // globalThis.app.clipboard = { type: "CopyOptionEffect", data: this.equipment.CopyOptionEffect() };
    // console.log(this.equipment.CopyOptionEffect());
  }
}
