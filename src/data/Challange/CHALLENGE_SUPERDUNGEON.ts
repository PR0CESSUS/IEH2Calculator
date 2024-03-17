import { HeroKind } from "@/type/HeroKind";
import { CHALLENGE } from "./CHALLENGE";

export class CHALLENGE_SUPERDUNGEON extends CHALLENGE {
  get sdId() {
    return 0;
  }
  BaseRewardValueIncrementPerFloor(heroKind: HeroKind) {
    return 0;
  }
  RewardValueIncrementPerFloor(heroKind: HeroKind) {
    return this.BaseRewardValueIncrementPerFloor(heroKind) * this.statRewardMultiplier;
  }
  FloorRewardValue(heroKind: HeroKind) {
    return this.RewardValueIncrementPerFloor(heroKind) * this.SuperDungeonMaxFloorReached(heroKind) * (1.0 + 0.1 * this.GetMaxModifierCleared(heroKind));
  }
  GetMaxModifierCleared(heroKind: HeroKind) {
    return this.data.source.maxModifierCleareds[heroKind + 10 * this.sdId];
  }

  SuperDungeonMaxFloorReached(heroKind: HeroKind) {
    return this.data.source.superDungeonMaxFloorsReached[heroKind + 10 * this.sdId];
  }
  FloorRewardString(heroKind: HeroKind) {
    return "";
  }
}
