import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
export default class ChilledRegenerationPoultice extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.ChilledRegenerationPoultice;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.HpRegenerate(heroKind).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => this.effectValue));
  }

  EffectValue(level) {
    return (1.5 + 0.05 * level) * globalThis.data.potion.GlobalInfo(PotionKind.MinorRegenerationPoultice).effectValue;
  }

  AlchemyPointGain(level) {
    return 6.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
