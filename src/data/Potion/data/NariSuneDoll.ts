import { MultiplierInfo } from "../../Multiplier";
import { Talisman } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { TalismanRarity } from "../../../type/TalismanRarity";

export class NariSuneDoll extends Talisman {
  get talismanKind() {
    return PotionKind.NariSuneDoll;
  }

  get talismanRarity() {
    return TalismanRarity.Rare;
  }

  get passiveEffectMaxValue() {
    return 1.0;
  }

  EffectValue(level) {
    return 0.005 * level;
  }

  PassiveEffectValue(level) {
    return Math.min(this.passiveEffectMaxValue, 0.0005 * level);
  }

  SetPassiveEffect() {
    this.data.area.largeSwarmChanceInsteadOfRegular.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.passiveEffectValue));
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.skill.skillRangeMultiplier[heroKind].RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Add,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }
}
