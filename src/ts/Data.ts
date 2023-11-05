import { SourceKind } from "./type/SourceKind";
import { DataDefault } from "./data/DataDefault";
import { App } from "./App";
import { DataExpedition } from "./data/Expedition";
import { DataTown } from "./data/Town";
import { DataStats } from "./data/Stats";
import { DataMonster } from "./data/Monster";
import { DataResource } from "./data/Resource";
import { DataEquipment } from "./data/Equipment";
import { DataCraft } from "./data/Craft";
import { DataArea } from "./data/Area";
import { DataRebirth } from "./data/Rebirth";
import { DataBlessingInfo } from "./data/BlessingInfo";
import { DataShop } from "./data/Shop";
import { DataInventory } from "./data/Inventory";
import { DataChallenge } from "./data/Challange";
import { DataAlchemy } from "./data/Alchemy";
import { DataPotion } from "./data/Potion";
import { DataSkill } from "./data/Skill";
import { DataGuild } from "./data/Guild";
import { DataAscension } from "./data/WorldAscension";
import { DataMission } from "./data/Mission";

export class DATA {
  source: SourceKind;
  custom: any;
  ascension: DataAscension;
  skill = new DataSkill();
  potion = new DataPotion();
  alchemy = new DataAlchemy();
  expedition = new DataExpedition();
  town;
  stats = new DataStats();
  area = new DataArea();
  battle;
  guild = new DataGuild();
  monster = new DataMonster();
  resource = new DataResource();
  equipment = new DataEquipment();
  craft = new DataCraft();
  inventory = new DataInventory();
  challenge = new DataChallenge();
  shop = new DataShop();
  rebirth = new DataRebirth();
  blessingInfo = new DataBlessingInfo();
  mission: DataMission;
  constructor(app: App) {
    this.load();
    globalThis.data = this;
    globalThis.app = app;
    this.town = new DataTown();
    this.ascension = new DataAscension();
    this.mission = new DataMission();
    this.save();

    // console.log(this.source);
    // console.log(defaultData);
    this.Start();
  }

  Start() {
    this.expedition.Start();
    this.town.Start();
    this.potion.Start();
    this.ascension.Start();
    this.mission.Start();
  }

  load() {
    if (localStorage.getItem("CustomData") && localStorage.getItem("CustomData") != "undefined") {
      this.custom = JSON.parse(localStorage.getItem("CustomData"));
    } else {
      this.custom = {};
    }
    if (localStorage.getItem("SaveFileData") && localStorage.getItem("SaveFileData") != "undefined") {
      this.source = { ...new DataDefault(), ...JSON.parse(localStorage.getItem("SaveFileData")) };
      globalThis.data = this;
    } else {
      this.source = new DataDefault();
    }
  }

  save() {
    localStorage.setItem("SaveFileData", JSON.stringify(this.source));
    localStorage.setItem("CustomData", JSON.stringify(this.custom));
  }

  get menu() {
    let html = ``;
    // console.log(Object.keys(this.data));

    html += `<div class="tablist">`;
    html += `<button data-url="#data">Overview</button>`;
    html += `<button data-url="#data-ascension">Ascension</button>`;
    html += `<button data-url="#data-bestiary">Bestiary</button>`;
    html += `<button data-url="#data-challange">Challange</button>`;
    html += `<button data-url="#data-expedition">Expedition</button>`;
    html += `<button data-url="#data-epicStore">Epic Store</button>`;
    html += `<button data-url="#data-guild">Guild</button>`;
    html += `<button data-url="#data-upgrade">Upgrade</button>`;
    html += `<button data-url="#data-talisman">Talisman</button>`;
    html += `<button data-url="#data-potion">Potion</button>`;
    html += `<button data-url="#data-quest">Quest</button>`;
    html += `<button data-url="#data-town">Town</button>`;
    html += `<button data-url="#data-mission">Mission</button>`;

    html += `</div>`;
    return html;
  }

  get html() {
    let html = ``;
    html += this.menu;

    html += `content `;
    // html += this.stat.html;

    return html;
  }
}
