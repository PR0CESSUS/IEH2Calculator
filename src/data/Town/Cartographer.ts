import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { BuildingKind } from "../../type/BuildingKind";
import { ResourceKind } from "../../type/ResourceKind";
import { BUILDING } from "./BUILDING";
export class Cartographer extends BUILDING {
  kind = BuildingKind.Cartographer;

  EffectValue() {
    return this.Level() * 0.05 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[1].Value();
  }

  SetResearch() {
    globalThis.data.area.areaDebuffReduction.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => Math.min(0.9, this.ResearchLevel(ResourceKind.Crystal) * (3.0 / 400.0)))
    );
    globalThis.data.area.townMaterialGainBonus.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Leaf)));
  }
}
