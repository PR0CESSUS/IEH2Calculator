import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { BuildingKind } from "../../type/BuildingKind";
import { ResourceKind } from "../../type/ResourceKind";
import { BUILDING } from "./BUILDING";

export class Temple extends BUILDING {
  kind = BuildingKind.Temple;

  EffectValue() {
    return this.Level() * 0.01 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[1].Value();
  }

  SetResearch() {
    globalThis.data.blessingInfo.SetEffectMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Stone) * 0.025));
    globalThis.data.blessingInfo.duration.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Crystal) * 5));
    globalThis.data.rebirth.requiredHeroLevelReduction.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Leaf)));
  }
}
