import { MultiplierInfo } from "@/data/Multiplier";
import { CHALLENGE_HANDICAPPED } from "@/data/challange/CHALLENGE_HANDICAPPED";
import { Util } from "@/Util";
import { ChallengeKind } from "@type/ChallengeKind";
import { ResourceKind } from "@type/ResourceKind";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { Stats } from "@type/Stats";

export class ChallengeHandicap_OctobaddieLv500 extends CHALLENGE_HANDICAPPED {
  get kind() {
    return ChallengeKind.HCOctobaddie500;
  }

  ClassExclusiveRewardString() {
    return [
      `Armored Fury + ${Util.percent(0.2 * this.data.challenge.permanentRewardMultiplier.Value())}`,
      `Warded Fury + ${Util.percent(0.2 * this.data.challenge.permanentRewardMultiplier.Value())}`,
      `Gold Cap + ${Util.percent(0.2 * this.data.challenge.permanentRewardMultiplier.Value())}`,
      `Stone Gain + ${Util.percent(5 * this.data.challenge.permanentRewardMultiplier.Value())}`,
      `Crystal Gain + ${Util.percent(5 * this.data.challenge.permanentRewardMultiplier.Value())}`,
      `Leaf Gain + ${Util.percent(5 * this.data.challenge.permanentRewardMultiplier.Value())}`,
    ];
  }

  SetReward() {
    this.data.stats.SetEffectStats(
      Stats.ArmoredFury,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 0.2 * this.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardWarrior
      )
    );
    this.data.stats.SetEffectStats(
      Stats.WardedFury,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 0.2 * this.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardWizard
      )
    );
    this.data.resource.goldCap.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 0.2 * this.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardAngel
      )
    );
    this.data.stats.ResourceGain(ResourceKind.Stone).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 5.0 * this.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardThief
      )
    );
    this.data.stats.ResourceGain(ResourceKind.Crystal).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 5.0 * this.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardArcher
      )
    );
    this.data.stats.ResourceGain(ResourceKind.Leaf).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 5.0 * this.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardTamer
      )
    );
  }
}
