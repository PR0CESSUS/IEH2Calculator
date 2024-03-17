import { CHALLENGE_SOLOBOSS } from "@/data/challange/CHALLENGE_SOLOBOSS";
import { ChallengeKind } from "@type/ChallengeKind";
import { EquipmentPart } from "@type/EquipmentPart";

export class ChallengeSoloBoss_LadyEmeldaLv300 extends CHALLENGE_SOLOBOSS {
  get kind() {
    return ChallengeKind.SoloLadyEmelda300;
  }

  ClassExclusiveRewardString() {
    return this.ClassExclusiveRewardStringEquipmentSlot(EquipmentPart.Weapon);
  }

  SetReward() {
    this.SetRewardEquipmentSlot(EquipmentPart.Weapon);
  }
}
