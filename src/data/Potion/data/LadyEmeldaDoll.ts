import { MultiplierInfo } from "../../Multiplier";
import { Enums } from "../../../Enums";
import { Talisman } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { Element } from "../../../type/Element";
import { PotionKind } from "../../../type/PotionKind";
import { TalismanRarity } from "../../../type/TalismanRarity";

export class LadyEmeldaDoll extends Talisman {
  get talismanKind() {
    return PotionKind.LadyEmeldaDoll;
  }

  get talismanRarity() {
    return TalismanRarity.Rare;
  }

  EffectValue(level) {
    return 0.025 * level;
  }

  PassiveEffectValue(level) {
    return 0.0001 * level;
  }

  SetPassiveEffect() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      this.data.stats.ElementAbsorption(index, Element.Fire).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.passiveEffectValue));
      this.data.stats.ElementAbsorption(index, Element.Ice).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.passiveEffectValue));
      this.data.stats.ElementAbsorption(index, Element.Thunder).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.passiveEffectValue));
      this.data.stats.ElementAbsorption(index, Element.Light).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.passiveEffectValue));
      this.data.stats.ElementAbsorption(index, Element.Dark).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.passiveEffectValue));
    }
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.skill.ladyEmeldaEffectMultiplier[heroKind].RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Add,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }
}
