import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { BuildingKind } from "../../type/BuildingKind";
import { ResourceKind } from "../../type/ResourceKind";
import { BUILDING } from "./BUILDING";

export class Blacksmith extends BUILDING {
  kind = BuildingKind.Blacksmith;

  get EffectValue() {
    return this.Level() * 0.005 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[0].Value();
  }
  SetEffect() {
    globalThis.data.equipment.effectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, () => this.EffectValue));
  }
  SetResearch() {
    globalThis.data.equipment.autoDisassembleAvailableNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Stone) * 2));
    globalThis.data.equipment.disassembleMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Crystal) * 0.05));
    globalThis.data.craft.costReduction.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => Math.min(0.9, this.ResearchLevel(ResourceKind.Leaf) * (3.0 / 400.0)))
    );
  }
}
