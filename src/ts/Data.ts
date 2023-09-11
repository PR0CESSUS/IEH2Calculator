import { DataType } from "./type/DataType";
import { BuildingKind } from "./type/BuildingKind";
import { PotionKind } from "./type/PotionKind";
import { MonsterKind } from "./type/MonsterKind";
import { ExpeditionKind } from "./type/ExpeditionKind";
import { SourceKind } from "./type/SourceKind";
import { DataUpgrade } from "./DataUpgrade";
import { DataExpedition } from "./DataExpedition";
import { DataExpeditionTeams } from "./DataExpeditionTeams";
import { DataTown } from "./DataTown";
import { DataTalisman } from "./DataTalisman";
import { DataPet } from "./DataPet";
import { DataMisc } from "./DataMisc";
import { DataEquip } from "./DataEquip";
// import { isEqual } from "lodash";

export class DATA implements DataType {
  localStorage;
  isInitialized: boolean = false;
  source: SourceKind = {} as SourceKind;
  upgrade: DataUpgrade;
  clearedMission?: number;
  custom?: any;
  town?: DataTown;
  talisman?: DataTalisman;
  pet: DataPet;
  expedition?: DataExpedition;
  expeditionTeams: any;
  misc: DataMisc;
  equip: DataEquip;

  constructor() {
    this.load();
    this.initialization();
    this.save();

    // console.log(this.source.isStartedExpedition);

    // this.getClearedMission();

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
    if (localStorage.getItem("data")) {
      this.localStorage = JSON.parse(localStorage.getItem("data"));
      // console.log(this.localStorage);
      if (this.localStorage?.isInitialized) {
        // console.log(this.localStorage.isInitialized);
        this.source = this.localStorage.source;
        this.custom = this.localStorage.custom ?? {};
        this.isInitialized = true;
      }
      // this.isInitialized = this.localStorage.isInitialized ? this.localStorage.isInitialized : false;
    } else {
      // this.localStorage = { isInitialized: false };
    }
  }

  save() {
    // let olddata = JSON.parse(localStorage.getItem("data"));

    // if (this.source?.birthDate) {
    //   console.log(this.source?.birthDate, this.birthDate);

    //   this.initialization();
    //   this.isInitialized = true;
    //   //@ts-ignore
    //   // console.log("różne birthDate");
    //   // console.log(this.source?.birthDate, this.localStorage?.source?.birthDate);

    //   // console.log(this.localStorage.source);

    //   // console.log("this.source != localStorage") ;
    // }
    let data = structuredClone(this);
    delete data.localStorage;
    // console.log(data);

    localStorage.setItem("data", JSON.stringify(data));
  }

  initialization() {
    // console.log(this);
    this.misc = new DataMisc(this);
    this.pet = new DataPet(this);
    this.upgrade = new DataUpgrade(this);
    this.talisman = new DataTalisman(this);
    this.expedition = new DataExpedition(this);
    this.town = new DataTown(this); // require expedition and talisman
    this.expeditionTeams = new DataExpeditionTeams(this);
    this.equip = new DataEquip(this);
    //

    this.equip.update();
  }

  update(endpoint) {
    // console.log("Data update");
    let controller = endpoint.split(".")[0];

    // console.log(endpoint, test);
    // console.log(endpoint.split(".")[0])     ;

    switch (controller) {
      case "upgrade":
        this.upgrade.update(endpoint);
        break;
      case "pet":
        this.pet.update(endpoint);
        break;
      case "town":
        this.town.update(endpoint);
        break;
      case "expeditionTeams":
        this.expeditionTeams.update(endpoint);
        break;
      default:
        break;
    }
  }
}
