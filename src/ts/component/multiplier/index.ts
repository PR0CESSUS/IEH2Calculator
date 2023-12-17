import { set, get, startCase } from "lodash";
import template from "./template.html";
import { HeroStats } from "../../data/Stats/HeroStats";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { Util } from "../../Util";
import { Element } from "../../type/Element";
import { Stats } from "../../type/Stats";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { HeroKind } from "../../type/HeroKind";
import { HeroSuperStats } from "../../data/SuperStats/HeroSuperStats";
import { SuperDungeonController } from "../../data/SuperDungeon/SuperDungeonController";
import { Multiplier } from "../../Multiplier";
import { Localization } from "../../localization";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Enums } from "../../Enums";

export const Multiplier_Info_Template = template;
export class Multiplier_Info extends HTMLElement {
  #data: Multiplier;
  #snapshot;
  constructor() {
    super();

    this.attachShadow({ mode: "open" }).appendChild(
      (document.getElementById("multiplier-info") as HTMLTemplateElement).content.cloneNode(true)
    );

    this.shadowRoot.querySelector('[name="name"]').innerHTML = this.innerHTML;
    this.shadowRoot.querySelector('[name="name-tooltip"]').innerHTML = this.innerHTML;
    // console.log(this.dataSD);

    // this.render();
  }

  set snapshot(value) {
    this.#snapshot = value;
  }

  get snapshot() {
    return this.#snapshot;
  }

  set data(value: Multiplier) {
    this.#data = value;
    // value.Calculate();
    this.render();
  }

  get data() {
    return this.#data;
  }

  compare(current, snapshot = 0, type = "%") {
    if (current == 0 || snapshot == 0) return Util.convertTo(current, 2, type);
    if (this.snapshot) {
      if (snapshot > current) {
        if (current == 0) current = 1;
        const diff = Util.convertTo(snapshot / current - 1, 2, type);
        return `<span class="red">(-${diff}) ${Util.convertTo(current, 2, type)}</span>`;
      }

      if (snapshot < current) {
        if (snapshot == 0) snapshot = 1;
        const diff = Util.convertTo(current / snapshot - 1, 2, "%");
        return `<span class="green">(+${diff}) ${Util.convertTo(current, 2, type)}</span>`;
      }
    }
    // console.log(current);
    // let value = this.data.additive;
    // let snapshotValue = this.snapshot.additive;
    return Util.convertTo(current, 2, type);
  }

