import { Enums } from "../../../Enums";
import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { Element } from "../../../type/Element";
import { HeroKind } from "../../../type/HeroKind";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { PotionKind } from "../../../type/PotionKind";
import { TalismanRarity } from "../../../type/TalismanRarity";
import { MultiplierInfo } from "../../Multiplier";
import { Talisman } from "../Talisman";

export class NostroDoll extends Talisman {
  get talismanKind() {
    return PotionKind.NostroDoll;
  }

  get talismanRarity() {
    return TalismanRarity.Rare;
  }

  EffectValue(level) {
    return 0.01 * level;
  }

  PassiveEffectValue(level) {
    return 0.0001 * level;
  }

  SetPassiveEffect() {
    for (let index = 0; index < Enums.HeroKind; index++)
      this.data.stats.ElementAbsorption(index, Element.Physical).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.passiveEffectValue));
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {
    return this.data.stats.MpRegenerate(heroKind).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Talisman,
        MultiplierType.Add,
        () => this.effectValue * equipNum() * this.data.stats.BasicStats(heroKind, BasicStatsKind.MP).Value(),
        () => this.IsActiveEffect(heroKind, equipNum)
      )
    );
  }
}
