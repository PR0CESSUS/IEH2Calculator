import { MultiplierInfo } from "../../../Multiplier";
import { SuperDungeonPowerup } from "../SuperDungeonPowerup";
import { SuperDungeonController } from "../SuperDungeonController";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { Stats } from "../../../type/Stats";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";

export class SDP_SkillCastSpeed extends SuperDungeonPowerup {
  get kind() {
    return SuperDungeonPowerupKind.SkillCastSpeed;
  }

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  RankCost(rank) {
    return 2 + 2 * rank;
  }

  get unlockDungeonCoinCost() {
    return 500.0;
  }

  Cost(level) {
    return 25.0 * Math.pow(2.0, level);
  }

  SetEffect() {
    return globalThis.data.skill.skillCastSpeedModifier[this.heroKind].RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.DungeonItem,
        MultiplierType.Add,
        () => this.EffectValue() * this.level,
        () => {
          return this.isActive();
        }
      )
    );
  }

  SetGlobalEffect() {
    globalThis.data.stats.SetEffectBasicStats(
      BasicStatsKind.SPD,
      new MultiplierInfo(
        MultiplierKind.DungeonItemPermanent,
        MultiplierType.After,
        () => this.PermanentEffectValue(),
        () => this.isUnlocked
      )
    );
  }

  get baseInitEffectValue() {
    return 0.1;
  }

  get baseIncrementEffectValuePerRank() {
    return 0.01;
  }

  get basePermEffect() {
    return 1.0;
  }
}
