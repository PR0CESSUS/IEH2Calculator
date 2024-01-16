import { MultiplierInfo, Multiplier } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { Enums } from "../../Enums";

export class DataBlessingInfo {
  effectMultipliers: Multiplier[] = Array(Enums.HeroKind);
  duration = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 180.0));

  constructor() {
    for (let index = 0; index < this.effectMultipliers.length; index++) this.effectMultipliers[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  }

  SetEffectMultiplier(info: MultiplierInfo) {
    for (let index = 0; index < this.effectMultipliers.length; index++) this.effectMultipliers[index].RegisterMultiplier(info);
  }
}
