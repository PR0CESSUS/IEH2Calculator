import { MultiplierInfo } from "../../Multiplier";
import { Talisman } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { TalismanRarity } from "../../../type/TalismanRarity";

export class MasonsTrowel extends Talisman {
  get talismanKind() {
    return PotionKind.MasonsTrowel;
  }

  get talismanRarity() {
    return TalismanRarity.SuperRare;
  }

  get passiveEffectMaxValue() {
    return 2.0;
  }

  EffectValue(level) {
    return 0.1 * level;
  }

  PassiveEffectValue(level) {
    return Math.min(this.passiveEffectMaxValue, 0.001 * level);
  }

  SetPassiveEffect() {
    this.data.town.townLevelEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, () => this.passiveEffectValue));
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.town.townMaterialGainMultiplier[heroKind].RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Mul,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }
}
