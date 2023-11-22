import { MultiplierInfo } from "../../../Multiplier";
import { Enums } from "../../../Enums";
import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";

import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_SDDamageCutMultiplier extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.SDDamageCutMultiplier;
  }

  Cost(level) {
    return (20 + 20 * level) * Math.pow(2.0, level / 20.0);
  }

  SetEffect() {
    for (let index = 0; index < Enums.HeroKind; index++)
      globalThis.data.battles[index].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, () => this.EffectValue())
      );
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
