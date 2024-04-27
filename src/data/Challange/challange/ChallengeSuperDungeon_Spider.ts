import { MultiplierInfo } from "@/data/Multiplier";
import { CHALLENGE_SUPERDUNGEON } from "@/data/challange/CHALLENGE_SUPERDUNGEON";
import { Util } from "@/Util";
import { ChallengeKind } from "@type/ChallengeKind";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { HeroKind } from "@type/HeroKind";
import { BasicStatsKind } from "@type/BasicStatsKind";

export class ChallengeSuperDungeon_Spider extends CHALLENGE_SUPERDUNGEON {
  get kind() {
    return ChallengeKind.SDSpider;
  }

  get sdId() {
    return 1;
  }

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
        return;
    }
  }

  SetReward() {
    this.data.stats.SetEffectBasicStats(BasicStatsKind.HP, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Warrior)));
    this.data.stats.SetEffectBasicStats(BasicStatsKind.MP, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Wizard)));
    this.data.stats.SetEffectBasicStats(BasicStatsKind.ATK, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Angel)));
    this.data.stats.SetEffectBasicStats(BasicStatsKind.MATK, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Thief)));
    this.data.stats.SetEffectBasicStats(BasicStatsKind.DEF, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Archer)));
    this.data.stats.SetEffectBasicStats(BasicStatsKind.MDEF, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Tamer)));
  }

  FloorRewardString(heroKind: HeroKind) {
    switch (heroKind) {
      case HeroKind.Warrior:
        return `HP + ${Util.percent(this.FloorRewardValue(HeroKind.Warrior))}`;
      case HeroKind.Wizard:
        return `MP + ${Util.percent(this.FloorRewardValue(HeroKind.Wizard))}`;
      case HeroKind.Angel:
        return `ATK + ${Util.percent(this.FloorRewardValue(HeroKind.Angel))}`;
      case HeroKind.Thief:
        return `MATK + ${Util.percent(this.FloorRewardValue(HeroKind.Thief))}`;
      case HeroKind.Archer:
        return `DEF + ${Util.percent(this.FloorRewardValue(HeroKind.Archer))}`;
      case HeroKind.Tamer:
        return `MDEF + ${Util.percent(this.FloorRewardValue(HeroKind.Tamer))}`;
      default:
        return;
    }
  }
}
