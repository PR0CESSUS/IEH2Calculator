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

  constructor(species: MonsterSpecies, color: MonsterColor) {
    this.species = species;
    this.color = color;
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

  get colorId() {
    return this.species == MonsterSpecies.ChallengeBoss ? this.challengeMonsterKind : this.color;
  }
}
