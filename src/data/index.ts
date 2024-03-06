import { ref } from "vue";
import { Enums } from "../Enums";
import { DataAlchemy } from "./Alchemy";
import { DataArea } from "./Area";
import { DataBattle } from "./Battle";
import { DataBlessingInfo } from "./BlessingInfo";
import { DataChallenge } from "./Challange";
import { DataCraft } from "./Craft";
import { DataDefault } from "./DataDefault";
import { DataEpicStore } from "./EpicStore";
import { DataEquipment } from "./Equipment";
import { DataExpedition } from "./Expedition";
import { DataGuild } from "./Guild";
import { DataInventory } from "./Inventory";
import { DataMission } from "./Mission";
import { DataMonster } from "./Monster";
import { DataNitro } from "./Nitro";
import { DataPotion } from "./Potion";
import { DataQuest } from "./Quest";
import { DataRebirth } from "./Rebirth";
import { DataResource } from "./Resource";
import { DataShop } from "./Shop";
import { DataSkill } from "./Skill";
import { DataStats } from "./Stats";
import { DataSuperDungeonGlobal } from "./SuperDungeon";
import { DataSuperStats } from "./SuperStats";
import { DataTown } from "./Town";
import { DataUpgrade } from "./Upgrade";
import { DataAscension } from "./WorldAscension";

export class DATA {
  source: DataDefault;
  ascension: DataAscension;
  skill: DataSkill;
  potion: DataPotion;
  alchemy: DataAlchemy;
  epicStore: DataEpicStore;
  expedition: DataExpedition;
  town: DataTown;
  stats: DataStats;
  area: DataArea;
  battles: DataBattle[] = Array(Enums.HeroKind);
  superStats: DataSuperStats;
  guild: DataGuild;
  monster: DataMonster;
  resource: DataResource;
  equipment: DataEquipment;
  craft: DataCraft;
  quest: DataQuest;
  inventory: DataInventory;
  challenge: DataChallenge;
  shop: DataShop;
  rebirth: DataRebirth;
  blessingInfo: DataBlessingInfo;
  mission: DataMission;
  sdg: DataSuperDungeonGlobal;
  nitro: DataNitro;
  upgrade: DataUpgrade;
  requireUpdate = ref(false);
  constructor(sourceData) {
    this.source = sourceData;
    this.guild = new DataGuild(this);
    this.potion = new DataPotion(this);
    this.challenge = new DataChallenge(this);
    this.rebirth = new DataRebirth(this);
    this.alchemy = new DataAlchemy();
    this.shop = new DataShop();
    this.craft = new DataCraft();
    this.blessingInfo = new DataBlessingInfo(this);
    this.town = new DataTown(this);
    this.resource = new DataResource();
    this.area = new DataArea(this);
    this.ascension = new DataAscension(this);
    this.mission = new DataMission(this);
    this.stats = new DataStats(this);
    this.expedition = new DataExpedition(this);
    this.inventory = new DataInventory(this);
    this.equipment = new DataEquipment(this);
    this.monster = new DataMonster(this);
    this.sdg = new DataSuperDungeonGlobal(this);
    this.nitro = new DataNitro();
    this.superStats = new DataSuperStats(this);
    this.quest = new DataQuest(this);
    this.skill = new DataSkill(this);
    this.epicStore = new DataEpicStore(this);
    this.upgrade = new DataUpgrade(this);

    for (let index = 0; index < this.battles.length; index++) {
      this.battles[index] = new DataBattle(this, index);
    }

    this.Start();
  }

  get battle(): DataBattle {
    return this.battles[this.source.currentHero];
  }

  Start() {
    this.challenge.Start();
    this.expedition.Start();
    this.potion.Start();
    this.town.Start();
    this.ascension.Start();
    this.mission.Start();
    this.guild.Start();
    this.monster.Start();
    this.sdg.Start();
    this.superStats.Start();
    for (let index = 0; index < this.battles.length; index++) {
      this.battles[index].Start();
    }
    this.quest.Start();
    this.rebirth.Start();
    this.upgrade.Start();
    this.epicStore.Start();
    this.blessingInfo.Start();
    this.equipment.Start();
    this.inventory.Start();
    this.SuperDungeonToggle();
  }

  load() {
    console.log("data manual load");
  }

  save() {
    console.log("data manual save");
  }

  SuperDungeonToggle() {
    // const heroKind = this.source.currentHero;
    for (let index = 0; index < Enums.HeroKind; index++) {
      const heroKind = index;
      // skills
      this.skill.isLog[heroKind] = this.source.isSuperDungeon;
      this.skill.skillLevelBonus[heroKind].isLog = this.source.isSuperDungeon;
      this.skill.skillRangeMultiplier[heroKind].isLog = this.source.isSuperDungeon;
      this.skill.skillEffectRangeMultiplier[heroKind].isLog = this.source.isSuperDungeon;
      // stats
      this.stats.heroes[heroKind].stats[5].isLog = this.source.isSuperDungeon;
      this.stats.heroes[heroKind].stats[6].isLog = this.source.isSuperDungeon;
      this.stats.heroes[heroKind].stats[7].isLog = this.source.isSuperDungeon;
      this.stats.heroes[heroKind].stats[8].isLog = this.source.isSuperDungeon;
      this.stats.heroes[heroKind].stats[9].isLog = this.source.isSuperDungeon;
      this.stats.heroes[heroKind].stats[10].isLog = this.source.isSuperDungeon;
      this.stats.heroes[heroKind].hpRegenerate.isLog = this.source.isSuperDungeon;
      this.stats.heroes[heroKind].mpRegenerate.isLog = this.source.isSuperDungeon;

      for (let index = 0; index < Enums.BasicStatsKind; index++) this.stats.heroes[heroKind].basicStats[index].isLog = this.source.isSuperDungeon;
      for (let index = 0; index < Enums.Element; index++) this.stats.heroes[heroKind].elementDamages[index].isLog = this.source.isSuperDungeon;
      for (let index = 0; index < Enums.Element - 1; index++) this.stats.heroes[heroKind].stats[index].isLog = this.source.isSuperDungeon;
      for (let index = 0; index < Enums.Element; index++) this.stats.heroes[heroKind].elementAbsoptions[index].isLog = this.source.isSuperDungeon;
      for (let index = 0; index < Enums.Element; index++) this.stats.heroes[heroKind].elementInvalids[index].isLog = this.source.isSuperDungeon;
      for (let index = 0; index < Enums.MonsterSpecies; index++) this.stats.heroes[heroKind].monsterDamages[index].isLog = this.source.isSuperDungeon;
    }
  }

  Update() {
    this.requireUpdate.value = false;
  }
}
