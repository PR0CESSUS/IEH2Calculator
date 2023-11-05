import { Multiplier, MultiplierInfo } from "../../Multiplier";

export class BUILDING {
  townCtrl;
  kind;
  rank;
  level = globalThis.data.source.buildingLevels;

  maxBuildingRank = 5;
  passiveEffectList;
  passiveRankEffectList;
  levelBonus: Multiplier;
  researchLevels: any[] = [globalThis.data.source.buildingResearchLevelsStone, globalThis.data.source.buildingResearchLevelsCrystal, globalThis.data.source.buildingResearchLevelsLeaf];
  researchExps: any[] = [];

  constructor() {
    this.townCtrl = globalThis.data.town;
    this.levelBonus = new Multiplier();
    this.SetEffect();
    this.SetResearch();
  }

  Rank() {
    return this.rank.value;
  }

  Level() {
    return this.level[this.kind] + this.levelBonus.Value();
  }

  MaxLevel(rank) {
    return 20 * rank;
  }

  SetCost() {}

  SetEffect() {}

  SetResearch() {}

  ResearchLevel(kind) {
    console.log(kind);

    return this.researchLevels[kind].value;
  }
}
