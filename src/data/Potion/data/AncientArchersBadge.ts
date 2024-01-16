import { MultiplierInfo } from "../../../Multiplier";
import { Enums } from "../../../Enums";
import { Talisman  } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { Stats } from "../../../type/Stats";
import { TalismanRarity } from "../../../type/TalismanRarity";


export class AncientArchersBadge extends Talisman {
  get talismanKind() {return PotionKind.AncientArchersBadge;}

  get talismanRarity() {return TalismanRarity.Rare;}

  get passiveEffectMaxValue() {return 1000.0;}

  EffectValue(level) {return 0.05 * level;}

  PassiveEffectValue(level) {return 0.1 * level;}

  SetPassiveEffect() {
    for (let index = 0; index < Enums.HeroKind; index++)
      globalThis.data.battles[index].superDungeonCtrl.wardedFury.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, (() => this.passiveEffectValue)));
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.stats.HeroStats(heroKind, Stats.WardedFury).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Mul, (() => this.effectValue * equipNum()), (() => this.IsActiveEffect(heroKind, equipNum))));}
}
