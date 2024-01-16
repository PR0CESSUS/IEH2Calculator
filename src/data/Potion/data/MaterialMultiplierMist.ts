import { MultiplierInfo } from "../../../Multiplier";
import { PotionGlobalInformation  } from "../PotionGlobalInformation";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";


export class MaterialMultiplierMist extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.MaterialMultiplierMist;
    this.type = PotionType.MaterialGain;
    
    
    
    
    
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.stats.MaterialLootGain(heroKind).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, (() => this.effectValue), (() => this.IsActiveEffect(heroKind, equipNum))));}

  

  EffectValue(level) {return 1.0 + 0.1 * level;}

  get effectValue() {return Math.floor(this.EffectValue(this.level) * globalThis.data.potion.effectMultiplier.Value());}

  

  AlchemyPointGain(level) {return 4.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();}
}