  renderTooltip() {
    this.shadowRoot.querySelector('[name="additive-total"]').innerHTML = this.compare(
      this.data.additive,
      this.snapshot?.additive,
      this.dataset.type ? this.dataset.type : "%"
    );
    this.shadowRoot.querySelector('[name="multiplicative-total"]').innerHTML = this.compare(
      this.data.multiplicative,
      this.snapshot?.multiplicative
    );
    this.shadowRoot.querySelector('[name="temporary-total"]').innerHTML = this.compare(
      this.data.temp,
      this.snapshot?.temp,
      this.dataset.type ? this.dataset.type : "%"
    );
    this.shadowRoot.querySelector('[name="temporary-total-log"]').innerHTML = this.compare(
      this.data.log,
      this.snapshot?.log,
      this.dataset.type ? this.dataset.type : "%"
    );
    ///
    this.shadowRoot.querySelector('[name="value-total"]').innerHTML =
      this.dataset.superdungeon == "true"
        ? this.compare(this.data.After(), this.snapshot?.After, this.dataset.type ? this.dataset.type : "%")
        : this.compare(this.data.Value(), this.snapshot?.Value, this.dataset.type ? this.dataset.type : "%");

    ///
    this.shadowRoot.querySelector('[name="after-total"]').innerHTML = this.compare(
      this.data.after,
      this.snapshot?.after,
      this.dataset.type ? this.dataset.type : "%"
    );

    const afterValue = this.data.after > 0 || this.snapshot?.after > 0;
    if (!afterValue) (this.shadowRoot.querySelector('[name="after"]') as HTMLDivElement).style.display = "none";

    if (this.dataset.superdungeon == "true") {
      (this.shadowRoot.querySelector('[name="superdungeon"]') as HTMLDivElement).style.display = "block";
    }

    ////
    const additiveList = this.shadowRoot.querySelector('[name="additive-list"]');
    const multiplicativeList = this.shadowRoot.querySelector('[name="multiplicative-list"]');
    const afterList = this.shadowRoot.querySelector('[name="after-list"]');
    for (let index = 0; index < Enums.MultiplierKind; index++) {
      const name = Localization.StatsBreakdown(index);
      const valueAdditive = this.data.additiveKind[MultiplierKind[index]] ? this.data.additiveKind[MultiplierKind[index]] : 0;
      const valueMultiplicative = this.data.multiplicativeKind[MultiplierKind[index]]
        ? this.data.multiplicativeKind[MultiplierKind[index]]
        : 0;
      const valueAfter = this.data.afterKind[MultiplierKind[index]] ? this.data.afterKind[MultiplierKind[index]] : 0;
      if (valueAdditive || MultiplierKind.Base == index) {
        const value = this.compare(
          valueAdditive,
          this.snapshot?.additiveKind[MultiplierKind[index]],
          this.dataset.type ? this.dataset.type : "%"
        );
        additiveList.innerHTML += `<p>-${name}<span style="float:right;">${value}</span></p>`;
      } else if (this.snapshot?.additiveKind[MultiplierKind[index]]) {
        const value = this.compare(
          valueAdditive,
          this.snapshot?.additiveKind[MultiplierKind[index]],
          this.dataset.type ? this.dataset.type : "%"
        );
        additiveList.innerHTML += `<p>-${name}<span style="float:right;">${value}</span></p>`;
      }
      // multipliers
      if (valueMultiplicative) {
        const value = this.compare(valueMultiplicative, this.snapshot?.multiplicativeKind[MultiplierKind[index]]);
        multiplicativeList.innerHTML += `<p>-${name}<span style="float:right;">${value}</span></p>`;
      } else if (this.snapshot?.multiplicativeKind[MultiplierKind[index]]) {
        const value = this.compare(valueMultiplicative, this.snapshot?.multiplicativeKind[MultiplierKind[index]]);
        multiplicativeList.innerHTML += `<p>-${name}<span style="float:right;">${value}</span></p>`;
      }

      if (valueAfter) {
        const value = this.compare(
          valueAfter,
          this.snapshot?.afterKind[MultiplierKind[index]],
          this.dataset.type ? this.dataset.type : "%"
        );
        afterList.innerHTML += `<p>-${name}<span style="float:right;">${value}</span></p>`;
      } else if (this.snapshot?.afterKind[MultiplierKind[index]]) {
        const value = this.compare(
          valueAfter,
          this.snapshot?.afterKind[MultiplierKind[index]],
          this.dataset.type ? this.dataset.type : "%"
        );
        afterList.innerHTML += `<p>-${name}<span style="float:right;">${value}</span></p>`;
      }
    }

    // for (const [key, valueRaw] of Object.entries(this.data.multiplicativeKind)) {
    //   const name = Localization.StatsBreakdown(MultiplierKind[key]);
    //   const value = Util.convertTo(valueRaw, 2, "%");
    //   multiplicativeList.innerHTML += `<p>-${name}<span style="float:right;">${value}</span></p>`;
    // }
  }

  render(edit: boolean = false) {
    if (this.data != null) {
      // console.log(this.shadowRoot.querySelector('[name="value"]').innerHTML);
      this.shadowRoot.querySelector('[name="value"]').innerHTML =
        this.dataset.superdungeon == "true"
          ? this.compare(this.data.After(), this.snapshot?.After, this.dataset.type ? this.dataset.type : "%")
          : this.compare(this.data.Value(), this.snapshot?.Value, this.dataset.type ? this.dataset.type : "%");
      this.renderTooltip();
    }
    // const main = this.shadowRoot.querySelector('[name="main"]');
    // const attack = this.shadowRoot.querySelector('[name="attack"]');
    // const stats = this.shadowRoot.querySelector('[name="stats"]');
    // const knowledge = this.shadowRoot.querySelector('[name="knowledge"]');
    // const bestiary = this.shadowRoot.querySelector('[name="bestiary"]');
  }

  connectedCallback() {
    // console.log("connectedCallback()");
    // this.render();
  }
}
