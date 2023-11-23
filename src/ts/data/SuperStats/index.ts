import { Enums } from "../../Enums";
import { HeroKind } from "../../type/HeroKind";
import { HeroSuperStats } from "./HeroSuperStats";

export class SuperStatsController {
  heroes: HeroSuperStats[] = Array(Enums.HeroKind);
  constructor() {
    for (let index = 0; index < this.heroes.length; index++) {
      this.heroes[index] = new HeroSuperStats(index);
    }
  }
  Start() {
    for (let index = 0; index < this.heroes.length; index++) this.heroes[index].Start();
  }
  Hero(heroKind: HeroKind) {
    return this.heroes[heroKind];
  }
}
