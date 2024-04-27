import { Enums } from "../../../Enums";
import { MultiplierInfo } from "../../Multiplier";
import { MonsterSpecies } from "../../../type/MonsterSpecies";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";
import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";

export class SDU_DamageToChallengeBossMultiplier extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.DamageToChallengeBossMultiplier;
  }
  ó;

  Cost(level) {
    return (10000 + 10000 * level) * Math.pow(2.0, level / 5.0);
  }

  SetEffect() {
    for (let index = 0; index < Enums.HeroKind; index++)
      this.sdgCtrl.data.stats
        .MonsterDamage(index, MonsterSpecies.ChallengeBoss)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, () => this.EffectValue()));
  }

  get maxLevel() {
    return 1000;
  }

  get initEffectValue() {
    return 0.0;
  }

  get incrementEffectValuePerLevel() {
    return 0.025;
  }
}
