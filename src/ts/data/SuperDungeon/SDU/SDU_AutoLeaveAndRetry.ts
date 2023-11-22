import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_AutoLeaveAndRetry extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.AutoLeaveAndRetry;
  }

  get isAutomation() {
    return true;
  }

  Cost(level) {
    return 20.0;
  }

  SetEffect() {}

  get maxLevel() {
    return 1;
  }
}
