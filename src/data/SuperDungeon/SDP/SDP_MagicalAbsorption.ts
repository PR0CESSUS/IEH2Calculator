import { MultiplierInfo } from "../../Multiplier";
import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { Element } from "../../../type/Element";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";
import { SuperDungeonController } from "../SuperDungeonController";
import { SuperDungeonPowerup } from "../SuperDungeonPowerup";

export class SDP_MagicalAbsorption extends SuperDungeonPowerup {
  get kind() {
    return SuperDungeonPowerupKind.MagicalAbsorption;
  }

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  RankCost(rank) {
    return 1 + rank;
  }

  get unlockDungeonCoinCost() {
    return 2000.0;
  }

  Cost(level) {
    return 25 + 25 * level + 25.0 * (Math.pow(10.0, level / 10.0) - 1.0);
  }

  SetEffect() {
    this.ctrl.data.stats.ElementAbsorption(this.heroKind, Element.Fire).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.DungeonItem,
        MultiplierType.After,
        () => this.EffectValue() * this.level,
        () => {
          this.isActive();
        }
      )
    );
    this.ctrl.data.stats.ElementAbsorption(this.heroKind, Element.Ice).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.DungeonItem,
        MultiplierType.After,
        () => this.EffectValue() * this.level,
        () => {
          this.isActive();
        }
      )
    );
    this.ctrl.data.stats.ElementAbsorption(this.heroKind, Element.Thunder).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.DungeonItem,
        MultiplierType.After,
        () => this.EffectValue() * this.level,
        () => {
          this.isActive();
        }
      )
    );
    this.ctrl.data.stats.ElementAbsorption(this.heroKind, Element.Light).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.DungeonItem,
        MultiplierType.After,
        () => this.EffectValue() * this.level,
        () => {
          this.isActive();
        }
      )
    );
    this.ctrl.data.stats.ElementAbsorption(this.heroKind, Element.Dark).RegisterMultiplier(
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
    this.ctrl.data.stats.SetEffectBasicStats(
      BasicStatsKind.MDEF,
      new MultiplierInfo(
        MultiplierKind.DungeonItemPermanent,
        MultiplierType.After,
        () => this.PermanentEffectValue(),
        () => this.isUnlocked
      )
    );
  }

  get baseInitEffectValue() {
    return 0.01;
  }

  get baseIncrementEffectValuePerRank() {
    return 0.0005;
  }

  get basePermEffect() {
    return 1.0;
  }
}
