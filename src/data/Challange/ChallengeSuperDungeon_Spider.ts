import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { HeroKind } from "../../type/HeroKind";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { CHALLENGE_SUPERDUNGEON } from "./CHALLENGE_SUPERDUNGEON";

export class ChallengeSuperDungeon_Spider extends CHALLENGE_SUPERDUNGEON {
  //   get kind() {return ChallengeKind.SDSpider;}

  superDungeonId: number = 1;

  BaseRewardValueIncrementPerFloor(heroKind: HeroKind) {
    switch (heroKind) {
      case HeroKind.Warrior:
        return 0.025;
      case HeroKind.Wizard:
        return 0.025;
      case HeroKind.Angel:
        return 0.025;
      case HeroKind.Thief:
        return 0.025;
      case HeroKind.Archer:
        return 0.025;
      case HeroKind.Tamer:
        return 0.025;
      default:
        return 0;
    }
  }

  SetReward() {
    globalThis.data.stats.SetEffectBasicStats(
      BasicStatsKind.HP,
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Warrior))
    );
    globalThis.data.stats.SetEffectBasicStats(
      BasicStatsKind.MP,
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Wizard))
    );
    globalThis.data.stats.SetEffectBasicStats(
      BasicStatsKind.ATK,
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Angel))
    );
    globalThis.data.stats.SetEffectBasicStats(
      BasicStatsKind.MATK,
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Thief))
    );
    globalThis.data.stats.SetEffectBasicStats(
      BasicStatsKind.DEF,
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Archer))
    );
    globalThis.data.stats.SetEffectBasicStats(
      BasicStatsKind.MDEF,
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Tamer))
    );
  }
}
