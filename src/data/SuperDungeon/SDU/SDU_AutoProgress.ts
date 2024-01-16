import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_AutoProgress extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.AutoProgress;
  }

  get isAutomation() {
    return true;
  }

  Cost(level) {
    return 10.0;
  }

  get maxLevel() {
    return 1;
  }
}
