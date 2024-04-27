import { DATA } from "..";
import { Enums } from "../../Enums";
import { HeroKind } from "../../type/HeroKind";
import { HeroSuperStats } from "./HeroSuperStats";

export class DataSuperStats {
  data: DATA;
  heroes: HeroSuperStats[] = Array(Enums.HeroKind);
  constructor(DATA: DATA) {
    this.data = DATA;
    for (let index = 0; index < this.heroes.length; index++) {
      this.heroes[index] = new HeroSuperStats(this.data, index);
    }
  }
  Start() {
    for (let index = 0; index < this.heroes.length; index++) this.heroes[index].Start();
  }
  Hero(heroKind: HeroKind) {
    return this.heroes[heroKind];
  }

  get currentHero() {
    return this.heroes[this.data.source.currentHero];
  }
}
