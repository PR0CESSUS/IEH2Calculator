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
    this.nitroCap.name = "Nitro Cap";
    this.maxNitroSpeed = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 2.0));
    this.nitroCap.numberType = NumberType.Normal;
  }

  ModifiedOfflineTimesec(nitro = this.nitroCap.Value()) {
    let num = 0.0;
    for (let index = 1; index < 10; ++index) {
      if (nitro >= index * 86400) {
        num += 86400.0 / index;
      } else {
        num += (nitro - 86400 * (index - 1)) / index;
        break;
      }
    }
    if (nitro >= 777600.0) num += (nitro - 777600.0) / 10.0;

    return num;
  }
}
