import { MultiplierInfo } from "../../Multiplier";
import { Talisman } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { Stats } from "../../../type/Stats";
import { TalismanRarity } from "../../../type/TalismanRarity";

export class ThiefsBadge extends Talisman {
  get talismanKind() {
    return PotionKind.ThiefsBadge;
  }

  get talismanRarity() {
    return TalismanRarity.Uncommon;
  }

  get passiveEffectMaxValue() {
    return 0.9999;
  }

  EffectValue(level) {
    return 0.001 * level;
  }

  PassiveEffectValue(level) {
    return Math.min(this.passiveEffectMaxValue, 0.0001 * level);
  }

  SetPassiveEffect() {
    this.data.skill.skillRankCostFactors[3].RegisterMultiplier(new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, () => -this.passiveEffectValue));
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.stats.HeroStats(heroKind, Stats.EquipmentDropChance).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Mul,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }
}
