import { MultiplierInfo } from "../../../Multiplier";
import { Talisman  } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { PotionKind } from "../../../type/PotionKind";
import { Stats } from "../../../type/Stats";
import { TalismanRarity } from "../../../type/TalismanRarity";


export class SpiderBadge extends Talisman {
  get talismanKind() {return PotionKind.SpiderBadge;}

  get talismanRarity() {return TalismanRarity.Common;}

  EffectValue(level) {return 0.001 * level;}

  PassiveEffectValue(level) {return 0.1 * level;}

  SetPassiveEffect() {globalThis.data.stats.SetEffectBasicStats(BasicStatsKind.DEF, new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Add, (() => this.passiveEffectValue)));}

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.DEF).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Mul, (() => this.effectValue * equipNum()), (() => this.IsActiveEffect(heroKind, equipNum))));}
}
