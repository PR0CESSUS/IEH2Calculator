import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { Element } from "../../type/Element";
import { Enums } from "../../Enums";
export default class NostroDoll extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.NostroDoll;

  EffectValue(level) {
    return 0.01 * level;
  }

  PassiveEffectValue(level) {
    return 0.0001 * level;
  }

  SetPassiveEffect() {
    for (let index = 0; index < Enums.HeroKind; index++)
      globalThis.data.stats.ElementAbsorption(index, Element.Physical).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.passiveEffectValue));
  }

  SetEffect(heroKind, equipNum) {
    globalThis.data.stats
      .MpRegenerate(heroKind)
      .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.effectValue * equipNum() * globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.MP).Value()));
  }
}
