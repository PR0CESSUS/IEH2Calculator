import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Stats } from "../../type/Stats";
export default class TrappersTag extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.TrappersTag;

  EffectValue(level) {
    return 0.005 * level;
  }

  PassiveEffectValue(level) {
    return 0.025 * level;
  }

  SetPassiveEffect() {
    globalThis.data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, () => this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.monster.captureTripleChance[heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.effectValue * equipNum()));
  }
}
