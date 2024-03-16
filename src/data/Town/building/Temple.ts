import { MultiplierInfo } from "@/Data/Multiplier";
import { BUILDING } from "../BUILDING";
import { MultiplierKind } from "@/type/MultiplierKind";
import { MultiplierType } from "@/type/MultiplierType";
import { ResourceKind } from "@/type/ResourceKind";
import { BuildingKind } from "@/type/BuildingKind";
import { DATA } from "@/Data";
import { Stats } from "@/type/Stats";
import { Util } from "@/Util";

export class Temple extends BUILDING {
  constructor(DATA: DATA) {
    super(DATA);
    this.kind = BuildingKind.Temple;
  }

  EffectValue() {
    return this.Level() * 0.01 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[1].Value();
  }

  SetEffect() {
    this.data.rebirth.SetPointMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, () => this.EffectValue()));
  }

  SetResearch() {
    this.data.blessingInfo.SetEffectMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Stone) * 0.025 * this.ResearchMul(0))
    );
    this.data.blessingInfo.duration.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Crystal) * 5 * this.ResearchMul(1))
    );
    this.data.rebirth.requiredHeroLevelReduction.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => Math.min(100.0, this.ResearchLevel(ResourceKind.Leaf) * this.ResearchMul(2)))
    );
    this.data.stats.SetEffectStats(
      Stats.ExpGain,
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => Math.max((this.ResearchLevel(ResourceKind.Leaf) * this.ResearchMul(2) - 100.0) * 0.01, 0.0))
    );
  }

  ResearchEffectString(kind: ResourceKind) {
    switch (kind) {
      case ResourceKind.Stone:
        return `Blessing Effect + ${Util.percent(this.ResearchLevel(ResourceKind.Stone) * 0.025 * this.ResearchMul(0))}`;
      case ResourceKind.Crystal:
        return `Blessing's duration + ${Util.tDigit(this.ResearchLevel(ResourceKind.Crystal) * 5 * this.ResearchMul(1), 0)} sec`;
      case ResourceKind.Leaf:
        return `Rebirth's level requirements - ${Util.tDigit(
          Math.min(100.0, this.ResearchLevel(ResourceKind.Leaf) * this.ResearchMul(2)),
          0
        )} (EXP Gain Multiplier + ${Util.percent(Math.max((this.ResearchLevel(ResourceKind.Leaf) * this.ResearchMul(2) - 100.0) * 0.01, 0.0))})`;
    }
  }

  LevelEffectString() {}
}
