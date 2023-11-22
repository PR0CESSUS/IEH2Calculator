import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";

export class SDU_BoostStartGoodRNG extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.BoostStartGoodRNG;
  }

  Cost(level) {
    return 100000.0;
  }

  get maxLevel() {
    return 1;
  }
}
