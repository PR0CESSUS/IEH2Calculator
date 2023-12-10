import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { BuildingKind } from "../../type/BuildingKind";
import { ResourceKind } from "../../type/ResourceKind";
import { BUILDING } from "./BUILDING";
import { Enums } from "../../Enums";
import { MonsterSpecies } from "../../type/MonsterSpecies";
export class MysticArena extends BUILDING {
  kind = BuildingKind.MysticArena;
  // constructor() {
  //   super();

  // }
  get EffectValue() {
    return this.Level() * 0.025 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[1].Value();
  }

  SetEffect(): void {
    for (let index = 0; index < Enums.HeroKind; index++) {
      globalThis.data.stats
        .MonsterDamage(index, MonsterSpecies.ChallengeBoss)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, () => this.EffectValue));
    }
  }

  SetResearch() {
    // console.log(globalThis.data.challenge);

    globalThis.data.inventory.equipInventoryUnlockedNum.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => this.ResearchLevel(ResourceKind.Stone))
    );
    globalThis.data.challenge.permanentRewardMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Crystal) * 0.025)
    );
    globalThis.data.alchemy.alchemyPointGainMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.025)
    );
  }
}
