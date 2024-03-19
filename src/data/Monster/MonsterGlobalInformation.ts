import { DATA } from "..";
import { Enums } from "../../Enums";
import { Localization } from "../../localization";
import { ChallengeMonsterKind } from "../../type/ChallengeMonsterKind";
import { Element } from "../../type/Element";
import { HeroKind } from "../../type/HeroKind";
import { MonsterColor } from "../../type/MonsterColor";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { MonsterParameter } from "./MonsterParameter";
import { MonsterPet } from "./MonsterPet";

export class MonsterGlobalInformation {
  data: DATA;
  pet: MonsterPet;
  isLogStats: boolean[] = Array(Enums.HeroKind);
  species: MonsterSpecies;
  color: MonsterColor;
  challengeMonsterKind: ChallengeMonsterKind;
  //   defeatedNums: MonsterDefeatedNumber[] = Array(Enums.HeroKind);
  //   defeatedMutantNums: MonsterDefeatedNumber[] = Array(Enums.HeroKind);
  //   capturedNums: MonsterCapturedNumber[] = Array(Enums.HeroKind);
  //   capturedMutantNums: MonsterCapturedNumber[] = Array(Enums.HeroKind);

  constructor(DATA: DATA, species: MonsterSpecies, color: number) {
    this.data = DATA;
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
    this.pet = new MonsterPet(this.data, this, species, color);
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
    // let a = num1 * ((this.pet.Level() + 1) + 1.0 * Math.pow(this.pet.Level() / 5.0, 2.0)) * (1.0 + 0.05 * this.pet.loyalty.value) * Math.pow(2.0, Math.floor(this.pet.Level() / 50.0)) * this.#data.monster.petStatsMultiplier.Value() * this.#data.stats.BasicStats(heroKind, BasicStatsKind.HP).Mul();
    // if (this.isLogStats[heroKind] && a >= 1.0)
    //   a = MonsterParameter.monsterStats[this.species][this.colorId][0] + Math.log(a, Multiplier.logBase);
    // num2 = a + this.#data.stats.BasicStats(heroKind, BasicStatsKind.HP).After();
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
  Mp(level, difficulty) {
    return 10.0;
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
  Atk(level, difficulty) {
    if (this.color == MonsterColor.Metal) return MonsterParameter.monsterStats[this.species][this.colorId][2] * level;
    let num1 = MonsterParameter.monsterStats[this.species][this.colorId][2];
    let num2;
    // if (isPet) {
    //   a = num1 * (1.0 + this.pet.Level() * 0.75) * (1.0 + 0.05 * this.pet.loyalty.value) * Math.pow(2.0, Math.floor(this.pet.Level() / 50.0)) * this.#data.monster.petStatsMultiplier.Value() * this.#data.stats.BasicStats(heroKind, BasicStatsKind.ATK).Mul() * this.#data.stats.heroes[heroKind].summonPetATKMATKMultiplier.Value();
    //   if (this.isLogStats[heroKind] && a >= 1.0)
    //     a = MonsterParameter.monsterStats[this.species][this.colorId][2] + Math.log(a, Multiplier.logBase);
    //   num2 = a + this.#data.stats.BasicStats(heroKind, BasicStatsKind.ATK).After();
    // }
    // else {
    num2 = num1 * (1.0 + level * 0.75 + 20.0 * Math.pow(level / 100.0, 3.0) + 100.0 * Math.pow(level / 250.0, 5.0));
    if (level >= 400) num2 *= Math.pow(3.0, (level - 400) / 100.0);
    if (level >= 500) num2 *= Math.pow(5.0, (level - 500) / 100.0);
    if (level >= 1000) num2 *= Math.pow(10.0, (level - 1000) / 100.0);
    // }
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
    // let a = MonsterParameter.monsterStats[this.species][this.colorId][6] * this.#data.stats.BasicStats(heroKind, BasicStatsKind.SPD).Mul() * this.#data.stats.heroes[heroKind].summonPetSPDMoveSpeedMultiplier.Value() * (1.0 + 0.05 * this.pet.loyalty.value) * Math.pow(2.0, Math.floor(this.pet.Level() / 50.0)) * this.#data.monster.petStatsMultiplier.Value();
    // if (this.isLogStats[heroKind] && a >= 1.0)
    //   a = MonsterParameter.monsterStats[this.species][this.colorId][6] + Math.log(a, Multiplier.logBase);
    // return a + this.#data.stats.BasicStats(heroKind, BasicStatsKind.SPD).After();
  }

  Fire() {
    // if (!isPet)
    return MonsterParameter.monsterStats[this.species][this.colorId][7];
    // let num = MonsterParameter.monsterStats[this.species][this.colorId][7] * this.#data.stats.HeroStats(heroKind, Stats.FireRes).Mul();
    // if (this.isLogStats[heroKind] && num >= 0.01)
    //   num = MonsterParameter.monsterStats[this.species][this.colorId][7] + Math.log(num * 100.0, Multiplier.logBase) / 100.0;
    // return num + this.#data.stats.HeroStats(heroKind, Stats.FireRes).After();
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
  PhyCrit(level) {
    return 0.01 * Math.log2(1 + level);
  }

  MagCrit(level) {
    return 0.01 * Math.log2(1 + level);
  }

  CriticalDamage() {
    return 2.0;
  }

  DebuffResistance() {
    if (this.species == MonsterSpecies.ChallengeBoss) {
      switch (this.challengeMonsterKind) {
        case ChallengeMonsterKind.Florzporb:
          return 0.0;
        case ChallengeMonsterKind.Arachnetta:
          return 0.05;
        case ChallengeMonsterKind.GuardianKor:
          return 0.1;
        case ChallengeMonsterKind.Nostro:
          return 0.2;
        case ChallengeMonsterKind.LadyEmelda:
          return 0.5;
        case ChallengeMonsterKind.NariSune:
          return 0.9;
        case ChallengeMonsterKind.Octobaddie:
          return 0.9999;
        case ChallengeMonsterKind.Bananoon:
          return 0.99999;
        case ChallengeMonsterKind.Glorbliorbus:
          return 1.0;
        case ChallengeMonsterKind.DistortionSlime:
          return 1.0;
      }
    }
    return 0.0;
  }

  Exp(level, difficulty) {
    let num =
      (25.0 + 3.0 * (2 * level + 2.0 * Math.pow(level / 10.0, 2.0) + 5.0 * Math.pow(level / 50.0, 3.0) + 10.0 * Math.pow(level / 100.0, 4.0))) *
      Math.pow(2.0, difficulty / 10.0) *
      MonsterParameter.ColorFactor(this.color) *
      MonsterParameter.SpeciesFactor(this.species);
    if (level >= 400) num *= Math.pow(2.0, (level - 400) / 100.0);
    if (level >= 500) num *= Math.pow(2.0, (level - 500) / 100.0);
    if (level >= 600) num *= Math.pow(2.0, (level - 600) / 100.0);
    if (level >= 700) num *= Math.pow(2.0, (level - 700) / 100.0);
    if (level >= 800) num *= Math.pow(2.0, (level - 800) / 100.0);
    if (level >= 900) num *= Math.pow(2.0, (level - 900) / 100.0);
    return num;
  }

  Damage(level, difficulty) {
    return this.AttackElement() == Element.Physical ? this.Atk(level, difficulty) : this.MAtk(level, difficulty);
  }

  get colorId() {
    return this.species == MonsterSpecies.ChallengeBoss ? this.challengeMonsterKind : this.color;
  }

  MoveSpeed(level: number = 0, difficulty: number = 0, isPet: boolean = false, heroKind: HeroKind = HeroKind.Warrior) {
    // if (!isPet)
    //   return  (50.0 + 20.0 * this.Spd(level, difficulty, isPet, heroKind));
    // let num =  (25.0 + 10.0 * this.Spd(level, difficulty, false, heroKind)) *  this.#data.stats.HeroStats(heroKind, Stats.MoveSpeed).multiplicative *  this.#data.stats.heroes[heroKind].summonPetSPDMoveSpeedMultiplier.Value();
    // if (this.isLogStats[(int) heroKind] &&  num >= 100.0)
    //   num =  (25.0 +  Mathf.Log(num / 100,  Multiplier.logBase) * 100.0);
    // return num +  this.#data.stats.HeroStats(heroKind, Stats.MoveSpeed).After();
    return 1;
  }

  DefeatedNumHero(isMutant = false, heroKind: HeroKind) {
    let saveId = this.color + 10 * heroKind;
    let saveIdChallenge = heroKind + 10 * this.challengeMonsterKind;
    switch (this.species) {
      case MonsterSpecies.Slime:
        return isMutant ? this.data.source.monsterMutantDefeatedNumsSlime[saveId] : this.data.source.monsterDefeatedNumsSlime[saveId];
      case MonsterSpecies.MagicSlime:
        return isMutant ? this.data.source.monsterMutantDefeatedNumsMagicSlime[saveId] : this.data.source.monsterDefeatedNumsMagicSlime[saveId];
      case MonsterSpecies.Spider:
        return isMutant ? this.data.source.monsterMutantDefeatedNumsSpider[saveId] : this.data.source.monsterDefeatedNumsSpider[saveId];
      case MonsterSpecies.Bat:
        return isMutant ? this.data.source.monsterMutantDefeatedNumsBat[saveId] : this.data.source.monsterDefeatedNumsBat[saveId];
      case MonsterSpecies.Fairy:
        return isMutant ? this.data.source.monsterMutantDefeatedNumsFairy[saveId] : this.data.source.monsterDefeatedNumsFairy[saveId];
      case MonsterSpecies.Fox:
        return isMutant ? this.data.source.monsterMutantDefeatedNumsFox[saveId] : this.data.source.monsterDefeatedNumsFox[saveId];
      case MonsterSpecies.DevilFish:
        return isMutant ? this.data.source.monsterMutantDefeatedNumsDevilFish[saveId] : this.data.source.monsterDefeatedNumsDevilFish[saveId];
      case MonsterSpecies.Treant:
        return isMutant ? this.data.source.monsterMutantDefeatedNumsTreant[saveId] : this.data.source.monsterDefeatedNumsTreant[saveId];
      case MonsterSpecies.FlameTiger:
        return isMutant ? this.data.source.monsterMutantDefeatedNumsFlameTiger[saveId] : this.data.source.monsterDefeatedNumsFlameTiger[saveId];
      case MonsterSpecies.Unicorn:
        return isMutant ? this.data.source.monsterMutantDefeatedNumsUnicorn[saveId] : this.data.source.monsterDefeatedNumsUnicorn[saveId];
      case MonsterSpecies.Mimic:
        return isMutant ? this.data.source.monsterMutantDefeatedNumsMimic[saveId] : this.data.source.monsterDefeatedNumsMimic[saveId];
      case MonsterSpecies.ChallengeBoss:
        return isMutant ? this.data.source.monsterMutantDefeatedNumsChallenge[saveIdChallenge] : this.data.source.monsterDefeatedNumsChallenge[saveIdChallenge];

      default:
        return 0;
    }
  }

  DefeatedNum(isMutant = false) {
    let num = 0.0;

    for (let index = 0; index < Enums.HeroKind; ++index) {
      if (isMutant) num += this.DefeatedNumHero(true, index);
      else num += this.DefeatedNumHero(false, index);
    }
    return num;
  }

  CapturedNum(isMutant = false) {
    let num = 0.0;
    for (let index = 0; index < Enums.HeroKind; ++index) {
      if (isMutant) num += this.CapturedNumHero(true, index);
      else num += this.CapturedNumHero(false, index);
    }
    return num;
  }

  CapturedNumHero(isMutant = false, heroKind: HeroKind) {
    let saveId = this.color + 10 * heroKind;
    let saveIdChallenge = heroKind + 10 * this.challengeMonsterKind;
    switch (this.species) {
      case MonsterSpecies.Slime:
        return isMutant ? this.data.source.monsterMutantCapturedNumsSlime[saveId] : this.data.source.monsterCapturedNumsSlime[saveId];
      case MonsterSpecies.MagicSlime:
        return isMutant ? this.data.source.monsterMutantCapturedNumsMagicSlime[saveId] : this.data.source.monsterCapturedNumsMagicSlime[saveId];
      case MonsterSpecies.Spider:
        return isMutant ? this.data.source.monsterMutantCapturedNumsSpider[saveId] : this.data.source.monsterCapturedNumsSpider[saveId];
      case MonsterSpecies.Bat:
        return isMutant ? this.data.source.monsterMutantCapturedNumsBat[saveId] : this.data.source.monsterCapturedNumsBat[saveId];
      case MonsterSpecies.Fairy:
        return isMutant ? this.data.source.monsterMutantCapturedNumsFairy[saveId] : this.data.source.monsterCapturedNumsFairy[saveId];
      case MonsterSpecies.Fox:
        return isMutant ? this.data.source.monsterMutantCapturedNumsFox[saveId] : this.data.source.monsterCapturedNumsFox[saveId];
      case MonsterSpecies.DevilFish:
        return isMutant ? this.data.source.monsterMutantCapturedNumsDevilFish[saveId] : this.data.source.monsterCapturedNumsDevilFish[saveId];
      case MonsterSpecies.Treant:
        return isMutant ? this.data.source.monsterMutantCapturedNumsTreant[saveId] : this.data.source.monsterCapturedNumsTreant[saveId];
      case MonsterSpecies.FlameTiger:
        return isMutant ? this.data.source.monsterMutantCapturedNumsFlameTiger[saveId] : this.data.source.monsterCapturedNumsFlameTiger[saveId];
      case MonsterSpecies.Unicorn:
        return isMutant ? this.data.source.monsterMutantCapturedNumsUnicorn[saveId] : this.data.source.monsterCapturedNumsUnicorn[saveId];
      case MonsterSpecies.Mimic:
        return isMutant ? this.data.source.monsterMutantCapturedNumsMimic[saveId] : this.data.source.monsterCapturedNumsMimic[saveId];
      case MonsterSpecies.ChallengeBoss:
        return isMutant ? this.data.source.monsterMutantCapturedNumsChallenge[saveIdChallenge] : this.data.source.monsterCapturedNumsChallenge[saveIdChallenge];
      default:
        return 0.0;
    }
  }

  MonsterName() {
    return this.species == MonsterSpecies.ChallengeBoss
      ? ChallengeMonsterKind[this.challengeMonsterKind]
      : `${Localization.MonsterSpeciesName(this.species)} ${MonsterColor[this.color]}`;
  }
}
