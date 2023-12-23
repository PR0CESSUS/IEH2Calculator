import { CHALLENGE } from "../CHALLENGE";
import { ChallengeKind } from "../../../type/ChallengeKind";
import { EquipmentPart } from "../../../type/EquipmentPart";
import { ChallengeMonsterKind } from "../../../type/ChallengeMonsterKind";

export class ChallengeSoloBoss_NostroLv250 extends CHALLENGE {
  kind = ChallengeKind.SoloNostro250;

  get challengeMonsterKind() {
    return ChallengeMonsterKind.Nostro;
  }

  SetReward() {
    this.SetRewardEquipmentSlot(EquipmentPart.Armor);
  }
}
