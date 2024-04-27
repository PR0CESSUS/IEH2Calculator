import { MultiplierInfo } from "../../Multiplier";
import { PotionGlobalInformation } from "../PotionGlobalInformation";
import { Debuff } from "../../../type/Debuff";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";

export class WhirlingAuraDraught extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.WhirlingAuraDraught;
    this.type = PotionType.Aura;
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.stats.DebuffChance(heroKind, Debuff.Electric).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Potion,
        MultiplierType.Add,
        () => this.effectValue,
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }

  EffectValue(level) {
    return 0.25 + level * 0.005;
  }

  AlchemyPointGain(level) {
    return 7.0 * this.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
