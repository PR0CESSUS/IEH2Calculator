import { MultiplierInfo } from "../../Multiplier";
import { PotionGlobalInformation } from "../PotionGlobalInformation";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { Stats } from "../../../type/Stats";
import { PotionType } from "../../../type/PotionType";

export class SlickShoeSolution extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.SlickShoeSolution;
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

  EffectValue(level) {
    return 0.1 + 0.001 * level;
  }

  AlchemyPointGain(level) {
    return 3.0 * this.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
