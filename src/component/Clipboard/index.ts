import template from "./template.html";
import css from '!!css-loader?{"sourceMap":false,"exportType":"string"}!./style.css';
import { CopyKind } from "../../type/CopyKind";
import { EquipmentKind } from "../../type/EquipmentKind";

type ParameterMap = {
  Equipment: { kind: EquipmentKind; forgeEffects: { kind: number; effectValue: number; level: number }[]; optionEffects: { kind: number; effectValue: number }[] };
  OptionEffect: { kind: number; effectValue: number; level: number };
  ForgeEffects: { kind: number; effectValue: number };
};
export class ComponentCustomClipboard extends HTMLElement {
  #data;
  #type: CopyKind;

  constructor() {
    super();
    // this.data = get(globalThis.app, this.dataset.endpoint, null);
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<style>${css}</style>`;
    this.shadowRoot.innerHTML += template;
    // const dialog = this.shadowRoot.querySelector("dialog") as HTMLDialogElement;
    // const button = this.shadowRoot.querySelector("button") as HTMLButtonElement;
    // const content = this.querySelector('[slot="dialog"]') as HTMLButtonElement;
    // const buttonContent = this.shadowRoot.querySelector('[name="button"]') as HTMLSlotElement;
    // console.log(this.dataset.render, document.getElementById(this.dataset.render));
    // buttonContent.innerHTML =
  }

  set type(kind: CopyKind) {
    this.#type = kind;
  }

  get type() {
    return this.#type;
  }

  set data(value) {
    this.#data = value;
    const div = this.shadowRoot.querySelector("div");
    div.style.display = "block";
    div.innerHTML = `${this.kindName()} Copied`;
  }

  get data() {
    // console.log(this.#data);

    return this.#data;
  }

  kindName() {
    switch (this.type) {
      case CopyKind.Equipment:
        return "Equipment";
      case CopyKind.OptionEffect:
        return "Enchantment";
      case CopyKind.ForgeEffects:
        return "Forged Effects";
      default:
        return "";
    }
  }

  connectedCallback() {}
}
