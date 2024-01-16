import { MultiplierInfo } from "../../../Multiplier";
import { PotionGlobalInformation  } from "../PotionGlobalInformation";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";


export class MinorManaRegenerationPoultice extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.MinorManaRegenerationPoultice;
    this.type = PotionType.ManaRegen;
    
    
    
    
    
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.stats.MpRegenerate(heroKind).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, (() => this.effectValue), (() => this.IsActiveEffect(heroKind, equipNum))));}

  

  EffectValue(level) {return (5 + level);}

  AlchemyPointGain(level) {return 3.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();}
}
