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

import { set, get } from "lodash";

document.body.innerHTML += template;

export default class equipmentInfo extends HTMLElement {
  data: Equipment;
  slotType: "Weapon" | "Armor" | "Jewelry" | "Utility" | string;

  constructor() {
    super();
    this.data = get(globalThis.app, this.dataset.endpoint, 0);
    // console.log(this.data);

    this.slotType = this.dataset.slot;

    this.attachShadow({ mode: "open" }).appendChild(
      (document.getElementById("equipment-info") as HTMLTemplateElement).content.cloneNode(true)
    );
    (this.shadowRoot.querySelector(".icon48") as HTMLImageElement).src = `./img/equip/${this.slotKind[this.data.kind]}.png`;
    this.shadowRoot.querySelector(".icon48").addEventListener("click", this.openEdit.bind(this));
    this.shadowRoot.querySelector(".icon48").addEventListener("mouseover", this.initialRender.bind(this), { once: true });
    this.shadowRoot.querySelector('[name="kind"]').addEventListener("change", this.changeKind.bind(this));

    const kind = this.shadowRoot.querySelector('[name="kind"]') as HTMLSelectElement;

    kind.innerHTML += Util.render.Select(this.slotType);
    kind.querySelectorAll("option").forEach((option) => {
      if (parseInt(option.value) == this.data.kind) option.selected = true;
    });

    if (this.data.kind == 0) (this.shadowRoot.querySelector(".tooltip-text") as HTMLDivElement).style.display = "none";

    // this.render();

    //   <div id="modal">
    //   <div class="modal-underlay" onclick="window.app.router.load()"></div>
    //   <div id="modal-content" class="modal-content"></div>
    // </div>
  }

  initialRender() {
    this.render();
  }

  openEdit() {
    this.render(true);
    const modal = document.createElement("div");
    modal.id = "modal";
    const underlay = document.createElement("div");
    underlay.classList.add("modal-underlay");
    underlay.onclick = () => {
      // console.log(this);
      this.shadowRoot.querySelector(".tooltip-text").appendChild(this.shadowRoot.querySelector(".content"));
      this.shadowRoot.getElementById("modal").remove();
      (this.shadowRoot.querySelector('[name="kind"]') as HTMLSelectElement).disabled = true;
      // this.parentElement.remove();
    };
    const content = document.createElement("div");
    content.classList.add("modal-content");
    content.id = "modal-content";
    // const clone = this.shadowRoot.querySelector(".content").cloneNode(true);
    content.appendChild(this.shadowRoot.querySelector(".content"));

    modal.appendChild(underlay);
    modal.appendChild(content);
    this.shadowRoot.appendChild(modal);
    // this.shadowRoot.querySelector(".tooltip").classList.toggle("modal");
    // (this.shadowRoot.querySelector(".icon48") as HTMLImageElement).style.display = "none";
    // (this.shadowRoot.querySelector(".tooltip") as HTMLDivElement).style.display = "block";
    // this.shadowRoot.querySelector(".tooltip-text").classList.toggle("modal-content");
    // this.shadowRoot.querySelector(".tooltip-text").classList.toggle("tooltip-text");
    // const modal = this.shadowRoot.querySelector(".modal") as HTMLDivElement;

    // this.elements.modal.wrapper.remove();
    // this.shadowRoot.appendChild(this.template.getElementById("modal"));
  }

  get slotKind() {
    switch (this.slotType) {
      case "Utility":
        return PotionKind;
      case "Armor":
      case "Weapon":
      case "Jewelry":
        return EquipmentKind;
      default:
        break;
    }
  }

  render(edit: boolean = false) {
    if (edit == false && this.data.kind == 0) return;
    (this.shadowRoot.querySelector(".icon48") as HTMLImageElement).src = `./img/equip/${this.slotKind[this.data.kind]}.png`;
    (this.shadowRoot.querySelector(".icon96") as HTMLImageElement).src = `./img/equip/${this.slotKind[this.data.kind]}.png`;

    const kind = this.shadowRoot.querySelector('[name="kind"]') as HTMLSelectElement;
    const level = this.shadowRoot.querySelector('[name="level"]');
    const effect = this.shadowRoot.querySelector('[name="effect"]');

    level.innerHTML = `Lv ${this.data.level}`;
    // effect.innerHTML = `Effect : ${globalThis.data.potion.GlobalInfo(this.data.kind).effectValue}`;
    // effect.innerHTML += `#### : ${this.data.totalOptionNum.value}`;

    // this.template.querySelector('[name="stack"]').innerHTML = edit
    //   ? `<input type="text" size="6" value="${this.data.stack}">`
    //   : `Stack # : ${this.data.stack} / 30`;

    if (this.slotType != "Utility") {
      this.shadowRoot.querySelector('[name="part"]').innerHTML =
        EquipmentPart[globalThis.data.equipment.globalInformations[this.data.kind].part];
      this.shadowRoot.querySelector('[name="rarity"]').innerHTML =
        EquipmentRarity[globalThis.data.equipment.globalInformations[this.data.kind].rarity];
      this.shadowRoot.querySelector('[name="setKind"]').innerHTML =
        EquipmentSetKind[globalThis.data.equipment.globalInformations[this.data.kind].setKind];

      // const effects = globalThis.data.equipment.globalInformations[this.data.kind].effects;
      let string = "";
      this.getEffects();
      this.getOptionEffects();
      this.getForgeEffects();
      this.getProficiency();

      //
    }

    if (edit) kind.disabled = false;
  }

