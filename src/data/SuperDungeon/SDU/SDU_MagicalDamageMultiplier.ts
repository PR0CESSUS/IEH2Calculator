import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { Element } from "../../../type/Element";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_MagicalDamageMultiplier extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.MagicalDamageMultiplier;
  }

  Cost(level) {
    return (1500 + 1500 * level) * Math.pow(2.0, level / 10.0);
  }

  SetEffect() {
    this.sdgCtrl.data.stats.SetEffectElementDamage(Element.Fire, new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, () => this.EffectValue()));
    this.sdgCtrl.data.stats.SetEffectElementDamage(Element.Ice, new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, () => this.EffectValue()));
    this.sdgCtrl.data.stats.SetEffectElementDamage(Element.Thunder, new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, () => this.EffectValue()));
    this.sdgCtrl.data.stats.SetEffectElementDamage(Element.Light, new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, () => this.EffectValue()));
    this.sdgCtrl.data.stats.SetEffectElementDamage(Element.Dark, new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, () => this.EffectValue()));
  }

  get maxLevel() {
    return 1000;
  }

  get initEffectValue() {
    return 0.0;
  }

  get incrementEffectValuePerLevel() {
    return 0.025;
  }
}
