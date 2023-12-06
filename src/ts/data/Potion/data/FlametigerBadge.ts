import { MultiplierInfo } from "../../../Multiplier";
import { Talisman  } from "../Talisman";
import { ResourceKind } from "../../../type/ResourceKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { PotionKind } from "../../../type/PotionKind";
import { Stats } from "../../../type/Stats";
import { TalismanRarity } from "../../../type/TalismanRarity";


export class FlametigerBadge extends Talisman {
  get talismanKind() {return PotionKind.FlametigerBadge;}

  get talismanRarity() {return TalismanRarity.Common;}

  EffectValue(level) {return 0.005 * level;}

  PassiveEffectValue(level) {return 0.025 * level;}

  SetPassiveEffect() {globalThis.data.stats.ResourceGain(ResourceKind.Leaf).RegisterMultiplier(new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Mul, (() => this.passiveEffectValue)));}

  SetEffect(heroKind: HeroKind, equipNum: Function) {return globalThis.data.stats.HeroStats(heroKind, Stats.EquipmentProficiencyGain).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, (() => this.effectValue * equipNum()), (() => this.IsActiveEffect(heroKind, equipNum))));}
}
