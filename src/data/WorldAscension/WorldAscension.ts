import { Multiplier } from "@/data/Multiplier";
import { HeroKind } from "@type/HeroKind";
import { DATA } from "..";
import { WorldAscensionUpgrade } from "./WorldAscensionUpgrade";
import { WorldAscensionMilestone } from "./WorldAscensionMilestone";

export class WorldAscension {
  data: DATA;
  WorldAscensionPopoint;
  upgradeList: WorldAscensionUpgrade[] = [];
  milestoneList: WorldAscensionMilestone[] = [];
  //   missionList: WorldAscensionMission[] = [];
  //   missionMilestoneList: WorldAscensionMissionMilestone[] = [];
  pointGainBonus: Multiplier;
  //   accomplish: AccomplishWorldAscension;
  isTrying;
  missionClearNum;
  currentHero: HeroKind;
  isActiveHeroes;

  constructor(DATA: DATA) {
    this.data = DATA;
    this.pointGainBonus = new Multiplier();
    this.SetUpgrade();
    this.SetMilestone();
  }

  Start() {
    for (let index = 0; index < this.upgradeList.length; index++) this.upgradeList[index].Start();
    for (let index = 0; index < this.milestoneList.length; index++) this.milestoneList[index].Start();
    this.SetMission();
  }

  get tier() {
    return 0;
  }

  SetUpgrade() {}

  SetMilestone() {}

  SetMission() {}

  TotalMilestoneLevel() {
    let num = 0;
    for (let index = 0; index < this.milestoneList.length; index++) num += this.milestoneList[index].CurrentLevel();
    return num;
  }
}
