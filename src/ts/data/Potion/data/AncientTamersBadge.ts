import { MultiplierInfo } from "../../../Multiplier";
import { Talisman  } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { Stats } from "../../../type/Stats";
import { TalismanRarity } from "../../../type/TalismanRarity";


export class AncientTamersBadge extends Talisman {
  get talismanKind() {return PotionKind.AncientTamersBadge;}

  get talismanRarity() {return TalismanRarity.Rare;}

  get passiveEffectMaxValue() {return 10.0;}

  EffectValue(level) {return 0.05 * level;}

  PassiveEffectValue(level) {return 0.001 * level;}

  SetPassiveEffect() {globalThis.data.sdg.dungeonCoinGain.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, (() => this.passiveEffectValue)));}

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.stats.HeroStats(heroKind, Stats.TamingPointGain).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Mul, (() => this.effectValue * equipNum()), (() => this.IsActiveEffect(heroKind, equipNum))));}
}
