import { MultiplierInfo } from "../../Multiplier";
import { PotionGlobalInformation } from "../PotionGlobalInformation";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";

export class SlightlyStickySalve extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.SlightlyStickySalve;
    this.type = PotionType.GoldGain;
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.stats.GoldGain().RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Potion,
        MultiplierType.Mul,
        () => this.effectValue,
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }

  EffectValue(level) {
    return 0.25 + level * 0.01;
  }

  AlchemyPointGain(level) {
    return 10.0 * this.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
