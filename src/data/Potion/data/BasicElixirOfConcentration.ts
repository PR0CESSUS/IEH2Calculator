import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { HeroKind } from "../../../type/HeroKind";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";
import { MultiplierInfo } from "../../Multiplier";
import { PotionGlobalInformation } from "../PotionGlobalInformation";

export class BasicElixirOfConcentration extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.BasicElixirOfConcentration;
    this.type = PotionType.MaxMP;
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.stats.BasicStats(heroKind, BasicStatsKind.MP).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Potion,
        MultiplierType.Add,
        () => this.effectValue,
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }

  EffectValue(level) {
    return 20 + 10 * level;
  }

  AlchemyPointGain(level) {
    return 5.0 * this.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
