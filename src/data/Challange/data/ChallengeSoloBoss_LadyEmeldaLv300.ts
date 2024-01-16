import { CHALLENGE } from "../CHALLENGE";
import { ChallengeKind } from "../../../type/ChallengeKind";
import { EquipmentPart } from "../../../type/EquipmentPart";
import { ChallengeMonsterKind } from "../../../type/ChallengeMonsterKind";

export class ChallengeSoloBoss_LadyEmeldaLv300 extends CHALLENGE {
  kind = ChallengeKind.SoloLadyEmelda300;

  get challengeMonsterKind() {
    return ChallengeMonsterKind.LadyEmelda;
  }

  SetReward() {
    this.SetRewardEquipmentSlot(EquipmentPart.Weapon);
  }
}
