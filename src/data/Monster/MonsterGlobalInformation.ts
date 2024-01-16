import { Enums } from "../../Enums";
import { Debuff } from "../../type/Debuff";
import { MultiplierKind } from "../../type/MultiplierKind";
import { HeroKind } from "../../type/HeroKind";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { Element } from "../../type/Element";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { MonsterColor } from "../../type/MonsterColor";
import { ChallengeMonsterKind } from "../../type/ChallengeMonsterKind";
import { Stats } from "../../type/Stats";
import { MonsterPet } from "./MonsterPet";
import { MonsterParameter } from "./MonsterParameter";

export class MonsterGlobalInformation {
  pet: MonsterPet;
  isLogStats: boolean[] = Array(Enums.HeroKind);
  species: MonsterSpecies;
  color: MonsterColor;
  challengeMonsterKind: ChallengeMonsterKind;
  //   defeatedNums: MonsterDefeatedNumber[] = Array(Enums.HeroKind);
  //   defeatedMutantNums: MonsterDefeatedNumber[] = Array(Enums.HeroKind);
  //   capturedNums: MonsterCapturedNumber[] = Array(Enums.HeroKind);
  //   capturedMutantNums: MonsterCapturedNumber[] = Array(Enums.HeroKind);

  constructor(species: MonsterSpecies, color: number) {
    this.species = species;
    this.color = color;
    if (species == MonsterSpecies.ChallengeBoss) this.challengeMonsterKind = color;
    // for (let index1 = 0; index1 < this.defeatedNums.length; index1++) {
    //   index2 = index1;
    //   this.defeatedNums[index2] = new MonsterDefeatedNumber(species, color, index2);
    //   this.defeatedMutantNums[index2] = new MonsterDefeatedNumber(species, color, index2, true);
    //   this.capturedNums[index2] = new MonsterCapturedNumber(species, color, index2);
    //   this.capturedMutantNums[index2] = new MonsterCapturedNumber(species, color, index2, true);
    // }
    this.pet = new MonsterPet(this, species, color);
  }

  Start() {
    this.pet.Start();
  }

  AttackElement() {
    return MonsterParameter.monsterAttackElements[this.species][this.colorId];
  }
  // , isPet, heroKind: HeroKind
  Hp(level, difficulty) {
    if (this.color == MonsterColor.Metal) return MonsterParameter.monsterStats[this.species][this.colorId][0] * level;
    // console.log(MonsterParameter.monsterStats[11]);

    let num1 = MonsterParameter.monsterStats[this.species][this.colorId][0];
    let num2;
    // if (isPet) {
    // let a = num1 * ((this.pet.Level() + 1) + 1.0 * Math.pow(this.pet.Level() / 5.0, 2.0)) * (1.0 + 0.05 * this.pet.loyalty.value) * Math.pow(2.0, Math.floor(this.pet.Level() / 50.0)) * globalThis.data.monster.petStatsMultiplier.Value() * globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.HP).Mul();
    // if (this.isLogStats[heroKind] && a >= 1.0)
    //   a = MonsterParameter.monsterStats[this.species][this.colorId][0] + Math.log(a, Multiplier.logBase);
    // num2 = a + globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.HP).After();
    // } else {
    let num3 =
      num1 *
      (1.0 +
        (level - 1) / 2.0 +
        1.0 * Math.pow(level / 5.0, 2.0) +
        2.5 * Math.pow(level / 10.0, 3.0) +
        5.0 * Math.pow(level / 20.0, 4.0) +
        25.0 * Math.pow(level / 40.0, 5.0) +
        100.0 * Math.pow(level / 80.0, 8.0) +
        1000.0 * Math.pow(level / 120.0, 10.0) +
        50000.0 * Math.pow(level / 200.0, 15.0) +
        250000.0 * Math.pow(level / 300.0, 20.0));
    if (level < 100) num3 *= 0.5 + (0.5 * level) / 100.0;
    if (level >= 400) {
      num3 *= Math.pow(3.0, (level - 400) / 100.0);
      if (level >= 500) num3 *= Math.pow(5.0, (level - 500) / 100.0);
      if (level >= 600) num3 *= Math.pow(10.0, (level - 600) / 100.0);
      if (this.species == MonsterSpecies.ChallengeBoss) num3 *= Math.pow(5.0, (level - 400) / 100.0);
    }
    num2 = num3 * Math.pow(10.0, difficulty / 10.0);
    // }
    return num2;
  }

