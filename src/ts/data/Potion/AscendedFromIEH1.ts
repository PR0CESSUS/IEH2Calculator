import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Stats } from "../../type/Stats";
export default class AscendedFromIEH1 extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.AscendedFromIEH1;

  EffectValue(level) {
    return 0.1 * level;
  }

  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.HeroStats(heroKind, Stats.ExpGain).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Mul, () => this.effectValue * equipNum()));
  }
}
