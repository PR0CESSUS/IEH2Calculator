import { MultiplierInfo } from "../../Multiplier";
import { PotionGlobalInformation } from "../PotionGlobalInformation";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { Stats } from "../../../type/Stats";
import { PotionType } from "../../../type/PotionType";

export class SlickerShoeSolution extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.SlickerShoeSolution;
    this.type = PotionType.Move;
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.stats.HeroStats(heroKind, Stats.MoveSpeed).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Potion,
        MultiplierType.Mul,
        () => this.effectValue,
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }

  get isEffectedByLowerTier() {
    return true;
  }

  EffectValue(level) {
    return (1.25 + 0.005 * level) * this.data.potion.GlobalInfo(PotionKind.SlickShoeSolution).effectValue;
  }

  AlchemyPointGain(level) {
    return 8.0 * this.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
