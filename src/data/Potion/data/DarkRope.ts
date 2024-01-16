import { PotionGlobalInformation  } from "../PotionGlobalInformation";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";


export class DarkRope extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.DarkRope;
    this.type = PotionType.Trap;
    
    
  }

  

  EffectValue(level) {return 0.2;}

  get effectValue() {return this.EffectValue(0) * globalThis.data.potion.trapEffectMultiplier.Value();}
}
