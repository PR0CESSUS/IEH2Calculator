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
import { Multiplier, MultiplierInfo } from "../../Multiplier";
import { Multiplier_Info } from "../multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ConvertType } from "../../type/ConvertType";
import { DataStorage } from "../DataStorage";

document.body.innerHTML += template;
export class ComponentHeroStat extends HTMLElement {
  heroKind: HeroKind;
  dataStorage: DataStorage;
  data = [
    "basicStats",
    "stats",
    "elementDamages",
    "monsterDamages",
    "hpRegenerate",
    "mpRegenerate",
    "extraAfterDamage",
    "optionEffectChance",
    "equipment.effectMultiplier",
    "blessingInfo.effectMultiplier",
    "SD.armoredFury",
    "SD.wardedFury",
    "SD.damageMultiplier",
    "SD.damageCutMultiplier",
    "SD.sdChallengeBossDamageMultiplier",
    "SD.sdChallengeBossDamageCutMultiplier",
  ];
  constructor() {
    super();

    this.heroKind = parseInt(this.dataset.hero);
    // console.log(this.dataset.hero);

    this.dataStorage = new DataStorage(this, "ComponentHeroStat", {
      tab: "main",
    });

    // this.dataBattle = globalThis.

    this.attachShadow({ mode: "open" }).appendChild((document.getElementById("hero-stat") as HTMLTemplateElement).content.cloneNode(true));
    this.shadowRoot.querySelector(`[name="${this.dataStorage.data.tab}-content"]`).classList.remove("hidden");
    this.shadowRoot.querySelector(`[name="${this.dataStorage.data.tab}"]`).classList.add("active");
    // console.log(this.data);
    // console.log(this.dataSD);
    (this.shadowRoot.querySelector('[name="createSnapshot"]') as HTMLButtonElement).onclick = this.createSnapshot.bind(this);
    (this.shadowRoot.querySelector('[name="add"]') as HTMLButtonElement).onclick = this.testAdd.bind(this);
    (this.shadowRoot.querySelector('[name="remove"]') as HTMLButtonElement).onclick = this.testRemove.bind(this);

    this.render();
    // console.log("heroStat constructor after render");
    this.shadowRoot.querySelectorAll("li").forEach((li) => {
      li.onclick = this.changeTab.bind(this);
    });
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
  testRemove() {
    console.log("test Remove");

    const offset = 4840 + this.heroKind * 72;
    // console.log(offset);
    // globalThis.data.inventory.equipmentSlots[offset].isEffectRegistered.reverse();
    // console.log(globalThis.data.inventory.equipmentSlots[offset].isEffectRegistered);
    // console.log(globalThis.data.inventory.equipmentSlots[offset].globalInfo.levelMaxEffects);
    globalThis.data.inventory.equipmentSlots[offset].isEffectRegistered[0]();
    // console.log();

    // globalThis.data.inventory.equipmentSlots[offset].isEffectRegistered.forEach((effect) => {
    //   effect();
    // });
    // console.log(globalThis.data.stats.heroes[this.heroKind].basicStats[BasicStatsKind.DEF]);

    // globalThis.data.inventory.equipmentSlots[offset].isEffectRegistered = [];
    // console.log(globalThis.data.inventory.equipmentSlots[offset].isEffectRegistered);
    // console.log("modifiers.length", globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.modifiers.length);
    // console.log("modifiers.length", globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier);
    globalThis.app.router.load();
  }
  testAdd() {
    console.log("test Add");
    const offset = 4840 + this.heroKind * 72;
    globalThis.data.inventory.equipmentSlots[offset].SetAgainAllEffect();
    // console.log(offset);
    // console.log(globalThis.data.inventory.equipmentSlots[offset].isEffectRegistered);
    // console.log(globalThis.data.inventory.equipmentSlots[offset].globalInfo.levelMaxEffects);

    // globalThis.data.inventory.equipmentSlots[offset].isEffectRegistered.forEach((effect) => {
    //   effect();
    // });
    // globalThis.data.inventory.equipmentSlots[offset].isEffectRegistered = [];
    // console.log(globalThis.data.inventory.equipmentSlots[offset].isEffectRegistered);
    // console.log("modifiers.length", globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier.modifiers.length);
    // console.log("modifiers.length", globalThis.data.battles[this.heroKind].superDungeonCtrl.damageMultiplier);
    globalThis.app.router.load();
  }

  createSnapshot() {
    // let data =
    // if (data == undefined) console.log("click");
    let snapshot = {
      basicStats: [],
      stats: [],
      elementDamages: [],
      SD: { damageMultiplier: null },
      monsterDamages: [],
      optionEffectChance: [],
      equipment: { effectMultiplier: null },
      blessingInfo: { effectMultiplier: null },
    };

    this.data.forEach((entry, index) => {
      const name = entry.split(".").length != 1 ? entry.split(".")[1] : entry;
      const source = entry.split(".").length != 1 ? entry.split(".")[0] : null;
      const element = this.getData(source, name);

      if (Array.isArray(element)) {
        element.forEach((stat, index) => {
          snapshot[name][index] = stat.Snapshot();
        });
      } else {
        if (source) {
          snapshot[source][name] = element.Snapshot();
        } else {
          snapshot[name] = element.Snapshot();
        }
      }
    });

    // console.log(snapshot);

    localStorage.setItem("snapshotStat", JSON.stringify(snapshot));
    globalThis.app.router.load();
  }

  render(edit: boolean = false) {
    const snapshot = JSON.parse(localStorage.getItem("snapshotStat"));

    // console.log(snapshot);

    this.data.forEach((entry, index) => {
      const name = entry.split(".").length != 1 ? entry.split(".")[1] : entry;
      const source = entry.split(".").length != 1 ? entry.split(".")[0] : null;
      const element = this.getData(source, name);
      let snapshotData;
      if (snapshot) {
        if (source) {
          snapshotData = snapshot[source][name];
        } else {
          snapshotData = snapshot[name];
        }
      }
      // globalThis.data[source]
      // console.log(name, source);
      if (Array.isArray(element)) {
        element.forEach((stat, index) => {
          this.renderMultiplier(`${name}${index}`, stat, snapshotData ? snapshotData[index] : undefined);
        });
      } else {
        // console.log(entry, snapshotData);

        this.renderMultiplier(entry, element, snapshotData);
      }
    });
  }

  renderMultiplier(name, data: Multiplier, snapshot, isLog = false) {
    const html = this.shadowRoot.querySelector(`[name="${name}"]`) as Multiplier_Info;
    if (snapshot) html.snapshot = snapshot;
    if (this.dataset.superdungeon == "true" && html.dataset.islog != "false") html.style.color = "yellow";
    if (this.dataset.superdungeon == "true" && html.dataset.islog != "false") html.dataset.superdungeon = "true";
    html.data = data;
  }

  getData(source = "", name = "") {
    switch (source) {
      case "equipment":
        return globalThis.data.equipment[name];
      case "blessingInfo":
        return globalThis.data.blessingInfo.effectMultipliers[this.heroKind];
      case "SD":
        return globalThis.data.battles[this.heroKind].superDungeonCtrl[name];
      default:
        return globalThis.data.stats.heroes[this.heroKind][name];
    }
  }

  connectedCallback() {
    // console.log("connectedCallback()");
    // this.render();
  }
}
