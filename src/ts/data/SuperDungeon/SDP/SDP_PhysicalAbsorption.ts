import { MultiplierInfo } from "../../../Multiplier";
import { SuperDungeonPowerup  } from "../SuperDungeonPowerup";
import { SuperDungeonController  } from "../SuperDungeonController";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { Element } from "../../../type/Element";
import { Stats } from "../../../type/Stats";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";


export class SDP_PhysicalAbsorption extends SuperDungeonPowerup {
  get kind() {return SuperDungeonPowerupKind.PhysicalAbsorption;}

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  RankCost(rank) {return (1 + rank);}

  get unlockDungeonCoinCost() {return 2000.0;}

  Cost(level) {return (25 + 25 * level) + 25.0 * (Math.pow(10.0, level / 10.0) - 1.0);}

  SetEffect() {return globalThis.data.stats.ElementAbsorption(this.heroKind, Element.Physical).RegisterMultiplier(new MultiplierInfo(MultiplierKind.DungeonItem, MultiplierType.After, (() => this.EffectValue() * this.level)));}

  SetGlobalEffect() {globalThis.data.stats.SetEffectBasicStats(BasicStatsKind.DEF, new MultiplierInfo(MultiplierKind.DungeonItemPermanent, MultiplierType.After, (() => this.PermanentEffectValue()), (() => this.isUnlocked)));}

  get baseInitEffectValue() {return 0.01;}

  get baseIncrementEffectValuePerRank() {return 0.0005;}

  get basePermEffect() {return 1.0;}

  
}
