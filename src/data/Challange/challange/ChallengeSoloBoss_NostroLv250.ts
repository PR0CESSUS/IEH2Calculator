import { CHALLENGE_SOLOBOSS } from "@/data/challange/CHALLENGE_SOLOBOSS";
import { ChallengeKind } from "@type/ChallengeKind";
import { EquipmentPart } from "@type/EquipmentPart";

export class ChallengeSoloBoss_NostroLv250 extends CHALLENGE_SOLOBOSS {
  get kind() {
    return ChallengeKind.SoloNostro250;
  }

  ClassExclusiveRewardString() {
    return this.ClassExclusiveRewardStringEquipmentSlot(EquipmentPart.Armor);
  }

  SetReward() {
    this.SetRewardEquipmentSlot(EquipmentPart.Armor);
  }
}
