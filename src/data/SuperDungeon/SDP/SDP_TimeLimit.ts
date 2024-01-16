import { MultiplierInfo } from "../../../Multiplier";
import { SuperDungeonPowerup  } from "../SuperDungeonPowerup";
import { SuperDungeonController  } from "../SuperDungeonController";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";


export class SDP_TimeLimit extends SuperDungeonPowerup {
  get kind() {return SuperDungeonPowerupKind.TimeLimit;}

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  Cost(level) {return (10 + 10 * level) + 10.0 * (Math.pow(10.0, level / 5.0) - 1.0);}

  RankCost(rank) {return (1 + rank);}

  

  SetGlobalEffect() {this.sdgCtrl.additionalTimeLimit.RegisterMultiplier(new MultiplierInfo(MultiplierKind.DungeonItemPermanent, MultiplierType.Add, () => this.PermanentEffectValue));}

  get baseInitEffectValue() {return 10.0;}

  get baseIncrementEffectValuePerRank() {return 2.0;}

  get basePermEffect() {return 0.5;}

  
}
