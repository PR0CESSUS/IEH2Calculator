import { MultiplierInfo } from "../../Multiplier";
import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";
import { SuperDungeonController } from "../SuperDungeonController";
import { SuperDungeonPowerup } from "../SuperDungeonPowerup";

export class SDP_DodgeHeal extends SuperDungeonPowerup {
  get kind() {
    return SuperDungeonPowerupKind.DodgeHeal;
  }

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  Cost(level) {
    return 25.0 * Math.pow(2.0, level);
  }

  RankCost(rank) {
    return 2 + 2 * rank;
  }

  get unlockDungeonCoinCost() {
    return 100.0;
  }

  SetEffect() {
    return this.ctrl.dodgeHealPercent.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.DungeonItem,
        MultiplierType.Add,
        () => this.EffectValue() * this.level,
        () => {
          this.isActive();
        }
      )
    );
  }

  SetGlobalEffect() {
    this.ctrl.data.stats.SetEffectBasicStats(
      BasicStatsKind.MP,
      new MultiplierInfo(
        MultiplierKind.DungeonItemPermanent,
        MultiplierType.After,
        () => this.PermanentEffectValue(),
        () => this.isUnlocked
      )
    );
  }

  get baseInitEffectValue() {
    return 0.01;
  }

  get baseIncrementEffectValuePerRank() {
    return 0.001;
  }

  get basePermEffect() {
    return 2.0;
  }
}
