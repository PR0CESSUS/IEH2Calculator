import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonPowerup } from "../SuperDungeonPowerup";
import { SuperDungeonController } from "../SuperDungeonController";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";

export class SDP_DungeonCoinGain extends SuperDungeonPowerup {
  get kind() {
    return SuperDungeonPowerupKind.DungeonCoinGain;
  }

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  Cost(level) {
    return 50.0 * Math.pow(2.0, level);
  }

  RankCost(rank) {
    return 3 + 3 * rank;
  }

  get unlockDungeonCoinCost() {
    return 5000.0;
  }

  SetEffect() {
    return this.sdgCtrl.dungeonCoinBonus.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.DungeonItem,
        MultiplierType.Add,
        () => this.EffectValue() * this.level,
        () => this.isActive()
      )
    );
  }

  SetGlobalEffect() {
    this.sdgCtrl.dungeonCoinGain.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.DungeonItemPermanent,
        MultiplierType.Add,
        () => this.PermanentEffectValue(),
        () => this.isUnlocked
      )
    );
  }

  get baseInitEffectValue() {
    return 1.0;
  }

  get baseIncrementEffectValuePerRank() {
    return 0.1;
  }

  get basePermEffect() {
    return 0.001;
  }
}
