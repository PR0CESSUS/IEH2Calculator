import { MultiplierInfo } from "../../Multiplier";
import { Talisman } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { Stats } from "../../../type/Stats";
import { TalismanRarity } from "../../../type/TalismanRarity";

export class GuardianKorDoll extends Talisman {
  get talismanKind() {
    return PotionKind.GuardianKorDoll;
  }

  get talismanRarity() {
    return TalismanRarity.Rare;
  }

  EffectValue(level) {
    return 0.001 * level;
  }

  PassiveEffectValue(level) {
    return 0.01 * level;
  }

  SetPassiveEffect() {
    this.data.stats.SetEffectStats(Stats.EquipmentProficiencyGain, new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, () => this.passiveEffectValue));
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.stats.heroes[heroKind].guardianKorInvalidDamageHpPercent.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Add,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }
}
