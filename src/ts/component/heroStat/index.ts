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
import { MultiplierInfo } from "../../Multiplier";
import { Multiplier_Info } from "../multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { DataStorage } from "../DataStorage";

document.body.innerHTML += template;
export class ComponentHeroStat extends HTMLElement {
  data: HeroStats;
  dataSD: SuperDungeonController;
  hero: HeroKind;
  dataStorage: DataStorage;
  constructor() {
    super();
    this.hero = parseInt(this.dataset.hero);
    // console.log(this.dataset.hero);

    this.dataStorage = new DataStorage(this, "ComponentHeroStat", {
      tab: "main",
    });

    this.data = globalThis.data.stats.heroes[this.hero];
    this.dataSD = globalThis.data.battles[this.hero].superDungeonCtrl;
    // this.dataBattle = globalThis.

    this.attachShadow({ mode: "open" }).appendChild((document.getElementById("hero-stat") as HTMLTemplateElement).content.cloneNode(true));
    this.shadowRoot.querySelector(`[name="${this.dataStorage.data.tab}-content"]`).classList.remove("hidden");
    this.shadowRoot.querySelector(`[name="${this.dataStorage.data.tab}"]`).classList.add("active");
    // console.log(this.data);
    // console.log(this.dataSD);
    (this.shadowRoot.querySelector('[name="createSnapshot"]') as HTMLButtonElement).onclick = this.createSnapshot.bind(this);
    (this.shadowRoot.querySelector('[name="add"]') as HTMLButtonElement).onclick = this.xxx.bind(this);

    this.render();
    // console.log("heroStat constructor after render");
    this.shadowRoot.querySelectorAll("li").forEach((li) => {
      li.onclick = this.changeTab.bind(this);
    });
    //   <div id="modal">
    //   <div class="modal-underlay" onclick="window.app.router.load()"></div>
    //   <div id="modal-content" class="modal-content"></div>
    // </div>
  }

  changeTab(event) {
    const name = (event.composedPath()[0] as HTMLLIElement).attributes.getNamedItem("name").value;
    this.shadowRoot.querySelector(`[name="${this.dataStorage.data.tab}-content"]`).classList.add("hidden");
    this.shadowRoot.querySelector(`[name="${name}-content"]`).classList.remove("hidden");
    this.shadowRoot.querySelector(`[name="${this.dataStorage.data.tab}"]`).classList.remove("active");
    this.shadowRoot.querySelector(`[name="${name}"]`).classList.add("active");
    this.dataStorage.data.tab = name;
    this.dataStorage.Save();
    // console.log(this.dataStorage.data.tab);
  }

  xxx() {
    const offset = 4840 + this.hero * 72 + 0;
    // console.log(globalThis.data.inventory.equipmentSlots[offset].globalInfo.effects);
    // console.log(globalThis.data.inventory.equipmentSlots[offset].isEffectRegistered);

    // if (globalThis.data.inventory.equipmentSlots[offset].isEffectRegistered) {
    //   for (let index = 0; index < globalThis.data.inventory.equipmentSlots[offset].isEffectRegistered.length; index++) {
    //     const element = globalThis.data.inventory.equipmentSlots[offset].isEffectRegistered[index];
    //     // console.log(element);
    //     element();
    //   }
    // }
    // console.log("before", this.data.basicStats[0].value);
    // this.data.basicStats[0].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Achievement, MultiplierType.Add, () => 1500000000));
    // this.data.basicStats[0].Calculate();
    globalThis.app.router.load();
  }

  createSnapshot() {
    // let data =
    // if (data == undefined) console.log("click");
    let snapshot = { basicStats: [], stats: [], elementDamages: [], SD: { damageMultiplier: 0 }, monsterDamages: [] };
    this.data.basicStats.forEach((element, index) => {
      snapshot.basicStats[index] = element.Snapshot();
    });
    this.data.stats.forEach((element, index) => {
      snapshot.stats[index] = element.Snapshot();
    });
    this.data.elementDamages.forEach((element, index) => {
      snapshot.elementDamages[index] = element.Snapshot();
    });
    this.data.monsterDamages.forEach((element, index) => {
      snapshot.monsterDamages[index] = element.Snapshot();
    });
    const SD = [
      "armoredFury",
      "damageMultiplier",
      "damageCutMultiplier",
      "sdChallengeBossDamageMultiplier",
      "sdChallengeBossDamageCutMultiplier",
      "armoredFury",
      "wardedFury",
    ];

    SD.forEach((element) => {
      snapshot.SD[element] = this.dataSD[element].Snapshot();
    });
    localStorage.setItem("snapshotStat", JSON.stringify(snapshot));
    globalThis.app.router.load();
  }

