import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Stats } from "../../type/Stats";
export default class GuardianKorDoll extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.GuardianKorDoll;

  EffectValue(level) {
    return 0.001 * level;
  }

  PassiveEffectValue(level) {
    return 0.01 * level;
  }

  SetPassiveEffect() {
    globalThis.data.stats.SetEffectStats(Stats.EquipmentProficiencyGain, new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, () => this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.heroes[heroKind].guardianKorInvalidDamageHpPercent.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.effectValue * equipNum()));
  }
}
