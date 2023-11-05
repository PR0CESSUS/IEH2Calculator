import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { BasicStatsKind } from "../../type/BasicStatsKind";
export default class BasicElixirOfFortitude extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.BasicElixirOfFortitude;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.HP).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => this.effectValue));
  }

  EffectValue(level) {
    return 50 + 25 * level;
  }

  AlchemyPointGain(level) {
    return 5.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
