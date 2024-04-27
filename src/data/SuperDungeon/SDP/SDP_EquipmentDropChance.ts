import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonPowerup } from "../SuperDungeonPowerup";
import { SuperDungeonController } from "../SuperDungeonController";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { Stats } from "../../../type/Stats";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";

export class SDP_EquipmentDropChance extends SuperDungeonPowerup {
  get kind() {
    return SuperDungeonPowerupKind.EquipmentDropChance;
  }

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  RankCost(rank) {
    return 5 + 5 * rank;
  }

  get unlockDungeonCoinCost() {
    return 100000.0;
  }

  Cost(level) {
    return 200 + 200 * level + 200.0 * (Math.pow(2.0, level) - 1.0);
  }

  SetEffect() {
    return this.ctrl.data.stats.HeroStats(this.heroKind, Stats.EquipmentDropChance).RegisterMultiplier(
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
      Stats.ArtifactProficiencyGain,
      new MultiplierInfo(
        MultiplierKind.DungeonItemPermanent,
        MultiplierType.Add,
        () => this.PermanentEffectValue(),
        () => this.isUnlocked
      )
    );
  }

  get baseInitEffectValue() {
    return 0.001;
  }

  get baseIncrementEffectValuePerRank() {
    return 0.0001;
  }

  get basePermEffect() {
    return 0.005;
  }
}
