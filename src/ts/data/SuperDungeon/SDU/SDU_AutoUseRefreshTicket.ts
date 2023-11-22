import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_AutoUseRefreshTicket extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.AutoUseRefreshTicket;
  }

  get isAutomation() {
    return true;
  }

  Cost(level) {
    return 100.0;
  }

  get maxLevel() {
    return 1;
  }
}
