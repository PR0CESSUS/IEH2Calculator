import { MultiplierInfo } from "@/Data/Multiplier";
import { Util } from "@/Util";
import { BuildingKind } from "@/type/BuildingKind";
import { MultiplierKind } from "@/type/MultiplierKind";
import { MultiplierType } from "@/type/MultiplierType";
import { ResourceKind } from "@/type/ResourceKind";
import { BUILDING } from "../BUILDING";

export class AlchemistsHut extends BUILDING {
  get kind() {
    return BuildingKind.AlchemistsHut;
  }
  EffectValue() {
    return this.Level() * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
  }

  SetEffect() {}

  SetResearch() {
    this.data.alchemy.mysteriousWaterProductionPerSec.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Stone) * 0.01 * this.ResearchMul(0))
    );
    this.data.alchemy.catalyst.essenceProductionMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Crystal) * 0.01 * this.ResearchMul(1))
    );
    this.data.alchemy.maxMysteriousWaterExpandedCapNum.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Leaf) * 5 * this.ResearchMul(2))
    );
  }

  ResearchEffectString(kind: ResourceKind) {
    switch (kind) {
      case ResourceKind.Stone:
        return `Mysterious Water Gain + ${Util.tDigit(this.ResearchLevel(ResourceKind.Stone) * 0.01 * this.ResearchMul(0))} / sec`;
      case ResourceKind.Crystal:
        return `Essence Conversion Rate + ${Util.percent(this.ResearchLevel(ResourceKind.Crystal) * 0.01 * this.ResearchMul(1))}`;
      case ResourceKind.Leaf:
        return `Max Mysterious Water Cap + ${Util.tDigit(this.ResearchLevel(ResourceKind.Leaf) * 5 * this.ResearchMul(2), 0)}`;
    }
  }

  LevelEffectString() {}
}
