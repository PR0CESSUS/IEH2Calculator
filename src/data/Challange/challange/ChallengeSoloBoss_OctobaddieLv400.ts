import { CHALLENGE_SOLOBOSS } from "@/data/challange/CHALLENGE_SOLOBOSS";
import { ChallengeKind } from "@type/ChallengeKind";
import { EquipmentPart } from "@type/EquipmentPart";

export class ChallengeSoloBoss_OctobaddieLv400 extends CHALLENGE_SOLOBOSS {
  get kind() {
    return ChallengeKind.SoloOctobaddie400;
  }

  ClassExclusiveRewardString() {
    return this.ClassExclusiveRewardStringEquipmentSlot(EquipmentPart.Armor);
  }

  SetReward() {
    this.SetRewardEquipmentSlot(EquipmentPart.Armor);
  }
}
