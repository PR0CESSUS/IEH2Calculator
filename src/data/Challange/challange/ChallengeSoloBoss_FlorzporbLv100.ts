import { CHALLENGE_SOLOBOSS } from "@/data/challange/CHALLENGE_SOLOBOSS";
import { ChallengeKind } from "@type/ChallengeKind";
import { EquipmentPart } from "@type/EquipmentPart";

export class ChallengeSoloBoss_FlorzporbLv100 extends CHALLENGE_SOLOBOSS {
  get kind() {
    return ChallengeKind.SoloFlorzporb100;
  }

  ClassExclusiveRewardString() {
    return this.ClassExclusiveRewardStringEquipmentSlot(EquipmentPart.Weapon);
  }

  SetReward() {
    this.SetRewardEquipmentSlot(EquipmentPart.Weapon);
  }
}
