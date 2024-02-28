import { MultiplierInfo } from "../../Multiplier";
import { PotionGlobalInformation } from "../PotionGlobalInformation";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { Element } from "../../../type/Element";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";

export class BasicElixirOfBrains extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.BasicElixirOfBrains;
    this.type = PotionType.MagicalDamage;
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return [
      this.data.stats.ElementDamage(heroKind, Element.Fire).RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Potion,
          MultiplierType.Add,
          () => this.effectValue,
          () => this.IsActiveEffect(heroKind, equipNum)
        )
      ),
      this.data.stats.ElementDamage(heroKind, Element.Ice).RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Potion,
          MultiplierType.Add,
          () => this.effectValue,
          () => this.IsActiveEffect(heroKind, equipNum)
        )
      ),
      this.data.stats.ElementDamage(heroKind, Element.Thunder).RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Potion,
          MultiplierType.Add,
          () => this.effectValue,
          () => this.IsActiveEffect(heroKind, equipNum)
        )
      ),
      this.data.stats.ElementDamage(heroKind, Element.Light).RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Potion,
          MultiplierType.Add,
          () => this.effectValue,
          () => this.IsActiveEffect(heroKind, equipNum)
        )
      ),
      this.data.stats.ElementDamage(heroKind, Element.Dark).RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Potion,
          MultiplierType.Add,
          () => this.effectValue,
          () => this.IsActiveEffect(heroKind, equipNum)
        )
      ),
    ];
  }

  EffectValue(level) {
    return 0.2 + 0.02 * level;
  }

  AlchemyPointGain(level) {
    return 4.0 * this.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
