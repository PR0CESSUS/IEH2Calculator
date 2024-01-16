import { MultiplierInfo } from "../../../Multiplier";
import { PotionGlobalInformation  } from "../PotionGlobalInformation";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";


export class MinorRegenerationPoultice extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.MinorRegenerationPoultice;
    this.type = PotionType.HealthRegen;
    
    
    
    
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.stats.HpRegenerate(heroKind).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, (() => this.effectValue), (() => this.IsActiveEffect(heroKind, equipNum))));}

  

  EffectValue(level) {return 1.0 + 0.2 * level;}

  AlchemyPointGain(level) {return 2.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();}
}
