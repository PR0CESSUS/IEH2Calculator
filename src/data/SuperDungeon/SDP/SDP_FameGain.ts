import { Enums } from "../../../Enums";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";
import { SuperDungeonController } from "../SuperDungeonController";
import { SuperDungeonPowerup } from "../SuperDungeonPowerup";

export class SDP_FameGain extends SuperDungeonPowerup {
  get kind() {
    return SuperDungeonPowerupKind.FameGain;
  }

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  Cost(level) {
    return 100.0 * Math.pow(10.0, level / 5.0);
  }

  RankCost(rank) {
    return 3 + 3 * rank;
  }

  get unlockDungeonCoinCost() {
    return 10000.0;
  }

  SetEffect() {
    return this.ctrl.data.superStats.Hero(this.heroKind).fameGain.RegisterMultiplier(
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
      this.ctrl.data.superStats.Hero(index).fameGain.RegisterMultiplier(
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
    return 0.005;
  }

  get basePermEffect() {
    return 0.001;
  }
}
