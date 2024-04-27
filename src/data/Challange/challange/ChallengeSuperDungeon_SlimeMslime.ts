import { MultiplierInfo } from "@/data/Multiplier";
import { CHALLENGE_SUPERDUNGEON } from "@/data/challange/CHALLENGE_SUPERDUNGEON";
import { Util } from "@/Util";
import { ChallengeKind } from "@type/ChallengeKind";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { HeroKind } from "@type/HeroKind";

export class ChallengeSuperDungeon_SlimeMslime extends CHALLENGE_SUPERDUNGEON {
  get kind() {
    return ChallengeKind.SDSlimeMslime;
  }

  get sdId() {
    return 4;
  }

  BaseRewardValueIncrementPerFloor(heroKind: HeroKind) {
    switch (heroKind) {
      case HeroKind.Warrior:
        return 0.005;
      case HeroKind.Wizard:
        return 0.005;
      case HeroKind.Angel:
        return 1.0 / 400.0;
      case HeroKind.Thief:
        return 1.0 / 400.0;
      case HeroKind.Archer:
        return 1.0 / 400.0;
      case HeroKind.Tamer:
        return 1.0 / 400.0;
      default:
        return;
    }
  }

  SetReward() {
    this.data.sdg.SetEffectSDDamageMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Warrior)));
    this.data.sdg.SetEffectSDChallengeBossDamageMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Wizard)));
    this.data.sdg.SetEffectSDDamageCutMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Angel)));
    this.data.sdg.SetEffectSDChallengeBossDamageCutMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Thief)));
    this.data.sdg.SetEffectSDArmoredFuryMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Archer)));
    this.data.sdg.SetEffectSDWardedFuryMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Tamer)));
  }

  FloorRewardString(heroKind: HeroKind) {
    switch (heroKind) {
      case HeroKind.Warrior:
        return `SD Damage Multiplier + ${Util.percent(this.FloorRewardValue(HeroKind.Warrior))}`;
      case HeroKind.Wizard:
        return `SD Challenge BOSS Damage Multiplier + ${Util.percent(this.FloorRewardValue(HeroKind.Wizard))}`;
      case HeroKind.Angel:
        return `SD Damage Cut Multiplier + ${Util.percent(this.FloorRewardValue(HeroKind.Angel))}`;
      case HeroKind.Thief:
        return `SD Challenge Boss Damage Cut Multiplier + ${Util.percent(this.FloorRewardValue(HeroKind.Thief))}`;
      case HeroKind.Archer:
        return `SD Armored Fury + ${Util.percent(this.FloorRewardValue(HeroKind.Archer))}`;
      case HeroKind.Tamer:
        return `SD Warded Fury + ${Util.percent(this.FloorRewardValue(HeroKind.Tamer))}`;
      default:
        return;
    }
  }
}
