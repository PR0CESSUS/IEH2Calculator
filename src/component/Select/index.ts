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
import { ComponentEquipmentInfo } from "../Equipment-Info";
// import template from "./template.html";
import style from '!!css-loader?{"sourceMap":false,"exportType":"string"}!./style.css';
import { set, get } from "lodash";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { MonsterColor } from "../../type/MonsterColor";
import { ChallengeMonsterKind } from "../../type/ChallengeMonsterKind";

export class ComponentCustomSelect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML += `<style>${style}</style>`;
    // this.shadowRoot.innerHTML += template;

    const select = document.createElement("select");
    this.addOption(select);
    select.onchange = this.inputChange.bind(this);

    this.shadowRoot.append(select);
    // this.dataset.class

    // console.log(this.attributes, "constructor");
  }

  addOption(element: HTMLSelectElement) {
    if (this.dataset.type == undefined) element.innerHTML = `<option value="0">Nothing</option>`;
    for (let index = 0; index < this.length; index++) {
      const optionHtml = document.createElement("option");

      if (this.getText(index) == undefined || this.getText(index) == "") continue;

      optionHtml.selected = parseInt(this.innerHTML) == index;
      optionHtml.value = index.toString();
      optionHtml.text = this.getText(index);
      element.append(optionHtml);
    }
  }

  getText(index: number) {
    switch (parseInt(this.dataset.type)) {
      case CustomSelectType.HeroKind:
        return HeroKind[index];
      case CustomSelectType.SuperDungeon:
        return Localization.SDName(index);
      case CustomSelectType.Weapon:
        if (globalThis.data.equipment.globalInformations[index].part == EquipmentPart.Weapon || index == 0) return Localization.EquipmentName(index);
        break;
      case CustomSelectType.Armor:
        if (globalThis.data.equipment.globalInformations[index].part == EquipmentPart.Armor || index == 0) return Localization.EquipmentName(index);
        break;
      case CustomSelectType.Jewelry:
        if (globalThis.data.equipment.globalInformations[index].part == EquipmentPart.Jewelry || index == 0) return Localization.EquipmentName(index);
        break;
      case CustomSelectType.PotionKind:
        return Localization.PotionName(index);
      case CustomSelectType.EquipmentEffectKind:
        return Localization.EquipmentEffectName(index);
      case CustomSelectType.EquipmentForgeEffectKind:
        return Localization.ForgeNameString(index);
      case CustomSelectType.Number:
        return index.toString();
      case CustomSelectType.MonsterSpecies:
        return MonsterSpecies[index];
      case CustomSelectType.MonsterColor:
        return MonsterColor[index];
      case CustomSelectType.ChallengeMonsterKind:
        return ChallengeMonsterKind[index];
      default:
        break;
    }
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
      case CustomSelectType.Number:
        return parseInt(this.dataset.length);
      case CustomSelectType.MonsterSpecies:
        return Enums.MonsterSpecies;
      case CustomSelectType.MonsterColor:
        return Enums.MonsterColor;
      case CustomSelectType.ChallengeMonsterKind:
        return Enums.ChallengeMonsterKind;
      default:
        return 0;
    }
  }

  inputChange(event: Event & { target: HTMLInputElement }) {
    if (this.dataset.endpoint == undefined || this.dataset.endpoint == "") return;
    set(globalThis.app, this.dataset.endpoint, parseInt(event.target.value));

    if (this.dataset.render) {
      if (this.dataset.render.includes("equipment-loadout")) {
        const html = document.querySelector("equipment-loadout") as ComponentEquipmentLoadout;
        if (this.dataset.render.includes("#")) {
          const path = this.dataset.render.split("#");

          //@ts-ignore
          html.shadowRoot.querySelector("#" + path[1]).Update();
        }
        html.Update();
      }
    }

    if (this.dataset.reload != "false") globalThis.app.page.Load();
  }

  connectedCallback() {
    // console.log(this.attributes, "connectedCallback");
  }
}
