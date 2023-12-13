import { MultiplierInfo } from "../../../Multiplier";
import { SuperDungeonPowerup } from "../SuperDungeonPowerup";
import { SuperDungeonController } from "../SuperDungeonController";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SuperDungeonPowerupKind } from "../../../type/SuperDungeonPowerupKind";

export class SDP_SkillHitCount extends SuperDungeonPowerup {
  get kind() {
    return SuperDungeonPowerupKind.SkillHitCount;
  }

  constructor(ctrl: SuperDungeonController) {
    super(ctrl);
  }

  RankCost(rank) {
    return 3 + 3 * rank;
  }

  get unlockDungeonCoinCost() {
    return 50000.0;
  }

  Cost(level) {
    return 50.0 * Math.pow(2.0, level);
  }

  SetEffect() {
    // console.log(this.EffectValue(), this.kind, this.sdgCtrl.powerupEffectMultiplier[this.kind]);

    globalThis.data.skill.extraSkillHitCount[this.heroKind].RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.DungeonItem, MultiplierType.Add, () => this.EffectValue() * this.level)
    );
  }

  SetGlobalEffect() {
    for (let index = 0; index < globalThis.data.skill.skillLevelBonus.length; index++)
      globalThis.data.skill.skillLevelBonus[index].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.DungeonItemPermanent,
          MultiplierType.After,
          () => this.PermanentEffectValue(),
          () => this.isUnlocked
        )
      );
  }

  get baseInitEffectValue() {
    return 1.0;
  }

  get baseIncrementEffectValuePerRank() {
    return 0.25;
  }

  get basePermEffect() {
    return 0.5;
  }
}
