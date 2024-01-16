import { MultiplierInfo } from "../../../Multiplier";
import { Enums } from "../../../Enums";
import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";

import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_SDDungeonCoinBoostStart extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.SDDungeonCoinBoostStart;
  }

  Cost(level) {
    return (500 + 500 * level) * Math.pow(2.0, level / 5.0);
  }

  SetEffect() {
    for (let index = 0; index < Enums.HeroKind; index++)
      globalThis.data.battles[index].superDungeonCtrl.initialDungeonCoin.RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Add, () => this.EffectValue())
      );
  }

  get maxLevel() {
    return 1000;
  }

  get initEffectValue() {
    return 0.0;
  }

  get incrementEffectValuePerLevel() {
    return 5.0;
  }
}
