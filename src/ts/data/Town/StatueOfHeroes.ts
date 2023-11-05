import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { BuildingKind } from "../../type/BuildingKind";
import { ResourceKind } from "../../type/ResourceKind";
import { BUILDING } from "./BUILDING";

export class StatueOfHeroes extends BUILDING {
  kind = BuildingKind.StatueOfHeroes;

  EffectValue() {
    return this.Level() * 0.05 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[0].Value();
  }

  SetResearch() {
    globalThis.data.stats.SetEffectResourceGain(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Stone) * 0.1));
    globalThis.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Crystal) * 0.05));
    this.townCtrl.levelCostReduction.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => Math.min(0.9, this.ResearchLevel(ResourceKind.Leaf) * (3.0 / 400.0)))
    );
  }
}
