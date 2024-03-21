import { MultiplierInfo, Multiplier } from "../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Enums } from "../../Enums";
import { BLESSING } from "./BLESSING";
import { DATA } from "..";

export class DataBlessingInfo {
  data: DATA;
  effectMultipliers: Multiplier[] = Array(Enums.HeroKind);
  duration: Multiplier;
  heroes: BLESSING[][] = Array(Enums.HeroKind);

  constructor(DATA: DATA) {
    this.data = DATA;
    this.duration = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 180.0));
    for (let index = 0; index < this.effectMultipliers.length; index++) {
      this.effectMultipliers[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
      this.effectMultipliers[index].name = "Blessing Effect";
    }

    for (let index = 0; index < this.heroes.length; index++) {
      this.heroes[index] = [];
      for (let i = 0; i < 8; i++) {
        this.heroes[index].push(new BLESSING(this.data, index, i));
      }
    }
  }

  SetEffectMultiplier(info: MultiplierInfo) {
    for (let index = 0; index < this.effectMultipliers.length; index++) this.effectMultipliers[index].RegisterMultiplier(info);
  }

  Start() {
    for (let index = 0; index < this.heroes.length; index++) {
      for (let i = 0; i < 8; i++) {
        this.heroes[index][i].Start();
      }
    }
  }
}
