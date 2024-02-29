import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonPowerup } from "../SuperDungeonPowerup";
import { SuperDungeonController } from "../SuperDungeonController";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";

export class SDP_RestoreDodgeTimesec extends SuperDungeonPowerup {
  get kind() {
    return SuperDungeonPowerupKind.RestoreDodgeTimesec;
  }

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  Cost(level) {
    return 10 + 10 * level + 10.0 * (Math.pow(10.0, level / 5.0) - 1.0);
  }

  RankCost(rank) {
    return 1 + rank;
  }

  SetEffect() {
    return this.ctrl.dodgeTimeRestoreSecEveryFloor.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.DungeonItem,
        MultiplierType.Add,
        () => this.EffectValue() * this.level,
        () => this.isActive()
      )
    );
  }

  SetGlobalEffect() {
    this.sdgCtrl.dodgeTimesec.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.DungeonItemPermanent,
        MultiplierType.Add,
        () => this.PermanentEffectValue(),
        () => this.isUnlocked
      )
    );
  }

  get baseInitEffectValue() {
    return 1.0;
  }

  get baseIncrementEffectValuePerRank() {
    return 0.1;
  }

  get basePermEffect() {
    return 0.1;
  }

  get basePermEffectMaxValue() {
    return 20.0;
  }
}
