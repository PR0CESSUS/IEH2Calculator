import { CHALLENGE_SOLOBOSS } from "@/data/challange/CHALLENGE_SOLOBOSS";
import { ChallengeKind } from "@type/ChallengeKind";
import { EquipmentPart } from "@type/EquipmentPart";

export class ChallengeSoloBoss_NariSuneLv350 extends CHALLENGE_SOLOBOSS {
  get kind() {
    return ChallengeKind.SoloNariSune350;
  }

  ClassExclusiveRewardString() {
    return this.ClassExclusiveRewardStringEquipmentSlot(EquipmentPart.Jewelry);
  }

  SetReward() {
    this.SetRewardEquipmentSlot(EquipmentPart.Jewelry);
  }
}
