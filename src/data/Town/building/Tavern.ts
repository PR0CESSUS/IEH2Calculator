import { BuildingKind } from "@/type/BuildingKind";
import { BUILDING } from "../BUILDING";
import { DATA } from "@/Data";

export class Tavern extends BUILDING {
  constructor(DATA: DATA) {
    super(DATA);
    this.kind = BuildingKind.Tavern;
  }

  EffectValue() {
    return this.Level() * 0.05 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[0].Value();
  }

  SetEffect() {}

  SetResearch() {}
}
