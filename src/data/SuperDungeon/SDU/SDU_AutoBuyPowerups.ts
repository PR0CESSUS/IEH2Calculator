import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";
import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";

export class SDU_AutoBuyPowerups extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.AutoBuyPowerups;
  }

  get isAutomation() {
    return true;
  }

  Cost(level) {
    return 30.0 * Math.pow(5.0, level);
  }

  get maxLevel() {
    return 5;
  }

  get initEffectValue() {
    return 0.0;
  }

  get incrementEffectValuePerLevel() {
    return 1.0;
  }
}
