import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_AutoDodge extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.AutoDodge;
  }

  get isAutomation() {
    return true;
  }

  Cost(level) {
    return 50.0;
  }

  SetEffect() {}

  get maxLevel() {
    return 1;
  }
}
