import { Util } from "@/Util";
import { MultiplierInfo } from "@/data/Multiplier";
import { CHALLENGE_SUPERDUNGEON } from "@/data/challange/CHALLENGE_SUPERDUNGEON";
import { ChallengeKind } from "@type/ChallengeKind";
import { HeroKind } from "@type/HeroKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { ResourceKind } from "@type/ResourceKind";

export class ChallengeSuperDungeon_Slime extends CHALLENGE_SUPERDUNGEON {
  get kind() {
    return ChallengeKind.SDSlime;
  }

  get sdId() {
    return 0;
  }

  BaseRewardValueIncrementPerFloor(heroKind: HeroKind) {
    switch (heroKind) {
      case HeroKind.Warrior:
        return 1.0;
      case HeroKind.Wizard:
        return 1.0;
      case HeroKind.Angel:
        return 1.0;
      case HeroKind.Thief:
        return 0.2;
      case HeroKind.Archer:
        return 0.05;
      case HeroKind.Tamer:
        return 0.05;
      default:
        return;
    }
  }

  SetReward() {
    this.data.stats
      .ResourceGain(ResourceKind.Stone)
      .RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Warrior)));
    this.data.stats
      .ResourceGain(ResourceKind.Crystal)
      .RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Wizard)));
    this.data.stats
      .ResourceGain(ResourceKind.Leaf)
      .RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Angel)));
    this.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Thief)));
    this.data.stats.GoldGain().RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Archer)));
    this.data.resource.slimeCoinCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Tamer)));
  }

  FloorRewardString(heroKind: HeroKind) {
    switch (heroKind) {
      case HeroKind.Warrior:
        return `Stone Gain + ${Util.percent(this.FloorRewardValue(HeroKind.Warrior))}`;
      case HeroKind.Wizard:
        return `Crystal Gain + ${Util.percent(this.FloorRewardValue(HeroKind.Wizard))}`;
      case HeroKind.Angel:
        return `Leaf Gain + ${Util.percent(this.FloorRewardValue(HeroKind.Angel))}`;
      case HeroKind.Thief:
        return `Gold Cap + ${Util.percent(this.FloorRewardValue(HeroKind.Thief))}`;
      case HeroKind.Archer:
        return `Gold Gain + ${Util.percent(this.FloorRewardValue(HeroKind.Archer))}`;
      case HeroKind.Tamer:
        return `Slime Coin Cap + ${Util.percent(this.FloorRewardValue(HeroKind.Tamer))}`;
      default:
        return;
    }
  }
}
