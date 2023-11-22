import { MultiplierInfo } from "../../../Multiplier";
import { SuperDungeonShop_StatBonus  } from "../SuperDungeonShop_StatBonus";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";


export class SDS_StatBonus_GuildEXPGain extends SuperDungeonShop_StatBonus {
  constructor(id) {
    super(id)
  }
  RubyCost(level) {return 10.0;}

  get maxLevel() {return 1000;}

  EffectValue(level) {return 0.01 * level;}

  SetEffect() {return globalThis.data.stats.SetEffectGuildExp(new MultiplierInfo(MultiplierKind.SDShop, MultiplierType.Mul, (() => this.effectValue)));}
}
