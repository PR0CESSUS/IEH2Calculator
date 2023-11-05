import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { BuildingKind } from "../../type/BuildingKind";
import { ResourceKind } from "../../type/ResourceKind";
import { BUILDING } from "./BUILDING";

export class AdventuringParty extends BUILDING {
  kind = BuildingKind.AdventuringParty;

  constructor() {
    super();
  }

  EffectValue() {
    return this.Level() * 0.005 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
  }
  SetEffect() {
    globalThis.data.expedition.speedMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, () => this.EffectValue()));
  }
  SetResearch() {
    globalThis.data.expedition.rewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Stone) * 0.01));
    globalThis.data.expedition.expGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Crystal) * 0.05));
    globalThis.data.expedition.petExpGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.1));
  }
}
