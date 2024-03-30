import { MultiplierInfo } from "@/Data/Multiplier";
import { Util } from "@/Util";
import { BuildingKind } from "@/type/BuildingKind";
import { MultiplierKind } from "@/type/MultiplierKind";
import { MultiplierType } from "@/type/MultiplierType";
import { ResourceKind } from "@/type/ResourceKind";
import { Stats } from "@/type/Stats";
import { BUILDING } from "../BUILDING";

export class Trapper extends BUILDING {
  get kind() {
    return BuildingKind.Trapper;
  }
  EffectValue() {
    return this.Level() * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
  }

  SetEffect() {}

  SetResearch() {
    this.data.monster.colorMaterialDropChance.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Stone) * 2e-5 * this.ResearchMul(0))
    );
    this.data.shop.restockNumTrap.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Crystal) * this.ResearchMul(1))
    );
    this.data.stats.SetEffectStats(
      Stats.TamingPointGain,
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.02 * this.ResearchMul(2))
    );
  }

  ResearchEffectString(kind: ResourceKind) {
    switch (kind) {
      case ResourceKind.Stone:
        return `Rare Material Drop Chance + ${Util.percent(this.ResearchLevel(ResourceKind.Stone) * 2e-5 * this.ResearchMul(0), 4)}`;
      case ResourceKind.Crystal:
        return `Restock amount of traps in Shop + ${Util.tDigit(this.ResearchLevel(ResourceKind.Crystal) * this.ResearchMul(1), 0)}`;
      case ResourceKind.Leaf:
        return `Multiply Taming Point Gain by ${Util.percent(this.ResearchLevel(ResourceKind.Leaf) * 0.02 * this.ResearchMul(2) + 1)}`;
    }
  }

  LevelEffectString() {}
}
