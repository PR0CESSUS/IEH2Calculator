import { MultiplierInfo } from "../../../Multiplier";
import { PotionGlobalInformation  } from "../PotionGlobalInformation";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { BasicStatsKind } from "../../../type/BasicStatsKind";
import { PotionKind } from "../../../type/PotionKind";
import { Stats } from "../../../type/Stats";
import { PotionType } from "../../../type/PotionType";


export class BasicElixirOfFortitude extends PotionGlobalInformation {
  SetInfo() {
    this.kind = PotionKind.BasicElixirOfFortitude;
    this.type = PotionType.MaxHP;
    
    
    
    
  }

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.HP).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, (() => this.effectValue), (() => this.IsActiveEffect(heroKind, equipNum))));}

  

  EffectValue(level) {return (50 + 25 * level);}

  AlchemyPointGain(level) {return 5.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();}
}
