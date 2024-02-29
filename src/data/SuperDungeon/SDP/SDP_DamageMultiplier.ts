import { Enums } from "../../../Enums";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";
import { SuperDungeonController } from "../SuperDungeonController";
import { SuperDungeonPowerup } from "../SuperDungeonPowerup";

export class SDP_DamageMultiplier extends SuperDungeonPowerup {
  get kind() {
    return SuperDungeonPowerupKind.DamageMultiplier;
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
    this.ctrl.damageMultiplier.RegisterMultiplier(
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
      this.ctrl.data.battles[index].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
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
