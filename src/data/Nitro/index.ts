import { Multiplier } from "../Multiplier";
import { MultiplierInfo } from "../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { NumberType } from "../../type/NumberType";

export class DataNitro {
  nitroCap: Multiplier;
  maxNitroSpeed: Multiplier;
  constructor() {
    this.nitroCap = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 5000.0));
    this.maxNitroSpeed = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 2.0));
    this.nitroCap.numberType = NumberType.Normal;
  }
}
