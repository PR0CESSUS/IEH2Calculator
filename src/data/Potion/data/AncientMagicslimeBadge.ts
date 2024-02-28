import { MultiplierInfo } from "../../Multiplier";
import { Enums } from "../../../Enums";
import { Talisman } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { MonsterSpecies } from "../../../type/MonsterSpecies";
import { PotionKind } from "../../../type/PotionKind";
import { TalismanRarity } from "../../../type/TalismanRarity";

export class AncientMagicslimeBadge extends Talisman {
  get talismanKind() {
    return PotionKind.AncientMagicslimeBadge;
  }

  get talismanRarity() {
    return TalismanRarity.Uncommon;
  }

  EffectValue(level) {
    return 0.1 * level;
  }

  PassiveEffectValue(level) {
    return 0.5 * level;
  }

  SetPassiveEffect() {
    for (let index = 0; index < Enums.HeroKind; index++)
      this.data.stats
        .MonsterDamage(index, MonsterSpecies.MagicSlime)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.After, () => this.passiveEffectValue));
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.stats.MonsterDamage(heroKind, MonsterSpecies.MagicSlime).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Mul,
        () => this.effectValue * equipNum(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }
}
