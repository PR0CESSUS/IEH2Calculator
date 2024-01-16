import { CHALLENGE } from "../CHALLENGE";
import { ChallengeKind } from "../../../type/ChallengeKind";
import { EquipmentPart } from "../../../type/EquipmentPart";
import { ChallengeMonsterKind } from "../../../type/ChallengeMonsterKind";

export class ChallengeSoloBoss_NariSuneLv350 extends CHALLENGE {
  kind = ChallengeKind.SoloNariSune350;

  get challengeMonsterKind() {
    return ChallengeMonsterKind.NariSune;
  }

  SetReward() {
    this.SetRewardEquipmentSlot(EquipmentPart.Jewelry);
  }
}
