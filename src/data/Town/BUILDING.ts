import { DATA } from "..";
import { BuildingKind } from "../../type/BuildingKind";
import { Multiplier } from "../Multiplier";
import { DataTown } from ".";
import { Localization } from "../../localization";
import { ResourceKind } from "../../type/ResourceKind";
import { Research } from "./research";
import { BuildingPassiveEffect } from "./BuildingPassiveEffect";
import { BuildingLevel } from "./BuildingLevel";

export class BUILDING {
  data: DATA;
  townCtrl: DataTown;
  rank;
  level: BuildingLevel;
  levelBonus: Multiplier;
  research: Research[] = [];
  passiveEffectList: BuildingPassiveEffect[] = [];
  get kind() {
    return BuildingKind.Tavern;
  }
  constructor(DATA: DATA) {
    this.data = DATA;
    this.townCtrl = this.data.town;
    this.level = new BuildingLevel(DATA, this.kind);
    this.levelBonus = new Multiplier();
    this.research[0] = new Research(this, ResourceKind.Stone);
    this.research[1] = new Research(this, ResourceKind.Crystal);
    this.research[2] = new Research(this, ResourceKind.Leaf);
    this.SetEffect();
    this.SetResearch();
  }

  NameString() {
    return Localization.BuildingString(this.kind);
  }

  Rank() {
    return this.rank.value;
  }
  ResearchLevel(kind: ResourceKind) {
    return this.research[kind].level;
  }

  ResearchMul(kind: ResourceKind) {
    return this.research[kind].researchMul;
  }

  Level() {
    return this.level.value + this.levelBonus.Value();
  }

  MaxLevel(rank) {
    return 20 * rank;
  }
  EffectValue() {
    return 0;
  }

  EffectValueString() {
    let value = this.EffectValue();
    if (this.kind == BuildingKind.Blacksmith || this.kind == BuildingKind.AdventuringParty || this.kind == BuildingKind.Dojo) value++;
    return Localization.BuildingEffectString(this.kind, value);
  }
  SetCost() {}

  SetEffect() {}
  SetResearch() {}
  ResearchEffectString(kind: ResourceKind) {
    return "Not Implemented";
  }
}
