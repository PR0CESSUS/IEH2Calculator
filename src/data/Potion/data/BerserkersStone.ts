import { MultiplierInfo } from "../../../Multiplier";
import { Talisman  } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { MonsterSpecies } from "../../../type/MonsterSpecies";
import { PotionKind } from "../../../type/PotionKind";
import { TalismanRarity } from "../../../type/TalismanRarity";


export class BerserkersStone extends Talisman {
  get talismanKind() {return PotionKind.BerserkersStone;}

  get talismanRarity() {return TalismanRarity.SuperRare;}

  get passiveEffectMaxValue() {return 1.0;}

  EffectValue(level) {return 0.2 * level;}

  PassiveEffectValue(level) {return Math.min(this.passiveEffectMaxValue, 0.001 * level);}

  SetPassiveEffect() {globalThis.data.equipment.effectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Mul, (() => this.passiveEffectValue)));}

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.stats.MonsterDamage(heroKind, MonsterSpecies.ChallengeBoss).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Mul, (() => this.effectValue * equipNum()), (() => this.IsActiveEffect(heroKind, equipNum))));}
}
