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
import { EquipmentParameter } from "../../data/Equipment/EquipmentParameter";
import { CustomSelectType } from "../../type/CustomSelectType";
import { ComponentHeroStat } from "../HeroStat";

document.body.innerHTML += template;

export class ComponentEquipmentInfo extends HTMLElement {
  data: Equipment;
  equipment: Equipment;
  potion: EquipmentPotion;
  slotType: "Weapon" | "Armor" | "Jewelry" | "Potion" | string;

  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild((document.getElementById("equipment-info") as HTMLTemplateElement).content.cloneNode(true));
    // this.data = get(globalThis.app, this.dataset.endpoint, 0);

    // console.log(this.equipment);
    this.slotType = this.dataset.slot;
    if (this.dataset.slot == "Potion") {
      this.potion = globalThis.data.inventory.potionSlots[parseInt(this.dataset.id)];

      const path = this.potion.kind == 0 ? "EquipSlotPotion" : PotionKind[this.potion.kind];
      this.shadowRoot.querySelectorAll('[data-type="equipment"]').forEach((element: HTMLDivElement) => {
        element.style.display = "none";
      });
      (this.shadowRoot.querySelector(".icon48") as HTMLImageElement).src = `./img/equip/${path}.png`;
      (this.shadowRoot.querySelector('[name="effect"]') as HTMLDivElement).style.display = "none";
      (this.shadowRoot.querySelector('[name="proficiency"]') as HTMLDivElement).style.display = "none";
      const equippedEffect = this.shadowRoot.querySelector('[name="equippedEffect"]') as HTMLDivElement;
      const stack = this.shadowRoot.querySelector('[name="stack"]') as HTMLDivElement;
      const type = this.shadowRoot.querySelector('[name="type"]') as HTMLDivElement;
      stack.innerHTML = this.potion.stack.toString();
      type.innerHTML = this.potion.type;
    } else {
      this.equipment = globalThis.data.inventory.equipmentSlots[parseInt(this.dataset.id)];
      this.shadowRoot.querySelectorAll('[data-type="potion"]').forEach((element: HTMLDivElement) => {
        element.style.display = "none";
      });
      if (this.equipment.kind == 0) {
        switch (this.slotType) {
          case "Weapon":
            (this.shadowRoot.querySelector(".icon48") as HTMLImageElement).src = `./img/equip/EquipSlotWeapon.png`;
            break;
          case "Armor":
            (this.shadowRoot.querySelector(".icon48") as HTMLImageElement).src = `./img/equip/EquipSlotArmor.png`;
            break;
          case "Jewelry":
            (this.shadowRoot.querySelector(".icon48") as HTMLImageElement).src = `./img/equip/EquipSlotJewelry.png`;
            break;
          default:
            break;
        }
      } else {
        (this.shadowRoot.querySelector(".icon48") as HTMLImageElement).src = `./img/equip/${EquipmentKind[this.equipment.kind]}.png`;
      }
    }

