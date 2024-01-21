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
import { Multiplier, MultiplierInfo } from "../../Multiplier";
import { ComponentMultiplierInfo } from "../Multiplier-Info";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { renderSkill } from "./Skill";
import { renderBestiary } from "./Bestiary";
import { renderRegions } from "./Regions";
import { renderDefense } from "./Defense";
import { renderAttack } from "./Attack";
import { renderGains } from "./Gains";
import { renderMain } from "./Main";
import { CustomSelectType } from "../../type/CustomSelectType";

export class ComponentHeroStat extends HTMLElement {
  database = {
    tab: "main",
    snapshot: {},
  };
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML += `<style>@import "./styles-bundle.css";${style}</style>`;
    this.shadowRoot.innerHTML += template;

    this.database = globalThis.app.database.Connect("hero-stat", this.database);

    // this.shadowRoot.querySelector(`[name="content"]`).innerHTML = this.tabData().html;

    (this.shadowRoot.querySelector(`[name="hero"]`) as HTMLDivElement).innerHTML = `<custom-select data-type="${CustomSelectType.HeroKind}"
    data-endpoint="data.source.currentHero">${globalThis.data.source.currentHero}</custom-select>`;
    (this.shadowRoot.querySelector(`[name="heroLevel"]`) as HTMLDivElement).innerHTML = `${
      globalThis.data.custom.isSuperDungeon
        ? "Grade " + globalThis.data.source.heroGrade[globalThis.data.source.currentHero]
        : "Level " + globalThis.data.source.heroLevel[globalThis.data.source.currentHero]
    }`;
    // console.log(this.dataSD);
    (this.shadowRoot.querySelector('[name="createSnapshot"]') as HTMLButtonElement).onclick = this.createSnapshot.bind(this);
    // (this.shadowRoot.querySelector('[name="add"]') as HTMLButtonElement).onclick = this.testAdd.bind(this);
    // (this.shadowRoot.querySelector('[name="remove"]') as HTMLButtonElement).onclick = this.testRemove.bind(this);

    this.render();
    // console.log("heroStat constructor after render");
    this.shadowRoot.querySelectorAll("li").forEach((li) => {
      li.onclick = this.changeTab.bind(this);
    });
  }

  tabData(tab = this.database.tab) {
    switch (tab) {
      case "main":
        return renderMain();
      case "skills":
        return renderSkill();
      case "bestiary":
        return renderBestiary();
      case "regions":
        return renderRegions();
      case "defense":
        return renderDefense();
      case "attack":
        return renderAttack();
      case "gains":
        return renderGains();
      default:
        return { html: "No Data", endpoints: [] };
    }
  }

  changeTab(event) {
    this.shadowRoot.querySelectorAll(`li`).forEach((li) => {
      li.classList.remove("active");
    });

    this.database.tab = (event.composedPath()[0] as HTMLLIElement).attributes.getNamedItem("name").value;

    this.render();
  }

  createSnapshot() {
    let endpoints = [];
    this.shadowRoot.querySelectorAll("li").forEach((li) => {
      endpoints = [...endpoints, ...this.tabData(li.getAttribute("name")).endpoints];
    });

    for (let index = 0; index < endpoints.length; index++) {
      const endpoint = endpoints[index];
      const multiplier = get(globalThis.data, endpoint) as Multiplier;
      this.database.snapshot[endpoint] = multiplier.Snapshot();
    }

    globalThis.app.page.Load();
  }

  render(edit: boolean = false) {
    this.shadowRoot.querySelector(`[name="content"]`).innerHTML = this.tabData().html;
    this.shadowRoot.querySelector(`[name="${this.database.tab}"]`).classList.add("active");
    // console.log("hero-stat render");
    // const snapshot = JSON.parse(localStorage.getItem("snapshotStat"));
    // // console.log(snapshot);
    // this.data.forEach((entry, index) => {
    //   const name = entry.split(".").length != 1 ? entry.split(".")[1] : entry;
    //   const source = entry.split(".").length != 1 ? entry.split(".")[0] : null;
    //   const element = this.getData(source, name);
    //   let snapshotData;
    //   if (snapshot) {
    //     if (source) {
    //       // if (snapshot[source] != undefined)
    //       snapshotData = snapshot[source][name];
    //     } else {
    //       snapshotData = snapshot[name];
    //     }
    //   }
    //   // globalThis.data[source]
    //   // console.log(name, source);
    //   if (Array.isArray(element)) {
    //     element.forEach((stat, index) => {
    //       this.renderMultiplier(`${name}${index}`, stat, snapshotData ? snapshotData[index] : undefined);
    //     });
    //   } else {
    //     // console.log(entry, snapshotData);
    //     this.renderMultiplier(entry, element, snapshotData);
    //   }
    // });
  }

  Update() {
    this.render();
  }
  connectedCallback() {
    // console.log("connectedCallback()");
    // this.render();
  }
}
