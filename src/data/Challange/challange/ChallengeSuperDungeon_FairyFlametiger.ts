import { Util } from "@/Util";
import { MultiplierInfo } from "@/data/Multiplier";
import { CHALLENGE_SUPERDUNGEON } from "@/data/challange/CHALLENGE_SUPERDUNGEON";
import { ChallengeKind } from "@type/ChallengeKind";
import { HeroKind } from "@type/HeroKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { Stats } from "@type/Stats";

export class ChallengeSuperDungeon_FairyFlametiger extends CHALLENGE_SUPERDUNGEON {
  get kind() {
    return ChallengeKind.SDFairyFlametiger;
  }

  get sdId() {
    return 3;
  }

  BaseRewardValueIncrementPerFloor(heroKind: HeroKind) {
    switch (heroKind) {
      case HeroKind.Warrior:
        return 0.01;
      case HeroKind.Wizard:
        return 0.01;
      case HeroKind.Angel:
        return 0.01;
      case HeroKind.Thief:
        return 0.01;
      case HeroKind.Archer:
        return 0.01;
      case HeroKind.Tamer:
        return 0.01;
      default:
        return;
    }
  }

  SetReward() {
    this.data.stats.SetEffectMagicalDamage(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Warrior)));
    this.data.stats.SetEffectStats(Stats.MagCritChance, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Wizard)));
    this.data.stats.SetEffectStats(Stats.WardedFury, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Angel)));
    this.data.stats.SetEffectStats(Stats.DebuffRes, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Thief)));
    this.data.stats.SetEffectElementResistance(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Archer)));
    this.data.stats.SetEffectStats(Stats.PetMagCritChance, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Tamer)));
  }

  FloorRewardString(heroKind: HeroKind) {
    switch (heroKind) {
      case HeroKind.Warrior:
        return `Magical Damage + ${Util.percent(this.FloorRewardValue(HeroKind.Warrior))}`;
      case HeroKind.Wizard:
        return `Magical Critical Chance + ${Util.percent(this.FloorRewardValue(HeroKind.Wizard))}`;
      case HeroKind.Angel:
        return `Warded Fury + ${Util.percent(this.FloorRewardValue(HeroKind.Angel))}`;
      case HeroKind.Thief:
        return `Debuff Resistance + ${Util.percent(this.FloorRewardValue(HeroKind.Thief))}`;
      case HeroKind.Archer:
        return `Element Resistance + ${Util.percent(this.FloorRewardValue(HeroKind.Archer))}`;
      case HeroKind.Tamer:
        return `Pet Base Magical Critical Chance + ${Util.percent(this.FloorRewardValue(HeroKind.Tamer))}`;
      default:
        return;
    }
  }
}
