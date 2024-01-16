import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { HeroKind } from "../../type/HeroKind";
import { CHALLENGE_SUPERDUNGEON } from "./CHALLENGE_SUPERDUNGEON";

export class ChallengeSuperDungeon_SlimeMslime extends CHALLENGE_SUPERDUNGEON {
  superDungeonId: number = 4;

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
        return 0;
    }
  }

  SetReward() {
    globalThis.data.sdg.SetEffectSDDamageMultiplier(
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Warrior))
    );
    globalThis.data.sdg.SetEffectSDChallengeBossDamageMultiplier(
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Wizard))
    );
    globalThis.data.sdg.SetEffectSDDamageCutMultiplier(
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Angel))
    );
    globalThis.data.sdg.SetEffectSDChallengeBossDamageCutMultiplier(
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Thief))
    );
    globalThis.data.sdg.SetEffectSDArmoredFuryMultiplier(
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Archer))
    );
    globalThis.data.sdg.SetEffectSDWardedFuryMultiplier(
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Tamer))
    );
  }
}
