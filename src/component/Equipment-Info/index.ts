import { CopyKind } from "./../../type/CopyKind";
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
import { ComponentCustomDialog } from "../Dialog";
import { ComponentCustomClipboard } from "../Clipboard";

export class ComponentEquipmentInfo extends HTMLElement {
  data: Equipment;
  equipment: Equipment;
  tabIndex: number = 0;
  clipboard: string = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open", delegatesFocus: true });
    this.shadowRoot.innerHTML += `<style>@import "./styles-bundle.css";${style}</style>`;
    this.shadowRoot.innerHTML += template;

    // console.log(this.equipment);

    this.equipment = globalThis.data.inventory.equipmentSlots[parseInt(this.dataset.id)];
    this.renderIcon();

    // don't render unless required
    this.addEventListener(
      "mouseenter",
      () => {
        this.render();
      },
      { once: true }
    );

    this.onmouseover = (event) => {
      this.focus();
    };

    this.onmouseleave = (event) => {
      this.blur();
    };

    // COPY PASTE EVENT
    this.onkeydown = (event) => {
      const clipboard = document.querySelector("custom-clipboard") as ComponentCustomClipboard;
      if (event.ctrlKey && event.key == "v") {
        switch (clipboard.type) {
          case CopyKind.Equipment:
            this.equipment.Paste(CopyKind.Equipment, clipboard.data);
            break;
          case CopyKind.OptionEffect:
            this.equipment.Paste(CopyKind.OptionEffect, clipboard.data);
            break;
          case CopyKind.ForgeEffects:
            this.equipment.Paste(CopyKind.ForgeEffects, clipboard.data);
            break;
          default:
            break;
        }
        this.render();
        (document.querySelector("hero-stat") as ComponentHeroStat).render();
      } else if (event.ctrlKey && event.key == "c") {
        clipboard.type = CopyKind.Equipment;
        clipboard.data = this.equipment.Copy(CopyKind.Equipment);
      }
    };
    // this.render();
  }

  renderIcon() {
    const icon = this.shadowRoot.querySelector(".icon48") as HTMLImageElement;
    if (this.equipment.isDisabled()) icon.classList.add("disabled");
    if (this.equipment.kind == 0) {
      switch (this.equipment.slotPart) {
        case EquipmentPart.Weapon:
          icon.src = `./img/equip/EquipSlotWeapon.png`;
          break;
        case EquipmentPart.Armor:
          icon.src = `./img/equip/EquipSlotArmor.png`;
          break;
        case EquipmentPart.Jewelry:
          icon.src = `./img/equip/EquipSlotJewelry.png`;
          break;
        default:
          break;
      }
    } else {
      icon.src = `./img/equip/${EquipmentKind[this.equipment.kind]}.png`;
    }
  }
  render(edit: boolean = false) {
    this.renderIcon();
    const tooltip = this.shadowRoot.querySelector(`[slot="tooltip"]`) as HTMLDivElement;
    const dialog = this.shadowRoot.querySelector(`[slot="dialog"]`);
    tooltip.style.display = this.equipment.kind == 0 || this.equipment.isDisabled() ? "none" : "block";
    // if (edit == false && this.equipment.kind == 0) return;
    tooltip.innerHTML = "";
    if (this.equipment.isDisabled()) return;

    // (this.shadowRoot.querySelector(".icon96") as HTMLImageElement).src = `./img/equip/${EquipmentKind[this.equipment.kind]}.png`;

    tooltip.innerHTML += this.getIcon();
    tooltip.innerHTML += this.getInformation();
    tooltip.innerHTML += this.getEffects();
    tooltip.innerHTML += this.getOptionEffects();
    tooltip.innerHTML += this.getForgeEffects();
    tooltip.innerHTML += this.getProficiency();
    //
    dialog.innerHTML = "";
    dialog.innerHTML += this.getIcon(true);
    dialog.innerHTML += this.getInformation();
    dialog.innerHTML += this.getEffects();
    dialog.innerHTML += this.getOptionEffects(true);
    dialog.innerHTML += this.getForgeEffects(true);
    dialog.innerHTML += this.getProficiency();

    dialog.innerHTML += `<button onclick="this.getRootNode().host.copyEvent(${CopyKind.OptionEffect});" class="btn btn-gray">Copy All Enchantments</button>`;
    dialog.innerHTML += `<button onclick="this.getRootNode().host.copyEvent(${CopyKind.ForgeEffects});" class="btn btn-gray">Copy All Anvil Effects</button>`;
  }

  connectedCallback() {
    // console.log("connectedCallback()");
  }
  changeKind() {
    console.log("changeKind");
    globalThis.data.inventory.UpdateSetItemEquippedNumHero(this.equipment.heroKind);
    // this.equipment.Start();
    // const heroStat = document.querySelector("hero-stat") as ComponentHeroStat;
    // heroStat.render();

    this.render(true);
  }
  Update() {
    console.log("update");
    this.equipment.Start();
    this.render();
    (document.querySelector("hero-stat") as ComponentHeroStat).Update();
    console.log();
  }

  getIcon(edit: boolean = false) {
    let html = `<div class="head">
    <img class="icon96" src="./img/equip/${EquipmentKind[this.equipment.kind]}.png">`;
    if (edit) {
      html += `<custom-select data-type="${CustomSelectType[EquipmentPart[this.equipment.slotPart]]}" data-reload="false"
      data-endpoint="data.inventory.equipmentSlots[${this.equipment.slotId}].kind" data-id="${this.equipment.slotId}" data-render="${this.id}">${
        this.equipment.kind
      }</custom-select>`;
    } else {
      if (this.equipment.globalInfo.isArtifact) html += `<span class="purple">[Artifact] </span>`;
      html += Localization.EquipmentName(this.equipment.kind);
    }

    html += ` &lt; <span class="green">Lv ${this.equipment.level}</span> &gt; `;

    for (let index = 0; index < this.equipment.optionEffects.length; index++) {
      if (this.equipment.totalOptionNum.Value() <= index) break;
      html += `<span class="yellow">[${Localization.EquipmentEffectName(this.equipment.optionEffects[index].kind)}`;
      if (this.equipment.optionEffects[index].kind != 0) html += ` Lv ${this.equipment.optionEffects[index].level}`;
      html += `]</span> `;
    }

    html += `</div>`;
    return html;
  }

  getInformation() {
    let html = `<h5>Information</h5>`;
    const setAmount = globalThis.data.inventory.SetItemEquippedNum(this.equipment.setKind, this.equipment.heroKind);
    const setBonus = Util.convertTo(this.equipment.EffectMultiplierFromSetItem(this.equipment.heroKind) - 1, 2, "%");

    html += `<p>-Type : ${EquipmentPart[this.equipment.globalInfo.part]}</p>
    <p>-Rarity : ${EquipmentRarity[this.equipment.globalInfo.rarity]}</p>`;

    if (this.equipment.setKind != 0 && this.equipment.setKind != undefined) {
      html += `<p>-Unique : ${EquipmentSetKind[this.equipment.globalInfo.setKind]} Set
      <span class="green">[Effect Bonus ${setBonus}]</span> Equipping <span class="green">${setAmount}</span> / 8</p>`;
    }

    html += `<br>`;
    return html;
  }

  getProficiency() {
    let html = `<h5>Proficiency</h5>`;
    this.equipment.globalInfo.levelMaxEffects.forEach((effect, index) => {
      const value = this.equipment.EffectValue(effect.EffectValue(0), this.equipment.heroKind);

      // this.shadowRoot.querySelector(`[name="proficiency-level-${HeroKind[index]}"]`).innerHTML = `Lv ${this.equipment.globalInfo.levels[index].value}`;

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
      const effectName = Localization.EquipmentEffectName(this.equipment.globalInfo.levelMaxEffects[index].kind);

      const effectValue = this.equipment.globalInfo.levelMaxEffects[index].kind == 0 ? enchantSlot : Util.convertTo(value, 2, effect.valueKind);
      html += `<p>-${HeroKind[index]} &lt; <span class="green">Lv ${this.equipment.globalInfo.levels[index].value}</span> &gt;: <span
      class="green">[${effectName} + ${effectValue}]</span></p>`;
      // this.equipment.globalInfo.levelMaxEffects[index].kind == 0 ? value : Util.convertTo(value, 2, effect.valueKind);
      // this.shadowRoot.querySelector(`[name="proficiency-effect-${HeroKind[index]}"]`).innerHTML = ``;
    });
    //
    html += `<br>`;
    return html;
  }

  getForgeEffects(edit: boolean = false) {
    let counter = 0;
    let html = `<h5>Forged Effect</h5>`;

    // Localization.EquipmentEffect(this.data.globalInfo.levelMaxEffects[this.data.kind].kind, this.data.globalInfo.levelMaxEffects[this.data.kind].EffectValue(0), true);

    this.equipment.forgeEffects.forEach((slot, index) => {
      if (edit) {
        // const maxValue = this.equipment.ForgeEffectMaxValue(slot.kind, this.equipment.globalInfo.isArtifact);
        // const valueCurrent = slot.effectValue.toFixed(6);
        // const valueSlider = `<input type="range" step="0.000001" min="0" max="${maxValue}" value="${valueCurrent}" onchange="let e = event.target.getRootNode().host; e.equipment.forgeEffects[${index}].effectValue = this.value; e.Update()">`;

        const input = `<custom-input data-endpoint="data.inventory.equipmentSlots[${this.equipment.slotId}].forgeEffects[${index}].effectValue" data-reload="false" data-render="${this.id}" data-convert="true"></custom-input>`;
        html += `<p class="orange">${edit ? input : ""} - ${slot.EffectString()} </p>`;
        counter++;
      } else {
        if (slot.IsForged()) {
          counter++;
          html += `<p class="orange">- ${slot.EffectString()} </p>`;
        }
      }
    });

    for (let index = counter; index < 4; index++) html += `<p class="orange">- [Forging Available]</p>`;
    html += `<br>`;
    return html;
  }

  getOptionEffects(edit: boolean = false) {
    let html = ``;

    this.equipment.optionEffects.forEach((effect, index) => {
      const valueMin = this.equipment.optionEffects[index].MinEffectValue();
      const valueMinReal = Localization.EquipmentEffect(effect.kind, this.equipment.EffectValue(valueMin, this.equipment.heroKind), false, 0, true);
      const valueMax = this.equipment.optionEffects[index].MaxEffectValue();
      const valueMaxReal = Localization.EquipmentEffect(effect.kind, this.equipment.EffectValue(valueMax, this.equipment.heroKind), false, 0, true);
      if (index < this.equipment.totalOptionNum.Value()) {
        if (edit) {
          // const maxLevel = this.equipment.optionEffects[index].MaxLevel();
          const currentLevel = this.equipment.optionEffects[index].level;

          const valueCurrent = this.equipment.optionEffects[index].effectValue;
          const valueTotal = Localization.EquipmentEffect(effect.kind, this.equipment.EffectValue(effect.effectValue, this.equipment.heroKind), false, 0, true);
          const valueSlider = `<input type="range" step="0.000001" min="${valueMin.toFixed(6)}" max="${valueMax.toFixed(6)}" value="${valueCurrent.toFixed(
            6
          )}" onchange="let e = event.target.getRootNode().host; e.equipment.optionEffects[${index}].effectValue = this.value; e.Update()">`;
          // const slider = `<input type="range" min="1" max="${maxLevel}" value="${currentLevel}" class="slider" id="myRange">`;
          const kind = `<custom-select data-type="${CustomSelectType.EquipmentEffectKind}" data-endpoint="data.inventory.equipmentSlots[${this.equipment.slotId}].optionEffects[${index}].kind" data-reload="false" data-id="${this.equipment.slotId}">${effect.kind}</custom-select>`;
          const level = `<custom-select data-render="${this.id}" data-endpoint="data.inventory.equipmentSlots[${this.equipment.slotId}].optionEffects[${index}].level" data-reload="false" data-id="${this.equipment.slotId}" data-width="50px" data-type="${CustomSelectType.Number}" data-length="11">${currentLevel}</custom-select>`;
          const value = `<custom-input data-endpoint="data.inventory.equipmentSlots[${this.equipment.slotId}].optionEffects[${index}].effectValue" data-reload="false" data-id="${this.equipment.slotId}" data-type="equipment"></custom-input>`;

          if (this.equipment.optionEffects[index].kind == 0) {
            html += `<p>${kind}</p>`;
          } else {
            html += `<p>${kind} Lv ${level} ${valueSlider} = ${valueTotal}</p>`;
          }
        } else {
          html += `<p>${Localization.EquipmentEffect(effect.kind, this.equipment.EffectValue(effect.effectValue, this.equipment.heroKind))}`;

          if (effect.kind != 0) html += ` <span class="gray">(${valueMinReal} ~ ${valueMaxReal})</span>`;
          html += `</p>`;
        }
      }

      //   if (index < this.data.totalOptionNum.value) string += `<p>-[Enchant Available]</p>`;
      // } else {
      //   const value = this.data.EffectValue(effect.effectValue, HeroKind.Warrior);
      //   string += `<p>${Localization.EquipmentEffect(effect.kind, value)}</p>`;
      // }
    });

    html += `<br>`;
    return html;
  }

  getEffects() {
    let html = `<h5>Effect</h5>`;

    this.equipment.globalInfo.effects.forEach((effect, index) => {
      // console.log(this.data.OriginalEffectValue(index));
      const value = this.equipment.EffectValue(this.equipment.OriginalEffectValue(index), this.equipment.heroKind);
      const valuePerLevel = this.equipment.EffectValue(this.equipment.OriginalEffectIncrementPerLevel(index), this.equipment.heroKind);
      html += `<p>${Localization.EquipmentEffect(effect.kind, value, false, valuePerLevel, false)}</p>`;
    });

    return html;
  }

  copyEvent(type: CopyKind) {
    const clipboard = document.querySelector("custom-clipboard") as ComponentCustomClipboard;
    clipboard.type = type;
    switch (type) {
      case CopyKind.OptionEffect:
        clipboard.data = this.equipment.Copy(CopyKind.OptionEffect);
        break;
      case CopyKind.ForgeEffects:
        clipboard.data = this.equipment.Copy(CopyKind.ForgeEffects);
        break;
      default:
        break;
    }

    // console.log(clipboard.data);

    // console.log(this.equipment.CopyOptionEffect());
  }
}