    if (this.dataset.disabled) (this.shadowRoot.querySelector(".icon48") as HTMLImageElement).classList.add("disabled");
    this.shadowRoot.querySelector(".icon48").addEventListener("click", this.openEdit.bind(this));
    this.shadowRoot.querySelector(".icon48").addEventListener("mouseover", this.initialRender.bind(this), { once: true });
    this.shadowRoot.querySelector('[name="kind"]').addEventListener("change", this.changeKind.bind(this));
    const modal = this.shadowRoot.querySelector("#equipment-dialog") as HTMLDialogElement;
    const closeEdit = this.closeEdit.bind(this);
    modal.addEventListener("click", function (event) {
      let rect = modal.getBoundingClientRect();
      let isInDialog = rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        modal.close();
        closeEdit();
        // console.log("background click cancel");
      }
    });
    // const kind = this.shadowRoot.querySelector('[name="kind"]') as HTMLSelectElement;

    // kind.innerHTML += Util.render.Select(this.slotType);
    // kind.querySelectorAll("option").forEach((option) => {
    //   if (parseInt(option.value) == this.data.kind) option.selected = true;
    // });

    if (this.equipment?.kind == 0 || this.potion?.kind == 0) (this.shadowRoot.querySelector(".tooltip-text") as HTMLDivElement).style.display = "none";

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
    this.shadowRoot.querySelector(".tooltip-text").appendChild(this.shadowRoot.querySelector(".content"));
    this.render();
    (document.querySelector("hero-stat") as ComponentHeroStat).render();
  }

  render(edit: boolean = false) {
    if (edit == false && this.equipment?.kind == 0) return;
    const kind = this.shadowRoot.querySelector('[name="kind"]') as HTMLSelectElement;
    const level = this.shadowRoot.querySelector('[name="level"]');
    const effect = this.shadowRoot.querySelector('[name="effect"]') as HTMLDivElement;
    const isSetKind = this.shadowRoot.querySelector('[name="isSetKind"]') as HTMLParagraphElement;

    if (this.slotType == "Potion") {
      (this.shadowRoot.querySelector(".icon48") as HTMLImageElement).src = `./img/equip/${PotionKind[this.potion.kind]}.png`;
      (this.shadowRoot.querySelector(".icon96") as HTMLImageElement).src = `./img/equip/${PotionKind[this.potion.kind]}.png`;
      kind.innerHTML = Localization.PotionName(this.potion.kind);
      level.innerHTML = `Lv ${this.potion.level}`;
    } else {
      (this.shadowRoot.querySelector(".icon48") as HTMLImageElement).src = `./img/equip/${EquipmentKind[this.equipment.kind]}.png`;
      (this.shadowRoot.querySelector(".icon96") as HTMLImageElement).src = `./img/equip/${EquipmentKind[this.equipment.kind]}.png`;
      if (this.equipment.setKind == undefined || this.equipment.setKind == 0) {
        isSetKind.style.display = "none";
      } else {
        isSetKind.style.display = "block";
      }
      level.innerHTML = `Lv ${this.equipment.level}`;
      if (edit) {
        kind.innerHTML = `<custom-select data-type="${CustomSelectType[this.dataset.slot]}" data-reload="false"
        data-endpoint="data.inventory.equipmentSlots[${this.equipment.slotId}].kind" data-id="${this.equipment.slotId}">${this.equipment.kind}</custom-select>`;
      } else {
        kind.innerHTML = (this.equipment.globalInfo.isArtifact ? '<span class="purple">[Artifact] </span>' : "") + Localization.EquipmentName(this.equipment.kind);
      }

      this.shadowRoot.querySelector('[name="part"]').innerHTML = EquipmentPart[this.equipment.globalInfo.part];
      this.shadowRoot.querySelector('[name="rarity"]').innerHTML = EquipmentRarity[this.equipment.globalInfo.rarity];
      if (this.equipment.setKind != 0 && this.equipment.setKind != undefined) {
        this.shadowRoot.querySelector('[name="setKind"]').innerHTML = `${EquipmentSetKind[this.equipment.globalInfo.setKind]} Set`;
        this.shadowRoot.querySelector('[name="setBonus"]').innerHTML = `[Effect Bonus ${Util.convertTo(
          this.equipment.EffectMultiplierFromSetItem(this.equipment.heroKind) - 1,
          2,
          "%"
        )}]`;
        // const effects = globalThis.data.equipment.globalInformations[this.data.kind].effects;
        this.shadowRoot.querySelector('[name="setAmount"]').innerHTML = `${globalThis.data.inventory.SetItemEquippedNum(this.equipment.setKind, this.equipment.heroKind)}`;
      }
      this.getEffects();
      this.getOptionEffects(edit);
      this.getForgeEffects(edit);
      this.getProficiency();
    }
  }

  connectedCallback() {
    // console.log("connectedCallback()");
    // this.render();
  }

  getProficiency() {
    this.equipment.globalInfo.levelMaxEffects.forEach((effect, index) => {
      const value = this.equipment.EffectValue(effect.EffectValue(0), HeroKind.Warrior);
      // console.log(`[name="proficiency-effect-${HeroKind[index]}"]`);
      this.shadowRoot.querySelector(`[name="proficiency-level-${HeroKind[index]}"]`).innerHTML = `Lv ${this.equipment.globalInfo.levels[index].value}`;

      let enchantSlot = 0;
      switch (this.equipment.globalInfo.rarity) {
        case EquipmentRarity.Epic:
          enchantSlot = 3;
          break;
        case EquipmentRarity.Rare:
        case EquipmentRarity.SuperRare:
          enchantSlot = 2;
          break;
        default:
          enchantSlot = 1;
          break;
      }

      this.equipment.globalInfo.levelMaxEffects[index].kind == 0 ? value : Util.convertTo(value, 2, effect.valueKind);
      this.shadowRoot.querySelector(`[name="proficiency-effect-${HeroKind[index]}"]`).innerHTML = `[${Localization.EquipmentEffectName(
        this.equipment.globalInfo.levelMaxEffects[index].kind
      )} + ${this.equipment.globalInfo.levelMaxEffects[index].kind == 0 ? enchantSlot : Util.convertTo(value, 2, effect.valueKind)}] 
        `;
    });

    //
  }

  getForgeEffects(edit: boolean = false) {
    const forgeEffects = this.shadowRoot.querySelector('[name="forgeEffects"]');
    let string = "";
    let counter = 0;

    // Localization.EquipmentEffect(this.data.globalInfo.levelMaxEffects[this.data.kind].kind, this.data.globalInfo.levelMaxEffects[this.data.kind].EffectValue(0), true);

    this.equipment.forgeEffects.forEach((slot, index) => {
      if (edit) {
        // Localization.ForgeNameString(slot.kind, this.equipment.globalInfo.isArtifact)
        const input = `<user-input data-endpoint="data.inventory.equipmentSlots[${this.equipment.slotId}].forgeEffects[${index}].effectValue" data-reload="false" data-id="${this.equipment.slotId}"></user-input>`;
        string += `<p class="orange">${edit ? input : ""} - ${slot.EffectString()}</p>`;
        counter++;
      } else {
        if (slot.IsForged()) {
          counter++;
          string += `<p class="orange">- ${slot.EffectString()} </p>`;
        }
      }
    });

    for (let index = counter; index < 4; index++) {
      string += `<p class="orange">- [Forging Available]</p>`;
    }
    forgeEffects.innerHTML = string;
  }

  getOptionEffects(edit: boolean = false) {
    let string = "";

    this.equipment.optionEffects.forEach((effect, index) => {
      if (index < this.equipment.totalOptionNum.value) {
        if (edit) {
          const kind = `<custom-select data-type="${CustomSelectType.EquipmentEffectKind}" data-endpoint="data.inventory.equipmentSlots[${this.equipment.slotId}].optionEffects[${index}].kind" data-reload="false" data-id="${this.equipment.slotId}">${effect.kind}</custom-select>`;
          const level = `<user-input data-endpoint="data.inventory.equipmentSlots[${this.equipment.slotId}].optionEffects[${index}].level" data-reload="false" data-id="${this.equipment.slotId}" data-width="50px"></user-input>`;
          const value = `<user-input data-endpoint="data.inventory.equipmentSlots[${this.equipment.slotId}].optionEffects[${index}].effectValue" data-reload="false" data-id="${this.equipment.slotId}"></user-input>`;
          string += `<p>${kind} ${level} ${value} = ${Localization.EquipmentEffect(
            effect.kind,
            this.equipment.EffectValue(effect.effectValue, HeroKind.Warrior),
            true,
            0,
            true
          )}</p>`;
        } else {
          string += `<p>${Localization.EquipmentEffect(effect.kind, this.equipment.EffectValue(effect.effectValue, HeroKind.Warrior))}</p>`;
        }
      }
      // if (effect.kind == EquipmentEffectKind.Nothing) {
      //   if (index < this.data.totalOptionNum.value) string += `<p>-[Enchant Available]</p>`;
      // } else {
      //   const value = this.data.EffectValue(effect.effectValue, HeroKind.Warrior);
      //   string += `<p>${Localization.EquipmentEffect(effect.kind, value)}</p>`;
      // }
    });
    this.shadowRoot.querySelector('[name="optionEffects"]').innerHTML = string;
  }

  getEffects() {
    let string = "";

    this.equipment.globalInfo.effects.forEach((effect, index) => {
      // console.log(this.data.OriginalEffectValue(index));
      const value = this.equipment.EffectValue(this.equipment.OriginalEffectValue(index), HeroKind.Angel);
      const valuePerLevel = this.equipment.EffectValue(this.equipment.OriginalEffectIncrementPerLevel(index), HeroKind.Angel);

      let sign = ``;
      let negative = ``;
      //
      // if (value > 0) sign = `+`;

      string += `<p>${Localization.EquipmentEffect(effect.kind, value, false, valuePerLevel, false)} `;
      // string += `<p>${Localization.EquipmentEffectName(effect.kind)} `;

      // if (value < 0) string += `<span class="red"></span>`;
      // string += Util.convertTo(value, 2, effect.valueKind);
      // if (value < 0) string += `</span>`;

      string += `</p>`;
    });
    this.shadowRoot.querySelector('[name="effects"]').innerHTML = string;
  }

  changeKind() {
    // this.elements.kind.value;
    // console.log("changeKind");
    globalThis.data.inventory.UpdateSetItemEquippedNumHero(this.equipment.heroKind);
    this.equipment.Start();
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
}
