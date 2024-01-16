import { MultiplierInfo } from "../../../Multiplier";
import { Enums } from "../../../Enums";
import { SuperDungeonUpgrade  } from "../SuperDungeonUpgrade";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { MonsterSpecies } from "../../../type/MonsterSpecies";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";


export class SDU_DamageToChallengeBossMultiplier extends SuperDungeonUpgrade {
  get kind() {return SuperDungeonUpgradeKind.DamageToChallengeBossMultiplier;}

  
  Cost(level) {return (10000 + 10000 * level) * Math.pow(2.0, level / 5.0);}

  SetEffect() {
    for (let index = 0; index < Enums.HeroKind; index++)
      globalThis.data.stats.MonsterDamage(index, MonsterSpecies.ChallengeBoss).RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
  }

  get maxLevel() {return 1000;}

  get initEffectValue() {return 0.0;}

  get incrementEffectValuePerLevel() {return 0.025;}

}
