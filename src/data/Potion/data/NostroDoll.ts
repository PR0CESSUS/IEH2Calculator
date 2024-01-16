import { MultiplierInfo } from "../../../Multiplier";
import { Enums } from "../../../Enums";
import { Talisman  } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { Element } from "../../../type/Element";
import { PotionKind } from "../../../type/PotionKind";
import { Stats } from "../../../type/Stats";
import { TalismanRarity } from "../../../type/TalismanRarity";


export class NostroDoll extends Talisman {
  get talismanKind() {return PotionKind.NostroDoll;}

  get talismanRarity() {return TalismanRarity.Rare;}

  EffectValue(level) {return 0.01 * level;}

  PassiveEffectValue(level) {return 0.0001 * level;}

  SetPassiveEffect() {
    for (let index = 0; index < Enums.HeroKind; index++)
      globalThis.data.stats.ElementAbsorption(index, Element.Physical).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, (() => this.passiveEffectValue)));
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.stats.MpRegenerate(heroKind).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, (() => this.effectValue * equipNum() * globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.MP).Value()), (() => this.IsActiveEffect(heroKind, equipNum))));}
}
