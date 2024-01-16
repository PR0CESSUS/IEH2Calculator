import { MultiplierInfo } from "../../../Multiplier";
import { Talisman  } from "../Talisman";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { TalismanRarity } from "../../../type/TalismanRarity";


export class TrackersMap extends Talisman {
  get talismanKind() {return PotionKind.TrackersMap;}

  get talismanRarity() {return TalismanRarity.SuperRare;}

  get passiveEffectMaxValue() {return 1.0;}

  EffectValue(level) {return 0.5 * level;}

  PassiveEffectValue(level) {return Math.min(this.passiveEffectMaxValue, 0.0001 * level);}

  SetPassiveEffect() {globalThis.data.area.epicSwarmChanceInsteadOfLarge.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, (() => this.passiveEffectValue)));}

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.area.clearCountBonusClass[heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, (() => this.effectValue * equipNum()), (() => this.IsActiveEffect(heroKind, equipNum))));}
}
