import { set, get, startCase } from "lodash";
import template from "./template.html";
import { HeroStats } from "../../data/Stats/HeroStats";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { Util } from "../../Util";
import { Element } from "../../type/Element";
import { Stats } from "../../type/Stats";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { HeroKind } from "../../type/HeroKind";

document.body.innerHTML += template;
export default class heroStat extends HTMLElement {
  data: HeroStats;
  hero: HeroKind;
  constructor() {
    super();
    this.hero = HeroKind[this.dataset.hero];

    // this.data = get(globalThis.app, `data.stats.heroes[${this.hero}]`, null);
    this.data = globalThis.data.stats.heroes[this.hero];

    this.attachShadow({ mode: "open" }).appendChild((document.getElementById("hero-stat") as HTMLTemplateElement).content.cloneNode(true));

    // console.log(this.data);

    this.render();

    //   <div id="modal">
    //   <div class="modal-underlay" onclick="window.app.router.load()"></div>
    //   <div id="modal-content" class="modal-content"></div>
    // </div>
  }

  render(edit: boolean = false) {
    const main = this.shadowRoot.querySelector('[name="main"]');
    const attack = this.shadowRoot.querySelector('[name="attack"]');
    const stats = this.shadowRoot.querySelector('[name="stats"]');
    const knowledge = this.shadowRoot.querySelector('[name="knowledge"]');
    const bestiary = this.shadowRoot.querySelector('[name="bestiary"]');

    this.data.basicStats.forEach((element, index) => {
      const name = BasicStatsKind[index];
      main.innerHTML += `<div>${Util.render.Statistic(element, name, "normal")}</div>`;
    });
    main.innerHTML += `<p>${Util.render.Statistic(globalThis.data.blessingInfo.effectMultipliers[this.hero], "Blessing Effect", "%")}</p>`;
    main.innerHTML += `<p>${Util.render.Statistic(globalThis.data.equipment.effectMultiplier, "Equipment Effect", "%")}</p>`;
    // attack tab
    this.data.elementDamages.forEach((element, index) => {
      const name = `${Element[index]} Damage`;
      attack.innerHTML += `<p>${Util.render.Statistic(element, name, "%")}</p>`;
    });
    attack.innerHTML += `<p>${Util.render.Statistic(this.data.stats[15], "Armored Fury", "%")}</p>`;
    attack.innerHTML += `<p>${Util.render.Statistic(this.data.stats[16], "Warded Fury", "%")}</p>`;
    attack.innerHTML += `<p>${Util.render.Statistic(this.data.stats[6], "Physical Critical Chance", "%")}</p>`;
    attack.innerHTML += `<p>${Util.render.Statistic(this.data.stats[7], "Magical Critical Chance", "%")}</p>`;
    attack.innerHTML += `<p>${Util.render.Statistic(this.data.stats[8], "Critical Damage", "%")}</p>`;
    attack.innerHTML += `<p>${Util.render.Statistic(this.data.extraAfterDamage, "Extra After Damage", "%")}</p>`;

    // console.log(this.data.stats);

    bestiary.innerHTML += `<p>${Util.render.Statistic(this.data.stats[13], "Taming Point Gain", "%")}</p>`;

    // defense

    // this.data.stats.forEach((element, index) => {
    //   const name = `${index} ${Stats[index]} `;
    //   stats.innerHTML += `<p>${Util.render.Statistic(element, name, "normal")}</p>`;
    // });

    this.data.monsterDamages.forEach((element, index) => {
      const name = `Damage to ${startCase(MonsterSpecies[index])} `;
      knowledge.innerHTML += `<p>${Util.render.Statistic(element, name, "%")}</p>`;
    });
  }

  connectedCallback() {
    // console.log("connectedCallback()");
    // this.render();
  }
}
