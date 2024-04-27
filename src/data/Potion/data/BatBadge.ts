import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { HeroKind } from "../../../type/HeroKind";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { PotionKind } from "../../../type/PotionKind";
import { TalismanRarity } from "../../../type/TalismanRarity";
import { MultiplierInfo } from "../../Multiplier";
import { Talisman } from "../Talisman";

export class BatBadge extends Talisman {
  get talismanKind() {
    return PotionKind.BatBadge;
  }

  get talismanRarity() {
    return TalismanRarity.Common;
  }

  EffectValue(level) {
    return 0.001 * level;
  }

  PassiveEffectValue(level) {
    return 0.1 * level;
  }

  SetPassiveEffect() {
    this.data.stats.SetEffectBasicStats(BasicStatsKind.ATK, new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Add, () => this.passiveEffectValue));
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.stats.BasicStats(heroKind, BasicStatsKind.ATK).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Mul,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }
}
