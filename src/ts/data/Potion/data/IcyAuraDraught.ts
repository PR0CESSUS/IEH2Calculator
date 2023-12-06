import { MultiplierInfo } from "../../../Multiplier";
import { PotionGlobalInformation  } from "../PotionGlobalInformation";
import { Debuff } from "../../../type/Debuff";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { PotionType } from "../../../type/PotionType";


export class IcyAuraDraught extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.IcyAuraDraught;
    this.type = PotionType.Aura;
    
    
    
    
    
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.stats.DebuffChance(heroKind, Debuff.SpdDown).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, (() => this.effectValue), (() => this.IsActiveEffect(heroKind, equipNum))));}

  

  EffectValue(level) {return 0.25 + level * 0.005;}

  AlchemyPointGain(level) {return 7.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();}
}
