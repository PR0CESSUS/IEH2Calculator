import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { BuildingKind } from "../../type/BuildingKind";
import { ResourceKind } from "../../type/ResourceKind";
import { BUILDING } from "./BUILDING";

export class AlchemistsHut extends BUILDING {
  kind = BuildingKind.AlchemistsHut;

  EffectValue() {
    return this.Level() * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
  }

  SetResearch() {
    globalThis.data.alchemy.mysteriousWaterProductionPerSec.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Stone) * 0.01)
    );
    globalThis.data.alchemy.catalyst.essenceProductionMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Crystal) * 0.01)
    );
    globalThis.data.alchemy.maxMysteriousWaterExpandedCapNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Leaf) * 5));
  }
}
