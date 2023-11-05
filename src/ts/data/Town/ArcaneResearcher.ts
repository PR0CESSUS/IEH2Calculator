import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { BuildingKind } from "../../type/BuildingKind";
import { ResourceKind } from "../../type/ResourceKind";
import { BUILDING } from "./BUILDING";

export class ArcaneResearcher extends BUILDING {
  kind = BuildingKind.ArcaneResearcher;

  EffectValue() {
    return this.Level() * 0.05 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
  }

  SetResearch() {
    this.townCtrl.researchPower[0].RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Stone) * 0.05));
    this.townCtrl.researchPower[1].RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Crystal) * 0.05));
    this.townCtrl.researchPower[2].RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.05));
  }
}
