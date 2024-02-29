import { Enums } from "../../../Enums";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";
import { SuperDungeonController } from "../SuperDungeonController";
import { SuperDungeonPowerup } from "../SuperDungeonPowerup";

export class SDP_DamageCutMultiplier extends SuperDungeonPowerup {
  get kind() {
    return SuperDungeonPowerupKind.DamageCutMultiplier;
  }

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  Cost(level) {
    return 10 + 10 * level + 10.0 * (Math.pow(10.0, level / 10.0) - 1.0);
  }

  RankCost(rank) {
    return 1 + rank;
  }

  SetEffect() {
    return this.ctrl.damageCutMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.DungeonItem,
        MultiplierType.Add,
        () => this.EffectValue() * this.level,
        () => this.isActive()
      )
    );
  }

  SetGlobalEffect() {
    for (let index = 0; index < Enums.HeroKind; index++)
      this.ctrl.data.battles[index].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.DungeonItemPermanent,
          MultiplierType.Mul,
          () => this.PermanentEffectValue(),
          () => this.isUnlocked
        )
      );
  }

  get baseInitEffectValue() {
    return 0.05;
  }

  get baseIncrementEffectValuePerRank() {
    return 0.025;
  }

  get basePermEffect() {
    return 0.01;
  }
}
