import { BuildingKind } from "@/type/BuildingKind";
import { BUILDING } from "../BUILDING";

export class Tavern extends BUILDING {
  get kind() {
    return BuildingKind.Tavern;
  }
  EffectValue() {
    return this.Level() * 0.05 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[0].Value();
  }

  SetEffect() {}

  SetResearch() {}
}
