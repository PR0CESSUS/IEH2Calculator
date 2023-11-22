import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_LeaveAndRetry extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.LeaveAndRetry;
  }

  get isAutomation() {
    return true;
  }

  Cost(level) {
    return 1.0;
  }

  get maxLevel() {
    return 1;
  }
}
