import { MultiplierInfo } from "../../../Multiplier";
import { Talisman  } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { TalismanRarity } from "../../../type/TalismanRarity";


export class ArachnettaDoll extends Talisman {
  get talismanKind() {return PotionKind.ArachnettaDoll;}

  get talismanRarity() {return TalismanRarity.Rare;}

  EffectValue(level) {return 0.01 * level;}

  PassiveEffectValue(level) {return 0.01 * level;}

  SetPassiveEffect() {globalThis.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, (() => this.passiveEffectValue)));}

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.skill.baseAttackPoisonChance[heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, (() => this.effectValue * equipNum()), (() => this.IsActiveEffect(heroKind, equipNum))));}
}
