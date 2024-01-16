import { Enums } from "../../Enums";
import { Debuff } from "../../type/Debuff";
import { HeroKind } from "../../type/HeroKind";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { EquipmentForgeEffectKind } from "../../type/EquipmentForgeEffectKind";
import { CHALLENGE } from "./CHALLENGE";

export class CHALLENGE_SUPERDUNGEON extends CHALLENGE {
  superDungeonId = 0;
  //   get type() {return ChallengeType.SuperDungeon;}

  get sdCtrl() {
    return globalThis.data.battle.superDungeonCtrl;
  }

  get sdgCtrl() {
    return globalThis.data.sdg;
  }

  constructor() {
    super();
    //
  }

  //   this.modifierCtrl = {}

  get statRewardMultiplier() {
    return globalThis.data.challenge.sdStatRewardMultiplier.Value();
  }

  GetMaxModifierCleared(heroKind: HeroKind) {
    return globalThis.data.source.maxModifierCleareds[heroKind + 10 * this.superDungeonId];
  }

  BaseRewardValueIncrementPerFloor(heroKind: HeroKind) {
    return 0.0;
  }

  RewardValueIncrementPerFloor(heroKind: HeroKind) {
    return this.BaseRewardValueIncrementPerFloor(heroKind) * this.statRewardMultiplier;
  }

  SuperDungeonMaxFloorReached(heroKind: HeroKind) {
    return globalThis.data.source.superDungeonMaxFloorsReached[heroKind + 10 * this.superDungeonId];
  }

  FloorRewardValue(heroKind: HeroKind) {
    return (
      this.RewardValueIncrementPerFloor(heroKind) *
      this.SuperDungeonMaxFloorReached(heroKind) *
      (1.0 + 0.1 * this.GetMaxModifierCleared(heroKind))
    );
  }
}
