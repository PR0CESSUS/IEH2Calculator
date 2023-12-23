import { CHALLENGE } from "../CHALLENGE";
import { ChallengeKind } from "../../../type/ChallengeKind";
import { EquipmentPart } from "../../../type/EquipmentPart";
import { ChallengeMonsterKind } from "../../../type/ChallengeMonsterKind";

export class ChallengeSoloBoss_GuardianKorLv200 extends CHALLENGE {
  kind = ChallengeKind.SoloGuardianKor200;

  get challengeMonsterKind() {
    return ChallengeMonsterKind.GuardianKor;
  }

  SetReward() {
    this.SetRewardEquipmentSlot(EquipmentPart.Jewelry);
  }
}
