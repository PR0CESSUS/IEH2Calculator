import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonPowerup } from "../SuperDungeonPowerup";
import { SuperDungeonController } from "../SuperDungeonController";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { Stats } from "../../../type/Stats";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";

export class SDP_MagicalCriticalChance extends SuperDungeonPowerup {
  get kind() {
    return SuperDungeonPowerupKind.MagicalCriticalChance;
  }

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  RankCost(rank) {
    return 1 + rank;
  }

  get unlockDungeonCoinCost() {
    return 200.0;
  }

  Cost(level) {
    return 25 + 25 * level + 10.0 * (Math.pow(2.0, level) - 1.0);
  }

  SetEffect() {
    return this.ctrl.data.stats.HeroStats(this.heroKind, Stats.MagCritChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.DungeonItem,
        MultiplierType.After,
        () => this.EffectValue() * this.level,
        () => {
          this.isActive();
        }
      )
    );
  }

  SetGlobalEffect() {
    this.ctrl.data.stats.SetEffectStats(
      Stats.MagCritChance,
      new MultiplierInfo(
        MultiplierKind.DungeonItemPermanent,
        MultiplierType.After,
        () => this.PermanentEffectValue(),
        () => this.isUnlocked
      )
    );
  }

  get baseInitEffectValue() {
    return 0.02;
  }

  get baseIncrementEffectValuePerRank() {
    return 0.001;
  }

  get basePermEffect() {
    return 0.0005;
  }
}
