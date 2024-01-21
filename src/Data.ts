import { Stats } from "./type/Stats";
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
import { Database } from "./Database";
import { SuperDungeonUpgradeKind } from "./type/SuperDungeonUpgradeKind";
import { UpgradeController } from "./data/Upgrade";
import { MultiplierInfo } from "./Multiplier";
import { MultiplierType } from "./type/MultiplierType";

export class DATA {
  database: Database;
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
  upgrade: UpgradeController;
  custom = {
    isSuperDungeon: false,
    isPowerupActive: false,
    powerup: Array(Enums.SuperDungeonPowerupKind).fill(0),
  };
  constructor() {
    globalThis.data = this;
    this.database = new Database("SaveFileData");
    this.source = this.database.Connect(new DataDefault());
    this.custom = globalThis.app.database.Connect("customData", this.custom);
    globalThis.app.database.Watch("isSuperDungeon", this.SuperDungeonToggle.bind(this));
    this.database.Watch("currentHero", this.SetLog10.bind(this));
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
    this.upgrade = new UpgradeController();

    for (let index = 0; index < this.battles.length; index++) {
      this.battles[index] = new BATTLE_CONTROLLER(index);
    }

    this.Start();

    // this.stats.heroes[2].basicStats[4].RegisterMultiplier(new MultiplierInfo(1, MultiplierType.After, () => -1672000));
  }

  get battle(): BATTLE_CONTROLLER {
    // console.log("batle");

    return this.battles[this.source.currentHero];
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
    this.upgrade.Start();
    this.SetLog10();
  }

  load() {
    console.log("data manual load");

    if (localStorage.getItem("SaveFileData") && localStorage.getItem("SaveFileData") != "undefined") {
      this.source = { ...new DataDefault(), ...JSON.parse(localStorage.getItem("SaveFileData")) };

      this.save();
    } else {
      this.source = new DataDefault();
    }
  }

  save() {
    localStorage.setItem("SaveFileData", JSON.stringify(this.source));
    console.log("data manual save");
  }

  SetLog10() {
    // console.log("setlog10", this.custom.isSuperDungeon);

    const heroKind = this.source.currentHero;
    // skills
    this.skill.isLog[heroKind] = this.custom.isSuperDungeon;
    this.skill.skillLevelBonus[heroKind].isLog = this.custom.isSuperDungeon;
    this.skill.skillRangeMultiplier[heroKind].isLog = this.custom.isSuperDungeon;
    this.skill.skillEffectRangeMultiplier[heroKind].isLog = this.custom.isSuperDungeon;
    // stats
    this.stats.heroes[heroKind].stats[5].isLog = this.custom.isSuperDungeon;
    this.stats.heroes[heroKind].stats[6].isLog = this.custom.isSuperDungeon;
    this.stats.heroes[heroKind].stats[7].isLog = this.custom.isSuperDungeon;
    this.stats.heroes[heroKind].stats[8].isLog = this.custom.isSuperDungeon;
    this.stats.heroes[heroKind].stats[9].isLog = this.custom.isSuperDungeon;
    this.stats.heroes[heroKind].stats[10].isLog = this.custom.isSuperDungeon;
    this.stats.heroes[heroKind].hpRegenerate.isLog = this.custom.isSuperDungeon;
    this.stats.heroes[heroKind].mpRegenerate.isLog = this.custom.isSuperDungeon;

    for (let index = 0; index < Enums.BasicStatsKind; index++) this.stats.heroes[heroKind].basicStats[index].isLog = this.custom.isSuperDungeon;
    for (let index = 0; index < Enums.Element; index++) this.stats.heroes[heroKind].elementDamages[index].isLog = this.custom.isSuperDungeon;
    for (let index = 1; index < Enums.Element; index++) this.stats.heroes[heroKind].stats[index].isLog = this.custom.isSuperDungeon;
    for (let index = 0; index < Enums.Element; index++) this.stats.heroes[heroKind].elementAbsoptions[index].isLog = this.custom.isSuperDungeon;
    for (let index = 0; index < Enums.Element; index++) this.stats.heroes[heroKind].elementInvalids[index].isLog = this.custom.isSuperDungeon;
    for (let index = 0; index < Enums.MonsterSpecies; index++) this.stats.heroes[heroKind].monsterDamages[index].isLog = this.custom.isSuperDungeon;
  }

  SuperDungeonToggle() {
    // console.log("SD toogle", this.custom.isSuperDungeon);
    this.SetLog10();
  }
}
