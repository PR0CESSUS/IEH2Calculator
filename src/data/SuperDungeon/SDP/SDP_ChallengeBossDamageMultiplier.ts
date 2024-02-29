import { Enums } from "../../../Enums";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";
import { SuperDungeonController } from "../SuperDungeonController";
import { SuperDungeonPowerup } from "../SuperDungeonPowerup";

export class SDP_ChallengeBossDamageMultiplier extends SuperDungeonPowerup {
  get kind() {
    return SuperDungeonPowerupKind.ChallengeBossDamageMultiplier;
  }

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  Cost(level) {
    return 50 + 50 * level + 50.0 * (Math.pow(10.0, level / 10.0) - 1.0);
  }

  RankCost(rank) {
    return 4 + 4 * rank;
  }

  get unlockDungeonCoinCost() {
    return 75000.0;
  }

  SetEffect() {
    return this.ctrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
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
      this.ctrl.data.battles[index].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.DungeonItemPermanent,
          MultiplierType.Mul,
          () => this.PermanentEffectValue(),
          () => this.isUnlocked
        )
      );
  }

  get baseInitEffectValue() {
    return 0.1;
  }

  get baseIncrementEffectValuePerRank() {
    return 0.1;
  }

  get basePermEffect() {
    return 0.01;
  }
}
