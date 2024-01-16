import template from "./template.html";
import css from '!!css-loader?{"sourceMap":false,"exportType":"string"}!./style.css';
import { ComponentCustomDialog } from "../Dialog";

// import { set, get } from "lodash";

// document.body.innerHTML += template;

export class ComponentCustomTooltip extends HTMLElement {
  constructor() {
    super();
    // this.data = get(globalThis.app, this.dataset.endpoint, null);
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<style>${css}</style>`;
    this.shadowRoot.innerHTML += template;
    const content = this.shadowRoot.querySelector('[name="content"]') as HTMLSlotElement;
    const tooltip = this.shadowRoot.querySelector(".tooltip") as HTMLDivElement;
    // content.onmouseout = (event) => {
    //   console.log(event);
    // };
    // content.onmousemove
    const dialog = this.querySelector("custom-dialog") as ComponentCustomDialog;
    // console.log();

    content.onmouseenter = (event) => {
      // console.dir(event.composedPath()[1]);
      // console.log(this.querySelector('[slot="tooltip"]').innerHTML);
      // console.log((this.querySelector('[slot="tooltip"]') as HTMLDivElement).style.display);
    };
    content.onmousemove = (event) => {
      // dialog component handle
      if (dialog != null && dialog.open) return;
      // console.log(tooltip.innerHTML);
      if ((this.querySelector('[slot="tooltip"]') as HTMLDivElement).style.display == "none") {
        tooltip.style.display = "none";
        return;
      } else {
        tooltip.style.display = "block";
      }

      const rect = tooltip.getBoundingClientRect();
      const ySpaceAvailable = window.innerHeight - 20 - event.clientY;

      tooltip.style.left = `${event.clientX + 20}px`;
      // if (rect.height > window.innerHeight - 20 - event.clientY) {
      //   tooltip.style.top = `${event.clientY - (rect.height - event.clientY)}px`;
      // } else {
      //   tooltip.style.top = `${event.clientY}px`;
      // }
      if (rect.height > ySpaceAvailable) {
        tooltip.style.top = `${event.clientY - (rect.height - ySpaceAvailable)}px`;
      } else {
        tooltip.style.top = `${event.clientY}px`;
      }
      // console.log("clientY", event.clientY, "rect.height", rect.height, "space aviable", ySpaceAvailable, window.innerHeight);
    };
    content.onmouseleave = (event) => {
      // console.log(event);
      tooltip.style.display = "none";
    };
    content.onclick = (event) => {
      // console.log(event);
      tooltip.style.display = "none";
      // console.log("tooltip click");
    };
    // const button = this.shadowRoot.querySelector("button") as HTMLButtonElement;

    const str = `a`;

    // button.innerHTML = `${this.innerHTML}`;
    // dialog.innerHTML = `<div style="padding: 10px;">${str}</div>`;
    // dialog.style.padding = "0";

    // this.shadowRoot.appendChild(dialog);
    // dialog.showModal();

    // dialog.onclick = (event) => {
    //   //   console.log(event.target.nodeName, this);
    //   //@ts-ignore
    //   if (event.target.nodeName == dialog.nodeName) dialog.close();
    // };
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
