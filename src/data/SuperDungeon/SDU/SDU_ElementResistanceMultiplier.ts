import { MultiplierInfo } from "../../../Multiplier";
import { SuperDungeonUpgrade  } from "../SuperDungeonUpgrade";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { Element } from "../../../type/Element";
import { Stats } from "../../../type/Stats";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";


export class SDU_ElementResistanceMultiplier extends SuperDungeonUpgrade {
  get kind() {return SuperDungeonUpgradeKind.ElementResistanceMultiplier;}

  
  Cost(level) {return (1000 + 1000 * level) * Math.pow(2.0, level / 10.0);}

  SetEffect() {
    globalThis.data.stats.SetEffectStats(Stats.FireRes, new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
    globalThis.data.stats.SetEffectStats(Stats.IceRes, new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
    globalThis.data.stats.SetEffectStats(Stats.ThunderRes, new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
    globalThis.data.stats.SetEffectStats(Stats.LightRes, new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
    globalThis.data.stats.SetEffectStats(Stats.DarkRes, new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, (() => this.EffectValue())));
  }

  get maxLevel() {return 1000;}

  get initEffectValue() {return 0.0;}

  get incrementEffectValuePerLevel() {return 0.025;}

}
