import { MultiplierInfo } from "../../Multiplier";
import { ChallengeKind } from "../../type/ChallengeKind";
import { ResourceKind } from "../../type/ResourceKind";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { HeroKind } from "../../type/HeroKind";
import { Stats } from "../../type/Stats";
import { CHALLENGE_SUPERDUNGEON } from "./CHALLENGE_SUPERDUNGEON";

export class ChallengeSuperDungeon_Slime extends CHALLENGE_SUPERDUNGEON {
  //   get kind() {
  //     return ChallengeKind.SDSlime;
  //   }

  superDungeonId: number = 0;

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
        return 0;
    }
  }

  SetReward() {
    globalThis.data.stats
      .ResourceGain(ResourceKind.Stone)
      .RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Warrior))
      );
    globalThis.data.stats
      .ResourceGain(ResourceKind.Crystal)
      .RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Wizard))
      );
    globalThis.data.stats
      .ResourceGain(ResourceKind.Leaf)
      .RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Angel)));
    globalThis.data.resource.goldCap.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Thief))
    );
    globalThis.data.stats
      .GoldGain()
      .RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Archer))
      );
    globalThis.data.resource.slimeCoinCap.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Tamer))
    );
  }
}
