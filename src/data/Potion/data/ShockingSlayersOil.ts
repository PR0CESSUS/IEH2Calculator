import { MultiplierInfo } from "../../Multiplier";
import { PotionGlobalInformation } from "../PotionGlobalInformation";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { Element } from "../../../type/Element";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";

export class ShockingSlayersOil extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.ShockingSlayersOil;
    this.type = PotionType.SlayerOil;
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.stats.ElementSlayerDamage(heroKind, Element.Thunder).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Potion,
        MultiplierType.Add,
        () => this.effectValue,
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }

  EffectValue(level) {
    return 0.1 + level * 0.01;
  }

  AlchemyPointGain(level) {
    return 10.0 * this.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
