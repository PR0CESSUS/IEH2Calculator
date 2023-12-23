import { MultiplierInfo } from "../../../Multiplier";
import { CHALLENGE } from "../CHALLENGE";
import { ChallengeKind } from "../../../type/ChallengeKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { ChallengeMonsterKind } from "../../../type/ChallengeMonsterKind";

export class ChallengeSoloBoss_ArachnettaLv150 extends CHALLENGE {
  kind = ChallengeKind.SoloArachnetta150;

  get challengeMonsterKind() {
    return ChallengeMonsterKind.Arachnetta;
  }

  SetReward() {
    globalThis.data.stats.SkillSlotNum(HeroKind.Warrior).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Add,
        () => 1.0,
        () => this.isReceivedRewardWarrior
      )
    );
    globalThis.data.stats.SkillSlotNum(HeroKind.Wizard).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Add,
        () => 1.0,
        () => this.isReceivedRewardWizard
      )
    );
    globalThis.data.stats.SkillSlotNum(HeroKind.Angel).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Add,
        () => 1.0,
        () => this.isReceivedRewardAngel
      )
    );
    globalThis.data.stats.SkillSlotNum(HeroKind.Thief).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Add,
        () => 1.0,
        () => this.isReceivedRewardThief
      )
    );
    globalThis.data.stats.SkillSlotNum(HeroKind.Archer).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Add,
        () => 1.0,
        () => this.isReceivedRewardArcher
      )
    );
    globalThis.data.stats.SkillSlotNum(HeroKind.Tamer).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Add,
        () => 1.0,
        () => this.isReceivedRewardTamer
      )
    );
    globalThis.data.stats.globalSkillSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Add,
        () => 1.0,
        () => this.isReceivedRewardComplete
      )
    );
  }
}
