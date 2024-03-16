import { MultiplierInfo } from "@/Data/Multiplier";
import { BUILDING } from "../BUILDING";
import { MultiplierKind } from "@/type/MultiplierKind";
import { MultiplierType } from "@/type/MultiplierType";
import { ResourceKind } from "@/type/ResourceKind";
import { BuildingKind } from "@/type/BuildingKind";
import { DATA } from "@/Data";
import { Util } from "@/Util";

export class ArcaneResearcher extends BUILDING {
  constructor(DATA: DATA) {
    super(DATA);
    this.kind = BuildingKind.ArcaneResearcher;
  }

  EffectValue() {
    return this.Level() * 0.05 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
  }

  SetEffect() {}

  SetResearch() {
    this.townCtrl.researchPower[0].RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Stone) * 0.05 * this.ResearchMul(0))
    );
    this.townCtrl.researchPower[1].RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Crystal) * 0.05 * this.ResearchMul(1))
    );
    this.townCtrl.researchPower[2].RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.05 * this.ResearchMul(2))
    );
  }

  ResearchEffectString(kind: ResourceKind) {
    switch (kind) {
      case ResourceKind.Stone:
        return `Stone Research Power + ${Util.percent(this.ResearchLevel(ResourceKind.Stone) * 0.05 * this.ResearchMul(0))}`;
      case ResourceKind.Crystal:
        return `Crystal Research Power + ${Util.percent(this.ResearchLevel(ResourceKind.Crystal) * 0.05 * this.ResearchMul(1))}`;
      case ResourceKind.Leaf:
        return `Leaf Research Power + ${Util.percent(this.ResearchLevel(ResourceKind.Leaf) * 0.05 * this.ResearchMul(2))}`;
    }
  }

  LevelEffectString() {}
}
