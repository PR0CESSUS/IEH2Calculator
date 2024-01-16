import { Multiplier } from "../../Multiplier";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { PotionKind } from "../../type/PotionKind";

export class DataNitro {
  nitroCap: Multiplier;
  //   nitro: Nitro;
  maxNitroSpeed: Multiplier;
  //   speed: NitroSpeed;
  isActive;
  nitroTimescale = 2;
  lastTime;
  //   switchUIAction: Action;
  tempNitroSpeed;

  constructor() {
    this.nitroCap = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 5000.0));
    this.nitroCap.Calculate();
    // this.nitro = new Nitro((() => this.nitroCap.Value()));
    // this.nitro.runOutAction = new Action(this.AutoAlchemiseForNitroAction);
    this.maxNitroSpeed = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 2.0));
    // this.speed = new NitroSpeed((() => this.maxNitroSpeed.Value()), (() => 1.5));
    this.maxNitroSpeed.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => this.nitroTimescale - 2.0));
  }

  //   get nitroConsumption() {return this.speed.value - 1.0;}
}
