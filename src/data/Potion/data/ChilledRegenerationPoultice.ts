import { MultiplierInfo } from "../../Multiplier";
import { PotionGlobalInformation } from "../PotionGlobalInformation";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";

export class ChilledRegenerationPoultice extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.ChilledRegenerationPoultice;
    this.type = PotionType.HealthRegen;
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.stats.HpRegenerate(heroKind).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Potion,
        MultiplierType.Add,
        () => this.effectValue,
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }

  get isEffectedByLowerTier() {
    return true;
  }

  EffectValue(level) {
    return (1.5 + 0.05 * level) * this.data.potion.GlobalInfo(PotionKind.MinorRegenerationPoultice).effectValue;
  }

  AlchemyPointGain(level) {
    return 6.0 * this.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
