import { PotionGlobalInformation  } from "../PotionGlobalInformation";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";


export class MinorHealthPotion extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.MinorHealthPotion;
    this.type = PotionType.Health;
    
    
    
    
  }

  

  

  

  EffectValue(level) {return (15 + 5 * level);}

  AlchemyPointGain(level) {return 1.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();}
}
