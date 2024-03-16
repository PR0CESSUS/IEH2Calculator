import { MultiplierInfo } from "@/Data/Multiplier";
import { BUILDING } from "../BUILDING";
import { MultiplierKind } from "@/type/MultiplierKind";
import { MultiplierType } from "@/type/MultiplierType";
import { ResourceKind } from "@/type/ResourceKind";
import { BuildingKind } from "@/type/BuildingKind";
import { DATA } from "@/Data";
import { Util } from "@/Util";

export class AdventuringParty extends BUILDING {
  constructor(DATA: DATA) {
    super(DATA);
    this.kind = BuildingKind.AdventuringParty;
  }

  EffectValue() {
    return this.Level() * 0.005 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
  }

  SetEffect() {
    this.data.expedition.speedMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, () => this.EffectValue()));
  }

  SetResearch() {
    this.data.expedition.rewardMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Stone) * 0.01 * this.ResearchMul(0))
    );
    this.data.expedition.expGainMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Crystal) * 0.05 * this.ResearchMul(1))
    );
    this.data.expedition.petExpGainMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.1 * this.ResearchMul(2))
    );
  }

  ResearchEffectString(kind: ResourceKind) {
    switch (kind) {
      case ResourceKind.Stone:
        return `Expedition Reward Amount + ${Util.percent(this.ResearchLevel(ResourceKind.Stone) * 0.01 * this.ResearchMul(0))}`;
      case ResourceKind.Crystal:
        return `Expedition EXP Gain + ${Util.percent(this.ResearchLevel(ResourceKind.Crystal) * 0.05 * this.ResearchMul(1))}`;
      case ResourceKind.Leaf:
        return `Expedition Pet EXP Gain + ${Util.percent(this.ResearchLevel(ResourceKind.Leaf) * 0.1 * this.ResearchMul(2))}`;
    }
  }

  LevelEffectString() {}
}
