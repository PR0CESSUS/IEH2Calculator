import { MultiplierInfo } from "../../Multiplier";
import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_CrystalResearchPowerMul extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.CrystalResearchPowerMul;
  }

  Cost(level) {
    return (2500 + 2500 * level) * Math.pow(2.0, level / 10.0);
  }

  SetEffect() {
    return this.sdgCtrl.data.town.researchPower[1].RegisterMultiplier(new MultiplierInfo(MultiplierKind.SDUpgrade, MultiplierType.Mul, () => this.EffectValue()));
  }

  get maxLevel() {
    return 1000;
  }

  get initEffectValue() {
    return 0.0;
  }

  get incrementEffectValuePerLevel() {
    return 0.1;
  }
}
