import { set, get, startCase } from "lodash";
import template from "./template.html";
import style from '!!css-loader?{"sourceMap":false,"exportType":"string"}!./style.css';
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
import { NumberType } from "../../type/NumberType";

export class ComponentMultiplierInfo extends HTMLElement {
  data: Multiplier;
  snapshot;
  isLog: boolean = false;
  type: NumberType = NumberType.Percent;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML += `<style>@import "./styles-bundle.css";${style}</style>`;
    this.shadowRoot.innerHTML += template;

    this.shadowRoot.querySelector('[name="name"]').innerHTML = this.innerHTML;
    this.shadowRoot.querySelector('[name="name-tooltip"]').innerHTML = this.innerHTML;

    if (this.dataset.endpoint) {
      this.snapshot = globalThis.app.database.Get("hero-stat").snapshot[this.dataset.endpoint];
      this.data = get(globalThis.data, this.dataset.endpoint, null);

      if (this.data.isLog) this.style.color = "yellow";

      if (this.dataset.type) this.type = parseInt(this.dataset.type);

      this.data.numberType = this.type;

      // console.log("endpoint ", this.dataset.endpoint, this.data);
      this.render();
    }
    // this.data
    // console.log(this.dataSD);

    // this.render();
  }

  compare(current, snapshot = 0, type: NumberType = NumberType.Percent) {
    if (current == 0 || snapshot == 0) return Util.convertTo(current, 2, type);
    if (this.snapshot) {
      if (snapshot > current) {
        if (current == 0) current = 1;
        if (snapshot / current - 1 < 0.0001) return Util.convertTo(current, 2, type);
        const diff = Util.percent(snapshot / current - 1, 2);
        return `<span class="red">(-${diff}) ${Util.convertTo(current, 2, type)}</span>`;
      }

      if (snapshot < current) {
        if (snapshot == 0) snapshot = 1;
        const diff = Util.percent(current / snapshot - 1, 2);
        if (current / snapshot - 1 < 0.0001) return Util.convertTo(current, 2, type);
        return `<span class="green">(+${diff}) ${Util.convertTo(current, 2, type)}</span>`;
      }
    }
    // console.log(current);
    // let value = this.data.additive;
    // let snapshotValue = this.snapshot.additive;
    return Util.convertTo(current, 2, type);
  }

  renderTooltip() {
    this.shadowRoot.querySelector('[name="additive-total"]').innerHTML = this.compare(this.data.additive, this.snapshot?.additive, this.type);
    this.shadowRoot.querySelector('[name="multiplicative-total"]').innerHTML = this.compare(this.data.multiplicative, this.snapshot?.multiplicative, NumberType.Percent);
    this.shadowRoot.querySelector('[name="temporary-total"]').innerHTML = this.compare(this.data.temp, this.snapshot?.temp, this.type);
    this.shadowRoot.querySelector('[name="temporary-total-log"]').innerHTML = this.compare(this.data.log, this.snapshot?.log, this.type);
    ///
    this.shadowRoot.querySelector('[name="value-total"]').innerHTML = this.compare(this.data.Value(), this.snapshot?.Value, this.type);

    ///
    this.shadowRoot.querySelector('[name="after-total"]').innerHTML = this.compare(this.data.after, this.snapshot?.after, this.type);

    const afterValue = this.data.after > 0 || this.snapshot?.after > 0;
    if (!afterValue) (this.shadowRoot.querySelector('[name="after"]') as HTMLDivElement).style.display = "none";

    if (this.data.isLog) {
      (this.shadowRoot.querySelector('[name="superdungeon"]') as HTMLDivElement).style.display = "block";
    }

    ////
    const additiveList = this.shadowRoot.querySelector('[name="additive-list"]');
    const multiplicativeList = this.shadowRoot.querySelector('[name="multiplicative-list"]');
    const afterList = this.shadowRoot.querySelector('[name="after-list"]');
    additiveList.innerHTML = "";
    multiplicativeList.innerHTML = "";
    afterList.innerHTML = "";
    for (let index = 0; index < Enums.MultiplierKind; index++) {
      const name = Localization.StatsBreakdown(index);
      const valueAdditive = this.data.additiveKind[MultiplierKind[index]] ? this.data.additiveKind[MultiplierKind[index]] : 0;
      const valueMultiplicative = this.data.multiplicativeKind[MultiplierKind[index]] ? this.data.multiplicativeKind[MultiplierKind[index]] : 0;
      const valueAfter = this.data.afterKind[MultiplierKind[index]] ? this.data.afterKind[MultiplierKind[index]] : 0;
      if (valueAdditive || MultiplierKind.Base == index) {
        const value = this.compare(valueAdditive, this.snapshot?.additiveKind[MultiplierKind[index]], this.type);
        additiveList.innerHTML += `<p ${valueAdditive < 0 ? 'class="yellow"' : ""}>-${name}<span style="float:right;">${value}</span></p>`;
      } else if (this.snapshot?.additiveKind[MultiplierKind[index]]) {
        const value = this.compare(valueAdditive, this.snapshot?.additiveKind[MultiplierKind[index]], this.type);
        additiveList.innerHTML += `<p ${valueAdditive < 0 ? 'class="yellow"' : ""}>-${name}<span style="float:right;">${value}</span></p>`;
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
        const value = this.compare(valueAfter, this.snapshot?.afterKind[MultiplierKind[index]], this.type);
        afterList.innerHTML += `<p>-${name}<span style="float:right;">${value}</span></p>`;
      } else if (this.snapshot?.afterKind[MultiplierKind[index]]) {
        const value = this.compare(valueAfter, this.snapshot?.afterKind[MultiplierKind[index]], this.type);
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
      const valueHTML = this.shadowRoot.querySelector('[name="value"]');
      const nameHTML = this.shadowRoot.querySelector('[name="name"]');
      // console.log(this.shadowRoot.querySelector('[name="value"]').innerHTML);
      valueHTML.innerHTML = this.compare(this.data.Value(), this.snapshot?.Value, this.type);
      this.renderTooltip();
      if (nameHTML.innerHTML == "HP Regeneration") valueHTML.innerHTML += " / sec";
      if (nameHTML.innerHTML == "MP Regeneration") valueHTML.innerHTML += " / sec";
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
