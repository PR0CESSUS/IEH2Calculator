import { MultiplierInfo } from "@/data/Multiplier";
import { CHALLENGE_SOLOBOSS } from "@/data/challange/CHALLENGE_SOLOBOSS";
import { ChallengeKind } from "@type/ChallengeKind";
import { HeroKind } from "@type/HeroKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";

export class ChallengeSoloBoss_ArachnettaLv150 extends CHALLENGE_SOLOBOSS {
  get kind() {
    return ChallengeKind.SoloArachnetta150;
  }

  SetReward() {
    this.data.stats.SkillSlotNum(HeroKind.Warrior).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Add,
        () => 1.0,
        () => this.isReceivedRewardWarrior
      )
    );
    this.data.stats.SkillSlotNum(HeroKind.Wizard).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Add,
        () => 1.0,
        () => this.isReceivedRewardWizard
      )
    );
    this.data.stats.SkillSlotNum(HeroKind.Angel).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Add,
        () => 1.0,
        () => this.isReceivedRewardAngel
      )
    );
    this.data.stats.SkillSlotNum(HeroKind.Thief).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Add,
        () => 1.0,
        () => this.isReceivedRewardThief
      )
    );
    this.data.stats.SkillSlotNum(HeroKind.Archer).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Add,
        () => 1.0,
        () => this.isReceivedRewardArcher
      )
    );
    this.data.stats.SkillSlotNum(HeroKind.Tamer).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Add,
        () => 1.0,
        () => this.isReceivedRewardTamer
      )
    );
    this.data.stats.globalSkillSlotNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Add,
        () => 1.0,
        () => this.isReceivedRewardComplete
      )
    );
  }
}
