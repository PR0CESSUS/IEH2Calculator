import { HeroKind } from "../../type/HeroKind";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { Stats } from "../../type/Stats";
import { MonsterColor } from "../../type/MonsterColor";
import { MONSTER_BATTLE } from "./MONSTER_BATTLE";
import { BATTLE_CONTROLLER } from ".";
import { ChallengeMonsterKind } from "../../type/ChallengeMonsterKind";

export class CHALLENGE_BATTLE extends MONSTER_BATTLE {
  get globalInformation() {
    return globalThis.data.monster.GlobalInformationChallengeBoss(this.challengeMonsterKind);
  }

  //   get defeatedNum() {return this.globalInformation.defeatedNums[this.battleCtrl.heroKind];}

  constructor(battleCtrl: BATTLE_CONTROLLER) {
    super(battleCtrl);
    this.species = MonsterSpecies.ChallengeBoss;
  }

  get hp() {
    let base = this.globalInformation.Hp(this.level, this.difficulty);
    let level = this.level;

    switch (this.challengeMonsterKind) {
      case ChallengeMonsterKind.Florzporb:
        return base * Math.max(1.0, Math.pow(5.0, Math.max(0, level - 300) / 100.0)) * Math.max(1.0, Math.pow(5.0, Math.max(0, level - 400) / 100.0));
      case ChallengeMonsterKind.GuardianKor:
        return base * Math.max(1.0, Math.pow(10.0, Math.max(0, level - 400) / 100.0)) * Math.max(1.0, Math.pow(5.0, Math.max(0, level - 500) / 100.0));
      case ChallengeMonsterKind.Arachnetta:
        return base * Math.max(1.0, Math.pow(5.0, Math.max(0, level - 350) / 100.0)) * Math.max(1.0, Math.pow(5.0, Math.max(0, level - 450) / 100.0));
      case ChallengeMonsterKind.Nostro:
        return base * Math.max(1.0, Math.pow(10.0, Math.max(0, level - 450) / 100.0)) * Math.max(1.0, Math.pow(5.0, Math.max(0, level - 550) / 100.0));
      case ChallengeMonsterKind.LadyEmelda:
        return base * Math.pow(2.0, Math.max(1, level - 300) / 100.0) * Math.max(1.0, Math.pow(25.0, Math.max(0, level - 600) / 100.0));
      case ChallengeMonsterKind.NariSune:
        return base * Math.max(1.0, Math.pow(5.0, Math.max(0, level - 350) / 100.0)) * Math.max(1.0, Math.pow(10.0, Math.max(0, level - 650) / 100.0));
      case ChallengeMonsterKind.Octobaddie:
        return base * Math.max(1.0, Math.pow(1000000.0, Math.max(0, level - 400) / 100.0)) * Math.max(1.0, Math.pow(10.0, Math.max(0, level - 700) / 100.0));

      default:
        return base;
    }
  }

  DamageModifier(value) {
    return globalThis.data.custom.isSuperDungeon
      ? value * this.battleCtrl.superDungeonCtrl.damageMultiplier.Value() * this.battleCtrl.superDungeonCtrl.sdChallengeBossDamageMultiplier.Value()
      : value;
  }
}
