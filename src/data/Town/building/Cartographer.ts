import { MultiplierInfo } from "@/Data/Multiplier";
import { BUILDING } from "../BUILDING";
import { MultiplierKind } from "@/type/MultiplierKind";
import { MultiplierType } from "@/type/MultiplierType";
import { ResourceKind } from "@/type/ResourceKind";
import { BuildingKind } from "@/type/BuildingKind";
import { DATA } from "@/Data";
import { Stats } from "@/type/Stats";
import { Util } from "@/Util";

export class Cartographer extends BUILDING {
  constructor(DATA: DATA) {
    super(DATA);
    this.kind = BuildingKind.Cartographer;
  }

  EffectValue() {
    return this.Level() * 0.2 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[1].Value();
  }

  SetEffect() {}

  SetResearch() {
    // for (let index = 0; index < this.data.area.dungeonList.length; index++)
    //   this.data.area.dungeonList[index].addLimitTime.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, (() => (this.ResearchLevel(ResourceKind.Stone) * 5) * this.ResearchMul(ResourceKind.Stone))));
    this.data.area.areaDebuffReduction.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () =>
        Math.min(0.9, this.ResearchLevel(ResourceKind.Crystal) * (3.0 / 400.0) * this.ResearchMul(ResourceKind.Crystal))
      )
    );
    this.data.area.townMaterialGainBonus.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Leaf) * this.ResearchMul(ResourceKind.Leaf))
    );
    this.data.stats.SetEffectStats(
      Stats.DebuffRes,
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () =>
        Math.max((this.ResearchLevel(ResourceKind.Crystal) * (3.0 / 400.0) * this.ResearchMul(ResourceKind.Crystal) - 0.9) * 1.0, 0.0)
      )
    );
  }

  ResearchEffectString(kind: ResourceKind) {
    switch (kind) {
      case ResourceKind.Stone:
        return `Dungeon's Time Limit + ${Util.tDigit(this.ResearchLevel(ResourceKind.Stone) * 5 * this.ResearchMul(ResourceKind.Stone), 0)} sec`;
      case ResourceKind.Crystal:
        return `Reduce Field Debuff effect by ${Util.percent(
          Math.min(0.9, this.ResearchLevel(ResourceKind.Crystal) * (3.0 / 400.0) * this.ResearchMul(ResourceKind.Crystal))
        )} (Debuff Resistance + ${Util.percent(Math.max((this.ResearchLevel(ResourceKind.Crystal) * (3.0 / 400.0) * this.ResearchMul(ResourceKind.Crystal) - 0.9) * 1.0, 0.0))})`;
      case ResourceKind.Leaf:
        return `Town Material Gain from clearing areas ${Util.tDigit(this.ResearchLevel(ResourceKind.Leaf) * this.ResearchMul(ResourceKind.Leaf), 0)}`;
    }
  }

  LevelEffectString() {}
}
