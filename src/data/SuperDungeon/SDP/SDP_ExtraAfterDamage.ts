import { MultiplierInfo } from "../../../Multiplier";
import { Enums } from "../../../Enums";
import { SuperDungeonPowerup  } from "../SuperDungeonPowerup";
import { SuperDungeonController  } from "../SuperDungeonController";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";


export class SDP_ExtraAfterDamage extends SuperDungeonPowerup {
  get kind() {return SuperDungeonPowerupKind.ExtraAfterDamage;}

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  RankCost(rank) {return (5 + 5 * rank);}

  get unlockDungeonCoinCost() {return 100000.0;}

  Cost(level) {return (25 + 25 * level) + 25.0 * (Math.pow(10.0, level / 10.0) - 1.0);}

  SetEffect() {return globalThis.data.stats.Hero(this.heroKind).extraAfterDamage.RegisterMultiplier(new MultiplierInfo(MultiplierKind.DungeonItem, MultiplierType.Add, (() => this.EffectValue() * this.level)));}

  SetGlobalEffect() {
    for (let kind = 0; kind < Enums.HeroKind; kind++)
      globalThis.data.stats.Hero(kind).extraAfterDamage.RegisterMultiplier(new MultiplierInfo(MultiplierKind.DungeonItemPermanent, MultiplierType.Add, (() => this.PermanentEffectValue()), (() => this.isUnlocked)));
  }

  get baseInitEffectValue() {return 0.25;}

  get baseIncrementEffectValuePerRank() {return 0.25;}

  get basePermEffect() {return 0.001;}

  
}
