import { MultiplierInfo } from "../../../Multiplier";
import { Enums } from "../../../Enums";
import { SuperDungeonUpgrade  } from "../SuperDungeonUpgrade";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { MonsterSpecies } from "../../../type/MonsterSpecies";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";


export class SDU_DamageToRegularMonstersMultiplier extends SuperDungeonUpgrade {
  get kind() {return SuperDungeonUpgradeKind.DamageToRegularMonstersMultiplier;}

  
  Cost(level) {return (5000 + 5000 * level) * Math.pow(2.0, level / 10.0);}

  SetEffect() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      globalThis.data.stats.MonsterDamage(index, MonsterSpecies.Slime).RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
      globalThis.data.stats.MonsterDamage(index, MonsterSpecies.MagicSlime).RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
      globalThis.data.stats.MonsterDamage(index, MonsterSpecies.Spider).RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
      globalThis.data.stats.MonsterDamage(index, MonsterSpecies.Bat).RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
      globalThis.data.stats.MonsterDamage(index, MonsterSpecies.Fairy).RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
      globalThis.data.stats.MonsterDamage(index, MonsterSpecies.Fox).RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
      globalThis.data.stats.MonsterDamage(index, MonsterSpecies.DevilFish).RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
      globalThis.data.stats.MonsterDamage(index, MonsterSpecies.Treant).RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
      globalThis.data.stats.MonsterDamage(index, MonsterSpecies.FlameTiger).RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
      globalThis.data.stats.MonsterDamage(index, MonsterSpecies.Unicorn).RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
    }
  }

  get maxLevel() {return 1000;}

  get initEffectValue() {return 0.0;}

  get incrementEffectValuePerLevel() {return 0.025;}

}
