import { MultiplierInfo } from "../../../Multiplier";
import { SuperDungeonPowerup } from "../SuperDungeonPowerup";
import { SuperDungeonController } from "../SuperDungeonController";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { Stats } from "../../../type/Stats";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";

export class SDP_Heal extends SuperDungeonPowerup {
  get kind() {
    return SuperDungeonPowerupKind.Heal;
  }

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  Cost(level) {
    return 10 + 10 * level + 10.0 * (Math.pow(2.0, level) - 1.0);
  }

  RankCost(rank) {
    return 1 + rank;
  }

  SetEffect() {
    return this.ctrl.healPercentEveryFloor.RegisterMultiplier(
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
    globalThis.data.stats.SetEffectBasicStats(
      BasicStatsKind.HP,
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
    return 0.0005;
  }

  get basePermEffect() {
    return 5.0;
  }
}
