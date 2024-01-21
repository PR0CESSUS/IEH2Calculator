import { MultiplierInfo } from "../../../Multiplier";
import { Talisman } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { TalismanRarity } from "../../../type/TalismanRarity";
import { NumberType } from "../../../type/NumberType";

export class EnchantedAlembic extends Talisman {
  get talismanKind() {
    return PotionKind.EnchantedAlembic;
  }

  get talismanRarity() {
    return TalismanRarity.Rare;
  }

  get passiveEffectMaxValue() {
    return 5.0;
  }

  passiveEffectNumberType = NumberType.Normal;

  EffectValue(level) {
    return 0.001 * level;
  }

  PassiveEffectValue(level) {
    return Math.min(this.passiveEffectMaxValue, 0.001 * level);
  }

  SetPassiveEffect() {
    globalThis.data.alchemy.mysteriousWaterProductionPerSec.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Add, () => this.passiveEffectValue)
    );
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return globalThis.data.potion.effectMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Mul,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }
}
