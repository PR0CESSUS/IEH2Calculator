import { MultiplierInfo } from "../../Multiplier";
import { Enums } from "../../../Enums";
import { Talisman } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { Element } from "../../../type/Element";
import { PotionKind } from "../../../type/PotionKind";
import { TalismanRarity } from "../../../type/TalismanRarity";

export class AncientWizardsBadge extends Talisman {
  get talismanKind() {
    return PotionKind.AncientWizardsBadge;
  }

  get talismanRarity() {
    return TalismanRarity.Rare;
  }

  get passiveEffectMaxValue() {
    return 1000.0;
  }

  EffectValue(level) {
    return 0.05 * level;
  }

  PassiveEffectValue(level) {
    return 0.1 * level;
  }

  SetPassiveEffect() {
    for (let index = 0; index < Enums.HeroKind; index++)
      this.data.battles[index].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, () => this.passiveEffectValue)
      );
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    this.data.stats.ElementDamage(heroKind, Element.Fire).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Mul,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
    this.data.stats.ElementDamage(heroKind, Element.Ice).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Mul,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
    this.data.stats.ElementDamage(heroKind, Element.Thunder).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Mul,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
    this.data.stats.ElementDamage(heroKind, Element.Light).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Mul,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
    this.data.stats.ElementDamage(heroKind, Element.Dark).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Mul,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }
}
