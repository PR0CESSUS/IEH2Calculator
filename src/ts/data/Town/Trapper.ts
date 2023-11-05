import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { BuildingKind } from "../../type/BuildingKind";
import { ResourceKind } from "../../type/ResourceKind";
import { Stats } from "../../type/Stats";
import { BUILDING } from "./BUILDING";

export class Trapper extends BUILDING {
  kind = BuildingKind.Trapper;

  EffectValue() {
    return this.Level() * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
  }

  SetResearch() {
    globalThis.data.monster.colorMaterialDropChance.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Stone) * 2e-5));
    globalThis.data.shop.restockNumTrap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Crystal)));
    globalThis.data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.02));
  }
}