  MAtk(level, difficulty) {
    if (this.color == MonsterColor.Metal) return MonsterParameter.monsterStats[this.species][this.colorId][3] * level;
    let num1 = MonsterParameter.monsterStats[this.species][this.colorId][3];

    let num2 = num1 * (1.0 + level * 0.75 + 20.0 * Math.pow(level / 100.0, 3.0) + 100.0 * Math.pow(level / 250.0, 5.0));
    if (level >= 400) num2 *= Math.pow(3.0, (level - 400) / 100.0);
    if (level >= 500) num2 *= Math.pow(5.0, (level - 500) / 100.0);
    if (level >= 1000) num2 *= Math.pow(10.0, (level - 1000) / 100.0);

    return num2 * Math.pow(2.0, difficulty / 10.0);
  }

  Def(level, difficulty) {
    if (this.color == MonsterColor.Metal) return MonsterParameter.monsterStats[this.species][this.colorId][4];
    let num1 = MonsterParameter.monsterStats[this.species][this.colorId][4];

    let num2 = num1 * (level + 10.0 * Math.pow(level / 100.0, 3.0) + 50.0 * Math.pow(level / 250.0, 5.0));
    if (level >= 400) num2 *= Math.pow(2.0, (level - 400) / 100.0);
    if (level >= 1000) num2 *= Math.pow(10.0, (level - 1000) / 100.0);

    return num2 * Math.pow(2.0, difficulty / 10.0);
  }
  MDef(level, difficulty) {
    if (this.color == MonsterColor.Metal) return MonsterParameter.monsterStats[this.species][this.colorId][5];
    let num1 = MonsterParameter.monsterStats[this.species][this.colorId][5];

    let num2 = num1 * (level + 10.0 * Math.pow(level / 100.0, 3.0) + 50.0 * Math.pow(level / 250.0, 5.0));
    if (level >= 400) num2 *= Math.pow(2.0, (level - 400) / 100.0);
    if (level >= 1000) num2 *= Math.pow(10.0, (level - 1000) / 100.0);

    return num2 * Math.pow(2.0, difficulty / 10.0);
  }
  Spd() {
    return MonsterParameter.monsterStats[this.species][this.colorId][6];
    // let a = MonsterParameter.monsterStats[this.species][this.colorId][6] * globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.SPD).Mul() * globalThis.data.stats.heroes[heroKind].summonPetSPDMoveSpeedMultiplier.Value() * (1.0 + 0.05 * this.pet.loyalty.value) * Math.pow(2.0, Math.floor(this.pet.Level() / 50.0)) * globalThis.data.monster.petStatsMultiplier.Value();
    // if (this.isLogStats[heroKind] && a >= 1.0)
    //   a = MonsterParameter.monsterStats[this.species][this.colorId][6] + Math.log(a, Multiplier.logBase);
    // return a + globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.SPD).After();
  }

  Fire() {
    // if (!isPet)
    return MonsterParameter.monsterStats[this.species][this.colorId][7];
    // let num = MonsterParameter.monsterStats[this.species][this.colorId][7] * globalThis.data.stats.HeroStats(heroKind, Stats.FireRes).Mul();
    // if (this.isLogStats[heroKind] && num >= 0.01)
    //   num = MonsterParameter.monsterStats[this.species][this.colorId][7] + Math.log(num * 100.0, Multiplier.logBase) / 100.0;
    // return num + globalThis.data.stats.HeroStats(heroKind, Stats.FireRes).After();
  }

  Ice() {
    return MonsterParameter.monsterStats[this.species][this.colorId][8];
  }
  Thunder() {
    return MonsterParameter.monsterStats[this.species][this.colorId][9];
  }
  Light() {
    return MonsterParameter.monsterStats[this.species][this.colorId][10];
  }
  Dark() {
    return MonsterParameter.monsterStats[this.species][this.colorId][11];
  }

  get colorId() {
    return this.species == MonsterSpecies.ChallengeBoss ? this.challengeMonsterKind : this.color;
  }
}
