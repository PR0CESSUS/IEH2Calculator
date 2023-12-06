import { PotionKind } from "../../type/PotionKind";
import { EquipmentSet } from "./EquipmentSet";

export type EquipmentPotionData = {
  kind: PotionKind;
  stack: number;
};

export class EquipmentPotion {
  set: EquipmentSet;
  kind: PotionKind = 0;
  stack: number = 0;
  index: number = 0;

  constructor(data: EquipmentPotionData) {
    this.kind = data.kind;
    this.stack = data.stack;
  }

  get level() {
    return globalThis.data.potion.GlobalInfo(this.kind).level;
  }
}
