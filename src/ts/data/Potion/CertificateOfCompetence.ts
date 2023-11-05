import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Stats } from "../../type/Stats";
export default class CertificateOfCompetence extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.CertificateOfCompetence;

  EffectValue(level) {
    return 0.005 * level;
  }

  PassiveEffectValue(level) {
    return 0.01 * level;
  }

  SetPassiveEffect() {
    globalThis.data.stats.SetEffectStats(Stats.SkillProficiencyGain, new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, () => this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.skill.skillCooltimeReduction[heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.effectValue * equipNum()));
  }
}
