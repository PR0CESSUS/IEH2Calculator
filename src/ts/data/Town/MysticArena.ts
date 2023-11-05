import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { BuildingKind } from "../../type/BuildingKind";
import { ResourceKind } from "../../type/ResourceKind";
import { BUILDING } from "./BUILDING";
export class MysticArena extends BUILDING {
  kind = BuildingKind.MysticArena;

  EffectValue() {
    return this.Level() * 0.025 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[1].Value();
  }

  SetResearch() {
    globalThis.data.inventory.equipInventoryUnlockedNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Stone)));
    globalThis.data.challenge.permanentRewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Crystal) * 0.025));
    globalThis.data.alchemy.alchemyPointGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.025));
  }
}
