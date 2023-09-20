import { DataType } from "./type/DataType";
import { BuildingKind } from "./type/BuildingKind";
import { PotionKind } from "./type/PotionKind";
import { MonsterKind } from "./type/MonsterKind";
import { ExpeditionKind } from "./type/ExpeditionKind";
import { SourceKind } from "./type/SourceKind";
import { DataUpgrade } from "./data/DataUpgrade";
import { DataExpedition } from "./data/DataExpedition";
// import { DataExpeditionTeams } from "./DataExpeditionTeams";
import { DataTown } from "./data/DataTown";
import { DataTalisman } from "./data/DataTalisman";
import { DataDefault } from "./data/DataDefault";
import { DataGuild } from "./data/DataGuild";
import { DataPet } from "./data/DataPet";
import { DataMisc } from "./data/DataMisc";
import { DataEquip } from "./data/DataEquip";
import { DataStatistic } from "./data/DataStatistic";
import { CalculatorExpeditionTeams } from "./calculator/expedition-teams";
import { CalculatorExpeditionSimulator } from "./calculator/expedition-simulator";
import { CalculatorSlimeBank } from "./calculator/slimebank";
import { CalculatorProficiency } from "./calculator/proficiency";
import { CalculatorGuild } from "./calculator/guild";
import { CalculatorAnvil } from "./calculator/anvil";
import { DataQuest } from "./data/DataQuest";

// import { isEqual } from "lodash";

export class DATA implements DataType {
  source: SourceKind;
  upgrade: DataUpgrade;
  clearedMission?: number;
  custom?: any;
  town: DataTown;
  talisman?: DataTalisman;
  pet: DataPet;
  expedition?: DataExpedition;
  expeditionTeams: any;
  misc: DataMisc;
  equip: DataEquip;
  stat: DataStatistic;
  quest;
  guild;
  calculator;

  constructor() {
    this.load();
    // console.log(this);
    // this.stat = new DataStatistic(this);
    // this.quest = new DataQuest(this);
    this.guild = new DataGuild(this);
    this.misc = new DataMisc(this);
    this.pet = new DataPet(this);
    this.upgrade = new DataUpgrade(this);
    this.talisman = new DataTalisman(this);
    this.expedition = new DataExpedition(this);
    this.town = new DataTown(this); // require expedition and talisman
    // this.expeditionTeams = new DataExpeditionTeams(this);
    this.equip = new DataEquip(this);
    //
    this.calculator = {
      expedition: {
        teams: new CalculatorExpeditionTeams(this),
        simulator: new CalculatorExpeditionSimulator(this),
      },
      slimeBank: new CalculatorSlimeBank(this),
      proficiency: new CalculatorProficiency(this),
      guild: new CalculatorGuild(this),
      anvil: new CalculatorAnvil(this),
    };

    //
    this.save();

    // console.log(this.talisman.html());
    // console.log(this.source.equipmentLevelsWarrior);

    // console.log(this.source.expeditionPetSpecies);
    // let test = new DataDefault();

    // let test = Array(6).fill(0);
    // let test2 = Array(4).fill(1);
    // console.log(test);
    // console.log(test2);
    // console.log([...test, ...test2]);

    // console.log(this.talisman);

    // this.getClearedMission() ;

    // this.expedition = new StatisticExpedition(this.source.expeditionLevels).data;
    // this.town = new StatisticTown(
    //   this,
    //   {
    //     brick: this.expedition.Brick,
    //     log: this.expedition.Log,
    //     shard: this.expedition.Shard,
    //   },
    //   //@ts-ignore
    //   this.talisman.MasonsTrowel.passiveEffectValue,
    //   this.source.ascensionMilestoneLevelReached[0]
    // ).data;
    // console.log(this);
    // document.getElementById("title").innerHTML += "| source: " + Object.keys(this.source).length + "  # 273";
  }

  load() {
    if (localStorage.getItem("CustomData") && localStorage.getItem("CustomData") != "undefined") {
      this.custom = JSON.parse(localStorage.getItem("CustomData"));
    } else {
      this.custom = {};
    }
    // load source
    if (localStorage.getItem("SaveFileData") && localStorage.getItem("SaveFileData") != "undefined") {
      this.source = JSON.parse(localStorage.getItem("SaveFileData"));
    } else {
      this.source = new DataDefault();
      // load empty source and save it
    }
  }

  save() {
    localStorage.setItem("SaveFileData", JSON.stringify(this.source));
    localStorage.setItem("CustomData", JSON.stringify(this.custom));
  }

  update(endpoint) {
    // console.log("Data update");
    let controller = endpoint.split(".")[0];

    // console.log(endpoint, test);
    // console.log(endpoint.split(".")[0])     ;

    switch (controller) {
      // case "slimebank":
      //   this.s.update(endpoint);
      //   break;
      case "expeditionTeams":
        this.expeditionTeams.update(endpoint);
        break;
      default:
        break;
    }
  }
}
