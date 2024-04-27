import { MultiplierInfo } from "@/data/Multiplier";
import { CHALLENGE_HANDICAPPED } from "@/data/challange/CHALLENGE_HANDICAPPED";
import { Util } from "@/Util";
import { ChallengeKind } from "@type/ChallengeKind";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { BasicStatsKind } from "@type/BasicStatsKind";

export class ChallengeHandicap_NariSuneLv750 extends CHALLENGE_HANDICAPPED {
  get kind() {
    return ChallengeKind.HCNariSune750;
  }

  ClassExclusiveRewardString() {
    return [
      `HP + ${Util.percent(1.0 * this.data.challenge.permanentRewardMultiplier.Value())}`,
      `MP + ${Util.percent(1.0 * this.data.challenge.permanentRewardMultiplier.Value())}`,
      `ATK + ${Util.percent(1.0 * this.data.challenge.permanentRewardMultiplier.Value())}`,
      `MATK + ${Util.percent(1.0 * this.data.challenge.permanentRewardMultiplier.Value())}`,
      `DEF + ${Util.percent(1.0 * this.data.challenge.permanentRewardMultiplier.Value())}`,
      `MDEF + ${Util.percent(1.0 * this.data.challenge.permanentRewardMultiplier.Value())}`,
    ];
  }

  SetReward() {
    this.data.stats.SetEffectBasicStats(
      BasicStatsKind.HP,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 1.0 * this.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardWarrior
      )
    );
    this.data.stats.SetEffectBasicStats(
      BasicStatsKind.MP,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 1.0 * this.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardWizard
      )
    );
    this.data.stats.SetEffectBasicStats(
      BasicStatsKind.ATK,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 1.0 * this.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardAngel
      )
    );
    this.data.stats.SetEffectBasicStats(
      BasicStatsKind.MATK,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 1.0 * this.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardThief
      )
    );
    this.data.stats.SetEffectBasicStats(
      BasicStatsKind.DEF,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 1.0 * this.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardArcher
      )
    );
    this.data.stats.SetEffectBasicStats(
      BasicStatsKind.MDEF,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => 1.0 * this.data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardTamer
      )
    );
  }
}
