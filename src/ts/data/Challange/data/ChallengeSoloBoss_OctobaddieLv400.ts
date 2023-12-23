import { CHALLENGE } from "../CHALLENGE";
import { ChallengeKind } from "../../../type/ChallengeKind";
import { EquipmentPart } from "../../../type/EquipmentPart";
import { ChallengeMonsterKind } from "../../../type/ChallengeMonsterKind";

export class ChallengeSoloBoss_OctobaddieLv400 extends CHALLENGE {
  kind = ChallengeKind.SoloOctobaddie400;

  get challengeMonsterKind() {
    return ChallengeMonsterKind.Octobaddie;
  }

  SetReward() {
    this.SetRewardEquipmentSlot(EquipmentPart.Armor);
  }
}
