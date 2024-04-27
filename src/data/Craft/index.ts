import { Multiplier, MultiplierInfo } from "../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
export class DataCraft {
  costReduction: Multiplier;
  constructor() {
    this.costReduction = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0),
      () => 0.9,
      () => 0.0
    );
  }
}
