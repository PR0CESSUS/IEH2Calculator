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
import { SuperDungeonGlobalController } from "./data/SuperDungeon";
import { DataNitro } from "./data/Nitro";
import { Enums } from "./Enums";
import { BATTLE_CONTROLLER } from "./data/Battle";
import { HeroKind } from "./type/HeroKind";
import { SuperStatsController } from "./data/SuperStats";
import { QuestController } from "./data/Quest";
import { DataEpicStore } from "./data/EpicStore";

export class DATA {
  currentHero: HeroKind = 0;
  source: DataDefault;
  ascension: DataAscension;
  skill: DataSkill;
  potion: DataPotion;
  alchemy = new DataAlchemy();
  epicStore: DataEpicStore;
  expedition: DataExpedition;
  town: DataTown;
  stats: DataStats;
  area = new DataArea();
  battles: BATTLE_CONTROLLER[] = Array(Enums.HeroKind);
  superStats: SuperStatsController;
  guild = new DataGuild();
  monster: DataMonster;
  resource = new DataResource();
  equipment: DataEquipment;
  craft = new DataCraft();
  quest: QuestController;
  inventory: DataInventory;
  challenge: DataChallenge;
  shop = new DataShop();
  rebirth = new DataRebirth();
  blessingInfo = new DataBlessingInfo();
  mission: DataMission;
  sdg: SuperDungeonGlobalController;
  nitro: DataNitro;
  app: App;
  custom = {
    isSuperDungeon: false,
  };
  constructor(app: App) {
    this.app = app;
    this.load();
    this.potion = new DataPotion();
    this.challenge = new DataChallenge();
    this.town = new DataTown();
    this.ascension = new DataAscension();
    this.mission = new DataMission();
    this.stats = new DataStats();
    this.expedition = new DataExpedition();
    this.inventory = new DataInventory();
    this.equipment = new DataEquipment();
    this.monster = new DataMonster();
    this.sdg = new SuperDungeonGlobalController();
    this.nitro = new DataNitro();
    this.superStats = new SuperStatsController();
    this.quest = new QuestController();
    this.skill = new DataSkill();
    this.epicStore = new DataEpicStore();

    for (let index = 0; index < this.battles.length; index++) {
      this.battles[index] = new BATTLE_CONTROLLER(index);
    }

    // console.log(this.source.maxModifierCleareds);

    // console.log(globalThis.data.challenge.permanentRewardMultiplier);
    this.Start();
    // console.log(globalThis.data.source.abilityPoints);
    // console.log(globalThis.data.source.superDungeonMaxFloorsReached);
    // console.log(globalThis.data.source.maxModifierCleareds);
    // const HERO = HeroKind.Angel;
    // console.log(HeroKind[HERO]);
    // console.log("equipWeaponUnlockedNum ", globalThis.data.inventory.equipWeaponUnlockedNum[HERO].Value());
    // console.log("equipArmorUnlockedNum ", globalThis.data.inventory.equipArmorUnlockedNum[HERO].Value());
    // console.log("equipJewelryUnlockedNum ", globalThis.data.inventory.equipJewelryUnlockedNum[HERO].Value());
    // console.log("eqWeaponSlotNum ", globalThis.data.battles[HERO].superDungeonCtrl.eqWeaponSlotNum.Value());
    // console.log();
    // globalThis.data.inventory.equipmentSlots[3472].SetAgainAllEffect();
  }

  get battle() {
    return this.battles[this.currentHero];
  }

  Start() {
    this.challenge.Start();
    this.expedition.Start();
    this.potion.Start();
    this.town.Start();
    this.ascension.Start();
    this.mission.Start();

    this.monster.Start();
    this.sdg.Start();
    this.superStats.Start();
    for (let index = 0; index < this.battles.length; index++) {
      this.battles[index].Start();
    }
    this.quest.Start();
    this.rebirth.Start();
    this.inventory.Start();
  }

  load() {
    if (localStorage.getItem("CustomData") && localStorage.getItem("CustomData") != "undefined") {
      this.custom = JSON.parse(localStorage.getItem("CustomData"));
    }
    if (localStorage.getItem("SaveFileData") && localStorage.getItem("SaveFileData") != "undefined") {
      this.source = { ...new DataDefault(), ...JSON.parse(localStorage.getItem("SaveFileData")) };

      this.save();
    } else {
      this.source = new DataDefault();
    }

    globalThis.data = this;
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
