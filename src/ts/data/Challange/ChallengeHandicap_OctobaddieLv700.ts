import { MultiplierInfo } from "../../Multiplier";
import { ChallengeKind } from "../../type/ChallengeKind";
import { ResourceKind } from "../../type/ResourceKind";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Stats } from "../../type/Stats";

import { CHALLENGE } from "./CHALLENGE";
export class ChallengeHandicap_OctobaddieLv700 extends CHALLENGE {
  kind: ChallengeKind = ChallengeKind.HCOctobaddie700;

  SetReward() {
    globalThis.data.stats.SetEffectStats(
      Stats.ArmoredFury,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 0.8 * globalThis.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardWarrior
      )
    );
    globalThis.data.stats.SetEffectStats(
      Stats.WardedFury,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 0.8 * globalThis.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardWizard
      )
    );
    globalThis.data.resource.goldCap.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 0.8 * globalThis.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardAngel
      )
    );
    globalThis.data.stats.ResourceGain(ResourceKind.Stone).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 125.0 * globalThis.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardThief
      )
    );
    globalThis.data.stats.ResourceGain(ResourceKind.Crystal).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 125.0 * globalThis.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardArcher
      )
    );
    globalThis.data.stats.ResourceGain(ResourceKind.Leaf).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 125.0 * globalThis.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardTamer
      )
    );
  }
}
