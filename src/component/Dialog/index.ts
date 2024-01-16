import template from "./template.html";
import css from '!!css-loader?{"sourceMap":false,"exportType":"string"}!./style.css';

// import { set, get } from "lodash";

// document.body.innerHTML += template;

export class ComponentCustomDialog extends HTMLElement {
  constructor() {
    super();
    // this.data = get(globalThis.app, this.dataset.endpoint, null);
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<style>${css}</style>`;
    this.shadowRoot.innerHTML += template;
    const dialog = this.shadowRoot.querySelector("dialog") as HTMLDialogElement;
    const button = this.shadowRoot.querySelector("button") as HTMLButtonElement;
    const content = this.querySelector('[slot="dialog"]') as HTMLButtonElement;
    // const buttonContent = this.shadowRoot.querySelector('[name="button"]') as HTMLSlotElement;
    // console.log(this.dataset.render, document.getElementById(this.dataset.render));

    // buttonContent.innerHTML =

    button.onclick = (event) => {
      if (content.innerHTML != "") {
        dialog.showModal();
        // const rect = dialog.getBoundingClientRect();
        // if (rect.height > 800) {
        //   dialog.style.fontSize = "8px";
        // }
      }

      // console.log("dialog button click");
      // event.stopPropagation();
    };
    // dialog.onclick = (event) => {
    //   console.log(event);
    //   //@ts-ignore
    //   if (event.target.nodeName == dialog.nodeName) dialog.close();
    // };

    dialog.onmousedown = (event) => {
      // console.log(event);
      //@ts-ignore
      if (event.target.nodeName == dialog.nodeName) dialog.close();
    };
    // const input = document.createElement("input");
    // input.type = "text";
    // input.value = "value";
    // this.shadowRoot.appendChild(input);
    // console.log(this.dataset.endpoint);

    // this.shadowRoot.innerHTML = "asd";
    // this.shadowRoot.querySelector("input").value = this.data;
    // this.shadowRoot.querySelector("input").onchange = this.inputChange.bind(this);
    // this.shadowRoot.querySelector(".icon48").addEventListener("click", this.openEdit.bind(this));
    // this.shadowRoot.querySelector('[name="kind"]').addEventListener("change", this.changeKind.bind(this));

    // this.render();

    //   <div id="modal">
    //   <div class="modal-underlay" onclick="window.app.router.load()"></div>
    //   <div id="modal-content" class="modal-content"></div>
    // </div>
  }

  get open() {
    return (this.shadowRoot.querySelector("dialog") as HTMLDialogElement).open;
  }
  // inputChange(event: Event & { target: HTMLInputElement }) {
  //   // console.log(, this);
  //   set(globalThis.app, this.dataset.endpoint, event.target.value);
  //   globalThis.app.Save();
  //   // globalThis.data.expedition.rewardModifierPerHour.isDirty = true;
  //   // globalThis.data.expedition.rewardModifierPerHour.isDirty = true;
  //   globalThis.app.router.load();
  //   // this.data = event.target.value;
  //   // console.log(globalThis.data.source.sdGemLevels[8]);
  // }

  connectedCallback() {
    // console.log("s");
    // console.log("connectedCallback()");
    // this.render();
  }
}
