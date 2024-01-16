import { CHALLENGE } from "../CHALLENGE";
import { ChallengeKind } from "../../../type/ChallengeKind";
import { EquipmentPart } from "../../../type/EquipmentPart";
import { ChallengeMonsterKind } from "../../../type/ChallengeMonsterKind";

export class ChallengeSoloBoss_FlorzporbLv100 extends CHALLENGE {
  kind = ChallengeKind.SoloFlorzporb100;

  get challengeMonsterKind() {
    return ChallengeMonsterKind.Florzporb;
  }

  SetReward() {
    this.SetRewardEquipmentSlot(EquipmentPart.Weapon);
  }
}
