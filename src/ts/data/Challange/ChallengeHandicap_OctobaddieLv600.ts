import { MultiplierInfo } from "../../Multiplier";
import { ChallengeKind } from "../../type/ChallengeKind";
import { ResourceKind } from "../../type/ResourceKind";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Stats } from "../../type/Stats";

import { CHALLENGE } from "./CHALLENGE";
export class ChallengeHandicap_OctobaddieLv600 extends CHALLENGE {
  kind: ChallengeKind = ChallengeKind.HCOctobaddie600;

  SetReward() {
    globalThis.data.stats.SetEffectStats(
      Stats.ArmoredFury,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 0.4 * globalThis.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardWarrior
      )
    );
    globalThis.data.stats.SetEffectStats(
      Stats.WardedFury,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 0.4 * globalThis.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardWizard
      )
    );
    globalThis.data.resource.goldCap.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 0.4 * globalThis.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardAngel
      )
    );
    globalThis.data.stats.ResourceGain(ResourceKind.Stone).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 25.0 * globalThis.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardThief
      )
    );
    globalThis.data.stats.ResourceGain(ResourceKind.Crystal).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 25.0 * globalThis.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardArcher
      )
    );
    globalThis.data.stats.ResourceGain(ResourceKind.Leaf).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 25.0 * globalThis.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardTamer
      )
    );
  }
}
