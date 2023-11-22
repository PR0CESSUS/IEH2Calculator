import { MultiplierInfo } from "../../../Multiplier";
import { SuperDungeonUpgrade  } from "../SuperDungeonUpgrade";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";


export class SDU_GuildExpMultiplier extends SuperDungeonUpgrade {
  get kind() {return SuperDungeonUpgradeKind.GuildEXPGainMul;}

  
  Cost(level) {return (10000 + 10000 * level) * Math.pow(2.0, level / 5.0);}

  SetEffect() {return globalThis.data.stats.SetEffectGuildExp(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));}

  get maxLevel() {return 1000;}

  get initEffectValue() {return 0.0;}

  get incrementEffectValuePerLevel() {return 0.001;}

}
