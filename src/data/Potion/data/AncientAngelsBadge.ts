import { MultiplierInfo } from "../../Multiplier";
import { Enums } from "../../../Enums";
import { Talisman } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { Stats } from "../../../type/Stats";
import { TalismanRarity } from "../../../type/TalismanRarity";

export class AncientAngelsBadge extends Talisman {
  get talismanKind() {
    return PotionKind.AncientAngelsBadge; //
  }

  get talismanRarity() {
    return TalismanRarity.Rare; //
  }

  get passiveEffectMaxValue() {
    return 1000.0;
  }

  EffectValue(level) {
    return 0.05 * level;
  }

  PassiveEffectValue(level) {
    return 0.1 * level;
  }

  SetPassiveEffect() {
    for (let index = 0; index < Enums.HeroKind; index++)
      this.data.battles[index].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, () => this.passiveEffectValue)
      );
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.stats.HeroStats(heroKind, Stats.EquipmentProficiencyGain).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Mul,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }
}
