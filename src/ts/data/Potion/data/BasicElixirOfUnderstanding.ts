import { MultiplierInfo } from "../../../Multiplier";
import { PotionGlobalInformation  } from "../PotionGlobalInformation";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { Stats } from "../../../type/Stats";
import { PotionType } from "../../../type/PotionType";


export class BasicElixirOfUnderstanding extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.BasicElixirOfUnderstanding;
    this.type = PotionType.SkillProfGain;
    
    
    
    
    
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.stats.HeroStats(heroKind, Stats.SkillProficiencyGain).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Mul, (() => this.effectValue), (() => this.IsActiveEffect(heroKind, equipNum))));}

  

  EffectValue(level) {return 0.1 + 0.005 * level;}

  AlchemyPointGain(level) {return 5.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();}
}
