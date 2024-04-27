import { CHALLENGE_SOLOBOSS } from "@/data/challange/CHALLENGE_SOLOBOSS";
import { ChallengeKind } from "@type/ChallengeKind";
import { EquipmentPart } from "@type/EquipmentPart";

export class ChallengeSoloBoss_GuardianKorLv200 extends CHALLENGE_SOLOBOSS {
  get kind() {
    return ChallengeKind.SoloGuardianKor200;
  }

  ClassExclusiveRewardString() {
    return this.ClassExclusiveRewardStringEquipmentSlot(EquipmentPart.Jewelry);
  }

  SetReward() {
    this.SetRewardEquipmentSlot(EquipmentPart.Jewelry);
  }
}
