import { MultiplierInfo } from "@/data/Multiplier";
import { CHALLENGE_SUPERDUNGEON } from "@/data/challange/CHALLENGE_SUPERDUNGEON";
import { Util } from "@/Util";
import { ChallengeKind } from "@type/ChallengeKind";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { HeroKind } from "@type/HeroKind";
import { Element } from "@type/Element";
import { Stats } from "@type/Stats";

export class ChallengeSuperDungeon_BatTreant extends CHALLENGE_SUPERDUNGEON {
  get kind() {
    return ChallengeKind.SDBatTreant;
  }

  get sdId() {
    return 2;
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
    this.data.stats.SetEffectElementDamage(Element.Physical, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Warrior)));
    this.data.stats.SetEffectStats(Stats.PhysCritChance, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Wizard)));
    this.data.stats.SetEffectStats(Stats.ArmoredFury, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Angel)));
    this.data.stats.SetEffectStats(Stats.CriticalDamage, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Thief)));
    this.data.stats.SetEffectStats(Stats.PetCriticalDamage, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Archer)));
    this.data.stats.SetEffectStats(Stats.PetPhysCritChance, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Tamer)));
  }

  FloorRewardString(heroKind: HeroKind) {
    switch (heroKind) {
      case HeroKind.Warrior:
        return `Physical Damage + ${Util.percent(this.FloorRewardValue(HeroKind.Warrior))}`;
      case HeroKind.Wizard:
        return `Physical Critical Chance + ${Util.percent(this.FloorRewardValue(HeroKind.Wizard))}`;
      case HeroKind.Angel:
        return `Armored Fury + ${Util.percent(this.FloorRewardValue(HeroKind.Angel))}`;
      case HeroKind.Thief:
        return `Critical Damage + ${Util.percent(this.FloorRewardValue(HeroKind.Thief))}`;
      case HeroKind.Archer:
        return `Pet Base Critical Damage + ${Util.percent(this.FloorRewardValue(HeroKind.Archer))}`;
      case HeroKind.Tamer:
        return `Pet Base Physical Critical Chance + ${Util.percent(this.FloorRewardValue(HeroKind.Tamer))}`;
      default:
        return;
    }
  }
}
