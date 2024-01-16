import { MultiplierInfo } from "../../../Multiplier";
import { PotionGlobalInformation  } from "../PotionGlobalInformation";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";


export class SlightlyStickSalve extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.SlightlyStickySalve;
    this.type = PotionType.GoldGain;
    
    
    
    
    
    
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.stats.GoldGain().RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Mul, (() => this.effectValue), (() => this.IsActiveEffect(heroKind, equipNum))));}

  

  EffectValue(level) {return 0.25 + level * 0.01;}

  AlchemyPointGain(level) {return 10.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();}
}
