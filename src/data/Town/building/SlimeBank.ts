import { MultiplierInfo } from "@/Data/Multiplier";
import { BUILDING } from "../BUILDING";
import { MultiplierKind } from "@/type/MultiplierKind";
import { MultiplierType } from "@/type/MultiplierType";
import { ResourceKind } from "@/type/ResourceKind";
import { BuildingKind } from "@/type/BuildingKind";
import { DATA } from "@/Data";
import { Util } from "@/Util";

export class SlimeBank extends BUILDING {
  constructor(DATA: DATA) {
    super(DATA);
    this.kind = BuildingKind.SlimeBank;
  }

  EffectValue() {
    return this.Level() * 0.01 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[0].Value();
  }

  SetEffect() {}

  SetResearch() {
    this.data.resource.slimeCoinInterest.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => Math.min(0.2, this.ResearchLevel(ResourceKind.Stone) * 0.001 * this.ResearchMul(0)))
    );
    this.data.shop.restockNumMaterial.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Crystal) * this.ResearchMul(1))
    );
    this.data.resource.slimeCoinCap.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.02 * this.ResearchMul(2))
    );
    this.data.stats
      .GoldGain()
      .RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => Math.max((this.ResearchLevel(ResourceKind.Stone) * 0.001 * this.ResearchMul(0) - 0.2) * 5.0, 0.0))
      );
  }

  ResearchEffectString(kind: ResourceKind) {
    switch (kind) {
      case ResourceKind.Stone:
        return `Grants interest on currently held Slime Coin every 10 minutes : ${Util.percent(
          Math.min(0.2, this.ResearchLevel(ResourceKind.Stone) * 0.001 * this.ResearchMul(0))
        )} (Gold Gain Multiplier + ${Util.percent(Math.max((this.ResearchLevel(ResourceKind.Stone) * 0.001 * this.ResearchMul(0) - 0.2) * 5.0, 0.0))})`;
      case ResourceKind.Crystal:
        return `Restock amount of materials in Shop + ${Util.tDigit(this.ResearchLevel(ResourceKind.Crystal) * this.ResearchMul(1), 0)}`;
      case ResourceKind.Leaf:
        return `Multiply Slime Coin Cap by ${Util.percent(this.ResearchLevel(ResourceKind.Leaf) * 0.02 * this.ResearchMul(2) + 1)}`;
    }
  }

  LevelEffectString() {}
}
