import { MultiplierInfo } from "../../../Multiplier";
import { Talisman } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { Stats } from "../../../type/Stats";
import { TalismanRarity } from "../../../type/TalismanRarity";

export class CertificateOfCompetence extends Talisman {
  get talismanKind() {
    return PotionKind.CertificateOfCompetence;
  }

  get talismanRarity() {
    return TalismanRarity.SuperRare;
  }

  EffectValue(level) {
    return 0.005 * level;
  }

  PassiveEffectValue(level) {
    return 0.01 * level;
  }

  SetPassiveEffect() {
    globalThis.data.stats.SetEffectStats(
      Stats.SkillProficiencyGain,
      new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, () => this.passiveEffectValue)
    );
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return globalThis.data.skill.skillCooltimeReduction[heroKind].RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Add,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }
}
