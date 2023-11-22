import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { HeroKind } from "../../type/HeroKind";
import { Stats } from "../../type/Stats";
import { Element } from "../../type/Element";
import { CHALLENGE_SUPERDUNGEON } from "./CHALLENGE_SUPERDUNGEON";

export class ChallengeSuperDungeon_BatTreant extends CHALLENGE_SUPERDUNGEON {
  superDungeonId: number = 2;

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
        return 0;
    }
  }

  SetReward() {
    globalThis.data.stats.SetEffectElementDamage(
      Element.Physical,
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Warrior))
    );
    globalThis.data.stats.SetEffectStats(
      Stats.PhysCritChance,
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Wizard))
    );
    globalThis.data.stats.SetEffectStats(
      Stats.ArmoredFury,
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Angel))
    );
    globalThis.data.stats.SetEffectStats(
      Stats.CriticalDamage,
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Thief))
    );
    globalThis.data.stats.SetEffectStats(
      Stats.PetCriticalDamage,
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Archer))
    );
    globalThis.data.stats.SetEffectStats(
      Stats.PetPhysCritChance,
      new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Tamer))
    );
  }
}
