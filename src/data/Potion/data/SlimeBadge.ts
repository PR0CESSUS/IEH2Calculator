import { MultiplierInfo } from "../../Multiplier";
import { Talisman } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { PotionKind } from "../../../type/PotionKind";
import { TalismanRarity } from "../../../type/TalismanRarity";

export class SlimeBadge extends Talisman {
  get talismanKind() {
    return PotionKind.SlimeBadge;
  }

  get talismanRarity() {
    return TalismanRarity.Common;
  }

  EffectValue(level) {
    return 0.001 * level;
  }

  PassiveEffectValue(level) {
    return 1.0 * level;
  }

  SetPassiveEffect() {
    this.data.stats.SetEffectBasicStats(BasicStatsKind.HP, new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Add, () => this.passiveEffectValue));
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.stats.BasicStats(heroKind, BasicStatsKind.HP).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Mul,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }
}
