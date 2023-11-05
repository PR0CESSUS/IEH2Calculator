import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Element } from "../../type/Element";
import { Enums } from "../../Enums";
export default class LadyEmeldaDoll extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.LadyEmeldaDoll;

  EffectValue(level) {
    return 0.025 * level;
  }

  PassiveEffectValue(level) {
    return 0.0001 * level;
  }

  SetPassiveEffect() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      globalThis.data.stats.ElementAbsorption(index, Element.Fire).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.passiveEffectValue));
      globalThis.data.stats.ElementAbsorption(index, Element.Ice).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.passiveEffectValue));
      globalThis.data.stats.ElementAbsorption(index, Element.Thunder).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.passiveEffectValue));
      globalThis.data.stats.ElementAbsorption(index, Element.Light).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.passiveEffectValue));
      globalThis.data.stats.ElementAbsorption(index, Element.Dark).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.passiveEffectValue));
    }
  }

  SetEffect(heroKind, equipNum) {
    globalThis.data.skill.ladyEmeldaEffectMultiplier[heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.effectValue * equipNum()));
  }
}
