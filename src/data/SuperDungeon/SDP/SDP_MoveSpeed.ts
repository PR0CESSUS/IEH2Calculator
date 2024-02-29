import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonPowerup } from "../SuperDungeonPowerup";
import { SuperDungeonController } from "../SuperDungeonController";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { Stats } from "../../../type/Stats";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";

export class SDP_MoveSpeed extends SuperDungeonPowerup {
  get kind() {
    return SuperDungeonPowerupKind.MoveSpeed;
  }

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  RankCost(rank) {
    return 1 + rank;
  }

  Cost(level) {
    return 25 + 25 * level + 25.0 * (Math.pow(10.0, level / 5.0) - 1.0);
  }

  SetEffect() {
    return this.ctrl.data.stats.HeroStats(this.heroKind, Stats.MoveSpeed).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.DungeonItem,
        MultiplierType.After,
        () => this.EffectValue() * this.level,
        () => this.isActive()
      )
    );
  }

  SetGlobalEffect() {
    this.ctrl.data.stats.SetEffectStats(
      Stats.MoveSpeed,
      new MultiplierInfo(
        MultiplierKind.DungeonItemPermanent,
        MultiplierType.After,
        () => this.PermanentEffectValue(),
        () => this.isUnlocked
      )
    );
  }

  get baseInitEffectValue() {
    return 50.0;
  }

  get baseIncrementEffectValuePerRank() {
    return 10.0;
  }

  get basePermEffect() {
    return 0.1;
  }

  get basePermEffectMaxValue() {
    return 1000.0;
  }
}
