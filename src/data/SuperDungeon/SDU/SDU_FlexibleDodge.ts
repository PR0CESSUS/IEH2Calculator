import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_FlexibleDodge extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.FlexibleDodge;
  }

  get isAutomation() {
    return true;
  }

  Cost(level) {
    return 5.0;
  }

  SetEffect() {}

  get maxLevel() {
    return 1;
  }
}