  render(edit: boolean = false) {
    // if (this.dataset.superdungeon) {
    //   console.log("sa");
    //   console.log(Array.isArray(this.data.basicStats));
    // }

    // const ggg=  [
    //   {
    //     multiplier: this.data.basicStats,
    //     name: 'BasicStats',

    //   }
    // ]

    const snapshot = JSON.parse(localStorage.getItem("snapshotStat"));
    // const main = this.shadowRoot.querySelector('[name="main"]');
    // const attack = this.shadowRoot.querySelector('[name="attack"]');
    // const stats = this.shadowRoot.querySelector('[name="stats"]');
    // const knowledge = this.shadowRoot.querySelector('[name="knowledge"]');
    // const bestiary = this.shadowRoot.querySelector('[name="bestiary"]');

    this.data.basicStats.forEach((element, index) => {
      let html = this.getMultiplierInfo(`BasicStats${index}`);
      if (snapshot != undefined && snapshot["basicStats"] != undefined) html.snapshot = snapshot["basicStats"][index];
      if (this.dataset.superdungeon == "true") html.style.color = "yellow";
      if (this.dataset.superdungeon == "true") html.dataset.superdungeon = "true";
      html.data = element;
    });

    this.data.stats.forEach((element, index) => {
      let html = this.getMultiplierInfo(`Stats${index}`);
      if (snapshot != undefined && snapshot["stats"] != undefined) html.snapshot = snapshot["stats"][index];
      if (this.dataset.superdungeon == "true") html.style.color = "yellow";
      if (this.dataset.superdungeon == "true") html.dataset.superdungeon = "true";
      html.data = element;
    });
    this.data.elementDamages.forEach((element, index) => {
      let html = this.getMultiplierInfo(`elementDamages${index}`);
      if (snapshot != undefined && snapshot["elementDamages"] != undefined) html.snapshot = snapshot["elementDamages"][index];
      if (this.dataset.superdungeon == "true") html.style.color = "yellow";
      if (this.dataset.superdungeon == "true") html.dataset.superdungeon = "true";
      html.data = element;
    });

    this.data.monsterDamages.forEach((element, index) => {
      let html = this.getMultiplierInfo(`monsterDamages${index}`);
      if (snapshot != undefined && snapshot["monsterDamages"] != undefined) html.snapshot = snapshot["monsterDamages"][index];
      if (this.dataset.superdungeon == "true") html.style.color = "yellow";
      if (this.dataset.superdungeon == "true") html.dataset.superdungeon = "true";
      html.data = element;
    });

    const SD = [
      "armoredFury",
      "damageMultiplier",
      "damageCutMultiplier",
      "sdChallengeBossDamageMultiplier",
      "sdChallengeBossDamageCutMultiplier",
      "armoredFury",
      "wardedFury",
    ];

    SD.forEach((element) => {
      let html = this.getMultiplierInfo(`SD.${element}`);
      if (snapshot != undefined && snapshot.SD[element] != undefined) html.snapshot = snapshot.SD[element];
      html.data = this.dataSD[element];
      // (this.shadowRoot.querySelector(`[name="SD.${element}"]`) as Multiplier_Info).data = this.dataSD[element];
    });

    this.getMultiplierInfo("blessingInfo.effectMultiplier").data = globalThis.data.blessingInfo.effectMultipliers[this.hero];
    this.getMultiplierInfo("equipment.effectMultiplier").data = globalThis.data.equipment.effectMultiplier;
    this.getMultiplierInfo("extraAfterDamage").data = this.data.extraAfterDamage;

    this.getMultiplierInfo("hpRegenerate").data = this.data.hpRegenerate;
    this.getMultiplierInfo("mpRegenerate").data = this.data.mpRegenerate;
    // attack tab

    // console.log(this.dataSD.damageMultiplier);

    // this.data.monsterDamages.forEach((element, index) => {
    //   const name = `Damage to ${startCase(MonsterSpecies[index])} `;
    //   knowledge.innerHTML += `<p>${Util.render.Statistic(element, name, "%")}</p>`;
    // });
  }

  getMultiplierInfo(name) {
    return this.shadowRoot.querySelector(`[name="${name}"]`) as Multiplier_Info;
  }

  connectedCallback() {
    // console.log("connectedCallback()");
    // this.render();
  }
}
