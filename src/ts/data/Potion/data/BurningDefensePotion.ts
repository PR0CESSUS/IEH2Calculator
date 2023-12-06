import { MultiplierInfo } from "../../../Multiplier";
import { PotionGlobalInformation  } from "../PotionGlobalInformation";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { Element } from "../../../type/Element";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";


export class BurningDefensePotion extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.BurningDefensePotion;
    this.type = PotionType.ElementResistance;
    
    
    
    
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.stats.ElementResistance(heroKind, Element.Fire).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, (() => this.effectValue), (() => this.IsActiveEffect(heroKind, equipNum))));}

  

  EffectValue(level) {return 0.2 + level * 0.01;}

  AlchemyPointGain(level) {return 5.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();}
}
