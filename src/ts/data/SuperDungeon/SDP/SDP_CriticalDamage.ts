import { MultiplierInfo } from "../../../Multiplier";
import { SuperDungeonPowerup } from "../SuperDungeonPowerup";
import { SuperDungeonController } from "../SuperDungeonController";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { Stats } from "../../../type/Stats";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";

export class SDP_CriticalDamage extends SuperDungeonPowerup {
  get kind() {
    return SuperDungeonPowerupKind.CriticalDamage;
  }

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  RankCost(rank) {
    return 1 + rank;
  }

  get unlockDungeonCoinCost() {
    return 500.0;
  }

  Cost(level) {
    return 10 + 10 * level + 10.0 * (Math.pow(5.0, level / 10.0) - 1.0);
  }

  SetEffect() {
    // console.log(this.heroKind);

    globalThis.data.stats
      .HeroStats(this.heroKind, Stats.CriticalDamage)
      .RegisterMultiplier(new MultiplierInfo(MultiplierKind.DungeonItem, MultiplierType.After, () => this.EffectValue() * this.level));
  }

  SetGlobalEffect() {
    globalThis.data.stats.SetEffectStats(
      Stats.CriticalDamage,
      new MultiplierInfo(
        MultiplierKind.DungeonItemPermanent,
        MultiplierType.Mul,
        () => this.PermanentEffectValue(),
        () => this.isUnlocked
      )
    );
  }

  get baseInitEffectValue() {
    return 0.5;
  }

  get baseIncrementEffectValuePerRank() {
    return 0.25;
  }

  get basePermEffect() {
    return 0.01;
  }
}
