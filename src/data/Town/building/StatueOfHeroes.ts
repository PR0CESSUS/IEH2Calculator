import { MultiplierInfo } from "@/Data/Multiplier";
import { BUILDING } from "../BUILDING";
import { MultiplierKind } from "@/type/MultiplierKind";
import { MultiplierType } from "@/type/MultiplierType";
import { ResourceKind } from "@/type/ResourceKind";
import { BuildingKind } from "@/type/BuildingKind";
import { DATA } from "@/Data";
import { Util } from "@/Util";

export class StatueOfHeroes extends BUILDING {
  constructor(DATA: DATA) {
    super(DATA);
    this.kind = BuildingKind.StatueOfHeroes;
  }

  EffectValue() {
    return this.Level() * 0.2 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[0].Value();
  }

  SetEffect() {}

  SetResearch() {
    this.data.stats.SetEffectResourceGain(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Stone) * 0.1 * this.ResearchMul(ResourceKind.Stone))
    );
    this.data.resource.goldCap.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Crystal) * 0.05 * this.ResearchMul(ResourceKind.Crystal))
    );
    this.townCtrl.levelCostReduction.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () =>
        Math.min(0.9, this.ResearchLevel(ResourceKind.Leaf) * (3.0 / 400.0) * this.ResearchMul(ResourceKind.Leaf))
      )
    );
    for (let index = 0; index < this.data.monster.speciesMaterialDropChance.length; index++)
      this.data.monster.speciesMaterialDropChance[index].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () =>
          Math.max((this.ResearchLevel(ResourceKind.Leaf) * (3.0 / 400.0) * this.ResearchMul(ResourceKind.Leaf) - 0.9) * 1.0, 0.0)
        )
      );
  }

  ResearchEffectString(kind: ResourceKind) {
    switch (kind) {
      case ResourceKind.Stone:
        return `Resource Gain + ${Util.percent(this.ResearchLevel(ResourceKind.Stone) * 0.1 * this.ResearchMul(ResourceKind.Stone))}`;
      case ResourceKind.Crystal:
        return `Gold Cap + ${Util.percent(this.ResearchLevel(ResourceKind.Crystal) * 0.05 * this.ResearchMul(ResourceKind.Crystal))}`;
      case ResourceKind.Leaf:
        return `Reduce the cost of all building levels by ${Util.percent(
          Math.min(0.9, this.ResearchLevel(ResourceKind.Leaf) * (3.0 / 400.0) * this.ResearchMul(ResourceKind.Leaf))
        )} (Common Material Drop Chance + ${Util.percent(
          Math.max((this.ResearchLevel(ResourceKind.Leaf) * (3.0 / 400.0) * this.ResearchMul(ResourceKind.Leaf) - 0.9) * 1.0, 0.0)
        )})`;
    }
  }

  LevelEffectString() {}
}
