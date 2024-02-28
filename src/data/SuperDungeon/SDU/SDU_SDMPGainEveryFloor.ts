import { Enums } from "../../../Enums";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";
import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";

export class SDU_SDMPGainEveryFloor extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.SDMPGainEveryFloor;
  }

  Cost(level) {
    return (200 + 200 * level) * Math.pow(2.0, level / 5.0);
  }

  SetEffect() {
    for (let index = 0; index < Enums.HeroKind; index++)
      this.sdgCtrl.data.battles[index].superDungeonCtrl.mpChargePercentEveryFloor.RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Add, () => this.EffectValue())
      );
  }

  get maxLevel() {
    return 100;
  }

  get initEffectValue() {
    return 0.0;
  }

  get incrementEffectValuePerLevel() {
    return 0.01;
  }
}
