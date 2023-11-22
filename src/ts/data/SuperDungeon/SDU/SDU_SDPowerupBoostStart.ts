import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_SDPowerupBoostStart extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.SDPowerupBoostStart;
  }

  Cost(level) {
    return 50000.0;
  }

  SetEffect() {}

  get maxLevel() {
    return 1;
  }
}
