import { MultiplierInfo } from "../../Multiplier";
import { ChallengeKind } from "../../type/ChallengeKind";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { BasicStatsKind } from "../../type/BasicStatsKind";

import { CHALLENGE } from './CHALLENGE';
export class ChallengeHandicap_LadyEmeldaLv400 extends CHALLENGE {
 
  kind : ChallengeKind = ChallengeKind.HCLadyEmelda400;

  
  SetReward() {
    globalThis.data.stats.SetEffectBasicStats(BasicStatsKind.HP, new MultiplierInfo(MultiplierKind.Challenge, MultiplierType.Mul, () => 0.6 * globalThis.data.challenge.permanentRewardMultiplier.Value(), () => this.isReceivedRewardWarrior));
    globalThis.data.stats.SetEffectBasicStats(BasicStatsKind.MP, new MultiplierInfo(MultiplierKind.Challenge, MultiplierType.Mul, () => 0.6 * globalThis.data.challenge.permanentRewardMultiplier.Value(), () => this.isReceivedRewardWizard));
    globalThis.data.stats.SetEffectBasicStats(BasicStatsKind.ATK, new MultiplierInfo(MultiplierKind.Challenge, MultiplierType.Mul, () => 0.6 * globalThis.data.challenge.permanentRewardMultiplier.Value(), () => this.isReceivedRewardAngel));
    globalThis.data.stats.SetEffectBasicStats(BasicStatsKind.MATK, new MultiplierInfo(MultiplierKind.Challenge, MultiplierType.Mul, () => 0.6 * globalThis.data.challenge.permanentRewardMultiplier.Value(), () => this.isReceivedRewardThief));
    globalThis.data.stats.SetEffectBasicStats(BasicStatsKind.DEF, new MultiplierInfo(MultiplierKind.Challenge, MultiplierType.Mul, () => 0.6 * globalThis.data.challenge.permanentRewardMultiplier.Value(), () => this.isReceivedRewardArcher));
    globalThis.data.stats.SetEffectBasicStats(BasicStatsKind.MDEF, new MultiplierInfo(MultiplierKind.Challenge, MultiplierType.Mul, () => 0.6 * globalThis.data.challenge.permanentRewardMultiplier.Value(), () => this.isReceivedRewardTamer));
  }

}
