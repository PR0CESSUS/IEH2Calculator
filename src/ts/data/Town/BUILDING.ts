import { Multiplier, MultiplierInfo } from "../../Multiplier";
import { ResourceKind } from "../../type/ResourceKind";

export class BUILDING {
  townCtrl;
  kind;
  rank;
  level = globalThis.data.source.buildingLevels;

  maxBuildingRank = 5;
  passiveEffectList;
  passiveRankEffectList;
  levelBonus: Multiplier;
  researchLevels: any[];
  researchExps: any[] = [];

  constructor() {
    this.townCtrl = globalThis.data.town;
    this.researchLevels = [
      globalThis.data.source.buildingResearchLevelsStone,
      globalThis.data.source.buildingResearchLevelsCrystal,
      globalThis.data.source.buildingResearchLevelsLeaf,
    ];
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

  ResearchLevel(kind: ResourceKind) {
    // console.log(this.researchLevels[kind]);

    return this.researchLevels[kind][this.kind];
  }
}