  connectedCallback() {
    // console.log("connectedCallback()");
    // this.render();
  }

  getProficiency() {
    // this.shadowRoot.querySelector('[name="proficiency-warrior-level"]').innerHTML = `Lv ${
    //   globalThis.data.equipment.globalInformations[this.data.kind].levels[HeroKind.Warrior].value
    // }`;
    // this.shadowRoot.querySelector('[name="proficiency-wizard-level"]').innerHTML = `Lv ${
    //   globalThis.data.equipment.globalInformations[this.data.kind].levels[HeroKind.Wizard].value
    // }`;
    // this.shadowRoot.querySelector('[name="proficiency-angel-level"]').innerHTML = `Lv ${
    //   globalThis.data.equipment.globalInformations[this.data.kind].levels[HeroKind.Angel].value
    // }`;
    // this.shadowRoot.querySelector('[name="proficiency-thief-level"]').innerHTML = `Lv ${
    //   globalThis.data.equipment.globalInformations[this.data.kind].levels[HeroKind.Thief].value
    // }`;
    // this.shadowRoot.querySelector('[name="proficiency-archer-level"]').innerHTML = `Lv ${
    //   globalThis.data.equipment.globalInformations[this.data.kind].levels[HeroKind.Archer].value
    // }`;
    // this.shadowRoot.querySelector('[name="proficiency-tamer-level"]').innerHTML = `Lv ${
    //   globalThis.data.equipment.globalInformations[this.data.kind].levels[HeroKind.Tamer].value
    // }`;

    this.data.globalInfo.levelMaxEffects.forEach((effect, index) => {
      const value = this.data.EffectValue(effect.EffectValue(0), HeroKind.Warrior);
      // console.log(`[name="proficiency-effect-${HeroKind[index]}"]`);
      this.shadowRoot.querySelector(`[name="proficiency-level-${HeroKind[index]}"]`).innerHTML = `Lv ${
        globalThis.data.equipment.globalInformations[this.data.kind].levels[index].value
      }`;
      this.shadowRoot.querySelector(`[name="proficiency-effect-${HeroKind[index]}"]`).innerHTML = `[${Localization.EquipmentEffectName(
        globalThis.data.equipment.globalInformations[this.data.kind].levelMaxEffects[index].kind
      )} + ${Util.convertTo(value, 2, effect.valueKind)}] 
        `;
    });

    //
  }

  getForgeEffects() {
    const forgeEffects = this.shadowRoot.querySelector('[name="forgeEffects"]');
    let string = "";
    let counter = 0;
    this.data.forgeEffects.forEach((slot) => {
      if (slot.IsForged()) {
        counter++;
        string += `<p class="orange">- ${slot.html}</p>`;
      }
    });

    for (let index = counter; index < 4; index++) {
      string += `<p class="orange">- [Forging Available]</p>`;
    }
    forgeEffects.innerHTML = string;
  }

  getOptionEffects() {
    let string = "";

    this.data.optionEffects.forEach((effect, index) => {
      if (effect.kind == EquipmentEffectKind.Nothing) {
        if (index < this.data.totalOptionNum.value) string += `<p>-[Enchant Available]</p>`;
      } else {
        const value = this.data.EffectValue(effect.effectValue, HeroKind.Warrior);
        string += `<p>${Localization.EquipmentEffectName(effect.kind)} - ${Util.convertTo(value, 2, effect.valueKind)}</p>`;
      }
    });
    this.shadowRoot.querySelector('[name="optionEffects"]').innerHTML = string;
  }

  getEffects() {
    const effects = globalThis.data.equipment.globalInformations[this.data.kind].effects;
    let string = "";

    effects.forEach((effect, index) => {
      const value = this.data.EffectValue(this.data.OriginalEffectValue(index), HeroKind.Warrior);
      let sign = ``;
      let negative = ``;
      if (value > 0) sign = `+`;

      string += `<p>${Localization.EquipmentEffectName(effect.kind)} `;

      if (value < 0) string += `<span class="red"></span>`;
      string += Util.convertTo(value, 2, effect.valueKind);
      if (value < 0) string += `</span>`;

      string += `</p>`;
    });
    this.shadowRoot.querySelector('[name="effects"]').innerHTML = string;
  }

  changeKind(this: equipmentInfo, event: Event & { target: EventTarget & HTMLSelectElement }) {
    // this.elements.kind.value;
    this.data.kind = parseInt(event.target.value);
    // console.log(event.target.value);
    if (this.data.kind != 0) (this.shadowRoot.querySelector(".tooltip-text") as HTMLDivElement).style.display = "block";
    if (this.data.kind == 0) (this.shadowRoot.querySelector(".tooltip-text") as HTMLDivElement).style.display = "none";
    this.render(true);
    // const clone = this.shadowRoot.querySelector(".tooltip-text").cloneNode(true);
    // document.getElementById("modal-content").innerHTML = this.shadowRoot.querySelector("tooltip-text").innerHTML;
    // document.getElementById("modal-content").appendChild(clone);
  }
}
