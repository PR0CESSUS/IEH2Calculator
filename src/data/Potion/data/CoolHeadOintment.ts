import { MultiplierInfo } from "../../Multiplier";
import { PotionGlobalInformation } from "../PotionGlobalInformation";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { Stats } from "../../../type/Stats";
import { PotionType } from "../../../type/PotionType";

export class CoolHeadOintment extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.CoolHeadOintment;
    this.type = PotionType.ExpGain;
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.stats.HeroStats(heroKind, Stats.ExpGain).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Potion,
        MultiplierType.Add,
        () => this.effectValue,
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }

  EffectValue(level) {
    return 0.2 + level * 0.02;
  }

  AlchemyPointGain(level) {
    return 10.0 * this.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
