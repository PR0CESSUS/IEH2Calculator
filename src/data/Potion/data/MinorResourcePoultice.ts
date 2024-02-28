import { MultiplierInfo } from "../../Multiplier";
import { PotionGlobalInformation } from "../PotionGlobalInformation";
import { ResourceKind } from "../../../type/ResourceKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";

export class MinorResourcePoultice extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.MinorResourcePoultice;
    this.type = PotionType.ResourceGain;
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return [
      this.data.stats.ResourceGain(ResourceKind.Stone).RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Potion,
          MultiplierType.Mul,
          () => this.effectValue,
          () => this.IsActiveEffect(heroKind, equipNum)
        )
      ),
      this.data.stats.ResourceGain(ResourceKind.Crystal).RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Potion,
          MultiplierType.Mul,
          () => this.effectValue,
          () => this.IsActiveEffect(heroKind, equipNum)
        )
      ),
      this.data.stats.ResourceGain(ResourceKind.Leaf).RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Potion,
          MultiplierType.Mul,
          () => this.effectValue,
          () => this.IsActiveEffect(heroKind, equipNum)
        )
      ),
    ];
  }

  EffectValue(level) {
    return 0.25 + 0.05 * level;
  }

  AlchemyPointGain(level) {
    return 1.0 * this.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
